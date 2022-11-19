import { useState } from 'react';
import { InputName, InputNumber } from '../Input/input';
import Title from '../Title/Title';
import Button from '../Button/Button';
import Notiflix from 'notiflix';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { addContact } from 'redux/operations.js';

export default function Form({ onSubmit }) {
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleInputChane = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const contact = { name, number };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title title="Name">
        <InputName name={name} onChange={handleInputChane} />
      </Title>

      <Title title="Number">
        <InputNumber number={number} onChange={handleInputChane} />
      </Title>
      <Button title="Add contact" />
    </form>
  );
}
