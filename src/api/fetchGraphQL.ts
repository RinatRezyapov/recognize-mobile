async function fetchGraphQL(text: string, variables: any) {
  return fetch('http://172.20.6.75:3000/graphql', {
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
  .catch(err => console.log(err))
}

export default fetchGraphQL;