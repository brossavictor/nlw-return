import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'bb7723bc387c03',
    pass: 'd9209b2c18c816'
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Feedget Team <oi@feedget.com>',
      to: 'Victor Brossa <brossajoao@gmail.com>',
      subject,
      html: body
    })
  }
}
