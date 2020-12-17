// Remember, we're gonna use strict mode in all scripts now!
'use strict';

class Circle {
    constructor(r) {
        this.r = r;
    }
    get radius() {
        return this.r;
    }
    set radius(r) {
        this.r = r;
    }
    get diameter() {
        return this.r * 2;
    }
    area() {
        return Math.PI * this.r ** 2;
    }
    circumference() {
        return Math.PI * this.r * 2;
    }
}

let circle = new Circle(5);
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area().toFixed(2));
console.log(circle.circumference().toFixed(2));





class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }
    print(text) {
        let outputText = "";
        for (let symbol of text) {
            if (this.ink > 0) {
                if (symbol !== " ") {
                    this.ink -= 0.5;
                }
                outputText += symbol;
            }
        }
        const printedText = document.createElement('p');
        printedText.innerHTML = (`<p style='color:${this.color};'>${outputText}</p>`);
        document.body.appendChild(printedText);
    }
}
let yellowMarker = new Marker('yellow', 50);
let inputText = prompt('Enter your text here: ')
yellowMarker.print(inputText);

class RefillableMarker extends Marker {
    fill() {
        this.ink = 100;
    }
}

let orangeMarker = new RefillableMarker('orange');
orangeMarker.fill();


// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
// Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHTML().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().



class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

const employees = [
    new Employee("Honey Bailey", "Cook", "$87436"),
    new Employee("Justin Campbell", "Manager", "$129140"),
    new Employee("Samantha Gray", "Auditor", "$57390"),
    new Employee("Jessica Morrison", "Firefighter", "$167791"),
    new Employee("Daniel Lloyd", "Social Worker", "$142542"),
    new Employee("Owen Murray", "Jeweller", "$33598"),
    new Employee("Edwin Crawford", "Biochemist", "$193005"),
    new Employee("Oliver Dixon", "Engineer", "$188402"),
    new Employee("Vincent Brooks", "Englineer", "$93351"),
    new Employee("Abraham Harrison", "Journalist", "$36602")
];

class EmpTable {
    constructor(array) {
        this.array = array;
    }
    getHtml() {
        const table = document.querySelector('table');
        const array = this.array;
        const head = document.createElement("tr");
        const th1 = document.createElement("th");
        th1.textContent = "Name";
        const th2 = document.createElement("th");
        th2.textContent = "Position";
        const th3 = document.createElement("th");
        th3.textContent = "Salary";
        head.append(th1);
        head.append(th2);
        head.append(th3);
        table.append(head);
        for (let i in array) {
            let tr = document.createElement("tr");
            table.append(tr);
            for (let j in array[i]) {
                let td = document.createElement("td");
                td.textContent = array[i][j];
                tr.append(td);
            }
        }
    }
}

const tableObj = new EmpTable(employees);
tableObj.getHtml();