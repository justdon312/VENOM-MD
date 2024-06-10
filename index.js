const bot = require(__dirname + '/lib/amd')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Starting wasi ${VERSION}`)
  try {
    await bot.init()
    //bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
/**

▍▌▌▉▏▎▌▉▐▏▍▌▌▉▏▎▌▉▐▏
     𝐕𝐄𝐍𝐎𝐌-𝐌𝐃
                                                      

                                                      
**/
