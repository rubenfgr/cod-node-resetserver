

// ===========================================
// Puerto
// ===========================================
// @ts-ignore
process.env.PORT = process.env.PORT || 3000;



// ===========================================
// Entorno
// ===========================================

// NODE_ENV es una variable que la establece Heroku
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========================================
// Vencimiento del Token
// ===========================================
// 60 segundos * 60 minutos * 24 horas * 30 dias
// @ts-ignore
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===========================================
// SEED de autenticación
// ===========================================

console.log(process.env.SEED);

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ===========================================
// Base de datos
// ===========================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = `mongodb://localhost:27017/cafe`;
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;