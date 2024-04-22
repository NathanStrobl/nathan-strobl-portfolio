+++
title = 'Project Overview'
date = 2024-01-23
draft = false
+++
<div class="technologies">
	<a title="JavaScript"><img src="/technologies-logos/javascript.png"></a>
	<a title="ReactJS"><img src="/technologies-logos/reactjs.png"></a>
	<a title="Python"><img src="/technologies-logos/python.png"></a>
	<a title="Flask"><img src="/technologies-logos/flask.png"></a>
	<a title="Linux"><img src="/technologies-logos/linux.png"></a>
	<a title="Docker"><img src="/technologies-logos/docker.png"></a>
	<a title="Caddy"><img src="/technologies-logos/caddy.png"></a>
</div>

## TL;DR
This project was a collaborative effort with my colleagues aimed at streamlining some of the monotonous tasks we encounter while working as technicians for RIT Auxiliary Services Tech. While my coworkers focused on reverse engineering APIs for the various services we use and creating Python scripts to communicate with them, I concentrated on leveraging React to design a simple and effective UI, linking their Python scripts to this UI using Flask, and hosting the web application on my server. Though this project has been completed and is currently in use, our work on it is far from over; we persistently make updates to incorporate new functionality into our existing modules and create new ones to adapt to our continually changing workflow. 

---

## Background
### The Need for Better Tools
At RIT Auxiliary Services Tech, a significant part of our job revolves around maintaining the 
Point of Sale (POS) and online ordering systems for the university’s Dining division. In doing this, we encounter many issues with the application that are used to interface with these systems, ranging from severely outdated software and/or poorly designed user interfaces; I won’t go into too much detail here, but suffice it to say that these challenges hampered our efficiency and effectiveness. In response to these problems, some members of our team took it upon themselves to create better alternatives using Python. 

### Making Our Tools Accessible
While these application proved to be incredibly useful, they presented their own set of challenges. Being simple Python scripts, they were command line-only, which, while fine for us computing majors, proved to be a bit too intimidating for the majority of the office to adopt. The process of packaging and distributing these apps, especially across multiple different types of systems, was also more complicated than desired, making both deploying and updating these tools more trouble than it was worth. Seeing this situation, I decided to begin developing a solution that would address both the usability and distribution problems: a web application.

---

## Application Overview
While this application supports many different functions, workflows, and functions, most of this functionality is resides within the modules created for it; detailed descriptions of these modules are already provided below, so this section will focus more on how the application supports these modules. 

### Modularity
The application’s primary goal is to serve as a container for our various internal tools; these tools take the form of modules, and they are displayed as a grid of icons on the homepage, as depicted below: 
<img src="/media/ritasp/home.png" style="max-width: 700px">
Notably, these modules are designed for easy insertion and removal without impacting the other modules or the application itself; this is especially valuable because it allows us to the application and its functions to adapt as our workflow evolves and changes.

### Unified User Interface
The application is also responsible for supplying all of the UI elements that are shared across modules, such as buttons, panels, and icons. This can be seen by taking a look at [the modules below](#modules), which all feature the same cohesive and simplistic interface. 

### Authentication Management
In addition to the aforementioned responsibilities, the application also seamlessly manages users’ tokens from various services across all modules. To assist users with keeping track of the status of their tokens, and facilitating reauthenticating when needed, the application also features an Authentication Manager module:
<img src="/media/ritasp/authentication-manager.png" style="max-width: 700px">
Much like the application itself, the authentication module is very modular, allowing for the addition of new services without impacting the existing ones.  
>The Authentication Manager can easily be expanded to support many different services; two are shown here.
><div style="display: grid; grid-template-columns: 1fr 1fr">
>	<img src="/media/ritasp/rguest-auth.png">
>	<img src="/media/ritasp/ydi-auth.png">
></div>

---

## Hosting
Before taking on this project, I lacked any experience with hosting web pages/applications, making this the perfect opportunity to broaden my skillset. With the guidance of my colleagues, who were much more seasoned in self-hosting, I successfully configured my own web server running Alpine Linux with Caddy as its HTTP server. To serve this application, I opted to use containerization through Docker, with the React application and each of its services getting their own containers and communicating with each other through HTTP requests. The decision to host this project myself over using cloud alternatives was influenced by two primary factors: first, as a college student with student debt piling up, utilizing one of my many dormant computers for hosting was a much more cost-effective option than paying for a subscription to a cloud service; second, self-hosting afforded me valuable insights into web development and internet mechanics that I could not have gained through cloud-hosting. 

---

## Modules
Featured below are some of the modules that our team has been working on:
### OnDemand Quick86
Temporarily removing items (or ‘86ing’) from our online ordering system through the provided interface is, to put it lightly, far from streamlined. The process typically entails waiting a minimum of fifteen seconds to load a single item, and pressing multiple buttons to get the changes to take effect. With the number of items requiring removal getting larger, and the response time of the provided interface getting even slower, we decided that a change was needed; Quick86 emerged as the solution, enabling users to remove items and push changes in a single click, much simpler than the provided utility. We are hoping to add some more features to this in the coming months, including more robust mobile support for when we’re out on the field, scheduling items to be returned automatically, and a favorites view that lets users put their most frequently configured items in one place.  

<img src="/media/ritasp/quick86/quick86.png" style="max-width: 700px">

### ShopOne Invoice Utility
This tool was developed to expedite the process of generating and sending invoices for Shop One, our on-campus arts and crafts store. This application takes a vendors file and sales file generated by our inventory management software, Yellow Dog Inventory, and creates invoices for each vendor; these invoices can then be emailed directly from the application, with the email already being prefilled out based on the data from the vendors file. With the high number of vendors selling at this store (sometimes exceeding forty), this tool has significantly improved our efficiency when it comes to managing and distributing invoices.  
<div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr">
	<img src="/media/ritasp/shop-one-invoice-utility/initial.png">
	<img src="/media/ritasp/shop-one-invoice-utility/selecting-file.png">
	<img src="/media/ritasp/shop-one-invoice-utility/invoices-generated.png">
	<img src="/media/ritasp/shop-one-invoice-utility/email-generated.png">
</div>

### OnDemand MenuScheduler (in dev)
The menu scheduling utility within our online ordering system’s backend interface is another element that needs significant improvement. Currently, days are divided into over thirty discrete ‘dayparts’, each lasting fifteen minutes, and locations’ online menus must have a menu attached to each daypart; consequently, defining a schedule for a single location necessitates adjusting settings thirty times, once for each daypart. This system consumes a vast amount of time for even the simplest of changes, so we are currently developing another module to address this issue that will feature an interface inspired by the likes of iCal and Google Calendar. Because this module is still under development and does not yet have an interface to show, I can provide an example of how menu scheduling looks in our current software to demonstrate how desperately an improvement is needed:
>This list is much longer than it looks.
><img src="/media/ritasp/od-sucks.png" style="max-width: 700px">

---

## Project Reflection
I feel strongly that undertaking this project proved beneficial for both me and my colleagues at Auxiliary Services Tech, for it marked my first foray into web development and server setup, as well as provided my coworkers with tools that made their jobs more streamlined. I’m pleased with the outcome of this endeavor and am eager to see what else I can accomplish in the realm of web development!