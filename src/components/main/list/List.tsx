import { RemindDoc } from "@/models/remind";
import EditBtn from "./editBtn/EditBtn";
import DelBtn from "./delBtn/DelBtn";

interface ListProps {
  task: RemindDoc;
}

const List: React.FC<ListProps> = ({ task }) => {
  return (
    <div className="pl-4 py-4 grid grid-cols-custom gap-4 border-b-2 border-gray-300">
      <div>{task.company}</div>
      <div>{task.startDate}</div>
      <div>{task.endDate}</div>
      <div>{task.content}</div>
      <EditBtn id={task._id} />
      <DelBtn id={task._id} />
    </div>
  );
};

export default List;
