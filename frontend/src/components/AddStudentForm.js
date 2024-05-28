import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'

const AddStudentForm = () => {
    const [studentId, setStudentId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            await axios.post('https://v7h8e4mel6.execute-api.ap-south-1.amazonaws.com/prod/', { studentId, name, email });
            console.log('Submitting Data:', { studentId, name, email });
            alert('Student added successfully');
            setStudentId('');
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error adding student:', error);
            alert('Error adding student');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text" placeholder="ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Adding..' : 'Add student'}
            </button>
        </form>
    );
};

export default AddStudentForm;
