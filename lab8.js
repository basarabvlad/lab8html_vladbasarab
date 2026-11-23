
"use strict";

// ==========================================
// ЛАБОРАТОРНА РОБОТА №8
// РАСТРОВА ГРАФІКА CANVAS
// ВАРІАНТ №2
// ==========================================

const canvas = document.getElementById("drawingCanvas");
const context = canvas.getContext("2d");

const startButton = document.getElementById("startAnimation");
const addButton = document.getElementById("addFigure");
const resetButton = document.getElementById("resetCanvas");
const status = document.getElementById("canvas-status");

let animationProgress = 0;
let animationFrame = null;
let extraFigures = [];

const animationDuration = 1800;

// ==========================================
// 1. ОТРИМАННЯ КОНТЕКСТУ CANVAS
// ==========================================

if (!context) {
    status.textContent =
        "Ваш браузер не підтримує двовимірний Canvas.";

    throw new Error("Canvas 2D не підтримується.");
}

// ==========================================
// 2. ПОБУДОВА КООРДИНАТНИХ ОСЕЙ
// ==========================================

function drawCoordinateSystem() {

    context.beginPath();

    const xc = 150;
    const yc = 350;

    context.save();

    context.beginPath();

    context.strokeStyle = "#000000";
    context.fillStyle = "#000000";
    context.lineWidth = 2;

    // Вісь X

    context.moveTo(50, yc);
    context.lineTo(510, yc);

    // Стрілка X

    context.moveTo(510, yc);
    context.lineTo(498, yc - 6);

    context.moveTo(510, yc);
    context.lineTo(498, yc + 6);

    // Вісь Y

    context.moveTo(xc, 500);
    context.lineTo(xc, 150);

    // Стрілка Y

    context.moveTo(xc, 150);
    context.lineTo(xc - 6, 162);

    context.moveTo(xc, 150);
    context.lineTo(xc + 6, 162);

    context.stroke();

    // Поділки осі X

    context.lineWidth = 1.5;

    for (let i = 1; i <= 5; i++) {

        const x = xc + i * 50;

        context.beginPath();
        context.moveTo(x, yc - 7);
        context.lineTo(x, yc + 7);
        context.stroke();

    }

    // Поділки осі Y

    for (let i = -2; i <= 3; i++) {

        if (i === 0) continue;

        const y = yc - i * 50;

        context.beginPath();
        context.moveTo(xc - 7, y);
        context.lineTo(xc + 7, y);
        context.stroke();

    }

    // Числа на осі X

    context.font = "14px Arial";
    context.textAlign = "center";
    context.textBaseline = "top";

    for (let i = 0; i <= 5; i++) {

        context.fillText(
            i.toString(),
            xc + i * 50,
            yc + 10
        );

    }

    // Числа на осі Y

    context.textAlign = "right";
    context.textBaseline = "middle";

    for (let i = -2; i <= 3; i++) {

        if (i === 0) continue;

        context.fillText(
            i.toString(),
            xc - 12,
            yc - i * 50
        );

    }

    // Позначення координатних осей

    context.font = "bold 18px Arial";
    context.textAlign = "left";

    context.fillText("X", 520, yc + 5);
    context.fillText("Y", xc + 12, 145);

    context.restore();

}

// ==========================================
// 3. ПОБУДОВА КОЛА
// ==========================================

function drawCircle(x, y, radius) {

    context.save();

    context.beginPath();

    context.arc(
        x,
        y,
        radius,
        0,
        2 * Math.PI
    );

    context.fillStyle = "#0000ff";
    context.strokeStyle = "#000000";
    context.lineWidth = 1.5;

    context.fill();
    context.stroke();

    context.restore();

}

// ==========================================
// 4. ПОБУДОВА КВАДРАТА
// ==========================================

function drawSquare(x, y) {

    context.save();

    context.beginPath();

    context.rect(
        x,
        y,
        50,
        50
    );

    context.fillStyle = "#0000ff";
    context.strokeStyle = "#000000";
    context.lineWidth = 1.5;

    context.fill();
    context.stroke();

    context.restore();

}

// ==========================================
// 5. ПОБУДОВА ЕЛІПСА
// ==========================================

