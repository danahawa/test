import { BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, Entity } from "typeorm";
import { Teacher } from "./Teachers.js";

@Entity('teacherProfiles')
export class TeacherProfiles extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    teacher_id: number;

    @Column({ nullable: false })
    profile_bio: string;

    @OneToOne(() => Teacher, teacher => teacher.profile)
    teacher: Partial<Teacher>;
}
