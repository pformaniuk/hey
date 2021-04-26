import { CircularProgress, Container, Button } from '@material-ui/core';
import { useGetQuestionDetailsQuery } from '../../state/generated/graphql';
import QuestionTable from '../../components/DetailsTable';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: '1em',
    marginLeft: '1em'
  },
}));

export const QuestionDetails = () => {

  const classes = useStyles();
  const history = useHistory();
  let { questionId } = useParams<any>();
  const handleClick = useCallback(() => history.push('/'), [history]);
  const { data, loading } = useGetQuestionDetailsQuery({ variables: { questionId} });

  if (loading || !(data && data.getQuestion)) {
    return <CircularProgress />
  }
  
  return (
    <Container maxWidth="md">
      <h1>Questions Detail</h1>
      <h2>Question: {data?.getQuestion?.question}</h2>
      <QuestionTable question={data.getQuestion} />
      <div className={classes.buttons}>
        <Button variant="contained" color="primary" onClick={handleClick} className={classes.button}>Save Vote </Button>
      </div>
    </Container>);
}