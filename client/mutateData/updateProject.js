const updateProject = async (id,name,desc,status) => {
    const requestBody = {
        query: `
            mutation UpdateProject($id: ID!, $name: String!, $desc: String!, $status: ProjectStatusUpdate){
                updateProject(id: $id, name: $name, description: $desc, status: $status){
                    name
                    id
                  }
            }`,
        variables: {
            id: id,
            name: name,
            desc: desc,
            status: status,
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
export default updateProject;