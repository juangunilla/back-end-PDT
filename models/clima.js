const mongoose =require("mongoose")

const climaScheme= new mongoose.Schema(
    {
        Ciudad:{
            type:String,
        },
        Img:{
            type:String,
        },
        Temperatura:{
            type:Number,
        },
        Viento:{
            type:Number,
        },
        Direccion:{
            type:Number,
        },
        Descripcion:{
            type:String,
        }
    },
    {
        timestamps:true,
        versionKey:false
    }

);

module.exports= mongoose.model("clima",climaScheme)