export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addCollection("berita", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("content/berita/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("tanggalIndo", (dateObj) => {
    return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(dateObj);
  });

  eleventyConfig.addFilter("bulanTahunIndo", (dateObj) => {
    return new Intl.DateTimeFormat("id-ID", { month: "long", year: "numeric" }).format(dateObj);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
