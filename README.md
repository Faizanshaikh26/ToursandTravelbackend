<h1>Travel - Backend</h1>

<p><strong>Travel</strong> is the backend server for a tours and travel website, built with Express.js and MongoDB. It provides RESTful API endpoints for user authentication, tour booking, and contact form submissions, ensuring a secure and reliable platform for users to plan their travels.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>

<h2 id="about-the-project">About the Project</h2>
<p>The backend server for the <strong>Travel</strong> website handles user authentication, booking requests, and contact form submissions. It ensures data integrity and security, with robust features for a smooth travel booking experience.</p>

<h2 id="features">Features</h2>
<ul>
    <li><strong>JWT Authentication:</strong> Provides secure login and signup functionality.</li>
    <li><strong>Appointment Booking:</strong> Authenticated users can book tours.</li>
    <li><strong>Contact Form Submission:</strong> Allows users to send inquiries through a contact form.</li>
</ul>

<h2 id="tech-stack">Tech Stack</h2>
<ul>
    <li><strong>Node.js:</strong> JavaScript runtime for server-side programming.</li>
    <li><strong>Express.js:</strong> Web application framework for building RESTful APIs.</li>
    <li><strong>MongoDB:</strong> NoSQL database for storing user, booking, and contact data.</li>
    <li><strong>Dependencies:</strong> Packages include bcrypt, cors, dotenv, JSON Web Tokens, mongoose, and nodemailer.</li>
</ul>

<h2 id="installation">Installation</h2>
<p>To set up the backend server locally, follow these steps:</p>

<h3>Prerequisites</h3>
<ul>
    <li><strong>Node.js:</strong> Install <a href="https://nodejs.org/">Node.js</a>.</li>
    <li><strong>MongoDB:</strong> Install MongoDB or set up a MongoDB Atlas account.</li>
</ul>

<h3>Steps</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/Faizanshaikh26/ToursandTravelbackend.git</code></pre>
        <pre><code>cd server</code></pre>
    </li>
    <li>Install dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file with your environment variables:
        <pre><code>
            MONGODB_URI=your_mongodb_uri
            JWT_SECRET=your_jwt_secret
            PORT=5000
        </code></pre>
    </li>
</ol>

<h2 id="usage">Usage</h2>
<p>To start the server in development mode:</p>
<pre><code>npm run dev</code></pre>
<p>The server will start by default on <code>http://localhost:8000</code>.</p>

<h2 id="api-endpoints">API Endpoints</h2>
<table>
    <thead>
        <tr>
            <th>HTTP Method</th>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/signup</td>
            <td>User signup</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/login</td>
            <td>User login</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/contact</td>
            <td>Submit a contact form</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/booking</td>
            <td>Book a tour (only for authenticated users)</td>
        </tr>
    </tbody>
</table>

<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! Please follow these steps:</p>
<ol>
    <li>Fork the repository.</li>
    <li>Create a feature branch: <code>git checkout -b feature/new-feature</code>.</li>
    <li>Commit your changes: <code>git commit -m 'Add new feature'</code>.</li>
    <li>Push to the branch: <code>git push origin feature/new-feature</code>.</li>
    <li>Open a pull request.</li>
</ol>

<h2 id="license">License</h2>
<p>Distributed under the MIT License. See <code>LICENSE</code> for more information.</p>

<h2 id="contact">Contact</h2>
<p>For questions or feedback, contact the maintainers:</p>
<ul>
    <li><strong>Faizan</strong> - <a href="https://github.com/Faizanshaikh26">@Faizanshaikh26</a> - Faizansheikh8209@gmail.com</li>
</ul>
