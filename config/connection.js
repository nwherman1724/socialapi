const { connect, connection } = require('mongoose');


//what do I put in my connect?
connect('mongodb://localhost/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;