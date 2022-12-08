                                                                   Rani Madhu Shalini 
                                                                   ------------------

1) Login.js
2) Registration.js
3) AddDonation page (Add.js)
4) view Donations page (Books.js)
5) Index.js
6) App.js
7) 404 Error page (default page for all other routes)

I am familiar with fundamentals nodejs and reactjs so I have choosen doing adding donating items to databse by donor
and removing the items from the data base which have been donated and main page which will display all the items which
are to be donated

I have divided my part into 2 folder 
1) client
2) server

1) client :-

client folder contains UI part to display the data on screen

there is an src folder in the clients folder which have 

Add.jsx - used to add a donating item to the database
       - will ask the details like (item name , address of item, name of the donor)
Books.jsx - used to display all the donating items on the main page so that users can view the items

Login.js - which displays the login page
registration.js - displays registration page

all these are connected to mysql database which is on port 8800
 
In the backend part :
In the index.js file I have connected to my user account which is in mysql database 
I have created tables - users, books

users -  table contains user details like Id, username, password   (id is private key, username and password are notnull)
books(donate) - donate table have id, item_name, item_address, donor_name (id is private key, all other fields are not null)

mysql is running on port 8800 I have used postman_application to check the working nature of API calls
