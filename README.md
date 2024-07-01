# Weather Web App README

## Introduction
This is a simple weather web application built using HTML, CSS, and JavaScript. The app fetches weather data from a public API and displays current weather information based on the user's location or a searched city.

## Features
- Displays current weather information including temperature, humidity, wind speed, and weather description.
- Fetches weather data based on user's current location using Geolocation API.
- Allows users to search for weather information by city name.
- Responsive design for use on various devices.
//
## Technologies Used
- HTML: Structure of the web app.
- CSS: Styling of the web app.
- JavaScript: Fetching weather data and handling user interactions.
- Weather API: External API to get weather data (e.g., OpenWeatherMap API).

## Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, etc.).
- An API key from a weather data provider (e.g., OpenWeatherMap).

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/weather-webapp.git
   cd weather-webapp
   ```

2. **Set up the API key:**
   - Obtain an API key from OpenWeatherMap or another weather data provider.
   - Create a `config.js` file in the root directory and add the following code:
     ```javascript
     const API_KEY = 'your_api_key_here';
     ```

3. **Open the `index.html` file in your web browser:**
   - Simply double-click the `index.html` file or open it using your browser's file open option.

## Project Structure
```
weather-webapp/
├── index.html
├── style.css
├── script.js
└── config.js
```

### `index.html`
The main HTML file containing the structure of the web app.

### `style.css`
The CSS file containing styles for the web app.

### `script.js`
The JavaScript file containing the logic for fetching weather data and updating the UI.

### `config.js`
A configuration file where the API key is stored.

## Usage

### Fetching Weather Data by Current Location
1. Upon loading the web app, the browser will prompt the user to allow location access.
2. If permission is granted, the app will fetch and display the weather data for the user's current location.

### Searching for Weather Data by City Name
1. Enter the city name in the search input field.
2. Click the search button or press Enter.
3. The app will fetch and display the weather data for the specified city.

## Customization
- **Styling:** Modify the `style.css` file to change the appearance of the web app.
- **Functionality:** Update the `script.js` file to add new features or improve existing ones.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) for location-based weather data.

## Contact
For any inquiries or feedback, please contact 
[guhaaswint@gmail.com]
---

;)
