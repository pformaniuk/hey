import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Choice } from '../state/generated/graphql';

export default function QuestionTable(params: { question: any }) {
  let rows = setPercentage(params?.question?.choices);
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Choice</TableCell>
            <TableCell align="right">Votes</TableCell>
            <TableCell align="right">Percent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any) => (
            <TableRow key={row.choice}>
              <TableCell component="th" scope="row">
                {row.choice}
              </TableCell>
              <TableCell align="right">{row.votes}</TableCell>
              <TableCell align="right">{row.personage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function setPercentage(choices: Choice[]) {
  const totalVotes = choices.reduce((acb, el)=>  acb + (el?.votes || 0), 0) || 1;

  return choices.map(el => ({ ...el, personage: (el?.votes || 0 / totalVotes) * 100 }) );
}