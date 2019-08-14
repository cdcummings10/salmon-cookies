'use strict';

function CookieStore( name, minCust, maxCust, averageCookies ){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookies = averageCookies;
  this.randCookieHourly = [];
  CookieStore.stores.push(this);
};

CookieStore.stores = [];

CookieStore.prototype.randCookiesPerHour = function() {
  var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;;
  return Math.floor(randomCust * this.averageCookies);
};

CookieStore.prototype.render = function(){
  //renders first row with name and adds id
  var elList = document.getElementById('sales');
  var eltr = document.createElement('tr');
  var newTitle = document.createElement('td');
  newTitle.textContent = this.name;
  elList.appendChild(eltr);
  eltr.appendChild(newTitle);
  eltr.id = this.name;

  var sum = 0;
  for(var i = 0; i < storeHours.length; i++){
    //store random cookies in array
    var cookieHour = this.randCookiesPerHour();
    this.randCookieHourly.push(cookieHour);
    //store items in td
    var currentStore = document.getElementById(this.name);
    var newListItem = document.createElement('td');
    newListItem.textContent = this.randCookieHourly[i];
    currentStore.appendChild(newListItem);
    sum += cookieHour;
  }
  var newTotal = document.createElement('td');
  newTotal.textContent = sum;
  eltr.appendChild(newTotal);
};

new CookieStore('1st and Pike', 23, 65, 6.3);
new CookieStore('Seatac Airport', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Capitol Hill', 20, 38, 2.3);
new CookieStore('Alki', 2, 16, 4.6);

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// renders hours in header
function renderHours(){
  var hours = document.getElementById('hours');
  var newBlank = document.createElement('tr');
  hours.appendChild(newBlank);
  newBlank.appendChild(document.createElement('td'));
  for (var x = 0; x < storeHours.length; x++){
    var newCell = document.createElement('th');
    newCell.textContent = storeHours[x];
    newBlank.appendChild(newCell);
  }
  var totals = document.createElement('th');
  totals.textContent = 'Daily Store Total';
  newBlank.appendChild(totals);
}
// calculate sum of column
function totalColumn(column){
  var sum = 0;
  for(var i = 0; i < CookieStore.stores.length; i++){
    sum += CookieStore.stores[i].randCookieHourly[column];
  }
  return sum;
}


function renderTotals() {
  var eltfoot = document.getElementById('totals');
  var totalsText = document.createElement('tr');
  var eltd = document.createElement('td');
  eltd.textContent = 'Total Daily Sales';
  totalsText.appendChild(eltd);
  eltfoot.appendChild(totalsText);

  var sum = 0;
  for (var k = 0; k < storeHours.length; k++){
    var newTotal = document.createElement('td');
    newTotal.textContent = totalColumn(k) + ' cookies';
    totalsText.appendChild(newTotal);
    sum += totalColumn(k);
  }

  var grandTotal = document.createElement('td');
  grandTotal.textContent = sum + ' cookies';
  totalsText.appendChild(grandTotal);
}

renderHours();
// renders all td for body
for (var i = 0; i < CookieStore.stores.length; i++){
  CookieStore.stores[i].render();
}
renderTotals();
