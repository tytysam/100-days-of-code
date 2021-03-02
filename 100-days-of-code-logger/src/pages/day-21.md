---
title: "Liquid and Redux Learnin' "
day: "21"
publishDate: "2021-03-01"
thumbnailImage: "../images/day-21.png"
shareText: "Deep dive into the basics of Liquid. Then Redux work."
hashtags: ["100DaysOfCode", "Liquid", "React", "Redux"]
draft: false
---

Started my Monday off with some learning focused on Liquid, Shopify's templating language. I was really surprised how much it had in common with Ruby!

Here's what I learned about Liquid in Action:

- First, a user requests a URL of a Shopify store
- Then, Shopify works out which store is being requested
- Then, Shopify selects the required Liquid template from the active theme directory
- After that, the Liquid placeholders are replaced with real data stored on Shopify
- The compiled HTML file is then sent to the browser
- And finally, the browser processes the HTML file and fetches all other required assets (images, JS, CSS, etc.)

After my early-morning lessons in Liquid, my attention shifted back to Redux. Today was all about integrating React with Redux, so I wrote a simple song selector app where you can click on a song from a list and have a Display component automatically update to display the information related to that selected song.

This simple build gave me an excuse to become more familiar with:

- Planning a Redux Project
- Named vs Default Exports
- Building reducers
- Wiring up Providers
- The Connect Function
- Configuring Connect with MapStateToProps
- Building a list with Redux data
