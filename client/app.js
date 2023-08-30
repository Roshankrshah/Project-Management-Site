import fetchClients from "./fetchData/clients.js";
import fetchProjects from "./fetchData/projects.js";
import addClient from "./mutateData/addClient.js";
import addProject from "./mutateData/addProject.js";
import deleteClient from "./mutateData/deleteClient.js";

const tableBody = document.querySelector('.table-body');
const projectContainer = document.querySelector('.project-container');
const clientOption = document.querySelector('.client-select');
const addClientBtn = document.querySelector('.addclientbtn');
const addProjectBtn = document.querySelector('.addprojectbtn');
let deleteBtn;

const start = async () => {
    const clients = await fetchClients();
    const tableRow = clients.map((client) => {
        return `<tr>
                    <td>${client.name}</td>
                    <td>${client.email}</td>
                    <td>${client.phone}</td>
                    <td><button class="delete-button" data-id="${client.id}">Delete</button></td>
                </tr>`
    }).join('');

    tableBody.innerHTML = tableRow;
    const options = clients.map((client, index) => {
        return `
        <option value="${client.id}">${client.name}</option>`
    }).join('');

    clientOption.innerHTML = options;

    const projects = await fetchProjects();
    console.log(projects);
    const divEle = projects.map((project) => {
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

    deleteBtn = document.querySelectorAll('.delete-button');
    deleteBtn.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
            //console.log('delete', e.target.dataset.id)
            const deletedClient = await deleteClient(e.target.dataset.id);
            alert(`Client with name ${deletedClient.deleteClient.name} deleted`);
            location.reload();
        })
    })
}

addClientBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('clientInputName').value;
    const email = document.getElementById('clientInputEmail').value;
    const phone = document.getElementById('clientInputPhone').value;
    const resData = await addClient(name, email, phone);
    alert('Client Added Successfully');
    location.reload();
});

addProjectBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('projectInputName').value;
    const desc = document.getElementById('projectTextarea1').value;
    const status = document.querySelector('.status-select').value;
    const client = document.querySelector('.client-select').value;
    const resData = await addProject(name, desc, status, client);
    alert('Project Added Successfully');
    location.reload();
    //console.log(name,desc,status,client);
});

start();



