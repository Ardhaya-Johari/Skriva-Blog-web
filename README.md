# 📝 Skriva – A Simple Blog Web Application

Skriva is a minimalist blog platform built with Node.js, Express, and EJS templating. It allows users to **create**, **edit**, and **view blogs** through a clean and responsive interface.

## 🌐 Features

- ✍️ Create new blog posts with author, title, and content.
- 📝 Edit existing blog entries.
- 📋 View a list of all blog posts.
- 💅 Stylish UI with responsive design using pure CSS.
- 🚀 Dynamic rendering with EJS templates.

## 📁 Project Structure

/Skriva
│
├── public/
│ └── style.css # Custom CSS styles
│
├── views/
│ ├── partials/
│ │ ├── header.ejs # Navigation bar
│ │ └── footer.ejs # Footer with credits
│ └── blogs.ejs # Create/Edit blog form
│
├── app.js (or server.js) # Your Express application entry point
└── README.md # Project documentation


## 🎨 UI Highlights

- Clean layout using **Flexbox** and **Grid**.
- Soft colors with subtle hover effects.
- Centered forms and responsive blog cards.
- Consistent styling across header, blog view, and footer.

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/skriva-blog.git
cd skriva-blog

npm install
node app.js
