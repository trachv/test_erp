import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "PROJECT_NUM_T",
})
export class Project extends Model {
  @Column({
    type: DataType.INTEGER,
  })
  DAY_ID!: number;

  @Column({
    type: DataType.STRING(100),
  })
  OPERATION_DATE!: string;

  @Column({
    type: DataType.STRING(100),
  })
  ID_DEP_CLIENT!: string;

  @Column({
    type: DataType.STRING(100),
  })
  ID_PROJECT!: string;
}
