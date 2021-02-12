import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ApplicationDocument = Application & Document

@Schema()
export class Application {
  @Prop()
  id: number

  @Prop()
  isAvailable: boolean

  @Prop()
  nameApplication: string

  @Prop()
  stateChangedDateTime: number
}

export const ApplicationSchema = SchemaFactory.createForClass(Application)
