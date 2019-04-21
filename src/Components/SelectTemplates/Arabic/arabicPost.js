import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const styles = {
  card: {
    maxWidth: 360,
  },
  media: {
    height: 140,
  },
};

function ArabicPost(props) {
  const { classes } = props;
  let p = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={p.image}
          title={p.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {p.title}
          </Typography>
          <Typography component="p">
           {p.description.substring(1, 100)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="readmore">
             <button type="button" class="btn btn-primary btnmore" onClick={()=>{props.handleDelete(props.id)}}>Delete</button>
          </div>
    </Card>
  );
}

ArabicPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArabicPost);
