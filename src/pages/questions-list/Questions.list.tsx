import { Grid, Container } from '@material-ui/core';
import { useGetAllQuestionsQuery } from '../../state/generated/graphql';
import { OutlinedCard } from '../../components/Card';


export const Questions = () => {
  const { data, loading } = useGetAllQuestionsQuery();

  const getAllQuestions = data?.getAllQuestions?.map(el => <div>{el?.question}</div>);
  if (loading) {
    return (
      <div>Questions Component Lading</div>
    )
  }

  return (<>
      <Container maxWidth="md">
        <h1>Questions</h1>
        {/* <div>Questions Component {getAllQuestions}</div> */}
      <Grid container spacing={4} >
        <Grid item xs={12} sm={6} md={4}>
            <OutlinedCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <OutlinedCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <OutlinedCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <OutlinedCard />
        </Grid>
      </Grid>
      </Container>
    </>)
}