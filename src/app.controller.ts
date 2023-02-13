import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({
    type: String,
    description: 'Link to documentation.',
  })
  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
}
