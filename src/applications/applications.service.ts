import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { Applications } from './applications.entity'

@Injectable()
export class ApplicationsService {

  constructor(
    @InjectRepository(Applications)
    private readonly applicationsRepository: MongoRepository<Applications>,
  ) {}

  stateApplication = async (id: number) => {
    console.log('id', id)
    console.log(await this.applicationsRepository.find())
    // //@ts-ignore
    // console.log(this.db.findById(1))
    //   return await this.db.find()
  }
}
