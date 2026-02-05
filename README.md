# Orufy - Digital Solutions Website

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application built as part of the Orufy Technologies assignment.

## 📌 Project Overview

This project is a modern, responsive business website featuring:
- Home page with hero section, services preview, projects showcase, and testimonials
- About page with company story, values, and team members
- Services page with detailed service offerings
- Projects page with filterable portfolio
- Contact page with functional contact form

## 🚀 Tech Stack

### Frontend
- React.js 18
- React Router DOM v6
- Axios for API calls
- React Toastify for notifications
- React Icons
- CSS3 with custom properties

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- Express Validator

## 📁 Project Structure

```
orufy-assignment/
├── Frontend/                 # React frontend application
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── pages/            # Page components
│   │   │   ├── Home.js
│   │   │   ├── Home.css
│   │   │   ├── About.js
│   │   │   ├── About.css
│   │   │   ├── Services.js
│   │   │   ├── Services.css
│   │   │   ├── Projects.js
│   │   │   ├── Projects.css
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── services/         # API service layer
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── Server/                   # Node.js backend application
│   ├── controllers/          # Route controllers
│   │   ├── serviceController.js
│   │   ├── projectController.js
│   │   ├── testimonialController.js
│   │   ├── contactController.js
│   │   └── teamController.js
│   ├── models/               # Mongoose models
│   │   ├── Service.js
│   │   ├── Project.js
│   │   ├── Testimonial.js
│   │   ├── Contact.js
│   │   └── Team.js
│   ├── routes/               # Express routes
│   │   ├── serviceRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── testimonialRoutes.js
│   │   ├── contactRoutes.js
│   │   └── teamRoutes.js
│   ├── server.js             # Main server file
│   ├── seed.js               # Database seeding script
│   ├── .env.example          # Environment variables template
│   └── package.json
│
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the Server directory:
```bash
cd Server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/orufy_db
NODE_ENV=development
```

5. Seed the database with sample data:
```bash
node seed.js
```

6. Start the server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🔗 API Endpoints

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get single service
- `POST /api/services` - Create service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Projects
- `GET /api/projects` - Get all projects (supports `?category=` filter)
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get single testimonial
- `POST /api/testimonials` - Create testimonial
- `PUT /api/testimonials/:id` - Update testimonial
- `DELETE /api/testimonials/:id` - Delete testimonial

### Team
- `GET /api/team` - Get all team members
- `GET /api/team/:id` - Get single team member
- `POST /api/team` - Create team member
- `PUT /api/team/:id` - Update team member
- `DELETE /api/team/:id` - Delete team member

### Contact
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Submit contact form
- `PUT /api/contacts/:id` - Update contact status
- `DELETE /api/contacts/:id` - Delete contact

## ✨ Features

### Frontend Features
- Responsive design (mobile, tablet, desktop)
- Smooth page transitions
- Loading states and error handling
- Form validation
- Toast notifications
- Dynamic content from API
- Project filtering by category
- Interactive UI elements

### Backend Features
- RESTful API design
- MongoDB database with Mongoose ODM
- CRUD operations for all resources
- Input validation
- Error handling middleware
- CORS enabled for frontend integration

## 🎨 UI Components

- **Navbar**: Fixed navigation with mobile hamburger menu
- **Footer**: Multi-column footer with social links
- **Service Cards**: Icon-based service cards with features list
- **Project Cards**: Image cards with overlay and technology badges
- **Testimonial Cards**: Customer reviews with ratings
- **Team Cards**: Team member profiles with social links
- **Contact Form**: Validated form with success/error feedback

## 📱 Responsiveness

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌐 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/orufy_db
NODE_ENV=development
```

### Frontend (optional - .env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 👨‍💻 Author

**Abhishek**
- Assignment for Orufy Technologies Pvt. Ltd.
- Submitted: February 2026

## 📄 License

This project is created for educational/assignment purposes.
