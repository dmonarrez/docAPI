# Doc API

A program that lets user find doctors by searching either by name or the condition that they are trying to get seen for

## Getting Started

* Clone from https://github.com/dmonarrez/docAPI
* Find the file in your terminal and run `$ npm install` to get required packages

Now you need to set up your own API key...
* Visit the BetterDoctor API site and click “Get a free API key”.
* Fill out the form, listing Epicodus as the Organization/Company Name.
* Your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications.

Now you need to store your API key in the application before running...
* Place your token in an .env file at the top level of your directory (name the variable 'apiKey = "your-key-here"').
* Include .env in .gitignore.

Now launch...
* In terminal, `$ npm run start`
* The program should open in your preferred browser

## Description

Use this program when you need help finding doctors in the Portland area. Simply input the ailment that you need treated and we will show you 10 doctors with practices in Portland along with all their contact information and where you can find them. You can also search for your preferred doctors by name!

## Authors

* **David Monarrez** - [Github](https://github.com/dmonarrez)

## Specs

Specification | Input | Output
------------- | ----- | ------
Returns doctors based on condition input | Condition: Pain | Lisa Goldthwaite 2101 NE 139th St, Vancouver, WA 98686 3604872701 <br><br> 3181 SW Sam Jackson Park Rd, Portland, OR 97239 <br> 5034948211
Returns doctors based on name input | First Name: David | David Le 707 SW Gaines St, Portland, OR 97239 <br> 5034946513


## Known Bugs

Because of how some Doctor Objects are set up in the API, you may see some repeat addresses or other pieces of information.

## License

Copyright (c) 2019 **_David Monarrez_**
<br>
MIT
