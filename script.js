function DomConstructor() {
    this.create = function(tag) {
        const element = document.createElement(tag);
        return element;
    };
    this.attr = function(element, values){
        values.map(attr => {
            element.setAttribute(attr.key, attr.value);
        });
    };
    this.html = function(element, value){
        element.innerHTML = value;
    };
    this.add = function(element) {
        document.body.appendChild(element);
    };
    this.search = function(className) {
        const elements = document.querySelectorAll('.' + className);
        return elements;
    };
    this.addClass = function(element, className) {
        element.classList.add(className);
    };
    this.removeClass = function(element, className) {
        element.classList.remove(className);
    };
    this.toggleClass = function(element, className) {
        element.classList.toggle(className);
    };
    this.hasClass = function(element, className) {
        const classElement = element.getAttribute('class');
        if(classElement === className) {
            return true;
        }
        return false;
    };
    this.on = function(element, eventName, funcName) {
        element.addEventListener(eventName, (e)=> funcName(e, this));
    };
}; 



const newObject = new DomConstructor();

const divElement = newObject.create('div');
console.log(divElement);

const link = newObject.create('a');
newObject.attr(link, [{key: 'target', value: '_blank'}]);
console.log(link);

newObject.add(divElement);
newObject.html(divElement, 'Hello World');

newObject.addClass(divElement, 'container');
const hasClass = newObject.hasClass(divElement, 'container');
console.log(hasClass);

const hasClassActive = newObject.hasClass(divElement, 'active');
console.log(hasClassActive);

const onClickFunc = (e, atrr) => {
    console.log(e);
    console.log(atrr);
};

newObject.on(divElement, 'click', onClickFunc);
