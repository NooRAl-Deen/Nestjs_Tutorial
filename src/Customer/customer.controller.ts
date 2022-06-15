import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerEntity } from './customer.entity';
import { CustomerService } from './customer.service';

@Controller('api/customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post()
  addCustomer(@Body() customer: CustomerEntity) {
    return this.customerService.addCustomer(customer);
  }

  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Get(':id')
  getCustomer(@Param('id') id: number) {
    return this.customerService.getCustomer(id);
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: number) {
    return this.customerService.deleteCustomer(id);
  }

  @Put(':id')
  updateCustomer(@Param('id') id: number, @Body() customer: CustomerEntity) {
    return this.customerService.updateCustomer(id, customer);
  }
}
