const client = require('../client');

client.subscribe('helloPublish');	//订阅helloPublish频道

client.on('message',(channel,msg) => {
	console.log('channel,msg',channel,msg);
})