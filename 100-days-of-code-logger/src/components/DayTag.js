import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"

const useStyles = makeStyles(theme => ({
  chip: {
    // backgroundColor: "rgba(117, 146, 128, .3)",
    backgroundColor: "#9E7454",
  },
}))

const Tag = ({ tag }) => {
  const classes = useStyles()
  return <Chip label={tag} size="medium" className={classes.chip} />
}

export default Tag
