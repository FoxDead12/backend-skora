import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AppService } from '../services/app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post("upload-file")
  @UseInterceptors(FilesInterceptor('file'))
  UploadNewFile(@UploadedFiles() file) {

    return {
      name: file[0].filename,
      type: file[0].mimetype.split("/")[1]
    };
  }
  
  @Post("send-email")
  SenEmail( @Body() req) 
  {
    return this.appService.SendEmail(req.name, req.email, req.application, req.description ,req.file, req.type);
  }
}
  