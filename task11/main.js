var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class User {
    constructor(login, _fullName = 'FirstName LastName') {
        this._fullName = _fullName;
        this._language = 'Russian';
        this._location = 'Russia';
        this._userDescription = 'Привет, это мое описание';
        this._courses = {};
        this._id = this.checkLogin(login);
    }
    checkLogin(login) {
        if (!User._logins.includes(login)) {
            return login;
        }
        else
            throw new Error("Логин не уникален");
    }
    get id() {
        return this._id;
    }
    get fullName() {
        return this._fullName;
    }
    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
    }
    set location(location) {
        this._location = location;
    }
    get location() {
        return this._location;
    }
    get userDescription() {
        return this._userDescription;
    }
    set userDescription(userDescr) {
        if (userDescr.length > 300)
            throw new Error("Описание больше 300 символов");
        this._userDescription = userDescr;
    }
    joinCourse(course) {
        this._courses[course.id] = course;
        console.log("Поздравляю, " +
            this.fullName +
            ', вы поступили на курс "' +
            course.title +
            '"');
    }
    leftCourse(id) {
        let course = this._courses[id];
        console.log(`Увы, ${this.fullName}, Вы покинули курс "${course.title}"!`);
        delete this._courses[id];
    }
}
User._logins = [];
class Author extends User {
    constructor(fullName = "FirstName LastName", login) {
        super(fullName, login);
        this._createdCourses = {};
    }
    get createdCourses() {
        return this._createdCourses;
    }
    createCourse(title = "Название курса") {
        let courseID = Object.keys(this._createdCourses).length;
        let course = new Course(title, courseID, this.id);
        this._createdCourses[course.id] = course;
        return course;
    }
    deleteCreatedCourse(id) {
        delete this._createdCourses[id];
    }
}
class Course {
    constructor(title, id, authorID) {
        this._price = 0;
        this._modules = {};
        this._title = title;
        this._id = id;
        this._authorID = authorID;
    }
    get authorID() {
        return this._authorID;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        if (price < 0)
            throw new Error("Цена курса не может быть отрицательной");
        this._price = price;
    }
    get modules() {
        return this._modules;
    }
    createModule() {
        let moduleID = Object.keys(this._modules).length;
        let module = new Module(moduleID);
        this._modules[module.id] = module;
        return module;
    }
    deleteModule(id) {
        delete this._modules[id];
    }
    clearModules() {
        for (let key in this._modules)
            delete this._modules[key];
    }
}
class Module {
    constructor(id) {
        this._title = 'Название модуля';
        this._lessons = {};
        this._id = id;
    }
    get id() {
        return this._id;
    }
    get lessons() {
        return this._lessons;
    }
    createLesson() {
        let lessonID = Object.keys(this._lessons).length;
        let lesson = new Lesson(lessonID);
        this._lessons[lesson.id] = lesson;
        return lesson;
    }
    deleteLesson(id) {
        delete this._lessons[id];
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Lesson {
    constructor(id) {
        this._title = 'Название урока';
        this._tasks = {};
        this._id = id;
    }
    get id() {
        return this._id;
    }
    get tasks() {
        return this._tasks;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    createSimpleTask() {
        let taskID = Object.keys(this._tasks).length;
        let task = new SimpleTask(taskID);
        this._tasks[task.id] = task;
        return task;
    }
    createVideoTask() {
        let taskID = Object.keys(this._tasks).length;
        let task = new VideoTask(taskID);
        this._tasks[task.id] = task;
        return task;
    }
    createMathTask() {
        let taskID = Object.keys(this._tasks).length;
        let task = new MathTask(taskID);
        this._tasks[task.id] = task;
        return task;
    }
    deleteTask(id) {
        delete this._tasks[id];
    }
    clearTasks() {
        for (let key in this._tasks)
            delete this._tasks[key];
    }
}
class Task {
}
class SimpleTask extends Task {
    constructor(id) {
        super();
        this._description = 'Условие задачи';
        this._answer = 'Правильный ответ';
        this._status = false;
        this._id = id;
    }
    doTask(answer) {
        {
            if (this._answer === answer) {
                console.log("Да," + answer + " — это правильный ответ");
                this._status = true;
            }
            else {
                console.log("Пока неправильно. Не отчаивайся: подумай и ответь еще раз!");
            }
        }
    }
    get id() {
        return this._id;
    }
    get answer() {
        return this._answer;
    }
    set answer(answer) {
        this._answer = answer;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get status() {
        return this._status;
    }
}
class VideoTask extends Task {
    constructor(id) {
        super();
        this._id = id;
    }
    doTask() {
        console.log("Отвечаем на вопросы видео-квиза…");
    }
    get id() {
        return this._id;
    }
}
class MathTask extends Task {
    constructor(id) {
        super();
        this._id = id;
    }
    doTask() {
        console.log("Решаем математическую задачу…");
    }
    get id() {
        return this._id;
    }
}
let author = new Author("Damir Ivaev", "slicenbeat");
let createdCourse1 = author.createCourse();
createdCourse1.title = "Программирование на Python";
let module1 = createdCourse1.createModule();
module1.title = "Основные языковые конструкции";
let lesson1 = module1.createLesson();
lesson1.title = "'Hello, World!'";
console.log(createdCourse1, module1, lesson1);
let task1 = lesson1.createSimpleTask();
task1.description = "У отца три сына. Сколько у отца сыновей? (Ответ числом)";
task1.answer = "3";
task1.doTask("3");
console.log(task1);
let task2 = lesson1.createMathTask();
task2.doTask();
console.log(task2);
let task3 = lesson1.createVideoTask();
task3.doTask();
console.log(task3);
let user = new User("Витя", "vitya");
user.joinCourse(createdCourse1);
console.log(user);
user.leftCourse(createdCourse1.id);
console.log(user);
function notification(constructor) {
    console.log(`Object ${constructor.name} created!`);
}
let ConcreteIObject = class ConcreteIObject {
};
ConcreteIObject = __decorate([
    notification
], ConcreteIObject);
class Creator {
    FactoryMethod() {
    }
}
class ConcreteCreator extends Creator {
    FactoryMethod() {
        return new ConcreteIObject();
    }
}
const concreteCreator = new ConcreteCreator();
const concreteObject = concreteCreator.FactoryMethod();
