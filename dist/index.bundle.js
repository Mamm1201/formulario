"use strict";
(self["webpackChunkformulario_sena"] = self["webpackChunkformulario_sena"] || []).push([["index"],{

/***/ "./src/js/modules/FormHandler.js":
/*!***************************************!*\
  !*** ./src/js/modules/FormHandler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupFormHandler)
/* harmony export */ });
function setupFormHandler() {
  const form = document.getElementById("survey-form");
  const messageContainer = document.getElementById("message-container");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("number").value;
    const dropdown = document.getElementById("dropdown").value;
    const radioButtons = document.querySelectorAll(
      'input[name="choice"] : checked'
    );
    const checkboxes = document.querySelectorAll(
      'type[name="checkbox"] : checked'
    );
    const comments = document.getElementById("comments").value;

    if (
      name &&
      email &&
      age &&
      dropdown &&
      radioButtons.length > 0 &&
      checkboxes.length > 0 &&
      comments
    ) {
      messageContainer.textContent = "FORMULARIO ENVIADO CON EXITO";
      messageContainer.style.color = "green"; // estilo para el mensaje de exito
      form.reset(); // opcional resetea el formulario despues de enviarlo
    } else {
      messageContainer.textContent =
        "Por favor, complete todos los campos requeridos.";
      messageContainer.style.color = "red"; // estilo para el mensaje de error
    }
  });
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_FormHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/FormHandler.js */ "./src/js/modules/FormHandler.js");


document.addEventListener("DOMContentLoaded", () => {
  (0,_js_modules_FormHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // configurar el listener del formulario
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLG9CQUFvQjtBQUNwQixNQUFNO0FBQ047QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3JDMkQ7QUFDM0Q7QUFDQTtBQUNBLEVBQUUsc0VBQWdCLElBQUk7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm11bGFyaW8tc2VuYS8uL3NyYy9qcy9tb2R1bGVzL0Zvcm1IYW5kbGVyLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8tc2VuYS8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwRm9ybUhhbmRsZXIoKSB7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VydmV5LWZvcm1cIik7XHJcbiAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZS1jb250YWluZXJcIik7XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZTtcclxuICAgIGNvbnN0IGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJ2lucHV0W25hbWU9XCJjaG9pY2VcIl0gOiBjaGVja2VkJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAndHlwZVtuYW1lPVwiY2hlY2tib3hcIl0gOiBjaGVja2VkJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tZW50c1wiKS52YWx1ZTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIG5hbWUgJiZcclxuICAgICAgZW1haWwgJiZcclxuICAgICAgYWdlICYmXHJcbiAgICAgIGRyb3Bkb3duICYmXHJcbiAgICAgIHJhZGlvQnV0dG9ucy5sZW5ndGggPiAwICYmXHJcbiAgICAgIGNoZWNrYm94ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICBjb21tZW50c1xyXG4gICAgKSB7XHJcbiAgICAgIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkZPUk1VTEFSSU8gRU5WSUFETyBDT04gRVhJVE9cIjtcclxuICAgICAgbWVzc2FnZUNvbnRhaW5lci5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjsgLy8gZXN0aWxvIHBhcmEgZWwgbWVuc2FqZSBkZSBleGl0b1xyXG4gICAgICBmb3JtLnJlc2V0KCk7IC8vIG9wY2lvbmFsIHJlc2V0ZWEgZWwgZm9ybXVsYXJpbyBkZXNwdWVzIGRlIGVudmlhcmxvXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID1cclxuICAgICAgICBcIlBvciBmYXZvciwgY29tcGxldGUgdG9kb3MgbG9zIGNhbXBvcyByZXF1ZXJpZG9zLlwiO1xyXG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCJyZWRcIjsgLy8gZXN0aWxvIHBhcmEgZWwgbWVuc2FqZSBkZSBlcnJvclxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBzZXR1cEZvcm1IYW5kbGVyIGZyb20gXCIuL2pzL21vZHVsZXMvRm9ybUhhbmRsZXIuanNcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBzZXR1cEZvcm1IYW5kbGVyKCk7IC8vIGNvbmZpZ3VyYXIgZWwgbGlzdGVuZXIgZGVsIGZvcm11bGFyaW9cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==