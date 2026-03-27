# 💰 Expense Tracker (MERN Stack)

A full-stack Expense Tracker application built using the **MERN Stack (MongoDB, Express, React, Node.js)**. This project allows users to manage their income and expenses, categorize transactions, and view financial data through a simple and intuitive interface.

---

## 🚀 Features

### 🔐 Authentication

* User Registration & Login
* Secure authentication using JWT
* Password hashing using bcrypt
* Update profile & change password

### 📂 Categories

* Create income & expense categories
* Update and delete categories
* Prevent duplicate categories per user

### 💸 Transactions

* Add income and expense transactions
* Link transactions to categories
* View all transactions
* Filter transactions by type or category

### 📊 Dashboard

* Overview of income vs expenses
* Track financial activity easily

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios / Fetch API
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Authentication & Security

* JSON Web Token (JWT)
* bcryptjs
* express-async-handler

---

## 📁 Project Structure

```
ExpenseTracker/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── model/
│   ├── middlewares/
│   ├── utils/
│   └── app.js
│
├── frontend/
│   └── expense-tracker/
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/navneetk11/ExpenseTracker.git
cd ExpenseTracker
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend/expense-tracker
npm install
npm run dev
```

---

## 🔄 API Endpoints (Sample)

### 👤 User

* POST `/api/users/register`
* POST `/api/users/login`
* PUT `/api/users/profile`
* PUT `/api/users/password`

### 📂 Categories

* POST `/api/category`
* GET `/api/category`
* PUT `/api/category/:id`
* DELETE `/api/category/:id`

### 💸 Transactions

* POST `/api/transactions`
* GET `/api/transactions`

---

## 🧪 Testing

* Use **Postman** to test backend APIs
* Test authentication, categories, and transactions

---

## 📚 Learning Outcomes

This project helped in understanding:

* Full-stack MERN architecture
* REST API design
* Authentication & authorization
* MongoDB schema relationships
* State management in React

---

## 🎯 Future Improvements

* Add charts & analytics (graphs)
* Add budget limits
* Mobile responsive UI improvements
* Deployment (Render / Vercel)

---


## 📌 Author

* Developed by **Navneet**
* GitHub: https://github.com/navneetk11

---
# ExpenseTracker
