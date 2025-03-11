import { Controller, Get } from "@nestjs/common";
import { MailerService } from "./mailer.service";

@Controller("mailer")
export class MailerController{
    constructor(private readonly mailerService: MailerService){}

    @Get()
    async getInfo(){
        return await this.mailerService.displayInfo();
    }
}