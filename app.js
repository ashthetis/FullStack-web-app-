//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
var json= {};

//Specify how we connect to MongoDb
mongoose.connect("mongodb://localhost:27017/stg1", {useNewUrlParser: true});


// Create a new Schema

const cassette={

  cassette_id: String,
  time_stamp: String,
  wafer_array:[Number],
  resources:[String]

};

// New Mongoose model based on schema

const  Cassette =  mongoose.model("Cassette",cassette);

//make 3 new documents using our mongoose model.

const cassette1 = new Cassette({
  cassette_id: "A123",
  time_stamp: "2/5/2020 10:15:20",
  wafer_array:
[6714639580,
6377982078,
9885394659,
1441490570,
6757459680,
1981716410,
1122032615,
8794935115,
9740063795,
8123746408,
9327950734,
7322025641,
3050272304,
8739333993,
9693497961,
1634429969,
7720794984,
5257490613,
0094216199,
2102363111,
7566213046,
5915505816,
5358907154,
3770979558,
5829465614,
8459397157,
1647395092,
5778096031,
3849289695,
6972741638,
6266357700,
6821189276,
6399918676,
5616431632,
6665468249,
6343751915,
9812948211,
1239903502,
3520034822,
7039467878,
6533883580,
1209544291,
9071762745,
6986458919,
0877468544,
4795165837,
7188203731,
6041507087,
8307419207,
9522672812,
4694764082,
4386290526,
9533127423,
1415636760,
6701877217,
3489327306,
1955270156,
3478195950,
9273844974,
2889441442,
4747355715,
7862932134,
2209840321,
4715916351,
1642460921,
3066263485,
5487987106,
3724199112,
8244164603,
2059407253,
3895734530,
5798034647,
1852971857,
4041320472,
2775919537,
9844749600,
2197603024,
1585509896,
0297071483,
6003730013,
3137871952,
7168811666,
6307369173,
8257096065,
0794899583,
2872594503,
7577684856,
8311063295,
7574272708,
4356520276,
8046202617,
2277691749,
0396534186,
2428465991,
1497430856,
5049234416,
5926323053,
1234620766,
3067864581,
1806783286],

resources: ["PVD201 3/12/2020 08:23:01 -->", "SPL201 3/12/2020 08:23:01 -->", "TST202R 3/12/2020 08:23:01" ]
});

const cassette2 = new Cassette({
  cassette_id: "A456",
  time_stamp: "3/12/2020 08:23:01",
  wafer_array:
[6714639580,
6377982078,
9885394659,
1441490570,
6757459680,
1981716410,
1122032615,
8794935115,
9740063795,
8123746408,
9327950734,
7322025641,
3050272304,
8739333993,
9693497961,
1634429969,
7720794984,
5257490613,
0094216199,
2102363111,
7566213046,
5915505816,
5358907154,
3770979558,
5829465614,
8459397157,
1647395092,
5778096031,
3849289695,
6972741638,
6266357700,
6821189276,
6399918676,
5616431632,
6665468249,
6343751915,
9812948211,
1239903502,
3520034822,
7039467878,
6533883580,
1209544291,
9071762745,
6986458919,
0877468544,
4795165837,
7188203731,
6041507087,
8307419207,
9522672812,
4694764082,
4386290526,
9533127423,
1415636760,
6701877217,
3489327306,
1955270156,
3478195950,
9273844974,
2889441442,
4747355715,
7862932134,
2209840321,
4715916351,
1642460921,
3066263485,
5487987106,
3724199112,
8244164603,
2059407253,
3895734530,
5798034647,
1852971857,
4041320472,
2775919537,
9844749600,
2197603024,
1585509896,
0297071483,
6003730013,
3137871952,
7168811666,
6307369173,
8257096065,
0794899583,
2872594503,
7577684856,
8311063295,
7574272708,
4356520276,
8046202617,
2277691749,
0396534186,
2428465991,
1497430856,
5049234416,
5926323053,
1234620766,
3067864581,
1806783286],
resources: ["CVD222 3/12/2020 08:23:01 -->", "SPL201 3/12/2020 08:23:01 -->", "TST202R 3/12/2020 08:23:01" ]

});

