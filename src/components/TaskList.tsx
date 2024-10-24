import TaskItem from "./TaskItem";

// styles
import styles from "./TaskList.module.css";

type TaskListProps = {
  tasks: {
    name?: string;
    id?: number;
    checked?: boolean;
  }[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.name} task={task} />
        ))}
    </ul>
  );
};

export default TaskList;
