// local reviews data
const reviews = [
  {
    id: 1,
    name: "Susan A. Farmer",
    role: "Software Developer",
    img: "Images/Susan.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    name: "Michael CP. Haggerty",
    role: "Business Analyst",
    img: "Images/michael.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    id: 3,
    name: "Carl C. Williams",
    role: "Operations Manager",
    img: "Images/carl.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et. Justo donec enim diam vulputate. Felis bibendum ut tristique et. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Vitae elementum curabitur vitae nunc sed velit dignissim. Enim nunc faucibus a pellentesque sit amet porttitor eget. Quisque egestas diam in arcu cursus euismod. At lectus urna duis convallis. Nibh tellus molestie nunc non blandit massa enim nec dui. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Convallis posuere morbi leo urna molestie at elementum eu. Nec dui nunc mattis enim ut tellus elementum. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Dui ut ornare lectus sit amet est placerat in. Arcu felis bibendum ut tristique et egestas quis ipsum. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Sit amet cursus sit amet dictum sit amet justo donec. Viverra maecenas accumsan lacus vel facilisis volutpat.",
  },
  {
    id: 4,
    name: "Helen L. Jackson",
    role: "Financial Advisor",
    img: "Images/helen.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla at volutpat diam ut venenatis tellus in metus. Sed velit dignissim sodales ut. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Sociis natoque penatibus et magnis dis. Ullamcorper sit amet risus nullam. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Porta non pulvinar neque laoreet suspendisse. Phasellus vestibulum lorem sed risus ultricies. Congue mauris rhoncus aenean vel elit scelerisque. Blandit volutpat maecenas volutpat blandit. Mi ipsum faucibus vitae aliquet nec ullamcorper sit.",
  },
];

//   Element selection
const img = document.getElementById("image");
const author = document.getElementById("name");
const role = document.getElementById("role");
const bio = document.getElementById("bio");

const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  role.textContent = item.role;
  bio.textContent = item.bio;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  role.textContent = item.role;
  bio.textContent = item.bio;
}
// show next review
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show previous review
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
