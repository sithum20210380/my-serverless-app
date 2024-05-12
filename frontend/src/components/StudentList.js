import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIURL = 'https://y7gs0ssz03.execute-api.ap-south-1.amazonaws.com/prod/';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(APIURL);
                console.log('Response:', response);
                const responseData = response.data.body; 
                const students = JSON.parse(responseData);
                console.log('Response Data:', students);
                setStudents(students);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        fetchStudents();
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            {students.length > 0 ? (
                <ul>
                    {students.map((student) => (
                        <li key={student.studentId}>
                            {student.name} - {student.email}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No students found</p>
            )}
        </div>
    );
};

export default StudentList;

