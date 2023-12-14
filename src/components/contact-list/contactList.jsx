import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectFilter,
  selectIsLoading,
  selectUsers,
} from 'redux/contacts/selectors';
import Loader from '../loader/loader';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';

import { Button } from '@chakra-ui/react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const usersFromStore = useSelector(selectUsers);

  const filteredUsers = usersFromStore.filter(user =>
    user.name.toUpperCase().includes(filter.toUpperCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && <Loader />}
      {isLoading ||
        filteredUsers.map(contact => {
          const { name, number, id } = contact;
          return (
            <li key={id}>
              {name}: {number}
              <Button
                colorScheme="blackAlpha"
                type="button"
                onClick={() => handleDelete(id)}
              >
                Delete
              </Button>
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
  usersFromStore: PropTypes.object,
  isLoading: PropTypes.bool,
  filter: PropTypes.string,
  filteredUsers: PropTypes.object,
  dispatch: PropTypes.func,
};
