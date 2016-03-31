# Genomie
Genetic visualization application

Please visit [**our deployed website**](http://genomie.herokuapp.com)

## Introduction 

Genomie is a web application that provides beautiful data visualizations of hereditary information based on the information receieved from 23AndMe.com. Providing the user with a varieties of different views, anyone can easily interpret and understand their unique genetic information in an interactive and elegant way. Genomie provides clear and vibrant perspectives in multiple viewing environments for an optimized user experience. 

<hr>
## Table of Contents

  - [Example](#example)
  - [Installation](#installation)
  - [Technologies](#technologies)
  - [Architecture](#architecture)
  	- [API Endpoints](#api)
  - [Contributing](#contributing)
  - [Meet the Engineers](#meet-the-engineers)
  - [Questions and Issues](#questions-and-issues)

==========
## Example
![alt tag](http://i67.tinypic.com/2wce5wl.gif)

===============
## Installation
Please install Python/Flask dependencies within the root directory
```
$ virtualenv .
$ source bin/activate
$ pip install -r requirements.txt
```

Next, install the client-side dependencies
```
$ sudo npm install -g bower
$ bower install
```
**For testing**
```
$ npm install
```

You're good to go. Start the server with:
```
$ npm start
```

===============
## Technologies
Front-end
- AngularJS 
- Angular-Material
- D3.js

Back-end
- Python/Flask
- PostgreSQL
- SQLAlchemy

Testing/Automation
- Mocha/Chai
- Jasmine
- Grunt

===============
## Architecture
### High Level Architecture
![](http://i64.tinypic.com/2zpp661.png)

### Database Schema
Database in Postgres, using SQLAlchemy
![](http://i68.tinypic.com/23i6plz.jpg)

======
## API
##### Public End Points
|Request|URL|Response|
|---|---|---|
|Log-in|/receive_code/|   |
|Log-in Demo|/demo/|   |
|Log-out|/logout|   |
|Get User Info|/get_info/|{userObj}|
|Get User Relatives|/api/relatives/|{RelativesObj}|
|Get/Post SNP Data|/api/getsnps|{SnpObj}|

##### Admin Only
|Request|URL|Response|
|---|---|---|
|Access to 23&Me Individual data|/1/user/:userID|{userObj}|
|Access to 23&Me Genotype data|/1/genotype/|{genotypeObj}|
|Access to 23&Me Relative data|/1/relatives/:userID|{relativesObj}|

===============
## Contributing
Genomie was built using waffle.io as the project organization tool.
Please visit [here](gitflow.md) for our workflow guidelines.

=====================
## Meet The Engineers
Product Owner 
- [**Gar Lee**](https://github.com/LeeGar)

Scrum Master 
- [**Alex Anthony**](https://github.com/alexanthony813)

Development Team 
- [**Chris Bassano**](https://github.com/christo4b)
- [**Peter Lollo**](https://github.com/Peterlollo)

## Questions and Issues
For any issues, please refer to [**our issues page**](https://github.com/ThunderousFigs/Genomes/issues)
Please direct any questions regarding Genomie to [**our wiki page**](https://github.com/ThunderousFigs/Genomes/wiki)

Thank you!

