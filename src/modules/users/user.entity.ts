import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { IntegerDataType } from 'sequelize/types';

@Table
export class User extends Model<User> {
    //id
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
     public id: number;


      //isAdmin
    @Column({
        type: DataType.BOOLEAN
    })
    public isAdmin: boolean;


    //isClient
    @Column({
        type: DataType.BOOLEAN
    })
    public isClient: boolean;

    //isVendor
    @Column({
    type: DataType.BOOLEAN
    })
    public isVendor: boolean;
    

     //nom 
     @Column({
         type: DataType.STRING,
         allowNull: false,
     })
     public nom: string;


     //prenom
     @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public prenom: string;


    //email
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    public email: string;


    //telephone
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public telephone: string;


    //pays
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public pays: string;


    //adresse
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public adresse: string;


    //password
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    public password: string;


    //role
    @Column({
        type: DataType.ENUM,
        values: ['admin', 'client', 'vendor'],
        allowNull: false,
    })
    role: string;
}