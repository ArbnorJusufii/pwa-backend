import { ICustomSelectItem } from '@/types/ICustomSelectItem';

export const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ');
};

export const generateCustomSelectOptions = (
    array: { id?: string; name?: string }[]
): ICustomSelectItem[] => {
    let res: ICustomSelectItem[] = [];

    array.forEach((element: { id?: string; name?: string }) => {
        if (element.id && element.name)
            res.push({
                label: element.name,
                value: element.id,
            });
    });

    return res;
};

export const generateStringArrayFromMultiSelector = (
    data: ICustomSelectItem[]
): string[] => {
    return data.map((el: ICustomSelectItem) => el.value);
};

export const mobileNumberRegex = /^(\+)?\d*$/;

export const delayedAction = (callback: Function, delay = 2000) => {
    setTimeout(() => {
        callback();
    }, delay);
};

export const EURFormaterWithDigits = new Intl.NumberFormat('pr-PR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
});

export const urlBase64ToUint8Array = (base64String: string): Uint8Array => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
};
