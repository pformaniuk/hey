import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minHeight: 150,
  },
  addIcon: {
    minHeight: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const OutlinedCard = (params: { question: any, handleClicks: any }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {params.question.question}
        </Typography>
        <Typography color="textSecondary">
          {new Date(params.question.published_at).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Possible choices: {params.question.choices.length}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={params.handleClicks}>Details</Button>
      </CardActions>
    </Card>
  );
}

export const AddQuestionCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea
        component="a"
        href="/addquestion">
        <CardContent className={classes.addIcon}>
          <Typography variant="h5" component="h2">+
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >);
}