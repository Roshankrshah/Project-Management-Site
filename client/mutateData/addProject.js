const addProject = async (name,desc,status,client) => {
    const requestBody = {
        query: `
            mutation AddClient($name: String!, $desc: String!, $status: ProjectStatus, $client: ID!){
                addProject(name: $name, description: $desc, status: $status, clientId:$client){
                    name
                    id
                  }
            }`,
        variables: {
            name: name,
            desc: desc,
            status: status,
            client: client
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
export default addProject;