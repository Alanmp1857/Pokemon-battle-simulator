import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    Rank: 1,
    Username: "Punisher007",
    Rating: 1200,
  },
  {
    Rank: 2,
    Username: "Strange007",
    Rating: 1190,
  },
  {
    Rank: 3,
    Username: "Killmonger08",
    Rating: 1100,
  },
  {
    Rank: 4,
    Username: "Jiren11",
    Rating: 1090,
  },
  {
    Rank: 5,
    Username: "Uchiha111",
    Rating: 1080,
  },
  {
    Rank: 6,
    Username: "SplendorOp",
    Rating: 1070,
  },
  {
    Rank: 7,
    Username: "ZoroDKing",
    Rating: 1060,
  },
  {
    Rank: 8,
    Username: "UltimateViper3000",
    Rating: 1050,
  },
  {
    Rank: 9,
    Username: "Avistar3000",
    Rating: 1040,
  },
  {
    Rank: 10,
    Username: "SanjiAce77",
    Rating: 1020,
  },
  {
    Rank: 11,
    Username: "Sharmaji444",
    Rating: 1010,
  },
  {
    Rank: 12,
    Username: "Avishkar33",
    Rating: 1000,
  },
  {
    Rank: 13,
    Username: "GokuHk777",
    Rating: 990,
  },
  {
    Rank: 14,
    Username: "PolishMan",
    Rating: 980,
  },
  {
    Rank: 15,
    Username: "partypeacock",
    Rating: 960,
  },
  {
    Rank: 16,
    Username: "noiserhino",
    Rating: 900,
  },
  {
    Rank: 17,
    Username: "jackrabbitbittern",
    Rating: 880,
  },
  {
    Rank: 18,
    Username: "luckygnu",
    Rating: 860,
  },
  {
    Rank: 19,
    Username: "diewildfowl",
    Rating: 850,
  },
  {
    Rank: 20,
    Username: "frieza444",
    Rating: 820,
  },
  {
    Rank: 21,
    Username: "reamcobra",
    Rating: 800,
  },
  {
    Rank: 22,
    Username: "fryorangutan",
    Rating: 750,
  },
  {
    Rank: 23,
    Username: "unbiasedimpala",
    Rating: 700,
  },
  {
    Rank: 24,
    Username: "latterpintail",
    Rating: 500,
  },
  {
    Rank: 25,
    Username: "topcurlew",
    Rating: 400,
  },
  {
    Rank: 26,
    Username: "assaultdunnock",
    Rating: 300,
  },
  {
    Rank: 27,
    Username: "chideparrot",
    Rating: 290,
  },
  {
    Rank: 28,
    Username: "immigratetortoise",
    Rating: 280,
  },
  {
    Rank: 29,
    Username: "flickeringbuffalo",
    Rating: 260,
  },
  {
    Rank: 30,
    Username: "acceptmicrosoft",
    Rating: 250,
  },
  {
    Rank: 31,
    Username: "musseldanone",
    Rating: 200,
  },
  {
    Rank: 32,
    Username: "decathlonintel",
    Rating: 100,
  },
  {
    Rank: 33,
    Username: "sniffchevrolet",
    Rating: 70,
  },
  {
    Rank: 34,
    Username: "wrysubway",
    Rating: 60,
  },
  {
    Rank: 35,
    Username: "bightpepsi",
    Rating: 50,
  },
  {
    Rank: 36,
    Username: "sploshchanel",
    Rating: 50,
  },
  {
    Rank: 37,
    Username: "lavahonda",
    Rating: 40,
  },
  {
    Rank: 38,
    Username: "glugrolex",
    Rating: 30,
  },
  {
    Rank: 39,
    Username: "interestkellogs",
    Rating: 20,
  },
  {
    Rank: 40,
    Username: "AbhiJamesBond008",
    Rating: 0,
  },
];

function Ladder() {
  return (
    // <div className="h-full w-1/2">
    <div style={{ width: "100%" }}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a dense table"
          style={{ width: 400, margin: "auto" }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  width: 20,
                }}
              >
                Rank
              </TableCell>
              <TableCell
                align="center"
                style={{
                  minWidth: 30,
                }}
              >
                Username
              </TableCell>
              <TableCell
                align="center"
                style={{
                  minWidth: 30,
                }}
              >
                Rating
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Rank}
                </TableCell>
                <TableCell align="center">{row.Username}</TableCell>
                <TableCell align="center">{row.Rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Ladder;
