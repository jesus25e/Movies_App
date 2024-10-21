import pg from 'pg';
const {Client}= pg;

const config={
    user:'gym_app_ss2m_user',
    host:'dpg-cs66sco8fa8c73atnb80-a.oregon-postgres.render.com',
    database:'gym_app_ss2m',
    password:'5pzp9BZKE5gOYJvl5nI8ipbbFeRMhJTc',
    port:5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar(params) {
    const cliente= new Client(config)
    //pruebas
    try{
        await cliente.connect()
        console.log("Conectado")
    }catch(error){
        console.log(error)
    }
}