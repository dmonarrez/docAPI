export class Doctor {
  constructor(firstName, lastName, practicesArr, phone, website, newPatients) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.practices = practicesArr;
    this.phone = phone;
    this.website = website;
    this.newPatients = newPatients;
  }

  sortPractices(practicesArray) {

  }

}
















// export class CardSearch {
//   constructor () {
//
//   }
//
//   getAll() {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `https://api.betterdoctor.com/2016-03-01/doctors`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
//   getCard(search) {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       let url = `https://api.betterdoctor.com/2016-03-01/doctors`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }
