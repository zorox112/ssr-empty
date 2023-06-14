// Используем стандартный модуль для работы с http
const http = require('http');

// Создаем http сервер
const server = http.createServer();

const createHtml = ({url}) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>Вы перешли на страницу, которая была сгенерирована сервером.</div>
    <div>Текущий URL:</div>
    <code>${url}</code>
</body>
</html>`;

// Добавляем обработчик http-запроса на сервер
server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(createHtml({url: req.url}));
    // Завершаем обработку запроса
    res.end();
});

// Слушаем порт 5000
server.listen(5000);