// Створити клас SuperMath.
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. 
// Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. 
// Якщо хоче, зробити математичну дію znak (яка описана в прототипі), 
// інакше - запитати введення нових даних через метод input() класу SuperMath.

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує


class SuperMath {
    calculate () {
        switch (this.znak) {
            case '+':
                console.log(this.x + this.y);
                break;
            case '-':
                console.log(this.x - this.y);
                break;
            case '/':
                console.log(this.x / this.y);
                break;
            case '*':
                console.log(this.x * this.y);
                break;
            case '%':
                console.log(this.x % this.y);
                break;
            default:
                console.log(`Something went wrong!`);
                break;
        }
    }

    input () {
        const x = Number(prompt(`Enter x: `));
        const y = Number(prompt(`Enter y: `));
        const znak = prompt(`Enter znak: `);
        const obj = {x, y, znak};
        this.check(obj);
    }
    
    check (obj) {
        const {x, y, znak} = obj;
        let choice = prompt(`Do you want to ${x} ${znak} ${y}?`);
        if (choice.toLocaleLowerCase() === 'yes') {
            this.x = obj.x;
            this.y = obj.y;
            this.znak = obj.znak;
            this.calculate();
        } else if (choice.toLocaleLowerCase() === 'no') {
            this.input();
        } else {
            console.log('Something went wrong...');
            this.check(obj);
        }
    }
}

let p = new SuperMath();
let obj = {x: 12, y: 3, znak: '+'};
p.check(obj);