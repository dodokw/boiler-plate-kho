const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://FoodInus:600707@foodinus.gr1fk.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    //mongoDB를 사용할때 에러를 최소화 하기위해 위와 같은 코드를 적어준다.
    //<password> 이부분은 지우고 설정했던 패스워드를 적어주어야한다.
}).then(() => console.log("Mongodb connected..."))
  .catch(err => console.log(err))
//mongodb+srv://FoodInus:<password>@foodinus.gr1fk.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get('/', (req,res) => res.send('Hello world'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

