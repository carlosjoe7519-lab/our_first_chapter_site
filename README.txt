OUR SECOND CHAPTER — PROJECT FILES

WHAT IS INCLUDED
- index.html: the opening surprise page
- chapters.html: the six-chapter menu
- story.html: your personal story, already written in Carlos's voice
- memories.html: displays your six existing photos
- surprises.html: twelve interactive, heartfelt notes
- distance.html: the long-distance chapter
- letters.html: three personal letters
- final-surprise.html: the final anniversary message
- css/style.css and js/app.js: design and interactions

IMPORTANT: KEEP YOUR EXISTING ASSETS
This package includes the replacement song as love-song.mp3.
It intentionally does not contain your personal photos or PDF.
Keep these existing files/folders in your project:
- pics/pics1.jpg through pics/pics6.jpg
- our_first_chapter_love_book.pdf (if you still want to keep it)

HOW TO INSTALL
1. Make a backup of your current project folder.
2. Extract this ZIP into your existing project folder and allow the new HTML, css, js, and love-song.mp3 files to replace the old versions.
3. Do not delete the pics folder or your PDF.
4. The new song is already named love-song.mp3, so no renaming or code edits are needed.
5. Start a local server from the project folder:
   python3 -m http.server 8000
6. Open http://localhost:8000

MUSIC NOTE
The landing-page button starts playback from a direct click. Browsers sometimes stop audio when moving between separate HTML pages or block automatic playback. Each chapter therefore has a Play our song button. If playback pauses after navigation, tap that button once.

PHOTOS
The memory page expects:
pics/pics1.jpg
pics/pics2.jpg
pics/pics3.jpg
pics/pics4.jpg
pics/pics5.jpg
pics/pics6.jpg

SONG REPLACEMENT
Use an MP3 file. Give it the exact name love-song.mp3 and place it beside index.html, chapters.html, and the other HTML files. This way no code changes are needed.
