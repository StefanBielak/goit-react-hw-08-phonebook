import PropTypes from 'prop-types';

import { Input } from '@chakra-ui/react';

export const Filter = ({ filterFn }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <Input
        w="300px"
        borderColor="telegram"
        size="xs"
        type="text"
        className="find-contact"
        name="find-contact"
        onChange={filterFn}
      ></Input>
    </>
  );
};

Filter.propTypes = {
  h3: PropTypes.string,
  filterFn: PropTypes.func,
  input: PropTypes.string,
};
