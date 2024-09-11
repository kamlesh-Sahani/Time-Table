# Advanced College Timetable Management System

An advanced web application for managing college timetables with role-based access for administrators, faculty, and students. The system offers personalized schedules, real-time notifications, attendance tracking, and conflict-free resource allocation, built using modern technologies to ensure scalability, efficiency, and mobile responsiveness.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Validation and Security](#validation-and-security)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Role-based Access Control (RBAC)**: Custom views and permissions for admins, faculty, and students.
- **Dynamic Timetables**: Real-time updates and conflict-free scheduling.
- **Search & Filter**: Filter timetables by department, faculty, or course.
- **Notifications**: Real-time updates for class cancellations or schedule changes.
- **Attendance Tracking**: Faculty can log attendance directly in the system.
- **Classroom and Resource Allocation**: Prevents scheduling conflicts for rooms and resources.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Authentication**: Secure login and session management with JWT tokens.
- **Data Validation**: Input validation with Zod for secure and consistent data handling.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Next.js API routes
- **Database**: MongoDB
- **Validation**: Zod
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time Communication**: Socket.io or alternative
- **State Management**: React Context API (or Redux if necessary)
- **Deployment**: Vercel, Docker (for local development or containerized deployment)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud)
- [Git](https://git-scm.com/)

### Steps to Install

1. Clone the repository:

    ```bash
    git clone https://github.com/kamlesh-Sahani/Time-Table.git
    cd Time-Table
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up MongoDB and environment variables (see [Environment Variables](#environment-variables)).

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```plaintext
MONGODB_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
NEXTAUTH_URL=http://localhost:3000
```

### Example

```plaintext
MONGODB_URI=mongodb://localhost:27017/college-timetable
JWT_SECRET=your_jwt_secret_key
NEXTAUTH_URL=http://localhost:3000
```

## Usage

### Admin Role:

- Create and manage department timetables.
- Assign faculty to courses and rooms.
- View analytics on classroom and resource utilization.

### Faculty Role:

- View personal teaching schedules.
- Mark attendance for each class.
- Receive notifications for class changes.

### Student Role:

- View personalized timetable.
- Receive real-time updates for schedule changes.
- Track attendance history.

## Folder Structure

```plaintext
college-timetable/
├── public/                   # Static assets (images, favicon, etc.)
├── src/
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Next.js pages (including API routes)
│   │   ├── api/               # Backend API routes (auth, timetable, etc.)
│   ├── models/                # Mongoose models for MongoDB collections
│   ├── utils/                 # Helper functions and utility modules
│   ├── hooks/                 # Custom React hooks
│   ├── context/               # Context API setup for global state
│   └── styles/                # Tailwind CSS configuration and global styles
├── .env.local                 # Environment variables
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Project metadata and dependencies
```

## API Endpoints

### Authentication

- `POST /api/auth/login`: User login and JWT token generation.
- `POST /api/auth/register`: Register a new user (Admin/Faculty/Student).
- `GET /api/auth/me`: Retrieve authenticated user details.

### Timetable Management

- `GET /api/timetable`: Fetch all timetables.
- `POST /api/timetable`: Create a new timetable (admin-only).
- `PUT /api/timetable/:id`: Update a specific timetable (admin-only).
- `DELETE /api/timetable/:id`: Delete a timetable (admin-only).

### Attendance Management

- `GET /api/attendance`: Get attendance records.
- `POST /api/attendance`: Mark attendance for a class.
- `PUT /api/attendance/:id`: Update attendance for a class.

## Validation and Security

- **Zod**: Ensures consistent and secure data validation across API endpoints.
- **JWT**: Securely manages authentication and authorization via JSON Web Tokens.
- **Password Hashing**: User passwords are hashed and salted using `bcrypt` before storage in the database.
- **Role-Based Access**: API routes are protected by middleware that checks the user's role (Admin/Faculty/Student).

## Future Enhancements

- **iCal Integration**: Allow users to export their timetable to iCal format.
- **Push Notifications**: Integrate push notifications for real-time updates on schedule changes.
- **Attendance Analytics**: Provide faculty and admins with detailed analytics on student attendance.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: kamleshbca2005@gmail.com
- **LinkedIn**: [Kamlesh](https://www.linkedin.com/in/kamlesh-sahani-692ab7247)
