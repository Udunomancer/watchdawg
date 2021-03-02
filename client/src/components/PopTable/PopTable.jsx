import React from "react";
// --- import Material-UI dependencies ---
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// --- import custom components ---
import Title from "../Title/Title";

function PopTable() {
    const classes = makeStyles((theme) => ({
        seeMore: {
            marginTop: theme.spacing(3),
        }
    }));

    return (
        <>
            <Title>Take Action: Events with Reports</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Take Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                </TableBody>
            </Table>
        </>
    )
}

export default PopTable