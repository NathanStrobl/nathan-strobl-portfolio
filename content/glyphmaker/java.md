+++
title = 'Project Overview'
date = 2023-04-16
draft = false
+++
<div class="technologies">
	<a title="Java"><img src="/technologies-logos/java.png"></a>
	<a title="JavaFX"><img src="/technologies-logos/javafx.png"></a>
</div>

## Background
Creating custom fonts and glyphs for use on Arduino projects using the Adafruit GFX library can be tedious, requiring many hex codes to be manually calculated and imported into a C header file in a very specific way; in the interest in not wasting the time of my readers, I won’t be delving into all of the specifics here, but [this article from Adafruit](https://learn.adafruit.com/creating-custom-symbol-font-for-adafruit-gfx-library/creating-new-glyphs) is a great resource if you are interested in learning more about this process. To streamline the development of my other project, [CartCockpit](/cartcockpit/overview), I developed this JavaFX application so that I could simply draw characters/glyphs of any size onto a grid of pixels and have the computer generate the hex codes for me. Though the program is relatively basic, given that its purpose was to expedite another project, I think it struck the right balance of functionality and time-efficiency. 

---

## Using GlyphMaker
### Starting the Application
To start GlyphMaker, simply start the JAR file provided in the /out/artifacts/GlyphMaker_jar directory.
<img src="/media/glyphmaker/jar-file.png" style="max-width: 700px">

### Generating the Grid
The application starts by prompting the user to enter the desired size of the glyph; note that the column count must be a multiple of eight due, for one hex code represents eight pixels (this does not apply to rows). Once a size has been entered, press the 'Generate Screen' button, and a grid of blank pixels will be generated; the user can then plot their glyph pixel by pixel. 
<div style="display: grid; grid-template-columns: 1fr 1fr">
	<img src="/media/glyphmaker/glyph-size.png">
	<img src="/media/glyphmaker/blank-grid.png">
</div>

### Converting to Hexadecimal
After the drawing is complete, the hitting the 'Convert to Hexadecimal' button will generate the hex codes in a new window.
<div style="display: grid; grid-template-columns: 1fr 1fr">
	<img src="/media/glyphmaker/service-battery-grid.png">
	<img src="/media/glyphmaker/service-battery-hex.png">
</div>

### Getting the Glyph onto the Arduino
The user can then copy these hex codes and place them in a font header file. 
<div style="display: grid; grid-template-columns: 1fr 1fr">
	<img src="/media/glyphmaker/service-battery-header-hex.png">
	<img src="/media/glyphmaker/service-battery-header-def.png">
</div>

The font containing the glyph can now be included in the Arduino program and displayed on the Arduino.
<br></br>
<img src="/media/glyphmaker/on-arduino.jpg" style="max-width: 700px">
<br></br>
Voila!

---

## Check It Out For Yourself!
To assist others who are working Arduino projects that also require custom glyphs, and to potentially collaborate with others on adding new features, I have made this program open-source and available on GitHub. If you are interested in examining the code of this program or running the program to understand its functionality, feel free to visit [its GitHub page](https://github.com/NathanStrobl/GlyphMaker)!