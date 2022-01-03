(ENDPOINTS UPDATED! CHECK YOUR AXIOS ROUTES!!!)

** public.user table: **
-- columns --
user_id(PK) | name(req) | email | photo | password(req) *encrypted

current userLogin info: name - password
"Huy Bui" - “123”
"Will Sentance" - “codesmith”
"Harry Potter" - “hedwig”
"Ron Weasley" - “scabbers”
"Hermione Granger" - “crookshanks”
"Remus Lupin" - “padfoot”



** public.incident table: **
-- columns --
incident_id(PK) | street_name(req) | image_url(req) | details(req) | time | user_id | location_id | title(req) | video_url(req)

1	| "4848 Rue Loiret, San Jose, CA 95136"	|	null | "Illegal fireworks going off!" |	"1/3/2022, 8:55:27 AM" | null |null |	"noise complaint"	



** Endpoint Routes (UPDATED) Please check your axios requests match :D **
'api/users'
  - gets all users from public.user table

'api/incidents'
  - gets all incidents from public.incident table

'api/incidents/user'
  - gets name, photo from pulblic.user by userName
  - need to provide username and password in req.body object
  - username must be the same in public.user.name
  - bcrypt.compare will check to see if password matches hashed password in public.user.password


'api/incidents/location/:name',
  - gets all incidents from public.incident by whatever you pass in as name.
  - it will look in public.incident.street_name column, and return any matches 
  - Can target address, city, state, or zipcode
 

'api/postevent'
  - posts data into a row in the public.incident table


'api/signup',
  - posts name, encrypted password into a row in the public.user table


'/api/incidents/update-title:id',
'/api/incidents/update-streetname:id',
'/api/incidents/update-video:id',
'/api/incidents/update-image:id',
'/api/incidents/update-details:id',
  - updates the corresponding column in public.incident. id needs to be the incident_id of the incident you want to update. What you pass in req.body will be the updated info.

