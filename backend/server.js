const app = require("./app");
const {
    currencyExchangeImport,
} = require("./src/services/CurrencyExchangeImportService");
const { CronJob } = require("cron");
const bodyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const job = new CronJob(
    "*/30 * * * *",
    () => {
        currencyExchangeImport()
            .then((data) => console.info("Dados importados"))
            .catch((err) => console.error(err));
    },
    null,
    true,
    "America/Sao_Paulo"
);

job.start();

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Currency Converter API",
            version: "1.0.0",
            description:
                "This is a simple API application for converting currencies at different exchange rates",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Gabriel Barboza",
                url: "https://example.com",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://0.0.0.0:5000",
            },
        ],
    },
    apis: ["./swagger/schemas/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.listen(5000);
