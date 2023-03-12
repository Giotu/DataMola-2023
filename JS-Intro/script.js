const tasks = [
    {
        id: "1",
        name: "Create homepage design",
        description: "Design a new homepage for our website",
        createdAt: new Date("2022-02-20"),
        assignee: "John",
        status: "To Do",
        priority: "High",
        isPrivate: false,
        comments: [
            {
                id: "1",
                text: "I can help with this, let me know what you need.",
                createdAt: new Date("2022-02-21"),
                author: "Jane",
            },
        ]
    },
    {
        id: "2",
        name: "Fix login form validation",
        description: "Update validation rules for login form",
        createdAt: new Date("2022-02-22"),
        assignee: "Mary",
        status: "In progress",
        priority: "Medium",
        isPrivate: false,
        comments: [
            {
                id: "1",
                text: "I noticed this issue too, glad it's being fixed.",
                createdAt: new Date("2022-02-23"),
                author: "Bob",
            },
            {
                id: "2",
                text: "Can you add a unit test for this?",
                createdAt: new Date("2022-02-24"),
                author: "Alice",
            },
        ]
    },
    {
        id: "3",
        name: "Update product pricing",
        description: "Adjust pricing for our products based on market research",
        createdAt: new Date("2022-02-25"),
        assignee: "John",
        status: "Complete",
        priority: "High",
        isPrivate: false,
        comments: []
    },
    {
        id: "4",
        name: "Add search feature",
        description: "Implement a search feature for our website",
        createdAt: new Date("2022-02-26"),
        assignee: "Mary",
        status: "To Do",
        priority: "Medium",
        isPrivate: false,
        comments: [
            {
                id: "1",
                text: "I think we should prioritize this, it will improve user experience.",
                createdAt: new Date("2022-02-27"),
                author: "Bob",
            },
        ]
    },
    {
        id: "5",
        name: "Refactor legacy code",
        description: "Clean up old code that is no longer used",
        createdAt: new Date("2022-02-28"),
        assignee: "John",
        status: "In progress",
        priority: "High",
        isPrivate: true,
        comments: []
    },
    {
        id: "6",
        name: "Optimize website performance",
        description: "Improve load times and overall performance of our website",
        createdAt: new Date("2022-03-01"),
        assignee: "Mary",
        status: "To Do",
        priority: "High",
        isPrivate: false,
        comments: [
            {
                id: "1",
                text: "I have some ideas for how we can approach this, let's discuss.",
                createdAt: new Date("2022-03-02"),
                author: "Bob",
            },
        ]
    },
    {
        id: "7",
        name: "Create user onboarding flow",
        description: "Design and implement a new user onboarding flow",
        createdAt: new Date("2022-03-03"),
        assignee: "John",
        status: "In progress",
        priority: "Medium",
        isPrivate: false,
        comments: [
            {
                id: "1",
                text: "I think we should focus on making this as simple and intuitive as possible.",
                createdAt: new Date("2022-03-04"),
                author: "Alice",
            },
        ]
    },
    {
        id: "8",
        name: "Update product descriptions",
        description: "Rewrite product descriptions to be more engaging and informative",
        createdAt: new Date("2022-03-05"),
        assignee: "Mary",
        status: "Complete",
        priority: "Low",
        isPrivate: false,
        comments: [
            {
                id: "1",
                text: "Looks great, thanks for putting in the effort to make these better.",
                createdAt: new Date("2022-03-06"),
                author: "Bob",
            },
        ]
    },
    {
        id: "9",
        name: "Add payment options",
        description: "Integrate additional payment options for our customers",
        createdAt: new Date("2022-03-07"),
        assignee: "John",
        status: "In progress",
        priority: "High",
        isPrivate: false,
        comments: []
    },
    {
        id: "21",
        name: "Task 11",
        description: "Description for Task 11",
        createdAt: new Date("2022-01-11"),
        assignee: "Aleksey",
        status: "In progress",
        priority: "Medium",
        isPrivate: false,
        comments: []
    },
    {
        id: "10",
        name: "Task 10",
        description: "Description for Task 10",
        createdAt: new Date("2022-01-10"),
        assignee: "John",
        status: "To Do",
        priority: "High",
        isPrivate: true,
        comments: []
    },
    {
        id: "11",
        name: "Task 11",
        description: "Description for Task 11",
        createdAt: new Date("2022-01-11"),
        assignee: "Aleksey",
        status: "In progress",
        priority: "Medium",
        isPrivate: false,
        comments: []
    },
    {
        id: "12",
        name: "Task 12",
        description: "Description for Task 12",
        createdAt: new Date("2022-01-12"),
        assignee: "Jane",
        status: "Complete",
        priority: "Low",
        isPrivate: true,
        comments: [
            {
                id: "1",
                text: "Comment 1 for Task 12",
                createdAt: new Date("2022-01-13"),
                author: "John",
            },
        ]
    },
    {
        id: "13",
        name: "Task 13",
        description: "Description for Task 13",
        createdAt: new Date("2022-01-13"),
        assignee: "John",
        status: "To Do",
        priority: "High",
        isPrivate: false,
        comments: [
            {
                id: "1",
                text: "Comment 1 for Task 13",
                createdAt: new Date("2022-01-14"),
                author: "Jane",
            },
            {
                id: "2",
                text: "Comment 2 for Task 13",
                createdAt: new Date("2022-01-15"),
                author: "John",
            },
        ]
    },
    {
        id: "14",
        name: "Task 14",
        description: "Description for Task 14",
        createdAt: new Date("2022-01-14"),
        assignee: "Jane",
        status: "In progress",
        priority: "Medium",
        isPrivate: true,
        comments: [
            {
                id: "1",
                text: "Comment 1 for Task 14",
                createdAt: new Date("2022-01-15"),
                author: "Bob",
            },
        ]
    },
    {
        id: "15",
        name: "Task 15",
        description: "Description for Task 15",
        createdAt: new Date("2022-01-15"),
        assignee: "John",
        status: "Complete",
        priority: "Low",
        isPrivate: false,
        comments: []
    },
    {
        id: "16",
        name: "Task 16",
        description: "Description for Task 16",
        createdAt: new Date("2022-01-16"),
        assignee: "Jane",
        status: "To Do",
        priority: "High",
        isPrivate: true,
        comments: [
            {
                id: "1",
                text: "Comment 1 for Task 16",
                createdAt: new Date("2022-01-17"),
                author: "Alice",
            },
            {
                id: "2",
                text: "Comment 2 for Task 16",
                createdAt: new Date("2022-01-18"),
                author: "Jane",
            },
        ]
    },
    {
        id: "17",
        name: "Task 17",
        description: "Description for Task 17",
        createdAt: new Date("2022-01-17"),
        assignee: "Aleksey",
        status: "In progress",
        priority: "Medium",
        isPrivate: false,
        comments: []
    },
    {
        id: "19",
        name: "Task 19",
        description: "Description for Task 19",
        createdAt: new Date("2022-01-19"),
        assignee: "Bob",
        status: "To Do",
        priority: "High",
        isPrivate: false,
        comments: [
            {
                id: "1",
                text: "Comment 1 for Task 19",
                createdAt: new Date("2022-01-20"),
                author: "Bob",
            },
            {
                id: "2",
                text: "Comment 2 for Task 19",
                createdAt: new Date("2022-01-21"),
                author: "Aleksey",
            },
        ],
    },
    {
        id: "20",
        name: "Task 20",
        description: "Description for Task 20",
        createdAt: new Date("2022-01-20"),
        assignee: "Jane",
        status: "In progress",
        priority: "Medium",
        isPrivate: true,
        comments: [],
    },
];

