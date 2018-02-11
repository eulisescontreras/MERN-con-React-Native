import express from 'express';
import express_session from 'express-session';
import mongodb from 'mongodb';
import config from './config/config';
import moduleUser from './modules/user/controller';
import moduleLogin from './modules/login/controller';

const app = express();
const PORT = process.env.PORT || 3000;

//Login
const CLIENT_URL = "/clients"

//Login with Facebook
const LOGIN_FACEBOOK = "/login/facebook";
const LOGIN_FACEBOOK_CALLBACK = "/login/facebook/callback";

//Credential for login with Facebook
const FACEBOOK_API_KEY = 2004831973066636;
const FACEBOOK_API_SECRET = "7a4331204510663fec0f314fd00b0758";
const FACEBOOK_CALBACK_URL = "http://localhost:3000/login/facebook/callback";


config(app);
moduleLogin(app);
moduleUser(app);


app.get('/', function (req, res) {
    res.send("hola");
    
});

app.listen(PORT, err => {
    if(err){
        console.error(err);
    }{
        console.log('app listen to port:'+PORT);
    }
})








