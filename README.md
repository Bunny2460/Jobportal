---

## 📘 Project Summary

This project is a **Job Search and Resume Builder Web Portal** integrating real-time job listings, interactive dashboards, and a smart resume builder. It is built using HTML, CSS, JavaScript, Firebase, Chart.js, and TailwindCSS. The platform enhances the job search experience through AI integration, analytics, and modern UI/UX features for job seekers and employers.

---

### 💡 Overview

A feature-rich web application designed to help users:

* Search jobs dynamically using category/location filters.
* Build and download professional resumes interactively.
* Explore job market insights through charts and dashboards.
* Register/Login securely with Firebase Authentication.

---

### 🧩 Features

* **Resume Builder (`emp_atharva.html`)**

  * Interactive UI to enter personal details, work experience, education.
  * Auto-preview of the resume.
  * Export to PDF using jsPDF.

* **Landing Page (`index.html`)**

  * Job search interface with filters for location & job role.
  * Google Translate integration for multilingual support.
  * Voice interaction (text-to-speech on hover).
  * Clean layout with categorized job domains.

* **Job Listings (`jobapi.html`)**

  * Fetches real job data from an external API.
  * Filters jobs by selected category and location.
  * Displays tabular job information including apply links.

* **Dashboard (`integrated-dashboard.html`)**

  * Visualizes job data using Chart.js (line, pie, scatter).
  * Provides insights into application trends, job sectors, and salaries.
  * Includes embedded YouTube training videos and motivational content.

* **Authentication**

  * `Login.html`: Login, Sign Up, Forgot Password forms.
  * `signout.html`: Secure sign-out interface using Firebase Auth.

---

### 🛠️ Tech Stack

| Tech        | Purpose                           |
| ----------- | --------------------------------- |
| HTML/CSS    | Frontend Markup & Styling         |
| JavaScript  | Client-side logic and interaction |
| Firebase    | Auth & Firestore integration      |
| Chart.js    | Graphs and data visualization     |
| jsPDF       | Resume export in PDF              |
| TailwindCSS | Utility-first CSS framework       |

---

### 🔧 Setup Instructions

1. Clone the repository.
2. Open `index.html` in a web browser.
3. For dynamic job fetching (`jobapi.html`), ensure internet access (uses live API).
4. For Firebase Auth, link your Firebase config in `page0.js` and `page1.js`.

---

### ✅ Future Enhancements

* Enable user profile saving via Firestore.
* Add job application tracker.
* Integrate AI-based resume scoring.
* Admin dashboard for job posting management.

---

