// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost/G102_Student_DATABASE
    }
  },

  production: {
    client: 'pg',
    connection: {
      connection: process.env.DATABASE_URL
    }
  }

};
