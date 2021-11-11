import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import data from '../components/data/cardData';
import AddNewTask from './AddNewTask';
import { useDrop } from 'react-dnd';
import { Button } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function BoardCard({ title, tasks, addTaskHandler, index }) {
    console.log('index from Board', index)
    const [state, setState] = React.useState(data)
    const [expanded, setExpanded] = React.useState(false);
    const [taskCount, setTaskCount] = React.useState(0);


    console.log(JSON.stringify(state))


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleTask = () => {
        console.log('task assss')
        setTaskCount(taskCount + 1)
    }
    console.log('hereee', tasks)

    return (
        <div style={{ margin: '20px ', }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={title}
                />
                {
                    !index && <CardContent>
                        {tasks?.map(task => (
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Typography variant="body1" color="text.primary">
                                    {task}
                                </Typography>
                                <Button variant="primary" onClick>Next</Button>
                            </div>))}
                        <AddNewTask addTaskHandler={addTaskHandler} />
                    </CardContent>
                }


                <CardActions disableSpacing>
                    {
                        !index ? <IconButton aria-label="add new" onClick={() => setTaskCount(prev => prev + 1)}>
                            <AddIcon />
                        </IconButton> : ""
                    }

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >

                    </ExpandMore>
                </CardActions>

            </Card>
        </div>
    );
}
