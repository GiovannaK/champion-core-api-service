import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { graphqlConfig } from 'src/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const username = configService.get('DB_USER');
        const password = configService.get('DB_PASS');
        const database = configService.get('DB_NAME');
        const host = configService.get('DB_HOST');

        return {
          uri: `mongodb://${username}:${password}@${host}`,
          dbName: database,
        };
      },
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot(graphqlConfig),
  ],
})
export class CoreModule {}
