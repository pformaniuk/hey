import { Container, Button, TextField } from '@material-ui/core';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAddNewQuestionMutation } from '../../state/generated/graphql';

export const AddQuestion = () => {
  const history = useHistory();
  const [inputFields, setInputFields] = useState<string[]>(['']);
  const [questionField, setQuestionField] = useState<string>('');
  const [addNewQuestionMutation, { data, loading, error }] = useAddNewQuestionMutation();

  const handleClick = useCallback(() => {
    history.push('/');
    addNewQuestionMutation({
      variables: {
        newQuestionData: {
          question: questionField,
          choices: inputFields
        }
      }
    }).finally(() => { history.push('/'); })
  }, [inputFields, questionField, history, addNewQuestionMutation]);

  const handleInputChange = (index: number, event: any) => {
    const values = [...inputFields];

    values[index] = event.target.value;

    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push('');
    setInputFields(values);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const prepareData = (question: string, choices: string[]) => {
    const relevantChoices = choices.filter(e => e.length);

    if (!question.length || !relevantChoices.length) {
      return null;
    }

    return { choices: relevantChoices, question };
  }

  const inputs = inputFields.map((el, index) => {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <TextField style={{ width: "calc( 100% - 140px)" }} id="standard-basic" label="Choice" value={el} onChange={event => handleInputChange(index, event)} />
          <div style={{ display: 'flex', marginTop: '10px' }} >
            <Button onClick={handleAddFields}> <AddIcon /> </Button>
            <Button disabled={inputFields.length < 2}
              onClick={() => { handleRemoveFields(index) }}> <DeleteIcon /> </Button>
          </div>
        </div>
      </>
    );
  });

  return (
    <Container maxWidth="sm">
      <h1>Add new question</h1>
      <form noValidate autoComplete="off">
        <TextField style={{ width: "calc( 100% - 140px)" }} onChange={event => setQuestionField(event.target.value)} id="question" label="Question" value={questionField} />
        {inputs}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '2em' }}>
          <Button style={{ marginTop: '2em' }} variant="contained" color="primary" onClick={handleClick}>Add question</Button>
        </div>
      </form>
    </Container>
  );
}