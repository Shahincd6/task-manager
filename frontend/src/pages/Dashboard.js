import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTasks from '../hooks/useTasks';
import TaskCard from '../components/TaskCard';
import FilterBar from '../components/FilterBar';
import API from '../services/api';


const Dashboard = () => {
  const navigate = useNavigate();
  const { tasks, fetchTasks } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [filter, setFilter] = useState('All');

  const handleCreate = async () => {
    if (!title) return;
    try {
      await API.post('/tasks', { title, description, priority });
      setTitle('');
      setDescription('');
      setPriority('Low');
      fetchTasks();
    } catch (error) {
      alert(error.response.data.message || 'Failed to create task');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const filteredTasks = tasks.filter((task) =>
    filter === 'All' ? true : task.status === filter
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Tasks</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-2 mb-6">
        <input
          className="input"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="input"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button onClick={handleCreate} className="btn-primary">
          Add Task
        </button>
      </div>

      <FilterBar setFilter={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} fetchTasks={fetchTasks} />
        ))}
      </div>

      {tasks.length === 0 && (
        <p className="text-center text-gray-600 mt-6">No tasks yet. Create your first task!</p>
      )}
    </div>
  );
};

export default Dashboard;
