import { TaskCategory } from "src/task-category/entities/task-category.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskCategoryId : number
    @ManyToOne(() => TaskCategory, category => category.tasks)
    taskCategory: TaskCategory;


    @Column()
    userId : number
    @ManyToOne(() => User, (user) => user.taskS)
    user: User;

    @Column()
    description: string

    @Column()
    color: string

}