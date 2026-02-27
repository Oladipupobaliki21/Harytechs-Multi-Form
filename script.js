const nextBtns = document.querySelectorAll(".next-btn");
const steps = document.querySelectorAll(".form-step");
const sidebarSteps = document.querySelectorAll(".step");
const prevBtns = document.querySelectorAll(".prev-btn");
const projectCards = document.querySelectorAll(".project-card");
const budgetCards = document.querySelectorAll(".budget-card");
const timelineCards = document.querySelectorAll(".timeline-card");
const descriptionInput = document.getElementById("projectDescription");
const referenceInput = document.getElementById("referenceLink");
const summaryProject = document.getElementById("summaryProject");
const summaryBudget = document.getElementById("summaryBudget");
const summaryTimeline = document.getElementById("summaryTimeline");
// const summaryDescription = document.getElementById("summaryDescription");
const submitBtn = document.getElementById("submitBtn");

let currentStep = 0;
let selectedProject ='';
let selectedBudget = "";
let selectedTimeline = "";
// let projectDescription = "";
// let referenceLink = "";


function updateSteps() {
  steps.forEach((step, index) => {
    step.classList.remove("active");
    sidebarSteps[index].classList.remove("active");

    if (index === currentStep) {
      step.classList.add("active");
      sidebarSteps[index].classList.add("active");
    }
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    // If on Project Step (index 1) and nothing selected
    if (currentStep === 1 && !selectedProject) {
      alert("Please select a project type.");
      return;
    }

    if (currentStep < steps.length - 1) {
      currentStep++;
      updateSteps();
    }
  });
//   if (currentStep === steps.length - 2) {
//   updateSummary();
// }
});




prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateSteps();
    }
  });
});


submitBtn.addEventListener("click", () => {
  currentStep++;
  updateSteps();
});

projectCards.forEach(card => {
  card.addEventListener("click", () => {

    projectCards.forEach(c => c.classList.remove("active"));

    card.classList.add("active");   

    selectedProject = card.dataset.value;

    console.log("Selected Project:", selectedProject);
  });
});

budgetCards.forEach(card => {
  card.addEventListener ("click", () =>{
    budgetCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    selectedBudget = card.dataset.value;

    console.log("Selected Budget:", selectedBudget);
  })
})

timelineCards.forEach(card => {
  card.addEventListener( "click", () => {
    timelineCards.forEach (c => c.classList.remove("active"));
    card.classList.add ("active");
    selectedBudget = card.dataset.value;
console.log("Selected Timeline:", selectedTimeline);

  })
})
