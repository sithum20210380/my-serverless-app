import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const APIURL = 'https://v7h8e4mel6.execute-api.ap-south-1.amazonaws.com/prod/';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    const columns = [
        {
            title: 'Student ID',
            dataIndex: 'studentId',
            key: 'studentId',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];

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
            <Table dataSource={students} columns={columns} rowKey="studentId" />
        </div>
    );
};

export default StudentList;

