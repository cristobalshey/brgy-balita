const brgys = ["Brgy A", "Brgy B", "Brgy C"];

const data = {
  "Brgy A": {
    candidates: {
       mayor: [
        { name: "Juan Cruz", position: "Mayor", achievements: "Built 3 schools.", platform: "Education for all.", Details: "Long experience in education reform." },
        { name: "Liza Ramos", position: "Mayor", achievements: "Reduced crime.", platform: "Safe community.", Details: "Ex-police chief with public safety plan." },
        { name: "Pedro Santos", position: "Mayor", achievements: "Expanded public health centers.", platform: "Healthcare access.", Details: "Doctor turned public servant." },
        { name: "Ana Reyes", position: "Mayor", achievements: "Improved waste management.", platform: "Clean and green.", Details: "Environmental advocate." },
        { name: "Carlos Dela Vega", position: "Mayor", achievements: "Boosted tourism.", platform: "Economic growth.", Details: "Businessman promoting local economy." }
      ],
      viceMayor: [
        { name: "Joan Cruz", position: "Vice Mayor", achievements: "Youth programs.", platform: "Youth empowerment.", Details: "Former youth leader." },
        { name: "Mark dela Rosa", position: "Vice Mayor", achievements: "Tech hubs.", platform: "Digital future.", Details: "IT expert." },
        { name: "Cathy Lim", position: "Vice Mayor", achievements: "Feeding programs.", platform: "Nutrition.", Details: "Social worker." },
        { name: "Ricardo Mendez", position: "Vice Mayor", achievements: "Disaster plans.", platform: "Preparedness.", Details: "Disaster response officer." },
        { name: "Ella Robles", position: "Vice Mayor", achievements: "Clean water projects.", platform: "Water access.", Details: "Engineer." }
      ],
      konsehal: [
        { name: "Ronnie Ocampo", position: "Konsehal", achievements: "Road repair.", platform: "Better roads.", Details: "Civil engineer." },
        { name: "Maricel Torres", position: "Konsehal", achievements: "Daycare centers.", platform: "Early childhood care.", Details: "Teacher." },
        { name: "Jorge Yu", position: "Konsehal", achievements: "Business permits.", platform: "Ease of business.", Details: "Entrepreneur." },
        { name: "Andrea Pascual", position: "Konsehal", achievements: "Sports programs.", platform: "Active youth.", Details: "Athlete and coach." },
        { name: "Lea Mendoza", position: "Konsehal", achievements: "Cultural events.", platform: "Cultural pride.", Details: "Artist." }
      ],
      brgyCaptain: [
        { name: "Larry Gomez", position: "Brgy Captain", achievements: "Barangay clean-up.", platform: "Clean surroundings.", Details: "Barangay officer for 10 years." },
        { name: "Tina Baylon", position: "Brgy Captain", achievements: "Community clinics.", platform: "Accessible health.", Details: "Nurse and volunteer." },
        { name: "Jonas Beltran", position: "Brgy Captain", achievements: "Street lights.", platform: "Safer roads.", Details: "Electrician." },
        { name: "Cecilia Ramos", position: "Brgy Captain", achievements: "Food drives.", platform: "No one hungry.", Details: "Charity organizer." },
        { name: "Victor Dy", position: "Brgy Captain", achievements: "Scholarships.", platform: "For the youth.", Details: "Former professor." }
      ],
      sk: [
        { name: "Kevin Santos", position: "SK Chairman", achievements: "Youth outreach.", platform: "Engaged youth.", Details: "College student." },
        { name: "Mary Joy Tan", position: "SK Chairman", achievements: "Environment drive.", platform: "Green barangay.", Details: "Environmentalist." },
        { name: "Jason De Vera", position: "SK Chairman", achievements: "Coding camps.", platform: "Tech-savvy youth.", Details: "Computer major." },
        { name: "Sofia Magsino", position: "SK Chairman", achievements: "Art contests.", platform: "Creative youth.", Details: "Fine arts student." },
        { name: "Allan Cuevas", position: "SK Chairman", achievements: "Basketball league.", platform: "Active youth.", Details: "Varsity player." }
      ]
    },
    issues: [
      "Flooding in Purok 1",
      "Garbage collection delay",
      "Lack of street lights",
      "Unemployment rate high",
      "Teenage drug use"
    ]
  },
  "Brgy B": {
    candidates: { mayor: [
         { name: "Kevin Santos", position: "Mayor", achievements: "Youth outreach.", platform: "Engaged youth.", Details: "College student." },
        { name: "Mary Joy Tan", position: "Mayor", achievements: "Environment drive.", platform: "Green barangay.", Details: "Environmentalist." },
        { name: "Jason De Vera", position: "Mayor", achievements: "Coding camps.", platform: "Tech-savvy youth.", Details: "Computer major." },
        { name: "Sofia Magsino", position: "Mayor", achievements: "Art contests.", platform: "Creative youth.", Details: "Fine arts student." },
        { name: "Allan Cuevas", position: "Mayor", achievements: "Basketball league.", platform: "Active youth.", Details: "Varsity player." }
    ], viceMayor: [
         { name: "Larry Gomez", position: "Vice Mayor", achievements: "Barangay clean-up.", platform: "Clean surroundings.", Details: "Barangay officer for 10 years." },
        { name: "Tina Baylon", position: "Vice Mayor", achievements: "Community clinics.", platform: "Accessible health.", Details: "Nurse and volunteer." },
        { name: "Jonas Beltran", position: "Vice Mayor", achievements: "Street lights.", platform: "Safer roads.", Details: "Electrician." },
        { name: "Cecilia Ramos", position: "Vice Mayor", achievements: "Food drives.", platform: "No one hungry.", Details: "Charity organizer." },
        { name: "Victor Dy", position: "Vice Mayor", achievements: "Scholarships.", platform: "For the youth.", Details: "Former professor." }
    ], konsehal: [
         { name: "Joan Cruz", position: "Konsehal", achievements: "Youth programs.", platform: "Youth empowerment.", Details: "Former youth leader." },
        { name: "Mark dela Rosa", position: "Konsehal", achievements: "Tech hubs.", platform: "Digital future.", Details: "IT expert." },
        { name: "Cathy Lim", position: "Konsehal", achievements: "Feeding programs.", platform: "Nutrition.", Details: "Social worker." },
        { name: "Ricardo Mendez", position: "Konsehal", achievements: "Disaster plans.", platform: "Preparedness.", Details: "Disaster response officer." },
        { name: "Ella Robles", position: "Konsehal", achievements: "Clean water projects.", platform: "Water access.", Details: "Engineer." }
    ], brgyCaptain: [
         { name: "Ronnie Ocampo", position: "BrgyCaptain", achievements: "Road repair.", platform: "Better roads.", Details: "Civil engineer." },
        { name: "Maricel Torres", position: "BrgyCaptain", achievements: "Daycare centers.", platform: "Early childhood care.", Details: "Teacher." },
        { name: "Jorge Yu", position: "BrgyCaptain", achievements: "Business permits.", platform: "Ease of business.", Details: "Entrepreneur." },
        { name: "Andrea Pascual", position: "BrgyCaptain", achievements: "Sports programs.", platform: "Active youth.", Details: "Athlete and coach." },
        { name: "Lea Mendoza", position: "BrgyCaptain", achievements: "Cultural events.", platform: "Cultural pride.", Details: "Artist." }
    ], sk: [
         { name: "Juan Cruz", position: "Sk Chairman", achievements: "Built 3 schools.", platform: "Education for all.", Details: "Long experience in education reform." },
        { name: "Liza Ramos", position: "Sk Chairman", achievements: "Reduced crime.", platform: "Safe community.", Details: "Ex-police chief with public safety plan." },
        { name: "Pedro Santos", position: "Sk Chairman", achievements: "Expanded public health centers.", platform: "Healthcare access.", Details: "Doctor turned public servant." },
        { name: "Ana Reyes", position: "Sk Chairman", achievements: "Improved waste management.", platform: "Clean and green.", Details: "Environmental advocate." },
        { name: "Carlos Dela Vega", position: "Sk Chairman", achievements: "Boosted tourism.", platform: "Economic growth.", Details: "Businessman promoting local economy." }
    ] },
    issues: ["Uncollected Garbage", "Flooding During Rainy Season", "Lack of Street Lights", "Water Supply Interruption", "Poor Road Conditions"]
  },
  "Brgy C": {
    candidates: { mayor: [
        { name: "Joan Cruz", position: "Mayor", achievements: "Youth programs.", platform: "Youth empowerment.", Details: "Former youth leader." },
        { name: "Mark dela Rosa", position: "Mayor", achievements: "Tech hubs.", platform: "Digital future.", Details: "IT expert." },
        { name: "Cathy Lim", position: "Mayor", achievements: "Feeding programs.", platform: "Nutrition.", Details: "Social worker." },
        { name: "Ricardo Mendez", position: "Mayor", achievements: "Disaster plans.", platform: "Preparedness.", Details: "Disaster response officer." },
        { name: "Ella Robles", position: "Mayor", achievements: "Clean water projects.", platform: "Water access.", Details: "Engineer." }
    ], viceMayor: [
         { name: "Ronnie Ocampo", position: "Vice Mayor", achievements: "Road repair.", platform: "Better roads.", Details: "Civil engineer." },
        { name: "Maricel Torres", position: "Vice Mayor", achievements: "Daycare centers.", platform: "Early childhood care.", Details: "Teacher." },
        { name: "Jorge Yu", position: "Vice Mayor", achievements: "Business permits.", platform: "Ease of business.", Details: "Entrepreneur." },
        { name: "Andrea Pascual", position: "Vice Mayor", achievements: "Sports programs.", platform: "Active youth.", Details: "Athlete and coach." },
        { name: "Lea Mendoza", position: "Vice Mayor", achievements: "Cultural events.", platform: "Cultural pride.", Details: "Artist." }
    ], konsehal: [
         { name: "Kevin Santos", position: "Konsehal", achievements: "Youth outreach.", platform: "Engaged youth.", Details: "College student." },
        { name: "Mary Joy Tan", position: "Konsehal", achievements: "Environment drive.", platform: "Green barangay.", Details: "Environmentalist." },
        { name: "Jason De Vera", position: "Konsehal", achievements: "Coding camps.", platform: "Tech-savvy youth.", Details: "Computer major." },
        { name: "Sofia Magsino", position: "Konsehal", achievements: "Art contests.", platform: "Creative youth.", Details: "Fine arts student." },
        { name: "Allan Cuevas", position: "Konsehal", achievements: "Basketball league.", platform: "Active youth.", Details: "Varsity player." }
    ], brgyCaptain: [
        { name: "Juan Cruz", position: "BrgyCaptain", achievements: "Built 3 schools.", platform: "Education for all.", Details: "Long experience in education reform." },
        { name: "Liza Ramos", position: "BrgyCaptain", achievements: "Reduced crime.", platform: "Safe community.", Details: "Ex-police chief with public safety plan." },
        { name: "Pedro Santos", position: "BrgyCaptain", achievements: "Expanded public health centers.", platform: "Healthcare access.", Details: "Doctor turned public servant." },
        { name: "Ana Reyes", position: "BrgyCaptain", achievements: "Improved waste management.", platform: "Clean and green.", Details: "Environmental advocate." },
        { name: "Carlos Dela Vega", position: "BrgyCaptain", achievements: "Boosted tourism.", platform: "Economic growth.", Details: "Businessman promoting local economy." }
    
    ], sk: [
         { name: "Larry Gomez", position: "Sk Chairman", achievements: "Barangay clean-up.", platform: "Clean surroundings.", Details: "Barangay officer for 10 years." },
        { name: "Tina Baylon", position: "Sk Chairman", achievements: "Community clinics.", platform: "Accessible health.", Details: "Nurse and volunteer." },
        { name: "Jonas Beltran", position: "Sk Chairman", achievements: "Street lights.", platform: "Safer roads.", Details: "Electrician." },
        { name: "Cecilia Ramos", position: "Sk Chairman", achievements: "Food drives.", platform: "No one hungry.", Details: "Charity organizer." },
        { name: "Victor Dy", position: "Sk Chairman", achievements: "Scholarships.", platform: "For the youth.", Details: "Former professor." }
    ] },
    issues: ["Street Crime and Theft", "Noise Pollution", "Lack of Health Facilities", "Idle Youth / No Recreational Area", "Drug-Related Activities"]
  }
};

