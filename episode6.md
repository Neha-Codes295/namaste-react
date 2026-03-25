<!-- ***Episode 6 - Part 1***  -->
<!-- 
Explore the world of react

Monolith & Microservice architecture

**Monolith Arch
Traditional method of developing apps
Huge project includes code of apis, UI code, auth code, DB connectivity, SMS code
even if i do small change, need todo change in whole app

**Microservices Arch (UBER)
diff service for ddiff jobs
backend, UI, db, auth, sms, email
all these combine to form a big app
they talk to each other depending on use cases
i.e. ****Separation of concerns & Single responsibility principle****
How do services interact with each other?
diff port pe we can deploy them, on same base, but call to diff urls

 -->




<!-- ***Episode 6 - Part 2***  -->
<!-- 
stop using mockData & see how to dynamically fetch data from api
**2 approach to fetch data from backend
1. app loads-> make api call to fetch data & render on UI
    until api fetches(500 ms it takes), after 500 ms only UI will render    
    (loads-> api -> render)

2. app loads-> render it then make api call & re-render
    (loads-> render -> api -> re-render)

always we'll use 2nd***
better approach as better UX
react has fast & best render mechanism

 -->




<!-- ***Episode 6 - Part 3***  -->
<!-- let's begin code
***useEffect hook -> takes 2 prm(callback fxn , dependency arr)
when comp will render, after that callback fxn is called
for 2nd approach
we'll fetch data: superpower given to us by browsers, which a JS engine has
fetch will return a promise via async/await or .then/.catch
convert data to json then

origin -> mismatch : browser blocks api call i.e. CORS policcy
use allow CORS extension to get rid of it , just for local exploring

Hook: normal JS fxn

 -->





<!-- ***Episode 6 - Part 4***  -->
<!-- 
improve experience more
instead of empty screen initial rendering , loding spinner usage -> not much good

use shimmer UI: load fake page, until data fetched
(followed nowadays)
as a new comp

 -->





<!-- ***Episode 6 - Part 5***  -->
<!-- need of usestate?
login/logout creation , just ui ,not auth
in header

 -->





<!-- ***Episode 6 - Part 6***  -->
<!-- 
Search bar building

 -->




<!-- ***Episode 6 - Part 7***  -->
<!-- search bar complete
2 use states

Flow becomes:
API → store in listOfRests (original)
Copy → filteredList (UI)
Apply filters/search → only update filteredList

 -->