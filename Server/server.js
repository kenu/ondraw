var fs = require('fs');
var http = require('http');
var connect = require('connect');
var socketio = require('socket.io');

var roomArray = [];

var server = http.createServer();

server.listen(52273);

var io = socketio.listen(server);
io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    // join 이벤트
    socket.on('join', function (data) {
    	var isRoom = false;
	    var	id = socket.id;
    	    	
    	for ( var i=0; i < roomArray.length; i++ ) {
		    if (roomArray[i].num == data.num) {
			    isRoom = true;
			    console.log(isRoom +' _ ' +data.num);
		    }
	    }
		if (!isRoom) {
			data.userId = id;
			roomArray.push(data);
		}
	    console.log('isRoom : ' + isRoom + ' - id : ' + id + ' - num : ' + data.num);
   	    console.log(roomArray);
	    
	    if (!isRoom && data.opts == 'created') {
	        socket.join(data.num);
	        socket.set('room', data.num);		    
	        io.sockets.sockets[id].emit('validateRoom', { isRoom : isRoom, roomNum : data.num });
	    } else if (isRoom && data.opts == 'joined'){
		    socket.join(data.num);
		    socket.set('room', data.num);		    
		    isRoom = false;
		    io.sockets.sockets[id].emit('validateRoom', { isRoom : isRoom, roomNum : data.num });
	    }
/* 	    socket.get('room', function(err, data) { */
/* 	    	for (var i=0; i<io.sockets.in(data).length; i++) { */
/* 	        	console.log(io.sockets.in(data).sockets[id].id);	 */
/*         	} */
/* 	    }); */
    });

    // draw 이벤트
    socket.on('draw', function (data) {
        socket.get('room', function (error, room) {
            io.sockets.in(room).emit('line', data);
        });
    });

    // addroom 이벤트
    socket.on('deleteRoom', function (data) {
       	var id = socket.id;
       	var cnt = 0;
        for (var i=0; i<roomArray.length; i++) {
	        if (roomArray[i].num == data) {
		        roomArray.splice(i, 1);
		        cnt++;
	        }
        }
        
        io.sockets.sockets[id].emit('delete', cnt);    
    });
});