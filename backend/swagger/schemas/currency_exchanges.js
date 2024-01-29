/**
 * @swagger
 * components:
 *   schemas:
 *     CurrencyExchange:
 *       type: object
 *       required:
 *         - baseSymbol
 *         - rates
 *         - createdAt  
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the currency
 *         baseSymbol:
 *           type: string
 *           description: The base currency symbol
 *         rates:
 *           type: array
 *           items: 
 *             type: object
 *             properties:
 *               symbol: 
 *                 type: string
 *               rate:
 *                 type: number
 *           description: The array of rates
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the currency exchange was added
 *       example:
 *         _id: 600905bd9640ea4c894d36e
 *         baseSymbol: PHP
 *         rates: [{symbol: 'USD', rate: 1000}]
 *         createdAt: 24-01-28 00:00:00
 * tags:
 *   name: Currency Exchanges
 *   description: The currency exchanges managing API
 * /exchanges:
 *   get:
 *     summary: Lists all the currency exchanges
 *     tags: [Currency Exchanges]
 *     responses:
 *       200:
 *         description: The list of the currency exchanges
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CurrencyExchange'
 *   post:
 *     summary: Create a new currency exchange
 *     tags: [Currency Exchanges]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CurrencyExchange'
 *     responses:
 *       200:
 *         description: The created currency exchange.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CurrencyExchange'
 *       500:
 *         description: Internal server error
 * /exchanges/convert:
 *   get:
 *     summary: Converts values using exchange rates
 *     tags: [Currency Exchanges]
 *     parameters:
 *       - in: query
 *         name: from
 *         type: integer
 *         required: true
 *         description: Convert from currrency exchange to currency
 *       - in: query
 *         name: to
 *         type: integer
 *         required: true
 *         description: Convert to currrency exchange rates
 *       - in: query
 *         name: number
 *         type: float
 *         description: The amount to exchange
 *     responses:
 *       200:
 *         description: The currency exchange response by symbol
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CurrencyExchange'
 *       404:
 *         description: The currency exchange was not found
 * /exchanges/{symbol}:
 *   get:
 *     summary: Get the currency exchange by symbol
 *     tags: [Currency Exchanges]
 *     parameters:
 *       - in: path
 *         name: symbol
 *         schema:
 *           type: string
 *         required: true
 *         description: The currency symbol
 *     responses:
 *       200:
 *         description: The currency exchange response by symbol
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CurrencyExchange'
 *       404:
 *         description: The currency was not found
 *   delete:
 *     summary: Remove the currency by symbol
 *     tags: [Currency Exchanges]
 *     parameters:
 *       - in: path
 *         name: symbol
 *         schema:
 *           type: string
 *         required: true
 *         description: The currency symbol
 *
 *     responses:
 *       200:
 *         description: The currency exchange was deleted
 *       404:
 *         description: The currency exchange was not found
 */