📝 Meeting Summarizer

AI-powered meeting transcript summarizer and sharer built with Next.js, ShadCN UI, Google Gemini API, Nodemailer, and Zustand.

🔗 Live Demo → Meeting Summarizer

🚀 Features

Upload Transcript: Upload .txt files containing meeting transcripts.

Custom Prompt: Guide AI summarization with your own prompt.

AI-Powered Summarization: Uses Google Gemini API to generate concise summaries.

Editable Summary: Review and modify the AI-generated summary.

Email Integration: Send summaries directly to recipients using Nodemailer.

State Management: Managed via Zustand + persistent localStorage.

UI/UX: Modern interface built with ShadCN UI and Tailwind CSS.

🛠️ Tech Stack

Framework: Next.js (App Router)

UI: ShadCN UI, Tailwind CSS

State Management: Zustand

AI: Google Gemini API

Email Service: Nodemailer with Gmail App Password

Deployment: Vercel

📂 Project Structure
AI MEETING SUMMARIZER/
│── actions/
│   └── summary.js              # Handles AI summarization logic (Gemini API)
│
│── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.js        # Nodemailer email sending API route
│   ├── layout.js               # Global layout
│   ├── page.js                 # Landing page
│   └── page.jsx                # Alternate entry (UI logic)
│
│── components/                 # Reusable UI components
│
│── lib/
│   ├── store.js                # Zustand store (state management)
│   └── utils.js                # Helper functions
│
│── public/                     # Static assets (favicon, etc.)
│
│── .env                        # Environment variables (local only, not committed)
│── .gitignore
│── components.json             # ShadCN UI config
│── package.json
│── README.md                   # Documentation

⚙️ Setup & Installation
1. Clone Repository
git clone https://github.com/your-username/meeting-summarizer.git
cd meeting-summarizer

2. Install Dependencies
npm install

3. Configure Environment Variables

Create a .env.local file in the root:

# Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Gmail Credentials for Nodemailer
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password


⚠️ EMAIL_PASS is not your normal Gmail password. It must be a Gmail App Password (generated after enabling 2FA).

4. Run Locally
npm run dev


App will run at → http://localhost:3000

5. Build for Production
npm run build
npm start

📧 Email Sending with Nodemailer

Enable 2FA on Gmail.

Create an App Password in your Google Account.

Use EMAIL_USER (your Gmail) and EMAIL_PASS (App Password) in .env.local.

🎯 Usage Flow

Upload a .txt meeting transcript.

Provide a custom summarization prompt.

Click Generate Summary → AI creates a structured summary.

Edit the summary if needed.

Enter recipient email → click Send Summary.

Recipient receives the summary via email.

📦 Deployment

Deployed on Vercel.
Steps:

Push repo to GitHub.

Import project into Vercel.

Add GEMINI_API_KEY, EMAIL_USER, and EMAIL_PASS in Vercel Environment Variables.

Deploy 🚀.
