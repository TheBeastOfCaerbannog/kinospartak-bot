module.exports = {
  TOKEN: process.env.TOKEN,
  PORT: process.env.PORT || 3000,
  BOT_URL: process.env.BOT_URL,
  CHANNEL: process.env.CHANNEL,
  MEMCACHEDCLOUD_SERVERS: process.env.MEMCACHEDCLOUD_SERVERS,
  MEMCACHEDCLOUD_USERNAME: process.env.MEMCACHEDCLOUD_USERNAME,
  MEMCACHEDCLOUD_PASSWORD: process.env.MEMCACHEDCLOUD_PASSWORD,
  ERROR_MSG: process.env.ERROR_MSG || 'Что-то пошло не так! Пожалуйста, попробуйте позже.'
};
