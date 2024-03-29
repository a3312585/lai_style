var express =require('express');
var bodyParser = require('body-parser');
var app = new express();
var path = require('path');
var mysql = require('mysql');
var moment = require('moment');
var  fs = require('fs');
var Excel = require('exceljs');
//环境配置
var environment = 'prod',
    databaseName ;

if (environment=='test'){

    databaseName = 'lai_style'

}else if(environment=='prod'){

    databaseName = 'lai_style'

}

var pool = mysql.createPool({
    // host: 'hostname',
	host: 'rm-wz9ggr16nm40w0cmf7o.mysql.rds.aliyuncs.com',
    user: 'root',
    // password: 'lai_style',
	password: 'zhong_yuan_2018',
    // port: '3000',
	port:'3306',
    database: databaseName,
    // 最大连接数，默认为10
    connectionLimit: 10,
    queueLimit:8
})

pool.getConnection(function(err,connection){
    if(err){
        console.log(err);
        return;
    }

    console.log('数据库连接成功')
})

app.use('/static',express.static(path.join(__dirname, '/views/static')));
app.set('/', path.join(__dirname, 'public/dist'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/', function(req, res, next) {
    res.type('html')
    res.render('index');
});

//设置跨域访问；
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//登录
app.post('/back/doLogin',function(req,res){

    res.setHeader('Access-Control-Allow-origin','*');
    res.setHeader("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.setHeader("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Accept', 'application/json');

    let dologin = 'select id,username,level,nickname from user where  username = ? and password = ? ';
    let loginInfo = req.body;
    let param =[];

    if (loginInfo) {
        param.push(loginInfo.username);
        param.push(loginInfo.password);
        pool.getConnection(function(err, connection){
            connection.query(dologin, param, function(error, result){

                if(error){
                    res.end({data:null,message:'请求失败',code:400})

                }else{
                    res.json({data:result,message:'登录成功',code:200});
                }

            });
            connection.release();
        });
    }else{
        res.json({data:null,message:'请确认账号密码',code:400})
    }
})

//日报列表
app.get('/back/dayreport/all/list',function(req,res){

    let now = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();

    let tablelist;
    let para = req.query.create_time;
    if(para&&para !=''){
        tablelist =  'select report_list.id,report_list.content,report_list.unfinish_reason,report_list.plan_time,report_list.create_time,user.nickname from report_list INNER JOIN user on report_list.userid=user.id where date_format(create_time,\'%Y-%m-%d\')=date_format( ? ,\'%Y-%m-%d\')  order by create_time desc';
    }else{
        tablelist =  'select report_list.id,report_list.content,report_list.unfinish_reason,report_list.plan_time,report_list.create_time,user.nickname from report_list INNER JOIN user on report_list.userid=user.id where date_format(create_time,\'%Y-%m-%d\')=date_format("'+now+'" ,\'%Y-%m-%d\')  order by create_time desc';
    }
    pool.getConnection(function(err, connection){
        connection.query(tablelist,para, function(error, result){
            if(error){
                res.json({data:null,message:'请求失败',code:400})
            }else{

                res.json({data:result,message:'获取成功',code:200});

            }
        })
        connection.release();
    })
})

//个人日报列表
app.get('/back/dayreport/list',function(req,res){

    let para =[],totalcount = 0;

    para = req.query.userid;

    let page = req.query.page,number = req.query.number;
    //console.log(page,number);
    let tablelist = 'select id,content,unfinish_reason,plan_time,create_time from report_list where  userid = ? order by create_time desc limit '+ (page-1)*number +','+ page*number;

    let gettotal = 'select count(*) from report_list where userid = ?';
    pool.getConnection(function(err, connection) {
        connection.query(gettotal, para, function (error, result) {
            if (error) {
                res.json({data: null, message: '暂无内容', code: 400})
            } else {
                totalcount = result[0]['count(*)'];
                if (totalcount && totalcount != 0) {
                    connection.query(tablelist, para, function (error, result) {
                        if (error) {
                            res.json({data: null, message: '请求失败', code: 400, total: totalcount})
                        } else {
                            res.json({data: result, message: '获取成功', code: 200, total: totalcount});

                        }
                    })
                }
            }
        })
        connection.release();
    })
})

//新增日报
app.post('/back/dayreport/add',function(req,res){
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    let addcode = 'insert into report_list(userid,content,unfinish_reason,plan_time) values(?,?,?,?)';
    // console.log(req.body);
    let para = req.body;
    let param = [];
    if (para.content) {
        param.push(para.userid);
        param.push(para.content);
        param.push(para.unfinish_reason);
        param.push(para.plan_time);
        pool.getConnection(function(err, connection) {
            connection.query(addcode, param, function(error, result){

                if(error){

                    res.json({data:null,message:'请求失败',code:400})

                }else{

                    res.json({data:result,message:'新增成功',code:200});

                }
            });
            connection.release();
        })
    }else{
        res.json({data:null,message:'参数有误',code:400})
    }
})

//修改日报
app.post('/back/dayreport/modify',function(req,res){
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    let editcode = 'update  report_list set userid=?, content=?, unfinish_reason=?, plan_time=? where id =?' ;
    //update report_list set content=? ,fubusg_rate=? where userid=?
    // console.log(req.body);
    let para = req.body;
    let param = [];
    if (para.content) {
        param.push(para.userid);
        param.push(para.content);
        param.push(para.unfinish_reason);
        param.push(para.plan_time);
        param.push(para.id);
        pool.getConnection(function(err, connection) {
            connection.query(editcode, param, function(error, result){
                if(error){
                    res.json({data:null,message:'请求失败',code:400})
                }else{
                    res.json({data:null,message:'修改成功',code:200});

                }
            });
            connection.release();
        })
    }else{
        res.json({data:null,message:'参数有误',code:400})
    }
})

//导出日报
app.get('/back/dayreport/export', function(req, res, next) {
    let now = new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate();
    let tablelist;
    let para ='';
    let data =[];
    if(req.query.create_time&&req.query.create_time !=''){
        para = req.query.create_time;
        tablelist =  'select report_list.content,report_list.unfinish_reason,report_list.plan_time,report_list.create_time,user.nickname from report_list INNER JOIN user on report_list.userid=user.id where date_format(create_time,\'%Y-%m-%d\')=date_format( "'+para+'" ,\'%Y-%m-%d\')  order by create_time desc';
    }else{
        tablelist =  'select report_list.content,report_list.unfinish_reason,report_list.plan_time,report_list.create_time,user.nickname from report_list INNER JOIN user on report_list.userid=user.id where date_format(create_time,\'%Y-%m-%d\')=date_format("'+now+'" ,\'%Y-%m-%d\')  order by create_time desc';
    }
    let workbook = new Excel.Workbook();
    let ws1 = workbook.addWorksheet("测试一");
    pool.getConnection(function(err, connection) {
        connection.query(tablelist,function(error, result){
            if(error){
                res.json({code:400,data:null,message:'请求失败'})
            }else{
                ws1.addRow(['编号','姓名','内容','未完成因素','计划完成时间','创建时间']);
                for (var i=0;i<result.length;i++){
                    let j = i+1;
                    let backData =[];
                    backData[0] = j;
                    backData[1] = result[i].nickname;
                    backData[2] = result[i].content;
                    backData[3] = result[i].unfinish_reason;
                    backData[4] = result[i].plan_time;
                    backData[5] = moment(result[i].create_time).format("YYYY-MM-DD HH:mm:ss");
                    ws1.addRow(backData);
                }
                workbook.xlsx.writeFile('./views/static/index.xlsx').then(function(){
                    res.json({data:null,message:'成功',code:200})
                });
            }
        })
    connection.release();
    })
});

app.listen(8800)
