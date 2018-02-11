import bodyParser from 'body-parser';
import morgan from 'morgan';

// Website you wish to allow to connect
const WEBSITE_ALLOW_CONNECT_NAME = "Access-Control-Allow-Origin";
const WEBSITE_ALLOW_CONNECT_VALUE = "*";

// Request methods you wish to allow
const REQUEST_ALLOW_METHODS_NAME = "Access-Control-Allow-Methods";
const REQUEST_ALLOW_METHODS_VALUE = "GET, POST, OPTIONS, PUT, PATCH, DELETE";

// Request headers you wish to allow
const REQUEST_ALLOW_HEADERS_NAME = "Access-Control-Allow-Headers";
const REQUEST_ALLOW_HEADERS_VALUE = "X-Requested-With,content-type";

//Include cookies in the requests
const REQUEST_ALLOW_COOKIES_NAME = "Access-Control-Allow-Credentials";


export default app => {
    app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader(WEBSITE_ALLOW_CONNECT_NAME, WEBSITE_ALLOW_CONNECT_VALUE);
      
        // Request methods you wish to allow
        res.setHeader(REQUEST_ALLOW_METHODS_NAME, REQUEST_ALLOW_METHODS_VALUE);
      
        // Request headers you wish to allow
        res.setHeader(REQUEST_ALLOW_HEADERS_NAME, REQUEST_ALLOW_HEADERS_VALUE);
      
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader(REQUEST_ALLOW_COOKIES_NAME, true);
      
        // Pass to next layer of middleware
        next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(morgan('dev'));
};