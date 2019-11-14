import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

const Pagination = ({ rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) => {
  const rowsPerPageOptions = [12, 18, 24];
  return (
    <TablePagination
        data-testid="app-pagination"
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={rows}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
   );
}
 
export default Pagination;