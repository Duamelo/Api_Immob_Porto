import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
//import {  ValidateInputPipe } from './core/pipes/validate.pipe';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.use(cookieParser());


    //global prefix 
    app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('ImmobPorto API description')
    .setDescription('This API is the first step to build a large system')
    .setVersion('1.0')
    .addTag('cats')
    .build();

    const options: SwaggerDocumentOptions =  {
      operationIdFactory: (
        controllerKey: string,
        methodKey: string
      ) => methodKey
    };
    
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('documentation', app, document);


  //handle all user input validation globally

  //app.useGlobalPipes(new ValidateInputPipe());

  
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
