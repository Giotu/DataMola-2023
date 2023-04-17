/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
const statusTask = {
  toDo: 'To Do',
  inProgress: 'In progress',
  complete: 'Complete',
};

function formattingDate(badformatDate) {
  const date = new Date(badformatDate);
  function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
  }
  const formattedDate = `${addLeadingZero(date.getDate())}.${addLeadingZero(date.getMonth() + 1)}.${date.getFullYear()} 
  ${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}:${addLeadingZero(date.getSeconds())}`;

  return formattedDate;
}

class TaskFeedApiService {
  constructor(serverUrl) {
    this.serverUrl = serverUrl;
    this._tasks = [];
    this.user = '';
    this.token = '';
  }

  get tasks() {
    return this._tasks;
  }

  set tasks(tasks) {
    this._tasks = tasks;
  }

  async getTasks() {
    try {
      const res = await fetch(`${this.serverUrl}/tasks`);
      const json = await res.json();
      this.tasks = json;
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  async getTask(id) {
    try {
      const res = await fetch(`${this.serverUrl}/tasks/${id}`);
      const json = await res.json();
      if (!res.ok) {
        return res;
      }
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTask(id) {
    try {
      const res = await fetch(`${this.serverUrl}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      });
      const json = await res.json();
      if (res.ok) {
        console.log(res.ok);
      }
      return json;
    } catch (error) {
      console.log(error);
    }
  }

  async login(data) {
    try {
      const res = await fetch(`${this.serverUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        this.user = json.login;
        this.token = json.token;
      }
      return json;
    } catch (error) {
      console.log(error);
    }
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
            <span class="task-card__date">${formattingDate(elem.createdAt)}</span>
        </div>
        <div class="task-card__user-message">
            <span class="task-card__user-name">${elem.assignee.login}</span>
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
    ${this.user === elem.assignee.login ? `<span class="line"></span>
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
          <span class="task-card__date">${formattingDate(task.createdAt)}</span>
      </div>
      <span class="task-card__user-name">${task.assignee.login}</span>
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
      <span class="comment__user-name">${elem.creator.login}</span>
      <span class="comment__date">${formattingDate(elem.createdAt)}</span>
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
  constructor(collection, headerView, taskFeed, taskView) {
    this.api = collection;
    this.headerView = headerView;
    this.taskFeed = taskFeed;
    this.taskView = taskView;
  }

  async setCurrentUser(data) {
    await this.api.login(data);
    this.headerView.display(this.api.user);
    this.getFeed();
  }

  async getFeed() {
    await this.api.getTasks();
    if (!this.api.user) {
      this.api.tasks = this.api.tasks.filter((task) => task.isPrivate === false);
    }
    this.taskFeed.display(this.api.tasks, this.api.user);
  }

  async showTask(id) {
    document.querySelector('.board').style.display = 'none';
    document.querySelector('.btn-load').style.display = 'none';
    document.querySelector('.features').style.display = 'none';
    const res = await this.api.getTask(id);
    this.taskView.display(res);
  }

  async removeTask(id) {
    await this.api.deleteTask(id);
    this.getFeed();
  }
}

const api = new TaskFeedApiService('http://169.60.206.50:7777/api');
const headerView = new HeaderView('.header');
const taskFeed = new TaskFeedView('.board');
const taskView = new TaskView('.task-page');
const controller = new TasksController(api, headerView, taskFeed, taskView);
controller.setCurrentUser({
  login: 'Nikita',
  password: '12345A',
});
