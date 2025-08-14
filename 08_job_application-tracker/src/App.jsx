import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import JobDetails from './pages/JobDetails';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddJob />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
        <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
    </Router>
    
    // <div className='bg-black'>
    //   <h1 className='text-black'>Hello world</h1>
    // </div>

  );
}
export default  App;
// import { useState } from 'react';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   const addTodo = () => {
//     if (!input.trim()) return;
//     setTodos([...todos, { id: Date.now(), text: input, done: false }]);
//     setInput('');
//   };

//   const toggleDone = (id) => {
//     setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div className="p-8 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
//       <div className="flex gap-2 mb-4">
//         <input
//           className="border p-2 flex-1"
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           placeholder="Enter task"
//         />
//         <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
//       </div>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id} className="flex justify-between items-center mb-2">
//             <span
//               onClick={() => toggleDone(todo.id)}
//               className={`cursor-pointer ${todo.done ? 'line-through text-gray-500' : ''}`}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => deleteTodo(todo.id)} className="text-red-600">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
