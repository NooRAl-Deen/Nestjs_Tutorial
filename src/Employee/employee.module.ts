import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeController } from "./employee.controller";
import { EmployeeEntity } from "./employee.entity";
import { EmployeeService } from "./employee.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([EmployeeEntity])
    ],
    providers: [EmployeeService],
    controllers: [EmployeeController],
    exports: [TypeOrmModule]
})

export class EmployeeModule {}