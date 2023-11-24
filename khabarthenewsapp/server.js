import serve from 'serve';

const server = serve(__dirname + '/dist', {
  port: 8088,
});
