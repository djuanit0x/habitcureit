const sendQuery = require('./utils/send-query');

const CREATE_HABIT = `
  mutation($name: String!, $link: String) {
    createHabit(data: { name: $name, date: 'test-date', link: $link }) {
      _id
      name
      date
      link
    }
  }
`;


exports.handler = async event => {
  const { text } = JSON.parse(event.body);
  const { data, errors } = await sendQuery(CREATE_HABIT, { text });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ newTodo: data.createHabit })
  };
};
