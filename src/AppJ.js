import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {connect} from "react-redux";
import {selectIndex} from "./redux/app-reducer";
import {Provider} from "react-redux";
import store from "./redux/store";


const useStyles = makeStyles((theme) => ({
    root: {
        /*backgroundColor: theme.palette.background.paper,*/
        float: "left",
        borderRadius: 50,
        backgroundColor: "aquamarine"
    },
    nav: {
        margin: 0,
        padding: 0
    },
    listItem: {
        borderRadius: 50
    },
    it: {
        width:25,
        height:25,
        margin:0,
        padding:0,
        borderRadius:50
    }
}));


const AppJ = (props) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(props.selectedIndex);


    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        props.selectIndex(index)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <List component="nav" className={classes.nav} aria-label="Device settings">
                <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    className={classes.listItem}
                    onClick={handleClickListItem}
                >
                    <ListItemText primary={props.options[selectedIndex].item}/>
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                {props.options.map((option, index) => (
                    <MenuItem
                        key={option.id}
                        selected={index === props.selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        className={classes.it}
                    >
                        {option.item}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        options: state.app.options,
        selectedIndex: state.app.selectedIndex
    }
}



let AppContainer = connect(mapStateToProps, {selectIndex})(AppJ);


const SamuraiJSApp = (props) => {
    return <Provider store={store}>
                <AppContainer />
           </Provider>

}

export default SamuraiJSApp;