import singleProject from "./fetchData/singleProject.js";
import singleClient from "./fetchData/singleClient.js";

const titleInput = document.querySelector('.title');
const descriptionInput = document.querySelector('.description');
const statusInput = document.querySelector('.status');
const client = document.querySelector('.clientDetails');
const title = document.querySelector('#projectInputName');
const desc = document.querySelector('#projectTextarea1')

let query = location.href.split('?')[1];
let id = query.split('=')[1];
console.log(id);

const start = async()=>{
    const projectDetails = await singleProject(id);
    titleInput.textContent = projectDetails.name;
    descriptionInput.textContent = projectDetails.description;
    statusInput.textContent = projectDetails.status;

    const clientDetails = await singleClient(projectDetails.client.id);
    const table = document.createElement('table');
    table.classList.add('client-table');
    table.innerHTML = `
        <tr>
            <td>${clientDetails.name}</td>
        </tr>
        <tr>
            <td>${clientDetails.email}</td>
        </tr>
        <tr>
            <td>${clientDetails.phone}</td>
        </tr>
    </table>`;
    client.appendChild(table);

    title.setAttribute('placeholder',`${projectDetails.name}`);
    desc.setAttribute('placeholder',`${projectDetails.description}`);

}
start();

