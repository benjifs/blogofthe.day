module.exports = {
  "lang": "en",
  "locale": "en-US",
  "dir": "ltr",
  "title": "Blog of the .Day",
  "description": "Explore the IndieWeb, the slow web, the independent web, one blog per day",
  "eleventyComputed": {
    "site": data => data[data.lang]?.dates ? data[data.lang]?.dates[data.today] : null,
    "dates": data => data[data.lang]?.dates
  }
}