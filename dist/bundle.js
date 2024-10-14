/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linkedLists.js":
/*!****************************!*\
  !*** ./src/linkedLists.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedList: () => (/* binding */ LinkedList)
/* harmony export */ });
class Node {
  constructor() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    this.value = value;
    this.nextNode = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    let currentNode = this.head;
    if (currentNode === null) {
      this.head = newNode;
    } else {
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }
  size() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      counter++;
      currentNode = currentNode.nextNode;
    }
    return counter;
  }
  headNode() {
    return this.head === null ? null : this.head.value;
  }
  tailNode() {
    let currentNode = this.head;
    if (currentNode === null) {
      return null;
    } else {
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      return currentNode.value;
    }
  }
  at(index) {
    let currentNode = this.head;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return currentNode;
      } else if (!currentNode.nextNode) {
        return null;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return null;
  }
  pop() {
    let currentNode = this.head;
    let previousNode = null;
    if (currentNode !== null) {
      while (currentNode.nextNode) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
      previousNode.nextNode = null;
    }
  }
  contains(value) {
    let currentNode = this.head;
    let contains = false;
    if (currentNode !== null) {
      do {
        if (currentNode.value === value) {
          contains = true;
        }
        currentNode = currentNode.nextNode;
      } while (currentNode);
      return contains;
    }
  }
  find(value) {
    let currentNode = this.head;
    let contains = false;
    let index = null;
    if (currentNode !== null) {
      index = -1;
      while (currentNode && !contains) {
        index++;
        if (currentNode.value === value) {
          contains = true;
        }
        currentNode = currentNode.nextNode;
      }
    }
    return contains === false ? null : index;
  }
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    } else if (!this.at(index)) {
      return;
    }
    const newNode = new Node(value);
    let currentNode = this.head;
    let previousNode = null;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        console.log(previousNode);
        console.log(currentNode);
        previousNode.nextNode = newNode;
        newNode.nextNode = currentNode;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
    }
  }
  removeAt(index) {
    if (!this.at(index)) {
      return;
    }
    let currentNode = this.head;
    let previousNode = null;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        previousNode.nextNode = currentNode.nextNode;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
    }
  }
  toString() {
    let string = "";
    let currentNode = this.head;
    do {
      if (currentNode) {
        string = string + `( ${currentNode.value} )`;
        string = string + " -> ";
        currentNode = currentNode.nextNode;
      }
      if (!currentNode) {
        string = string + `( null )`;
      }
    } while (currentNode);
    return string;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedLists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedLists.js */ "./src/linkedLists.js");


