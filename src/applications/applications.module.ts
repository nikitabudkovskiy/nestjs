import { forwardRef, Module } from '@nestjs/common'
import { ApplicationsController } from './applications.controller'
import { ApplicationsService } from './applications.service'
import { MongooseModule } from '@nestjs/mongoose'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { applicationSchema } from './applications.schema'
// import { Application } from './applications.schema'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: 'Application',
        schema: applicationSchema,
        collection: 'stateApplication',
        
      },
    ],'applications'),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@serverapplication.3azy9.mongodb.net/applications?retryWrites=true&w=majority`,
      {
        connectionName: 'applications'
      }
    ),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@serverapplication.3azy9.mongodb.net/chat?retryWrites=true&w=majority`,
      {
        connectionName: 'chat'
      }
    ),
    ApplicationsModule,
  ],
  controllers: [ApplicationsController],
  providers: [ApplicationsService]
})
export class ApplicationsModule {}
