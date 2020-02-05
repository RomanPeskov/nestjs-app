import { Module } from '@nestjs/common';

import { CarController } from './car.controller';
import { CarService } from './car.service';
import { carProviders } from './car.providers';
import { ManufacturerModule } from '../manufacturer/manufacturer.module';

@Module({
  imports: [ManufacturerModule],
  controllers: [CarController],
  providers: [CarService, ...carProviders],
})
export class CarModule {}