function drawEllipse(x, y, radiusX, radiusY) {

    context.save();

    context.beginPath();

    context.ellipse(
        x,
        y,
        radiusX,
        radiusY,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "#0000ff";
    context.strokeStyle = "#000000";
    context.lineWidth = 1.5;

    context.fill();
    context.stroke();

    context.restore();

}

// ==========================================
// 6. ПОБУДОВА ФІГУР ВАРІАНТА №2
// ==========================================

function drawFigures(progress) {

    // Два верхні кола

    drawCircle(225, 225, 24);

    // Друге коло переміщується

    drawCircle(
        375 + 90 * progress,
        225 - 40 * progress,
        24
    );

    // Лівий верхній квадрат

    drawSquare(150, 250);

    // Правий верхній квадрат

    drawSquare(400, 250);

    // Центральний еліпс
    // Виконується переміщення, обертання та масштабування

    context.save();

    context.translate(
        300 + 35 * progress,
        300 + 15 * progress
    );

    context.rotate(
        progress * Math.PI / 4
    );

    context.scale(
        1 + 0.25 * progress,
        1 + 0.25 * progress
    );

    context.beginPath();

    context.ellipse(
        0,
        0,
        100,
        50,
        0,
        0,
        2 * Math.PI
    );

    context.fillStyle = "#0000ff";
    context.strokeStyle = "#000000";
    context.lineWidth = 1.5;

    context.fill();
    context.stroke();

    context.restore();

    // Нижній видовжений еліпс

    drawEllipse(
        300,
        375,
        75,
        25
    );

    // Лівий нижній квадрат

    drawSquare(200, 400);

    // Правий нижній квадрат
    // Переміщення та обертання

    context.save();

    context.translate(
        375 + 55 * progress,
        425 + 20 * progress
    );

    context.rotate(
        progress * Math.PI / 3
    );

    context.beginPath();

    context.rect(
        -25,
        -25,
        50,
        50
    );

    context.fillStyle = "#0000ff";
    context.strokeStyle = "#000000";
    context.lineWidth = 1.5;

    context.fill();
    context.stroke();

    context.restore();

}

// ==========================================
// 7. ДОДАВАННЯ ФІГУР З ГРАДІЄНТОМ
// ==========================================

function drawDiamond(x, y, size) {

    context.save();

    context.beginPath();

    context.moveTo(x, y - size);
    context.lineTo(x + size, y);
    context.lineTo(x, y + size);
    context.lineTo(x - size, y);

    context.closePath();

    const gradient = context.createLinearGradient(
        x - size,
        y,
        x + size,
        y
    );

    gradient.addColorStop(0, "yellow");
    gradient.addColorStop(1, "blue");

    context.fillStyle = gradient;
    context.strokeStyle = "orange";
    context.lineWidth = 2;

    context.fill();
    context.stroke();

    context.restore();

}

// ==========================================
// 8. ВІДОБРАЖЕННЯ ДОДАНИХ ФІГУР
// ==========================================

function drawExtraFigures() {

    extraFigures.forEach(function (figure) {

        drawDiamond(
            figure.x,
            figure.y,
            figure.size
        );

    });

}

// ==========================================
// 9. ОНОВЛЕННЯ ЗОБРАЖЕННЯ
// ==========================================

function drawScene() {

    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Білий фон

    context.fillStyle = "#ffffff";

    context.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // Геометричні фігури варіанта №2

    drawFigures(animationProgress);

    // Координатні осі поверх фігур

    drawCoordinateSystem();

    // Додаткові фігури

    drawExtraFigures();

}

// ==========================================
// 10. АНІМАЦІЯ ГЕОМЕТРИЧНИХ ФІГУР
// ==========================================

function animate(timestamp) {

    if (animationStartTime === null) {
        animationStartTime = timestamp;
    }

    const elapsed = timestamp - animationStartTime;

    let progress = Math.min(
        elapsed / animationDuration,
        1
    );

    // Плавна зміна швидкості

    animationProgress =
        progress * progress * (3 - 2 * progress);

    drawScene();

    if (progress < 1) {

        animationFrame =
            requestAnimationFrame(animate);

    } else {

        animationFrame = null;

        status.textContent =
            "Трансформацію завершено! Фігури переміщено та змінено.";

    }

}

let animationStartTime = null;

// ==========================================
// 11. ЗАПУСК АНІМАЦІЇ
// ==========================================

function startAnimation() {

    if (animationFrame !== null) {
        return;
    }

    animationProgress = 0;
    animationStartTime = null;

    status.textContent =
        "Виконується переміщення та трансформація фігур...";

    animationFrame =
        requestAnimationFrame(animate);

}

// ==========================================
// 12. ДОДАВАННЯ НОВОЇ ФІГУРИ
// ==========================================

function addFigure(x, y) {

    extraFigures.push({

        x: x,
        y: y,
        size: 25

    });

    drawScene();

    status.textContent =
        "Нову геометричну фігуру успішно додано.";

}

// ==========================================
// 13. ОБРОБКА НАТИСКАННЯ МИШІ НА CANVAS
// ==========================================

canvas.addEventListener("mousedown", function (event) {

    const rect = canvas.getBoundingClientRect();

    const x =
        (event.clientX - rect.left) *
        (canvas.width / rect.width);

    const y =
        (event.clientY - rect.top) *
        (canvas.height / rect.height);

    addFigure(x, y);

});

// ==========================================
// 14. ОБРОБНИКИ КНОПОК
// ==========================================

startButton.addEventListener(
    "click",
    startAnimation
);

addButton.addEventListener(
    "click",
    function () {

        const offset = extraFigures.length * 12;

        addFigure(
            550 + offset,
            120 + offset
        );

    }
);

// ==========================================
// 15. ВІДНОВЛЕННЯ ПОЧАТКОВОГО ЗОБРАЖЕННЯ
// ==========================================

resetButton.addEventListener(
    "click",
    function () {

        if (animationFrame !== null) {

            cancelAnimationFrame(animationFrame);

        }

        animationFrame = null;
        animationStartTime = null;

        animationProgress = 0;

        extraFigures = [];

        drawScene();

        status.textContent =
            "Початкове зображення відновлено.";

    }
);

// ==========================================
// 16. ПОЧАТКОВЕ МАЛЮВАННЯ
// ==========================================

drawScene();
