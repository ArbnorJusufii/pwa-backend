'use client';
import React, { useMemo, useState } from 'react';
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
} from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/index';
import { resetUser } from '@/store/slices/settings';
import { IUser } from '@/types/IUser';
import {
  getNavigationBottomItems,
  getNavigationItems,
} from '@/utils/navigation';
import List from './List';
import Avatar from '../common/Avatar';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid';
import { delayedAction } from '@/utils/index';

interface IProps {

  user?: IUser;
}

const Navigation: React.FC<IProps> = ({
  user,
  
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  const windowURL = usePathname();
  const { navigationRightOpen } = useAppSelector((store) => store.navigation);

  const [openModal, setOpenModal] = useState(false);


  const navigationItems = useMemo(() => {
    return getNavigationItems(segment, windowURL, user!);
  }, [segment, windowURL, user]);

  const navigationBottomItems = useMemo(() => {
    return getNavigationBottomItems(segment, windowURL, navigationRightOpen);
  }, [segment, windowURL, navigationRightOpen]);

  const onModalAccept = () => {
    setOpenModal(false);

    router.push('/signin');
    router.refresh();

    // Cookies.remove(COOKIE_USER);
    // Cookies.remove(COOKIE_USER_TOKEN);
    // Cookies.remove(COOKIE_COMPANY_BRANCH);
    // Cookies.remove(COOKIE_COMPANY_BRANCH_DATA);

    delayedAction(() => {
      dispatch(resetUser());
    });
  };

  const onModalDecline = () => {
    setOpenModal(false);
  };

  return (
    <nav className="flex flex-1 flex-col justify-between">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <List
            items={navigationItems}
          
          />
        </li>
      </ul>
      <ul className="pb-4">
        <li>
          <List
            className="-mx-2 mt-2 space-y-1"
            items={navigationBottomItems}
          />
        </li>
        <li className=" mt-4 flex justify-between w-full border-t border-gray-600">
          <div className="p-2 flex items-center gap-x-4 my-3 relative">
            <Avatar
              id={user && user.id}
              name={
                user &&
                user.firstName &&
                user.lastName &&
                `${user?.firstName} ${user?.lastName}`
              }
              text={user?.email}
              image={
                user && user.profilePicture ? user?.profilePicture : undefined
              }
            />
            <ArrowRightOnRectangleIcon
              onClick={() => {
                setOpenModal(true);
              }}
              className="absolute -right-16 box-content p-2 w-6 h-6 ml-2 text-gray-400 self-center flex items-center rounded-md hover:text-white hover:bg-gray-700 "
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
