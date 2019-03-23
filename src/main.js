import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './backEnd.js';


$(document).ready(function() {
  //call api for list of conditions on page load
  let conditionsRequest = new XMLHttpRequest();
  let urlConditions = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=516c164ae2d246c222625a09b6daf207`

  conditionsRequest.onreadystatechange = function() {
    // console.log('request reached');
     if (this.readyState === 4 && this.status === 200) {
       const response = JSON.parse(this.responseText);
       console.log(response.data);
       } else {
       console.log(this.readyState);
     }
   }

   conditionsRequest.open("GET", urlConditions, true);
   conditionsRequest.send();


 $('.search').submit(function(event) {
   // console.log('submit start');
   event.preventDefault();


   let docObjsArr = [];

   const searchFirstName = $('#firstNameInput').val();
   const query = $('#conditionInput').val();
   console.log(query);


   let request = new XMLHttpRequest();
   let urlDocs = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&user_location=45.512%2C%20122.658&skip=0&limit=10&user_key=${process.env.apiKey}`

   request.onreadystatechange = function() {
     // console.log('request reached');
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response.data);
        response.data.forEach(function(doc){
          const doctor = new Doctor;
          doctor.firstName = doc.profile.first_name;
          doctor.lastName = doc.profile.last_name;
          doctor.practices = doc.practices;
          //console.log(doc);
          docObjsArr.push(doctor);
        });
      } else {
        // console.log('not ready');
      }
    }

    request.open("GET", urlDocs, true);
    request.send();
    // console.log('open send');
    // console.log(docObjsArr);

    // request.send();
    // console.log(docObjsArr);
 });

});
