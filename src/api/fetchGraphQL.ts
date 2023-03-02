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
  .then(response => {

    console.log(response);
    return response.json()
  })
  .catch(err => console.log(err))
}

export default fetchGraphQL;