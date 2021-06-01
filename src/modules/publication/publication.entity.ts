import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { IntegerDataType } from "sequelize/types";
import { User } from "../users/user.entity";



@Table
export class Publication extends Model<Publication> {



     //id
     @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
     public id: number;




     //titre
     @Column({
        type: DataType.STRING
    })
    public titre: string;


    //description
    @Column({
        type: DataType.STRING
    })
    public description:  string;


    //date_publication
    @Column({
        type: DataType.STRING
    })
    public date_pub: string;



    //type_publication
    @Column({
        type: DataType.STRING
    })
    public type_pub:  string;


    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    clientId: number;

    @BelongsTo(() => User)
    user: User;


}