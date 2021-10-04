module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("sortByName", (values) => {
        let vals = [...values];     // this *seems* to prevent collection mutation...
        return vals.sort((a, b) => a.data.name.localeCompare(b.data.name));
    });


    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('js');
    return {
      passthroughFileCopy: true
    }
}