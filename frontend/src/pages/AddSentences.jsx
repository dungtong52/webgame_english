import { createSentence } from '../api/webApi';
import AddOrEditLayout from '../components/Layout/AddOrEditLayout';

const AddSentences = () => {
  const handleAddSentence = async (formData) => {
    try {
      await createSentence(formData);
    } catch (error) {
      console.log('Create error:', error);
    }
  };

  return <AddOrEditLayout mode='add-sentence' onSubmit={handleAddSentence} />;
};

export default AddSentences;
