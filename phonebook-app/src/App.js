// src/App.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

// Componente stilizate
const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

const Title = styled.h1 `
  font-size: 36px;
  color: #333;
`;

const Section = styled.section `
  width: 100%;
  max-width: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

// Aplicația principală
function App() {
    const [contacts, setContacts] = useState(() => {
        // Preluăm contactele din localStorage la inițializare
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : [];
    });
    const [filter, setFilter] = useState('');

    // Salvăm contactele în localStorage la fiecare schimbare
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleAddContact = (name, number) => {
        const newContact = {
            id: Date.now().toString(), // Generăm un ID simplu
            name,
            number,
        };

        // Verificăm dacă contactul există deja
        const isDuplicate = contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );
        if (isDuplicate) {
            alert(`${name} is already in contacts.`);
            return;
        }

        setContacts(prevContacts => [...prevContacts, newContact]);
    };

    const handleDeleteContact = contactId => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
    };

    const handleFilterChange = event => {
        setFilter(event.target.value);
    };

    // Filtrăm contactele după textul din filtru
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return ( <
        AppContainer >
        <
        Title > Phonebook < /Title> <
        Section >
        <
        ContactForm onAddContact = { handleAddContact }
        /> <
        Filter value = { filter }
        onChange = { handleFilterChange }
        /> <
        ContactList contacts = { filteredContacts }
        onDeleteContact = { handleDeleteContact }
        /> <
        /Section> <
        /AppContainer>
    );
}

export default App;