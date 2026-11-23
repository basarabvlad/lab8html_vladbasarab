/* ==========================================
   ЛАБОРАТОРНА РОБОТА №7
   JAVASCRIPT
   COMPUTERZONE
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ======================================
    // ДОПОМІЖНА ФУНКЦІЯ ДЛЯ ВИВЕДЕННЯ ПОДІЙ
    // ======================================

    function writeMessage(elementId, message) {
        const output = document.getElementById(elementId);

        if (!output) {
            return;
        }

        const time = new Date().toLocaleTimeString("uk-UA");

        output.value += "[" + time + "] " + message + "\n";
        output.scrollTop = output.scrollHeight;
    }


    // ======================================
    // 1. ОБРОБКА ПОДІЙ ГОЛОВНОГО ВІКНА
    // ======================================

    const windowOutput = "window-events-output";

    function windowMessage(message) {
        writeMessage(windowOutput, message);
    }

    // onload
    window.addEventListener("load", function () {
        windowMessage("onload: сторінку повністю завантажено.");
    });

    // onbeforeunload — сучасний аналог події виходу
    window.addEventListener("beforeunload", function () {
        windowMessage("beforeunload: користувач залишає сторінку.");
    });

    // onblur
    window.addEventListener("blur", function () {
        windowMessage("onblur: вікно втратило фокус.");
    });

    // onfocus
    window.addEventListener("focus", function () {
        windowMessage("onfocus: вікно отримало фокус.");
    });

    // onerror
    window.addEventListener("error", function () {
        windowMessage("onerror: виникла помилка.");
    });

    // onbeforeprint
    window.addEventListener("beforeprint", function () {
        windowMessage("onbeforeprint: підготовка до друку.");
    });

    // onafterprint
    window.addEventListener("afterprint", function () {
        windowMessage("onafterprint: друк завершено.");
    });

    // onhashchange — сучасний аналог onhaschange
    window.addEventListener("hashchange", function () {
        windowMessage("onhaschange: змінилася адреса після символу #.");
    });

    // onmessage
    window.addEventListener("message", function () {
        windowMessage("onmessage: отримано повідомлення.");
    });

    // onoffline
    window.addEventListener("offline", function () {
        windowMessage("onoffline: браузер перейшов в автономний режим.");
    });

    // ononline
    window.addEventListener("online", function () {
        windowMessage("ononline: підключення до мережі відновлено.");
    });

    // onpagehide
    window.addEventListener("pagehide", function () {
        windowMessage("onpagehide: сторінка приховується.");
    });

    // onpageshow
    window.addEventListener("pageshow", function () {
        windowMessage("onpageshow: сторінка стала видимою.");
    });

    // onpopstate
    window.addEventListener("popstate", function () {
        windowMessage("onpopstate: змінився стан історії браузера.");
    });

    // onresize
    window.addEventListener("resize", function () {
        windowMessage("onresize: змінено розмір вікна.");
    });

    // onstorage
    window.addEventListener("storage", function () {
        windowMessage("onstorage: змінено локальне сховище в іншій вкладці.");
    });

    // onredo та onundo — відстеження команд скасування і повторення
    document.addEventListener("beforeinput", function (event) {

        if (event.inputType === "historyUndo") {
            windowMessage("onundo: виконано скасування дії.");
        }

        if (event.inputType === "historyRedo") {
            windowMessage("onredo: виконано повтор дії.");
        }

    });

    // onbeforeonload не є стандартною подією сучасного браузера.
    // Її найближчий аналог — DOMContentLoaded.
    windowMessage("onbeforeonload: документ почав оброблятися.");

    // Кнопка показу інформації
    const showWindowButton = document.getElementById("show-window-events");

    if (showWindowButton) {
        showWindowButton.addEventListener("click", function () {

            windowMessage("Поточна адреса: " + window.location.href);
            windowMessage("Браузер: " + navigator.userAgent);
            windowMessage("Платформа: " + navigator.platform);
            windowMessage("Стан мережі: " +
                (navigator.onLine ? "онлайн" : "офлайн"));

        });
    }

    // Кнопка очищення
    const clearWindowButton = document.getElementById("clear-window-events");

    if (clearWindowButton) {
        clearWindowButton.addEventListener("click", function () {
            const output = document.getElementById(windowOutput);

            if (output) {
                output.value = "";
            }
        });
    }


    // ======================================
    // 2. ПОДІЇ ТЕКСТОВИХ ЕЛЕМЕНТІВ
    // ======================================

    const textElements = document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, b, strong, i, em, .lab7-event-text"
    );

    textElements.forEach(function (element) {

        // onclick
        element.addEventListener("click", function () {
            writeMessage(
                "element-events-output",
                "onclick: натиснуто елемент " + element.tagName
            );

            element.classList.toggle("event-active");
        });

        // ondblclick
        element.addEventListener("dblclick", function () {
            writeMessage(
                "element-events-output",
                "ondblclick: подвійне натискання на " + element.tagName
            );

            element.style.color = "#48a9ff";
        });

        // onmousedown
        element.addEventListener("mousedown", function () {
            writeMessage(
                "element-events-output",
                "onmousedown: натиснуто кнопку миші на " + element.tagName
            );
        });

        // onmouseup
        element.addEventListener("mouseup", function () {
            writeMessage(
                "element-events-output",
                "onmouseup: кнопку миші відпущено на " + element.tagName
            );
        });

        // onmouseover
        element.addEventListener("mouseover", function () {
            writeMessage(
                "element-events-output",
                "onmouseover: курсор наведено на " + element.tagName
            );

            element.style.backgroundColor = "#17466b";
        });

        // onmouseout
        element.addEventListener("mouseout", function () {
            writeMessage(
                "element-events-output",
                "onmouseout: курсор залишив " + element.tagName
            );

            element.style.backgroundColor = "";
        });

        // onmousemove
        element.addEventListener("mousemove", function () {
            element.title = "Курсор рухається над елементом";
        });

        // onmousewheel — сучасний аналог wheel
        element.addEventListener("wheel", function () {
            writeMessage(
                "element-events-output",
                "onmousewheel: використано колесо миші."
            );
        });

        // ondrag
        element.addEventListener("drag", function () {
            writeMessage(
                "element-events-output",
                "ondrag: елемент перетягується."
            );
        });

        // ondragstart
        element.addEventListener("dragstart", function (event) {
            writeMessage(
                "element-events-output",
                "ondragstart: почалося перетягування."
            );

            event.dataTransfer.setData(
                "text/plain",
                element.textContent
            );
        });

        // ondragend
        element.addEventListener("dragend", function () {
            writeMessage(
                "element-events-output",
                "ondragend: перетягування завершено."
            );
        });

    });


    // Обробка подій drop-зони

    const dropZone = document.getElementById("drop-zone");

    if (dropZone) {

        // ondragenter
        dropZone.addEventListener("dragenter", function (event) {
            event.preventDefault();

            dropZone.classList.add("drag-active");

            writeMessage(
                "element-events-output",
                "ondragenter: елемент потрапив у зону перенесення."
            );
        });

        // ondragover
        dropZone.addEventListener("dragover", function (event) {
            event.preventDefault();

            writeMessage(
                "element-events-output",
                "ondragover: елемент знаходиться над зоною перенесення."
            );
        });

        // ondragleave
        dropZone.addEventListener("dragleave", function () {
            dropZone.classList.remove("drag-active");

            writeMessage(
                "element-events-output",
                "ondragleave: елемент залишив зону перенесення."
            );
        });

        // ondrop
        dropZone.addEventListener("drop", function (event) {
            event.preventDefault();

            dropZone.classList.remove("drag-active");

            const data = event.dataTransfer.getData("text/plain");

            dropZone.textContent = data
                ? "Перенесено: " + data
                : "Елемент перенесено.";

            writeMessage(
                "element-events-output",
                "ondrop: елемент успішно перенесено."
            );
        });

    }


    // onscroll
    const scrollDemo = document.getElementById("scroll-demo");

    if (scrollDemo) {
        scrollDemo.addEventListener("scroll", function () {

            writeMessage(
                "element-events-output",
                "onscroll: прокручено область. Позиція: " +
                scrollDemo.scrollTop
            );

        });
    }


    // ======================================
    // 3. ІСТОРІЯ ЗВЕРНЕНЬ ДО СТОРІНОК
    // ======================================

    const historyKey = "computerZoneVisitHistory";

    function saveVisit() {

        let history = [];

        try {
            history = JSON.parse(
                localStorage.getItem(historyKey) || "[]"
            );

            if (!Array.isArray(history)) {
                history = [];
            }

        } catch (error) {
            history = [];
        }

        const visit = {
            page: document.title,
            address: window.location.href,
            date: new Date().toLocaleString("uk-UA")
        };

        history.push(visit);

        // Зберігаємо останні 100 звернень
        if (history.length > 100) {
            history = history.slice(-100);
        }

        try {
            localStorage.setItem(
                historyKey,
                JSON.stringify(history)
            );
        } catch (error) {
            console.error("Не вдалося зберегти історію:", error);
        }

    }

    saveVisit();


    // Run Task
    const runTaskButton = document.getElementById("run-task");

    if (runTaskButton) {

        runTaskButton.addEventListener("click", function () {

            const output = document.getElementById("history-output");

            let history = [];

            try {
                history = JSON.parse(
                    localStorage.getItem(historyKey) || "[]"
                );

                if (!Array.isArray(history)) {
                    history = [];
                }

            } catch (error) {
                history = [];
            }

            if (history.length === 0) {
                output.value = "Історія звернень відсутня.";
                return;
            }

            let result = "ІСТОРІЯ ЗВЕРНЕНЬ ДО СТОРІНОК COMPUTERZONE\n\n";

            history.forEach(function (visit, index) {

                result += (index + 1) + ". ";
                result += visit.page + "\n";
                result += "Адреса: " + visit.address + "\n";
                result += "Дата: " + visit.date + "\n\n";

            });

            result += "Загальна кількість звернень: " + history.length;

            output.value = result;

        });

    }


    // Очищення історії
    const clearHistoryButton = document.getElementById("clear-history");

    if (clearHistoryButton) {

        clearHistoryButton.addEventListener("click", function () {

            localStorage.removeItem(historyKey);

            const output = document.getElementById("history-output");

            if (output) {
                output.value = "Історію звернень очищено.";
            }

        });

    }


    // ======================================
    // 4. ПОДІЇ МИШІ ДЛЯ ЗОБРАЖЕНЬ
    // ======================================

    const images = document.querySelectorAll("img");

    images.forEach(function (img, index) {

        // onclick
        img.addEventListener("click", function () {

            img.classList.toggle("image-selected");

            writeMessage(
                "image-events-output",
                "onclick: натиснуто зображення №" + (index + 1)
            );

        });

        // onmouseover
        img.addEventListener("mouseover", function () {

            writeMessage(
                "image-events-output",
                "onmouseover: курсор наведено на зображення №" + (index + 1)
            );

        });

        // onmouseout
        img.addEventListener("mouseout", function () {

            writeMessage(
                "image-events-output",
                "onmouseout: курсор залишив зображення №" + (index + 1)
            );

        });

        // onmousedown
        img.addEventListener("mousedown", function () {

            writeMessage(
                "image-events-output",
                "onmousedown: натиснуто зображення №" + (index + 1)
            );

        });

        // onmouseup
        img.addEventListener("mouseup", function () {

            writeMessage(
                "image-events-output",
                "onmouseup: кнопку миші відпущено на зображенні №" + (index + 1)
            );

        });

    });


    // ======================================
    // 5. РЕГУЛЯРНІ ВИРАЗИ
    // ======================================

    const regexForm = document.getElementById("regex-form");

    if (regexForm) {

        regexForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const input = document.getElementById("input-text");
            const result = document.getElementById("regex-result");

            const text = input.value;

            // Підрахунок слів
            const words = text.match(/[\p{L}\p{M}]+/gu) || [];

            // Слова, які починаються з е та закінчуються а
            const matchingWords =
                text.match(/(?:^|[^\p{L}\p{M}])е[\p{L}\p{M}]*а(?=$|[^\p{L}\p{M}])/giu) || [];

            // Підрахунок цифр
            const digits = text.match(/\d/g) || [];

            // Підрахунок цілих чисел
            // Десяткові числа, наприклад 3.5, не враховуються
            const integers =
                text.match(/(?<![\p{L}\p{M}\d.,])[-+]?\d+(?![\p{L}\p{M}\d.,])/gu) || [];

            const foundWords = matchingWords.map(function (word) {
                return word.trim();
            });

            result.textContent = "";

            const title = document.createElement("h3");
            title.textContent = "Результати аналізу тексту";
            result.appendChild(title);

            const wordCount = document.createElement("p");
            wordCount.textContent = "Кількість слів: " + words.length;
            result.appendChild(wordCount);

            const matchingCount = document.createElement("p");
            matchingCount.textContent =
                "Кількість слів на «е» та «а»: " + foundWords.length;
            result.appendChild(matchingCount);

            const matchingList = document.createElement("p");
            matchingList.textContent =
                "Знайдені слова: " +
                (foundWords.length ? foundWords.join(", ") : "не знайдено");
            result.appendChild(matchingList);

            const digitCount = document.createElement("p");
            digitCount.textContent = "Кількість цифр: " + digits.length;
            result.appendChild(digitCount);

            const integerCount = document.createElement("p");
            integerCount.textContent =
                "Кількість цілих чисел: " + integers.length;
            result.appendChild(integerCount);

            const integerList = document.createElement("p");
            integerList.textContent =
                "Знайдені цілі числа: " +
                (integers.length ? integers.join(", ") : "не знайдено");
            result.appendChild(integerList);

        });

    }


    // ======================================
    // 6. ОБРОБКА ОДНОВИМІРНОГО МАСИВУ
    // ======================================

    const arrayForm = document.getElementById("array-form");

    if (arrayForm) {

        arrayForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const input = document.getElementById("array-input");
            const output = document.getElementById("array-output");

            const values = input.value.trim().split(/\s+/);

            if (!input.value.trim()) {
                output.value = "Помилка: введи елементи масиву.";
                return;
            }

            const array = values.map(Number);

            // Перевірка коректності введення
            if (array.some(function (value) {
                return !Number.isFinite(value);
            })) {
                output.value =
                    "Помилка: масив повинен містити лише числові елементи.";
                return;
            }

            // Пошук найбільшого від'ємного елемента
            let maxNegative = null;
            let maxIndex = -1;

            for (let i = 0; i < array.length; i++) {

                if (array[i] < 0) {

                    if (maxNegative === null || array[i] > maxNegative) {
                        maxNegative = array[i];
                        maxIndex = i;
                    }

                }

            }

            let result = "ОБРОБКА МАСИВУ A\n\n";

            result += "Масив A: [" + array.join(", ") + "]\n";
            result += "Розмір масиву N: " + array.length + "\n\n";

            if (maxNegative === null) {

                result += "Від'ємних елементів у масиві немає.";

            } else {

                result += "Найбільший від'ємний елемент: " + maxNegative + "\n";
                result += "Індекс елемента: " + maxIndex + "\n";
                result += "Позиція елемента: " + (maxIndex + 1);

            }

            output.value = result;

        });

    }

});