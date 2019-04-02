import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doctor } from './backEnd.js';


$(document).ready(function() {
  //code on page load
 $('.search').submit(function(event) {
   event.preventDefault();

   $(".result").empty();

   let doc = new Doctor;
   let firstName = $('#firstNameInput').val();
   let lastName = $('#lastNameInput').val();
   let condition = $('#conditionInput').val();

   const docList = [];
   const getDocs = doc.docSearch(firstName, lastName, condition);

   getDocs.then(function(response) {
      let readable = JSON.parse(response);
      console.log(readable);
      if (readable.meta.count === 0) {
        $(".result").append("There are no results for this search");
      } else {
        readable.data.forEach(function(index){
          docList.push(index.profile.bio);
          $(".result").append(`<h3>${index.profile.first_name} ${index.profile.last_name}</h3>`);
          index.practices.forEach(function(locations){
            if (locations.accepts_new_patients === true) {
              $(".result").append(`${locations.visit_address.street}, ${locations.visit_address.city}, ${locations.visit_address.state}  ${locations.visit_address.zip} <br>${locations.phones[0].number}<br>`);
            }else {
              $(".result").append("This doctor is not currently accepting new patients");
            }
            if (locations.website !=undefined) {
              $(".result").append(`<br>${locations.website}<br>`);
            }
          });
        });
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
   $('.result').show();
   $('input').val('');
 });
});
