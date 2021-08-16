import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useRouter } from 'next/router';

function createData(name: string, calories:number, fat:number, carbs:number, protein: Number) {
  return { name, calories, fat, carbs, protein };
}

function descendingComparator(a:any, b:any, orderBy:string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: string, orderBy: string) {
  return order === 'desc'
    ? (a:any, b:any) => descendingComparator(a, b, orderBy)
    : (a:any, b:any) => -descendingComparator(a, b, orderBy);
}

function stableSort(array:any[], comparator: (a:any,b:any) => number) {
  const stabilizedThis = array.map((el:any, index:number) => [el, index]);
  stabilizedThis.sort((a:any, b:any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface EnhancedTableHeadProps {
  headCells: MainRow[]
  additionalHeadCells?: AdditionalRow[]
  classes: ({[key:string]:string})
  order: "asc" | "desc"
  orderBy: string
  onRequestSort: any
  rowCount: number
}

const EnhancedTableHead: React.FC<EnhancedTableHeadProps> = (props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {props.headCells.map((headCell, index) => (
          <TableCell
            key={headCell.field}
            // align={headCell.numeric ? 'right' : 'left'}
            padding="default"
            sortDirection={orderBy === headCell.field ? order : 'asc'}
          >
            <TableSortLabel
              active={orderBy === headCell.field}
              direction={orderBy === headCell.field ? order : 'asc'}
              onClick={createSortHandler(headCell.field)}
              href=""
            >
              {headCell.label}
              {orderBy === headCell.field ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        {props.additionalHeadCells && props.additionalHeadCells.map((cell) => 
          <TableCell key={cell.label}>
            {cell.label}
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

interface EnhancedTableToolbarProps {
  label: string
}

const EnhancedTableToolbar: React.FC<EnhancedTableToolbarProps> = (props) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar
      className={clsx(classes.root)}
    >
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        {props.label}
      </Typography>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

interface AdditionalRow {
  label: any
  cell: (cellData: any) => JSX.Element
}

interface MainRow {
  label: string
  field: string
}

interface EnhancedTableProps {
  data: any[]
  mainRow: MainRow[]
  additionalRow? : AdditionalRow[]
}

export default function EnhancedTable(props: EnhancedTableProps) {
  const classes = useStyles();
  const [order, setOrder] = React.useState<"asc"|"desc">('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event: any, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event:any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.data.length - page * rowsPerPage);

  const tableBody = stableSort(props.data, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
      return (
        <TableRow
          hover
          tabIndex={-1}
          key={row.name}
        >
          {
            props.mainRow.map((propsRow, index) => (
              <TableCell key={index} component="th" scope="row" padding="default">
                {row[propsRow.field]}
              </TableCell>
            ))
          }
          {props.additionalRow && props.additionalRow.map((addRow, index) => {
            return <TableCell key={addRow.label + index}><addRow.cell data={row} /></TableCell>
          })}
        </TableRow>
      );
    })

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar label="Daftar Produk" />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'small'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={props.data.length}
              headCells={props.mainRow}
              additionalHeadCells={props.additionalRow}
            />
            <TableBody>
              {tableBody}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
