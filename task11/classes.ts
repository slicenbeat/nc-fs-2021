class User {
    private readonly _id: string;
    private _language = 'Russian';
    private _location = 'Russia';
    private _userDescription = 'Привет, это мое описание';
    private _courses: Object = {};
    private static _logins: string[] = [];

    constructor(login: string, private _fullName: string = 'FirstName LastName') {
        this._id = this.checkLogin(login);
    }

    private checkLogin(login: string): string {
        if (!User._logins.includes(login)) {
            return login;
        } else throw new Error("Логин не уникален");
    }

    public get id() {
        return this._id;
    }

    public get fullName() {
        return this._fullName;
    }

    public get language() {
        return this._language;
    }

    public set language(language: string) {
        this._language = language;
    }

    public set location(location: string) {
        this._location = location;
    }

    public get location() {
        return this._location;
    }

    public get userDescription() {
        return this._userDescription;
    }

    public set userDescription(userDescr: string) {
        if (userDescr.length > 300) throw new Error("Описание больше 300 символов");
        this._userDescription = userDescr;
    }

    joinCourse(course: Course) {
        this._courses[course.id] = course;
        console.log(
            "Поздравляю, " +
            this.fullName +
            ', вы поступили на курс "' +
            course.title +
            '"'
        );
    }

    leftCourse(id: number) {
        let course: Course = this._courses[id];
        console.log(
            `Увы, ${this.fullName}, Вы покинули курс "${course.title}"!`
        );
        delete this._courses[id];
    }
}

class Author extends User {
    private _createdCourses: Object = {};
    constructor(fullName: string = "FirstName LastName", login: string) {
        super(fullName, login);
    }
    get createdCourses() {
        return this._createdCourses;
    }

    public createCourse(title: string = "Название курса") {
        let courseID: number = Object.keys(this._createdCourses).length;
        let course = new Course(title, courseID, this.id);
        this._createdCourses[course.id] = course;
        return course;
    }
    deleteCreatedCourse(id: string) {
        delete this._createdCourses[id];
    }
}

class Course {
    private readonly _id: number;
    private _title: string;
    private _authorId: string;
    private _price: number = 0;
    private _modules:Object = {};

    constructor(title: string, id: number, authorId: string) {
        this._title = title;
        this._id = id;
        this._authorId = authorId;
    }

    public get authorId() {
        return this._authorId;
    }

    public get id() {
        return this._id;
    }

    public get title() {
        return this._title;
    }

    public set title(title) {
        this._title = title;
    }

    public get price() {
        return this._price;
    }

    public set price(price: number) {
        if (price < 0) throw new Error("Цена курса не может быть отрицательной");
        this._price = price;
    }

    public get modules() {
        return this._modules;
    }

    public createModule() {
        let moduleID: number = Object.keys(this._modules).length;
        let module: Module = new Module(moduleID);
        this._modules[module.id] = module;
        return module;
    }

    public deleteModule(id: string) {
        delete this._modules[id];
    }

    public clearModules() {
        for (let key in this._modules) delete this._modules[key];
    }
}

class Module {
    private readonly _id: number;
    private _title = 'Название модуля';
    private _lessons:Object = {};
    constructor(id: number) {
        this._id = id;
    }

    public get id() {
        return this._id;
    }

    public get lessons() {
        return this._lessons;
    }

    public createLesson() {
        let lessonID: number = Object.keys(this._lessons).length;
        let lesson: Lesson = new Lesson(lessonID);
        this._lessons[lesson.id] = lesson;
        return lesson;
    }

    public deleteLesson(id: number) {
        delete this._lessons[id];
    }

    public get title() {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }
}

class Lesson {
    private readonly _id: number;
    private _title = 'Название урока';
    private _tasks:Object = {};

    constructor(id: number) {
        this._id = id;
    }

    public get id() {
        return this._id;
    }

    public get tasks() {
        return this._tasks;
    }

    public get title() {
        return this._title;
    }

    public set title(title) {
        this._title = title;
    }

    public createSimpleTask() {
        let taskID = Object.keys(this._tasks).length;
        let task = new SimpleTask(taskID);
        this._tasks[task.id] = task;
        return task;
    }

    createVideoTask() {
        let taskID: number = Object.keys(this._tasks).length;
        let task = new VideoTask(taskID);
        this._tasks[task.id] = task;
        return task;
    }


    createMathTask() {
        let taskID: number = Object.keys(this._tasks).length;
        let task = new MathTask(taskID);
        this._tasks[task.id] = task;
        return task;
    }

    deleteTask(id: number) {
        delete this._tasks[id];
    }

    clearTasks() {
        for (let key in this._tasks) delete this._tasks[key];
    }
}

abstract class Task {
    abstract doTask(answer: string | undefined): void;
}

class SimpleTask extends Task {
    private readonly _id: number;
    private _description: string = 'Условие задачи';
    private _answer: string = 'Правильный ответ';
    private _status: boolean = false;

    constructor(id: number) {
        super();
        this._id = id;
    }

    public doTask(answer: string): void {
        {
            if (this._answer === answer) {
                console.log("Да," + answer + " — это правильный ответ");
                this._status = true;
            } else {
                console.log("Пока неправильно. Не отчаивайся: подумай и ответь еще раз!");
            }
        }
    }

    public get id() {
        return this._id;
    }

    public get answer() {
        return this._answer;
    }

    public set answer(answer) {
        this._answer = answer;
    }

    public get description() {
        return this._description;
    }

    public set description(description) {
        this._description = description;
    }

    public get status() {
        return this._status;
    }
}

class VideoTask extends Task {
    private _id: number;

    constructor(id: number) {
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
    private _id: number;
    constructor(id: number) {
        super();
        this._id = id;
    }
    doTask() {
        console.log("Решаем математическую задачу…");
    }

    public get id() {
        return this._id;
    }
}

let author: Author = new Author("Damir Ivaev", "slicenbeat");
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

let user: User = new User("Витя", "vitya");
user.joinCourse(createdCourse1);
console.log(user);

user.leftCourse(createdCourse1.id);
console.log(user);