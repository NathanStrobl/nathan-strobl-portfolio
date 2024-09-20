+++
title = 'Web Rewrite'
date = 2024-09-14
draft = false
+++
<div class="technologies">
	<a title="SvelteKit"><img src="/technologies-logos/sveltekit.png"></a>
	<a title="TypeScript"><img src="/technologies-logos/typescript.png"></a>
</div>

## TL;DR
After [making the Java version](/glyphmaker/java) of the application in my freshman year of college, I always felt that it left much to be desired. Now that I am in my third year and have had a lot more time to improve my skills, I felt that now was the opportunity to both port GlyphMaker to a more accessible platform, while also adding some much needed features, like a more intuitive user interface, the ability to group glyphs into fonts, and automatically generating files for said fonts. Overall, I feel that taking on this project both made GlyphMaker a more complete product and while helping me further develop my web development skills. 

---

## My motivation for rewriting
### Accessibility
Being written in Java, the previous version of the application required the user to have the Java Runtime Environment to be able to use it. While this isn’t a huge deal, I wanted to ensure that users would be able to start making glyphs without having to install any other dependencies on their computer, and what better way to do this than with something that every modern computer comes with: the web browser.

### Updating the UI
JavaFX looks pretty dated out of the box, and I find that it is more tedious to make a modern and flexible user interface with it than with HTML and CSS. Seeing as [the previous version of GlyphMaker](/glyphmaker/java) left something to be desired in its user experience, I figured that porting it to the web would allow me to address this shortcoming while also making other improvements to the application.

### Implementing much-needed features
Ever since writing this software in my freshman year of college, I always felt that the application was incomplete. Users could only make one glyph at a time, couldn’t save glyphs and return to them later, and still had to copy the hex codes manually into their font files. Seeing as my programming skills have developed a great deal during my time as a student, I felt that now was the perfect time to fully develop GlyphMaker into the application that I always thought it should be.

---

## Choosing the stack
### SvelteKit
Instead of choosing a more widely-used framework like React for this project, I decided on SvelteKit. Due to its lack of a virtual DOM and extensive compile time optimizations, it is more performant than other JavaScript frameworks (you can read more about it here). In addition to this, Svelte features built-in libraries for animation and, in my opinion, a better developer experience than React, allowing me to get this application developed within my limited free time. 

### TypeScript
Rather than using plain JavaScript, I felt that TypeScript would be better suited for this application. In addition to my own desire to dabble with TS for the fun of it, GlyphMaker is an application that greatly benefits from the static typing and better OOP support that TS provides. Plus, SvelteKit has much tighter integration with TypeScript than React, so it seemed like the most logical choice. 

### Client-side rendering
I decided to make the web version of GlyphMaker operate completely on the client, for I run my web server out of my house, meaning I have to share limited bandwidth with my housemates; furthermore, the application will operate faster without having to constantly contact my server for data and calculations. This doesn’t mean that I plan to keep it this way forever, for I would like to implement the ability to create accounts and save their work to my server in the future. 

---

## Improvements made
### Improved editor
The primary area that I focused on when rewriting GlyphMaker was its editor. The previous version’s editor was suboptimal, to say the least; the user had to click each individual pixel to toggle them, resulting in quite a bit of fatigue after making just a few dozen glyphs. The new version of this application rights these wrongs, resulting in a much more enjoyable and painless glyph-making experience.

<img src="/media/glyphmaker/web/editor-dragging.gif" style="border: 1px solid; border-radius: 0.25rem">

### Ability to save work
The next major problem with the initial version of GlyphMaker was that glyphs only persisted for as long as the Java applet was open; once the user closed the application or wanted to start working on another glyph, they would not be able to modify it without completely redrawing it. Now, glyphs are saved automatically to the browser’s cookies and can be modified after their initial creation.

<video autoplay loop>
	<source src="/media/glyphmaker/web/switching-between-glyphs.mp4" type="video/mp4">
</video>

### Grouping glyphs into fonts
Another major problem with the last version of this application was that it only allowed the user to create one glyph at a time, with the user still having to assemble the glyphs into their own font files after converting them to hex. The new version of GlyphMaker takes on a whole new approach, allowing users to create entire collections of glyphs (called fonts) at a time. 

<img src="/media/glyphmaker/web/font-contents.png" style="border: 1px solid; border-radius: 0.25rem">

### Exporting font files
With the new font paradigm and ability to assign names to glyphs in this version of GlyphMaker, exporting completely finished font files is now possible. In addition to exporting fonts as Adafruit GFX font files, this version of the application can also export raw hexadecimal and decimal codes, ensuring that a variety of 8-bit bitmap sprites-based graphics systems can take advantage of this tool.

<div class="image-grid">
	<img src="/media/glyphmaker/web/export-modal.png">
	<div class="image-grid">
		<img src="/media/glyphmaker/web/export-file-1.png">
		<img src="/media/glyphmaker/web/export-file-2.png">
	</div>
</div>

---

## The Result
If you have a use for this tool, or just simply want to take a look at it, it can be accessed by visiting https://glyphmaker.nathan-strobl.org. For those who want to look without interacting with it, I will be providing some screenshots of me using it for another Arduino and Adafruit GFX-based project soon!

---

## Future Features
### Importing fonts
In the future, I would like users to be able to import Adafruit GFX font files so that small tweaks can be made to existing fonts without having to recreate them in GlyphMaker from scratch.

### User accounts and cloud storage
I would also like to implement a system where users can create accounts and store their glyphs on the server, so that the risk of losing data due to issues with browser cookies is eliminated, and so that users can share glyphs and fonts with others who are signed up for an account. 

---

## Thanks for reading!
Thanks for taking the time to read about my new project! I encourage you to check it out using the link in [the Result section](#the-result), and to also check out some of my other projects in the sidebar.