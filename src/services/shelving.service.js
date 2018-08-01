const wsServer = require("ws-server");
const http = require("http");

// Just making random shelf data.
var messageCount = Math.floor(Math.random() * 51);
var shelfMessages = [];
for (i = 0; i < messageCount; i++) {
  var randomCapaicity = (Math.floor(Math.random() * 15));
  var randomPackageDepth = (Math.floor(Math.random() * (randomCapaicity + 1)));

  var msg = {
    type: "shelf-stat",
    device: (Math.floor(Math.random() * 8) + "Fritos " + (Math.floor(Math.random() * 15))),
    date: Date.now(),
    capacity: randomCapaicity,
    packageDepth: randomPackageDepth,
    onShelf: ((Math.floor(Math.random() * randomCapaicity)).toString())
  };
  shelfMessages.push(msg);
}
let httpServer = http.createServer();
let server = wsServer({server: httpServer}, {
  timeout: 60000,

  connectionHandler: function (client) {
    console.log("Connection opened:", client.request.connection.remoteAddress);

    for (var msg in shelfMessages) {
      server.broadcast(JSON.stringify(shelfMessages[msg]));
    }
  },

  errorHandler: function (e) {
    console.log(e); //
  }
  ,


  messageHandler: function (data, client) {
    console.log(`Message from ${client.request.connection.remoteAddress}:`, data);
  },

  closeHandler: function (code, reason, client) {
    console.log("Connection closed:", client.request.connection.remoteAddress, code, reason);
  }
});

httpServer.listen(8181);
server.broadcast("test");
