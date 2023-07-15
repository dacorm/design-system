import React, { FC } from 'react';
import { spacing } from "@design-system/foundation";

interface ColorProps {
  hexCode: string;
  width?: keyof typeof spacing;
  height?: keyof typeof spacing;
}

export const Color: FC<ColorProps> = ({
  hexCode,
  width = spacing.sm,
  height = spacing.sm,
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
