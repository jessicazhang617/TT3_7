import express from 'express';
import cors from "cors";
import authRouter from './routes/SQL_auth.js'

import claimsRouter from './routes/SQL_claims.js'
const app = express();
const port=process.env.port||5000;

const corsOptions ={
    origin:'http://localhost:3000',
    methods:'GET,HEAD,POST,PUT,DELETE,PATCH',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

 app.use(cors(corsOptions));
 app.use(express.json());
 app.use('/auth',authRouter);
 app.use('/claims',claimsRouter);


app.get('/', (req, res) => {
    res.send('Server is working');
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
