import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IntegerDataType } from 'sequelize/types';
import { User } from '../users/user.entity';

@Table
export class Immobilier extends Model<Immobilier> {
 

     //id
     @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
     public id: IntegerDataType;



    //type
    @Column({
        type: DataType.ENUM,
        values: ['studio', 'chambre', 'maison']
    })
    type: string;



     //nombreDeChambre
     @Column({
        type: DataType.INTEGER
    })
    public nombreDeChambre: IntegerDataType;


    //nombreDeSalon
    @Column({
        type: DataType.INTEGER
    })
    public nombreDeSalon:  IntegerDataType;


    //cuisine
    @Column({
        type: DataType.BOOLEAN
    })
    public cuisine: boolean;


    //sanitaire
    @Column({
        type: DataType.BOOLEAN
    })
    public sanitaire: boolean;


    //douche
    @Column({
        type: DataType.BOOLEAN
    })
    public  douche: boolean;


    //surface
    @Column({
        type: DataType.INTEGER
    })
    public surface: IntegerDataType;




    //description
    @Column({
        type: DataType.STRING
    })
    public description: string;


    //adresse
    @Column({
        type: DataType.STRING
    })
    public adresse: string;


      //dateDeDisponibilite
      @Column({
        type: DataType.STRING
    })
    public dateDeDisponibilite: string;


      //etatDuBien
      @Column({
        type: DataType.STRING
    })
    public etatDuBien: string;


       //etage
       @Column({
        type: DataType.INTEGER
    })
    public etage: IntegerDataType;




    /////////////////////////////////////////////////////


    //date_offre
    @Column({
        type: DataType.STRING
    })
    public date_offre: string;


    //type_offre
    @Column({
    type: DataType.ENUM,
    values: ['location', 'vente']
    })
    public type_offre: string;


    //titre_offre
    @Column({
    type: DataType.STRING
    })
    public titre_offre: string;


    //description_offre
    @Column({
    type: DataType.STRING
    })
    public description_offre: string;


    //options
    @Column({
    type: DataType.STRING
    })
    public options: string;





    //////////////////////////////////////////////////////


    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    vendorId: IntegerDataType;

    @BelongsTo(() => User)
    user: User;
  
}

