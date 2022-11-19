import css from './Filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const handlerFilterList = e => {
    const inputValue = e.currentTarget.value.toLocaleLowerCase();
    dispatch(setFilter(inputValue));
  };
  return (
    <label>
      <input
        className={css.input}
        value={filterValue}
        onChange={handlerFilterList}
        placeholder="Enter name"
        type="text"
      />
    </label>
  );
};

export default Filter;
