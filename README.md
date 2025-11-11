<h1 align="center">📄 Resume Builder App</h1> <p align="center">A professional MERN stack resume-building application with real-time preview, PDF download, templates, and secure authentication.</p>
🚀 Live Demo

Frontend: https://resume-builder-front-end.netlify.app/

🧰 Tech Stack
<p> <img src="https://skillicons.dev/icons?i=react,tailwind,js,nodejs,express,mongodb,git,github,vscode" /> </p>
📌 Features

✅ Clean and modern UI
✅ Real-time resume preview
✅ Multiple resume templates
✅ Download as PDF
✅ Authentication (Signup/Login)
✅ Save and manage resumes
✅ Fully responsive
✅ MERN stack

📦 Installation & Setup

Clone the repository
git clone https://github.com/your-username/resume-builder.git

Frontend setup
cd frontend
npm install
npm run dev

Backend setup
cd backend
npm install
npm start

📁 Folder Structure

resume-builder/
frontend/ (React UI)
backend/ (Node.js + Express API)
README.md

🔐 Environment Variables

Create a .env file in backend folder:

MONGO_URI = your_mongodb_connection
JWT_SECRET = your_secret_key
PORT = 5000

📡 API Endpoints

Auth Routes
POST /signup
POST /login

Resume Routes
POST /resume
GET /resume/:userId
PUT /resume/:id
DELETE /resume/:id

🛠 How It Works

User signs up or logs in

User fills resume details

Live preview updates instantly

User selects a template

Resume downloaded as PDF

Saved resumes can be edited anytime

🎯 Future Enhancements

More templates
Drag and drop sections
Theme selection
AI suggestions
Multi-language support

🏷 Topics

nodejs
javascript
reactjs
tailwindcss
express
mongodb
mern

📜 License

Open source project. Free to use.
