import { StockEntity } from "src/Stock/stock.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

    // Recursive Relation [ Manager & Employees ]
    @OneToMany(() => EmployeeEntity, employee => employee.managerR, {onDelete: "SET NULL", onUpdate: "CASCADE"})
    manager: EmployeeEntity

    @ManyToOne(() => EmployeeEntity, employee => employee.manager, {onDelete: "SET NULL", onUpdate: "CASCADE"})
    @JoinColumn({
        name: "managerId"
    })
    managerR: EmployeeEntity

    // 1 - M Relation Between [ Employee & Stocks ]
    @OneToMany(() => StockEntity, stock => stock.employee, {onDelete: "SET NULL", onUpdate: "CASCADE"})
    stock: StockEntity

}