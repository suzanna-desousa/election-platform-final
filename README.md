# Election Platform

Welcome to the Election Platform application! This platform is built using Next.js and follows an MVC architecture, incorporating Firebase for authentication and data storage. The application allows users to register, log in, and participate in an election where they can vote for their favorite ice cream flavor candidates.

## Getting Started

### System Requirements

Before you begin, make sure your system meets the following requirements:

- Node.js 18.17 or later
- Supported operating systems: macOS, Windows (including WSL), and Linux

### Installation

To get started, follow these steps:

1. Open your terminal and run the following commands:

```bash
git clone https://github.com/suzanna-desousa/election-platform-final.git
cd election-platform-final
npm install
```

## Running the App

To run the application locally, use the following commands:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## MVC Architecture

The application follows an MVC (Model-View-Controller) architecture:

- **Models:** The `UserModel` represents a user (voter), and the `CandidateModel` represents a candidate (ice cream flavor).
- **Controllers:** The `UserController` manages user-related logic, while the `CandidateController` handles candidate-related logic.
- **Views:** The `pages` folder serves as the view, and the `components` folder stores UI components.

## Database and Authentication

The application utilizes Firebase for authentication and data storage:

- Firebase Authentication is used for user registration and login.
- Firebase Firestore is employed to store user and candidate information.

## Frontend

The frontend is designed using [https://v0.dev/](https://v0.dev/) templates to ensure a visually appealing and user-friendly experience.

## Data Validation

Data validation is implemented to ensure the security and integrity of user information:

- Passwords must be at least 8 characters long, contain at least 1 capital letter, and include at least 1 number.
- Email addresses are validated against the standard format, and email domains are verified using MailCheck.ai.

## Version Control

The project is version-controlled using GitHub. Feel free to explore the repository at [https://github.com/suzanna-desousa/election-platform-final](https://github.com/suzanna-desousa/election-platform-final).
