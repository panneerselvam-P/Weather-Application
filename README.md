# 🌦️ Weather Application

A modern, responsive weather application built with **React** and **Vite**. This application allows users to fetch real-time weather data for any city globally using the OpenWeatherMap API.

## 🚀 Features

-   **Real-time Weather Data**: Get current temperature, humidity, and wind speed.
-   **City Search**: Search for weather information by city name.
-   **Dynamic Weather Icons**: Visual representation of weather conditions (clear, cloudy, rain, snow, etc.).
-   **Detailed Information**: Displays latitude, longitude, and country code.
-   **Responsive Design**: Optimized for various screen sizes.
-   **Loading States**: Smooth user experience with loading indicators.
-   **Error Handling**: Informative messages for invalid city names or network issues.

## 🛠️ Tech Stack

-   **Frontend**: React 19, CSS3
-   **Build Tool**: Vite
-   **API**: [OpenWeatherMap API](https://openweathermap.org/api)
-   **Icons**: Custom weather icons assets

## 📦 Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/panneerselvam-P/Weather-Application.git
    ```
2.  **Navigate to the project directory**
    ```bash
    cd Weather-App
    ```
3.  **Install dependencies**
    ```bash
    npm install
    ```
4.  **Run the development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 🔑 API Key Configuration

The application uses an API key from OpenWeatherMap. Currently, it is hardcoded in `src/Weather.jsx`. 

> [!IMPORTANT]
> For production environments, it is recommended to use environment variables (`.env`) to store sensitive information like API keys.

## 📁 Project Structure

```text
Weather-App/
├── public/          # Static assets
├── src/
│   ├── assets/      # Image and icon assets
│   ├── Weather.jsx  # Main application logic and UI
│   ├── Weather.css  # Styling for the application
│   └── main.jsx     # Entry point
├── index.html       # HTML template
├── package.json     # Project dependencies and scripts
└── vite.config.js   # Vite configuration
```

## 👨‍💻 Designed By

**Panneerselvam**

---

