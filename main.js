const questionContainer = document.querySelector(".option-container");
for (let i = 1; i <= 120; i++) {
  const option = document.createElement("div");
  questionContainer.append(option);
  option.className = "option";
  const questionNumberContainer = document.createElement("div");
  questionNumberContainer.className = "question-number-container";
  questionNumberContainer.innerText = i;

  const questionOptionContainer = document.createElement("div");
  questionOptionContainer.className = "question-option-container";
  option.append(questionNumberContainer, questionOptionContainer);
  const opt = ["A", "B", "C", "D"];
  opt.forEach((op) => {
    const questionOptionInside = document.createElement("div");
    questionOptionInside.className = "question-option-inside";
    questionOptionContainer.append(questionOptionInside);
    questionOptionInside.setAttribute("selected", "false");
    questionOptionInside.innerText = op;
    questionOptionInside.addEventListener("click", (e) => {
      const children = questionOptionInside.parentElement.querySelector(
        ".question-option-inside[selected='true']"
      );
      if (children && e.target != children) {
        children.setAttribute("selected", "false");
      }
      questionOptionInside.setAttribute(
        "selected",
        questionOptionInside.getAttribute("selected") === "true"
          ? "false"
          : "true"
      );
    });
  });
}

const clear = document.querySelector(".clear-btn");
clear.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.querySelector(".result-container").innerText = "?/120";
  const qo = document.querySelectorAll(".question-option-inside");
  qo.forEach((q) => {
    q.setAttribute("selected", "false");
  });
});

const result = document.querySelector(".result-btn");
result.addEventListener("click", (e) => {
  let mark = 0;
  const ansKey =
    document
      .querySelector(".part-option-container div[selected='true']")
      .innerText.trim() === "A"
      ? "DBAADAABADBDBCDCCBBABBDCCACDBADDDCABCADDBABABCBABAABCADBABBCADBDACBBCDCDABBBDCACABCDBBDCADCDCACACBDBDDABCBBBABCBBAADCBDA"
      : "ABCADBABBCADBDACBBCDCDABBBDCACABCDBBDCADCDCACACBDBDDABCBBBABCBBAADCBDADBAADAABADBDBCDCCBBABBDCCACDBADDDCABCADDBABABCBABA";
  let candidateAns = "";
  const selectedAnsContainers = document.querySelectorAll(
    ".question-option-container"
  );
  selectedAnsContainers.forEach((selectedAnsContainer, index) => {
    const selectedOptions = Array.from(selectedAnsContainer.children);
    selectedOptions.forEach((o) => {
      if (o.getAttribute("selected") === "true") {
        if (o.innerText.trim() == ansKey[index]) {
          mark = mark + 1;
        }
      }
    });
  });
  document.querySelector(".result-container").innerText = `${mark}/120`;
});

const partOptions = Array.from(
  document.querySelectorAll(".part-option-container div")
);
partOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    partOptions.forEach((o) => {
      o.setAttribute("selected", "false");
    });
    option.setAttribute(
      "selected",
      option.getAttribute("selected") === "true" ? "false" : "true"
    );
  });
});
