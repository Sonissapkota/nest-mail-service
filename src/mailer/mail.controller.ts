import { Body, Controller, Param, Post } from "@nestjs/common";
import { MailService } from "./mail.service";

@Controller("mailer")
export class MailController{
    constructor(private readonly mailerService: MailService, ){}

    @Post('/send')
    async sendMail(@Body() user: {user: string, name: string}) {
        await this.mailerService.signUp(user);
    }
}