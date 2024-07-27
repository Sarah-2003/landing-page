rewrite everything and remove personal details and contact info
ChatGPT
<div align="center">
  <br />
    <img src="https://github.com/adrianhajdin/nike_landing_page/assets/151519281/36013f49-ba13-47ad-a6c4-f9d58bfae7fc" alt="Project Banner">
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
  <h3 align="center">TailwindCSS Crash Course</h3>
   <div align="center">
     Build this project step by step with our detailed tutorial on YouTube. Learn and join the community!
    </div>
</div>
📋 <a name="table">Table of Contents</a>
🤖 Introduction
⚙️ Tech Stack
🔋 Features
🤸 Quick Start
🕸️ Snippets
🔗 Links
🚀 More
🚨 Tutorial
This repository contains the code for an in-depth tutorial available on YouTube.

If you prefer visual learning, this is the perfect resource for you. Follow the tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/tS7upsfuxmo?feature=shared" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

<a name="introduction">🤖 Introduction</a>
Master Tailwind CSS in two parts by first learning fundamentals, advanced techniques, and theming. Then, build a stunning Nike landing page, applying learned skills to create a visually impressive website.

If you need assistance or face any bugs, join an active Discord community for help.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

<a name="tech-stack">⚙️ Tech Stack</a>
Tailwind CSS
React.js
<a name="features">🔋 Features</a>
👉 Maximizing Tailwind CSS: Discover tips and tricks to make the most out of Tailwind CSS.

👉 Understanding Tailwind Internals: Dive into the inner workings of Tailwind, gaining insights into its structure and optimizations.

👉 Best Practices: Learn Tailwind's best practices for efficient and maintainable code.

👉 Theming: Explore techniques to add different themes to your website using Tailwind CSS.

👉 JavaScript-like Tasks with Tailwind: Discover how Tailwind CSS can be used to achieve tasks that typically require JavaScript code

while building a beautiful Nike Website with a,

👉 Complex Hero Section: A visually appealing hero section showcasing key elements.

👉 Popular Products Showcase: A section highlighting popular Nike products

👉 About Us Section: An informative "About Us" section with a unique design.

👉 Special Offers: Showcase special offers in an eye-catching manner

👉 Testimonials: A testimonials section for a captivating user experience

👉 Newsletter Integration: A newsletter section with Tailwind styling, encouraging user engagement

👉 Footer: A comprehensive footer section containing various links

👉 Mobile Responsive: The entire website is responsive across various devices, emphasizing Tailwind's mobile-friendly capabilities.

and many more, including code architecture and reusability

<a name="quick-start">🤸 Quick Start</a>
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

bash
Copy code
git clone https://github.com/adrianhajdin/nike_landing_page.git
cd nike_landing_page
Installation

Install the project dependencies using npm:

bash
Copy code
npm install
Running the Project

bash
Copy code
npm start
Open http://localhost:5173 in your browser to view the project.

<a name="snippets">🕸️ Snippets</a>
<details>
<summary><code>.eslintrc.cjs</code></summary>
javascript
Copy code
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": 0
  },
}
</details>
<details>
<summary><code>constants.index.js</code></summary>
javascript
Copy code
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+91-123456789", link: "tel:+91123456789" },
        ],
    },
];

export const socialLinks = [
    { platform: 'Facebook', link: "https://www.facebook.com", icon: facebook },
    { platform: 'Instagram', link: "https://www.instagram.com", icon: instagram },
    { platform: 'Twitter', link: "https://www.twitter.com", icon: twitter },
];
</details>
<details>
<summary><code>src/App.jsx</code></summary>
javascript
Copy code
import React from 'react';
import './App.css';
import {
  Home,
  AboutUs,
  Products,
  ContactUs,
} from './components';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Products />
      <ContactUs />
    </div>
  );
}

export default App;
</details>
<details>
<summary><code>src/components/Home.jsx</code></summary>
javascript
Copy code
import React from 'react';
import { shoes, statistics } from '../constants';

const Home = () => {
  return (
    <section id="home">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Nike Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shoes.map((shoe, index) => (
            <div key={index} className="shadow-lg rounded-lg p-4">
              <img src={shoe.thumbnail} alt="Shoe Thumbnail" className="rounded-t-lg w-full" />
              <img src={shoe.bigShoe} alt="Shoe" className="rounded-b-lg w-full mt-4" />
            </div>
          ))}
        </div>
        <div className="flex justify-around mt-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-2xl font-bold">{stat.value}</h2>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
</details>
<details>
<summary><code>src/components/AboutUs.jsx</code></summary>
javascript
Copy code
import React from 'react';
import { services } from '../constants';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row justify-around">
          {services.map((service, index) => (
            <div key={index} className="text-center mb-8 md:mb-0">
              <img src={service.imgURL} alt={service.label} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{service.label}</h3>
              <p className="text-gray-600">{service.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
</details>
<details>
<summary><code>src/components/Products.jsx</code></summary>
javascript
Copy code
import React from 'react';
import { products } from '../constants';

const Products = () => {
  return (
    <section id="products" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="shadow-lg rounded-lg p-4">
              <img src={product.imgURL} alt={product.name} className="rounded-lg w-full" />
              <h3 className="text-2xl font-bold mt-4">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
</details>
<details>
<summary><code>src/components/ContactUs.jsx</code></summary>
javascript
Copy code
import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
</details>
<a name="links">🔗 Links</a>
GitHub Repository: Nike Landing Page
YouTube Tutorial: Nike Landing Page Tutorial
Discord Community: Join Us
Tailwind CSS Documentation: Official Documentation
<a name="more">🚀 More</a>
If you have any questions or encounter any issues, feel free to reach out through the GitHub Issues section or the Discord Community. We're here to help!

Happy Coding! 💻
