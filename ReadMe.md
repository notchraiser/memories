learn MERN stack with memories.
Server side dependencies -
body-parser - enable to send post request
cors - enable cross origin request
express - creating routing framework for application
mongoose - create models for out posts
nodemon - reset server everytime when ode changes

Client side dependencies -
axios - making API request
moment - working with date and time
react-file-base-64 - convert images
redux - global state
redux-thunk - asynchronous operation using redux



Middleware function -
bodyparser - use bodyParser() if you want the form data to be available in req.body. It returns a function that acts as middleware. The function listens for req.on(‘data’) and constructs req.body from the chunks of data it gets. Basically, there are a bunch of different ways to format the data you POST to the server:
application/x-www-form-urlencoded
multipart/form-data
application/json
application/xml
In brief, bodyParser has to parse the data differently depending on its type. And so you need to do something like this 

app.use(bodyParser.json({ limit: "30mb", extended: true })); // for parsing application/json
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data


HTTPstatus codes: https://www.restapitutorial.com/httpstatuscodes.html 

Issue - Cannot install @material-ui/core with npm 7 and React 17
Sol: npm install --save --legacy-peer-deps @material-ui/icons
     npm install --save --legacy-peer-deps @material-ui/core


Provider: react-redux = keep track of global store to provide global state using store inside anywhere in app.