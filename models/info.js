const mongoose =require("mongoose")

const infoScheme= new mongoose.Schema(
    {
        Titulo:{
            type:String,
        },
        Subtitulo:{
            type:String,
        },
        Nota:{
            type:String,
        },
    },
    {
        timestamps:true,
        versionKey:false
    }

);

module.exports= mongoose.model("info",infoScheme)