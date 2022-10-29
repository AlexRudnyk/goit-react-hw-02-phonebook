import PropTypes from 'prop-types';
import { ListItem } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id }) => (
        <ListItem key={id}>{name}</ListItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
