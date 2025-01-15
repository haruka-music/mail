const nodeMailer = require("nodemailer");

const html = `
  <h1>こんにちは</h1>
  <p>テストのメールです</p>
`;

async function mailFn() {
  const transport = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: "@gmail.com",
      pass: "ユウヴルト ンマフウハラキスズ",
    },
  });

  const info = await transport.sendMail({
    from: "CodeTips<harukawellcode@gmail.com>",
    to: "harukawellcode@gmail.com",
    subject: "テスト",
    html: html,
  });
}

mailFn().catch((error) => console.log(error));
