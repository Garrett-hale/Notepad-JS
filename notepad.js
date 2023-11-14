var notesArray = [];

function cookieToObject() {
  var cookieObject = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
  return cookieObject
}

function createCookie(cname, cvalue, expires) {
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function createElementAndAppend(elementTag, elementText, parentId) {

  // Create element
  const element = document.createElement(elementTag);
  //Add Attribute
  addAttributeToElement(element, "class", "note-notepad");

  //Change text of element
  element.innerHTML = elementText;

  // Append to parent
  document.getElementById(parentId).appendChild(element);
}

function addAttributeToElement(elementTarget, attributeName, attributeValue) {
  // Create a class attribute
  const att = document.createAttribute(attributeName);

  // Set the value of the class attribute
  att.value = attributeValue;

  // Add the class attribute
  const element = elementTarget;
  element.setAttributeNode(att);
}

function createNote() {
  var notepadValue = document.getElementById("textarea-notepad").value;
  //console.log(notepadValue);
  createElementAndAppend("div", notepadValue, "notes");
  //console.log(document.getElementsByClassName("note-notepad")[0]);

  notesArray.push(notepadValue);

  var arrayCount = notesArray.length;

  createCookie("Note[" + `${arrayCount}` + "]", notepadValue, "expires=Thu, 01 Jan 2025 00:00:00 UTC");

  if (notesArray.length >= 9) {
    document.getElementById("header-notepad").style.height = "inherit";
  }
  if (window.innerWidth <= 900 && notesArray.length >= 2) {
    document.getElementById("header-notepad").style.height = "inherit";
    console.log("TEST 1");
  }
  console.log(window.innerWidth);
}

function version() {
  console.log("Version 13");
}

function loadNotes() {

  var cookieObject = cookieToObject();

  console.log(cookieObject);

  //var objectLength = Object.entries(cookieObject).length;
  //console.log(objectLength);


    for (var key in cookieObject) {
      if (cookieObject[key] != 'undefined') {
        createElementAndAppend("div", cookieObject[key], "notes");
        notesArray.push(cookieObject[key]);
      }
    }


  //for (var i = 0; i < objectLength.length; i++) {
  //  createElementAndAppend("div", cookieObject.Note[i], "notes");
  //}

  if (notesArray.length >= 9) {
    document.getElementById("header-notepad").style.height = "inherit";
  }

  if (window.innerWidth <= 900 && notesArray.length >= 2) {
    document.getElementById("header-notepad").style.height = "inherit";
    console.log("TEST 2");
  }

}

// function countNotes() {
//   for (var i = 0; i < notesArray.length; i++) {
//     //array[i]
//   }
// }

//console.log(document.cookie);

//alert(document.cookie);
