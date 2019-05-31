	let ws = require('ws');
	let uuid = require('uuid');
    var bodyParser = require('body-parser');

	let socketServer = ws.Server;
	let wss = new socketServer({
		port:8090,
	});

	let clients = [];

	function broadcastSend(type, message, nickname) {
		clients.forEach(function(v,i){
			if(v.ws.readyState === ws.OPEN) {
				v.ws.send(JSON.stringify({
					"type":type,
					"nickname":nickname,
					"message":message
				}));
			}
		})
	}

	wss.on('connection',function(ws){
		let client_uuid = uuid.v4();
		let nickname = '游客';
		clients.push({
			"id":client_uuid,
			"ws":ws,
			"nickname":nickname
		});

		console.log(`clients ${client_uuid} connected`);

		function closeSocket() {
			for(let i=0;i<clients.length;i++) {
				let disconnect_message = `${nickname} has disconnected`;
				broadcastSend("notification", disconnect_message, nickname);
				clients.splice(i, 1);
			}
		}

		ws.on('message', function(message) {
			if(message.indexOf('/nick') === 0) {
				let nickname_array = message.split(' ');
				if(nickname_array.length >= 2) {
					let old_nickname = nickname;
					nickname = nickname_array[1];
					let nickname_message = `Client ${old_nickname} change to ${nickname}`;
					broadcastSend("nick_update", nickname_message, nickname);
				}
			} else {
				broadcastSend("message", message, nickname);
			}
		});
		/*监听断开连接*/
		ws.on('close', function() {
			closeSocket();
		})

	})
