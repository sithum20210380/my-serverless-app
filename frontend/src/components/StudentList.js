import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('YOUR_API_GATEWAY_URL/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        fetchStudents();
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.studentId}>
                        {student.name} - {student.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
