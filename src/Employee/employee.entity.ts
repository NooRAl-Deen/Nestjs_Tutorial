import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EmployeeGender } from "./employee.gender.enum";
import { EmployeeType } from "./employee.type.enum";

@Entity()
export class EmployeeEntity {
    @PrimaryGeneratedColumn()
    employeeId: number

    @Column()
    email: string

    @Column()
    firstName: string

    @Column()
    middleName: string

    @Column()
    lastName: string

    @Column({ type: "int", width: 15})
    phoneNumber: number

    @Column()
    type: EmployeeType

    @Column()
    gender: EmployeeGender

}