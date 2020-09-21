const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, //john ann@naver.com 빈칸없애주는 역할
        unique: 1 // 똑같은이메일은 하지마못하게
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //넘버가 1이면 관리자 1이 아니면 일반유저
        default: 0 //role 넘버를 임의로 0으로 지정
    },
    image: String,
    token:{
        type: String    //토큰을 이용하여 유효성을 사용
    },
    tokenExp:{
        type: Number    //토큰을 사용할 수 있는 기간
    }
})

const User = mongoose.model('User'/*User는 모델의 이름*/, UserSchema) //스키마를 모델로 감싸는 과정 

module.exports = {User} //다른 파일에서 사용할 수 있게 하려면 exports를 사용해주어야 한다.