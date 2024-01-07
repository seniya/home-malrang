import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeormConfig } from './configs/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // 프로젝트 루트 디렉터리에서 해당 파일 이름의 .env 파일을 호출 (dev, prod 등)
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    /*
  TypeOrmModule 안에 imports와 inject를 사용하여 ConfigModule, ConfigService를 추가합니다.
  그리고 useFactory로 설정을 반환한다. useFactory는 동적으로 모듈을 만들 때 사용됩니다.
*/
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: TypeormConfig,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
