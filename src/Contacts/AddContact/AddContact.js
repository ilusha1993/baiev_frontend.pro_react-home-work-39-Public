import React, { useState } from "react";
import styles from "./addContact.modules.css";

function AddContact({ onAddContact, onClose }) {
    const [formContact, setFormContact] = useState({
        name: "",
        username: "",
        phone: "",
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormContact({ ...formContact, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            formContact.name.trim() === "" ||
            formContact.username.trim() === "" ||
            formContact.phone.trim() === ""
        ) {
            setError("Будь ласка, заповніть всі поля");
            return;
        }

        onAddContact(formContact);
        alert("Додано новий контакт!");
        setFormContact({ name: "", username: "", phone: "" });
        onClose();
    };

    const handleCancel = () => {
        setFormContact({ name: "", username: "", phone: "" });
        onClose();
    };

    return (
        <div className="contactContainer">
            <form className="formBlock" onSubmit={handleSubmit}>
                <h2>Додати новий контакт</h2>
                <div className="inputBlock">
                    <input
                        type="text"
                        name="name"
                        value={formContact.name}
                        onChange={handleChange}
                        placeholder="Прізвище"
                    />
                    <input
                        type="text"
                        name="username"
                        value={formContact.username}
                        onChange={handleChange}
                        placeholder="Ім'я"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formContact.phone}
                        onChange={handleChange}
                        placeholder="Номер телефону"
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <div className="buttonBlock">
                    <button className="buttonSubmit" type="submit">
                        Зберегти
                    </button>
                    <button className="buttonCancel" type="button" onClick={handleCancel}>
                        Скасувати
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddContact;
