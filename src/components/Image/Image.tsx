import React from 'react';
import { cn } from '@bem-react/classname';
import './Image.scss';
import { ImageSchema } from './ImageSchema';

const cnImage = cn('Image');
const basePath = process.env.REACT_APP_STRAPI || 'http://localhost:2337';

interface ImageModel extends ImageSchema {
  className?: string;
}

export const Image: React.FC<ImageModel> = ({
  url,
  name,
  className,
  children,
}) => {
  if (!url) {
    return null;
  }

  return (
    <div className={cnImage(null, [className])}>
      <img className={cnImage('Img')} src={basePath + url} alt={name} />
      {children}
    </div>
  );
};
