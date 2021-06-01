import { Model } from "sequelize-typescript";
import { User } from "../users/user.entity";
export declare class Publication extends Model<Publication> {
    id: number;
    titre: string;
    description: string;
    date_pub: string;
    type_pub: string;
    clientId: number;
    user: User;
}
