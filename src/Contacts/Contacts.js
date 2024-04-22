import React, { useState, useEffect } from "react";
import AddContact from "./AddContact/AddContact";
import styles from "./contact.modules.css";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setContacts(data));
    }, []);

    const handleDeleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const handleAddContact = (newContact) => {
        newContact.id = contacts.length + 1;
        setContacts([...contacts, newContact]);
        setShowAddForm(false);
    };

    const handleShowAddForm = () => {
        setShowAddForm(true);
    };

    const handleCloseForm = () => {
        setShowAddForm(false);
    };

    return (
        <div className="container">
            <h1>ДЗ 39. Контакти</h1>
            <h2>Список контактів</h2>
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Прізвище</th>
                    <th>Ім'я</th>
                    <th>Номер телефону</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact, index) => (
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button
                                onClick={() => handleDeleteContact(contact.id)}
                                className="delete"
                            >
                                X
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={handleShowAddForm} className="addContact">
                Додати новий контакт
            </button>
            {showAddForm && <AddContact onAddContact={handleAddContact} onClose={handleCloseForm}/>}
        </div>
    );
}

export default Contacts;

