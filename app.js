const backgroundImages = [
  `<div class="bg-slider"></div>`,
  `<div class="bg-slider2"></div>`,
  `<div class="bg-slider3"></div>`,
];
const slider = document.querySelector(".banner-wrapper");
let currentPosition = 0;
const myFader = () => {
  currentPosition =
    currentPosition === backgroundImages.length ? 1 : currentPosition + 1;
  slider.innerHTML = backgroundImages[currentPosition - 1];
};
myFader();
setInterval(myFader, 5000);

let profileImage = document.querySelectorAll(".icon");
let introduction = document.querySelectorAll(".intro-container");

const MyIntersect = new IntersectionObserver(
  (entry) => {
    entry.forEach((eachEntry) => {
      eachEntry.target.classList.toggle("drop", eachEntry.isIntersecting);
      if (eachEntry.isIntersecting) {
        MyIntersect.unobserve(eachEntry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);
profileImage.forEach((i) => {
  MyIntersect.observe(i);
});

let projects = document.querySelectorAll(".proj");
const MyIntersection = new IntersectionObserver(
  (entry) => {
    entry.forEach((eachEntry) => {
      eachEntry.target.classList.toggle("show", eachEntry.isIntersecting);

      if (eachEntry.isIntersecting) {
        MyIntersection.unobserve(eachEntry.target);
      }
    });
  },
  {
    threshold: 0,
  }
);
projects.forEach((i) => {
  MyIntersection.observe(i);
});
introduction.forEach((i) => {
  MyIntersection.observe(i);
});

let eachEducation = document.querySelectorAll(".each-education");
let eachExperience = document.querySelectorAll(".each-experience");

const leftIntersect = new IntersectionObserver(
  (entry) => {
    entry.forEach((eachEntry) => {
      eachEntry.target.classList.toggle("comeLeft", eachEntry.isIntersecting);
      if (eachEntry.isIntersecting) {
        leftIntersect.unobserve(eachEntry.target);
      }
    });
  },
  {
    threshold: 0,
  }
);
eachEducation.forEach((e) => {
  leftIntersect.observe(e);
});

const rightIntersect = new IntersectionObserver(
  (entry) => {
    entry.forEach((eachEntry) => {
      eachEntry.target.classList.toggle("comeRight", eachEntry.isIntersecting);
      if (eachEntry.isIntersecting) {
        rightIntersect.unobserve(eachEntry.target);
      }
    });
  },
  {
    threshold: 0,
  }
);
eachExperience.forEach((e) => {
  rightIntersect.observe(e);
});
