# Mohammed AbdElSattar - Professional Resume Website

A modern, professional React-based resume website built with React, React Router, and professional architectural patterns. This project showcases a full stack resume with authentication, data management, and responsive design.

## 🎯 Project Overview

This is a professional resume portal that displays detailed career information, skills, experience, education, certifications, and community involvement. The application features:

- ✅ **Secure Login** - Authentication system with protected routes
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Component-Based Architecture** - Modular, reusable React components
- ✅ **Professional Styling** - Modern gradient design with smooth animations
- ✅ **Data-Driven** - All content loaded from structured JSON file
- ✅ **Custom Hooks** - Professional API handling with `useQuery` hook
- ✅ **Context API** - Authentication state management

## 📋 Features

### Authentication
- Login with credentials: **Username:** Admin | **Password:** Admin
- Protected routes - resume only accessible when logged in
- Session persistence with localStorage
- Demo credentials auto-fill button

### Components
- **PersonalInfo** - Header with name, title, location, and contact details
- **ProfessionalSummary** - Career overview and expertise
- **TechnicalSkills** - Skills organized by category (Backend, Frontend, Cloud, etc.)
- **Experience** - Detailed work history with achievements
- **Education** - Degree and graduation project information
- **Certifications** - Professional certifications and courses
- **Community** - Community involvement and professional training

### Professional Architecture
- **API Service Layer** - Centralized API calls in `src/services/api.js`
- **Custom Hooks** - `useQuery` hook for professional data fetching
- **Auth Context** - Global authentication state management
- **Modular Structure** - Separated concerns and reusable components

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-resume.git
cd React_AbdelSattar_Resume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Login Credentials
- **Username:** Admin
- **Password:** Admin

## 📁 Project Structure

```
src/
├── components/
│   ├── PersonalInfo.js
│   ├── ProfessionalSummary.js
│   ├── TechnicalSkills.js
│   ├── Experience.js
│   ├── Education.js
│   ├── Certifications.js
│   ├── Community.js
│   └── Login.js
├── context/
│   └── AuthContext.js          # Authentication state management
├── hooks/
│   └── useQuery.js             # Custom hook for data fetching
├── services/
│   └── api.js                  # Centralized API calls
├── styles/
│   └── Login.css               # Login page styling
├── App.js                       # Main app with routing
├── App.css                      # Resume styling
└── index.js
public/
└── myresume.json               # Resume data in JSON format
```

## 🛠 Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Context API** - State management
- **CSS3** - Styling with gradients and animations
- **React Hooks** - useState, useEffect, useContext

## 📖 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note:** This is a one-way operation. Once you eject, you can't go back!

## 🎓 Learning Resources

This project is perfect for learning:
- React functional components and hooks
- React Router for navigation and protected routes
- Context API for state management
- Custom hooks pattern
- Component composition and reusability
- Professional React architecture patterns
- CSS styling and responsive design
- Fetch API and error handling

## 👨‍💼 About the Developer

**Mohammed AbdElSattar Refaey**
- **Title:** Principal Software Engineer (Full Stack – .NET & Angular)
- **Location:** Cairo, Egypt
- **Email:** mabdelsattar92@gmail.com
- **LinkedIn:** [View Profile](https://www.linkedin.com/in/mohammed-abd-elsattar-refaey-a3b6a06b/)

### Core Competencies
- ASP.NET Core & Web APIs
- Angular & React
- Microservices Architecture
- Domain-Driven Design (DDD)
- Cloud Solutions (Azure)
- Event-Driven Architecture

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## 📞 Contact

For questions or suggestions, please reach out via:
- Email: mabdelsattar92@gmail.com
- LinkedIn: https://www.linkedin.com/in/mohammed-abd-elsattar-refaey-a3b6a06b/

---

**Last Updated:** February 2026

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
