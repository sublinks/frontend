'use client';

import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import cx from 'classnames';
import LinkButton from '../button-link';

interface CollapsableProps {
  open?: boolean;
  onSwitch?: (newState: boolean) => void;
  children: React.ReactNode;
  containerClassName?: string;
  contentClassName?: string;
  hideIcon?: boolean;
  title?: string;
}

const ChevronDownIconClassname = 'float-end inline-block ml-2 w-24 text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-400';

const Collapsable = ({
  open, onSwitch, children, containerClassName, contentClassName, hideIcon, title
}:
CollapsableProps) => {
  const [active, setActive] = useState(open !== undefined ? open : false);

  const handleSwitch = () => {
    if (onSwitch) {
      onSwitch(!active);
    } else {
      setActive(!active);
    }
  };

  useEffect(() => {
    if (open !== undefined) setActive(open);
  }, [open, setActive]);

  return (
    <div className={cx('flex flex-col border-t border-gray-500', containerClassName)}>
      <LinkButton type="button" ariaLabel="Collapsable open/close button" onClick={handleSwitch}>
        {title}
        {!hideIcon && (
          active
            ? (
              <ChevronUpIcon
                className={ChevronDownIconClassname}
              />
            )
            : (
              <ChevronDownIcon
                className={ChevronDownIconClassname}
              />
            ))}
      </LinkButton>
      <div
        aria-expanded={active}
        className={cx({
          hidden: !active,
          block: active
        }, contentClassName)}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsable;
