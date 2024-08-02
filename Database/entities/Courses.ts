import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, ManyToMany } from "typeorm";
import { Teacher } from "./Teachers.js";
import { Student } from "./Students.js";

@Entity('course')
export class Course extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    course_id: number;

    @Column()
    course_name: string;

   

    @ManyToMany(() => Student, (student) => student.courses)
    students: Student[];

    @ManyToOne(() => Teacher, teacher => teacher.courses)
    teacher: Teacher;
}
