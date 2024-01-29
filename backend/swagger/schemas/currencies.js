/**
 * @swagger
 * components:
 *   schemas:
 *     Currency:
 *       type: object
 *       required:
 *         - symbol
 *         - label
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the currency
 *         symbol:
 *           type: string
 *           description: The currency symbol
 *         label:
 *           type: string
 *           description: The currency label
 *       example:
 *         _id: 600905bd9640e7037b38209c
 *         symbol: PHP
 *         label: Philippine Peso
 * tags:
 *   name: Currencies
 *   description: The currencies managing API
 * /currencies:
 *   get:
 *     summary: Lists all the currencies
 *     tags: [Currencies]
 *     responses:
 *       200:
 *         description: The list of the currencies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Currency'
 *   post:
 *     summary: Create a new currency
 *     tags: [Currencies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Currency'
 *     responses:
 *       200:
 *         description: The created currency.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Currency'
 *       500:
 *         description: Internal server error
 * /currencies/{symbol}:
 *   get:
 *     summary: Get the currency by symbol
 *     tags: [Currencies]
 *     parameters:
 *       - in: path
 *         name: symbol
 *         schema:
 *           type: string
 *         required: true
 *         description: The currency symbol
 *     responses:
 *       200:
 *         description: The currency response by symbol
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Currency'
 *       404:
 *         description: The currency was not found
 *   put:
 *    summary: Update the currency by the symbol
 *    tags: [Currencies]
 *    parameters:
 *      - in: path
 *        name: symbol
 *        schema:
 *          type: string
 *        required: true
 *        description: The currency symbol
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Currency'
 *    responses:
 *      200:
 *        description: The currency was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Currency'
 *      404:
 *        description: The currency was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the currency by symbol
 *     tags: [Currencies]
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
 *         description: The currency was deleted
 *       404:
 *         description: The currency was not found
 */