module.exports = {
  "eleventyComputed": {
    "site": data => data[data.lang]?.dates ? data[data.lang]?.dates[data.today] : null,
    "dates": data => data[data.lang]?.dates
  }
}