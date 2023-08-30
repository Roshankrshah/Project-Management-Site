import singleProject from "./fetchData/singleProject.js";

const titleInput = document.querySelector('.title');
const descriptionInput = document.querySelector('.description');
const statusInput = document.querySelector('.status');

let query = location.href.split('?')[1];
let id = query.split('=')[1];
console.log(id);

const start = async()=>{
    const projectDetails = await singleProject(id);
    titleInput.textContent = projectDetails.name;
    descriptionInput.textContent = projectDetails.description;
    statusInput.textContent = projectDetails.status;

}
start();

