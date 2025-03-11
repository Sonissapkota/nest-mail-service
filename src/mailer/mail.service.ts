import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService{
    displayInfo(){
        return "Hello there what are you doing!";
    }
}