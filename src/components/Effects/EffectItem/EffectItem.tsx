import React from 'react';
import { cn } from '@bem-react/classname';
import './EffectItem.scss';
import { Image } from '../../Image';
import { ImageSchema } from '../../Image/ImageSchema';
import { EffectSchema } from '../EffectSchema';

export const cnEffectsItem = cn('EffectsItem');

export interface EffectItemSchema extends EffectSchema {
  id: string;
  name: string;
  image: ImageSchema;
  onChange?: () => void;
  className?: string;
}

export const EffectItem: React.FC<EffectItemSchema> = ({
  name,
  image,
  onChange,
  className,
}) => {
  return (
    <button className={className} type="button" onClick={onChange}>
      <span className={cnEffectsItem('Label')}>{name}</span>
      <Image url={image.url} />
    </button>
  );
};
