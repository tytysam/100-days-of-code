import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"

import DayThumbnail from "./DayThumbnail.js"

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2, 0),
    maxWidth: theme.maxWidth.lg,
    width: "100%",
  },
  background: {
    display: "flex",
    flexDirection: "row",
  },
  typography: {
    paddingBottom: theme.spacing(6),
    fontFamily: "Montserrat",
    fontWeight: 100,
  },
}))

const GridLayout = ({ data, siteTitle }) => {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <Typography variant="h1" className={classes.typography} align="center">
          {siteTitle}
        </Typography>
        {data.length > 0 ? (
          <Grid container spacing={4}>
            {data.map((datum, index) => (
              <Grid key={index} item md={4} xs={12}>
                <DayThumbnail data={datum} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="">
            No projects logged yet. Check back later.
          </Typography>
        )}
      </div>
    </div>
  )
}

export default GridLayout
