import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardSearch } from './backEnd.js';


$(document).ready(function() {

  const api = new CardSearch;
  let counter = 1;
  $("#add").click(function(){
    counter++;
    $('.parameter').append(`<select class="searchTerms${counter}">
        <option value="name">Name</option>
        <option value="colors">Color</option>
        <option value="colorIndentity">Land</option>
        <option value="cmc">Coverted Mana Cost</option>
        <option value="types">Type</option>
        <option value="supertypes">Supertype</option>
        <option value="subtypes">Subtype</option>
        <option value="rarity">Rarity</option>
        <option value="setName">Set</option>
        <option value="artist">Artist</option>
        <option value="power">Power</option>
        <option value="toughness">Toughness</option>
        <option value="gameFormat">Format</option>
        <option value="legality">Legality</option>
      </select>
      <input type="text" id="input${counter}">`);
  });

  $(".search").submit(function(event){
    event.preventDefault();

    let searchParameters = '';
    for(let i=1; i <= counter; i++){
      searchParameters += $(`.searchTerms${i}`).val() + '=' + $(`#input${i}`).val() + '&';
    }

    const getCards = api.getCard(searchParameters);

    getCards.then(function(response) {
      let body = JSON.parse(response);
      body.cards.forEach(function(card){
        $(".list").append(`<p id="${card.id}">${card.name}</p>`);
      });
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('.list').on('click', 'p', function(){
    if(this.classList.contains('open')){
      console.log('close');
    } else {
      const id = this.id;
      const search = `id=${id}`;
      console.log(search);

      const getCard = api.getCard(search);

      getCard.then(function(response) {
        let body = JSON.parse(response);
        $(".list").append(`<img src="${body.cards[0].imageUrl}">`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    }
    $(this).toggleClass('open');
  });

});
