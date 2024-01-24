import { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoForm = (props) => {
  // {} = props;
  const [toDo, setToDo] = useState('');
  const [list, setList] = useState([]);
  const [finish, setFinish] = useState(false);
  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    const newToDo = { toDo, finish: finish };
    setList((currentToDos) => [...currentToDos, newToDo]);
    setToDo('');
  };

  const handleComplete = (index) => {
    setList((currentToDos) => {
      const updatedList = [...currentToDos];
      updatedList[index].finish = true;
      const finalList = updatedList.filter((item) => item.finish === false);

      return finalList;
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="할 일 입력" />
        <button>입력 완료</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <ToDoItem key={index} onClick={() => handleComplete(index)} item={item} index={index} />
        ))}
      </ul>
    </>
  );
};

export default ToDoForm;
