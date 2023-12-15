import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MagnifyingGlassIcon, StarIcon } from '@heroicons/react/24/outline';

import Icon, { ICON_SIZE } from '../icon';
import { InputField } from '../input';
import { LinkText } from '../text';
import ProfileMenu from '../profile-menu';

const Header = () => (
  <header className="hidden md:flex items-center justify-between py-8 px-8 md:px-16 bg-primary dark:bg-primary-dark">
    <div className="flex items-center">
      <Link href="/">
        <Image
          className="h-32 w-32"
          src="/logo.png"
          alt="Sublinks logo"
          width={32}
          height={32}
          priority
        />
      </Link>
      <div className="flex gap-16 ml-24 items-center">
        <Link href="/communities">
          <LinkText>Create community</LinkText>
        </Link>
        <Link href="/p">
          <LinkText>Create post</LinkText>
        </Link>
        <span>|</span>
        <Link href="/favorites">
          <Icon IconType={StarIcon} size={ICON_SIZE.SMALL} title="Favorites" isInteractable />
        </Link>
      </div>
    </div>
    <div className="flex items-center gap-12">
      <InputField
        type="text"
        name="search"
        id="search"
        label="Search"
        placeholder="Search"
        LeftIcon={MagnifyingGlassIcon}
        className="w-240 lg:hover:w-500 lg:focus-within:w-500 transition-all"
      />
      <ProfileMenu />
    </div>
  </header>
);

export default Header;
