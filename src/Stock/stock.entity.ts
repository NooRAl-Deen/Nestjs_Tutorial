import { BillEntity } from "src/Bill/bill.entity";
import { EmployeeEntity } from "src/Employee/employee.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StockEntity {

    @PrimaryGeneratedColumn()
    SN: number

    @Column()
    description: String

    @Column()
    price: Number

    @Column({ default: null })
    productionDate: Date

    @Column({ default: null })
    expirationDate: Date

    // M - 1 Relation Between [ Stock & Employee ]
    @ManyToOne(() => EmployeeEntity, employee => employee.stock, {onDelete: "SET NULL", onUpdate: "CASCADE"})
    @JoinColumn({
        name: "emp_stk_id",
    })
    employeeId: number

    @OneToOne(() => BillEntity, (bill) => bill.stockId, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    itemSn: number;
}