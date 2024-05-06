import React from 'react';
import cx from 'classnames';

import Icon, { ICON_SIZE } from '../icon';
import { BodyText, PaleBodyText } from '../text';
import MarkdownTextarea from './textarea';

interface CheckboxProps {
  label: string;
  name: string;
  id: string;
}

const Checkbox = ({ label, name, id }: CheckboxProps) => (
  <div className="flex gap-8 items-center">
    <input type="checkbox" id={id} name={name} className="flex items-center justify-center appearance-none cursor-pointer w-20 h-20 rounded-md border-2 border-gray-300 dark:border-gray-900 checked:bg-brand dark:checked:bg-brand-dark checked:after:content-['✓']" />
    <label htmlFor={name} className="cursor-pointer">
      <BodyText>{label}</BodyText>
    </label>
  </div>
);

interface InputFieldProps {
  type: string;
  label: string;
  name: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
  LeftIcon?: React.FunctionComponent;
  hasError?: boolean;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  showBorderPlaceholder?: boolean;
  borderPlaceholderClassName?: string;
  inputPattern?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputField = ({
  type,
  label,
  name,
  id,
  placeholder,
  disabled,
  LeftIcon,
  hasError,
  className,
  inputClassName,
  iconClassName,
  showBorderPlaceholder,
  borderPlaceholderClassName,
  inputPattern,
  onChange
}: InputFieldProps) => (
  <div className={cx('bg-primary dark:bg-gray-800 rounded-md', className)}>
    <label htmlFor={name} className="sr-only">
      {label}
    </label>
    <div className={cx('relative flex items-center border-2 rounded-md px-8', hasError ? 'border-red-700 dark:border-red-400' : 'border-gray-300 dark:border-gray-900')}>
      {LeftIcon && (
        <span className="aria-hidden">
          <Icon IconType={LeftIcon} size={ICON_SIZE.SMALL} className={iconClassName} />
        </span>
      )}
      <input
        type={type}
        name={name}
        id={id}
        className={cx('h-40 peer block w-full rounded-md border-0 p-8 text-gray-900 dark:text-white bg-primary dark:bg-gray-800 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6', inputClassName)}
        placeholder={placeholder}
        disabled={disabled}
        pattern={inputPattern}
        onChange={onChange}
      />
      {showBorderPlaceholder && <PaleBodyText className={cx('absolute text-xs bg-primary dark:bg-gray-800 px-4 -top-12 peer-placeholder-shown:top-0 opacity-100 peer-placeholder-shown:opacity-0 rounded-t-md border-t-2 border-x-2 dark:dark:border-gray-900 transition-all', borderPlaceholderClassName)}>{placeholder}</PaleBodyText>}
    </div>
  </div>
);

export {
  Checkbox,
  InputField,
  MarkdownTextarea
};
