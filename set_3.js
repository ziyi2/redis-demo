const client = require('./client');


client.sadd('helloSet',1);
client.sadd('helloSet','a');

client.smembers('helloSet',(err,members) => {
	console.log('helloSet = ', members);	//[1,'a']
});

//集合在插入数据的时候先观察值是否已存在,不存在则插入,否则不插入,这个适合做基站的命令池