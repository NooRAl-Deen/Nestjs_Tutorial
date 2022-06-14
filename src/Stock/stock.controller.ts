import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StockEntity } from './stock.entity';
import { StockService } from './stock.service';

@Controller('api/stocks')
export class StockController {
  constructor(private _stockService: StockService) {}

  // Add new stock
  @Post()
  addStock(@Body() stock: StockEntity) {
    return this._stockService.addStock(stock);
  }

  // Delete stock
  @Delete(':id')
  deleteStock(@Param('id') id: number) {
    return this._stockService.deleteStock(id);
  }

  // Get All Stocks
  @Get()
  getAllStocks() {
    return this._stockService.getAllStocks();
  }

  // Get Specific Stock
  @Get(':id')
  getStock(@Param('id') id: number) {
    return this._stockService.getStock(id);
  }

  // Update Stock
  @Put(':id')
  updateStock(@Param('id') id: number, @Body() stock: StockEntity) {
    return this._stockService.updateStock(id, stock);
  }
}
