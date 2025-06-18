# 📦 Express.js Products API

A RESTful API built with **Express.js** to manage a list of products. This project includes CRUD operations, middleware, error handling, filtering, pagination, search, and basic statistics.

---

## 🛠️ Setup Instructions

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### 📁 Installation Steps

1. **Clone your repository:**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-elijahok.git
   cd week-2-express-js-assignment-elijahok
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. Server will run on `http://localhost:3000`

---

## 📌 API Endpoints

### 🔄 Base Route: `/api/products`

| Method | Endpoint                 | Description                         |
|--------|--------------------------|-------------------------------------|
| GET    | `/api/products`          | Get all products (with optional pagination & filtering) |
| GET    | `/api/products/:id`      | Get a product by ID                 |
| POST   | `/api/products`          | Create a new product                |
| PUT    | `/api/products/:id`      | Update a product by ID              |
| DELETE | `/api/products/:id`      | Delete a product by ID              |
| GET    | `/api/products/search?name=abc` | Search products by name    |
| GET    | `/api/products/stats`    | Get statistics (count by category)  |

---

## 🔍 Query Parameters

- **Pagination:**
  - `?page=1&limit=10`
- **Filtering by category:**
  - `?category=electronics`
- **Search by name:**
  - `/api/products/search?name=laptop`

---

## 🧪 Example Request & Response

### ✅ Create a Product
**POST** `/api/products`
```json
{
  "name": "Laptop",
  "description": "14-inch touchscreen",
  "price": 899.99,
  "category": "electronics",
  "inStock": true
}
```

**Response:**
```json
{
  "id": "generated-uuid",
  "name": "Laptop",
  "description": "14-inch touchscreen",
  "price": 899.99,
  "category": "electronics",
  "inStock": true
}
```

---

## 🧱 Project Structure

```
.
├── server.js
├── routes/
│   └── productRoutes.js
├── controllers/
│   ├── productController.js
│   └── advancedController.js
├── middleware/
│   ├── logger.js
│   ├── auth.js
│   ├── validate.js
│   └── errorHandler.js
├── utils/
│   └── errors.js
└── README.md
```

---

## 🔐 Authentication

- Add `x-api-key` header to requests:
  ```
  x-api-key: your-api-key
  ```
- If missing or incorrect, the API will return `401 Unauthorized`.

---

## 📄 Environment Variables

Create a `.env` file with the following:

```
API_KEY=your-api-key
PORT=3000
```

Provide a `.env.example` file with the same variables but placeholder values.

---

## 🧰 Technologies Used

- Express.js
- UUID
- Node.js
- Body-parser
- JavaScript

---

## ✅ Author

**Elijah Ok**  
Kenyatta University – School of Economics  
GitHub Classroom Student Repo
