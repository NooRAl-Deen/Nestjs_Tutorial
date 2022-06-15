import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepo: Repository<CustomerEntity>,
  ) {}

  async addCustomer(customer: CustomerEntity) {
    let createdCustomer = await this.customerRepo.create(customer);
    await this.customerRepo.save(createdCustomer);
    return createdCustomer;
  }

  async getAllCustomers() {
    return await this.customerRepo.find();
  }

  async getCustomer(id: number) {
    return await this.customerRepo.findOneBy({ customerId: id });
  }

  async deleteCustomer(id: number) {
    return await this.customerRepo.delete(id);
  }

  async updateCustomer(id: number, customer: CustomerEntity) {
    return await this.customerRepo.update(id, customer);
  }
}
