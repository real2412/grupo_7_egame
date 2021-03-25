const userLoggedMiddlware = (req, res, next) => {
    let isLogged = false
    
    if(req.session.userLogged){
        isLogged = true
        res.locals.userLogged = req.session.userLogged
    }
    res.locals.isLogged = isLogged
    next()
}

module.exports = userLoggedMiddlware