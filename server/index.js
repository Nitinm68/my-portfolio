const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 🚀 1. Social Media Links API
app.get('/social-links', (req, res) => {
  res.json({
    github: 'https://github.com/nitinmodanwal',
    linkedin: 'https://www.linkedin.com/in/nitinmodanwal',
    instagram: 'https://www.instagram.com/nitinmodanwal'
  });
});

// 🚀 2. Projects API
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: "ToDo App",
      description: "A simple, no-nonsense To-Do app to keep your day sorted and your brain uncluttered.",
      liveLink: "https://nitinm68.github.io/TODO-APP/"
    },
    // Added more projects
    {
      id: 2,
      title: "Weather App",
      description: "A weather forecasting app using React and OpenWeather API.",
      liveLink: "https://your-live-weather.com"
    },
    {
      id: 3,
      title: "Temperature convertor",
      description: "A simple and responsive web app to convert temperatures between Celsius, Fahrenheit, and Kelvin instantly.",
      liveLink: "https://nitinm68.github.io/Temperature-converter/"
    },
    {
      id: 4,
      title: "Simon game",
      description:"A memory-based color sequence game that tests your focus and reaction speed.",
      liveLink:"https://nitinm68.github.io/simon-game/"
    },
    {
      id:5,
      title:"job application",
      description:"A clean and responsive job application form built using only HTML and CSS for collecting applicant details.",
      liveLink:""
    },
    {
    id: 6,
    title:"E-commerce Site",
description:"A clean and responsive job application form built using only HTML and CSS for collecting applicant details.",
liveLink:""
    },
    {
    id: 7,
    title:"Spotify-clone",
description:"A visually appealing Spotify clone crafted with HTML and CSS, featuring a sleek music player interface and responsive design.",
liveLink:""
    },
    {
 id: 8,
    title:"Landing-Page",
description:"A modern and responsive landing page built with HTML and CSS to capture user attention and highlight key content.",
liveLink:""
    },
    {
 id: 9,
    title:"Weather App",
description:"A real-time weather app built with React and JavaScript, fetching live data from an external API to display dynamic forecasts.",
liveLink:""
    },
    {
     id: 10,
    title:"Loan EMI Calculator",
description:"A simple loan EMI calculator developed using HTML, CSS, and JavaScript to calculate monthly installments.",
    liveLink:""
  },
  {
     id: 11,
    title:"Event Registration Form",
description:"A functional event registration form created with HTML, CSS, and JavaScript to collect participant details and validate inputs.",
    liveLink:""
  },


  ]);
});


// 🚀 3. Contact Form API
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('📥 Message Received:', { name, email, message });

  // Optional: Save to DB or send email
  res.json({ msg: 'Message received successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Backend running on http://localhost:${PORT}`);
});
