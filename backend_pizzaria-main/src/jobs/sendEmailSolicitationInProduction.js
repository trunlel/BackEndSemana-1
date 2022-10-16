import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b2ab7e798f588d",
    pass: "d0eae85bc4a4c8",
  },
});

export function sendEmailSolicitationInProduction() {
  solicitations.forEach((solicitation) => {
    if (solicitation.order === "EM PRODUÇÃO") {
      transporter.sendMail(
        {
          from: "devinhouseteste@gmail.com",
          to: "joao@gmail.com",
          subject: "Sua pizza está chegando",
          html: `<p>Olá ${solicitation.name_client}, sua pizza está há producao.</p>`,
        },
        (err, info) => {
          if (err) console.log(err);
          else console.log(info);
        }
      );
    }
  });
}
