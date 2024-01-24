import { useState } from 'react';
function App() {
  const [toDo, setToDo] = useState();
  const [list, setList] = useState([]);
  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDo('');
    setList((currentToDos) => [toDo, ...currentToDos]);
  };
  console.log('list', list);

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="할 일 입력" />
        <button>입력 완료</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
