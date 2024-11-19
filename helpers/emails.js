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
            <div style=""font-family: bold, sans-serif; text-align:justify ; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 25px; border: 10px solid #ddd; border-radius: 5px; items-center;"">
                <h2 style="color: #50c878;">¡Hola, <span style="color: #50c878;">${name}</span>!</h2>
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
            <div style="font-family: bold, sans-serif; text-align:justify ; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 25px; border: 10px solid #ddd; border-radius: 5px; items-center;">
                <h2 style="color: #50c878;">¡Hola, <span style="color: #50c878;">Abishai Flores </span>!</h2>
              <div style="padding:35px; border: dashed #50c878; border-radius: 30px;">
                <p style="font-size: 18px;">
                    ¡Gracias por registrarte en <strong>BienesRaices_230499</strong>!. Para completar el proceso de confirmación de tu cuenta y acceder a todos nuestros servicios, necesitamos la confirmación de tu correo electronico.
                </p>
                <div style="text-align:center; background:#F1FBFA;border: 1px solid #000000;padding:15px">
                <p style="font-size: 20px;">
                    Haz clic en el botón de abajo para confirmar tu cuenta:
                </p>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="http://localhost:3000/auth/confirm/pt4atg14tco1id2tah1j" 
                       style="background-color: #50c878; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                       Confirmar Cuenta
                    </a>
                </div>
                  </div>
                <p style="font-size: 18px; color: #666;">
                    Si no reconoces esta solicitud o no creaste la cuenta, puedes ignorar este mensaje. Gracias por elegirnos. !Estanos emocionados por poder ayudarte a encontrar la propiedad deseada!
                </p>
                <div style="text-align:center;  line-height: 1.6 ;" >
                <p style="font-size: 20px; color: #666;">
                  <br>
                    Atentamente: <br>
                    <strong>Angel de Jesus Rufino Mendoza</strong>
                </p>
                  </div>
                </div>
            </div>
            <footer style="text-align:center">
                 @Todos los derechos reservados de BienesRaices_230499
            </footer>
        `,
    });
};

export { registerEmail, passwordRecoveryEmail };
