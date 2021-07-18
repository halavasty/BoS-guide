import { gql } from '@apollo/client';
import { CreatureSchema } from '../CreatureSchema';

export interface CreaturesData {
  creatures: CreatureSchema[];
}

export const CREATURES_LIST = gql`
  {
    creatures(sort: "id:asc") {
      id
      name
      icon {
        url
      }
      effects {
        id
        name
      }
    }
  }
`;
