

import { IMMOBILIER_REPOSITORY } from 'src/core/constants';
import { Immobilier } from './immobilier.entity';

export const immobilierProviders = [{
    provide: IMMOBILIER_REPOSITORY,
    useValue: Immobilier,
}];