import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用 process.env.PORT 获取端口号，默认值为 3000
  const port = process.env.PORT || 3000;
  // 监听所有网络接口
  await app.listen(port, '0.0.0.0');
}
bootstrap();
