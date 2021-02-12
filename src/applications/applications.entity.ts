import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm'

@Entity()
export class Applications {
  @ObjectIdColumn()
  _id: ObjectID
  
  @Column()
  id: number

  @Column()
  stateChangedDateTime: number
  
  @Column()
  nameApplication: string

}