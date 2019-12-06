require("dotenv").config();

module.exports = {
  apiURL:
    process.env.NODE_ENV !== "test"
      ? "https://api.okra.ng/v1/"
      : "https://dev-api.okra.ng/v1/"
};
