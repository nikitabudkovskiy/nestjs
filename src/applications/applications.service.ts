import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Db, ObjectID } from 'mongodb'
import { Model } from 'mongoose'
import { ApplicationDocument } from './applications.schema'

@Injectable()
export class ApplicationsService {

  constructor(@InjectModel('applications') private db: Model<ApplicationDocument>) {}

  stateApplication = async (id: number) => {
    console.log('id', id)
    //@ts-ignore
    console.log(this.db.findById(1))
      return await this.db.find()
  }
}
