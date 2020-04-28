import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { DatabaseModule } from './database/database.module';
import { ManufacturerModule } from './modules/manufacturer/manufacturer.module';
import { CarModule } from './modules/car/car.module';
import { OwnerModule } from './modules/owner/owner.module';

@Module({
  imports: [DatabaseModule, ManufacturerModule, CarModule, OwnerModule, ScheduleModule.forRoot()],
})

export class AppModule {}
