import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import { Button, Input } from '@chakra-ui/react';

export const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
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
            autoComplete="username"
            className="input--name"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <h3>Email</h3>
          <Input
            w="300px"
            borderColor="telegram"
            size="xs"
            autoComplete="username"
            type="text"
            name="email"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h3>Password</h3>
          <Input
            w="300px"
            borderColor="telegram"
            size="xs"
            autoComplete="current-password"
            type="password"
            name="password"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button w="200px" colorScheme="telegram" type="submit">
            Register
          </Button>
        </>
      </form>
    </>
  );
};

Register.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  h3: PropTypes.string,
  onSubmit: PropTypes.func,
  dispatch: PropTypes.func,
};
