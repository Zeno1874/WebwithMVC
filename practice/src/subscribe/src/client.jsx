import fetch from 'unfetch';

export const getAllUsers = () => fetch('http://localhost:8080/users');
