const redis = require('redis');
const client = redis.createClient(6379,'localhost');

//string
client.set('hello2','world2');
client.get('hello2',function(err,v) {
	console.log('hello2 = ', v);	//hello2 = world2
});

//object.toString 存储时自动调用object.toString
client.set('hello3',{a:1});
client.get('hello3',function(err,v) {
	console.log('hello3 = ', v);	//hello3 =  [object Object]
});

client.set('hello4', JSON.stringify({a:1}));
client.get('hello4',(err,v) => {
	console.log(v);		//{"a":1}
	var obj = JSON.parse(v);
	console.log(obj.a);	//1
})