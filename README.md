[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](LICENSE)

A Telegram bot which provides interaction with kinospartak.ru.

Available commands:
- /today - movie schedule for today
- /tomorrow - movie schedule for tomorrow
- /news - news ¯\\_(ツ)_/¯

Bot updates channel with new movies then they posted at http://kinospartak.ru/billboard/schedule/ and news from http://kinospartak.ru/event/
Memcached required for saving old schedule and news offset

## Deploy on heroku

1. Create a new heroku app.
2. Select GitHub as deployment method and connect it to this or to your repository.
3. Create a new bot account with [BotFather](https://telegram.me/BotFather).
4. Go to your heroku app settings page and create the following config variables:
 - TOKEN: the token you received from the BotFather.
 - BOT_URL: your heroku app url *https://your-heroku-app-name.herokuapp.com*
 - CHANNEL: name of your channel to push updates. "@" symbol should be included (*@channelname*)
5. Create a new Memcached cloud instance: ```heroku addons:create memcachedcloud:30``` (or manually [here](https://elements.heroku.com/addons/memcachedcloud))
6. Add a new Heroku Scheduler add-on: ```heroku addons:create scheduler:standard``` (or manually [here](https://elements.heroku.com/addons/scheduler))
7. Open scheduler and add task to run ```npm run update```
