
  const source = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  // 1. Pozyskać dane z serwera
  const dataArray = [];

  fetch(source).then(function(cities){
    cities.json().then(function(citiesJson){

      dataArray.push(...citiesJson);
      // ... - każe zapisać każdy rekord pod osobny indeks w tablicy

    })
  })
  // FETCH NIE ZWRÓCI DANYCH! Zwróci tzw promise, która do funkcjonowania wymaga jedynie funkcji then. Następnie trzeba skonwertować surowe dane do JSON za pomocą kolejnej obietnicy :/

  // 2 Należy przenieść uzyskane dane do naszej pustej tablicy

  // 3. Funkcja filtrujaca
  function filter(searchWord, dataArray) {

    return dataArray.filter(function(place){
      const regex = new RegExp(searchWord, 'gi');
      return place.city.match(regex);
    })
  }
  // 4. Funkcja do wyświetlenia znalezionej tresci
  function display(){
    const matchArray = filter(this.value, dataArray);

    const score = matchArray.map(function(place){

      return `
        <li>
          <span class="record">${place.city}, ${place.state}</span>
      `;
    }).join('');

    sugesttions.innerHTML = score;

  }

  const searchInput = document.querySelector('input');
  const sugesttions = document.querySelector('.sugesttions')
  console.log(sugesttions);
  searchInput.addEventListener('keyup', display)
