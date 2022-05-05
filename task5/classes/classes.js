const taskSkillTypes = {
  doVideoQuiz() {
    console.log("Отвечаем на вопросы видео-квиза…");
  },

  doMathTask() {
    console.log("Решаем математическую задачу");
  },
};

class User {
  #id;
  #fullName;
  #language;
  #location;
  #userDescription;
  #courses;
  static #logins = [];

  constructor(fullName = "User User", login) {
    this.#id = this.#checkLogin(login);
    User.#logins.push(login);
    this.#fullName = fullName;
    this.#language = "Russian";
    this.#location = "Russia";
    this.#userDescription = "Привет, это мое описание!";
    this.#courses = new Map();
  }

  #checkLogin(login) {
    if (!User.#logins.includes(login)) {
      return login;
    } else throw new Error("Логин не уникален");
  }

  get id() {
    return this.#id;
  }

  get fullName() {
    return this.#fullName;
  }

  get language() {
    return this.#language;
  }

  set language(language = "Russian") {
    this.#language = language;
  }

  set location(location = "Russia") {
    this.#location = location;
  }

  get location() {
    return this.#location;
  }

  get userDescription() {
    return this.#userDescription;
  }

  set userDescription(userDescr = "Привет, это мое описание!") {
    if (userDescr.length > 300) throw new Error("Описание больше 300 символов");
    this.#userDescription = userDescr;
  }

  joinCourse(course) {
    this.#courses.set(course.id, course);
    console.log(
      "Поздравляю, " +
        this.fullName +
        ', вы поступили на курс "' +
        course.title +
        '"'
    );
  }

  leftCourse(id) {
    let course = this.#courses.get(id);
    console.log(
      "Увы, " + this.fullName + ', вы покинули курс "' + course.title + '"'
    );
    this.#courses.delete(id);
  }
}

class Author extends User {
  #createdCourses;
  constructor(fullName = "User User", login) {
    super(fullName, login);
    this.#createdCourses = new Map();
  }
  get createdCourses() {
    return this.#createdCourses;
  }

  createCourse(title = "Название курса") {
    let course = new Course(title, this.#createdCourses.size, this.id);
    this.#createdCourses.set(course.id, course);
    return course;
  }
  deleteCreatedCourse(id) {
    this.#createdCourses.delete(id);
  }
}

class Course {
  #id;
  #title;
  #authorID;
  #price;
  #modules;

  constructor(title, id, authorID) {
    this.#title = title;
    this.#id = id;
    this.#authorID = authorID;
    this.#price = 0;
    this.#modules = new Map();
  }

  get authorID() {
    return this.#authorID;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get price() {
    return this.#price;
  }

  set price(price = 0) {
    if (price < 0) throw new Error("Цена курса не может быть отрицательной");
    this.#price = price;
  }

  get modules() {
    return this.#modules;
  }

  createModule() {
    let module = new Module(this.#modules.size);
    this.#modules.set(module.id, module);
    return module;
  }

  deleteModule(id) {
    this.#modules.delete(id);
  }

  clearModules() {
    this.#modules.clear();
  }
}

// class Certificate extends Course {
//   #congratulation;
//   constructor(course) {
//     super(course.title, course.authorID);
//     this.#congratulation = "Поздравляем с завершением курса!";
//   }

//   get congratulation() {
//     return this.#congratulation;
//   }
// }

class Module {
  #id;
  #title;
  #lessons;
  constructor(id) {
    this.#id = id;
    this.#title = "Название модуля";
    this.#lessons = new Map();
  }

  get id(){
    return this.#id;
  }

  get lessons() {
    return this.#lessons;
  }

