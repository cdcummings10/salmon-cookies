'use strict';

var store1 = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  averageCookies: 6.3,
  randCookiesPerHour: function() {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;;
    return Math.floor(randomCust * this.averageCookies);
  },
  randCookieHourly: [],
};

var store2 = {
  name: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  averageCookies: 1.2,
  randCookiesPerHour: function() {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;;
    return Math.floor(randomCust * this.averageCookies);
  },
  randCookieHourly: [],
};

var store3 = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  averageCookies: 3.7,
  randCookiesPerHour: function() {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;;
    return Math.floor(randomCust * this.averageCookies);
  },
  randCookieHourly: [],
};

var store4 = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  averageCookies: 2.3,
  randCookiesPerHour: function() {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;;
    return Math.floor(randomCust * this.averageCookies);
  },
  randCookieHourly: [],
};

var store5 = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  averageCookies: 4.6,
  randCookiesPerHour: function() {
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;;
    return Math.floor(randomCust * this.averageCookies);
  },
  randCookieHourly: [],
};

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var stores = [store1, store2, store3, store4, store5];

function randCookHourGen(parameter){
  for(var i = 0; i < storeHours.length; i++){
    var cookieHour = parameter.randCookiesPerHour();
    parameter.randCookieHourly.push(cookieHour);
  }
}

function cookieHourStorage(parameter){
  for(var i = 0; i < storeHours.length; i++){
    var currentStore = document.getElementById(parameter.name);
    var newListItem = document.createElement('li');
    newListItem.textContent = storeHours[i] + ': ' + parameter.randCookieHourly[i] + ' cookies';
    currentStore.appendChild(newListItem);
  }
}


for (var i = 0; i < stores.length; i++){
  var elList = document.getElementById('sales');
  var newTitle = document.createElement('ul');
  newTitle.textContent = 'Store: ' + stores[i].name;
  elList.appendChild(newTitle);
  newTitle.id = stores[i].name;

  randCookHourGen(stores[i]);
  cookieHourStorage(stores[i]);
  console.log(stores[i].randCookieHourly);
}

