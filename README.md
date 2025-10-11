PERKS - An Engineering Student's Guidance Platform
PERKS is a comprehensive, full-stack web application designed to be an intelligent companion for engineering students, helping them navigate the complexities of their academic and professional journey.



Why PERKS?
The journey through an engineering degree is filled with critical decisions that can be overwhelming. Which minor subject should I choose? What are DLOCs and Honours, and which track aligns with my career goals? How do I even start preparing for an internship?

As students ourselves, we built PERKS to solve this exact problem. Our goal is to demystify the engineering curriculum and provide a clear, centralized source of guidance. We aim to empower students like us to make informed decisions with confidence, reducing the anxiety and confusion that often comes with academic planning.

Disclaimer: The academic roadmaps and club information currently on the site are detailed, representative examples created to demonstrate the platform's functionality. The core idea is to create a community-driven or institution-verified platform where this data is always accurate and up-to-date.

Key Features
Dynamic Academic Roadmaps: Instead of static PDFs, PERKS provides interactive, year-by-year roadmaps for various engineering branches. This includes:

Semester-wise Subjects: Detailed breakdown of subjects with key concepts and study notes.

Elective Guidance: Clear explanations for choosing Minors, DLOCs, and Honours subjects, helping students align their choices with career interests.

Curated Course Recommendations: Year-specific suggestions for online courses to supplement university learning.

Internship Strategy: Actionable advice on when to apply, the types of roles to target, and how to prepare.

Comprehensive Club Information: A dedicated section to explore professional clubs and student chapters, with details on:

Mission and Benefits

Hierarchy and Achievements

Upcoming Events and how to join.

Full Admin Control (CMS): A secure admin panel that transforms the site into a full-fledged Content Management System, allowing an administrator to:

Manage All Content: Create, update, and delete all roadmaps, clubs, and their nested details (subjects, events, etc.) through a user-friendly interface.

Manage Users: View a list of all registered users and manage profiles.

Live Support System:

A real-time chat widget for users to ask questions and seek help.

A dedicated support dashboard for admins to manage multiple user conversations simultaneously.

Analytics Dashboard: Visual graphs and stats for the admin to track:

User Growth: New user sign-ups over time.

User Engagement: Daily active users on the platform.

Content Popularity: Most viewed roadmaps and clubs.

Tech Stack
Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB (with Mongoose)

Authentication: Passport.js (Local and Google OAuth 2.0 strategies)

Real-time Communication: Socket.IO

Charting: Chart.js

Getting Started
Prerequisites
Node.js and npm installed

Git installed

A MongoDB database (local or via Atlas)

Setup
Clone the repository:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name

Install Backend Dependencies:

cd server
npm install

Install Frontend Dependencies:

cd ../client
npm install

Environment Variables:
In the server directory, create a .env file and add your configuration variables:

MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

Seed the Database (Optional but Recommended):
To populate the database with the detailed sample data, run the seeder script from the server directory:

node seeder -i

Run the Application:
You will need two terminals open.

In the first terminal, start the backend server:

cd server
npm start

In the second terminal, start the frontend client:

cd client
npm start

The application will be available at http://localhost:3000
