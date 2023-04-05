const { connect, connection } = require('mongoose');


//what do I put in my connect?
connect('mongodb://localhost/videosAndResponses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;