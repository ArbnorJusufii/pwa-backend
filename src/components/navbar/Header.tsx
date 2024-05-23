'use client';
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '@/store/index';
import { updateSidebarOpen } from '@/store/slices/navigation';
import { resetUser } from '@/store/slices/settings';
import { IUser } from '@/types/IUser';
import { classNames, delayedAction } from '@/utils/index';
import { userNavigation } from '@/utils/navigation';
import Avatar from '@/components/common/Avatar';
import Search from './Search';
import ArtidalIconSecondary from '../common/svg/ArtidalIconSecondary';
import ArtidalLogo from '../common/svg/ArtidalLogo';

interface IProps {
    user?: IUser;
}

const Header: React.FC<IProps> = ({ user }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [openModal, setOpenModal] = useState(false);

    const onClick = () => {
        dispatch(updateSidebarOpen(true));
    };

    // const onModalAccept = () => {
    //   setOpenModal(false);

    //   router.push('/signin');
    //   router.refresh();

    //   Cookies.remove(COOKIE_USER);
    //   Cookies.remove(COOKIE_USER_TOKEN);

    //   delayedAction(() => {
    //     dispatch(resetUser());
    //   });
    // };

    // const onModalDecline = () => {
    //   setOpenModal(false);
    // };

    return (
        <React.Fragment>
            <div className='sticky w-full top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden'>
                <div className='w-screen justify-between flex flex-row-reverse items-center'>
                    <button
                        type='button'
                        className='-m-7 p-2.5 text-gray-400 lg:hidden'
                        onClick={onClick}>
                        <span className='sr-only'>Open sidebar</span>
                        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                    </button>
                    <div className='flex items-center'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <ArtidalIconSecondary />
                        <ArtidalLogo fill='#7829E7' />
                    </div>
                </div>
                <div className='flex items-center gap-x-4 lg:hidden'>
                    {/* Profile dropdown */}
                    <Menu as='div' className='relative'>
                        <Transition
                            as={Fragment}
                            enter='transition ease-out duration-100'
                            enterFrom='transform opacity-0 scale-95'
                            enterTo='transform opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='transform opacity-100 scale-100'
                            leaveTo='transform opacity-0 scale-95'>
                            <Menu.Items className='absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-gray-900 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                                {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => {
                                            if (item.name === 'Sign out') {
                                                return (
                                                    <span
                                                        onClick={() => {
                                                            setOpenModal(true);
                                                        }}
                                                        className={classNames(
                                                            active
                                                                ? 'bg-gray-700 font-semibold text-base text-white'
                                                                : 'text-gray-100 font-semibold text-base  hover:text-white hover:bg-gray-700',
                                                            'block px-3 py-1 text-sm leading-6 text-white-900 cursor-pointer'
                                                        )}>
                                                        {item.name}
                                                    </span>
                                                );
                                            }

                                            return (
                                                <a
                                                    href={item.href.replace(
                                                        /:id/i,
                                                        user ? user.id : ''
                                                    )}
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-700 font-semibold text-base text-white'
                                                            : 'text-gray-100 font-semibold text-base  hover:text-white hover:bg-gray-700',
                                                        'block px-3 py-1 text-sm leading-6 text-white-900 cursor-pointer'
                                                    )}>
                                                    {item.name}
                                                </a>
                                            );
                                        }}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            {/* <Modal
        open={openModal}
        setOpenModal={setOpenModal}
        onAccept={onModalAccept}
        onDecline={onModalDecline}
        type={EModalType.LOG_OUT}
      /> */}
        </React.Fragment>
    );
};

export default Header;
