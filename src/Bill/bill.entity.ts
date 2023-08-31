import { CustomerEntity } from "src/Customer/customer.entity";
import { EmployeeEntity } from "src/Employee/employee.entity";
import { StockEntity } from "src/Stock/stock.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BillEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    printDate: Date

    @ManyToOne(() => CustomerEntity, (customer) => customer.billId, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    @JoinColumn({
        name: "forCustomer"
    })
    customerId: CustomerEntity;

    @ManyToOne(() => EmployeeEntity, (employee) => employee.accountantId, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    @JoinColumn({
        name: "fromEmployee"
    })
    employeeId: number;

    @OneToOne(() => StockEntity, (stock) => stock.itemSn, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    @JoinColumn({
        name: "stockId"
    })
    stockId: number;
}