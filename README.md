# BaceFook Social Media Platform Backend
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
  ## Description
  This project is designed to demonstrate a proof of concept of the backend of a social media platform known as BaceFook. The platform uses mongoose to get information from a MongoDB database on users, thoughts, and reactions. This is a NOSQL platform meaning that a typical seeds and schema.sql template does not need to be used to make this project work. 

  ## Link To The Demo Video
  
  
   ## Installation
   ## User Story
  AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

  ## Acceptance Criteria
  GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
  ## Usage
 Once the installation instructions have been followed, the user must open the bash terminal and type "npm start" every time they'd like to use this application. The application can then be viewed and altered using insomnia, which is what the application is mainly designed to work with. It is also possible to use a plugin such as Postman in VScode, but this application has not been tested with the Postman platform. In insomnia the routes can be seen on the left-hand side of the screen and can be tested and populated with information by the user. For more information on how to use insomnia, a guide can be found here https://docs.insomnia.rest/insomnia/get-started

  ## Contributing
  This project was created by Luke Stroehlein from scratch with help from the BCS tutor Collin Porter for initial set up. Much help was found on the internet including resources such as w3schools and stack overflow.
  ## License
  This project is licensed under the MIT license.
  ## Tests
  The best way to test this project is to start the application in the command line and then enter the localhost url in insomnia. Data entry can be verified by testing the routes in the insomnia application and then  checking to see if the user's entry or deletion is reflected in the database.


  ## Questions
  If you have any questions, please feel free to reach out to me at strolinedigital@gmail.com. 
  You can also view my GitHub profile at https://github.com/StrolineDigital



