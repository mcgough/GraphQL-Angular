const functions = {
  handleError(err) {
    console.log(err.response.status, err.response.statusText);
  },
};

module.exports = functions;