/**
 * Imports
 */
import express from "express";
import { Pool } from 'pg';
import cors from 'cors';

import { routes } from './routes/index';
import * as db from './db/index';

const dotenv = require('dotenv');

dotenv.config();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8080;

// Make the app
const app = express();

/**
 *  App Configuration
 */
app.use(express.json());
app.use('', routes);

app.use(express.urlencoded({ extended: false }));
app.use(cors());

/**
 * Database Connection
 */

//TODO
db.setupTables();

/**
 * Server Activation / Confirmation
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
