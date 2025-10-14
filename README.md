# 🌟 PERKS – Platform for Engineering Roadmap and Knowledge

**PERKS** is a comprehensive, full-stack web platform designed to guide engineering students through their academic and professional journey. It helps students make informed decisions about electives, internships, clubs, and skill development — all in one place. (It has dummy data for now)

---

## 🚀 Why PERKS?

The journey through engineering can be overwhelming — from choosing minors and DLOCs to preparing for internships. **PERKS** was built *by students, for students* to simplify this process.

We provide **dynamic, interactive academic roadmaps** instead of static PDFs, with curated guidance for every year of study. We also empower students with cutting-edge tools, including an **AI-powered project idea generator** to transform learning into practical experience.

---

## 💡 Key Features

### 🎓 Academic Guidance

  - **Dynamic Yearly Roadmaps:** Interactive breakdown of each semester’s subjects, key concepts, and resources.
  - **Elective Guidance:** Clear insights and recommendation for **Minors**, **DLOCs**, and **Honours** subjects aligned with your career goals.
  - **Curated Learning:** Recommended **online courses** to complement university subjects.

### 🧠 AI-Powered Project Idea Generator

  - **Personalized Ideas:** Generate unique project ideas based on selected technologies you've learned.
  - **Portfolio Booster:** Get practical, relevant projects to apply skills and enhance your resume.

### 💼 Internship & Career Support

  - **Internship Strategy:** Year-by-year advice on when and how to apply.
  - **Skill Pathways:** Suggested tools, frameworks, and learning paths.

### 🤝 Clubs & Communities

  - **Explore Clubs:** Discover campus clubs and professional societies with details like mission, hierarchy, and events.
  - **Personalized Recommendations:** We recommend clubs based on your declared interests.
  - **Join & Engage:** Know how to participate and what you’ll gain.

### 🧑‍💻 Admin Panel (CMS)

  - **Full Content Control:** Create, update, or delete roadmaps, clubs, and nested details easily.
  - **User Management:** View and manage registered users.
  - **Analytics Dashboard:** Visual stats for user growth, engagement, and content popularity.

### 💬 Real-Time Live Support

  - **Chat Widget:** Students can ask queries directly to administrative mentors.
  - **Admin Chat Dashboard:** Manage conversations in real-time using **Socket.IO**.

---

## 🧩 Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | React.js |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Authentication** | Passport.js (Local + Google OAuth 2.0) |
| **AI Integration** | Hugging Face API (for Project Ideas) |
| **Real-Time Communication** | Socket.IO |
| **Charts & Analytics** | Chart.js |

---

## ⚙️ Getting Started

Follow these steps to run PERKS locally:

### 🖥️ Prerequisites

Ensure you have the following installed:

  - [Node.js](https://nodejs.org/) (v14+ recommended)
  - [npm](https://www.npmjs.com/)
  - [Git](https://git-scm.com/)
  - [MongoDB](https://www.mongodb.com/) (Local or Atlas)

---

### 🧾 Installation

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/krish2677/PERKS.git](https://github.com/krish2677/PERKS.git)
    cd PERKS
    ```

2.  **Install backend dependencies**

    ```bash
    cd server
    npm install
    ```

3.  **Install frontend dependencies**

    ```bash
    cd ../client
    npm install
    ```

4.  **Environment Setup**

    Inside the `server` directory, create a `.env` file and add your configuration:

    ```env
    MONGO_URI=your_mongodb_connection_string
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    HUGGING_FACE_API_KEY=your_hugging_face_api_key_for_text_generation
    PORT=5000
    JWT_SECRET=ABCDEFG
    COOKIE_KEY=XYZ
    ```

    *Replace placeholders with your actual keys and connection string.*

5.  **To populate your database with sample roadmap and club data:**

    ```bash
    cd server
    node seeder -i
    ```

**▶️ Run the Application**

Use two terminals to run frontend and backend simultaneously.

1.  **Start the Backend:**

    ```bash
    cd server
    npm start
    ```

2.  **Start the Frontend:**

    ```bash
    cd client
    npm start
    ```

**Now open your browser and visit 👉 http://localhost:3000**