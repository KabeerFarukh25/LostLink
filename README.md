# **LostLink - the Lost-and-Found Management System**

## **Project Overview**

**LostLink- the Digital Lost-and-Found Management System** is a web-based platform designed to modernize the manual lost-and-found process at colleges. It provides a centralized, user-friendly interface for students, staff, and administrators to report, search, and claim lost or found items efficiently.

The system leverages **React** for the frontend, **Firebase** for backend services (authentication, database, and storage), and **responsive design principles** to ensure accessibility across devices. It emphasizes usability, security, and maintainability while supporting future enhancements such as AI-based matching, mobile apps, and IoT integration.

---

## **Features**

### **User Features**

* Register and log in securely.
* Report lost or found items with descriptions and image uploads.
* Search for items using keywords, categories, and filters.
* Submit claims for found items.
* View the status of submitted items and claims.

### **Admin Features**

* Approve or reject item reports and claims.
* Monitor and manage all item records.
* Access audit trails and logs for transparency.
* Receive notifications for new item reports and claims.

---

## **Technology Stack**

| Component | Technology                | Purpose                          |
| --------- | ------------------------- | -------------------------------- |
| Frontend  | React, React Router       | Build dynamic UI and navigation  |
| Styling   | TailwindCSS / Material-UI | Responsive and modern design     |
| Backend   | Firebase Authentication   | User authentication              |
| Database  | Firebase Firestore        | Store item, user, and claim data |
| Storage   | Firebase Cloud Storage    | Store uploaded item images       |
| Hosting   | Firebase Hosting / Vercel | Deploy the web application       |

---

## **Project Structure**

```
lost-and-found-system/
│
├─ src/
│  ├─ components/       # Reusable UI components (Navbar, Footer, ItemCard)
│  ├─ pages/            # Application views (Home, Login, Dashboard, ReportItem, SearchItems)
│  ├─ firebase.js       # Firebase configuration
│  ├─ App.jsx           # Main App component with routing
│  └─ main.jsx          # Entry point
│
├─ public/              # Static assets
├─ package.json
└─ README.md
```

---

## **Installation and Setup**

### **Prerequisites**

* Node.js v18+
* npm v9+
* Firebase account

### **Steps**

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/lost-and-found-system.git
   cd lost-and-found-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Firebase:

   * Create a Firebase project.
   * Enable **Authentication**, **Firestore**, and **Storage**.
   * Copy your Firebase config object into `src/firebase.js`.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser.

---

## **Planned Features (Future Scope)**

* AI-powered image recognition and fuzzy search.
* Mobile application (Android/iOS).
* RFID or QR code integration for automatic item logging.
* Analytics dashboard for administrators.
* Push notifications and SMS/email alerts.
* Multi-campus integration and role-based access expansion.

---

## **Project Workflow**

1. **User registers and logs in.**
2. **User reports a lost or found item** → data is stored in Firestore.
3. **Admin verifies the report** → approves or rejects claims.
4. **Users search for items** using filters and keywords.
5. **Claim submission and approval workflow** ensures accountability.
6. **Notifications and dashboards** provide real-time updates.

---

## **Contribution Guidelines**

* Fork the repository and create a new branch for your feature:

  ```bash
  git checkout -b feature/<feature-name>
  ```
* Implement your changes.
* Commit your code:

  ```bash
  git commit -m "Add <feature-name>"
  ```
* Push your branch and open a Pull Request on GitHub.

---

## **License**

This project is licensed under the **MIT License** – see `LICENSE` file for details.

---

## **Contact**

* **Project Lead:** `KabeerFarukh25`
* **Email:** `2k24.cs1j.2413425@gmail.com`
* **GitHub:** [https://github.com/KabeerFarukh25](https://github.com/KabeerFarukh25)

---
