import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Grid, Typography } from "@material-ui/core"
import { Twitter } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    maxWidth: 800,
    minWidth: 250,
  },
  wordmark: {
    minWidth: "50px",
    width: "50px",
    height: "50px",
    marginRight: theme.spacing(2),
  },
}))

const Header = ({ avatar, siteDescription, twitterUrl }) => {
  const classes = useStyles()

  return (
    <header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          minWidth: 350,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Grid container direction="row" spacing={1} justify="space-between">
          <Grid item>
            <div className={classes.headerContainer}>
              <Link to={"/"}>
                <img
                  src={avatar.childImageSharp.fixed.src}
                  alt="TCS Personal Wordmark :)"
                  className={classes.wordmark}
                />
              </Link>
              <Typography gutterBottom variant="subtitle1">
                {siteDescription}
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              color="default"
              href={twitterUrl}
              target="_blank"
              startIcon={<Twitter />}
            >
              Connect on Twitter
            </Button>
          </Grid>
        </Grid>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteDescription: ``,
}

export default Header
