/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

const statusTask = {
  toDo: 'To Do',
  inProgress: 'In progress',
  complete: 'Complete',
};

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
    assignee: 'Lesha',
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
    assignee: 'Lesha',
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
  {
    id: '23',
    name: 'Task 23',
    description: 'Description for Task 23',
    createdAt: new Date('2023-04-10'),
    assignee: 'Aleksey',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [],
  },
  {
    id: '24',
    name: 'Task 24',
    description: 'Description for Task 24',
    createdAt: new Date('2023-01-20'),
    assignee: 'Aleksey',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [],
  },
  {
    id: '25',
    name: 'Task 25',
    description: 'Description for Task 25',
    createdAt: new Date('2023-01-20'),
    assignee: 'Jane',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [],
  },
  {
    id: '26',
    name: 'Task 26',
    description: 'Description for Task 26',
    createdAt: new Date('2023-01-20'),
    assignee: 'Jane',
    status: 'In progress',
    priority: 'Medium',
    isPrivate: true,
    comments: [],
  },
  {
    id: '27',
    name: 'Task 27',
    description: 'Description for Task 27',
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

  set id(value) {
    throw new Error('Cannot modify read-only property');
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    throw new Error('Cannot modify read-only property');
  }

  get author() {
    return this._author;
  }

  set author(value) {
    throw new Error('Cannot modify read-only property');
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

  set id(value) {
    throw new Error('Cannot modify read-only property');
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    throw new Error('Cannot modify read-only property');
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
  _user = '';

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

  set tasks(arrayTasks) {
    if (!Array.isArray(arrayTasks)) {
      throw new Error('tasks must be an array');
    }
    this._tasks = arrayTasks;
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    let filteredTasks = this.tasks.slice();

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

    if (filterConfig.isPrivate !== undefined) {
      filteredTasks = filteredTasks.filter(({ isPrivate }) => isPrivate === filterConfig.isPrivate);
    }

    return filteredTasks.sort((a, b) => b.createdAt - a.createdAt).slice(skip, top + skip);
  }

  get(id) {
    try {
      if (typeof id !== 'string') {
        throw new Error('Invalid id');
      }

      const task = this.tasks.find((task) => task.id === id);

      if (!task) {
        return null;
      }
      return task;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  add(name, description, assignee, status, priority, isPrivate) {
    if (!this.user || this.user !== assignee) {
      return false;
    }

    const task = new Task(name, description, assignee, status, priority, isPrivate);

    if (!Task.validate(task)) {
      return false;
    }

    this.tasks.push(task);
    return true;
  }

  edit(id, name, description, assignee, status, priority, isPrivate) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index === -1 || this.tasks[index].assignee !== this.user) {
      return false;
    }
    const task = Object.create(
      Object.getPrototypeOf(this.tasks[index]),
      Object.getOwnPropertyDescriptors(this.tasks[index]),
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

    this.tasks[index] = task;

    return true;
  }

  remove(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    const task = this.get(id);
    if (!task || task.assignee !== this.user) {
      return false;
    }
    this.tasks.splice(index, 1);
    return true;
  }

  addComment(id, text) {
    const task = this.get(id);
    const comment = new Comment(text, this.user);
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
        this.tasks.push(curr);
      }
      return prev;
    }, []);
  }

  clear() {
    this.tasks = [];
  }
}

class HeaderView {
  constructor(containerId) {
    this.container = document.querySelector(containerId);
  }

  display(user) {
    const userName = document.querySelector('.header__user-name');
    const avatar = document.querySelector('.header__user-avatar');
    const buttonHeader = document.querySelector('.user-info>button');
    const buttonAddTask = document.querySelector('.button-add-task');

    if (user) {
      userName.textContent = user;

      avatar.hidden = false;

      buttonHeader.textContent = 'Exit';
      if (buttonAddTask) {
        buttonAddTask.hidden = false;
      }
    } else {
      userName.textContent = null;

      avatar.hidden = true;

      buttonHeader.textContent = 'Log In';

      buttonAddTask.hidden = true;
    }
  }
}

class TaskFeedView {
  constructor(containerId) {
    this.container = document.querySelector(containerId);
    this.limit = 10;
  }

  display(array, user) {
    this.user = user;
    if (this.container === null) {
      return false;
    }

    document.querySelectorAll('.list-task__add').forEach((btn) => {
      btn.hidden = !this.user;
    });

    const listsTasks = this.container.querySelectorAll('.list-task');
    const [listTasksToDo, listTasksInProgress, listTasksComplete] = listsTasks;
    const btnLoad = document.querySelector('.btn-load');
    btnLoad.disabled = true;

    const taskFilter = array.reduce((acc, curr) => {
      if (!(curr.status in acc)) {
        acc[curr.status] = [];
      }
      acc[curr.status].push(curr);
      return acc;
    }, {});

    this.createListTask(listTasksToDo, taskFilter[statusTask.toDo]);
    this.createListTask(listTasksInProgress, taskFilter[statusTask.inProgress]);
    this.createListTask(listTasksComplete, taskFilter[statusTask.complete]);

    Object.values(taskFilter).forEach((arr) => {
      if (arr.length > this.limit) {
        btnLoad.disabled = false;
      }
    });
    return true;
  }

