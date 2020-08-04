var express = require('express');
var app = express();

var SerialPort = require("serialport");
var serialPort = new SerialPort("COM3", {
	baudRate : 9600
}, false);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
//4

app.get('/c4', function (req, res) {
    serialPort.write('n', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/cs4', function (req, res) {
    serialPort.write('m', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/d4', function (req, res) {
    serialPort.write('o', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/ds4', function (req, res) {
    serialPort.write('p', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/e4', function (req, res) {
    serialPort.write('q', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/f4', function (req, res) {
    serialPort.write('r', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/fs4', function (req, res) {
    serialPort.write('s', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/g4', function (req, res) {
    serialPort.write('t', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/gs4', function (req, res) {
    serialPort.write('u', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/a4', function (req, res) {
    serialPort.write('v', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/as4', function (req, res) {
    serialPort.write('w', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/b4', function (req, res) {
    serialPort.write('x', function(){ });
    res.sendFile(__dirname + '/index.html');
});

//5
app.get('/c5', function (req, res) {
    serialPort.write('y', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/cs5', function (req, res) {
    serialPort.write('z', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/d5', function (req, res) {
    serialPort.write('A', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/ds5', function (req, res) {
    serialPort.write('B', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/e5', function (req, res) {
    serialPort.write('C', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/f5', function (req, res) {
    serialPort.write('D', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/fs5', function (req, res) {
    serialPort.write('E', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/g5', function (req, res) {
    serialPort.write('F', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/gs5', function (req, res) {
    serialPort.write('G', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/a5', function (req, res) {
    serialPort.write('H', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/as5', function (req, res) {
    serialPort.write('I', function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/b5', function (req, res) {
    serialPort.write('J', function(){ });
    res.sendFile(__dirname + '/index.html');
});
//

app.get('/c', function (req, res) {
    serialPort.write("a", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/cs', function (req, res) {
    serialPort.write("b", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/d', function (req, res) {
    serialPort.write("c", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/ds', function (req, res) {
    serialPort.write("d", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/e', function (req, res) {
    serialPort.write("e", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/f', function (req, res) {
    serialPort.write("f", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/fs', function (req, res) {
    serialPort.write("g", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/g', function (req, res) {
    serialPort.write("h", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/gs', function (req, res) {
    serialPort.write("i", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/a', function (req, res) {
    serialPort.write("j", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/as', function (req, res) {
    serialPort.write("k", function(){ });
    res.sendFile(__dirname + '/index.html');
});
app.get('/b', function (req, res) {
    serialPort.write("l", function(){ });
    res.sendFile(__dirname + '/index.html');
});

app.listen(8888);

console.log("Server Listening 8888");