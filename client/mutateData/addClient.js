const addClient = async (name,email,phone) => {
    const requestBody = {
        query: `
            mutation AddClient($name: String!, $email: String!, $phone: String!){
                addClient(name: $name, email : $email, phone: $phone){
                id
                name
                email
                phone
                }
            }`,
        variables: {
            name: name,
            email: email,
            phone: phone,
        }
    };
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
        console.log(resData)
        return resData.data;

    } catch (err) {
        console.log(err);
        return err;
    }
}
export default addClient;