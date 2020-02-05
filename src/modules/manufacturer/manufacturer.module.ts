import { Module } from '@nestjs/common';

import { manufacturerProviders } from './manufacturer.providers';
import { ManufacturerService } from './manufacturer.service';

@Module({
  imports: [],
  controllers: [],
  exports: [ManufacturerService],
  providers: [ManufacturerService, ...manufacturerProviders],
})
export class ManufacturerModule {}
