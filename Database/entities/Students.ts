import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToMany, JoinTable } from "typeorm";
import { Course } from "./Courses.js";

@Entity('student')
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    student_id: number;

    @Column({ nullable: false })
    name: string;

    @Column()
    age: number;

    @ManyToMany(() => Course, course => course.students)
    @JoinTable({
        name: 'StudentCourses',
        joinColumn: {
            name: 'student_id',
            referencedColumnName: 'student_id'
        },
        inverseJoinColumn: {
            name: 'course_id',
            referencedColumnName: 'course_id'
        }
    })
    courses: Course[];
}
