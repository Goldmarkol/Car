// Создаем функцию-конструктор
let Car = function (x, y) {
  this.x = x;
  this.y = y;
};

// Добавление к прототипу нового метода draw
// Draw станет частью всех объектов созданных конструктором Car
Car.prototype.draw = function () {
  let policeCarHtml =
    '<img src="https://images.vexels.com/media/users/3/206752/isolated/lists/5c95192ff3d5ebf9186cef031176a488-police-car-truck.png">';

  //Преобразование HTML в jQuery
  // carElement - jQuery-элемент с инфой о теге img
  this.carElement = $(policeCarHtml);

  // Задаем координаты изображению
  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y,
  });

  $("body").append(this.carElement);
};

Car.prototype.moveRight = function (speed) {
  this.x += speed;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveLeft = function (speed) {
  this.x -= speed;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveTop = function (speed) {
  this.y -= speed;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveDown = function (speed) {
  this.y += speed;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

// Используется конструктор для создания двух объектов
let tesla = new Car(20, 20);
let nissan = new Car(100, 200);

setInterval(() => {
  nissan.moveRight(Math.random() * 5);
  tesla.moveRight(Math.random() * 5);
}, 40);

tesla.draw();
nissan.draw();
