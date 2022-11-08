const  express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

// const mongoose = require("mongoose");
// const { cp } = require("fs");
// const e = require("express");
// mongoose.connect("mongodb://localhost:27017/SFI",{
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true

// },(err)=>{
//     if(err)
//     {
//         console.log(err);

//     }
//     else{
//         console.log("successfull")
//     }
// })
 
const port = 5000;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partial_path  = path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// // setting hbd files;
app.set("view engine ","hbs");
app.set("views",template_path);
// hbs.registerPartials(partial_path);

app.get("",(req,res)=>{
    res.render("index");
})
// app.get("/about",(req,res)=>{
//     res.render("about");
// })
// app.get("/admininteface",(req,res)=>{
//     res.render("admininteface");
// })
// app.get("/studentinteface",(req,res)=>{
//     res.render("studentinteface");
// })

// app.get("/registrationStudent",(req,res)=>{
//     res.render("registrationStudent")
// });

// app.get("/facultyregistration",(req,res)=>{
//     res.render("facultyregistration");
// })
// app.get("/facultylogin",(req,res)=>{
//     res.render("facultylogin");
// })
// app.get("/studentLogin",(req,res)=>{
//     res.render("studentLogin");
// })
// app.get("/adminlogin",(req,res)=>{
//     res.render("adminlogin");
// })

app.get("/",(req,res)=>{
        res.send("hello everyonee");
 })


app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})