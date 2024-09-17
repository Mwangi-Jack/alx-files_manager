# Files manager 

> Back-end
> JavaScript
> ES6
> NoSQL
> MongoDB
> Redis
> NodeJS
> ExpressJS
> Kue

![image](https://github.com/RichardMiruka/alx-files_manager/assets/105627752/e25cb26f-2313-4ae0-a40a-0a61246dd9e9)

This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination and background processing.

The objective is to build a simple platform to upload and view files:

* User authentication via a token
* List all files
* Upload a new file
* Change permission of a file
* View a file
* Generate thumbnails for images

You will be guided step by step for building it, but you have some freedoms of implementation, split in more files etc… (utils folder will be your friend)

## Resources 

* [Node JS getting started](https://intranet.alxswe.com/rltoken/buFPHJYnZjtOrTd610j6Og)
* [Process API doc](https://intranet.alxswe.com/rltoken/uYPplj2cPK8pcP0LtV6RuA)
* [Express getting started](https://intranet.alxswe.com/rltoken/SujfeWKCWmUMomfETjETEg)
* [Mocha documentation](https://intranet.alxswe.com/rltoken/FzEwplmoZiyGvkgKllZNJw)
* [Nodemon documentation](https://intranet.alxswe.com/rltoken/pdNNTX0OLugbhxvP3sLgOw)
* [MongoDB](https://intranet.alxswe.com/rltoken/g1x7y_3GskzVAJBTXcSjmA)
* [Bull](https://intranet.alxswe.com/rltoken/NkHBpGrxnd0sK_fDPMbihg)
* [Image thumbnail](https://intranet.alxswe.com/rltoken/KX6cck2nyLpQOTDMLcwxLg)
* [Mime-Types](https://intranet.alxswe.com/rltoken/j9B0Kc-4HDKLUe88ShbOjQ)
* [Redis](https://intranet.alxswe.com/rltoken/nqwKRszO8Tkj_ZWW1EFwGw)

## Learning Objectives

* how to create an API with Express
* how to authenticate a user
* how to store data in MongoDB
* how to store temporary data in Redis
* how to setup and use a background worker

# :book: ALX Backend User Data.
## :page_with_curl: Topics Covered
1. Personal Data.
2. Basic authentication.
3. Session authentication.

## :wrench: Project setup.
```bash
# Create project directory and readme.
mkdir ./alx-backend-user-data/
touch ./alx-backend-user-data/README.md

cd alx-backend-user-data


# Create repository.
git init
git add .
git commit -m 'first commit'
git remote add origin <REMOTE_URL>
git push

# Create gitignore file.
touch .gitignore

echo '*/__pycache__/
' > .gitignore
```

# :computer: Projects
## [0x00. Personal data](0x00-personal_data)
The project is about personal data and user management. The project required implementing;
* A log filter to obfuscate PII fields
* Encrypting passwords
* Checking the validity of an input password
* Authenticating to a database using environment variables. 

### :wrench: Project setup.
```bash
# Create project directory and readme.
mkdir ./0x00-personal_data/
touch ./0x00-personal_data/README.md
cd 0x00-personal_data
```
> [:point_right: Go to project](0x00-personal_data)

## [0x01. Basic authentication](0x01-Basic_authentication)
The project involves learning about the authentication process and implementing a Basic Authentication on a simple API written in Python Flask Framework requiring knowledge in;
* REST API Authentication Mechanisms
* HTTP header Authorization
* Flask, and 
* Base64 concepts.

### :wrench: Project setup.
```bash
# Create project directory and readme.
mkdir ./0x01-Basic_authentication/
touch ./0x01-Basic_authentication/README.md
cd 0x01-Basic_authentication
```
> [:point_right: Go to project](0x00-python_variable_annotations)

<!---->
## [0x02. Session authentication](0x02-Session_authentication)
The project is about implementing a session authentication mechanism without installing any other module. The learning objectives of the project include;
* Understanding authentication, session authentication.
* Cookies, sending cookies, and parsing cookies.

### :wrench: Project setup.
```bash
# Create project directory and readme.
mkdir ./0x02-Session_authentication/
touch ./0x02-Session_authentication/README.md
cd 0x02-Session_authentication
```
> [:point_right: Go to project](0x02-Session_authentication)
<!---->

# :man: Author and Credits.
This project was done by [SE. Caleb Musau](https://github.com/MuSnr). Feel free to get intouch with me;

:iphone: WhatsApp [+2540791072861](https://wa.me/2540791072861)

:email: Email [calebmuteti4@gmail.com.com](mailto:calebmuteti4@mail.com@gmail.com)

:thumbsup: A lot of thanks to [ALX-Africa Software Engineering](https://www.alxafrica.com/) program for the project requirements.

