import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StockController } from "./stock.controller";
import { StockEntity } from "./stock.entity";
import { StockService } from "./stock.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([StockEntity])
    ],
    controllers: [StockController],
    providers: [StockService],
    exports: [TypeOrmModule]
})

export class StockModule {}