exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ text: process.env.TESTTEST })
  })
}
