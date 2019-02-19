(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// A Contact component that displays a person's name, phone number, and address.
const buildSingleContact = singleContactObject => {
  return `<div class="task" id="task-${singleContactObject.id}">
      <label> 
    <span>${singleContactObject.name}</span>
        </label>
        <p>${singleContactObject.phone}</p>
        <p>${singleContactObject.address}</p>
`;
};

var _default = buildSingleContact;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.
const apiManager = {
  getAllEmployees: () => {
    return fetch("http://localhost:8089/contacts").then(contacts => contacts.json());
  },
  postNewContact: contactObject => {
    return fetch("http://localhost:8089/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactObject)
    });
  }
};
var _default = apiManager;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection.js"));

var _contactForm = _interopRequireDefault(require("./contactForm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A ContactForm component that, when filled out and a submit button is pressed, adds a new contact to storage. It should import the ContactCollection component.
// event listener for adding a new contact
const newContact = () => {
  document.querySelector("#add-btn").addEventListener("click", () => {
    const nameValue = document.querySelector("#name").value;
    const phoneValue = document.querySelector("#phone").value;
    const addressValue = document.querySelector("#address").value;
    const contactToAdd = {
      name: firstNameValue,
      phone: phoneValue,
      address: addressValue
    };

    _contactCollection.default.postNewContact(contactToAdd).then(() => {
      (0, _contactForm.default)();
    });
  });
};

var _default = newContact;
exports.default = _default;

},{"./contactCollection.js":2,"./contactForm.js":3}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection.js"));

var _contact = _interopRequireDefault(require("./contact.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A ContactList component that displays all contacts. It should import the Contact component and the ContactCollection component.
const printAllContacts = () => {
  document.querySelector("#contact_container").innerHTML = "";

  _contactCollection.default.getAllEmployees().then(parsedContacts => {
    parsedContacts.forEach(singleContact => {
      document.querySelector("#contact_container").innerHTML += (0, _contact.default)(singleContact);
    });
  });
};

var _default = printAllContacts;
exports.default = _default;

},{"./contact.js":1,"./contactCollection.js":2}],5:[function(require,module,exports){
"use strict";

var _contactList = _interopRequireDefault(require("./contactList.js"));

var _contactForm = _interopRequireDefault(require("./contactForm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// In main.js, import the ContactList component and the ContactForm component.
(0, _contactList.default)();
(0, _contactForm.default)();

},{"./contactForm.js":3,"./contactList.js":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvY29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7QUFDQSxNQUFNLGtCQUFrQixHQUFJLG1CQUFELElBQXlCO0FBQ2hELFNBQVEsOEJBQTZCLG1CQUFtQixDQUFDLEVBQUc7O1lBRXBELG1CQUFtQixDQUFDLElBQUs7O2FBRXhCLG1CQUFtQixDQUFDLEtBQU07YUFDMUIsbUJBQW1CLENBQUMsT0FBUTtDQUxyQztBQU1GLENBUEY7O2VBUWUsa0I7Ozs7Ozs7Ozs7QUNUZjtBQUNBLE1BQU0sVUFBVSxHQUFHO0FBQ2YsRUFBQSxlQUFlLEVBQUUsTUFBTTtBQUNuQixXQUFPLEtBQUssQ0FBQyxnQ0FBRCxDQUFMLENBQ0YsSUFERSxDQUNHLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURmLENBQVA7QUFFSCxHQUpjO0FBS2YsRUFBQSxjQUFjLEVBQUcsYUFBRCxJQUFtQjtBQUMvQixXQUFPLEtBQUssQ0FBQyxnQ0FBRCxFQUFtQztBQUMzQyxNQUFBLE1BQU0sRUFBRSxNQURtQztBQUUzQyxNQUFBLE9BQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRmtDO0FBSzNDLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsYUFBZjtBQUxxQyxLQUFuQyxDQUFaO0FBUUg7QUFkYyxDQUFuQjtlQWlCZSxVOzs7Ozs7Ozs7OztBQ2pCZjs7QUFDQTs7OztBQUZBO0FBSUE7QUFDQSxNQUFNLFVBQVUsR0FBRyxNQUFNO0FBQUMsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixFQUFtQyxnQkFBbkMsQ0FBb0QsT0FBcEQsRUFBNkQsTUFBTTtBQUN6RixVQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxLQUFsRDtBQUNBLFVBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLEtBQXBEO0FBQ0EsVUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsRUFBbUMsS0FBeEQ7QUFFQSxVQUFNLFlBQVksR0FBRztBQUNqQixNQUFBLElBQUksRUFBRSxjQURXO0FBRWpCLE1BQUEsS0FBSyxFQUFFLFVBRlU7QUFHakIsTUFBQSxPQUFPLEVBQUU7QUFIUSxLQUFyQjs7QUFLQSwrQkFBVyxjQUFYLENBQTBCLFlBQTFCLEVBQXdDLElBQXhDLENBQTZDLE1BQU07QUFDL0M7QUFDSCxLQUZEO0FBR0gsR0FieUI7QUFjekIsQ0FkRDs7ZUFlZSxVOzs7Ozs7Ozs7OztBQ25CZjs7QUFDQTs7OztBQUZBO0FBSUEsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzNCLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDLFNBQTdDLEdBQXlELEVBQXpEOztBQUNBLDZCQUFXLGVBQVgsR0FDQyxJQURELENBQ08sY0FBRCxJQUFvQjtBQUN0QixJQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLGFBQWEsSUFBSTtBQUNwQyxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9CQUF2QixFQUE2QyxTQUE3QyxJQUEwRCxzQkFBbUIsYUFBbkIsQ0FBMUQ7QUFFSCxLQUhEO0FBSUgsR0FORDtBQU9ILENBVEQ7O2VBVWUsZ0I7Ozs7OztBQ2JmOztBQUNBOzs7O0FBRkE7QUFJQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gQSBDb250YWN0IGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGEgcGVyc29uJ3MgbmFtZSwgcGhvbmUgbnVtYmVyLCBhbmQgYWRkcmVzcy5cclxuY29uc3QgYnVpbGRTaW5nbGVDb250YWN0ID0gKHNpbmdsZUNvbnRhY3RPYmplY3QpID0+IHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRhc2tcIiBpZD1cInRhc2stJHtzaW5nbGVDb250YWN0T2JqZWN0LmlkfVwiPlxyXG4gICAgICA8bGFiZWw+IFxyXG4gICAgPHNwYW4+JHtzaW5nbGVDb250YWN0T2JqZWN0Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHA+JHtzaW5nbGVDb250YWN0T2JqZWN0LnBob25lfTwvcD5cclxuICAgICAgICA8cD4ke3NpbmdsZUNvbnRhY3RPYmplY3QuYWRkcmVzc308L3A+XHJcbmB9XHJcbmV4cG9ydCBkZWZhdWx0IGJ1aWxkU2luZ2xlQ29udGFjdDsiLCIvLyBBIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudCB0aGF0IGxvYWRzIGV4aXN0aW5nIGNvbnRhY3RzIGZyb20gc3RvcmFnZSwgYW5kIHNhdmVzIG5ldyBvbmVzLiBFYWNoIG5ldyBjb250YWN0IHNob3VsZCBoYXZlIGFuIGF1dG8tZ2VuZXJhdGVkIGlkZW50aWZpZXIuXHJcbmNvbnN0IGFwaU1hbmFnZXIgPSB7XHJcbiAgICBnZXRBbGxFbXBsb3llZXM6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODkvY29udGFjdHNcIilcclxuICAgICAgICAgICAgLnRoZW4oY29udGFjdHMgPT4gY29udGFjdHMuanNvbigpKVxyXG4gICAgfSxcclxuICAgIHBvc3ROZXdDb250YWN0OiAoY29udGFjdE9iamVjdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OS9jb250YWN0c1wiLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhY3RPYmplY3QpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaU1hbmFnZXI7IiwiLy8gQSBDb250YWN0Rm9ybSBjb21wb25lbnQgdGhhdCwgd2hlbiBmaWxsZWQgb3V0IGFuZCBhIHN1Ym1pdCBidXR0b24gaXMgcHJlc3NlZCwgYWRkcyBhIG5ldyBjb250YWN0IHRvIHN0b3JhZ2UuIEl0IHNob3VsZCBpbXBvcnQgdGhlIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudC5cclxuaW1wb3J0IGFwaU1hbmFnZXIgZnJvbSBcIi4vY29udGFjdENvbGxlY3Rpb24uanNcIlxyXG5pbXBvcnQgcHJpbnRBbGxDb250YWN0cyBmcm9tIFwiLi9jb250YWN0Rm9ybS5qc1wiXHJcblxyXG4vLyBldmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIGEgbmV3IGNvbnRhY3RcclxuY29uc3QgbmV3Q29udGFjdCA9ICgpID0+IHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IG5hbWVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKS52YWx1ZTtcclxuICAgIGNvbnN0IHBob25lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgYWRkcmVzc1ZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRyZXNzXCIpLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RUb0FkZCA9IHtcclxuICAgICAgICBuYW1lOiBmaXJzdE5hbWVWYWx1ZSxcclxuICAgICAgICBwaG9uZTogcGhvbmVWYWx1ZSxcclxuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzVmFsdWVcclxuICAgIH07XHJcbiAgICBhcGlNYW5hZ2VyLnBvc3ROZXdDb250YWN0KGNvbnRhY3RUb0FkZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcHJpbnRBbGxDb250YWN0cygpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ld0NvbnRhY3Q7XHJcbiIsIi8vIEEgQ29udGFjdExpc3QgY29tcG9uZW50IHRoYXQgZGlzcGxheXMgYWxsIGNvbnRhY3RzLiBJdCBzaG91bGQgaW1wb3J0IHRoZSBDb250YWN0IGNvbXBvbmVudCBhbmQgdGhlIENvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudC5cclxuaW1wb3J0IGFwaU1hbmFnZXIgZnJvbSBcIi4vY29udGFjdENvbGxlY3Rpb24uanNcIlxyXG5pbXBvcnQgYnVpbGRTaW5nbGVDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIlxyXG5cclxuY29uc3QgcHJpbnRBbGxDb250YWN0cyA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdF9jb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGFwaU1hbmFnZXIuZ2V0QWxsRW1wbG95ZWVzKClcclxuICAgIC50aGVuKChwYXJzZWRDb250YWN0cykgPT4ge1xyXG4gICAgICAgIHBhcnNlZENvbnRhY3RzLmZvckVhY2goc2luZ2xlQ29udGFjdCA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdF9jb250YWluZXJcIikuaW5uZXJIVE1MICs9IGJ1aWxkU2luZ2xlQ29udGFjdChzaW5nbGVDb250YWN0KVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBwcmludEFsbENvbnRhY3RzOyIsIi8vIEluIG1haW4uanMsIGltcG9ydCB0aGUgQ29udGFjdExpc3QgY29tcG9uZW50IGFuZCB0aGUgQ29udGFjdEZvcm0gY29tcG9uZW50LlxyXG5pbXBvcnQgcHJpbnRBbGxDb250YWN0cyBmcm9tIFwiLi9jb250YWN0TGlzdC5qc1wiXHJcbmltcG9ydCBuZXdDb250YWN0IGZyb20gXCIuL2NvbnRhY3RGb3JtLmpzXCJcclxuXHJcbnByaW50QWxsQ29udGFjdHMoKTtcclxubmV3Q29udGFjdCgpOyJdfQ==
