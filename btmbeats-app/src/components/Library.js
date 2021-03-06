import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import NavAppBar from './AppBar2.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import css from '../App.css'

const styles = theme => ({
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151,
    height: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

function addClick() {
  alert('Beat has been downloaded to your library.');
}

function favClick() {
  alert('Beat has been removed from your favorites.');
}


const ProfilePage = (props) => {

  const {classes, theme, users} = props;
  if (props.state.users.length > 0 && props.state.tracks.length > 0) {
    // console.log("tracks", props.state.tracks);
  }

  return (<div>
    <NavAppBar {...props} title="Create a Profile"/>

    <div className='welcome-div'>
      <Typography variant="display4" gutterBottom> Welcome Burnsidion! </Typography>
    </div>

    <div className='card-div'>

      <div className='lib-div'>
        <Typography variant="display2" gutterBottom>Your Beats Library</Typography>
      </div>

      {
        props.state.tracks.map((track, i) => (<div className="card-wrapper" key={track.id}>
          <Card className={classes.card}>
            <CardMedia className={classes.cover} image='http://en.ae.bitbop.com/_view/layout/grfx/icons/jamster-music-icon-2.png' title="Album cover"/>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="headline">{track.title}</Typography>
                <Typography variant="subheading" color="textSecondary">
                  {track.artist_name}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton aria-label="Previous">
                  {
                    theme.direction === 'rtl'
                      ? <SkipNextIcon/>
                      : <SkipPreviousIcon/>
                  }
                </IconButton>
                <IconButton aria-label="Play/pause">
                  <PlayArrowIcon className={classes.playIcon}/>
                </IconButton>
                <IconButton aria-label="Next">
                  {
                    theme.direction === 'rtl'
                      ? <SkipPreviousIcon/>
                      : <SkipNextIcon/>
                  }
                </IconButton>

                <Chip label="New!" className={classes.chip} />
                <Chip label="Free" className={classes.chip} />

                <FormControlLabel
                  className="lib-heart" control={<Checkbox checkedIcon={<Favorite />} icon={<Favorite />} value="checkedH"/>} onClick={favClick} />

              </div>
            </div>
          </Card>

        </div>))
      }
    </div>
  </div>)
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(ProfilePage);
