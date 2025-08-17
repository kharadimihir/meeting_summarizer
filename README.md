# 📝 Meeting Summarizer

AI-powered **Meeting Transcript Summarizer** built with **Next.js (App Router)**, **ShadCN UI**, **Google Gemini API**, **Nodemailer**, and **Zustand**.

🔗 **Live Demo** → [Meeting Summarizer](https://meeting-summarizer-blue.vercel.app/)

---

## ✨ Features

- 📂 **Upload Transcript** – Import `.txt` files containing meeting notes.  
- 🧑‍💻 **Custom Prompt** – Guide AI summarization with your own instructions.  
- 🤖 **AI-Powered** – Uses **Google Gemini API** to generate structured summaries.  
- 📝 **Editable Output** – Modify summaries before sending.  
- 📧 **Email Integration** – Send summaries directly via **Nodemailer** (Gmail).  
- ⚡ **Persistent State** – Managed using **Zustand** + `localStorage`.  
- 🎨 **Modern UI** – Responsive interface with **ShadCN UI** & **Tailwind CSS**.  

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)  
- **UI**: [ShadCN UI](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/)  
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)  
- **AI Model**: [Google Gemini API](https://ai.google.dev/)  
- **Email Service**: [Nodemailer](https://nodemailer.com/) (Gmail App Password)  
- **Deployment**: [Vercel](https://vercel.com/)  

---

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/meeting-summarizer.git
cd meeting-summarizer
2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env.local file in the root:

# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key

# Gmail (Nodemailer)
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password


⚠️ EMAIL_PASS is a Gmail App Password, not your normal password.
Enable 2FA in Gmail → Generate an App Password → Use it here.

4️⃣ Run the Development Server
npm run dev


Visit → http://localhost:3000

5️⃣ Build for Production
npm run build
npm start

📧 Email Sending with Nodemailer

Gmail requires 2FA enabled.

Generate an App Password at:
Google Account → Security → App Passwords.

Use that password in .env.local as EMAIL_PASS.

🎯 Usage Flow

Upload a .txt transcript.

Enter a custom prompt for AI.

Click Generate Summary → Gemini AI creates a structured summary.

Edit the summary if needed.

Enter recipient’s email → click Send Summary.

Recipient receives the summary via Gmail.

🚀 Deployment (Vercel)

Push project to GitHub.

Import repo into Vercel.

Add Environment Variables in Vercel Dashboard:

GEMINI_API_KEY

EMAIL_USER

EMAIL_PASS

Deploy ✅

