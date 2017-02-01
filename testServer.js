/**
 * Created by SamJustice on 1/20/17.
 */

var net = require('net');
var client;

// Creates a new TCP server. The handler argument is automatically set as a listener for the 'connection' event
var server = net.createServer(function(socket) {

    client = socket.remoteAddress + ':' + socket.remotePort;
    console.log("Connection from " + client);

    socket.on('data', function(data) {
        var response = data.toString().trim();
        console.log(response);
    });

    socket.on('end', function() {
        console.log("Connection with " + client + " closed...");
    });

});

// Fire up the server bound to port 7000 on localhost
server.listen(7000, "192.168.7.1");

// Put a friendly message on the terminal
console.log("TCP server listening on port 7000 at 192.168.7.1");
