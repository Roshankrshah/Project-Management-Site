import fetchClients from "./fetchData/clients.js";

const tableBody = document.querySelector('.table-body');

const start = async ()=>{
    const resData = await fetchClients()
    const tableRow = resData.data.clients.map((client) => {
        return `<tr>
                    <td>${client.name}</td>
                    <td>${client.email}</td>
                    <td>${client.phone}</td>
                    <td>cancel</td>
                </tr>`
    }).join('');
    
    tableBody.innerHTML = tableRow;    
}


start();
