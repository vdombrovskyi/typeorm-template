export const database: any = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'typeorm',
  username: 'typeorm',
  password: 'plaintextpassword',
  logging: false,
  synchronize: false,
  entities: [`./models/**/*.ts`],
  migrations: ['./migrations/**/*.ts'],
  cli: {
    migrationsDir: './migrations',
  },
  ssl: false,
};
