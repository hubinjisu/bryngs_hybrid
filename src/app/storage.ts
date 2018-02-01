import { Package } from '../app/packageModel';

export class Storage {
  id: number;
  name: string;
  address: string;
  maxSpaceCapacity: number;
  maxWeightCapacity: number;
  status: number;
  packages: Package[];
}
