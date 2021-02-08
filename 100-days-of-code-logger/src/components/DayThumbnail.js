import React, { useState } from "react"
import moment from "moment"
import { Link } from "gatsby"
import { makeStyles, makeTheme } from "@material-ui/core/styles"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  Grid,
  MuiDialogTitle,
  MuiDialogContent,
  IconButton,
  Typography,
} from "@material-ui/core"
import { Close, OpenInNew } from "@material-ui/icons"

import DayTag from "./DayTag.js"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 204,
  },
  cardContent: {
    height: 140,
  },
  dialog: {
    margin: 0,
    padding: theme.spacing(2),
  },
  button: {
    color: theme.palette.grey[500],
  },
  buttonContainer: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  grid: {
    height: "100%",
  },
  typography: {
    paddingBottom: theme.spacing(2),
  },
}))

function truncate(input, length) {
  if (input.length > length) return input.substring(0, length) + "..."
  else return input
}

const DialogTitle = props => {
  const classes = useStyles()
  const { children, onClose, day, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.dialog} {...other}>
      <Typography variant="h6">{children}</Typography>
      <div className={classes.buttonContainer}>
        {onClose ? (
          <>
            <IconButton
              aria-label="close"
              className={classes.button}
              onClick={onClose}
            >
              <Close />
            </IconButton>
          </>
        ) : null}
        <Link to={`Day-${day}`}>
          <IconButton aria-label="open-in-new" className={classes.button}>
            <OpenInNew />
          </IconButton>
        </Link>
      </div>
    </MuiDialogTitle>
  )
}

const DialogContent = withStyles(theme => {
  return {
    root: {
      padding: theme.spacing(2),
    },
  }
})(MuiDialogContent)

export default function DayThumbnail({ data }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const title = truncate(data.frontmatter.title, 120) // truncate title to 120 characters to fit card
  const day = data.frontmatter.day

  return (
    <>
      <Card className={classes.root} elevation={2}>
        <CardActionArea component="button" onClick={handleClickOpen}>
          <CardMedia
            className={classes.media}
            image={data.frontmatter.thumbnailImage.childImageSharp.fluid.src}
            title={title}
          />
          <CardContent classes={{ root: classes.cardContent }}>
            <Grid
              container
              direction="column"
              justify="space-between"
              className={classes.grid}
            >
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <DayTag tag={`Day ${day}`} />
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        onClose={handleClose}
        aria-labeledby="customized-dialog-option"
        open={open}
      >
        <DialogTitle
          id="customizeed-dialog-title"
          onClose={handleClose}
          day={day}
        >
          {data.frontmatter.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle2" className={classes.typography}>
            {moment(data.frontmatter.publishDate).format("MMMM Do, YYYY")}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            gutterBottom
            dangerouslySetInnerHTML={{
              __html: data.html,
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
