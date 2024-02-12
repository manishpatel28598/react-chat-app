import { useEffect, useState } from 'react';
import './App.css';
import { getDatabase, push, ref, set,onChildAdded} from "firebase/database";

function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([])
  const [msg, setMsg] = useState('');

const db = getDatabase();
const chatListRef = ref(db, 'chats');

useEffect(()=>{
  onChildAdded(chatListRef, (snapshot) => {
    setChats(chats=>[...chats, snapshot.val()])
  });
},[])
  const sendChat = ()=>{
const chatRef = push(chatListRef);
set(chatRef, {
    name, message: msg
});
   
    setMsg('')
  }
  return (
    <div>
      {name?null:<div>
        <input type="text" placeholder="enter name to start" onBlur={e=>setName(e.target.value)}></input>
      </div>}
      {name?<div>
     <h3>User: {name}</h3>
     {chats.map((c)=><div key={c.id} className='chat-container'>
      <div className={`container ${c.name===name ? 'me':'' }`}>
      <p className='chatbox'>
        <strong>{c.name}: </strong>
        <span>{c.message}: </span>
      </p>
      </div>

     </div>)}
     <div className='btm'>
      <input type="text" onInput={e=>setMsg(e.target.value)} value={msg} placeholder="enter your chat"></input>
      <button onClick={e=>sendChat()}>Send</button>
     </div>
      </div>:null}
    </div>
  );
}

export default App;
