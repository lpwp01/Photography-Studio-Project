🎬 Semal Bhargava Studio – Full Stack Project

A full-stack web application built with Python (Backend) and Node.js (Frontend) for managing studio website features like booking, gallery, admin panel, and packages.

👤 Author

Lavkush
Brand / Org: lwpw_creations

🧱 Project Structure
semal_bhargava_studio/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── database/
│   │   └── studio.db (ignored in git)
│   └── backend.log (ignored)
│
├── frontend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── node_modules/ (ignored)
│   ├── public/
│   │   ├── index.html
│   │   ├── admin.html
│   │   ├── booking.html
│   │   ├── gallery.html
│   │   ├── packages.html
│   │   ├── css/
│   │   ├── js/
│   │   └── assets/
│
└── README.md

⚙️ Requirements
🔹 Backend (Python)

Python 3.8+

pip

🔹 Frontend (Node.js)

Node.js 18+

npm

Check versions:

python3 --version
node --version
npm --version

🐍 Backend Setup (Python)
1️⃣ Backend folder me jao
cd backend

2️⃣ Virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate

3️⃣ Dependencies install karo
pip install -r requirements.txt

4️⃣ Backend run karo
python main.py


📌 Backend normally run hota hai:

http://localhost:5000

🟢 Frontend Setup (Node.js)
1️⃣ Frontend folder me jao
cd frontend

2️⃣ Node project install (pehli baar)
npm install


⚠️ node_modules GitHub par upload nahi hota
Isliye har system me npm install zaroori hai

3️⃣ Frontend server run karo
node server.js


ya agar package.json me script ho:

npm start


📌 Frontend normally open hota hai:

http://localhost:3000

