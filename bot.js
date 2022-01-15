const dotenv = require("dotenv");
dotenv.config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

// Comandos por defecto
bot.start((ctx) => {
  ctx.reply(`Bienvenido ${ctx.from.first_name}`);
});
bot.help((ctx) => {
  ctx.reply("Help!!!");
});
bot.settings((ctx) => {
  ctx.reply("Settings");
});
bot.mention("BotFather", (ctx) => {
  ctx.reply("Parece que mencionaste alguien");
});
bot.phone("+52 123 456-7890", (ctx) => {
  ctx.reply("Este es un numero de telefono");
});
bot.hashtag("programming", (ctx) => {
  ctx.reply("Python o JavaScript?");
});

// Comando personalizado
bot.command(["mycommand", "MYCOMMAND", "Mycommand", "test"], (ctx) => {
  ctx.reply("My custom command!");
});

// Escucha X palabra
bot.hears("computer", (ctx) => {
  ctx.reply("HEY, acabas de decir computer");
});

/* Escucha todo
bot.on("text", ctx => {
    ctx.reply("Are you writing?")
}) 
*/
bot.on("sticker", (ctx) => {
  ctx.reply("Oh!, Te gustan los Stickers");
});

bot.launch();
