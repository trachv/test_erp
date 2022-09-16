import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "CLIENT_T",
})
export class Client extends Model {
  @Column({
    type: DataType.STRING(100),
  })
  ID_DEP_CLIENT!: string;

  @Column({
    type: DataType.STRING(100),
  })
  NAME_CLIENT!: string;
}
