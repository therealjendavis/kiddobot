var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (_evt) {
   
    logger.info('ON HECKIN LINE');
});
bot.on('message', function (user, _userID, channelID, message, evt) {
    
    var alexa = [/kirby/i, /name/i, /two bros/i, /_smoke_/i, /what the fuck is up kyle/i, /wtf/i, /i love you, bitch/i, /can i get a waffle/i, /bitchboi/i, /road work ahead/i, /uwu/i, /owo/i, /rafe/i, /dab/i, /liza/i, /kimmy/i, /sam/i];
    var play = [':kirby:', "i'm kiddobot!", "chillin in a hot tub, 5 feet apart cuz they're not gay", 'wow!', 'step the **FUCK** up kyle', 'what the fuck, *richard?*', "i ain't never gonna stop lovin you, bitch.", 'can i *please* get a waffle?', 'hi, nick.', 'uh yeah, i sure HOPE it does', 'owo', 'uwu', 'gay', 'no.', ':heart:!!!!!', 'furry rights', 'hey nerd'];
    var despacito = play[((alexa.map(function (value) {
        return value.test(message);
    })).indexOf(true))];
    //above variables control the response to keywords in array 'thisis', which map to array 'sosad'
    var stacy = (message.replace(/do you like/i, 'i do not like')).replace('?', '');
    var mom = (message.replace(/do you love/i, 'i do not love')).replace('?', '');
    var gotit = (message.replace(/do you like/i, 'i like')).replace('?', '');
    var goinon = (message.replace(/do you love/i, 'i love')).replace('?', '');
    var love = [/tacos/i, /dogs/i, /cats/i, /pizza/i, /sam/i, /mae/i].map(function (value){
        return value.test(message);
    });
    var dislike = [/mispronunciations/i, /slow drivers/i, /trump/i, /laziness/i, /columbus/i, /child soldiers/i].map(function (value){
        return value.test(message);
    });
    //above variables control responses to 'do you like' and 'do you love' using multiple search&replace functions
    var road = [/bitch/i, /fuck/i, /shit/i, /badass/i, /dick/i, /dong/i, /piss/i, /thot/i, /tits/i, /cum/i, /nigga/i, /nigger/i, /cock/i, /boobies/i, /pussy/i, /cunt/i, /bastard/i, /faggot/i, / ass /i, /asshole/i, /jacking/i, /fondle/i, /squid/i, /:squid:/i];
    var work = road.map(function (value){
        return value.test(message)
    });
    var ahead = work.indexOf(true);
    //above variables control keyword deletion

    {if (/kiddobot/i.test(user) == false) {
        bot.sendMessage({
            to: '563492791918002187',
            message: 'sent by ' + user + ', message is as follows: "' + message + '"'
        })
    }}
    //above function controls logs
    {if (/kiddobot/i.test(user) == false) {
        {if ((ahead != (-1)) && ((alexa.map(function (value) {
            return value.test(message);
        })).indexOf(true)) == -1) {
            bot.deleteMessage({
                channelID: channelID,
                messageID: evt.d.id
            });
        }
        else if ((ahead != -1) && (/bot/i.test(message) == true)) {
            bot.deleteMessage({
                channelID: channelID,
                messageID: evt.d.id
            });
        }};
    }};
    //above function controls deletion
    {if (/kiddobot/i.test(user) == false) {
        {if (((/kiddo/i.test(message) == true) || (/bot/i.test(message) == true)) && (/mac/i.test(message) == false)) {
            if (ahead == -1) {
                bot.sendMessage({
                    to: channelID,
                    message: 'hello there!'
                })
            }
        }
        else if (/do you like/i.test(message) == true) {
            if (/true/i.test(dislike) == true) {
                bot.sendMessage({
                    to: channelID,
                    message: stacy + '.'
                })
            }
            else {
                bot.sendMessage({
                    to: channelID,
                    message: 'of course ' + gotit + '!'
                })
            }
        }
        else if ((/do you love/i.test(message) == true) && (/me/i.test(message) == false)) {
            if (/true/i.test(love) == true) {
                bot.sendMessage({
                    to: channelID,
                    message: 'yes, ' + goinon + '!'
                })
            }
            else {
                bot.sendMessage({
                    to: channelID,
                    message: 'no, ' + mom + '.'
                })
            }
        }    
        else if (/do you love me/i.test(message) == true) {
            if (/mac/i.test(user) == true) {
                bot.sendMessage({
                    to: channelID,
                    message: 'no. go away.'
                })
            }
            else if (/sam/i.test(user) == true) {
                bot.sendMessage({
                    to: channelID,
                    message: 'love ya sammo! :heart:'
                })
            }
            else if (/stacey/i.test(user) == true) {
                bot.sendMessage({
                    to: channelID,
                    message: 'hi mom!'
                })
            }
            else {
                bot.sendMessage({
                    to: channelID,
                    message: 'of course! :heart:'
                })
            }
        }   
        else if ((/kiddobot/.test(user) == false) && (play != (-1))) {           
            bot.sendMessage({
                to: channelID,
                message: (despacito)
            })
        }}
    }};
    //above functions control keyword response
});