import { EffectSchema } from '../Effects/EffectSchema';
import { ImageSchema } from '../Image/ImageSchema';

export interface CreatureSchema {
  id: string;
  name: string;
  icon: ImageSchema;
  effects: EffectSchema[];
}
