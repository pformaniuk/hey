import { Grid, Container } from '@material-ui/core';
import { useGetAllQuestionsQuery } from '../../state/generated/graphql';
import { OutlinedCard } from '../../components/Card';

import { useHistory } from 'react-router';


export const Questions = () => {
  const { data, loading } = useGetAllQuestionsQuery();
  const history = useHistory();

  const getAllQuestions = data?.getAllQuestions?.map((el, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} md={4}>
        <OutlinedCard question = {el} handleClicks={() => {
            if (el?.url) {
              history.push(el?.url)
            }
          } } />
      </Grid>
    )
  });

  if (loading) {
    return (
      <div>Questions Component Lading</div>
    )
  }

  return (<>
    <Container maxWidth="md">
      <h1>Questions</h1>
      <Grid container spacing={4} >
        {getAllQuestions }
      </Grid>
    </Container>
  </>)
}
