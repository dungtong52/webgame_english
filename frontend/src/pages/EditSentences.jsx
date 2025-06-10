import React from 'react';
import AddOrEditLayout from '../components/Layout/AddOrEditLayout';
import { updateSentence } from '../api/webApi';
import { useParams } from 'react-router';

const EditSentences = () => {
  const { id } = useParams();

  const handleEdit = async (formData) => {
    try {
      await updateSentence(id, formData);
    } catch (error) {
      console.error('Update error:', error);
    }
  };
  return <AddOrEditLayout mode='edit-sentence' onSubmit={handleEdit} />;
};

export default EditSentences;
