import React, {FC, PropsWithChildren} from 'react';
import { spacing } from "@design-system/foundation";

interface MarginProps {
    space?: keyof typeof spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}

export const Margin: FC<PropsWithChildren<MarginProps>> = ({ space = spacing.xxxs, left, right, top, bottom, children }) => {
    let className = ``;

    if (!left && !right && !top && !bottom) {
        className = `dse-margin-${space}`;
    }

    if (left) {
        className = `${className} dse-margin-left-${space}`;
    }

    if (right) {
        className = `${className} dse-margin-right-${space}`;
    }

    if (top) {
        className = `${className} dse-margin-top-${space}`;
    }

    if (bottom) {
        className = `${className} dse-margin-bottom-${space}`;
    }

    return (
        <div className={className}>
            {children}
        </div>
    );
};