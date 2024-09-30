# curso-cypress
npm init -y: El comando npm init -y se utiliza en Node.js para inicializar un nuevo proyecto y generar un archivo package.json con valores predeterminados.

npm install cypress --save--dev: El comando npm install cypress --save-dev se utiliza para instalar Cypress

cypress open: inicializar proyecto en cypress

npm i @mmisty/cypress-allure-adapter : instalar paquete para reportes
npm i allure-commandline
npm install allure-commandline -g
configurar archivo cypress.config.js
configurar cypress/e2e/support/e2e.js
configurar script en package.json: "generar-reporte": "allure generate allure-results -o allure-report --clean"