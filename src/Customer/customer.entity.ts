import { BillEntity } from 'src/Bill/bill.entity';
import { EmployeeEntity } from 'src/Employee/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  customerId: number;

  @Column()
  email: string;

  @Column({ type: 'int', width: 15 })
  phoneNumber: number;

  @Column()
  customerName: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.customer, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'employeeId',
  })
  employeeId: number;

  @OneToMany(() => BillEntity, (bill) => bill.customerId, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  billId: number;
}
