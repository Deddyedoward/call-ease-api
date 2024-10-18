import { ConfigService } from "@nestjs/config"
import { DataSource } from "typeorm"

export const databaseProviders = [
    {
        provide: 'DB_SOURCE',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: configService.get<string>('database.host'),
                port: configService.get<number>('database.port'),
                username: configService.get<string>('database.username'),
                password: configService.get<string>('database.password'),
                database: configService.get<string>('database.database_name'),
                synchronize: configService.get<boolean>('databse.synchronize'),
                logging: false
            });

            return dataSource.initialize();
        }
    }
]