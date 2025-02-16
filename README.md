# RefPay Backend 🏦🚀

Welcome to the **RefPay** backend! This is the server-side of the referral system, built using **Node.js**, **Express**, and **MySQL**. It handles referral submissions and database interactions.

---

## 📌 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL 
- **Prisma ORM**
- **API Testing:** Postman / Thunder Client

---

## 📂 Project Structure

```
📁 refpay-backend
├── 📁 Prisma          # Database configuration
├── 📁 controllers     # Handles business logic
├── 📁 models         
├── 📁 routes          # API endpoints
├── server.js         # Main server file
├── .env              # Environment variables
├── package.json      # Dependencies & scripts
└── README.md         # Project documentation
```

---

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository 🛠️
```bash
$ git clone https://github.com/your-username/refpay-backend.git
$ cd refpay-backend
```

### 2️⃣ Install Dependencies 📦
```bash
$ npm install
```

### 3️⃣ Configure Environment Variables 🌍
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
DB_URL=your local SQL URI
```
> ⚠️ **Note:** Never share your `.env` file publicly. Use `.gitignore` to exclude it.

### 4️⃣ Run the Server 🚀
```bash
$ npm start
```
The backend will start on `http://localhost:5000`.

---

## 🛠 API Endpoints

### 1️⃣ Submit a Referral 🎓
**Endpoint:** `POST /api/referral`
```json
{
  "yourName": "John Doe",
  "friendsName": "Jane Doe",
  "friendsEmail": "jane@example.com",
  "friendsPhone": "1234567890",
  "course": "MERN Stack"
}
```
**Response:**
```json
{
  "message": "Referral submitted successfully!"
}
```

### 2️⃣ Get All Referrals 📋
**Endpoint:** `GET /api/referrals`

---

## 📌 Useful Commands
| Command           | Description                     |
|------------------|--------------------------------|
| `npm install`    | Install dependencies           |
| `npm start`      | Start the server               |
| `npm run dev`    | Start the server in dev mode   |
| `mysql -h ...`   | Connect to the remote database |

---

## 🤝 Contributing
Pull requests are welcome! Feel free to improve the project. 🚀

---

## 📄 License
This project is licensed under the **MIT License**.

---

## 🏆 Credits
Developed by **Siddharth Dhodi** 💻🎉
