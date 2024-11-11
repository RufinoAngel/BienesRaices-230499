import User from "../models/User.js";

const formularioLogin=(req,res)=>{
    res.render('auth/login',{
        //con la coma decimos que hay un segundo parámetro
        autenticado:true,
        page: "Ingresa a la Plataforma"
    })
};

const formularioRegister=(request,response)=>{
    response.render('auth/register',{
        page: "Crea una Nueva Cuenta..."
    })
};

const formularioPasswordRecovery = (request,response)=>{
    response.render('auth/passwordRecovery',{
        page: "Recuperación de Contraseña"
    })
}

const createNewUser= async(req,res)=>{
    console.log("Registrando un nuevo usuario")
    console.log(req.body);
    const newUser=await User.create({
        name:req.body.nombre_usuario,
        email:req.body.correo_usuario,
        password:req.body.pass_usuario,
    });

}

export {formularioLogin,formularioRegister,formularioPasswordRecovery,createNewUser}



