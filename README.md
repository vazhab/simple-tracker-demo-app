<h1>Simple Tracker Demo App</h1>

<p>Welcome to the Simple Tracker Demo App repository! This is a demo application that demonstrates the basic features of a GPS tracker, including recording and displaying tracks, as well as uploading and downloading tracks from a server.</p>

<h2>Getting Started</h2>

<p>To get started with the Simple Tracker Demo App, follow these steps:</p>

<ol>
  <li>Clone the repository to your local machine:</li>
</ol>

<pre><code>git clone https://github.com/vazhab/simple-tracker-demo-app.git
</code></pre>

<ol start="2">
  <li>Navigate to the directory where the repository was cloned:</li>
</ol>

<pre><code>cd simple-tracker-demo-app
</code></pre>

<ol start="3">
  <li>Install the required dependencies:</li>
</ol>

<pre><code>npm install
</code></pre>

<ol start="4">
  <li>Run the application:</li>
</ol>

<pre><code>npm start
</code></pre>

<p>The application will now be running at <code>http://localhost:3000</code>.</p>

<h2>Tech Stack</h2>

<p>This application was built using the following technologies:</p>

<ul>
  <li><a href="https://reactjs.org/">React</a> for the frontend</li>
  <li><a href="https://expo.io/">Expo</a> for building the mobile app</li>
  <li><a href="https://expressjs.com/">Express</a> for the backend server</li>
  <li><a href="https://www.mongodb.com/">MongoDB</a> for storing the tracks</li>
</ul>

<h2>Prerequisites</h2>

<p>Before you can run the Simple Tracker Demo App, you will need to set up the following:</p>

<ul>
  <li>A MongoDB database</li>
  <li>A backend server for the app. You can use the <a href="https://github.com/vazhab/track-server">Track Server</a> for this purpose.</li>
</ul>

<p>Once you have set up these prerequisites, you will need to update the `serverUrl` and `databaseUrl` constants in the `src/config.js` file with the appropriate values for your setup.</p>

<h2>Contributing</h2>

<p>We welcome contributions to the Simple Tracker Demo App! If you have an idea for a new feature or have found a bug, please open an issue in the repository.</p>

<h2>License</h2>

<p>This project is
