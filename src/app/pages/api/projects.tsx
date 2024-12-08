import db from '../../knexfile'; 

import type { NextApiRequest, NextApiResponse } from 'next';

// Define the type for a User object
interface Project {
  id: number;
  name: string;
  content: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const project: Project[] = await db('project').select('*');
    res.status(200).json(project);  // Return the result as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}