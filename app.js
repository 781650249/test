var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Mock = require('mockjs');

//body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//静态文件
app.use(express.static('src'));



app.get('/index',function(req,res){
    const Random = Mock.Random
    var data = Mock.mock({
        "data|6":[{
          'title':Random.title( 1, 2 ),
          'paragraph1':'@cparagraph(1,2)',
          'img':Random.image('200x100', '#000', '#fff', 'Mock.js')
        }]
    }); 
    return res.send({data:data});
});


app.get('/news',function(req,res){  
    const Random = Mock.Random
    var data = Mock.mock({
        "data|40":[{
          'ctitle': '@ctitle',
          'timessss': '@time',
          'cname': '@cname',
          'paragraph1':'@cparagraph(1,2)',
          'img':Random.image('180x200', '#000', '#fff', 'news')
        }]
    }); 
    return res.send({data:data});
});


app.listen(80,function(){   
    console.log('服务已启动')
})