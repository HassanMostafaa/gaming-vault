# gaming-vault

# Video Games News Website

A responsive and modern video games news website built with Next.js. This project showcases categories and games, allows filtering, and includes individual pages for games and categories. It uses dummy data for demonstration purposes.

---

## Features

### Home Page
- **Hero Section:** Highlights the website with a bold title and a background image.
- **Categories Grid:** Displays a grid of game categories with a filter to select a specific category.
- **Games Grid:** Lists games with an input field to filter by category and release date.
- **Fixed Navigation Menu:** A simple, centered navigation menu at the bottom of the screen with a responsive design.

### Categories Page
- Dynamic pages for each category (e.g., `/categories/action`).
- Displays a grid of games specific to the category.
- Includes a filter to sort games by release date.
- Back button to return to the home page.

### Game Page
- Dynamic pages for each game (e.g., `/games/game-id`).
- Displays the game's:
  - Image
  - Title
  - Release date and company information
- Back button to return to the home page.

### Design and Responsiveness
- Gradient colors with low contrasts and a flat design aesthetic.
- Fully responsive layout for desktop and mobile devices.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/video-games-news-website.git
   ```
2. Navigate to the project folder:
   ```bash
   cd video-games-news-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```plaintext
.
├── public/
│   ├── images/             # Contains dummy images for games and categories
│   └── logo.png            # Simple logo for the website
├── src/
│   ├── pages/
│   │   ├── index.js        # Home page
│   │   ├── categories/     # Dynamic routes for categories
│   │   │   └── [category].js
│   │   ├── games/          # Dynamic routes for individual games
│   │   │   └── [id].js
│   ├── components/         # Reusable components like Navbar, Hero, and GameCard
│   ├── styles/             # Global and component-specific styles
│   └── data/               # Dummy data for categories and games
├── README.md
├── package.json
└── next.config.js          # Next.js configuration
```

---

## Usage

- **Filter Games:** 
  - On the home page, filter games by category and release date.
  - On a category page, filter games by release date.
- **Navigation:**
  - Use the fixed navigation menu at the bottom to switch between pages.
  - Click on a category or game to view its dedicated page.
- **Responsive Design:** 
  - Works seamlessly on both desktop and mobile devices.

---

## Dummy Data Example

### Categories
```json
[
  { "id": 1, "name": "Action" },
  { "id": 2, "name": "Adventure" },
  { "id": 3, "name": "RPG" }
]
```

### Games
```json
[
  {
    "id": 1,
    "title": "Epic Adventure",
    "category": "Adventure",
    "releaseDate": "2023-10-15",
    "company": "Epic Games",
    "image": "/images/epic-adventure.jpg"
  },
  {
    "id": 2,
    "title": "Space Quest",
    "category": "Action",
    "releaseDate": "2024-03-01",
    "company": "Galactic Studios",
    "image": "/images/space-quest.jpg"
  }
]
```

---

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** CSS/SCSS with responsive and flat design principles.
- **Data:** Dummy JSON data for games and categories.

---

## Future Improvements

- Integrate a backend API to fetch real data dynamically.
- Add user authentication for personalized features.
- Include more advanced filters and search capabilities.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Hassan Mohamed  
Feel free to reach out for any questions or suggestions!  
Email: 📧 hassan.mostafa2251@gmail.com  


This README provides all necessary details for installation, usage, and project structure while highlighting key features and dummy data. Adjust it to match your specific project structure or additional features.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/HassanMostafaa/gaming-vault)