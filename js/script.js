/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
const statusTask = {
  toDo: 'To Do',
  inProgress: 'In progress',
  complete: 'Complete',
};

function formattingDate(badDate) {
  const date = new Date(badDate);
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
    this.user = 'Masha';
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

class TasksController {
  constructor(collection, taskFeed) {
    this.api = collection;
    this.taskFeed = taskFeed;
  }

  async getFeed() {
    await this.api.getTasks();
    this.taskFeed.display(this.api.tasks, this.api.user);
  }
}

const api = new TaskFeedApiService('http://169.60.206.50:7777/api');
const taskFeed = new TaskFeedView('.board');
const controller = new TasksController(api, taskFeed);
controller.getFeed();
