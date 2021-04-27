import { Container, Button } from '@material-ui/core';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AddQuestion = () => {
  const history = useHistory();
  const handleClick = useCallback(() => history.push('/'), [history]);
  const [inputFields, setInputFields] = useState<string[]>(['']);

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


  const inputs = inputFields.map((el, index) => {
    return (
      <>
        <div>
          <label>
            Choice {index + 1}:
          <input
              type="text"
              className="form-control"
              id="choice"
              name="choice"
              value={el}
              onChange={event => handleInputChange(index, event)}
            />
          </label>
          <div>
            <Button onClick={handleAddFields}> + </Button>
            {index > 0 && <Button onClick={() => { handleRemoveFields(index) }}> - </Button>}
          </div>
        </div>
      </>
    );
  });

  return (
    <Container maxWidth="md">
      <div >
        <form>
        <label>
            Question
          <input
              type="text"
              className="form-control"
              id="question"
              name="question"
              value={'wdw'}
            />
          </label>
          {inputs}
        </form>

        <Button variant="contained" color="primary" onClick={handleClick}>Save Vote </Button>
      </div>
    </Container>
  );
}