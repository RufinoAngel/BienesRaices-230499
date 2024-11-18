import nodemailer from 'nodemailer';

const registerEmail = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        },
    });

    const { email, name, token } = data;

    // Enviar el email
    await transport.sendMail({
        from: 'BienesRaices_230499',
        to: email,
        subject: 'Confirma tu cuenta...',
        text: `Estimado ${name}, es necesario que confirme su cuenta para poder acceder a BienesRaices_230499.`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
                <h2 style="color: #0033cc;">¡Hola, <span style="color: #50c878;">${name}</span>!</h2>
                <p style="font-size: 16px;">
                    Gracias por registrarte en <strong>BienesRaices_230499</strong>. Tu cuenta está casi lista. Solo falta un último paso:
                </p>
                <p style="font-size: 16px;">
                    Haz clic en el botón de abajo para confirmar tu cuenta:
                </p>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirm/${token}" 
                       style="background-color: #50c878; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                       Confirmar Cuenta
                    </a>
                </div>
                <p style="font-size: 14px; color: #666;">
                    Si no creaste esta cuenta, puedes ignorar este mensaje.
                </p>
                <p style="font-size: 14px; color: #666;">
                    Atentamente, <br>
                    <strong>BienesRaices_230499</strong>
                </p>
            </div>
        `,
    });
};

const passwordRecoveryEmail = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        },
    });

    const { email, name, token } = data;

    // Enviar el email
    await transport.sendMail({
        from: 'BienesRaices_230499',
        to: email,
        subject: 'Reestablece tu contraseña...',
        text: `Estimado ${name}, haz solicitado el cambio de contraseña de tu cuenta para poder acceder a BienesRaices_230499.`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
                <h2 style="color: #50c878;">¡Hola, <span style="color: #50c878;">${name}</span>!</h2>
                <p style="font-size: 16px;">
                    Recibimos una solicitud para restablecer la contraseña de tu cuenta en <strong>BienesRaices_230499</strong>. Si realizaste esta solicitud, haz clic en el enlace a continuación para restablecer tu contraseña:
                </p>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/passwordRecovery/${token}" 
                       style="background-color: #50c878; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                       Restablecer mi contraseña
                    </a>
                </div>
                <p style="font-size: 14px; color: #666;">
                    Si no solicitaste restablecer tu contraseña, puedes ignorar este correo. Tu cuenta sigue siendo segura.
                </p>
                <p style="font-size: 14px; color: #666;">
                    Atentamente, <br>
                    <strong>BienesRaices_230499</strong>
                </p>
            </div>
        `,
    });
};

export { registerEmail, passwordRecoveryEmail };
