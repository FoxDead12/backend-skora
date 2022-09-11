import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class AppService {
  
  constructor(private readonly mailerService: MailerService) {}


  public async SendEmail(name: string, email: string, application: string, description: string, fileName: string, fileType: string) {

    if(fileName != "") {
      await this.mailerService
      .sendMail({
        subject: 'Testing Nest Mailermodule with template ✔',
        template: 'welcome', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
        context: {
          // Data to be sent to template engine.
          name,
          email,
          application,
          description
        },
        attachments: [{
          filename: "Uploaded." + fileType,
          path: process.cwd() + "/uploads/" + fileName,
        }]
      })
      .then((response) => {console.log(response)})
      .catch((err) => {console.log(err)});
    }
    else {

      await this.mailerService
      .sendMail({
        subject: 'Testing Nest Mailermodule with template ✔',
        template: 'welcome', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
        context: {
          // Data to be sent to template engine.
          name,
          email,
          application,
          description
        }
      })
      .then((response) => {console.log(response)})
      .catch((err) => {console.log(err)});
    }

    

      
  }
}
