const express = require('express');
const router = express.Router();

router.put('/', (req, res) => {
  req.db.collection('quotes') 
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  });
});

router.delete('/', (req, res) => {
  req.db.collection('quotes').findOneAndDelete({name: req.body.name}, (err, result) => {
    if (err) return res.send(500, err);
    res.send('A darth vadar quote got deleted');
  });
});

router.get('/', (req, res) => {
  req.db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render( 'index.ejs', {quotes: result})
  })
})

router.post('/', (req, res) => {
  req.db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  });
});


module.exports = router;



