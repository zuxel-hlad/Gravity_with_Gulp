/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener("DOMContentLoaded", () => {
  /* Tabs */
  const tabs = document.querySelectorAll(".tabheader__item "),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");
  /* сделать табы и их содержимое не активными  */

  const hideTabContent = () => {
    tabsContent.forEach(item => item.style.display = "none");
    tabs.forEach(item => item.classList.remove("tabheader__item_active"));
  };
  /* сделать табы и их содержимое активными  */


  const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  };

  hideTabContent();
  showTabContent();
  /*
  по нажатию на таб, сделать его активным и показать содержимое */

  tabsParent.addEventListener("click", e => {
    const target = e.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  /* Timer */

  const deadline = "2021-01-01";
  /* оРасчет временных промежутков */

  const getTimeRemaining = endtime => {
    /*  в переменную t получаем разницу между датами */
    const t = Date.parse(endtime) - Date.parse(new Date()),

    /* получаем количество дней до дедлайна */
    days = Math.floor(t / (1000 * 60 * 60 * 24)),

    /* получаем количество часов до дедлайна */
    hours = Math.floor(t / (1000 * 60 * 60) % 24),

    /* получаем количество минут до дедлайна */
    minutes = Math.floor(t / 1000 / 60 % 60),

    /* получаем количество сукунд до дедлайна */
    seconds = Math.floor(t / 1000 % 60);
    /* возвращаем наружу данные вычислений */

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };
  /*  если дата и время меньше 10 то вписываем впереди 0 */


  const getZero = num => {
    /* проверяем какое пришло число */

    /*  если число не двухзначное, добавляем впред 0 */
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };
  /* устанавливаем дату и время на страницу */


  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
          days = timer.querySelector("#days"),
          hours = timer.querySelector("#hours"),
          minutes = timer.querySelector("#minutes"),
          seconds = timer.querySelector("#seconds"),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();
    /* функция обновляющая время каждую секунду */

    function updateClock() {
      /* расчет времени которое осталось прямо на эту секунду */
      const t = getTimeRemaining(endtime);
      /* количество дней которое нужно отобразить на странице */

      days.innerHTML = getZero(t.days);
      /* количество часов которое нужно отобразить на странице */

      hours.innerHTML = getZero(t.hours);
      /* количество минут которое нужно отобразить на странице */

      minutes.innerHTML = getZero(t.minutes);
      /* количество секунд которое нужно отобразить на странице */

      seconds.innerHTML = getZero(t.seconds);
      /* если суммарное время больше дедлайна то стоп интервал */

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  };

  setClock(".timer", deadline); // Modal window START

  /* Получаю со страницы */

  const modalTrigger = document.querySelectorAll("[data-modal]"),
        modal = document.querySelector(".modal"),
        modalCloseBtn = document.querySelector("[data-close]");
  /* ф-ция открытия модалки */

  const showModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearTimeout(modalTimerId);
  };
  /* ф-ция открытия модалки во время скролла*/

  /* ф-ция удаления открытия модалки при долистывании до конца страницы*/


  const showModalByScroll = () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  };
  /* ф-ция закрытия модалки */


  const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  };
  /* открытие модалки */


  modalTrigger.forEach(item => item.addEventListener("click", showModal));
  /*  закрытие модалки */

  modalCloseBtn.addEventListener("click", e => {
    console.log(modal);
    const target = e.target;

    if (target.hasAttribute("data-close")) {
      closeModal();
    }
  });
  /*   закрыть модалку если кликаем мимо формы */

  modal.addEventListener("click", e => {
    const target = e.target;

    if (target === modal) {
      closeModal();
    }
  });
  /*   закрыть модалку если нажимаем escape */

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
  /* показать модалку через время как зашел на страницу */

  const modalTimerId = setTimeout(() => {
    showModal();
  }, 5000);
  /* отследить скролл для показа модалки в конце страницы */

  window.addEventListener("scroll", showModalByScroll); // Modal window END
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map