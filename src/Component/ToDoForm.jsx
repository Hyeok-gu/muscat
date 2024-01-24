import { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoForm = (props) => {
  // {} = props;
  const [toDo, setToDo] = useState('');
  const [list, setList] = useState([]);
  const [finish, setFinish] = useState(false);
  const [completedList, setCompletedList] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    // finish 값을 넣는 새로운 ToDo 값으로 추가
    const newToDo = { toDo, finish: finish };
    setList((currentToDos) => [...currentToDos, newToDo]);
    setToDo('');
  };

  // 해당 아이템 finish 값 true로 변경
  const handleComplete = (index) => {
    setList((currentToDos) => {
      const updatedList = [...currentToDos];
      updatedList[index].finish = true;
      completed();
      return updatedList;
    });
  };

  //완료한 목록 담아내기
  const completed = () => {
    setCompletedList(list.filter((item) => item.finish === true));
  };

  // setCompletedList((currentToDos) => [...currentToDos, newToDo])

  console.log('list', list);
  console.log('completedList', completedList);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="할 일 입력" />
        <button>입력 완료</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <>{item.finish ? null : <ToDoItem key={index} onClick={() => handleComplete(index)} item={item} index={index} />}</>
        ))}
      </ul>
      <h2>할 일 : {list.length - completedList.length}</h2>
      <h2>완료한 일 : {completedList.length}</h2>
    </>
  );
};

export default ToDoForm;
