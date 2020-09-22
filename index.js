const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser'); //bodyParser를 가져옴
const {User} = require("./models/User");
//User객체를 가져옴

const config = require('./config/key');

//bodyParser 옵션주는 법
//bodyParser가 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해주는 것.
app.use(bodyParser.urlencoded({extended: true})); //application/x-www-form-urlencoded -> 분석해서 가져올 수 있게.
app.use(bodyParser.json());//application/json -> 분석해서 가져올 수 있게.


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    //mongoDB를 사용할때 에러를 최소화 하기위해 위와 같은 코드를 적어준다.
    //<password> 이부분은 지우고 설정했던 패스워드를 적어주어야한다.
}).then(() => console.log("Mongodb connected..."))
  .catch(err => console.log(err))
    //mongodb+srv://FoodInus:<password>@foodinus.gr1fk.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get('/', (req,res) => res.send('Hello world'))
app.post('/register', (req, res) => {
  //회원 가입할때 필요한 정보들을 client에서 가져오면 
  //그것들을 데이터 베이스에 넣어준다. (단 확인 검사를 한 후에 넣어야댐.)

  const User = new User(req.body) //req.body를 사용할 수 있는 이유는 bodyparser가 있어서 그러하다.(그래서 클라이언트정보를 받아올 수 있다)

  User.save((err, UserInfo) => {
    if(err) return res.json({success: false, err}) //json형식으로 성공하지 못했다고 보내준다.
    return res.status(200).json({
      success: true
    })//200번대는 연결을 성공했다는거.
  }) //mongoDB에서 오는 메소드

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

