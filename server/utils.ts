import logger from 'loglevel';

/** @ts-ignore */
function setUpCloseOnExit(server: Server) {
  async function handleClose() {
    await server
      .close()
      .then(() => {
        logger.info('Server Closed Successfully');

        process.exit();
      })
      .catch((err: Error) => {
        logger.warn('Failed to Close Server', err.stack);
      });
    process.exit();
  }

  const events = 'exit SIGINT uncaughtException SIGUSR1 SIGUSR2';
  events.split(' ').forEach((event) => {
    process.on(event, handleClose);
  });
}

export { setUpCloseOnExit };
