Project by Katherine Wadhwani

Correctness and Troubleshooting;
To the best of my understanding, all parts of this project have been implemented correctly.

Collaboration:
I did not discuss the project with anyone.

Hours to Complete:
I took about 5 hours to complete the lab.

Performance Enhancement Results:
      Load CSS first, head section - When I attemped this, my page took 337 ms to finish loading and 1.9 MB were loaded.
      Minify CSS - When I attemped this, my page took 551 ms to finish loading and 1.9 MB were loaded.
      Move JavaScript - When I attemped this, my page took 300 ms to finish loading and 1.9 MB were loaded.
      Minify JavaScript code - When I attemped this, my page took 258 ms to finish loading and 1.9 MB were loaded.
      
Performance Enhancements Analysis:
No matter the modification, 1.9 MB of data were always loaded. Thus, enhacements appeared in the form of speed. I had
originally forgotten to load my CSS first, so this was an important enhacement I incorporated in my final result. My website
already loaded the JavaScript last (script tag right before closing body tag), so no change was necessary here. I was
surprised that minifying the CSS did not confer an advantage. However, this is most likely because the CSS was extremely
small. It's worth noting that loading the page in a new window under the same conditions elicited different results, so there
was substantial variation which could explain why there wasn't a noticeable enhancement when minifying the CSS. Conversely,
minifying the JavaScript code appeared to greatly impove efficiency. This is likely because the JavaScript file was much larger
than the CSS file. However, I did not incorporate the minified JavaScript code into my final result because it is much harder to
read. Because this is the beginning of the project, I will likely have to edit my file and I would prefer a slightly less
efficient version with which I can confidently interact. 
