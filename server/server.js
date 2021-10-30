const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000"
}));
require("./config/mongoose.config");
require("./routes/traveler.routes")(app);
require("./routes/trips.routes")(app); 
//require("/routes")(app);
const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) ); 