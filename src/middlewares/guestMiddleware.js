const guestMiddleware = (req, res, next)=>{
    if(req.session.userLogged){
        res.redirect("/")
    }else{
        next()
    }
}

module.exports = guestMiddleware