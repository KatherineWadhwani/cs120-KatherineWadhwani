Project by Katherine Wadhwani

Correctness and Troubleshooting;
To the best of my understanding, all parts of this project have been implemented correctly.

Collaboration:
I did not discuss the project with anyone.

Hours to Complete:
I took about 5 hours to complete the lab.

Performance Enhancement Results:
      Load CSS first
             Without enhancement:   My page took 495 ms to finish loading and 1.9 MB were loaded.
             With enhancement:      My page took 400 ms to finish loading and 1.9 MB were loaded.
      Minify CSS
             Without enhancement:   My page took 400 ms to finish loading and 1.9 MB were loaded.
             With enhancement:      My page took 416 ms to finish loading and 1.9 MB were loaded.
      Move JavaScript
             Without enhancement:   My page took 400 ms to finish loading and 1.9 MB were loaded.
             With enhancement:      My page took 505 ms to finish loading and 1.9 MB were loaded.
      Minify JavaScript code
             Without enhancement:   My page took 400 ms to finish loading and 1.9 MB were loaded.
             With enhancement:      My page took 362 ms to finish loading and 1.9 MB were loaded.
      
Performance Enhancements Analysis:
No matter the modification, 1.9 MB of data were always loaded. Thus, enhacements appeared in the form of speed. I had
originally forgotten to load my CSS first, so this was an important enhacement I incorporated in my final result. My website
already loaded the JavaScript last (script tag right before closing body tag), so no change was necessary here. I was
surprised that loading the JavaScript last and minifying the CSS did not confer an advantage. However, it's worth noting that
loading the page in a new window under the same conditions and clearing the cache still elicited different results, so there was
substantial variation which could explain why I didn't see the expected enhancements. Conversely, minifying the JavaScript code
appeared to greatly impove efficiency. I hypothesize that a significant increase in preformance was seen when minifying the
JavaScript file, as compared to minimizing the CSS file, because the Javascript file was was much larger.
