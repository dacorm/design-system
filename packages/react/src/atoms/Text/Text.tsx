import React, {FC, PropsWithChildren} from 'react';
import {fontSizes} from "@design-system/foundation";

interface TextProps {
    size?: keyof typeof fontSizes;
}

export const Text: FC<PropsWithChildren<TextProps>> = ({ size = fontSizes.base, children }) => {
    const className = `dse-text dse-text-${size}`;

    return (
        <p className={className}>
            {children}
        </p>
    );
};