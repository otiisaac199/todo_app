import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import styles from "./TaskItem.module.css";

export type TaskItemProps = {
  task: {
    name?: string;
    id?: number;
    checked?: boolean;
  };
};

const TaskItem = ({ task }: TaskItemProps) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div></div>
    </li>
  );
};

export default TaskItem;
