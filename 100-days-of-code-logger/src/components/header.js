import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Avatar, Button, Grid, Typography } from "@material-ui/core"
import { Twitter } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    maxWidth: 600,
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
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
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Grid container direction="row" spacing={2} justify="space-between">
          <Grid item>
            <div className={classes.avatarContainer}>
              <Link to={"/"}>
                <Avatar
                  src={avatar.childImageSharp.fixed.src}
                  alt="TCS Personal Wordmark :)"
                  className={classes.avatar}
                />
              </Link>
              <Typography gutterBottom variant="subtitle2">
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
              Follow me on Twitter
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
