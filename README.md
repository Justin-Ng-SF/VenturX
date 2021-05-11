-------------------------------------------------------------
How to use:
-------------------------------------------------------------
If running locally, go to localhost:5000/greetings/ and type your name after the slash.
If you wish to not run it locally, use the ip address http://3.15.19.81:8888/greetings/ or the DNS ec2-3-15-19-81.us-east-2.compute.amazonaws.com/greetings/ and type your name after the slash
*Note, will not accept the following characters: <>/?\|!@#$%^&*()`~
-------------------------------------------------------------


-------------------------------------------------------------
To run locally:
-------------------------------------------------------------
install dependences:
npm install express express-validator 

then go to http://localhost:5000/greetings/yournamehere


-------------------------------------------------------------
To run image locally:
-------------------------------------------------------------
make sure you have Docker downloaded
make sure node_modules is not in the root directory when building image

create image: 
docker build -t image-name .

run image on port 8000: 
docker run -it -p 8000:5000 venturx-node-server


-------------------------------------------------------------



Technologies used:
-------------------------------------------------------------
Express - used for api
Express Validator - validate input
Node - used for server
Heroku - deployed with
Docker - used to containerize 
-------------------------------------------------------------


Instructions given:
-------------------------------------------------------------
Build a node express server with a GET endpoint for a "greetings" resource that takes a parameter :name and responds with a text greeting.
E.g.:
GET /greetings/VenturX
Should return:
"Hello, VenturX!"
Then, contenarize the server using Docker and deploy it somewhere (ideally Aws, but anywhere it can be accessed it's fine).
You should provide both the link to the deployed instance and a link to the github repo where the solution is stored.

We'll evaluate:
- The strict adherence to the above specifications
- The cleanliness of both your application code and your docker image
- The application's handling of edge cases: sending no parameters, sending null or undefined as a parameter, sending code or regex as a parameter and sending ' or " as a parameter (feel free to handle and document other parameters on top of those)
- How easy it is to run the application
-------------------------------------------------------------