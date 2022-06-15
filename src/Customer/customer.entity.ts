import { EmployeeEntity } from 'src/Employee/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => EmployeeEntity, (employee) => employee.customer)
  @JoinColumn({
    name: 'employeeId',
  })
  employeeId: number;
}
