import nodemailer from 'nodemailer';
export const sendEmail = (mailOptions: any): void => {
    const transporter = nodemailer.createTransport({
        host: 'send.one.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'noreply@minhaj.se',
            pass: 'mqisweden',
        },
    });

    transporter.sendMail(mailOptions, function (error, info: any) {
        if (error) {
            console.log(error);
        }
    });
};
