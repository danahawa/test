// Moongooes Connection. 

import { DataSource } from "typeorm";
import { Teacher } from "./entities/Teachers.js";
import { TeacherProfiles } from "./entities/TeacherProfiles.js";
import { Course } from "./entities/Courses.js";
import { Student } from "./entities/Students.js";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "school",
    synchronize: true,
    logging: false,
    entities: [Student,Teacher,Course,TeacherProfiles]
})


export default dataSource;