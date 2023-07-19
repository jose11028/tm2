const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Tmer = require('../models/tmer');


/* router.get('', async function(req,res) {
  Tmer.find({}, function(err, foundTmers) {
    res.json(foundTmers);
  })
}); */

router.get('', async function (req, res) {
  try {
    const foundTmers = await Tmer.find({});
    res.json(foundTmers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


/* router.get('/:id', function(req, res) {
  const tmerId = req.params.id;

  Tmer.findById(tmerId, function(err, foundTmer) {
    res.json(foundTmer);
    }) */
    router.get('/:id', async function (req, res) {
      try {
        const tmerId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(tmerId)) {
          return res.status(400).json({ error: 'Invalid Tmer ID' });
        }

        const foundTmer = await Tmer.findById(tmerId);
        if (!foundTmer) {
          return res.status(404).json({ error: 'Could not find Tmer' });
        }

        res.json(foundTmer);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });




/*
router.get('/:id', async function (req, res) {
  try {
    const tmerId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(tmerId)) {
      return res.status(400).json({ error: 'Invalid Tmer ID' });
    }

    const foundTmer = await Tmer.findById(tmerId);
    if (!foundTmer) {
      return res.status(404).json({ error: 'Tmer not found' });
    }

    res.json(foundTmer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 */

module.exports = router;
