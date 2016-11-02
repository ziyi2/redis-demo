const client = require('../client');

client.publish('helloPublish','hello, i am publisher!');	//这里后发布先订阅