class MathUtil {
  static PI = 3.14159

  static getDiameter(radius) {
    return radius * 2
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius
  }
  static getArea(radius) {
    return this.PI * radius * radius
  }
}

console.log(MathUtil.PI)
// 3.14159
console.log(MathUtil.getDiameter(10))
// 20
console.log(MathUtil.getCircumference(10))
// 60.8318
console.log(MathUtil.getArea(10))
// 34.159

class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello(); // Hello, my username is Spongebob
user2.sayHello(); // Hello, my username is Patrick
user3.sayHello(); // Hello, my username is Sandy
User.getUserCount(); // There are 3 users online
