/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
const tasks = [
  {
    id: '1',
    name: 'Create homepage design',
    description: 'Design a new homepage for our website',
    createdAt: new Date('2022-02-20'),
    assignee: 'John',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: [
      {
        id: '1',
        text: 'I can help with this, let me know what you need.',
        createdAt: new Date('2022-02-21'),
        author: 'Jane',
      },
    ],
  },
  {
    id: '2',
    name: 'Fix login form validation',
    description: 'Update validation rules for login form',
    createdAt: new Date('2022-02-22'),
    assignee: 'Mary',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '1',
        text: "I noticed this issue too, glad it's being fixed.",
        createdAt: new Date('2022-02-23'),
        author: 'Bob',
      },
      {
        id: '2',
        text: 'Can you add a unit test for this?',
        createdAt: new Date('2022-02-24'),
        author: 'Alice',
      },
    ],
  },
  {
    id: '3',
    name: 'Update product pricing',
    description: 'Adjust pricing for our products based on market research',
    createdAt: new Date('2022-02-25'),
    assignee: 'John',
    status: 'Complete',
    priority: 'High',
    isPrivate: false,
    comments: [],
  },
  {
    id: '4',
    name: 'Add search feature',
    description: 'Implement a search feature for our website',
    createdAt: new Date('2022-02-26'),
    assignee: 'Mary',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '1',
        text: 'I think we should prioritize this, it will improve user experience.',
        createdAt: new Date('2022-02-27'),
        author: 'Bob',
      },
    ],
  },
  {
    id: '5',
    name: 'Refactor legacy code',
    description: 'Clean up old code that is no longer used',
    createdAt: new Date('2022-02-28'),
    assignee: 'John',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [],
  },
  {
    id: '6',
    name: 'Optimize website performance',
    description: 'Improve load times and overall performance of our website',
    createdAt: new Date('2022-03-01'),
    assignee: 'Mary',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: [
      {
        id: '1',
        text: "I have some ideas for how we can approach this, let's discuss.",
        createdAt: new Date('2022-03-02'),
        author: 'Bob',
      },
    ],
  },
  {
    id: '7',
    name: 'Create user onboarding flow',
    description: 'Design and implement a new user onboarding flow',
    createdAt: new Date('2022-03-03'),
    assignee: 'John',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '1',
        text: 'I think we should focus on making this as simple and intuitive as possible.',
        createdAt: new Date('2022-03-04'),
        author: 'Alice',
      },
    ],
  },
  {
    id: '8',
    name: 'Update product descriptions',
    description: 'Rewrite product descriptions to be more engaging and informative',
    createdAt: new Date('2022-03-05'),
    assignee: 'Mary',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '1',
        text: 'Looks great, thanks for putting in the effort to make these better.',
        createdAt: new Date('2022-03-06'),
        author: 'Bob',
      },
    ],
  },
  {
    id: '9',
    name: 'Add payment options',
    description: 'Integrate additional payment options for our customers',
    createdAt: new Date('2022-03-07'),
    assignee: 'John',
    status: 'In progress',
    priority: 'High',
    isPrivate: false,
    comments: [],
  },
  {
    id: '21',
    name: 'Task 11',
    description: 'Description for Task 11',
    createdAt: new Date('2023-01-11'),
    assignee: 'Aleksey',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [],
  },
  {
    id: '10',
    name: 'Task 10',
    description: 'Description for Task 10',
    createdAt: new Date('2022-01-10'),
    assignee: 'John',
    status: 'To Do',
    priority: 'High',
    isPrivate: true,
    comments: [],
  },
  {
    id: '11',
    name: 'Task 11',
    description: 'Description for Task 11',
    createdAt: new Date('2022-01-11'),
    assignee: 'Aleksey',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [],
  },
  {
    id: '12',
    name: 'Task 12',
    description: 'Description for Task 12',
    createdAt: new Date('2022-01-12'),
    assignee: 'Jane',
    status: 'Complete',
    priority: 'Low',
    isPrivate: true,
    comments: [
      {
        id: '1',
        text: 'Comment 1 for Task 12',
        createdAt: new Date('2022-01-13'),
        author: 'John',
      },
    ],
  },
  {
    id: '13',
    name: 'Task 13',
    description: 'Description for Task 13',
    createdAt: new Date('2023-01-13'),
    assignee: 'John',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: [
      {
        id: '1',
        text: 'Comment 1 for Task 13',
        createdAt: new Date('2022-01-14'),
        author: 'Jane',
      },
      {
        id: '2',
        text: 'Comment 2 for Task 13',
        createdAt: new Date('2022-01-15'),
        author: 'John',
      },
    ],
  },
  {
    id: '14',
    name: 'Task 14',
    description: 'Description for Task 14',
    createdAt: new Date('2022-01-14'),
    assignee: 'Jane',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [
      {
        id: '1',
        text: 'Comment 1 for Task 14',
        createdAt: new Date('2022-01-15'),
        author: 'Bob',
      },
    ],
  },
  {
    id: '15',
    name: 'Task 15',
    description: 'Description for Task 15',
    createdAt: new Date('2023-01-15'),
    assignee: 'John',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [],
  },
  {
    id: '16',
    name: 'Task 16',
    description: 'Description for Task 16',
    createdAt: new Date('2022-01-16'),
    assignee: 'Jane',
    status: 'To Do',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '1',
        text: 'Comment 1 for Task 16',
        createdAt: new Date('2022-01-17'),
        author: 'Alice',
      },
      {
        id: '2',
        text: 'Comment 2 for Task 16',
        createdAt: new Date('2022-01-18'),
        author: 'Jane',
      },
    ],
  },
  {
    id: '17',
    name: 'Task 17',
    description: 'Description for Task 17',
    createdAt: new Date('2022-01-17'),
    assignee: 'Aleksey',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: false,
    comments: [],
  },
  {
    id: '19',
    name: 'Task 19',
    description: 'Description for Task 19',
    createdAt: new Date('2022-01-19'),
    assignee: 'Bob',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: [
      {
        id: '1',
        text: 'Comment 1 for Task 19',
        createdAt: new Date('2022-01-20'),
        author: 'Bob',
      },
      {
        id: '2',
        text: 'Comment 2 for Task 19',
        createdAt: new Date('2022-01-21'),
        author: 'Aleksey',
      },
    ],
  },
  {
    id: '20',
    name: 'Task 20',
    description: 'Description for Task 20',
    createdAt: new Date('2023-01-20'),
    assignee: 'Jane',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [],
  },
];

