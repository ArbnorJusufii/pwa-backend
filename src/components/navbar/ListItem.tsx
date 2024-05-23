'use client';
import React from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/index';
import {
  updateNavigationRightOpen,
  updateSidebarOpen,
} from '@/store/slices/navigation';
import { INavigation } from '@/types/INavigation';
import { classNames } from '@/utils/index';
import Count from './Count';

interface IProps {
  item: INavigation;
}

const ListItem: React.FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { navigationRightOpen } = useAppSelector((store) => store.navigation);

  const onLinkClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    if (e) {
      if (item.name === 'Settings') {
        e.preventDefault();
        e.stopPropagation();

        dispatch(updateNavigationRightOpen(!navigationRightOpen));
      } else {
        dispatch(updateNavigationRightOpen(false));
        dispatch(updateSidebarOpen(false));
      }
    }
  };
  return (
    <li key={item.name}>
      <Link
        href={item.href}
        className={classNames(
          item.current
            ? 'bg-gray-700 font-semibold text-base text-white'
            : 'text-gray-100 font-semibold text-base  hover:text-white hover:bg-gray-700',
          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
        )}
        onClick={onLinkClick}>
        <item.icon className='h-6 w-6 shrink-0' aria-hidden='true' />
        {item.name}
        {item.count && <Count count={item.count} />}
      </Link>
    </li>
  );
};

export default ListItem;
