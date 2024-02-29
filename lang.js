<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neon Style Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Neon Style Website</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><button onclick="changeLanguage('ru')">RU</button></li>
            <li><button onclick="changeLanguage('en')">EN</button></li>
        </ul>
    </nav>

    <section class="main-content">
        <h2 id="welcome-text">Welcome to our Neon Style Website!</h2>
        <p>This is a simple example of a website with a neon theme.</p>
    </section>

    <footer>
        <p>&copy; 2024 Neon Style Website. All rights reserved.</p>
    </footer>

    <script>
        function changeLanguage(lang) {
            const welcomeText = document.getElementById('welcome-text');
            if (lang === 'ru') {
                welcomeText.textContent = 'Добро пожаловать на наш сайт в неоновом стиле!';
            } else if (lang === 'en') {
                welcomeText.textContent = 'Welcome to our Neon Style Website!';
            }
        }
    </script>
</body>
</html>
