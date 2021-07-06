// Ensuring the html doc loads before the JS loads
$(document).ready(function() {

// Adding employee data variable/details from the json to use for the cards. Added the Headshot/URL for the photos that were missing
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
    "Headshot": "img/unsplash-headshot-katz.jpg",
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
    "Headshot": "img/unsplash-headshot-hendricks.jpg",
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
    "Headshot": "img/unsplash-headshot-jordan.jpg",
    "Company": "Chicago Bulls",
    "Experience": "20 years",
    "School": "UNC",
    "Major": "Trash Talking",
    "Email": "mJordan@bulls.com",
    "LinkedInUrl": "mJordas.linkedinprofile.com"
  },
];

// Referencing the employee data and using the map function to add it to each card
let employeeHTML = employee.map(function(el){
// Creating the "card" container inside the container as the html template (to make styling easier)
// Creating a section under the "card" to allow for styling of the details didplaying to the right of the image/name/job title
  let card = `
    <section class="card">
      <article class="details">
        <img src=${el.Headshot} class="details__image" alt="Image of employee"/>
        <p class="details__name">${el.name}</p>
        <p class="details__title">${el.jobTitle}</p>
      </article>

        <section class="detailsContainer">
          <article class="empDetail">
            <p class="empDetail__label">Company: </p>
            <p class="empDetail__value">${el.Company}</p>
          </article>

          <article class="empDetail">
            <p class="empDetail__label">Experience: </p>
            <p class="empDetail__value">${el.Experience}</p>
          </article>

          <article class="empDetail">
            <p class="empDetail__label">School: </p>
            <p class="empDetail__value">${el.School}</p>
          </article>

          <article class="empDetail">
            <p class="empDetail__label">Major: </p>
            <p class="empDetail__value">${el.Major}</p>
          </article>

          <article class="empDetail">
            <p class="empDetail__label">Email: </p>
            <p class="empDetail__value">${el.Email}</p>
          </article>

          <article class="empDetail">
            <img src="img/linkedin.svg" class="empDetail__linkedimg" alt="LinkedIn logo"/>
            <p class="empDetail__value">${el.LinkedInUrl}</p>
          </article>
        </section>
    </section>`;
// Appending the data to the "container" section in the html
  $(".container").append(card);

});

});
