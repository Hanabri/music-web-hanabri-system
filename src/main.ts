import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 添加CORS支持
  app.enableCors();

  // 显式获取环境变量
  const port = process.env.PORT || 3000;
  const host = '0.0.0.0';

  await app.listen(port, host, () => {
    new Logger('NestApplication').log(
      `服务已启动在 http://${host}:${port}`
    );
  });
}
bootstrap();
