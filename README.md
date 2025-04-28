# 📋 Task Manager App

A full-stack web application where users can:

- Sign up and log in securely
- Create, edit, complete, and delete tasks
- Track task creation and completion dates
- Filter tasks by All, Active, Completed
- Task priorities (Low, Medium, High)

---

## ⚙️ Tech Stack

- Frontend: **React.js**, **TailwindCSS**, **Axios**, **React Router**
- Backend: **Node.js**, **Express.js**, **PostgreSQL** (with **Prisma ORM**)
- Authentication: **JWT (JSON Web Token)**

---

# 🚀 How to Run Locally

Follow these steps to run the project on your machine:

---
## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app

```
## 2. Setup Backend (Express + PostgreSQL)
```bash
cd backend
npm install
```
Start backend server:
```bash
npm run dev
```
Backend server runs at:
http://localhost:5000

## 3. Setup Frontend (React + TailwindCSS)
```bash
cd ../frontend
npm install
```
✅ Start the frontend app:
```bash
npm start
```
Frontend runs at:
http://localhost:3000

##  Seeded Users
The following users are pre-created for easy login and testing:

Name     | Email                   | Password
------------------------------------------------
Shahin   | shahinsubair0@gmail.com | 12345678
Jacob    | jacob0@gmail.com        | 09876543
Anna     | anna0@gmail.com         | 13579


## 📋 Features Summary
JWT Authentication (Signup/Login)
CRUD operations for Tasks
Priority levels (Low, Medium, High)
Filter Tasks (All, Active, Completed)
Show Created Date and Completed Date
Fully responsive TailwindCSS frontend
SQL Database (PostgreSQL with Prisma ORM)
