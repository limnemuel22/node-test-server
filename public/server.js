const connect = require('connect');
const http = require('http');
const fs = require('fs');


const app = connect();
//404 response
function send404Response(res) {
    res.writeHead(404, {
        "context-Type": "text/plain"
    });
    res.write("Error 404: Page not found!");
    res.end();
}

//handle a user request
function onRequest(req, res) {

    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, {
            "context-Type": "text/html"
        });
        fs.createReadStream("./index.html").pipe(res);
    } else {
        send404Response(res);
    }

}

function profile(req, res) {
    console.log("User requested profile");
    //  next();
}

function forum(req, res) {
    console.log("User requested forum");
    //   next();
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is now running...");