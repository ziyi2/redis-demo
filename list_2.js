const client = require('./client');

//list其实很像数组 类似于数组的push,从右边插入
//右入栈
client.rpush('helloList','a');
client.rpush('helloList','b');
client.rpush('helloList',1);

//lrange读取列表, 从0位到最后一位
client.lrange('helloList',0,-1,(err,lists) => {
	console.log('client.lrange helloList = ', lists);	//['a','b','1']
});

//其实就是类似于数组的unshift
//左入栈
client.lpush('helloList',2);	
client.lrange('helloList',0,-1,(err,lists) => {
	console.log('client.lrange helloList = ', lists);	//['2','a','b','1']
});

//左出栈
client.lpop('helloList',(err,list) => {
	console.log('client.lrange helloList = ', list);	//2
});

//右出栈
client.rpop('helloList',(err,list) => {
	console.log('client.lrange helloList = ', list);	//1
});


client.lrange('helloList',0,-1,(err,lists) => {
	console.log('client.lrange helloList = ', lists);	//[a','b']
});