# noai

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Installation

1. **Clone the repository:**

   ```sh
   gh repo clone noahskorner/noai.new
   cd noai.new
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Environment variables**

   Copy the `.env.example` file to `.env.local`:

   ```sh
   cp .env.example .env.local
   ```

4. **Start Supabase:**

   This command will create and run the Docker containers for Supabase.

   ```sh
   npm run supabase:start
   ```

5. **Run the application:**

   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.
