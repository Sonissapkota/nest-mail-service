import { Injectable } from "@nestjs/common";

@Injectable()
export class MailerService{
    displayInfo(){
        return "Hello there what are you doing!";
    }
}