'use strict';

import express from 'express';
const router = express.Router();

import Notes from '../models/notes.js';

let sendJSON = (res, data) => {
  res.status(200).json(data);
};

router.post('/api/v1/notes', (req, res) => {
  let note = new Notes(req.body.title, req.body.content);

  note.save()
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

export default router;