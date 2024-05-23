'use server';
import { revalidateTag } from 'next/cache';

export const revalidateData = async (tag: string) => {
    revalidateTag(tag);
};
