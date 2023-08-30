import fetchClients from "./fetchData/clients.js";
import fetchProjects from "./fetchData/projects.js";

const tableBody = document.querySelector('.table-body');
const projectContainer = document.querySelector('.project-container');

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
    const divEle = projects.map((project)=>{
        return `
            <div class="item">
                <div>
                    <p>${project.name}</p>
                    <a href="./viewDetails.html?id=${project.id}" class="redirect-button">View</a>
                </div>
                <div>
                    Status: <h6>${project.status}</h6>
                </div>
            </div>`
    }).join('');

    projectContainer.innerHTML = divEle;
}


start();
