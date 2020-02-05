import { Car } from './car.entity';
import constants from '../../constants';

export const carProviders = [
  {
    provide: constants.CAR_REPOSITORY,
    useValue: Car,
  },
];
