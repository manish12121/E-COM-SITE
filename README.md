# **E-Commerce Web Application**

---

## **📌 About This Project**

This project is a **full-stack e-commerce web application** built with the **MERN stack**. It provides a **secure and seamless shopping experience** with features like **Google OAuth authentication**, **Stripe/Razorpay payment gateway**, and an **admin dashboard** for order management and notifications.

---

### **🎯 Objective**

* Enable users to **sign in securely** using **Google OAuth**.
* Display products on a **responsive homepage**.
* Integrate **test payment gateway (Stripe/Razorpay)** for checkout.
* Notify **super admin via email** after every successful payment.

---

## **✨ Features**

✔ **Authentication** – Google OAuth-based login
✔ **Product Display** – Responsive homepage with clean UI
✔ **Payment Gateway** – Secure payment using **Stripe / Razorpay**
✔ **Admin Dashboard** – Track products sold & users purchasing them
✔ **Email Notifications** – Real-time payment alerts to super admin

---

## **🛠 Tech Stack**

* **Frontend:** React.js, HTML5, CSS3
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** Google OAuth
* **Payments:** Stripe / Razorpay
* **Email Service:** Nodemailer

---

## **🚀 How to Run the Project**

### **Prerequisites**

* **Node.js** (v14 or later)
* **MongoDB** (local or MongoDB Atlas)
* **Git**

---

### **Installation Steps**

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/E-COM-SITE.git
   cd E-COM-SITE
   ```

2. **Install dependencies**

   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

3. **Create `.env` file in backend folder**

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   EMAIL_SERVICE_USER=your_email@example.com
   EMAIL_SERVICE_PASS=your_email_password
   ```

4. **Run the application**

   ```bash
   # Start backend
   cd backend
   npm start

   # Start frontend
   cd ../frontend
   npm start
   ```

5. **Visit the app**

   ```
   http://localhost:3000
   ```

---

## **📷 Screenshots**

(Add screenshots here, e.g., homepage, payment page, admin dashboard.)

---

## **🌐 Live Demo**

(If deployed on **Vercel/Netlify/Render**, add the link here.)

---

## **📬 Contact**

If you have any questions or suggestions, feel free to reach out:
**Email:** [your-email@example.com](mailto:your-email@example.com)
**GitHub:** [your-username](https://github.com/your-username)

---
