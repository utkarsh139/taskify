const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (username.length < 6) {
      return res.status(400).json({ error: "Username must have 6 characters" });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must have 6 characters" });
    }
    const checkUsers = await User.findOne({ $or: [{ email }, { username }] });
    if (checkUsers) {
      return res
        .status(400)
        .json({ error: "Username or Email already exists" });
    } else {
      const hashPass = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashPass });
      await newUser.save();
      return res.status(200).json({ success: "Registered Successfully" });
    }
  } catch (error) {
    return res.status(404).json({ error: "Internal server error!" });
  }
};

//login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      bcrypt.compare(password, checkUser.password, (err, data) => {
        if (data) {
          const token = jwt.sign(
            { id: checkUser._id, email: checkUser.email },
            process.env.JWT_SECRET,
            {
              expiresIn: "30d",
            }
          );
          res.cookie("taskifyUserToken", token, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === "production",
            sameSite: "None",
          });
          return res.status(200).json({ success: "Login Success" });
        } else {
          return res.status(400).json({ error: "Invalid Credentials" });
        }
      });
    } else {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Internal server error!" });
  }
};

//getUserDetails
const userDetails = async (req, res) => {
  try {
    const { user } = req;
    const getDetails = await User.findById(user._id)
      .populate("tasks")
      .select("-password");
    if (getDetails) {
      const allTasks = getDetails.tasks;
      let yetToStart = [];
      let inProgress = [];
      let completed = [];
      allTasks.map((items) => {
        if (items.status == "yetToStart") {
          yetToStart.push(items);
        } else if (items.status == "inProgress") {
          inProgress.push(items);
        } else {
          completed.push(items);
        }
      });
      return res.status(200).json({
        success: "success",
        tasks: [{ yetToStart }, { inProgress }, { completed }],
      });
    }
  } catch (error) {
    //console.log(error);
    return res.status(404).json({ error: "Internal server error!" });
  }
};

//logout

const logout = async (req, res) => {
  try {
    res.clearCookie("taskifyUserToken", {
      httpOnly: true,
    });
    res.json({ message: "Logged out" });
  } catch (error) {
    return res.status(404).json({ error: "Internal server error!" });
  }
};
module.exports = { register, login, userDetails, logout };
