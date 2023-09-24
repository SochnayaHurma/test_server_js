// Мы подключаем установленый пакет express
const express = require("express")

const static = '/home/durachok/Документы/p/javascript/backend/002_dshka/static'
const home = '/home/durachok/Документы/p/javascript/backend/002_dshka/public/index.html';
const about = '/home/durachok/Документы/p/javascript/backend/002_dshka/public/about.html'

// Делаем экземпляр класса express
const app = express()
app.use(express.static(static))
// Задаем переменную с портом, который будем слушать
const PORT = 3000

// регистрируем маршрут http://127.0.0.1:3000/
app.get("/", function(request, response){
    response.sendFile(home);
})

// регистрируем маршрут http://127.0.0.1:3000/about
app.get("/about", function(request, response){
    response.sendFile(about);
})

// Включаем сервер http://127.0.0.1:3000/
app.listen(PORT, function() {
    console.log("Сервер включился удачно");
})

