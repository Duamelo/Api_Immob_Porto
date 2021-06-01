import { Model } from 'sequelize-typescript';
import { IntegerDataType } from 'sequelize/types';
import { User } from '../users/user.entity';
export declare class Immobilier extends Model<Immobilier> {
    id: IntegerDataType;
    type: string;
    nombreDeChambre: IntegerDataType;
    nombreDeSalon: IntegerDataType;
    cuisine: boolean;
    sanitaire: boolean;
    douche: boolean;
    surface: IntegerDataType;
    description: string;
    adresse: string;
    dateDeDisponibilite: string;
    etatDuBien: string;
    etage: IntegerDataType;
    date_offre: string;
    type_offre: string;
    titre_offre: string;
    description_offre: string;
    options: string;
    vendorId: IntegerDataType;
    user: User;
}
