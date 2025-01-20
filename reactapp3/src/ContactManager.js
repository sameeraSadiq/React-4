import React, { useState, useEffect } from "react";
import axios from "axios";

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const userEmail = localStorage.getItem("userEmail");

  // Fetch contacts and user data on page load
  useEffect(() => {
    fetchContacts();
    fetchUser();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "http://localhost/backend reactapp3/contactManager.php?action=get_contacts"
      );
      setContacts(response.data.contacts || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost/backend reactapp3/contactManager.php?action=get_user"
      );
      setUser(response.data.email);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const addContact = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost/backend reactapp3/contactManager.php?action=add_contact",
        { name, email }
      );
      setName("");
      setEmail("");
      fetchContacts();
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  return (
    <div className="contact-manager">
      <div className="header">
        <h1>Contact Manager</h1>
        <div className="user-info">
          <span>Welcome, {userEmail}</span>
        </div>
      </div>

      <form onSubmit={addContact} className="add-contact-form">
        <h2>Add Contact</h2>
        <input
          type="text"
          placeholder="Enter contact's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter contact's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add Contact</button>
      </form>

      <h2>My Contacts</h2>
      <ul className="contacts-list">
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>{contact.name}</strong> - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactManager;
