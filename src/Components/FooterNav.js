import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { CenterFocusStrong } from '@material-ui/icons';
import LanguageTwoToneIcon from '@material-ui/icons/LanguageTwoTone';
import ViewListTwoToneIcon from '@material-ui/icons/ViewListTwoTone';

const useStyles = makeStyles({
  root: {
    display:'flex',
    justifyContent:'center',
    marginTop:'10px'
    // alignItems:'center',


  },
});

export default function FooterNav({screenConfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global State" icon={<LanguageTwoToneIcon />} />
      <BottomNavigationAction label="Country State" icon={< ViewListTwoToneIcon/>} />
      <BottomNavigationAction label="Graphs" icon={<LanguageTwoToneIcon />} />
    </BottomNavigation>
  );
}
