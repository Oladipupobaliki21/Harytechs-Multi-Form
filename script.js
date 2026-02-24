const nextBtns = document.querySelectorAll(".next-btn");
const steps = document.querySelectorAll(".form-step");
const sidebarSteps = document.querySelectorAll(".step");

let currentStep = 0;

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
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateSteps();
    }
  });
});