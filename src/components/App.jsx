import toast, { Toaster } from 'react-hot-toast';

import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import css from './CommonStyle.module.scss';
import Form from './Form/Form';
import scss from './Contacts/Contacts.module.scss';

export default function App() {
  const notify = () =>
    toast.success('Good Job! 👏', {
      position: 'top-right',
    });

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
      <button className={scss.list__btn} type="button" onClick={notify}>
        press me
      </button>
      <div>
        <Toaster />
      </div>
    </div>
  );
}
