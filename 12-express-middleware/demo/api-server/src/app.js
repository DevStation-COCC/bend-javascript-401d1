'use strict';

// Debug Utility (needs to be required in the old node way)
const debug = require('debug')('app');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

let app = express();

// Built-In Express Body Parser for raw JSON and for FORM posts
app.use(cors()); // Make sure we can get cross-origin requests
app.use(morgan('dev')); // Some nice logging
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Our API
import router from './api/api.js';
import notFound from './middleware/404';

app.use(router);
app.use(notFound);

module.exports = app;