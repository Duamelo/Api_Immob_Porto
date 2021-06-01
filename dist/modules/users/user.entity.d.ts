import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    id: number;
    isAdmin: boolean;
    isClient: boolean;
    isVendor: boolean;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    pays: string;
    adresse: string;
    password: string;
    role: string;
}
