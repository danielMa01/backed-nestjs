import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName:'signup',
    
})
export class SignupModel extends Model {

    @Column
      username: string;
    @Column
      password: string;

}
