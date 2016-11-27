/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var work = {
	 "jobs":[{"employer":"ABC Company",
		 "title":"developer",
		 "location":"Bangalore",
		 "dates":"01-Jan-2005",
		"description":"first company"
			},
		 
		{"employer":"Cognizant",
		 "title":"Senior developer",
		 "location":"Pune",
		 "dates":"01-Jan-2011",
		"description":"Second company"
			}],
		
 }


 var projects = {
	 "projects" : [
			 {"title" : "Project1",
			  "dates" : "11-Nov-2016",
			  "description" : "Project 1 description",
			  "images" :["images/fry.jpg"]
			 },
			 {"title" : "Project2",
			  "dates" : "10-Oct-2016",
			  "description" : "Project 2 description",
			  "images" :["images/fry.jpg"]
			 }
	 
	 ]}

	 var bio = {
		 "name" : "Sachin Bisane",
		"role" : "Manager",
		"welcomeMessage" : "Hi, You are welcome",
		"biopic" :"images/fry.jpg",
		"contacts" : {
					"mobile" : "1223456",
					"email" : "sachin.bisane@abc.com",
					"github" : "sachinbisane",
					"twitter" : "@sachinbisane",
					"location" : "Pune"
					} ,

		"skills":["Cricket","Football"]
	    
	 }

	var education  = {
		"schools" : [
			{
			"name" : "Shriram School",
			"city" : "Ramtek",
			"degree" : "HSC",
			"dates" : "1999",
			"url" :"https://shriram.com",
			"majors" : ["Science","Maths"]
			},
			{
			"name" : "Kits collage",
			"city" : "Nagpur",
			"degree" : "BE",
			"dates" : "2005",
			"url" : "https://kits.com",
			"majors" : ["CS","IT"]
			}
	
		],

	"onlineCourses" : [
			{
				"title" : "Javascript",
				"school": "Udacity",
				"dates" : "2016",
				"url" : "https://udacity.com"
			}
		]
	}


	



	function displayWork()
	{

		var formattdName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(formattdName);

		var formattdRole = 	HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattdRole);
		
	
					

		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$(".flex-item:last").append(HTMLemail.replace("%data%", bio.contacts.email));
		$(".flex-item:last").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$(".flex-item:last").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$(".flex-item:last").append(HTMLlocation.replace("%data%", bio.contacts.location));
		
		$("#header:last").append($("#topContacts"));
		
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$(".flex-item:last").append(HTMLemail.replace("%data%", bio.contacts.email));
		$(".flex-item:last").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$(".flex-item:last").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$(".flex-item:last").append(HTMLlocation.replace("%data%", bio.contacts.location));

		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		
		if(bio.skills.length > 0)
		{
			$("#header").append(HTMLskillsStart);
			for(skill in bio.skills)
			{
				var formattdSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattdSkill);
			}
			
		}

		for(job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			var formatedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formatedJobTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formatedEmployeeTitle = formatedEmployer + formatedJobTitle;

			$(".work-entry:last").append(formatedEmployeeTitle);

			var formatedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formatedDates);

			var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formatedDescription);
		}	
	}



	$(document).click(function(loc){

		logClicks(loc.pageX, loc.pageY );
	});

	function locationizer(work_obj)
	{
		var locationArray = [];

		for(job in work_obj.jobs)
		{
			var newLocation = work_obj.jobs[job].location;
			locationArray.push(newLocation);
		}

		return locationArray;
	}


function inName(name)
{
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}		



projects.display = function(){

	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		
		var formatedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formatedProjectTitle);

		var formatedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formatedProjectDates);

		var formatedProjectDes = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formatedProjectDes);

		if(projects.projects[project].images.length >0)
		{
			for(image in projects.projects[project].images)
			{
				var formatedImage=HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formatedImage);
			}
		}
	}

	

}




function displayEduction()
{
	for(school in education.schools)
	{
		$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name ));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[school].degree ));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates ));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].city ));

		for(major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors[major] ));
		}
	}

	$(".education-entry:last").append(HTMLonlineClasses);
	for(onlineCourse in education.onlineCourses)
	{
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title ));
		$(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school ));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates ));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url ));

	}
}

displayWork();
projects.display();
displayEduction();
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);