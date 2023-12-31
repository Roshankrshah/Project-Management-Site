import singleProject from "./fetchData/singleProject.js";
import singleClient from "./fetchData/singleClient.js";
import updateProject from "./mutateData/updateProject.js";
import deleteProject from "./mutateData/deleteProject.js";

const titleInput = document.querySelector('.title');
const descriptionInput = document.querySelector('.description');
const statusInput = document.querySelector('.status');
const client = document.querySelector('.clientDetails');
const title = document.querySelector('#projectInputName');
const desc = document.querySelector('#projectTextarea1');
const status = document.querySelectorAll('.status-select option');
const updateBtn = document.querySelector('.updatebtn');
const deleteBtn = document.querySelector('.deleteProject');

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
            <td><span><i class="fa-solid fa-user"></i> </span>${clientDetails.name}</td>
        </tr>
        <tr>
            <td><span><i class="fa-solid fa-envelope"></i> </span>${clientDetails.email}</td>
        </tr>
        <tr>
            <td><span><i class="fa-solid fa-phone"></i> </span>${clientDetails.phone}</td>
        </tr>
    </table>`;
    client.appendChild(table);

    title.setAttribute('value',`${projectDetails.name}`);
    desc.textContent = `${projectDetails.description}`;
    status.forEach((option)=>{
        if(option.textContent === `${projectDetails.status}`){
            option.setAttribute('selected','selected');
        }
    })
}

updateBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    const updatedProject = await updateProject(id,title.value,desc.value,status.value);
    alert('Project Details Updated');
    location.reload();
})

deleteBtn.addEventListener('click',async()=>{
    const deletedProject = await deleteProject(id);
    alert("Project Deleted");
    location.href='/client/index.html';
})
start();



