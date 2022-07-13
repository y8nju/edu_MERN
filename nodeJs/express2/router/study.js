const express = require("express");

const router = express.Router();

router.get("/", (req,res)=>{
    req.session.count = (req.session.count?? 0) + 1;
    console.log(req.session);
    res.send(`<h1>HELLO, 👋 ${req.session.nick}</h1>`);
});

router.get("/register", (req,res)=>{
    let nick = req.query.nick;
    req.session.nick = nick;
    res.sendStatus(200);
});

module.exports = router;



