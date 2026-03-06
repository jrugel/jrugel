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
  stylesheet: `
    /* Import Inter from Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    body {
      font-family: 'Inter', 'Noto Color Emoji', sans-serif;
      font-size: 11px;
      line-height: 1.5;
      color: #1a1a1a;
    }

    h1 {
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 2px;
      color: #111;
      border-bottom: none;
    }

    /* Subtitle line right after h1 */
    h1 + p {
      font-size: 13px;
      color: #555;
      margin-top: 0;
      margin-bottom: 12px;
    }

    h2 {
      font-size: 15px;
      font-weight: 600;
      color: #1a1a1a;
      border-bottom: 2px solid #2563eb;
      padding-bottom: 3px;
      margin-top: 18px;
      margin-bottom: 8px;
    }

    hr {
      display: none;
    }

    ul {
      padding-left: 18px;
      margin: 4px 0;
    }

    li {
      margin-bottom: 3px;
    }

    /* Nested list items (job descriptions) */
    li > ul {
      margin-top: 2px;
    }

    li > ul > li {
      font-size: 10.5px;
      color: #333;
    }

    a {
      color: #2563eb;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    strong {
      font-weight: 600;
    }

    /* Prevent page breaks inside job entries */
    li {
      page-break-inside: avoid;
    }
  `,

  // Launch options for Puppeteer (needed for emoji rendering)
  launch_options: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
};