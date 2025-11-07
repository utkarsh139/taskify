<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<h1 align="center">TASKIFY</h1>
<p align="center">
	<em><code>❯ A modern MERN stack task management app</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/utkarsh139/taskify?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/utkarsh139/taskify?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/utkarsh139/taskify?style=default&color=0080ff" alt="repo-language-count">
</p>

---

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🤖 Usage](#-usage)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

**Taskify** is a modern full-stack task management web app designed to help users efficiently organize and track their daily tasks.  
It provides a clean and responsive dashboard to manage your workflow — from task creation to completion — built with the **MERN Stack (MongoDB, Express.js, React, Node.js)**.

---

## 👾 Features

- 🔐 Secure user authentication with JWT  
- 🧾 Full CRUD functionality for tasks  
- 🗂 Task categorization: *Yet to Start*, *In Progress*, *Completed*  
- 🎨 Responsive UI built with TailwindCSS  
- ⚙️ RESTful API architecture  
- 💾 MongoDB integration for persistent data storage  
- ⚡ Smooth, real-time UI interactions  

---

## 📁 Project Structure

```sh
taskify/
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── server/
    ├── controllers/
    ├── models/
    ├── middleware/
    ├── connection/
    ├── service/
    ├── app.js
    └── package.json
# 🚀 Getting Started

## 🧩 Setup Instructions

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/utkarsh139/taskify](https://github.com/utkarsh139/taskify)
    cd taskify
    ```

    Open two integrated terminals in your IDE

    **Terminal 1 → Client**

    ```sh
    cd client
    npm i
    ```

    **Terminal 2 → Server**

    ```sh
    cd server
    npm i
    ```

    Create a **.env** file inside the **server** folder and add the following:

    ```
    PORT=your_port_number
    JWT_SECRET=your_secret_key
    NODE_ENV=production
    MONGO_URI=your_mongodb_connection_string
    ```

    Start both servers

    **Backend (Server)**

    ```sh
    nodemon app.js
    ```

    **Frontend (Client)**

    ```sh
    npm run dev
    ```

    Open the app in your browser:
    👉 [http://localhost:5173](http://localhost:5173)

---

## 🤖 Usage

Once both servers are running:

* Register or login to your account.
* Add, edit, or delete tasks easily.
* Track progress through *Yet to Start*, *In Progress*, and *Completed* categories.
* Your tasks are saved securely in **MongoDB**.

---

## 📌 Project Roadmap

* [x] JWT Authentication System
* [x] Task CRUD Functionality
* [x] Responsive Dashboard (TailwindCSS)
* [ ] Drag-and-Drop Task Reordering
* [ ] Dark Mode Feature
* [ ] Notification & Reminder System

---

## 🔰 Contributing

Contributions are always welcome! To get started:

```sh
# 1. Fork the repository
git fork [https://github.com/utkarsh139/taskify](https://github.com/utkarsh139/taskify)

# 2. Create a new branch
git checkout -b feature-name

# 3. Make your changes and commit
git commit -m "Added new feature"

# 4. Push your branch
git push origin feature-name
