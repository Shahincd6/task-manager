import prisma from '../models/prismaClient.js';

// Get all tasks of logged-in user
export const getTasks = async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: { userId: req.user.id },
    orderBy: { createdAt: 'desc' }
  });
  res.json(tasks);
};

// Create new task
export const createTask = async (req, res) => {
  const { title, description, priority } = req.body;

  const task = await prisma.task.create({
    data: {
      title,
      description,
      priority: priority || 'Low',
      userId: req.user.id,
    },
  });

  res.status(201).json(task);
};


export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;
  
    let updateData = { title, description, status, priority };
  
    if (status === 'Completed') {
      updateData.completedAt = new Date();
    }
  
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: updateData,
    });
  
    res.json(task);
  };
  
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await prisma.task.delete({
    where: { id: Number(id) },
  });

  res.json({ message: 'Task deleted successfully' });
};
