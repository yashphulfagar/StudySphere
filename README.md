# StudySphere

**StudySphere** is a collaborative portal developed by students for students, designed to enhance the academic experience through seamless note sharing, access to question papers, and a comprehensive all-in-one student platform. Whether you're looking to share your notes, find past exam papers, or connect with fellow students, StudySphere has got you covered!

## Features

- **Note Sharing**: Upload and share study notes with classmates.
- **Question Papers**: Access a repository of previous exam papers for better preparation.
- **Student Community**: Connect with peers, ask questions, and collaborate on study materials.
- **User-Friendly Interface**: Easy navigation and intuitive design for a seamless user experience.
- **Search Functionality**: Quickly find notes or question papers with a robust search feature.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Django
- **Styling**: CSS Modules or Styled Components
- **Deployment**: Vercel / Heroku / DigitalOcean

## Installation

To run the StudySphere application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/studysphere.git
   ```
2. Navigate to the project directory:
   ```bash
   cd studysphere
   ```
3. Install the frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
4. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```
5. Install the backend dependencies (using pip):
   ```bash
   pip install -r requirements.txt
   ```
6. Run database migrations:
   ```bash
   python manage.py migrate
   ```
7. Start the Django development server:
   ```bash
   python manage.py runserver
   ```
8. Start the React development server (in a new terminal):
   ```bash
   cd frontend
   npm start
   ```

The app will be running on [http://localhost:3000](http://localhost:3000) for the frontend and [http://localhost:8000](http://localhost:8000) for the backend.

## Usage

- Explore the portal for shared notes and question papers.
- Upload your notes to contribute to the community.
- Use the search bar to find specific materials quickly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
