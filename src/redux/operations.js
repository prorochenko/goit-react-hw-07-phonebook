import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://637939287419b414df8c2fc4.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      Notify.failure('Sorry, something went wrong &#128575;	');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      Notify.success(`${contact.name} successfully added &#128568;	`);
      return response.data;
    } catch (error) {
      Notify.failure('Sorry, something went wrong &#128575;	');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      Notify.success(`${response.data.name} successfully deleted &#128568;`);
      return response.data;
    } catch (error) {
      Notify.failure('Sorry, something went wrong &#128575;	');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
