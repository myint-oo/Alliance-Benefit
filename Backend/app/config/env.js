const env = {
    database: 'marter_hrm',
    username: 'root',
    password: '%mediweb',

    // password: 'root',
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    remote_url: 'http://192.168.43.59/marter_hrm/'
}

module.exports = env;