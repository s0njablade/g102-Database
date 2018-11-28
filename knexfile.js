// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/G102_STUDENT_DATABASE'
    
  },

  production: {
    client: 'pg',
    connection: {
      connection: process.env.DATABASE_URL
    }
  }

};
