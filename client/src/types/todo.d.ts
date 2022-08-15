interface TodoTypes {
  title: string;
  content: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NewTodoTypes {
  title: string;
  content: string;
}

type ToDoList = TodoTypes[];

export { TodoTypes, ToDoList, NewTodoTypes };
