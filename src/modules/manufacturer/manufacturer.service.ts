import { Injectable, Inject } from '@nestjs/common';

import constants from '../../constants';
import { Manufacturer } from './manufacturer.entity';

@Injectable()
export class ManufacturerService {
  constructor(
    @Inject(constants.MANUFACTURER_REPOSITORY)
    private readonly manufacturesRepository: typeof Manufacturer,
  ) {}

  async getManufacture(manufacturerId): Promise<Manufacturer> {
    return this.manufacturesRepository.findOne<Manufacturer>({
      where: {
        id: manufacturerId,
      },
    });
  }
}
