const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// 🚀 1. Social Media Links API
app.get("/social-links", (req, res) => {
  res.json({
    github: "https://github.com/nitinmodanwal",
    linkedin: "https://www.linkedin.com/in/nitinmodanwal",
    instagram: "https://www.instagram.com/nitinmodanwal",
  });
});

// 🚀 2. Projects API
app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      title: "MY Portfolio",
      description:
        "A responsive and dynamic portfolio web app built with React.js to showcase my skills, projects, and achievements.Includes animations, dark mode, and live project previews for an engaging experience.",
      liveLink:
        "https://my-portfolio-git-main-nitin-modanwals-projects.vercel.app/",
    },
    {
      id: 2,
      title: "ToDo App",
      description:
        "A simple, no-nonsense To-Do app to keep your day sorted and your brain uncluttered.",
      liveLink: "https://nitinm68.github.io/TODO-APP/",
    },
    // Added more projects
    // {
    //   id: 2,
    //   title: "Weather App",
    //   description: "A weather forecasting app using React and OpenWeather API.",
    //   liveLink: "https://your-live-weather.com"
    // },
    {
      id: 3,
      title: "Temperature convertor",
      description:
        "A simple and responsive web app to convert temperatures between Celsius, Fahrenheit, and Kelvin instantly.",
      liveLink: "https://nitinm68.github.io/Temperature-converter/",
    },
    {
      id: 4,
      title: "EMI Calculator",
      description:
        "A simple and accurate EMI Calculator app to help users plan their loans effectively.",
      liveLink: "https://nitinm68.github.io/EMI-CALCULATOR/",
    },
    {
      id: 5,
      title: "job application form",
      description:
        "A clean and responsive job application form built using only HTML and CSS for collecting applicant details.",
      liveLink: "",
    },
    {
      id: 6,
      title: "E-commerce Site",
      description:
        "A clean and responsive job application form built using only HTML and CSS for collecting applicant details.",
      liveLink: "",
    },
    {
      id: 7,
      title: "Spotify-clone",
      description:
        "A visually appealing Spotify clone crafted with HTML and CSS, featuring a sleek music player interface and responsive design.",
      liveLink: "https://nitinm68.github.io/spotify/",
    },
    {
      id: 8,
      title: "Landing-Page",
      description:
        "A modern and responsive landing page built with HTML and CSS to capture user attention and highlight key content.",
      liveLink: "https://nitinm68.github.io/Photography_page/",
    },
    {
      id: 9,
      title: "Weather App",
      description:
        "A real-time weather app built with React and JavaScript, fetching live data from an external API to display dynamic forecasts.",
      liveLink: "https://github.com/Nitinm68/Weather-App.git",
    },
    {
      id: 10,
      title: " AGE Calculator",
      description:
        "A quick and easy tool to calculate your exact age in years, months, and days. 🎂⏳",
      liveLink: "https://nitinm68.github.io/AGE-calculator/",
    },
    {
      id: 11,
      title: "Event Registration Form",
      description:
        "A functional event registration form created with HTML, CSS, and JavaScript to collect participant details and validate inputs.",
      liveLink: "",
    },
  ]);
});

// 🚀 3. Contact Form API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📥 Message Received:", { name, email, message });

  // Optional: Save to DB or send email
  res.json({ msg: "Message received successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Backend running on http://localhost:${PORT}`);
});
