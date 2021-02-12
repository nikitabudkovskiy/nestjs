import { Module } from '@nestjs/common'
import { ApplicationsController } from './applications.controller'
import { ApplicationsService } from './applications.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Application, ApplicationSchema } from './applications.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'applications', schema: ApplicationSchema }])],
  controllers: [ApplicationsController],
  providers: [ApplicationsService]
})
export class ApplicationsModule {}