const invalidTasksTest = [
  {
    id: 12,
    name: 'Write function',
    description: 'Description for Task 20',
    createdAt: new Date('2023-01-20'),
    assignee: 'Jane',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [],
  },
  {
    id: '210',
    name: 'Task 20',
    description: 'Description for Task 20',
    createdAt: new Date('2023-01-20'),
    assignee: 'Jane',
    status: 'In progress',
    priority: false,
    isPrivate: true,
    comments: [],
  }, ,
  {
    id: '20',
    name: 'Task 20',
    description: 'Description for Task 20',
  },
  {
    id: '25',
    name: 'Task 20',
    description: 'Description for Task 20',
    createdAt: new Date('2023-01-20'),
    assignee: 'Jane',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [],
  },
  1,
  {
    id: '24',
    name: 'Task 20',
    description: 'Description for Task 20',
    createdAt: new Date('2023-01-20'),
    assignee: 'Jane',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [],
  },
];

class Comment {
  constructor(text, user) {
    this._id = crypto.randomUUID();
    this.text = text;
    this._createdAt = new Date();
    this._author = user;
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get author() {
    return this._author;
  }

  static validate(com) {
    if (!com.id || typeof com.id !== 'string' || !com.id.trim().length) {
      return false;
    }

    if (!com.text || typeof com.text !== 'string' || com.text.length > 280 || !com.text.trim().length) {
      return false;
    }

    if (!com.createdAt || !(com.createdAt instanceof Date)) {
      return false;
    }

    if (!com.author || typeof com.author !== 'string' || !com.author.trim().length) {
      return false;
    }

    return true;
  }
}

class Task {
  constructor(name, description, assignee, status, priority, isPrivate) {
    this._id = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this._createdAt = new Date();
    this.assignee = assignee;
    this.status = status;
    this.priority = priority;
    this.isPrivate = isPrivate;
    this.comments = [];
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  static validate(task) {
    if (!task.id || typeof task.id !== 'string' || !task.id.trim().length) {
      return false;
    }

    if (!task.name || typeof task.name !== 'string' || task.name.length > 100 || !task.name.trim().length) {
      return false;
    }

    if (!task.description || typeof task.description !== 'string' || task.description.length > 280 || !task.description.trim().length) {
      return false;
    }

    if (!task.createdAt || !(task.createdAt instanceof Date)) {
      return false;
    }

    if (!task.assignee || typeof task.assignee !== 'string' || !task.assignee.trim().length) {
      return false;
    }

    if (!task.status || (task.status !== 'To Do' && task.status !== 'In progress' && task.status !== 'Complete')) {
      return false;
    }

    if (!task.priority || (task.priority !== 'High' && task.priority !== 'Medium' && task.priority !== 'Low')) {
      return false;
    }

    if (typeof task.isPrivate !== 'boolean') {
      return false;
    }

    return (Array.isArray(task.comments) && task.comments
      .every((comment) => Comment.validate(comment)));
  }
}

class TaskCollection {
  _user = 'Aleksey';

