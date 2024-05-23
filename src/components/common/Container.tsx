'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/index';
import Sidebar from '../navbar/Sidebar';
import Header from '../navbar/Header';
import Content from './Content';
import { updateUser } from '@/store/slices/settings';
import useLanguage from '@/hooks/useLanguage';
import { useSelectedLayoutSegment } from 'next/navigation';
import '@/utils/localization/i18n';
import { IUser } from '@/types/IUser';

interface IProps {
    user?: IUser;
    children: React.ReactNode;
}

const Container: React.FC<IProps> = ({
    children,

    user,
}) => {
    const segment = useSelectedLayoutSegment();
    const { language } = useAppSelector((store: any) => store.settings);
    useLanguage(language);

    const dispatch = useAppDispatch();

    // useEffect(() => {
    //   dispatch(resetOptionalGuests());
    // }, [dispatch]);

    useEffect(() => {
        if (user) {
            dispatch(updateUser(user));
        }
    }, [dispatch, user]);

    if (segment === '(authentication)' || segment === '(not-found)') {
        return (
            <main className='flex flex-col bg-white box-border h-full w-full'>
                {children}
            </main>
        );
    }

    return (
        <main className='flex flex-col bg-white box-border h-full w-full'>
            <Header user={user} />
            <div className='flex flex-row justify-between h-full w-full'>
                <Sidebar user={user} />
                <Content>{children}</Content>
            </div>
        </main>
    );
};

export default Container;
