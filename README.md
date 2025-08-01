# 📝 Skriva – A Minimalist Blog Web App

**Skriva** is a clean, responsive, and easy-to-use blogging platform built using **Node.js**, **Express**, and **EJS templating**. It allows users to **create**, **edit**, and **view** blog posts through a sleek and minimal interface—ideal for learning full-stack fundamentals.

---

## 🌟 Features

- ✍️ Create new blog posts with title, content, and author.
- 📝 Edit and update existing blog posts.
- 📄 View full blog posts individually.
- 🗂️ Homepage listing of all blogs.
- 🎨 Responsive layout using **Flexbox** and **Grid**.
- ⚡ Dynamic server-side rendering with **EJS**.
- 🧩 Modular structure with partial templates.

---

## 📁 Project Structure

```
Skriva/
├── public/
│   ├── images/
│   │   ├── blogging.png
│   │   ├── comunidad.png
│   │   └── teclado.png
│   ├── main.js             # Client-side JS (if needed)
│   └── style.css           # Global CSS styles
│
├── views/
│   ├── partials/
│   │   ├── footer.ejs      # Reusable footer
│   │   └── header.ejs      # Navigation bar
│   ├── blogPage.ejs        # Form for creating/editing blogs
│   ├── blogs.ejs           # Blog list view (homepage)
│   ├── index.ejs           # Landing page
│   └── viewBlog.ejs        # Detailed view of a blog post
│
├── .gitignore              # Git ignored files
├── index.js                # Express server entry point
├── package-lock.json
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## 💻 Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Templating**: EJS
- **Design**: Flexbox, Grid, Responsive Web Design

---

## 🎨 UI Highlights

- Minimal, modern layout for a smooth reading and writing experience.
- Responsive blog cards and forms.
- Hover animations for interactive elements.
- Modular EJS structure for clean code reuse.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Skriva-Blog-Web.git
cd skriva-blog
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node index.js
```

Then, open your browser and go to:  
🌐 [http://localhost:3000](http://localhost:3000)

---

## 📌 Future Improvements

- 🔒 Add user authentication (sign in/up)
- 🗃️ Integrate a database (e.g., MongoDB/PostgreSQL)
- 🔍 Add blog search and filtering
- 🧠 Enable markdown support
- ☁️ Deploy live on Render/Vercel/Netlify

---

## 🤝 Contributing

Contributions, suggestions, and forks are welcome!  
Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👤 Creator

**Ardhaya Johari**  
🔗 [GitHub](https://github.com/Ardhaya-Johari)  
📧 ardhayasaxena3897@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/in/ardhaya-johari-819275321/)

Created with ❤️ by Ardhaya

