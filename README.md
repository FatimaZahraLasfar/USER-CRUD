# USER-CRUD

A simple full-stack CRUD (Create, Read, Update, Delete) web application for user management built with **React.js**, **Express.js**, **Node.js**, and **Axios**.

---

# Features

* Add new users
* Display all users
* Edit user information
* Delete users
* REST API with Express.js
* React Hooks (`useState`, `useEffect`)
* API calls using Axios
* Responsive and modern UI

---

# Technologies Used

## Frontend

* React.js
* Axios
* CSS3

## Backend

* Node.js
* Express.js
* CORS

---

# Project Structure

```bash
USER-CRUD/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserForm.js
│   │   │   └── UserList.js
│   │   │
│   │   ├── App.js
│   │   └── styles.css
│   │
│   ├── package.json
│   └── .gitignore
│
├── .gitignore
└── README.md
```

---

# Installation

## 1. Clone the repository

```bash
git clone https://github.com/FatimaZahraLasfar/USER-CRUD.git
```

---

## 2. Backend Setup

```bash
cd USER-CRUD/backend
npm install
npm start
```

Backend server runs on:

```bash
http://localhost:5000
```

---

## 3. Frontend Setup

Open another terminal:

```bash
cd USER-CRUD/frontend
npm install
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# API Endpoints

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/users`     | Get all users   |
| GET    | `/users/:id` | Get single user |
| POST   | `/users`     | Create new user |
| PUT    | `/users/:id` | Update user     |
| DELETE | `/users/:id` | Delete user     |

---

# CRUD Operations

## Create User

Users can add a new user by entering:

* Name
* Email

---

## Read Users

All users are displayed dynamically from the API.

---

## Update User

Users can modify existing user information.

---

## Delete User

Users can remove a user from the list.

---

# Screenshots

## Main Interface

Add your screenshot here:

<img width="791" height="717" alt="image" src="https://github.com/user-attachments/assets/4c11ce5a-20a2-4dd0-9620-5cbf499de04c" />
---

## Add User


<img width="587" height="84" alt="image" src="https://github.com/user-attachments/assets/fc92938c-7d3a-4dce-8138-40f5c7cc63bd" />


---

## Edit User

<img width="579" height="89" alt="image" src="https://github.com/user-attachments/assets/80078612-cce6-4a27-9807-b0911db54edb" />

---

# UI Design

The interface includes:

* Responsive layout
* Modern card design
* Hover effects
* Styled buttons
* Clean input fields

---

# React Concepts Used

* Functional Components
* Props
* useState()
* useEffect()
* Conditional Rendering
* Event Handling
* API Integration

---

# Author

**Fatima Zahra Lasfar**

GitHub:
https://github.com/FatimaZahraLasfar

---

## Live Demo

Frontend Application:
https://user-crud-gamma.vercel.app/

Backend API:
https://user-crud-production-becf.up.railway.app/

# License

This project is open-source and available for educational purposes.
