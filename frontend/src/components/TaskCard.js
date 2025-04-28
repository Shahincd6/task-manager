import API from '../services/api';

const TaskCard = ({ task, fetchTasks }) => {
  const handleComplete = async () => {
    try {
      await API.put(`/tasks/${task.id}`, { ...task, status: 'Completed' });
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await API.delete(`/tasks/${task.id}`);
        fetchTasks();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-sm mt-2">Priority: {task.priority}</p>
        <p className={`text-sm mt-1 ${task.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
          Status: {task.status}
        </p>

        {/* Show Dates */}
        <p className="text-xs text-gray-500 mt-2">
          Created At: {new Date(task.createdAt).toLocaleDateString()}
        </p>

        {task.completedAt && (
          <p className="text-xs text-green-600 mt-1">
            Completed At: {new Date(task.completedAt).toLocaleDateString()}
          </p>
        )}
      </div>

      <div className="flex space-x-2 mt-4">
        {task.status !== 'Completed' && (
          <button onClick={handleComplete} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
            Complete
          </button>
        )}
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
