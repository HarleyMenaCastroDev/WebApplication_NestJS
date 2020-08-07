export const config = {
    PREFIX: "PREFIX",
    PORT: "PORT",
    HOST: 'HOST',
    USERNAME: 'USERNAME',
    PASSWORD: '',
    DATABASE: 'DATABASE',

    sqlConection: {
        ssl: true,
        type: 'mysql',// type database  
        host: 'localhost',//server  database
        port: '3306', // port the database
        username: 'root', //user database
        password: '',
        database: 'test',
        entities: "[__dirname + '/**/*.entity{.ts,.js}']",
        migrations: "[__dirname + '/migrations/*{.ts,.js}']",
        synchronize: 'true'
    }
}