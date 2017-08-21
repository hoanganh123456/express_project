/**
 * Created by hoanganh on 03/08/2017.
 */

const  express = require('express');
const reload = require('reload');
const app = express();
const io = require('socket.io')();
const  dataFile = require('./data/data.json');

app.set('port',process.env.PORT || 3000);
app.set('appData',dataFile);
app.set('view engine','ejs');
app.set('views','app/views');

app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index.js'));
app.use(require('./routes/speakes.js'));
app.use(require('./routes/feedback.js'));
app.use(require('./routes/api.js'));
app.use(require('./routes/chat.js'));


let port = app.get('port');
let server = app.listen(port,function () {
    console.log('listening on port ' + port);
});

io.attach(server);

io.on('connection',function (socket) {
    console.log('user connected');
    socket.on('postMessage',function (data) {
        // console.log('user disconnected');
        io.emit('updateMessage',data);
    });
})

reload(server,app);