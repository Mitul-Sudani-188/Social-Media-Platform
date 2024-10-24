import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();

app.get("/", (_,res)=>{
    return res.status(200).json({
        message : "backend is working",
        success : true
    })
})


app.use(express.json());
app.use(cookieParser());

app.use(urlencoded({extended:true}));

const corsOptions = {
    origin : 'http://localhost:5173',
    credentials : true
}

app.use(cors(corsOptions));

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
});