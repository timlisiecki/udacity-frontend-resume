/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Tim Lisiecki",
	"role": "Front End Web Developer",
	"contacts": {
		"linkedin": "in/timothylisiecki",
		"website": "timlisiecki.com",
		"github": "timlisiecki",
		"location": "South Boston, MA"
	},
	"welcomeMessage": "Entry-level Web Developer with about 1 year experience, 1 year experience as a Marketing professional, and 6 years experience in a leadership role as a maritime captain. B.S. in Management with a concentration in Marketing from the University of Massachusetts Boston. Experienced, USCG licensed maritime Captain in the passenger vessel industry; gained valuable management skills that can be transferred into a business environment including team leadership, delegation, and the abilities to make decisions and solve problems. Earned a certificate in Inbound Marketing from HubSpot. Seeking a Junior Front End Web Developer position that will effectively optimize my experience in web development, as well as marketing and my 6 years in a leadership role.",
	"skills": [
		"HTML", "CSS", "JavaScript", "Bootcamp", "jQuery"
	],
	"bioPic": "images/timlisiecki.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "Freelance",
			"title": "Front End Web Developer",
			"dates": "January 2016-Present",
			"description": "Focus on Front End Development path with fundamental Back End Development knowledge. Developing responsive design websites for personal, small businesses, non-profits, and annual events.",
			"city": "Boston, MA"
		},
		{
			"employer": "Mass Bay Lines",
			"title": "Captain",
			"dates": "April 2009-Present",
			"description": "Captain of fleet of five vessels offering MBTA commuter ferry Hingham-Boston, music cruises, corporate events, harbor tours, private charters, harbor island trips. Main responsibilities include the management, maintenance, organization, and operation of the vessel as well as ultimate responsibility for safety of passengers, crew, and vessels. Managing up to 400 passengers and up to 18 personnel in different functional teams. Building and managing relationships with clients. Coordinating with clients to optimize customers’ experience. Managing cross-functional teams. Serve as Vessel Security Officer and Bar Manager while the vessel is underway.",
			"city": "Boston, MA"
		},
		{
			"employer": "Mass Bay Lines",
			"title": "Marketing Specialist",
			"dates": "March 2015-October 2015",
			"description": "Working directly with the Director of Sales and Marketing. Coordinating multiple projects. Executing on a variety of marketing projects and programs. Managing social media accounts. Creating content for website, social media, and other marketing campaigns. Updating and controlling website through content managing systems. Brainstorming marketing strategies and campaigns. Assisting in managing interns. Attending events, workshops, and conferences. Identifying target audiences.",
			"city": "Boston, MA"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "UMass Boston",
			"city": "Boston, MA",
			"degree": "Bachelor's of Science",
			"majors": ["Management - Concentration in Marketing"],
			"dates": "2012-2015"
		}
	],
	"onlineCourses": [
		{
			"title": "Complete Web Development Bootcamp",
			"school": "Udemy",
			"dates": "2016",
			"url": "www.udemy.com"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "India Wharf Marina",
			"url": "http://www.indiawharfmarina.com",
			"dates": "2016",
			"description": "Front End Development: Updated the website to a modern design.",
			"images": [
				"images/indiawharf_before.png",
				"images/indiawharf_after.png"
			],
		},
		{
			"title": "Skate Shak",
			"url": "http://www.skateshak.com",
			"dates": "2016",
			"description": "Website Redesign: Created a new website utilizing AngularJS for routing and templating a single page.",
			"images": [
				"images/skateshak_before.png",
				"images/skateshak_after.png"
			]
		}
	]
}

// Use if there a a form so that no malicious script can be placed in inputs
// var charEscape = function(_html) {
//     var newHTML = _html;

//     newHTML = _html.replace(/</g, "&lt;");
//     newHTML = newHTML.replace(/>/g, "&gt;");

//     return newHTML;
// };




function displayHeader() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var formattedWebsite = HTMLwebsite.replace("%data%", bio.contacts.website);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedLinkedin);
	$("#topContacts").append(formattedWebsite);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedBioPic);

	$("#header").append(formattedWelcomeMessage);

	if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);

		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
	}
}

displayHeader();



function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedEmployerTitle = formattedTitle + formattedEmployer;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		$(".work-entry:last").append(formattedCity);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
}

displayWork();


function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%urldata%", projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

displayProjects();

function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDegree = formattedSchool + formattedDegree;

		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);

		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$(".education-entry:last").append(formattedCity);
	};
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLonlineClassesStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;

		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedURL);
	}
}

displayEducation();


$(document).ready(function(){
    alert("This is not an official resume. This project is to demonstrate use of JavaScript objects to dynamically fill in HTML.");
  });

