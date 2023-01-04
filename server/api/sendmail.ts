import { SMTPClient } from 'emailjs';

export default defineEventHandler(async (event) => {
  if (event.req.method === 'POST')
  {
    const body = await readBody(event);

    const client = new SMTPClient({
      user: process.env.EMAIL,
      password: process.env.PASS,
      host: process.env.SMTP,
      ssl: true,
    });

    try {

      const message = await client.sendAsync({
        text: body.message,
        from: 'Web Sitesi: <'+body.email+'>',
        to: 'Tancan UYSAL <tancanuysal@gmail.com>',
        subject: 'Web Sitesinden Yeni Mesaj Var!',
        attachment: [
          {
            data: `<html>
              <table style="text-align:left; width:100%; font-size:16px;">
                <tr style="padding:.5rem; width:100%;">
                  <th style="padding:.5rem; border-bottom:1px solid #efefef;">Adı, Soyadı:</th>
                </tr>
                <tr style="padding:.5rem; width:100%;">
                  <td style="padding:.5rem; width:100%; border-bottom:1px solid #efefef;">${body.name}</td>
                </tr>
                <tr style="padding:.5rem; width:100%;">
                  <th style="padding:.5rem; width:100%; border-bottom:1px solid #efefef;">Eposta Adresi</th>
                </tr>
                <tr style="padding:.5rem; width:100%;">
                  <td style="padding:.5rem; width:100%; border-bottom:1px solid #efefef;">${body.email}</td>
                </tr>
                <tr style="padding:.5rem; width:100%;">
                  <th style="padding:.5rem; width:100%; border-bottom:1px solid #efefef;">Telefonu</th>
                </tr>
                <tr style="padding:.5rem; width:100%;">
                  <td style="padding:.5rem; width:100%; border-bottom:1px solid #efefef;">${body.telefon}</td>
                </tr>
                <tr style="padding:.5rem; width:100%;">
                  <th style="padding:.5rem; width:100%; border-bottom:1px solid #efefef;">Mesajı</th>
                </tr>
                <tr style="padding:.5rem; width:100%;">
                  <td style="padding:.5rem; width:100%; border-bottom:1px solid #efefef;">${body.mesaj}</td>
                </tr>
              </table>
            </html>`, alternative: true
          },
        ],
      });
      return event.res.end('Mesajınız başarılı bir şekilde gönderilmiştir.')
    } catch (err) {
      return event.res.end('Mesajınız gönderilirken bir hata ile karşılaşılmıştır. Hata: '+err)
    }
  } else if (event.req.method === 'GET')
  {
    return event.res.end(process.env.PASS)  
  }
});
