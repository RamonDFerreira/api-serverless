// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Handler, Context, Callback, APIGatewayProxyEvent } from 'aws-lambda';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import serverless from 'serverless-http';

let server: Handler;

async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );

  const config = new DocumentBuilder()
    .setTitle('API de Agendamentos')
    .setDescription('API para agendamento de consultas médicas')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.init();

  return serverless(expressApp);
}

// Exporta o handler para que o Serverless possa encontrá-lo
export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
