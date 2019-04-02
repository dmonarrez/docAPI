import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './backEnd.js';


$(document).ready(function() {
  //code on page load
 $('.search').submit(function(event) {
   event.preventDefault();
   //empty the results div so multiple searches do not append on eachother
   $(".output").empty();
   //initialize new object and store user input
   let doc = new Doctor;
   let firstName = $('#firstNameInput').val();
   let lastName = $('#lastNameInput').val();
   let condition = $('#conditionInput').val();
   //collector for doctor information
   const docList = [];
   //api call on doc obj
   const getDocs = doc.docSearch(firstName, lastName, condition);
   //promise...
   getDocs.then(function(response) {
      let readable = JSON.parse(response);
      console.log(readable);
      if (readable.meta.count === 0) {
        $(".output").append("There are no results for this search");
      } else {
        readable.data.forEach(function(index){
          $(".output").append(`<h3>${index.profile.first_name} ${index.profile.last_name}</h3>`);
          index.practices.forEach(function(locations){
            if (locations.accepts_new_patients === true) {
              $(".output").append(`${locations.visit_address.street}, ${locations.visit_address.city}, ${locations.visit_address.state}  ${locations.visit_address.zip} <br>${locations.phones[0].number}<br>`);
            } else {
              $(".output").append("This doctor is not accepting new patients");
            }
            if (locations.website != undefined) {
              $(".output").append(`<br>${locations.website}<br>`);
            }
          });
        });
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
   $('.output').show();
   //reset input fields
   $('input').val('');
 });
});