//test
const list = new _linkedLists_js__WEBPACK_IMPORTED_MODULE_0__.LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("dragon");
console.log(list.size());
console.log(list.toString());
console.log(list.headNode());
console.log(list.tailNode());
console.log(list.at(2));
list.pop();
console.log(list.toString());
console.log(list.contains("snake"));
console.log(list.find("snake"));
list.insertAt("lamb", 3);
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS0xL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLTEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS0xL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtMS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IodmFsdWUgPSBudWxsKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubmV4dE5vZGUgPSBudWxsO1xuICB9XG59XG5cbmNsYXNzIExpbmtlZExpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICB9XG5cbiAgYXBwZW5kKHZhbHVlKSB7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWQ7XG5cbiAgICBpZiAoY3VycmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChjdXJyZW50Tm9kZS5uZXh0Tm9kZSkge1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50Tm9kZS5uZXh0Tm9kZSA9IG5ld05vZGU7XG4gICAgfVxuICB9XG5cbiAgcHJlcGVuZCh2YWx1ZSkge1xuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgbmV3Tm9kZS5uZXh0Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICB9XG5cbiAgc2l6ZSgpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuXG4gICAgd2hpbGUgKGN1cnJlbnROb2RlKSB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBjb3VudGVyO1xuICB9XG5cbiAgaGVhZE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZCA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLmhlYWQudmFsdWU7XG4gIH1cblxuICB0YWlsTm9kZSgpIHtcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmhlYWQ7XG5cbiAgICBpZiAoY3VycmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUubmV4dE5vZGUpIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZS52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBhdChpbmRleCkge1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgICB9IGVsc2UgaWYgKCFjdXJyZW50Tm9kZS5uZXh0Tm9kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcG9wKCkge1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gbnVsbDtcblxuICAgIGlmIChjdXJyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLm5leHROb2RlKSB7XG4gICAgICAgIHByZXZpb3VzTm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgfVxuXG4gICAgICBwcmV2aW91c05vZGUubmV4dE5vZGUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRhaW5zKHZhbHVlKSB7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgIGxldCBjb250YWlucyA9IGZhbHNlO1xuXG4gICAgaWYgKGN1cnJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgIH0gd2hpbGUgKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gIH1cblxuICBmaW5kKHZhbHVlKSB7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgIGxldCBjb250YWlucyA9IGZhbHNlO1xuICAgIGxldCBpbmRleCA9IG51bGw7XG5cbiAgICBpZiAoY3VycmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGluZGV4ID0gLTE7XG4gICAgICB3aGlsZSAoY3VycmVudE5vZGUgJiYgIWNvbnRhaW5zKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRhaW5zID09PSBmYWxzZSA/IG51bGwgOiBpbmRleDtcbiAgfVxuXG4gIGluc2VydEF0KHZhbHVlLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgdGhpcy5wcmVwZW5kKHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmF0KGluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgIGxldCBwcmV2aW91c05vZGUgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByZXZpb3VzTm9kZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnROb2RlKTtcbiAgICAgICAgcHJldmlvdXNOb2RlLm5leHROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgbmV3Tm9kZS5uZXh0Tm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudE5vZGU7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQXQoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuYXQoaW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuICAgIGxldCBwcmV2aW91c05vZGUgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgIHByZXZpb3VzTm9kZS5uZXh0Tm9kZSA9IGN1cnJlbnROb2RlLm5leHROb2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudE5vZGU7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZyA9IFwiXCI7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5oZWFkO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKGN1cnJlbnROb2RlKSB7XG4gICAgICAgIHN0cmluZyA9IHN0cmluZyArIGAoICR7Y3VycmVudE5vZGUudmFsdWV9IClgO1xuICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyBcIiAtPiBcIjtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0Tm9kZTtcbiAgICAgIH1cbiAgICAgIGlmICghY3VycmVudE5vZGUpIHtcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgYCggbnVsbCApYDtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChjdXJyZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmV4cG9ydCB7IExpbmtlZExpc3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTGlua2VkTGlzdCB9IGZyb20gXCIuL2xpbmtlZExpc3RzLmpzXCI7XG5cbi8vdGVzdFxuY29uc3QgbGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG5cbmxpc3QuYXBwZW5kKFwiZG9nXCIpO1xubGlzdC5hcHBlbmQoXCJjYXRcIik7XG5saXN0LmFwcGVuZChcInBhcnJvdFwiKTtcbmxpc3QuYXBwZW5kKFwiaGFtc3RlclwiKTtcbmxpc3QuYXBwZW5kKFwic25ha2VcIik7XG5saXN0LmFwcGVuZChcInR1cnRsZVwiKTtcblxubGlzdC5wcmVwZW5kKFwiZHJhZ29uXCIpO1xuXG5jb25zb2xlLmxvZyhsaXN0LnNpemUoKSk7XG5jb25zb2xlLmxvZyhsaXN0LnRvU3RyaW5nKCkpO1xuY29uc29sZS5sb2cobGlzdC5oZWFkTm9kZSgpKTtcbmNvbnNvbGUubG9nKGxpc3QudGFpbE5vZGUoKSk7XG5jb25zb2xlLmxvZyhsaXN0LmF0KDIpKTtcbmxpc3QucG9wKCk7XG5jb25zb2xlLmxvZyhsaXN0LnRvU3RyaW5nKCkpO1xuY29uc29sZS5sb2cobGlzdC5jb250YWlucyhcInNuYWtlXCIpKTtcblxuY29uc29sZS5sb2cobGlzdC5maW5kKFwic25ha2VcIikpO1xuXG5saXN0Lmluc2VydEF0KFwibGFtYlwiLCAzKTtcbmNvbnNvbGUubG9nKGxpc3QudG9TdHJpbmcoKSk7XG5cbmxpc3QucmVtb3ZlQXQoNCk7XG5jb25zb2xlLmxvZyhsaXN0LnRvU3RyaW5nKCkpO1xuIl0sIm5hbWVzIjpbIk5vZGUiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibmV4dE5vZGUiLCJMaW5rZWRMaXN0IiwiaGVhZCIsImFwcGVuZCIsIm5ld05vZGUiLCJjdXJyZW50Tm9kZSIsInByZXBlbmQiLCJzaXplIiwiY291bnRlciIsImhlYWROb2RlIiwidGFpbE5vZGUiLCJhdCIsImluZGV4IiwiaSIsInBvcCIsInByZXZpb3VzTm9kZSIsImNvbnRhaW5zIiwiZmluZCIsImluc2VydEF0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUF0IiwidG9TdHJpbmciLCJzdHJpbmciLCJsaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==