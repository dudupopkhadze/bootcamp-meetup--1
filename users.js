const users = [
  {
    name: "John",
    email: "john@lock.com",
    image:
      "https://imgs.search.brave.com/EZ95Bi4ksNynjvgU-uIxQIo_2kXIvbb3fX3qf9Yrs9A/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnN0/YWNrLmltZ3VyLmNv/bS9HekNiRS5qcGc",
  },

  {
    name: "Lebron",
    email: "lebron@lakers.com",
    image:
      "https://imgs.search.brave.com/DKiZFcO_tXXQzTYDGjRlF2VpxLJSAD7HDLjpGXuPb9o/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXN2Yy50aW1laW5j/YXBwLmNvbS92My9m/YW4vaW1hZ2U_dXJs/PWh0dHBzOi8vcGlw/cGVuYWludGVhc3ku/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9n/ZXR0eS1pbWFnZXMv/MjAxNi8wNC8xMTMw/MTU0MzU4LmpwZWcm/Yz1zYyZ3PTMyMDAm/aD0yMTMz",
  },

  {
    name: "Michael",
    email: "youngkidslover@dunder.com",
    image:
      "https://imgs.search.brave.com/crc5r4iM8mUjDjHU3BtDN8XTXFyKrv-Ks1CZaMASq4U/rs:fit:1200:1200:1/g:ce/aHR0cDovL2JyaXR0/YW55YmVsbGFuY2Eu/Y29tL2FkdndlYjEv/Z3czL2ltYWdlcy9t/aWNoYWVsLnBuZw",
  },
];

users.map(({ name, email, image }) => createUserCard(name, email, image));
