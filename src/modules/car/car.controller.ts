import { Controller, Get, Post, Body, Param, Delete, Patch, HttpCode } from '@nestjs/common';

import { CreateCarDto } from './dto/createCar.dto';
import { UpdateCarDto } from './dto/updateCar.dto';
import { CarService } from './car.service';
import { Car } from './car.entity';
import { ManufacturerService } from '../manufacturer/manufacturer.service';
import { Manufacturer } from '../manufacturer/manufacturer.entity';

@Controller('cars')
export class CarController {
  constructor(private readonly manufacturesService: ManufacturerService, private readonly carService: CarService) {}

  @Get()
  getCars(): Promise<Car[]> {
    return this.carService.getCars();
  }

  @Get(':id')
  async getCar(@Param('id') carId: number): Promise<Car> {
    return this.carService.getCar(carId);
  }

  @Get(':id/manufacturer')
  async getManufactureByCarId(@Param('id') carId: number): Promise<Manufacturer> {
    const { manufacturerId } = await this.carService.getCar(carId);
    return this.manufacturesService.getManufacture(manufacturerId);
  }

  @Post()
  createCar(@Body() car: CreateCarDto): Promise<Car> {
    return this.carService.createCar(car);
  }

  @Patch(':id')
  async updateCar(@Param('id') carId: number, @Body() car: UpdateCarDto): Promise<Car> {
    return this.carService.updateCar(carId, car);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteCar(@Param('id') carId: number): Promise<null> {
    await this.carService.deleteCar(carId);
    return null;
  }
}
