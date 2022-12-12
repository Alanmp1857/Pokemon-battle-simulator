import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { colMoves, mrows } from "./Data";
import { types } from "./Data";

function moveTable() {
  return (
    <div className="h-full">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 550 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {colMoves.map((column, index) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {mrows.map((row, ind) => {
                return (
                  <TableRow key={ind}>
                    {colMoves.map((col) => {
                      return (
                        <TableCell
                          key={col.id}
                          align={col.align}
                          style={{ minWidth: col.minWidth }}
                        >
                          {col.label === "Category" ? (
                            <img src={row[col.label]} />
                          ) : col.label === "Type" ? (
                            <div
                              className={`h-6  text-xs my-4 flex items-center p-2 text-center border-black border-2 rounded bg-[${
                                types[row[col.label].toLowerCase()]
                              }]`}
                            >
                              {row[col.label]}
                            </div>
                          ) : (
                            row[col.label]
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[10, 50]}
          component="div"
          count={rows.slice(0, 399).length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </div>
  );
}

export default moveTable;
