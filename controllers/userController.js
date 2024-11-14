import { check,validationResult } from "express-validator";
import User from "../models/User.js"
import db from "../db/config.js"
import { request } from "express";
import { Token } from "graphql";
import { generateId } from "../helpers/tokens.js";

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
    //Validacion de los campos que se reciben del formulario
    await check('name').notEmpty().withMessage('El nombre no puede ir vacio').run(req)
    await check('correo_usuario').notEmpty().withMessage('El correo electronico es un campo obligatorio').isEmail().withMessage('El correo electronico no tiene el formato de usuario@licuados.extension').run(req)
    await check('pass_usuario').notEmpty().withMessage('La contraseña es un campo obligatorio').isLength({min: 6}).withMessage('El Password debe ser de al menos 8 caracteres').run(req)
    await check('pass2_usuario').equals(req.body.pass_usuario).withMessage('La contraseña debe coincidir con la anterior').run(req)

    let resultado= validationResult(req);

    //return res.json(resultado.array());

    //verificamos  que el resultado este vacio
    if (!resultado.isEmpty()){
        //Errores
        return res.render('auth/register',{
            page:'Error al intentar crear una cuenta',
            errors:resultado.array()
        })
    }else{
        console.log('Registrando a un Nuevo Usuario...');
        console.log(req.body);
    }
    res.json(resultado.array())

    const {name:name,correo_usuario:email,pass_usuario:pass}=req.body
    //verificamos que el usuario no existe previamente en la BD
    const existingUser=await User.findOne({where:{email}})
    console.log(req.body);
    //Registramos los datos en la BD.
    const newUser = await User.create({
        name,
        email,
        password,
        Token:generateId(),
    });
    res.json(newUser);
    return;

}

export {formularioLogin,formularioRegister,formularioPasswordRecovery,createNewUser}



