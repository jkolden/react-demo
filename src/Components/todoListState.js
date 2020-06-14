import { atom, selector } from "recoil";

const todoListState = atom({
  key: "todoListState",
  default: [
    {
      id: 100,
      text: "Walk the Dog",
      isComplete: false,
    },
    {
      id: 101,
      text: "Read the Newspaper",
      isComplete: false,
    },
    {
      id: 102,
      text: "Go to Work",
      isComplete: true,
    },
  ],
});

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(filteredTodoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

export {
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState,
};