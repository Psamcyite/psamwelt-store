
# Psamwelt Store

Psamwelt Store is an eCommerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a frontend for customers to browse and purchase products, a backend for managing products and orders, and an admin panel for site administration.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Folder Structure](#folder-structure)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
6. [License](#license)

## Installation
To get started with Psamwelt Store, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Psamcyite/psamwelt-store.git
   ```

2. **Install dependencies:**
   ```bash
   cd psamwelt-store
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_uri
     SECRET_KEY=your_secret_key
     ```

4. **Run the application:**
   ```bash
   npm start
   ```

5. **Access the application:**
   Open your web browser and navigate to `http://localhost:3000`.

## Usage
- **Customer Frontend:** Visit the website to browse products, add them to cart, and complete purchases.
- **Admin Panel:** Access the admin panel by navigating to `http://localhost:3000/admin`. Log in with admin credentials to manage products, orders, and users.

## Folder Structure
```
psamwelt-store/
├── client/              # Frontend React application
├── server/              # Backend Node.js application
└── README.md            # Project documentation
```

## Technologies Used
- **Frontend:** React.js, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)

## Contributing
Contributions are welcome! Feel free to submit pull requests or open issues for any improvement
## License
This project is licensed under the [MIT License](LICENSE).
