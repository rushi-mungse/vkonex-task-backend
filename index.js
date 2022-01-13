const express=require('express');
const app=express();
const PORT=process.env.PORT || 5500;

const DbConnect=require('./database')
const router=require('./routers')
const cors=require('cors')
const corsOptions={
    origin:["http://localhost:3000"],
    credentials:true
}
app.use(cors(corsOptions))

app.use(express.json());
app.use(router)

DbConnect();

app.listen(PORT,()=>{
console.log(`Listenig on port: ${PORT}`);
})