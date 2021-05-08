import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Template NestJS - API')
    .setDescription('This API is a template for nest js api')
    .setVersion('2.1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  const port = process.env.API_PORT ? process.env.API_PORT : 3000;
  await app.listen(port);
  console.info(`Listenning to port ${port} !`);
}
bootstrap();
