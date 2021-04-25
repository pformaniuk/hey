import { AppBar, Toolbar, Button } from '@material-ui/core';
import { useCallback } from 'react';
import { useHistory} from 'react-router-dom';

export const TopBar = () => {
  let history = useHistory();

  const handleGoBack = useCallback(() => history.push('/'), [history]);
  const handleAddNew= useCallback(() => history.push('/add-question'), [history]);

  console.log(history);

  return (<AppBar position="static">
    <Toolbar>
      <Button color="inherit" onClick={handleGoBack}>GO back</Button>  
      <Button color="inherit" onClick={handleAddNew}>Add Question</Button>
    </Toolbar>
  </AppBar>)
}

