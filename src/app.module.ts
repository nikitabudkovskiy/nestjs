import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { ApplicationsModule } from './applications/applications.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { applicationSchema } from './applications/applications.schema'
// import { MongooseModule } from '@nestjs/mongoose'

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
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
