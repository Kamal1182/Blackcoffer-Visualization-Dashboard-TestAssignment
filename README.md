# Blackcoffer Visualization Dashboard

## Overview
This project involves creating a data visualization dashboard using the provided JSON data. The dashboard will display various insights through interactive graphs, charts, and visuals. The data will be stored in a MongoDB database and accessed via Node.js APIs.

## Project Objectives
- Create a MongoDB database from the provided JSON data (`jsondata.json`).
- Develop a data visualization dashboard using the MEAN stack (MongoDB, Express.js, Angular, Node.js).
- Utilize visualization libraries D3.js is used.
- Implement interactive graphs, charts, and visuals to generate insights from the data.
- Incorporate various filters to enhance the user experience.

## Data
- The data for the dashboard is provided in the file `jsondata.json`.

## Key Variables for Visualization
- Intensity
- Likelihood
- Relevance
- Year
- Country
- Topics
- Region
- City

## Filters to Implement
- End Year
- Topics
- Sector
- Region
- PEST
- Source
- SWOT
- Country
- City
- Any additional relevant filters based on the data

## Examples of Dashboards
For inspiration, you can refer to the following examples:
- [Analytics Dashboard](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/dashboards/analytics)
- [Apex Chart](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/charts/apex-chart)
- [Chart.js Examples](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/charts/chartjs)

### Prerequisites
- Node.js
- MongoDB
- Angular
- D3.js

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd project-directory
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project
1. Start MongoDB.
2. Import the JSON data into MongoDB:
   ```bash
   mongoimport --db <database-name> --collection <collection-name> --file jsondata.json --jsonArray
   ```
3. Start the Node.js server:
   ```bash
   node server.js
   ```
4. Run the Angular/React/React Native application:
   ```bash
   ng serve   # For Angular
   npm start  # For React
   react-native run-android  # For React Native (Android)
   react-native run-ios  # For React Native (iOS)
   ```

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- [Blackcoffer](https://blackcoffer.com)
- [Example Dashboards](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/dashboards/analytics)