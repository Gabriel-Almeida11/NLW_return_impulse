import { MailAdapter, SendMailDate } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "939d8ac188a784",
        pass: "821939b7cc0824"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailDate) {

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Gabriel Almeida <gabrielalmeidapimentel@gmail.com>',
            subject,
            html: body,
        });

    };
}