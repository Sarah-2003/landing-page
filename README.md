# Nike Landing Page

<div align="center">
  <alt="Nike Landing Page Banner" width="600">
</div>

A modern, responsive landing page for Nike, built with React and Tailwind CSS. This project showcases a sleek design with interactive elements, dark mode support, and optimized performance.

## 🚀 Features

- Responsive design that works seamlessly on desktop and mobile devices
- Interactive product showcase with image switching functionality
- Dark mode support for comfortable viewing in low-light environments
- Animated transitions and hover effects for enhanced user experience
- Performance optimized for fast loading times
- Reusable components for easy maintenance and scalability

## 🛠️ Technologies Used

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

## 🏁 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nike_landing_page.git
   cd nike_landing_page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure

The project is organized into several key directories and files:

### Assets
Located in the `src/assets/` directory, this folder contains all static resources used in the project, including:
- Icons: SVG and PNG files for various UI elements
- Images: Product images, backgrounds, and other visual assets

### Components
The `src/components/` directory houses reusable React components that are used throughout the application. Key components include:
- Navigation bar
- Custom buttons
- Product cards
- Service cards
- Review cards

### Constants
The `src/constants/` directory contains JavaScript files that define constant values used across the application, such as product data, navigation links, and configuration settings.

### Sections
The `src/sections/` directory contains React components that represent major sections of the landing page, including:
- Hero section
- Popular Products showcase
- Super Quality highlight
- Services overview
- Special Offers
- Customer Reviews
- Newsletter Subscription
- Footer

### Root Files
- `src/App.jsx`: The main React component that composes the entire application
- `src/index.css`: Global styles and Tailwind CSS imports

This structure promotes modularity and separation of concerns, making the codebase easier to navigate and maintain. Components are designed to be reusable, while sections represent larger, page-specific elements that compose the overall layout of the landing page.

## 🧩 Components

The project includes several reusable components:

- `Nav`: The navigation bar component
- `Button`: A customizable button component
- `ShoeCard`: Displays individual shoe products
- `PopularProductCard`: Shows popular product items
- `ServiceCard`: Highlights Nike's services
- `ReviewCard`: Displays customer reviews

## 📚 Sections

The landing page is divided into several sections:

- Hero: The main banner section
- PopularProducts: Showcases popular Nike products
- SuperQuality: Highlights the quality of Nike products
- Services: Displays Nike's services
- SpecialOffer: Presents special deals and offers
- CustomerReviews: Shows customer testimonials
- Subscribe: Newsletter subscription section
- Footer: Page footer with links and information

## 🎨 Styling

This project uses Tailwind CSS for styling. Custom styles and configurations can be found in the `tailwind.config.js` file and `src/index.css`.

## 🚀 Deployment

To build the project for production, run:
bash
npm run build

This will generate a `dist` folder with all the production-ready files.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/nike_landing_page/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- Design inspiration from Nike's official website
- Icons from [Hero Icons](https://heroicons.com/)
- Images from [Unsplash](https://unsplash.com/)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