  constructor(tasks) {
    this._tasks = tasks || [];
  }

  get user() {
    return this._user;
  }

  set user(value) {
    this._user = value;
  }

  get tasks() {
    return this._tasks;
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    let filteredTasks = this._tasks.slice();

    if (filterConfig.assignee) {
      filteredTasks = filteredTasks.filter(({ assignee }) => assignee
        .toLowerCase().trim().includes(filterConfig.assignee.toLowerCase().trim()));
    }

    if (filterConfig.description) {
      filteredTasks = filteredTasks.filter(({ description }) => description
        .toLowerCase().trim().includes(filterConfig.description.toLowerCase().trim()));
    }

    if (filterConfig.dateFrom) {
      filteredTasks = filteredTasks.filter(({ createdAt }) => createdAt >= filterConfig.dateFrom);
    }

    if (filterConfig.dateTo) {
      filteredTasks = filteredTasks.filter(({ createdAt }) => createdAt <= filterConfig.dateTo);
    }

    if (filterConfig.status) {
      filteredTasks = filteredTasks.filter(({ status }) => status === filterConfig.status);
    }

    if (filterConfig.priority) {
      filteredTasks = filteredTasks.filter(({ priority }) => priority === filterConfig.priority);
    }

    if (filterConfig.isPrivate) {
      filteredTasks = filteredTasks.filter(({ isPrivate }) => isPrivate === filterConfig.isPrivate);
    }

    return filteredTasks.sort((a, b) => b.createdAt - a.createdAt).slice(skip, top + skip);
  }

