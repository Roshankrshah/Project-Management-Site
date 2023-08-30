
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

fetch('http://localhost:2525/graphql', {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
        'Content-Type': 'application/json',
    }
}).then(res => {
    if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!');
    }
    return res.json();
})
    .then(resData => {
        console.log(resData);
        const tableRow = resData.data.clients.map((client)=>{
            return `<tr>
                        <td>${client.name}</td>
                        <td>${client.email}</td>
                        <td>${client.phone}</td>
                        <td>cancel</td>
                    </tr>`
        }).join('');
        const tableBody = document.querySelector('.table-body');
        tableBody.innerHTML = tableRow;
    })