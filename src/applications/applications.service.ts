import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { getManager } from "typeorm"
import { Model } from 'mongoose'
import { Application } from './applications.model'

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel('Application') private readonly applicationsRepository:Model<any>){
  }

  stateApplication = async (id: number) => {
    return await this.applicationsRepository.findOne({ id })
    //@ts-ignore
    // console.log(await this.applicationsRepository.find().exec())
    // //@ts-ignore
    // console.log(this.db.findById(1))
    //   return await this.db.find()
  }
}
