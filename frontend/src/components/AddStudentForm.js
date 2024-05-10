import React, { useState } from 'react';
import axios from 'axios';

const AddStudentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('YOUR_API_GATEWAY_URL/students', { name, email });
            alert('Student added successfully');
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error adding student:', error);
            alert('Error adding student');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudentForm;
