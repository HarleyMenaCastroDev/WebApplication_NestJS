import * as fs from 'fs';
import { parse } from 'dotenv';
import { config } from './config';

export class AppService {
  private readonly envConfig: {
    [key: string]: string
  };

  constructor() {
    // Constante de desarrollo
    const isDevelopmentEnv = process.env.NODE_ENV !== "producction";
    // Comprueba si estamos en desarrollo
    if (isDevelopmentEnv) {
      const envFilePath = __dirname + '/../.env'; // Ruta del archivo de configuracion
      console.log(envFilePath);

      const existPath = fs.existsSync(envFilePath); // Booleano si existe el envFilePath
      // Si existPath es falso
      if (!existPath) {
        console.log('.env file does not exist');
        process.exit(0);
      }
      // Carga variables de entorno al envConfig
      this.envConfig = parse(fs.readFileSync(envFilePath));
    } else {
      // Cargamos la congiruracion para produccion
      this.envConfig = {
        PORT: process.env.PORT,
      }
    }

  }

  getEnv(key: string): string {
    return this.envConfig[key];
  }

  get(key: string) {
    return config[key];
  }
}
