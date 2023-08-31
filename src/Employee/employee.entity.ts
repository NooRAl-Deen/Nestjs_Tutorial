import { BillEntity } from 'src/Bill/bill.entity';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { StockEntity } from 'src/Stock/stock.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployeeGender } from './employee.gender.enum';
import { EmployeeType } from './employee.type.enum';

@Entity()
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  employeeId: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column({ type: 'int', width: 15 })
  phoneNumber: number;

  @Column()
  type: EmployeeType;

  @Column()
  gender: EmployeeGender;

  // Recursive Relation [ Manager & Employees ]
  @OneToMany(() => EmployeeEntity, (employee) => employee.managerId, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  manager: EmployeeEntity;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.manager, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'managerId',
  })
  managerId: number;

  // 1 - M Relation Between [ Employee & Stocks ]
  @OneToMany(() => StockEntity, (stock) => stock.employeeId, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  stock: StockEntity;

  @OneToMany(() => CustomerEntity, (customer) => customer.employeeId, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  customer: CustomerEntity;

  @OneToMany(() => BillEntity, (bill) => bill.employeeId, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  accountantId: number;
}
