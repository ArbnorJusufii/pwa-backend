'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '@/store/index';
import { updateNavigationRightOpen } from '@/store/slices/navigation';
import { getNavigationRightItems } from '@/utils/navigation';
import List from './List';

import { IUser } from '@/types/IUser';

interface IProps {
  isMobile?: boolean;
  className?: string;
  user?:IUser;
}

const NavigationRight: React.FC<IProps> = ({ isMobile, className, user }) => {
  const windowURL = usePathname();
  const dispatch = useAppDispatch();

  const [currentUserRole, setCurrentUserRole] = useState<string | null>(null);

  // useEffect(() => {
  //   const userToken: string | undefined = Cookies.get(COOKIE_USER_TOKEN);

  //   if (userToken) {
  //     const userTokenData: ITokenData = jwtDecode(JSON.parse(userToken));
  //     setCurrentUserRole(userTokenData.role);
  //   }
  // }, []);

  const onArrowClick = () => {
    dispatch(updateNavigationRightOpen(false));
  };

  return (
    <div
      className={
        className
          ? className
          : 'h-screen w-64 flex grow flex-col gap-y-5 overflow-y-auto bg-gray-800 px-6 py-6 '
      }
    >
      <>
        {isMobile && (
          <ArrowSmallLeftIcon
            className="h-6 w-6 shrink-0"
            aria-hidden="true"
            onClick={onArrowClick}
          />
        )}
        <nav className="flex flex-1 flex-col justify-between">
          <ul
            role="list"
            className="flex flex-1 flex-col gap-y-7"
          >
            <li>
              <List
                items={getNavigationRightItems(windowURL, user!)}
              />
            </li>
          </ul>
          <ul>
            <li>
              <List
                className="-mx-2 mt-2 space-y-1"
                items={[]}
                languageSelector={true}
              />
            </li>
          </ul>
        </nav>
      </>
    </div>
  );
};

export default NavigationRight;
