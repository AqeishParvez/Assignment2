//File Name: index.js, Student Name: Aqeish Parvez, Student ID: 301225795, Date: February 14th, 2023
// Return the user display name from the session

export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }

    return '';
}

export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }

    next();
}