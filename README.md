# Weather App Using OpenWeatherMap API

## Overview
This project is a Weather App that provides real-time weather forecasts to users. It is built using HTML, CSS, and JavaScript. The app utilizes the OpenWeatherMap API to fetch weather data in JSON format, allowing for efficient and up-to-date information retrieval. The interface is designed to be intuitive and visually appealing, enabling users to easily access and interpret weather forecasts.

## Features
- Real-time weather updates
- User-friendly interface
- Fetches weather data using OpenWeatherMap API
- Displays weather information such as temperature, humidity, wind speed, and weather conditions
- Responsive design for both desktop and mobile devices

## Project Details
- **Title**: Weather Forecasting
- **Technologies Used**: HTML, CSS, JavaScript
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Functionalities**:
  - Fetch and analyze weather data in JSON format
  - Display weather information to users in a clear and concise manner

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-app
    ```
3. Open `index.html` in your preferred web browser.

## Usage
1. Enter the name of the city for which you want to get the weather forecast.
2. Click on the ENTER button.
3. The app will display the current weather information for the specified city.

## Project Structure

- `css/styles.css`: Contains all the CSS styles for the app.
- `js/app.js`: Contains the JavaScript code to fetch and display weather data.
- `index.html`: The main HTML file for the app.

## API Integration
The app uses the OpenWeatherMap API to fetch weather data. To use the API, follow these steps:
1. Sign up for an API key at [OpenWeatherMap](https://openweathermap.org/api).
2. Replace `YOUR_API_KEY` in `app.js` with your actual API key.

### Example API Call
```javascript
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process and display the weather data
  })
  .catch(error => console.error('Error fetching weather data:', error));
