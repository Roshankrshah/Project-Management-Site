let requestBody = {
    query: `
        query{
            clients{
              name
              email
              phone
            }
          }`
};

const fetchClients = async () => {
    try {
        const response = await fetch('http://localhost:2525/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status !== 200 && response.status !== 201) {
            throw new Error('Failed!');
        }
        const resData = await response.json();
        return resData;

    } catch (err) {
        console.log(err);
        return err;
    }
}
export default fetchClients;