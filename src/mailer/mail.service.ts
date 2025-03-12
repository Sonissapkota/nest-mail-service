import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService{
    constructor(private readonly mailerService: MailerService){}

    async signUp(user) {
        const token = Math.floor(1000 + Math.random() * 9000).toString();
        await this.sendUserConfirmation(user, token);
    }

    async sendUserConfirmation(user: any, token: string){
        if (!user.email) {
            throw new Error('User email is required');
        }
    
        const url = `http://localhost:3000/auth/confirm?token=${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Welcome to Wrap-Backend! Please Confirm your Email',
            template: './confirmation',
            context:{
                name: user.name || 'User',
                url
            }
        })
    }
}