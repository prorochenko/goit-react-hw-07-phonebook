import PropTypes from 'prop-types';

import css from './Contacts.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteContactReducer = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(filterValue);
  });

  return (
    <ul className={css.list}>
      {filterContacts.length === 0 ? (
        <div className={css.list__box}>
          <p className={css.list__text}>Phonebook is empty.</p>
        </div>
      ) : (
        filterContacts.map(({ id, name, number }) => (
          <li key={id} className={css.list__item}>
            <div className={css.list__box}>
              <p className={css.list__text}>
                {name}: {number}
              </p>
              <button
                className={css.list__btn}
                onClick={() => {
                  deleteContactReducer(id);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

Contacts.propTypes = {
  filterContacts: PropTypes.array,
};
export default Contacts;
