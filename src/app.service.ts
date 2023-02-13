import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return '<a href="/swagger">Документация</a>';
  }
}
3;
