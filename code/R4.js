
const infoTable = document.getElementById('info-table');
const sortName = document.getElementById('sort-name');
const sortLastName = document.getElementById('sort-last-name');
const sortAge = document.getElementById('sort-age');
const sortID = document.getElementById('sort-id');
const apiURL = "https://random-data-api.com/api/users/random_user?size=";
const size = 10;

let listUsers = [];

// Calculating the age
function getAge(dateBirth) {
  const today = new Date();
  const birthday = new Date(dateBirth);
  let age = today.getFullYear() - birthday.getFullYear();
  const month = today.getMonth() - birthday.getMonth(); 
  
  if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  
  return age;
}

// Sort Strings
function sortingNames(arr) {
  arr.sort(function(o1, o2) {
    if (o1.first_name > o2.first_name) {
      return 1; 
    } else if (o1.first_name < o2.first_name) {
      return -1;
    }
    return 0;
  });
}
function sortingLastNames(arr) {
  arr.sort(function(o1, o2) {
    if (o1.last_name > o2.last_name) {
      return 1; 
    } else if (o1.last_name < o2.last_name) {
      return -1;
    }
    return 0;
  });
}

// Reverse Strings
function insortingNames(arr) {
  arr.reverse(function(o1, o2) {
    if (o1.first_name > o2.first_name) {
      return 1; 
    } else if (o1.first_name < o2.first_name) {
      return -1;
    }
    return 0;
  });
}
function insortingLastNames(arr) {
  arr.reverse(function(o1, o2) {
    if (o1.first_name > o2.first_name) {
      return 1; 
    } else if (o1.first_name < o2.first_name) {
      return -1;
    }
    return 0;
  });
}

// Sort ID's
function sortingID(arr) {
  arr.sort(function(o1, o2) {
    return o1.id - o2.id;
  });
}

// Reverse ID's
function insortingID(arr) {
  arr.sort(function (o1, o2) {
    return o2.id - o1.id;
  })
}

// Showing data on the table with this function
const displayInfo = (users) => {
  users.forEach((user) => {
    const { first_name, last_name, date_of_birth, address, id, email } = user;

    const age = getAge(date_of_birth);
  

    infoTable.innerHTML += `
      <tr role="row">
        <td role="cell">${first_name}</td>
        <td role="cell">${last_name}</td>
        <td role="cell">${age}</td>
        <td role="cell">${address.country}</td>
        <td role="cell">${id}</td>
        <td role="cell">${email}</td>
      </tr>
    `
  });
}

// Getting Data from API Random
async function getInfoUsers() {
  try {
    const response = await fetch(`${apiURL}${size}`);
    const result = await response.json();

    listUsers = [...result];
    
    displayInfo(result);
    
  } catch (error) {
    console.log(error);
  }
}

getInfoUsers();

// Event
sortName.addEventListener('click', () => {
  
  sortName.classList.toggle('abc');
  infoTable.innerHTML = '';
  
  if (sortName.classList.contains('abc')) {
    sortingNames(listUsers);

    displayInfo(listUsers);
  } else {
    insortingNames(listUsers);

    displayInfo(listUsers);
  }

});
sortLastName.addEventListener('click', () => {
  
  sortLastName.classList.toggle('abc');
  infoTable.innerHTML= '';

  if (sortLastName.classList.contains('abc')) {
    sortingLastNames(listUsers);

    displayInfo(listUsers);
  } else {
    insortingLastNames(listUsers);

    displayInfo(listUsers);
  }
});
sortID.addEventListener('click', () => {
  
  sortID.classList.toggle('abc');
  infoTable.innerHTML = '';

  if (sortID.classList.contains('abc')) {
    sortingID(listUsers);
    
    displayInfo(listUsers);
  } else {
    insortingID(listUsers);

    displayInfo(listUsers);
  }
});
