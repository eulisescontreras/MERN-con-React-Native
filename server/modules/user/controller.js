import mongodb from 'mongodb';

//String Conection
const CONNECT_MONGODB_URL = "mongodb://localhost:27017/"; 

//Databases
const DBNAME_ADMIN = "admin";
 
//Collections
const COLLECTION_USERS =  "users"

//Client
const CLIENT_RETRIEVE_URL = '/clients/list';
const CLIENT_CREATE_URL = '/clients/add';
const CLIENT_UPDATE_URL = '/clients/update/:id';
const CLIENT_DELETE_URL = '/clients/delete/:id';

const mongoClien = mongodb.MongoClient;

export default app => {
    app.get(CLIENT_RETRIEVE_URL, function (req, res) {
        mongoClien.connect(CONNECT_MONGODB_URL, function(err, db) {
            if (err) throw err;
            
            var dbo = db.db(DBNAME_ADMIN);
            
            dbo.collection(COLLECTION_USERS).find({}).toArray(function(err, result) {
            if (err) throw err;
            db.close();
            return res.send(result);
            });
        
        });
    });
    
    app.post(CLIENT_CREATE_URL, function (req, res) {
        mongoClien.connect(CONNECT_MONGODB_URL, function(err, db) {
            if (err) throw err;
    
            var dbo = db.db(DBNAME_ADMIN);
            var user = { name: req.body.name, email: req.body.email, phone: req.body.phone, address: req.body.address };
            
            dbo.collection(COLLECTION_USERS).insertOne(user, function(err, res) {
            if (err) throw err;
            db.close();
            });
        
        });
        res.send('Add Client');
    });
    
    app.put(CLIENT_UPDATE_URL, function (req, res) {
        mongoClien.connect(CONNECT_MONGODB_URL, function(err, db) {
            if (err) throw err;
            
            var dbo = db.db(DBNAME_ADMIN);
            var myquery = { _id: req.body._id };
            var newvalues = { $set: {name: req.body.name, email: req.body.email, phone: req.body.phone, address: req.body.address } };
            
            dbo.collection(COLLECTION_USERS).updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            db.close();
            });
        
        });
        res.send('Update Client');
    });
    
    app.delete(CLIENT_DELETE_URL, function (req, res) {
        mongoClien.connect(CONNECT_MONGODB_URL, function(err, db) {
            if (err) throw err;
    
            var dbo = db.db(DBNAME_ADMIN);
            var ObjectId = require('mongoose').Types.ObjectId;
            var myquery = { _id: new ObjectId(req.body._id) };
    
            dbo.collection(COLLECTION_USERS).deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            db.close();
            });
        
        });
        res.send('Delete Client');
    });
}