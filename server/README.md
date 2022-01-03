Endpoint Routes:

'api/users'
  - gets all users from public.user table

'api/incidents'
  - gets all incidents from public.incident table

'api/incidents/user'
  - gets name, photo from pulblic.user by userName
  - need to provide username and password in req.body object
  - username must be the same in public.user.name
  - password must be the same in public.user.password


'api/incidents/location/:name',
  - gets all incidents from public.incident by whatever you pass in as name.
  - it will look in public.incident.street_name column, and return any matches 
  - Can target address, city, state, or zipcode
 

'api/postevent'
  - posts data into a row in the public.incident table


'api/newuser',
  - posts name, password into a row in the public.user table


'/api/incidents/update-title:id',
'/api/incidents/update-streetname:id',
'/api/incidents/update-video:id',
'/api/incidents/update-image:id',
'/api/incidents/update-details:id',
  - updates the corresponding column in public.incident. id needs to be the incident_id of the incident you want to update. What you pass in req.body will be the updated info.

