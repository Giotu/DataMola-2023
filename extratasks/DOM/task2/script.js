function createList(title, list) {
  const heading = document.createElement('h2');
  heading.textContent = title;

  const listContainer = document.createElement('ul');

  function createListItem(li) {
    const listItem = document.createElement('li');
    listItem.textContent = li.value;

    if (li.children && li.children.length > 0) {
      const subListContainer = document.createElement('ul');
      li.children.forEach((item) => {
        const subListItem = createListItem(item);
        subListContainer.style.fontSize = '0.9em';
        subListContainer.append(subListItem);
      });
      listItem.append(subListContainer);
    }

    return listItem;
  }

  list.forEach((element) => {
    listContainer.append(createListItem(element));
  });

  document.body.append(heading);
  document.body.append(listContainer);
}

createList('list', [

  {
    value: 'Пункт 1.',
    children: null,
  },

  {

    value: 'Пункт 2.',
    children: [
      {
        value: 'Подпункт 2.1.',
        children: null,
      },
      {
        value: 'Подпункт 2.2.',
        children: [
          {
            value: 'Подпункт 2.2.1.',
            children: null,
          },
          {
            value: 'Подпункт 2.2.2.',
            children: null,
          },
        ],
      },
      {
        value: 'Подпункт 2.3.',
        children: null,
      },
    ],
  },
  {
    value: 'Пункт 3.',
    children: null,
  },
]);