  get(id) {
    try {
      if (typeof id !== 'string') {
        throw new Error('Invalid id');
      }

      const task = this._tasks.find((task) => task.id === id);

      if (!task) {
        return 'Task not found!';
      }
      return task;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  add(name, description, assignee, status, priority, isPrivate) {
    if (!this._user || this._user !== assignee) {
      return false;
    }

    const task = new Task(name, description, assignee, status, priority, isPrivate);

    if (!Task.validate(task)) {
      return false;
    }

    this._tasks.push(task);
    return true;
  }

  edit(id, name, description, assignee, status, priority, isPrivate) {
    const index = this._tasks.findIndex((task) => task.id === id);
    if (index === -1 || this._tasks[index].assignee !== this._user) {
      return false;
    }
    const task = Object.create(
      Object.getPrototypeOf(this._tasks[index]),
      Object.getOwnPropertyDescriptors(this._tasks[index]),
    );

    task.name = name || task.name;
    task.description = description || task.description;
    task.priority = priority || task.priority;
    task.assignee = assignee || task.assignee;
    task.status = status || task.status;
    task.isPrivate = isPrivate || task.isPrivate;

    if (!Task.validate(task)) {
      return false;
    }

    this._tasks[index] = task;

    return true;
  }

  remove(id) {
    const index = this._tasks.findIndex((task) => task.id === id);
    const task = this.get(id);
    if (!task || task.assignee !== this._user) {
      return false;
    }
    this._tasks.splice(index, 1);
    return true;
  }

  addComment(id, text) {
    const task = this.get(id);
    const comment = new Comment(text, this._user);
    if (!Comment.validate(comment) || !task) {
      return false;
    }
    task.comments.push(comment);
    return true;
  }

  addAll(tasks) {
    return tasks.reduce((prev, curr) => {
      if (!Task.validate(curr)) {
        prev.push(curr);
      } else {
        this._tasks.push(curr);
      }
      return prev;
    }, []);
  }

  clear() {
    this._tasks = [];
  }
}

const newTask = new Task('Новое задание', 'Новое описание', 'Vova', 'Complete', 'Low', true);
console.log(newTask);
console.log('Валидация задачи:', Task.validate(newTask));
console.log('Попытка смены id у задачи на', newTask.id = '10');
console.log('Что вышло:', newTask.id);

const newCom = new Comment('Good Job!', 'Nikita');
console.log(newCom);
console.log('Валидация комментариев:', Comment.validate(newCom));

const newCollection = new TaskCollection();
console.log('созданный newCollection без передачи массива задач:', newCollection);
const newCollectionWithArrayTasks = new TaskCollection(tasks);
console.log('созданный newCollection c передачей массива задач:', newCollectionWithArrayTasks);

console.log('getPage():', newCollectionWithArrayTasks.getPage());
console.log('getPage(2,10):', newCollectionWithArrayTasks.getPage(2, 10));
console.log('getPage(0,30, { assignee: "Aleksey" }):', newCollectionWithArrayTasks.getPage(0, 30, { assignee: 'Aleksey' }));
console.log('getPage(0,30, { assignee: "bo",description:"ta" }):', newCollectionWithArrayTasks.getPage(0, 30, { description: 'ta', assignee: 'bo' }));

console.log('get("12")', newCollectionWithArrayTasks.get('12'));
console.log('Id не строка:\n');
console.log('get(12)', newCollectionWithArrayTasks.get(12));
console.log('get("123")', newCollectionWithArrayTasks.get('123'));

console.log('add task:', newCollection.add('newTask', 'New Description', 'Aleksey', 'Complete', 'Low', true));
console.log(newCollection.getPage());
console.log('add task:', newCollection.add('newTask', 'New Description', 'Vanya', 'Complete', 'Low', true));
console.log(newCollection.getPage());

console.log('edit task:', newCollection.edit('22', 'Я изменил задачу'));
console.log(newCollection.get('22'));
console.log('edit invalid task:', newCollection.edit('23', 'Я изменил задачу'));
console.log(newCollection.getPage());
console.log('edit task с новым автором:', newCollection.edit('22', 'Я изменил задачу2', 'Новое описание', 'Bob'));
console.log(newCollection.getPage());
console.log('edit task, где юзеры задачи и создателя не совпадают:', newCollection.edit('22', 'Я изменил задачу3', 'Новое описание2'));
console.log(newCollection.getPage());

console.log('remove(авторы отличаются)', newCollection.remove('22'));
console.log(newCollection.getPage());
console.log('Сменил юзера', newCollection.user = 'Bob');
console.log('remove', newCollection.remove('22'));
console.log(newCollection.getPage());

console.log('addAll невалидные:', newCollection.addAll(invalidTasksTest));
console.log('Коллекция после addAll:', newCollection.getPage());

console.log('clear:', newCollection.clear());
console.log('после clear:', newCollection.getPage());
