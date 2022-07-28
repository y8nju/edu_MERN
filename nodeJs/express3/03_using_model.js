const mongoose = require('mongoose');
const User = require('./model/User')

!async function() {
    const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"
	await mongoose.connect(uri, {dbName: 'example'});
	console.log('connected');

    try {
        await User.create({name: '최윤주', age: 34, type:'내국인', country:'KOR'});
        console.log('sucess')
    }catch(err) {
        console.log('failed...', + err.message);
        // console.dir(err);
    }
}();