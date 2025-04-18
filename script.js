// script.js
const form = document.getElementById("job-form");
const jobList = document.getElementById("job-list");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function displayJobs() {
  jobList.innerHTML = "";
  jobs.forEach((job, index) => {
    const li = document.createElement("li");
    li.textContent = `${job.company} - ${job.role} [${job.status}]`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.onclick = () => {
      jobs.splice(index, 1);
      saveJobs();
    };
    li.appendChild(delBtn);

    jobList.appendChild(li);
  });
}

function saveJobs() {
  localStorage.setItem("jobs", JSON.stringify(jobs));
  displayJobs();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const company = document.getElementById("company").value;
  const role = document.getElementById("role").value;
  const status = document.getElementById("status").value;

  jobs.push({ company, role, status });
  saveJobs();
  form.reset();
});

displayJobs();