  createListTask(listTask, arrayTasks) {
    listTask.innerHTML = arrayTasks.map((elem) => `
    <div class="task-card" data-id =${elem.id}>
      <div class="task-card__header">
          <div class="task-card__title-date">
              <div class="task-card__title-privacy">
                ${elem.isPrivate ? '<img src="assets/img/private.svg" alt="private">' : ''}
                <h3 class="task-card__title">${elem.name}</h3>
              </div>
              <span class="task-card__date">${elem.createdAt.toLocaleString()}</span>
          </div>
          <div class="task-card__user-message">
              <span class="task-card__user-name">${elem.assignee}</span>
              <div class="task-card__message">
                  <span class="count-message">${elem.comments.length}</span>
                  <img src='assets/img/message.svg' alt='message-icon'
                      class="image-message"></img>
              </div>
          </div>
      </div>
      <div class="task-card__info">
      ${elem.description}
      </div>
      <div class="task-card__additional">
          <div class="task-card__status task-card__title">${elem.status}</div>
          <div class="task-card__progress ${elem.priority.toLowerCase()}-status">${elem.priority}</div>
      </div>
      ${this.user === elem.assignee ? `<span class="line"></span>
      <div class="task-card__buttons">
          <button class="task-card__button button">edit</button>
          <button class="task-card__button button btn-delete">delete</button>
      </div>` : ''}
  </div>`).slice(0, this.limit).join('\n');
  }

  newLimit() {
    this.limit += 10;
  }
}

class TaskView {
  constructor(containerId) {
    this.container = document.querySelector(containerId);
  }

  display(task) {
    this.container.innerHTML = `
    <div class="task-page__task-card task-card">
      <div class="task-page__btn-link"><a class="task-page__link" href="main.html">&#8656; Return back</a>
        <div class="task-card__buttons">
            <button class="task-page__btn task-card__button button">edit</button>
            <button class="task-page__btn task-card__button button">delete</button>
        </div>
    </div>
    <div class="task-card__header">
        <div class="task-card__title-date">
            <div class="task-card__title-privacy">
                <h3 class="task-page__title task-card__title">${task.name}</h3>
                <div class="image-privacy"></div>
            </div>
            <span class="task-card__date">${task.createdAt.toLocaleString()}</span>
        </div>
        <span class="task-card__user-name">${task.assignee}</span>
    </div>
    <div class="task-page__info task-card__info">
    ${task.description}
    </div>
    <div class="task-card__additional">
        <div class="task-page__subtitle task-card__status task-card__title">${task.status}</div>
        <div class="task-card__progress low-status">${task.priority}</div>
    </div>
    <span class="line"></span>
</div>
<div class="comments">
  <h3 class="task-page__subtitle task-card__title">Comments</h3>
    <div class="comments-field">${task.comments.map((elem) => `<div class="comment-card">
      <div class="comment__header">
        <span class="comment__user-name">${elem.author}</span>
        <span class="comment__date">${elem.createdAt.toLocaleString()}</span>
      </div>
      <span class="comment-text">${elem.text}</span>
      </div>`).join('\n')}<div class="add-comment">
        <input class='input-comment' type="text">
        <button class="button">SEND</button>
      </div>
    </div>
  </div>`;
  }
}

class TasksController {
  constructor(collection, header, taskFeed, taskView) {
    this.collection = collection;
    this.header = header;
    this.taskFeed = taskFeed;
    this.taskView = taskView;
  }

  setCurrentUser(user) {
    this.collection.user = user;
    this.header.display(user);
    this.getFeed();
  }

  getFeed(skip = 0, top = this.collection.tasks.length, filterConfig = {}) {
    if (!this.collection.user) {
      filterConfig = { isPrivate: false };
    }
    const arr = this.collection.getPage(skip, top, filterConfig);
    this.taskFeed.display(arr, this.collection.user);
  }

  addTask() {
    const name = document.querySelector('#name').value;
    const assignee = document.querySelector('#assignee').value;
    const description = document.querySelector('#description').value;
    const status = document.querySelector('#status').value;
    const priority = document.querySelector('#priority').value;
    const isPrivate = Boolean(document.querySelector('#isPrivate').value);
    const add = this.collection.add(
      name,
      description,
      assignee,
      status,
      priority,
      isPrivate,
    );
    if (add) {
      this.getFeed();
    }
  }

  editTask(id, task) {
    this.collection.edit(
      id,
      task.name,
      task.description,
      task.assignee,
      task.status,
      task.priority,
      task.isPrivate,
    );
    this.getFeed();
  }

  removeTask(id) {
    this.collection.remove(id);
    this.getFeed();
  }

  showTask(id) {
    document.querySelector('.board').style.display = 'none';
    document.querySelector('.features').style.display = 'none';
    this.taskView.display(this.collection.get(id));
  }
}

const collection = new TaskCollection(tasks);
const header = new HeaderView('.header');
const taskFeed = new TaskFeedView('.board');
const taskView = new TaskView('.task-page');

const controller = new TasksController(collection, header, taskFeed, taskView);

controller.setCurrentUser('Aleksey');

document.querySelectorAll('.list-task').forEach((list) => {
  list.addEventListener('click', (e) => {
    const taskCard = e.target.closest('.task-card');
    if (controller.collection.user) {
      if (e.target.closest('.btn-delete')) {
        controller.removeTask(taskCard.dataset.id);
        return;
      }
      if (taskCard) {
        controller.showTask(taskCard.dataset.id);
      }
    }
  });
});

const popup = document.querySelector('.popup');

document.querySelectorAll('.list-task__add').forEach((btn) => {
  btn.addEventListener('click', () => {
    popup.classList.add('open');
    document.querySelector('#assignee').setAttribute('value', controller.collection.user);
  });
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('open');
  }
});

const formCreate = document.querySelector('.popup__body');
formCreate.addEventListener('submit', (e) => {
  e.preventDefault();
  controller.addTask();
  formCreate.reset();
});

document.querySelector('.btn-load').addEventListener('click', () => {
  taskFeed.newLimit();
  controller.getFeed();
});
