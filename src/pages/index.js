import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Done from '@material-ui/icons/Done'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const IndexPage = () => {

  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  function handleClick(id) {
    switch(id) {
      case "features":
        setFeatures(!features)
        break;
      case "info":
        setInfo(!info)
        break
    }
  }

  return(
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h1>Gatsby Material UI Starter</h1>
          <h5>
            A responsive, minimalist Gatsby starter based on the world's most
            popular React UI framework.
          </h5>
        </Grid>
      </Grid>
      <Divider />
      <List
        component="nav"
        className={classes.root}
      >
      <ListItem id="features" button onClick={() => handleClick("features")}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Features" />
        {features ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!features} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Material UI Framework" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Progressive Web App" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="SEO" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Offline Support" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Roboto Typeface (self hosted)" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={() => handleClick("info")}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Info" />
        {info ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!info} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Based on Gatsby Default Starter" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
            <ListItemText primary="Uses Gatsby Material UI Plugin" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </Layout>
  )
}

export default IndexPage
