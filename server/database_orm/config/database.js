module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    database: 'postgres',
    define: {
        timestamps: true, // created_at update_at
        underscored: true,
    },
};