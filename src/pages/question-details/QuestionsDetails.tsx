import { CircularProgress, Container } from '@material-ui/core';
import { useGetQuestionDetailsQuery } from '../../state/generated/graphql';

export const QuestionDetails = () => {
    const {data, loading } = useGetQuestionDetailsQuery({variables: { questionId : '5' }});

    console.log(data?.getQuestion?.question);
    console.log(loading);
    if(loading) {
        return <CircularProgress />
    }

    return (<Container maxWidth="md"> <h1>Questions Detail</h1> </Container>);
}