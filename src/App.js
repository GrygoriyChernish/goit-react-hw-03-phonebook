import React, { Component } from 'react';
import shortid from 'shortid';
import s from './App.module.css';

import Section from './UI/Section/Section';
import Container from './UI/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import Modal from './UI/Modal/Modal';
import IconButton from './UI/IconButton/IconButton';
import { ReactComponent as AddIcon } from './icons/businessman.svg';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };
  componentDidMount() {
    this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('Enter the correct number phone!');
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
    this.toggleModal();
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { filter, showModal } = this.state;
    const normalazidFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazidFilter),
    );
    return (
      <Section>
        <Container>
          <h1 className={s.Title}>Phonebook</h1>
          <p className={s.Text}>
            Add Contact:{' '}
            <IconButton
              onClick={this.toggleModal}
              aria-label="Добавить контакт"
            >
              <AddIcon width="30" height="30" />
            </IconButton>
          </p>

          {showModal && (
            <Modal onClose={this.toggleModal}>
              <ContactForm onSubmit={this.formSubmitHandler} />
            </Modal>
          )}
          <h2 className={s.Title}>Contacts</h2>
          <Filter filter={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Container>
      </Section>
    );
  }
}

export default App;
