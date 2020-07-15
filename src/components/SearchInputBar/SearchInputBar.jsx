import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DropDownItem from "./DropDownItems/DropDownItem";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius:50
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
}));

export default function SearchInputBar() {
    const classes = useStyles();

    return (

        <Paper component="form" className={classes.root}>

            <DropDownItem/>
            <InputBase
                className={classes.input}
                placeholder="Enter domain"
                inputProps={{'aria-label': 'search google maps'}}
            />
            <IconButton type="submit" className={classes.iconButton}>
                <SearchIcon/>
            </IconButton>
        </Paper>

    );
}
