import { Module } from '@nestjs/common';

import { ownerProviders } from './owner.providers';
import { OwnerService } from './owner.service';

@Module({
  exports: [OwnerService],
  providers: [OwnerService, ...ownerProviders],
})
export class OwnerModule {}
