import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { ApplicationsModule } from './applications/applications.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@serverapplication.3azy9.mongodb.net/chat?authSource=admin&replicaSet=atlas-ef8dpp-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    ApplicationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
