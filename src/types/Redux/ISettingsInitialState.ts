import { IUser } from '../IUser';

export interface ISettingsInitialState {
    language: 'en' | 'pt';
    user?: IUser;
}
