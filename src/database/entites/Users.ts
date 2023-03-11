import {Entity,PrimaryGeneratedColumn,Column,OneToOne, BeforeInsert, JoinColumn} from "typeorm";
import { genSalt, hash } from "bcrypt";
@Entity()
export class Users{
    @PrimaryGeneratedColumn("uuid")
    id:String;
    @Column()
    firstName:String;
    @Column()
    email:string;
    @Column()
    phone:string;
    @Column()
    whatsappNo:string;
    @Column()
    designation:string;
    @Column()
    company_exhibit:boolean;
    @Column()
    company:string;
    @Column()
    website:string;
    @Column("text")
    address:string;
    @Column()
    category:string;
    @Column()
    product: string;
    @Column({select: false})
    password:String;
    @Column()
    Marketing_Sales_Name:string;
    @Column()
    Marketing_Sales_Whatsapp_Number:string;
    @Column()
    Marketing_Sales_designation:string;
    @Column()
    Marketing_Sales_email:string;
    @Column()
    Accounts_Finance_name:string;
    @Column()
    Accounts_Finance_Whatsapp_Number:string;
    @Column()
    Accounts_Finance_designation:string;
    @Column()
    Accounts_Finance_email:string;
    @Column()
    event_coordinator_name:string;
    @Column()
    event_coordinator_Whatsapp_Number:string;
    @Column()
    event_coordinator_designation:string;
    @Column()
    event_coordinator_email:string;
    @BeforeInsert()
    passwordHash = async () => {
        this.password = (await hash(this.password.toString(), await genSalt(14))).toString();
      };
}