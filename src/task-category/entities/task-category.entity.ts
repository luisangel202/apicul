
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskCategory {

    @PrimaryGeneratedColumn()
    id : number

    @Column({
        unique : true
    })
    description : string

    @Column()
    color : string
    tasks: any;


}