# 🔥 Flames Backend API

This is a simple Node.js + Express backend API for calculating FLAMES relationship results between two names. It is designed to be used with any frontend application (for example, one hosted on GitHub Pages).

---

## 🛠 Tech Stack

- Node.js
- Express.js
- CORS (for cross-origin frontend requests)

---

## 🚀 API Endpoint

### `POST /flames`

**URL Example:**
https://flames-backend-api.onrender.com/flames

**Request Body (JSON):**
```json
{
  "person1": "Alice",
  "person2": "Bob"
}
```
**Response Example:**
```json
{
  "result": "Friends"
}
```

**Run Locally**
1. Clone the repository:
   git clone https://github.com/franklinMN/flames-backend-api.git
   cd flames-backend-api
2. Install dependencies:
   npm install
3. Start the server:
   npm start
Server will run on http://localhost:3000

🌐 CORS Support
This API supports requests from other origins (like GitHub Pages) using the cors middleware.

**🔗 Frontend Integration Example**
```javascript
fetch("https://<your-backend-url>.onrender.com/flames", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    person1: "Alice",
    person2: "Bob"
  })
})
.then(res => res.json())
.then(data => {
  console.log(data.result); // e.g., "Friends"
});
```

📄 License
MIT

👤 Author
Franklin Maria Nayagam
GitHub: @franklinMN
