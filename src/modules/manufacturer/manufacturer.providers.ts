import { Manufacturer } from './manufacturer.entity';
import constants from '../../constants';

export const manufacturerProviders = [
  {
    provide: constants.MANUFACTURER_REPOSITORY,
    useValue: Manufacturer,
  },
];
