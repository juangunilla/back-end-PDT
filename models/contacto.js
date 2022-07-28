const mongoose =require("mongoose")

const contactoScheme= new mongoose.Schema(
    {
        Nombre:{
            type:String,
        },
        Titulo:{
            type:String,
        },
        Descripcion:{
            type:String,
        },
    },
    {
        timestamps:true,
        versionKey:false
    }

);

module.exports= mongoose.model("contacto",contactoScheme)