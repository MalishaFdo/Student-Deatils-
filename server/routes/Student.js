import express from 'express';
import { getStudents, createStudent, deleteStudent } from '../controllers/Student.js';
import Student from '../models/Student.js';
const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);

export default router;