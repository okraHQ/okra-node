require("dotenv").config();

module.exports = {
  apiURL:
    process.env.NODE_ENV !== "test"
      ? "https://api.okra.ng/v2/"
      : "https://dev-api.okra.ng/v2/"
};
