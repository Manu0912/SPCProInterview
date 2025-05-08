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

---

# 📊 SPCProInterview - Frontend

This is an Angular frontend that provides a modern and responsive user interface for statistical analysis.

---

## ✅ Frontend Prerequisites

Ensure you have installed:

- **Node.js** (v18 or later recommended): https://nodejs.org/
- **npm** (comes with Node.js)
- **Angular CLI** (v19 or later): `npm install -g @angular/cli`

---

## 🚀 Frontend Installation

```bash
cd SPCProInterview/frontend
npm install
```

---

## 📦 Frontend Scripts

```bash
npm start          # Start development server
npm run build     # Build for production
npm run test      # Run unit tests
```

---

## 📁 Frontend Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable components
│   │   ├── services/       # Business logic and services
│   │   ├── models/         # Interfaces and types
│   │   ├── shared/         # Shared components and utilities
│   │   └── app.module.ts   # Main module
│   ├── assets/            # Static resources
│   ├── environments/      # Environment configurations
│   └── styles/           # Global styles
├── angular.json          # Angular configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

---

## 🎨 Main Frontend Technologies

- **Angular 19**: Main framework
- **PrimeNG**: UI component library
- **PrimeFlex**: CSS utilities system
- **RxJS**: Reactive programming
- **TypeScript**: Programming language

---

## 🚀 Starting the Frontend

```bash
cd frontend
npm start
```

The application will start at `http://localhost:4200` by default.

---

## 📦 Frontend Production Build

```bash
npm run build
```

Production files will be generated in the `dist/` directory.

---
