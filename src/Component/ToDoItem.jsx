const ToDoItem = (props) => {
  const { index, item, onClick } = props;

  const handleCompleteClick = () => {
    onClick(index);
  };

  return (
    <li>
      {item.toDo} <button onClick={handleCompleteClick}>완료</button>
    </li>
  );
};
export default ToDoItem;
