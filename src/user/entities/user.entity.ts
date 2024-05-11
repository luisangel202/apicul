import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;

    @Column()
    address: string;

    @Column()
    phonenumber: string;
   
    @Column()
    unique:true;

    @Column()
    email: string;
  
    @Column({ default: true })
    isActive: boolean;taskS: any;

}