const brgySelect = document.getElementById("brgySelect");
const candidatesDiv = document.getElementById("candidates");
const issuesDiv = document.getElementById("issues");

brgys.forEach(brgy => {
  const option = document.createElement("option");
  option.value = brgy;
  option.textContent = brgy;
  brgySelect.appendChild(option);
});

function render(brgy) {
  const { candidates, issues } = data[brgy];

  candidatesDiv.innerHTML = "";
  for (let role in candidates) {
    const col = document.createElement("div");
    col.className = "candidate-column";
    col.innerHTML = `<h2>${role.toUpperCase()}</h2>`;
    candidates[role].forEach(c => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
       
      <h3>${c.name}</h3>
        <p><strong>${c.position}</strong></p>
        <p>Achievements: ${c.achievements}</p>
        <p>Platform: ${c.platform}</p>
       <button onclick='showDetails(${JSON.stringify(c)})'>View Details</button>
      `;
      col.appendChild(card);
    });
    candidatesDiv.appendChild(col);
  }

  issuesDiv.innerHTML = `<h2>Barangay Issues</h2><ul>${issues.map(i => `<li>${i}</li>`).join('')}</ul>`;
}

brgySelect.addEventListener("change", e => render(e.target.value));

render(brgys[0]);

function showDetails(candidate) {
  const modal = document.getElementById("modal");
  const modalDetails = document.getElementById("modalDetails");

  modalDetails.innerHTML = `
    <h2>${candidate.name}</h2>
    <p><strong>Position:</strong> ${candidate.position}</p>
    <p><strong>Achievements:</strong> ${candidate.achievements}</p>
    <p><strong>Platform:</strong> ${candidate.platform}</p>
    <p><strong>Details:</strong> ${candidate.Details}</p>
  `;

  modal.style.display = "block";
}
document.querySelector(".close").onclick = function () {
  document.getElementById("modal").style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
