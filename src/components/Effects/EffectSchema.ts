import { ImageSchema } from '../Image/ImageSchema';

export interface EffectSchema {
  id: string;
  name: string;
  image: ImageSchema;
}
