
function newItem(){

//creating list items
 let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     $('#list').append(li);
   }

//adding and removing a line through each list item when double-clicked
  function crossOut () {
   li.toggleClass('strike');
 };
  li.on('dblclick', function crossOut() {
   li.toggleClass('strike');
 });

//adding 'x' to end of list item for deletion
   let crossOutButton = $('<crossOutButton>');
  crossOutButton.append(document.createTextNode("x"));
  li.append(crossOutButton);
  crossOutButton.on('click', deleteListItem);

 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem () {
     li.addClass('delete');
   }
 // 4. Reordering the items:
   $('#list').sortable();

}
