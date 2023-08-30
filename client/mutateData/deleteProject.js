const deleteProject = async (id) => {
    const requestBody = {
        query: `
            mutation deleteProject($id: ID!){
                deleteProject(id: $id){
                    name
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
        return resData.data;

    } catch (err) {
        console.log(err);
        return err;
    }
}
export default deleteProject;