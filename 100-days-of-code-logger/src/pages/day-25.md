---
title: "Twitch.TY Livestream Clone"
day: "25"
publishDate: "2021-03-05"
thumbnailImage: "../images/day-25.png"
shareText: "Kickoff for Twitch.TY (Twitch Clone) build."
hashtags: ["100DaysOfCode", "React", "Redux", "Twitch.tv"]
draft: false
---

1/4 of the way through my first #100DaysOfCode challenge — dang time flies when you're learning!

I've had this plan on the backburner for a bit now, but am finally making time to tackle... A Twitch.tv clone!

As a mega-nerd and lover of all things gaming and tech-related, this has been a planned side-project for awhile, and has a certain symbolism to it...

It'll just be a simple-ish clone, but I'm excited to build nonetheless! The plan is to use Open Broadcaster Software to supply the video feed, build a basic Real Time Message Protocol Server, a simple server to track which streams are broadcasting, and a user interface for viewing those streams.

Kicked things off on the client-side by laying the framework with React and Redux. Scaffolded components + wired-up initial routing. Added a basic Header and styling.

Here are some challenges I anticipate running into along the way:

- Need to be able to navigate around to separate pages in the app (Hello, React-Router)
- Need to allow a user to login/logout (Google OAuth practice, probably)
- Need to handle forms in Redux (Let's Learn Redux Form)
- Need to master my CRUD operations in React/Redux

Tomorrow, we move on to authorization using OAuth.
