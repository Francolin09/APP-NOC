import mongoose from "mongoose";


interface ConnectionOptions {
    mongoUrl: string,
    dbName: string
}



export class MongoDataBase {
    static async connect(options: ConnectionOptions){ 
      const {mongoUrl,dbName} = options; 
      
      try {
        await mongoose.connect(mongoUrl, {  
            dbName: dbName,
        });
        console.log('Mongo conectado y funcionando a la perfec ción')

      } catch (error) {

        console.log(' error con conexión a mongo');
        throw error;
      }
      
    }
}