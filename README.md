# Scribble Share

## Description

Scribble Share is a modern, user-friendly notes application that combines rich text editing capabilities with seamless sharing features. Built with Next.js and TypeScript, it offers a responsive design and supports both authenticated and guest users.

### Key Features:

- Rich text editing with Tiptap
- A4 size sheet layout for notes
- Authentication via Auth0 (supporting major providers)
- Guest mode for quick access without login
- Easy note sharing through simple link copying
- Responsive design using Tailwind CSS

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- PostgreSQL with Prisma ORM
- Auth0 for authentication
- Tailwind CSS for styling
- Tiptap for rich text editing

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14.x or later)
- npm (v6.x or later)
- Git
- PostgreSQL (v12 or later)

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/scribble-share.git
   cd scribble-share
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to `.env.local`
   - Fill in the necessary environment variables:
     ```
     DATABASE_URL="postgresql://username:password@localhost:5432/scribble_share"
     AUTH0_SECRET='your-auth0-secret'
     AUTH0_BASE_URL='http://localhost:3000'
     AUTH0_ISSUER_BASE_URL='https://your-domain.auth0.com'
     AUTH0_CLIENT_ID='your-auth0-client-id'
     AUTH0_CLIENT_SECRET='your-auth0-client-secret'
     ```

4. Set up the database:
   - Ensure your PostgreSQL server is running
   - Run Prisma migrations:
     ```
     npx prisma migrate dev
     ```

5. Build the application:
   ```
   npm run build
   ```

6. Start the development server:
   ```
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:3000`


## Development Workflow

1. Create a new branch for each feature or bug fix
2. Make your changes and commit them with clear, concise commit messages
3. Push your branch and create a pull request
4. Wait for code review and address any feedback
5. Once approved, merge your changes into the main branch

## Deployment

Deployment instructions will vary based on your hosting provider. Here are general steps:

1. Ensure all environment variables are set in your production environment
2. Build the application: `npm run build`
3. Start the production server: `npm start`

For platform-specific instructions (e.g., Vercel, Heroku), please refer to their respective documentation.

Happy note-taking with Scribble Share! 📝✨