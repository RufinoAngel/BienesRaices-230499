const formularioLogin=(req,res)=>{
    res.render('auth/login',{
        //con la coma decimos que hay un segundo parámetro
        autenticado:true
        
    })
};

const formularioRegister=(request,response)=>{
    response.render('auth/register',{
    page: "Crea una nueva cuenta..."
    })
};

const formularioPasswordRecovery = (request,response)=>{
    response.render('auth/passwordRecovery',{
        page: "Recuperacion de contraseña..."
    })
}

export {formularioLogin,formularioRegister,formularioPasswordRecovery}



