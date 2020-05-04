let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({extended: false}))  // in order to access input field

ourApp.get("/",(req,res)=>{
    res.send(`
    <form action="/answer" method="POST">
    <p>What color is the sky on a clear and sunny day?</p>
    <input name="skyColor" autocomplete="off" required>
    <button>Submit Answer</button>
    </form>
    `)
})

ourApp.post("/answer",(req, res)=>{

    if (req.body.skyColor.toUpperCase() == "BLUE") {

        res.send(`
        <p>Congrats, that is the correct answer!</p>
        <a href="/">Back to homepage</a>
        `)

    } else {

        res.send(`
        <p>Sorry, that is incorrect.</p>
        <a href="/">Back to homepage</a>
        `)

    }

})


ourApp.get("/answer",(req, res)=>{

    res.send("Are you lost? There is nothing to see here.")

})
ourApp.listen(3000)










// let http = require("http")

// let myApp = http.createServer((req,res)=>{
    
//     if (req.url == "/") {
//         res.end("Hello, and welcome to our homepage.")
//     }

//     if (req.url == "/about")  {
//         res.end("Thank you for the interest in our company")
//     }

//    res.end("We cannot find the page you are looking for.")
   
// })
// myApp.listen(4200)



