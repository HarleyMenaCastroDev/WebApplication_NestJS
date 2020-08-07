import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service'
import { config } from './config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const appService = new AppService();
  const prefix = appService.getEnv(config.PREFIX);
  const port = appService.getEnv(config.PORT);

  app.setGlobalPrefix(prefix); // Prefijo de ruta
  await app.listen(port); // Puerto
}
bootstrap();