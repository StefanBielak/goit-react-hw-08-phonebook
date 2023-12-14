import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations';
import { selectUsers } from 'redux/contacts/selectors';

import { Button, Input } from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const usersFromStore = useSelector(selectUsers);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newName = form.elements.name.value;

    const sameName = usersFromStore.find(user => user.name === name);
    if (sameName === undefined) {
      dispatch(addContact({ name, number }));
    } else {
      alert(`${newName} is already in contacts`);
    }
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <>
          <h3>Name</h3>
          <Input
            w="300px"
            borderColor="telegram"
            size="xs"
            className="input--name"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => setName(e.target.value)}
          />
          <h3>Number</h3>
          <Input
            w="300px"
            borderColor="telegram"
            size="xs"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => setNumber(e.target.value)}
          />
          <Button
            w="200px"
            colorScheme="telegram"
            className="button--submit"
            type="submit"
          >
            Add contact
          </Button>
        </>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  dispatch: PropTypes.func,
  h3: PropTypes.string,
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
  newName: PropTypes.string,
  sameName: PropTypes.object,
};
