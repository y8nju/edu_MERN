const mongoose = require('mongoose');


const birthSchema = new mongoose.Schema({
    year: Number,
    month: Number,
    date: Number
})
birthSchema.remove("_id"); // schema로 만들면 _id가 자동으로 생성된다
// console.dir(birthSchema.paths, {dapth: 0});
const accountSchema = new mongoose.Schema({
    id: String,
    password: {type: String, minLength: 4}, 
    name: String,
    email: String,
    contact: String,
    birth: birthSchema, //[Number]
    image:String,
}, {
    statics: {
        findByName(name) {
            return this.find({name: name})
        },
        updateProfileById(id, profile) {
            return this.findByIdAndUpdate(id, {image: profile}, {returnDocument: 'after'})
        }
    }
});
// statics function을 설정하려면
// 위 처럼 처음부터 생성하면서 설정해도 되고, 이렇게 나중에 설정해도 된다
accountSchema.statics.updateImageById = function(id, profile) {
    return this.findByIdAndUpdate(id, {image: profile}, {returnDocument: 'after'})
}

accountSchema.add({createAt: Date});
module.exports = mongoose.model('account', accountSchema, 'accounts');
                                // 3번째 string 값은 컬렉션의 이름이 된다, 등록되는 모델명의 복수형(s)이 디폴트