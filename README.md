# FramerFlow - Framing Management Application

FramerFlow is a management application designed specifically for framers, allowing them to manage their clients, orders, quotes, stocks, suppliers, and products. It provides a comprehensive solution to simplify daily operations and enhance the efficiency of the framing process.

## Features

- **Home** - Overview of the dashboard with key information such as sales statistics, ongoing orders, pending orders, etc.

- **Dashboard** - Display of key metrics, charts, and essential information to track the overall business performance.

- **Clients** - Management of client information, including adding, editing, and deleting clients. Display of client details and order history.

- **Orders** - List of orders with key information (order number, date, status, total amount, etc.). Sorting and filtering functionalities to facilitate searching for specific orders. Actions available for each order (view details, edit, delete, etc.).

- **Quotes** - Creation and management of quotes for clients. Automatic cost calculation based on dimensions and framing types. Tracking of quote status and conversion to orders.

- **Stocks** - Management of framing supply stocks, including adding, editing, and deleting products. Tracking of available quantities, references, and prices.

- **Suppliers** - Management of supplier information, including contact details, supplied products, prices, etc.

- **Products** - List of available products with details such as references, descriptions, prices (before and after tax), etc.

## Installation

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Configure environment variables: Rename the `.env.example` file to `.env` and update the values accordingly.
4. Start the application: `npm run dev`

## Technologies Used

- Next.js - React framework for web development
- Prisma - ORM for database management
- Tailwind CSS - CSS framework for design and layout
- PostgreSQL - Relational database management system

## Contributing

Contributions to the application are welcome! If you'd like to contribute, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. For more information, please see the `LICENSE` file.