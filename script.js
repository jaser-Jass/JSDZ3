console.log("Задание 1.");
// ""Управление персоналом компании""
// Реализация класса Employee
class Employee {
    constructor(name) {
      this.name = name;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}`);
    }
  }
  
  // Реализация класса Manager
  class Manager extends Employee {
    constructor(name, department) {
      super(name);
      this.department = department;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Department: ${this.department}`);
    }
  }
  
  // Пример использования классов
  const employee = new Employee("John Smith");
  employee.displayInfo();
  // Вывод:
  // Name: John Smith
  
  const manager = new Manager("Jane Doe", "Sales");
  manager.displayInfo();
  // Вывод:
  // Name: Jane Doe
  // Department: Sales


console.log("Задание 2.")
  //  ""Управление списком заказов""
  // Реализация класса Order
  class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }
  // Метод добавления продукта к заказу
    addProduct(product) {
        this.products.push(product);
    }
  // Метод получения общей стоимости заказа
    getTotalPrice() {
        let totalPrice = 0;
        for (let product of this.products) {
            totalPrice += product.price;
        }
        return totalPrice;
    }
}
// Реализация класса Product
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Пример использования класса
const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice()); // Вывод: 600
