const records = [];

// Toggle form visibility
function toggleForm() {
  const formCard = document.getElementById("registration-card");
  formCard.classList.toggle("d-none");
}

// Toggle records visibility
function toggleRecords() {
  const recordsSection = document.getElementById("records");
  const recordsButton = document.getElementById("toggle-records-button");

  if (recordsSection.classList.contains("d-none")) {
    recordsSection.classList.remove("d-none");
    recordsButton.textContent = "Hide Records";
  } else {
    recordsSection.classList.add("d-none");
    recordsButton.textContent = "View Records";
  }
}

// Handle form submission
function submitForm(event) {
  event.preventDefault();

  const record = {
    name: document.getElementById("name").value.trim(),
    dob: document.getElementById("dob").value,
    height: document.getElementById("height").value,
    weight: document.getElementById("weight").value,
    bloodGroup: document.getElementById("bloodGroup").value,
    genotype: document.getElementById("genotype").value,
    allergies: document.getElementById("allergies").value.trim(),
    emergency1: document.getElementById("emergency1").value.trim(),
    emergency2: document.getElementById("emergency2").value.trim(),
  };

  if (!record.name || !record.dob || !record.height || !record.weight || !record.bloodGroup || !record.genotype || !record.emergency1 || !record.emergency2) {
    alert("Please fill in all required fields.");
    return;
  }

  records.push(record);

  updateRecordsSection();

  event.target.reset();
  toggleForm();

  alert("Record added successfully!");
}

// Update the Records section
function updateRecordsSection() {
  const recordsList = document.getElementById("records-list");
  recordsList.innerHTML = "";

  if (records.length === 0) {
    recordsList.innerHTML = "<p>No records available. Please register your information.</p>";
    return;
  }

  records.forEach((record, index) => {
    const recordItem = document.createElement("div");
    recordItem.className = "record-item";
    recordItem.innerHTML = `
      <h5>${index + 1}. ${record.name}</h5>
      <p><strong>Date of Birth:</strong> ${record.dob}</p>
      <p><strong>Height:</strong> ${record.height} cm</p>
      <p><strong>Weight:</strong> ${record.weight} kg</p>
      <p><strong>Blood Group:</strong> ${record.bloodGroup}</p>
      <p><strong>Genotype:</strong> ${record.genotype}</p>
      <p><strong>Allergies:</strong> ${record.allergies || "None"}</p>
      <p><strong>Emergency Contacts:</strong> ${record.emergency1}, ${record.emergency2}</p>
      <hr>
    `;
    recordsList.appendChild(recordItem);
  });
}

// Set dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();
