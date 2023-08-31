import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BillController } from "./bill.controller";
import { BillEntity } from "./bill.entity";
import { BillService } from "./bill.service";

@Module({
    providers: [BillService],
    controllers: [BillController],
    exports: [TypeOrmModule],
    imports: [TypeOrmModule.forFeature([BillEntity])]
})

export class BillModule {}