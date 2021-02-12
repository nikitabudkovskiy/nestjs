import { Controller, Get, Param } from '@nestjs/common'
import { ApplicationsService } from './applications.service'

@Controller('applications')
export class ApplicationsController {
  constructor(private applicationsService: ApplicationsService) {}
  
  @Get('/stateApplication/:id')
  stateApplication(@Param('id') id): Promise<any> {
    return this.applicationsService.stateApplication(id)
  }    

}