const cassette3 = new Cassette({
  cassette_id: "A789",
  time_stamp: "11/9/2020 02:45:11",
  wafer_array:
[6714639580,
6377982078,
9885394659,
1441490570,
6757459680,
1981716410,
1122032615,
8794935115,
9740063795,
8123746408,
9327950734,
7322025641,
3050272304,
8739333993,
9693497961,
1634429969,
7720794984,
5257490613,
0094216199,
2102363111,
7566213046,
5915505816,
5358907154,
3770979558,
5829465614,
8459397157,
1647395092,
5778096031,
3849289695,
6972741638,
6266357700,
6821189276,
6399918676,
5616431632,
6665468249,
6343751915,
9812948211,
1239903502,
3520034822,
7039467878,
6533883580,
1209544291,
9071762745,
6986458919,
0877468544,
4795165837,
7188203731,
6041507087,
8307419207,
9522672812,
4694764082,
4386290526,
9533127423,
1415636760,
6701877217,
3489327306,
1955270156,
3478195950,
9273844974,
2889441442,
4747355715,
7862932134,
2209840321,
4715916351,
1642460921,
3066263485,
5487987106,
3724199112,
8244164603,
2059407253,
3895734530,
5798034647,
1852971857,
4041320472,
2775919537,
9844749600,
2197603024,
1585509896,
0297071483,
6003730013,
3137871952,
7168811666,
6307369173,
8257096065,
0794899583,
2872594503,
7577684856,
8311063295,
7574272708,
4356520276,
8046202617,
2277691749,
0396534186,
2428465991,
1497430856,
5049234416,
5926323053,
1234620766,
3067864581,
1806783286],
resources: ["WRF201 3/12/2020 08:23:01 -->", "CLN202 3/12/2020 08:23:01 -->", "CVD201 3/12/2020 08:23:01" ]

});


const defaultCassette  = [cassette1, cassette2, cassette3];


// insert into collection

// Cassette.insertMany(defaultCassette, function(err){
//   if(err){
//     console.log(err);
//   }else {
//     console.log("Success in saving Cassettes!");
//   }
// });


var items = ["Day 1", "Day 2"];
var details = [
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
   "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. "
];


const homeStartingContent = "Panasonics Manufacturing Excecution System daily news board! Updates, news, announcemts, grpahs, statistics and more will be posted on this page, please vist regularly for the most up-to-date news on the manufacturing floor. To work together like a well oiled machine, we must all know what each department is doing and here is where you can get that information. Do you have any questions on the following: Critical conditions on the production floor? Low inventory on materials or products? Company stats?. This is your one stop shop for any information.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

let posts = [];

const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.set('view engine', 'ejs');


app.get("/log", function(req, res){
  res.render("log")
});

app.get("/login", function(req, res){
  res.redirect("/feature")
});

app.get("/feature", function(req, res){
  res.render("feature")
});

app.get("/register", function(req, res){
  res.render("register")
});

app.get("/", function(req, res){


res.render("home", {
  startingContent: homeStartingContent,
  newListItems: items,
  newDetails: details,
  posts: posts

});
});


// New HEADER

app.get("/newHeader", function(req, res){

res.render("newHeader", {startingContent: aboutContent});

});

// Powerapps

app.get("/powerApps", function(req, res){

res.render("powerApps");

});

// search

app.get("/search", function(req, res){

res.render("search",{newListItems: json});

});

app.post("/search", function(req, res){

  const c_id = req.body.c_id;

  console.log(c_id);

  Cassette.find({}, function(err, foundCassette){
    // console.log(foundItems);

    if(err){
      console.log(err);
    }else{
      console.log(foundCassette);
      foundCassette.forEach(function(item){

        if(c_id === item.cassette_id){
        console.log(item);
        json= item;
        res.redirect("/search");
      }
  });

    }

});

});


// About

app.get("/about", function(req, res){

res.render("about", {startingContent: aboutContent});

});

//NEWS
app.get("/news", function(req, res){

res.render("news", {
  newListItems: items,
  newDetails: details,
  posts: posts

});
});

// Contact

app.get("/Contact", function(req, res){

res.render("contact", {startingContent: contactContent});

});

// graph

app.get("/graph", function(req, res){

res.render("graph", {startingContent: contactContent});

});



// Compose

app.get("/compose", function(req, res){

res.render("compose");

});

app.post("/compose", function(req, res){

// console.log(req.body.postTitle);
const post={
  title: req.body.postTitle,
  content:req.body.postBody
};

posts.push(post);

res.redirect("/news");

});

app.get("/posts/:postName", function(req,res){
  const requestedTitle= _.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post",{
        title: post.title,
        content: post.content
      });
    }
  });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
