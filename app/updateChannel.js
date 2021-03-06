'use strict'

const TelegramBot = require('node-telegram-bot-api');

const config = require('../config');
const utils = require('./utils');
const Kinospartak = require('./Kinospartak/Kinospartak');

const bot = new TelegramBot(config.TOKEN);

const kinospartak = new Kinospartak();

/**
 * updateSchedule - update schedule and push updates to Telegram channel
 *
 * @return {Promise}
 */
function updateSchedule() {
  return kinospartak.getChanges()
    .then(changes =>
      changes.length
        ? utils.formatSchedule(changes)
        : undefined)
    .then(messages => 
      messages
        ? utils.sendInOrder(bot, config.CHANNEL, messages)
        : undefined)
    .then(() => kinospartak.commitChanges())
};

/**
 * updateNews - update news and push updates to Telegram channel
 *
 * @return {Promise}
 */
function updateNews() {
  return kinospartak.getLatestNews()
    .then(news =>
      news.length
        ? utils.formatNews(news)
        : undefined)
    .then(messages => 
      messages
        ? utils.sendInOrder(bot, config.CHANNEL, messages)
        : undefined)
    .then(() => kinospartak.setNewsOffset(new Date().toString()))
};

function update() {
  return updateSchedule()
    .then(updateNews)
    .then(kinospartak.closeConnection)
    .catch((err) => {
      setTimeout(() => {
          update();
      }, 1000 * 60 * 5);
    })
}

update();