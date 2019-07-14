$(document).ready(function(el)

const employee = [
  {
    "name": "Steve Smith",
    "jobTitle": "Project Manager",
    "Headshot": "img/unsplash-headshot.jpg",
    "Company": "Front End Dev Co",
    "Experience": "3 years",
    "School": "UW",
    "Major": "Marketing",
    "Email": "steve@fedc.com",
    "LinkedInUrl": "steve.linkedinprofile.com"
  },

  {
    "name": "Aaron Katz",
    "jobTitle": "Full Stack Developer",
    "Company": "Web Sites and More",
    "Experience": "5 years",
    "School": "SU",
    "Major": "Computer Science",
    "Email": "aaronNotMyEmail@uw.com",
    "LinkedInUrl": "aaron.linkedinprofile.com"
  },

  {
    "name": "Kyle Hendricks",
    "jobTitle": "Starting Pitcher",
    "Company": "Chicago Cubs",
    "Experience": "12 years",
    "School": "USC",
    "Major": "Pitching",
    "Email": "kyleH@cubs.com",
    "LinkedInUrl": "kyle.linkedinprofile.com"
  },

  {
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "Company": "Chicago Buls",
    "Experience": "20 years",
    "School": "UNC",
    "Major": "Trash Talking",
    "Email": "mJordan@bulls.com",
    "LinkedInUrl": "mJordas.linkedinprofile.com"
  },
];

let employeeHTML = employee.map(function(el) {
  let details = `
    <figure class="details">
      <img class = details__image">${el.Headshot}>
      <p class="details__name">${el.name}</p>
      <p class="details__title">${el.jobTitle}</p>
    </figure>`;
});

$(".employee").append(employeeHTML);


});
