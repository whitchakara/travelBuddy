require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}));
app.use(cookieParser());
require("./config/mongoose.config");
require("./routes/traveler.routes")(app);
require("./routes/trips.routes")(app); 
//require("/routes")(app);
//const port = 8000;
    
app.listen(process.env.MY_PORT, () => console.log('Listening on port:'+ process.env.MY_PORT)); 