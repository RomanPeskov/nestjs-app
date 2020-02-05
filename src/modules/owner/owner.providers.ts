import { Owner } from './owner.entity';
import constants from '../../constants';

export const ownerProviders = [
  {
    provide: constants.OWNER_REPOSITORY,
    useValue: Owner,
  },
];
