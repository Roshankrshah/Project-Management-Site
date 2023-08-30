import fetchClients from "./fetchData/clients.js";
import fetchProjects from "./fetchData/projects.js";

const tableBody = document.querySelector('.table-body');

const start = async ()=>{
    const clients = await fetchClients();
    const tableRow = clients.map((client) => {
        return `<tr>
                    <td>${client.name}</td>
                    <td>${client.email}</td>
                    <td>${client.phone}</td>
                    <td>cancel</td>
                </tr>`
    }).join('');
    
    tableBody.innerHTML = tableRow;
    
    const projects = await fetchProjects();
    console.log(projects);
}


start();
