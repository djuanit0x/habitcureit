const sendQuery = require('./utils/send-query');

const GET_ALL_HABITS = `
  {
    allHabits {
      data {
        _id
        name
        date
        link
      }
    }
  }
`;

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_HABITS);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ todos: data.allHabits.data })
  };
};
