// Файл управления серверной частью сервера

// Подгружаем все JS модули сервера
require("./commands/cmd_admin");
require("./extensions/discord");

// Вызываем евент который в твой ДИСКОРД СТАТУС отправит инфу о сервере на котором ты играешь
// https://wiki.rage.mp/index.php?title=Getting_Started_with_Client-side  <-- Тут можно почитать
mp.events.call('setDiscordStatus', 'Playing on Freeroam', 'Playing as Ronald McDonald');