import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import swagger from './common/swagger';
import { HttpExceptionFilter } from './common/utils/filters/http-exception.filter';

const envFound = config();

(async () => {
  const { PORT } = process.env;

  try {
    if (envFound.error) {
      throw new Error('.env is not found');
    }

    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    app.useGlobalFilters(new HttpExceptionFilter());
    swagger(app);

    await app.listen(PORT, () =>
      Logger.log(`🚀 Server has been started on port: ${PORT}...`),
    );
  } catch (error) {
    Logger.error(`❌ Error: \n ${error}`);
  }
})();
