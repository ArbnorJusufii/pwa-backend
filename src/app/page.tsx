'use client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

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
            toast.error('Notification permission not granted');
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

            saveSubscription(subscription).then((res: any) => {
                if (res && res.status === 'Success') {
                    toast.success(res.message);
                }
            });
        } catch (error) {
            toast.error('Error enabling notifications');
            console.error('Error enabling notifications', error);
        }
    };

    const sendNotificaiton = () => {
        fetch(`${url}send-notification`, {
            method: 'GET',
        })
            .then((res: any) => {
                console.log(res);

                if (res && res.status === 200) {
                    toast.success('Notification sent');
                }
            })
            .catch((error: any) => {
                toast.error('Error sending notification');
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
        </div>
    );
}
