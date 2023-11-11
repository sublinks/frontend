import React from 'react';

import Icon, { ICON_SIZE } from '../icon';

interface TextFieldProps {
  type: string;
  label: string;
  name: string;
  id: string;
  placeholder: string;
  LeftIcon: React.FunctionComponent;
}

const TextField = ({
  type, label, name, id, placeholder, LeftIcon
}: TextFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900 sr-only">
      {label}
    </label>
    <div className="flex items-center border border-gray-300 rounded-md px-8">
      {LeftIcon && (
        <span className="aria-hidden">
          <Icon IconType={LeftIcon} size={ICON_SIZE.SMALL} />
        </span>
      )}
      <input
        type={type}
        name={name}
        id={id}
        className="block w-full rounded-md border-0 py-8 px-8 text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export {
  TextField
};
