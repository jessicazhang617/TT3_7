import express from 'express';
import cors from "cors";

const app = express();
const port=process.env.port||5000; 

const corsOptions ={
    origin:'http://localhost:3000',
    methods:'GET,HEAD,POST,PUT,DELETE,PATCH', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

 app.use(cors(corsOptions));
 app.use('/nodejs/',SQLrouter);

app.get('/', (req, res) => {
    res.send('Server is working');
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})


