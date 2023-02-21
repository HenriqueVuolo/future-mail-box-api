import {Mail} from '@domain/entities/mail.entity';
import {User} from '@domain/entities/user.entity';

export const mountMailPayload = ({
  mail,
  sender,
}: {
  mail: Mail;
  sender: User;
}) => ({
  from: process.env.MAILER_SENDER,
  to: mail?.to,
  subject: `FutureMailBox - ${mail?.subject}`,
  content: `
  <html>
  <h1>${mail?.subject}</h1>
  ${mail?.content}
  <br><br>
  <footer>
    <div style='color:gray;'>
    <p>
      E-mail enviado através da plataforma Future MailBox.
    </p>
    <p>
    Enviado por: ${sender?.firstname} ${sender?.lastname} | ${sender?.email}.
  </p>
  <p>Criado dia ${mail?.createdAt.toLocaleDateString()} e enviado ${mail?.sendAt.toLocaleDateString()}.</p>
    </div>
  </footer>
  </html>`,
});