const taskModule = (function () {
    let user = 'Aleksey';

    function getTasks(skip = 0, top = 10, filterConfig = {}) {
        let filteredTasks = [...tasks];

        if (filterConfig.assignee) {
            filteredTasks = filteredTasks.filter(task =>
                task.assignee.toLowerCase().includes(filterConfig.assignee.toLowerCase().trim()));
        }

        if (filterConfig.description) {
            filteredTasks = filteredTasks.filter(task =>
                task.description.toLowerCase().includes(filterConfig.description.toLowerCase().trim()));
        }

        if (filterConfig.dateFrom) {
            filteredTasks = filteredTasks.filter(task =>
                task.createdAt >= filterConfig.dateFrom);
        }

        if (filterConfig.dateTo) {
            filteredTasks = filteredTasks.filter(task =>
                task.createdAt <= filterConfig.dateTo);
        }

        if (filterConfig.status) {
            filteredTasks = filteredTasks.filter(task =>
                task.status === filterConfig.status);
        }

        if (filterConfig.priority) {
            filteredTasks = filteredTasks.filter(task =>
                task.priority === filterConfig.priority);
        }

        if (filterConfig.isPrivate) {
            filteredTasks = filteredTasks.filter(task =>
                task.isPrivate === filterConfig.isPrivate);
        }

        return filteredTasks.sort((a, b) =>
            b.createdAt - a.createdAt).slice(skip, top + skip);
    }

    function getTask(id) {
        try {
            if (typeof id !== 'string') {
                throw new Error('Invalid id');
            }

            const task = tasks.find(task => task.id === id);

            if (!task) {
                console.log('Task not found!');
            }
            return task;
        } catch (error) {
            console.log(error);
        }
    }

    function validateTask(task) {
        if (!task.id || typeof task.id !== 'string' || !task.id.trim().length) {
            return false;
        }

        if (!task.name || typeof task.name !== 'string' || task.name.length > 100 || !task.name.trim().length) {
            return false;
        }

        if (!task.description || typeof task.description !== 'string' || task.description > 280 || !task.description.trim().length) {
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

        if (!Array.isArray(task.comments)) {
            return false;
        }
        return true;
    }

    function addTask(name, description, priority, assignee = user, status = 'To Do', isPrivate = false) {
        function getMaxIdTasks() {
            return Number(tasks.map(task => task.id).sort((a, b) => b - a)[0]);
        }

        let id = String(getMaxIdTasks() + 1);
        let createdAt = new Date();
        const comments = [];

        const task = {
            id,
            name,
            description,
            createdAt,
            assignee,
            status,
            priority,
            isPrivate,
            comments
        };

        if (!validateTask(task)) {
            return false;
        }

        tasks.push(task);
        return true;

    }

    function editTask(id, name, description, priority, assignee, status, isPrivate = false) {
        let task = { ...getTask(id) };
        let index = tasks.findIndex(task => task.id === id);

        if (task.assignee !== user) {
            return false;
        }

        task.name = name || task.name;
        task.description = description || task.description;
        task.priority = priority || task.priority;
        task.assignee = assignee || task.assignee;
        task.status = status || task.status;
        task.isPrivate = isPrivate || task.isPrivate;

        if (!validateTask(task)) {
            return false;
        }

        tasks[index] = task;

        return true;
    }

    function removeTask(id) {
        const index = tasks.findIndex(task => task.id === id);
        const task = getTask(id);
        if (!task) {
            return false;
        }
        if (task.assignee === user) {
            tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    function validateComment(com) {
        if (!com.id || typeof com.id !== 'string' || !com.id.trim().length) {
            return false;
        }

        if (!com.text || typeof com.text !== 'string' || com.text > 280 || !com.text.trim().length) {
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

    function addComment(id, text) {
        let task = getTask(id);
        const lastIdComment = String(task.comments.length + 1);
        const createdAt = new Date();
        const author = user;
        const comment = {
            id: lastIdComment,
            text,
            createdAt,
            author
        };

        if (!validateComment(comment)) {
            return false;
        }

        task.comments.push(comment);
        return true;
    }

    function changeUser(usr) {
        try {
            if (typeof usr !== 'string' || usr.trim().length === 0) {
                throw new Error('Invalid value');
            }
            this.user = usr;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        user,
        getTasks,
        getTask,
        validateTask,
        addTask,
        editTask,
        removeTask,
        validateComment,
        addComment,
        changeUser
    }

})();