  createLesson() {
    let lesson = new Lesson(this.#lessons.size);
    this.#lessons.set(lesson.id, lesson);
    return lesson;
  }

  deleteLesson(id) {
    this.#lessons.delete(id);
  }

  get title() {
    return this.#title;
  }

  set title(title = "Название модуля") {
    return (this.#title = title);
  }
}

class Lesson {
  #id;
  #title;
  #tasks;

  constructor(id) {
    this.#id = id;
    this.#title = "Название урока";
    this.#tasks = new Map();
  }

  get id() {
    return this.#id;
  }

  get tasks() {
    return this.#tasks;
  }

  get title() {
    return this.#title;
  }

  set title(title = "Название урока") {
    this.#title = title;
  }

  createTask() {
    let task = new Task(this.#tasks.size);
    this.#tasks.set(task.id, task);
    return task;
  }

  createVideoTask() {
    let task = new VideoTask(this.#tasks.size);
    this.#tasks.set(task.id, task);
    return task;
  }

  createMathVideoTask() {
    let task = new MathVideoTask(this.#tasks.size);
    this.#tasks.set(task.id, task);
    return task;
  }

  createMathTask() {
    let task = new MathTask(this.#tasks.size);
    this.#tasks.set(task.id, task);
    return task;
  }

  deleteTask(id) {
    this.#tasks.delete(id);
  }

  clearTasks() {
    this.#tasks.clear();
  }
}

class Task {
  #id;
  #description;
  #answer;
  #status;

  constructor(id) {
    this.#id = id;
    this.#description = "Условие задачи";
    this.#answer = "Правильный ответ";
    this.#status = false;
  }

  doSimpleTask(answer) {
    if (this.#answer === answer) {
      console.log("Да," + answer + " — это правильный ответ");
      this.#status = true;
    } else {
      console.log("Пока неправильно. Не отчаивайся: подумай и ответь еще раз!");
    }
  }

  get id() {
    return this.#id;
  }

  get answer() {
    return this.#answer;
  }

  set answer(answer = "Правильный ответ") {
    this.#answer = answer;
  }

  get description() {
    return this.#description;
  }

  set description(description = "Условие задачи") {
    this.#description = description;
  }

  get id() {
    return this.#id;
  }

  get status() {
    return this.#status;
  }
}

class VideoTask {
  #id;

  constructor(id) {
    this.#id = id;
    Object.assign(this, {
      doVideoQuiz: taskSkillTypes.doVideoQuiz,
    });
  }

  get id() {
    return this.#id;
  }
}

class MathTask {
  #id;
  constructor(id) {
    this.#id = id;
    Object.assign(this, {
      doMathTask: taskSkillTypes.doMathTask,
    });
  }

  get id() {
    return this.#id;
  }
}

class MathVideoTask {
  #id;

  constructor(id) {
    this.#id = id;
    Object.assign(this, {
      doMathTask: taskSkillTypes.doMathTask,
      doVideoQuiz: taskSkillTypes.doVideoQuiz,
    });
  }
}

/*                    ТЕСТ                    */
let author = new Author("Damir Ivaev", "slicenbeat");
let createdCourse1 = author.createCourse();
createdCourse1.title = "Программирование на Python";
let module1 = createdCourse1.createModule();
module1.title = "Основные языковые конструкции";
let lesson1 = module1.createLesson();
lesson1.title = "'Hello, World!'";
console.log(createdCourse1, module1, lesson1);

let task1 = lesson1.createTask();
task1.description = "У отца три сына. Сколько у отца сыновей? (Ответ числом)";
task1.answer = "3";
task1.doSimpleTask("3");
console.log(task1);

let task2 = lesson1.createMathTask();
task2.doMathTask();
console.log(task2);

let task3 = lesson1.createVideoTask();
task3.doVideoQuiz();
console.log(task3);

let task4 = lesson1.createMathVideoTask();
task4.doMathTask();
task4.doVideoQuiz();
console.log(task4);

let user = new User("Витя", "vitya");
user.joinCourse(createdCourse1);
console.log(user);

user.leftCourse(createdCourse1.id);
console.log(user);
