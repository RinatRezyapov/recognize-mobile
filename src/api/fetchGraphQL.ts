async function fetchGraphQL(text: string, variables: any) {
  return fetch('http://10.50.213.254:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })
    .then(response => response.json())
    .catch(err => console.error(err));
}

export default fetchGraphQL;
