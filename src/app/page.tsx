'use client';
import React, { useState } from 'react';

export default function Home() {
    const url =
        process.env.NODE_ENV === 'production'
            ? 'https://back-pwa.onrender.com/'
            : 'http://localhost:5000/';

    const checkPermission = (): void => {
        if (!('serviceWorker' in navigator)) {
            throw new Error('No support for service worker!');
        }

        if (!('Notification' in window)) {
            throw new Error('No support for notification API');
        }

        if (!('PushManager' in window)) {
            throw new Error('No support for Push API');
        }
    };

    const registerSW = async (): Promise<ServiceWorkerRegistration> => {
        const registration = await navigator.serviceWorker.register(
            'notification-sw.js'
        );
        return registration;
    };

    const requestNotificationPermission = async (): Promise<void> => {
        const permission = await Notification.requestPermission();

        if (permission !== 'granted') {
            throw new Error('Notification permission not granted');
        }
    };

    const saveSubscription = async (
        subscription: PushSubscription
    ): Promise<any> => {
        const response = await fetch(`${url}save-subscription`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(subscription),
        });

        return response.json();
    };

    const main = async (): Promise<void> => {
        try {
            checkPermission();
            await requestNotificationPermission();
            const registration = await registerSW();

            const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey:
                    process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
            });

            await saveSubscription(subscription);
        } catch (error) {
            console.error('Error enabling notifications', error);
        }
    };

    const sendNotificaiton = async () => {
        await fetch(`${url}send-notification`, {
            method: 'GET',
        });
    };

    return (
        <div className='w-full'>
            <div className='pt-5'>
                <button
                    className='bg-blue-500 mb-6 mx-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={main}>
                    Enable notification
                </button>
            </div>
            <div className='pt-5'>
                <button
                    className='bg-blue-500 mb-6 mx-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={sendNotificaiton}>
                    Send Notification
                </button>
            </div>
            {/* <meta
                name='theme-color'
                media='(prefers-color-scheme: light)'
                content='cyan'
            />
            <meta
                name='theme-color'
                media='(prefers-color-scheme: dark)'
                content='black'
            />
            <Banner />
            <div className='w-full p-5 sm:px-10'>
                <GuestInformation
                    href='/'
                    fullName={'Olivia'}
                    session={'Rapture Surfcamp Bali'}
                    date={'10.10-18.10-2023'}
                    total={300}
                />

                <div className='w-full flex flex-col md:space-x-14 md:flex-row'>
                    <CardContainer
                        title='Services'
                        href='/'
                        className='mt-10 md:w-1/2'>
                        <Card
                            title='Surf Lesson'
                            description='10:00 - 11:00'
                            descriptionRight='22 Att.'
                            img='/images/banner.jpg'>
                            <Banner />
                            <GuestInformation
                                href='/'
                                fullName={'Olivia'}
                                session={'Rapture Surfcamp Bali'}
                                date={'10.10-18.10-2023'}
                                total={300}
                            />
                        </Card>
                        <Card
                            title='Surf Lesson 2'
                            description='13:00 - 15:00'
                            descriptionRight='22 Att.'
                            img='/images/banner.jpg'
                            className=''></Card>
                        <Card
                            title='Yoga'
                            description='11:00 - 13:00'
                            descriptionRight='22 Att.'
                            img='/images/banner.jpg'>
                            <p className='text-black'>
                                bkjasj kjadhkjsdaj kdha sjvdb jahksdj kabsdkab{' '}
                            </p>
                        </Card>
                    </CardContainer>

                    <CardContainer
                        title='Products'
                        href='/'
                        className='mt-10 md:w-1/2'>
                        <Card
                            title='Beer'
                            addBadge={true}
                            img='/images/banner.jpg'
                        />
                        <Card
                            title='Cola'
                            addBadge={true}
                            img='/images/banner.jpg'
                        />
                        <Card
                            title='Hoodie'
                            addBadge={true}
                            img='/images/banner.jpg'
                        />
                    </CardContainer>
                </div>
            </div> */}
        </div>
    );
}
