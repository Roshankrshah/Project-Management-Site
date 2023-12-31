const singleProject = async (id) => {
    const requestBody = {
        query: `
        query SeeProject($id: ID!){
            project(id: $id){
                name
                status
                description
                client{
                    id
                  }
              }
        }`,
        variables: {
            id: id
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
        return resData.data.project;

    } catch (err) {
        console.log(err);
        return err;
    }
};

export default singleProject;