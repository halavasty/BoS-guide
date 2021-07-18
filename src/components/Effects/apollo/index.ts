import { gql } from '@apollo/client';
import { EffectSchema } from '../EffectSchema';

export const EFFECTS_LIST = gql`
  {
    effects(sort: "id:asc") {
      id
      name
      image {
        url
      }
    }
  }
`;

export interface EffectsData {
  effects: EffectSchema[];
}
