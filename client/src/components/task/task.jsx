import React, { Component } from 'react';
import { Paper, Button, ButtonGroup } from '@material-ui/core';

import classes from './task.module.scss';

const Task = ({ task, index, doneHandler, removeHandler }) => {
    return (
        <Paper className={classes.task}>
            {task.title}
            <ButtonGroup
                className={classes.button}
                disableElevation
                variant='contained'
                color='primary'
            >
                <Button onClick={() => doneHandler(index)}>Done</Button>
                <Button onClick={() => removeHandler(index)}>Remove</Button>
            </ButtonGroup>
        </Paper>
    );
};

export default Task;
