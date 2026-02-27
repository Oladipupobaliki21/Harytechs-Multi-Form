const nextBtns = document.querySelectorAll(".next-btn");
const steps = document.querySelectorAll(".form-step");
const sidebarSteps = document.querySelectorAll(".step");
const prevBtns = document.querySelectorAll(".prev-btn");
const projectCards = document.querySelectorAll(".project-card");

let currentStep = 0;
let selectedProject ='';

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
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateSteps();
    }
  });
});

projectCards.forEach(card => {
  card.addEventListener("click", () => {

    projectCards.forEach(c => c.classList.remove("active"));

    card.classList.add("active");   // FIXED

    selectedProject = card.dataset.value;

    console.log("Selected Project:", selectedProject);
  });
});
// nextBtns.addEventListener("click", () => {
//   if (!selectedProject) {
//     alert("Please select a project type.");
//     return;
//   }
// });
