module.exports = {
  // Puppeteer PDF options
  pdf_options: {
    format: "A4",
    margin: {
      top: "20mm",
      bottom: "20mm",
      left: "20mm",
      right: "20mm",
    },
    printBackground: true,
  },

  // Custom CSS for professional CV styling
  stylesheet: "cv.css",

  // Launch options for Puppeteer (needed for emoji rendering)
  launch_options: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
};