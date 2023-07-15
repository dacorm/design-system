import React, { FC } from 'react';
import { spaces } from '../../foundation/spacing';

interface ColorProps {
  hexCode: string;
  width?: keyof typeof spaces;
  height?: keyof typeof spaces;
}

export const Color: FC<ColorProps> = ({
  hexCode,
  width = spaces.sm,
  height = spaces.sm,
}) => {
  const className = `dse-width-${width} dse-height-${height}`;

  return (
    <div
      className={className}
      style={{
        backgroundColor: hexCode,
      }}
    ></div>
  );
};
