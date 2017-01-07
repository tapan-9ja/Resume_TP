//bio JSON
var bio = {
    "name": "Tapan Parikh",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+918976662999",
        "email": "tapanpar@gmail.com",
        "github": "tapan-9ja",
        "location": "Mumbai, Maharashtra, India"
    },
    "welcomeMessage": "Welcome to my interactive resume.I'm a freshly graduated Engineer from Mumbai.",
    "skills": [
        "HTML", "CSS", "jQuery", "SQL", "JavaScript"
    ],
    "biopic": "images/tpp_logo_web.png"
};


//education JSON
var education = {
    "schools": [{
        "name": "Mumbai University",
        "dates": "2012 - 2016",
        "location": "Vasai, Mumbai, India",
        "degree": "B.E( Bachelor of Engineering )",
        "majors": "Electronics ",
        "minor": "Telecommunication",
        "url": "http://vcet.edu.in"
    }, {
        "name": "Shri T. P. Bhatia Jr. College of science",
        "dates": "2010 - 2012",
        "location": " Kandivali,Mumbai, India",
        "degree": "H.S.C",
        "majors": ["Science", "Bifocal"],
        "minor": "Electronics",
        "url": "http://www.kes.ac.in/index.php"
    }, {
        "name": "Swami Vivekanad International School",
        "dates": "2000 - 2010",
        "location": " Borivali,Mumbai, India",
        "degree": "S.S.C",
        "majors": "",
        "minor": "Sanskrit",
        "url": "http://www.svischool.com"
    }],

    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front End web Developer Nanodegree",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "school": "Microsoft",
        "title": "Microsoft Technology Associate (SQL Web Fundamentals)",
        "dates": "2015",
        "url": "https://www.microsoft.com/en-us/learning/mta-certification.aspx"
    }]
};




//work JSON
var work = {
    "jobs": [{
        "employer": "IEEE VCET-SB",
        "title": "Deputy Robotics Club Head",
        "location": "Vasai, Thane, India",
        "dates": "June 2014 - May 2015",
        "description": "My primary responsibilities involved organising the various robotics events."
    }, {
        "employer": "ETA Committee",
        "title": "Editor",
        "location": "Vasai, Thane, India",
        "dates": "June 2015 - May 2016",
        "description": "I worked as the chief editor for the various publications of the committee - Quartely newsletters and annual Magzine-PULSE."
    }]
};




//project JSON
var projects = {
    "projects": [{
        "title": "Online Portfolio Site",
        "dates": "September 2016",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree",
        "images": ["images/portfolio_s.jpg"],
        //"url": ""
    }, {
        "title": "Animal Trading Card",
        "dates": "September 2016",
        "description": "Created an Animal Trading Card as part of Udacity's Front-End Web Developer Nanodegree",
        "images": ["images/animaltcard.jpg"],
        //"url": ""
    },{
        "title": "Website Optimization Project",
        "dates": "November 2016",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree",
        "images": ["images/WebOptimization_s.jpg"],
        "url": "https://tapan-9ja.github.io/Pro4_WebsiteOptimization/"
    },{
        "title": "Frogger Game",
        "dates": "November 2016",
        "description": "Created a classic arcade game using JavaScript and canvas as part of Udacity's Front-End Web Developer Nanodegree",
        "images": ["images/Frogger_s.jpg"],
        "url": "https://tapan-9ja.github.io/ProFroggerGame_TP/"
    },{
        "title": "Neighborhood Map Project",
        "dates": "December 2016",
        "description": "This web app was created as part of Udacity's Front-End Web Developer Nanodegree. The project was built using Google Maps APIs and FOURSQUARE APIs with knockout.js framework.",
        "images": ["images/Nmap_s.jpg"],
        "url": "https://tapan-9ja.github.io/ProNmap_TP/"
    }]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(formattedSkill);
        }
    }
    for (var i = 0; i < formattedContactInfo.length; i++) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }
};
bio.display();



work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();



projects.display = function() {
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (var img = 0; img < projects.projects[i].images.length; img++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

projects.display();

education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolMinor);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
    }
};

education.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);