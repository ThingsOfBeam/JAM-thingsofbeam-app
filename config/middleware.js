module.exports = ({ env }) => ({
   settings: {
     cors: {
       enabled: true,
       origin: env('CORS_ORIGIN', 'https://localhost:3000,https://www.thingsofbeam.dev').split(','),
     },
   },
 });