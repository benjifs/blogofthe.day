module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "static": "/" })

    const today = new Date()
    eleventyConfig.addShortcode("dateISO", () => today.toISOString())
    eleventyConfig.addGlobalData("today", () => today.toISOString().split('T')[0])

    return {
        dir: {
            input: 'src',
            data: '../_data'
        }
    }
}