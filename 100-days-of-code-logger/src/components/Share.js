import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@forntawesome/free-brand-svg-icons"

const useStyles = makeStyles(theme => ({
  shareIcon: {
    marginRight: "1em",
  },
}))

// @param {String} title - post title
// @param {String} text - share text
// @param {Array} hashtags - list of Twitter hashtags

function Share({ title, text, hashtags }) {
  const classes = useStyles()

  text = text ? text : ""
  const hashtagsStr = hashtags ? hashtags.join(",") : ""
  const url = typeof window !== "undefined" ? window.location.href : ""

  const twitter = `https://twitter.com/intent/tweet?url=${url}&text=${text}&hashtags=${hashtagsStr}`
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`
  const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${text}`

  return (
    <>
      <a href={facebook} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className={classes.shareIcon}
          icon={faFacebookF}
          size="lg"
        />
      </a>
      <a href={twitter} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className={classes.shareIcon}
          icon={faTwitter}
          size="lg"
        />
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className={classes.shareIcon}
          icon={faLinkedinIn}
          size="lg"
        />
      </a>
    </>
  )
}

export default Share
