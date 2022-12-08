import type { PageLoad } from './$types';

export interface Message {
    date: Date, 
    name: string, 
    message: string
}

export const load: PageLoad = async () => {
    return {
        messages: [] as Message[]
    };
};