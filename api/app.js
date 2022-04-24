const express = require('express')
const session = require('express-session')//for session cookies
const v1 = require('./controllers/v1')

const app = express()
const port = 9001

//routes implementation

app.use('/v1',v1);
//


//Middlewares
app.use(express.json());

//cookies number of times visited in localhost:9001/count
app.use(session({
  secret:'12345',
  resave: true,
  saveUninitialized: true
}))

app.get('/count',(req,res)=>{//get mehtod of /count directory to count how many times this session the user has been on page
  req.session.user= 'Alan Ruiz';
  req.session.role='Node.js trainee';
  req.session.times=req.session.times ? ++req.session.times :1;
  res.setHeader('Content-type','text/html');
  res.send("User "+req.session.user+" with the role "+ req.session.role+" has visited this page <strong>"+ req.session.times+"</strong> times");
})




// router.post('/',(req, res) =>{//post method
//   const data =req.body;
//   //data sended by postman
//   console.log(data)
//   res.send(data)
// })

// router.put('/',(req, res) =>{//put method
//   const data =req.body;

//   res.send(data)
//   console.log("You entered to put method, value updated")
// })

// router.delete('/',(req, res) =>{//delete method
//   const data =req.body;
//   //data sended by postman
//   console.log("Here the data should be deleted")
//   res.send(data)
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


