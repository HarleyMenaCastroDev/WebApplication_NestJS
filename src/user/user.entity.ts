import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({
    type: 'varchar',
    length: 25
  })
  userName: string;

  @Column({
    type: 'varchar',
    length: 25
  })
  userSureName: string;

  @Column({
    type: 'varchar',
    unique: true,
    length: 25,
    nullable: false
  })
  userMail: string;

  @Column({
    type: 'varchar',
    length: 8,
    nullable: false
  })
  userBirthDay: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: false
  })
  userTelePhone: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: false
  })
  userCreationDate: string;

}
