# 📊 SPCProInterview - Backend

This is a Node.js backend that provides a basic API for statistical analysis functionality.

---

## ✅ Prerequisites

Ensure the following are installed:

- **Node.js** (v18 or later recommended): https://nodejs.org/
- **npm** (comes with Node.js)

---

## 🚀 Installation

git clone https://github.com/Manu0912/SPCProInterview.git
cd SPCProInterview/api
npm install

---

## 📦 Scripts

```
npm start # Run the server
npm run dev # Run the server with nodemon
```

---

## 📁 Project Structure

```
api/
├── src/
│   ├── config/
│   │   └── index.js
│   ├── controllers/
│   │   └── analysisController.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   │   └── validatePayload.js
│   ├── routes/
│   │   └── analysisRoutes.js
│   ├── services/
│   │   └── statisticsService.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 🔧 Environment Variables

Create a `.env` file in the root (`api/`) directory:

PORT=3000

---

## 🔌 Starting the API

npm run dev

The server should start on the port specified in `.env`. By default, it listens on port `3000`.
