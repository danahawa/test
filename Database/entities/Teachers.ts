

//teacher_id, name, department
import { BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, Entity, JoinColumn } from "typeorm";
import { Course } from "./Courses.js";
import { TeacherProfiles } from "./TeacherProfiles.js";

@Entity('teacher')
export class Teacher extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    teacher_id: number;

    @Column({ nullable: false })
    name: string;

    @Column()
    department: string;

    @OneToMany(() => Course, course => course.teacher)
    courses: Course[];

    

    @OneToOne(() => TeacherProfiles, profile => profile.teacher)
    @JoinColumn({
        name: 'teacher_id',
        referencedColumnName: 'teacher_id'
    })
    profile: TeacherProfiles;
}
