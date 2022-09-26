console.log('labas')

// Uzduotis 1
// Jums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą,
// kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos
// puslapyje. Duomenys galėtų būti atvaizduoti panašioje kortelėje. Svarbu
// atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

// const renderUserCard = (user) => {
//     const img = document.createElement('img')
//     img.scr = user.picture.medium
//     img.alt = `${user.name.first} profile picture`

//     const intro = document.createElement('h4')
//     intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`

//     const contacts = document.createElement('div')
//     contacts.innerText = user.email

//     const card = document.createElement('div')
//     card.append(img, intro, contacts)
//     document.body.append(card)
// }

// const fetchRandomUser = async () => {
//     try {
//         const response = await fetch('https://randomuser.me/api/')
//         if (response.ok) {
//             const data = await response.json()
//             renderUserCard(data.results[0])
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }

// fetchRandomUser()


// Uzduotis 2
// Naudojant "https://boiling-reaches-93648.herokuapp.com/week-3/party" - pasiimkite
// informaciją iš šito puslapio ir naudojant skirtingus array metodus,
// transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika"
// yra VIP, ar ne?

// const checkVipPerson = (guests, guestName) => {
//     const guest = guests.find(guest => guest.name === guestName)
//     document.body.innerText = guest ? `${guestName} ${guest.vip ? 'is' : 'isn\'t'} a VIP` : `${guestName} isn't found  in the guest list`
// }

// const fetchPartyGuest = async() => {
//     try {
//         const response = await fetch("https://boiling-reaches-93648.herokuapp.com/week-3/party")
//         if (response.ok) {
//             const guests = await response.json()
//             checkVipPerson(guests, 'Kristupas Lapeika')
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }

// fetchPartyGuest()



// Uzduotis 3
//  Organizuojate vestuves - pasiimkite informaciją iš
// "https://boiling-reaches-93648.herokuapp.com/week-3/wedding" ir atvaizduokite
// lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending
// būtų ne true/false, bet "+" arba "-".

const displayGuests = (guests) => {
    const tbody = document.querySelector('tbody');
    guests.forEach(guest => {
      const name = document.createElement('td');
      name.innerText = guest.name;
  
      const attending = document.createElement('td');
      attending.innerText = guest.attending ? '+' : '-';
  
      const plusOne = document.createElement('td');
      plusOne.innerText = guest.plusOne ? '+' : '-';
  
      const tr = document.createElement('tr');
      tr.append(name, attending, plusOne);
      tbody.append(tr);
    })
  }
  
  const fetchPartyGuests = async () => {
    try {
      const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding');
      if (response.ok) {
        const guests = await response.json();
        displayGuests(guests);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchPartyGuests();
  