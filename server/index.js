const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const morgan = require("morgan");
const router = require("./router");
const mongoose= require("mongoose");
const cors = require("cors");
const path = require("path");

var assetPath = path.join(__dirname, "..", "client/public");

const Goods = require("./models/goods");

console.log(Goods);


//DB setup
//mongoose.connect('mongodb://localhost:auth/auth');

mongoose.connect("mongodb://filip99:samsung2580@ds029705.mlab.com:29705/borderguru");

const app = express();

//app setup
app.use(cors());
app.use(bodyParser({ type : '*/*'}));
router(app);

//Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);

console.log('Server listening on: ', port);

app.use(express.static(assetPath));

app.get('/offers', function(req, res) {
    Goods.find({}, function(err, allGoods){
        if(err){
            console.log("Error!");
            console.log(err);
        }else{
            res.send(allGoods);
        }
    });
});

app.delete("/:id", function(req, res){

    Goods.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
            throw err;
        } else{
            Goods.find({}, function(err, allGoods){
                if(err){
                    console.log("Error!");
                    console.log(err);
                }else{
                    res.send(allGoods);
                }
            });
        }
    });
});
