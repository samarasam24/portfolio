function validateForm() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  var isValid = true;

  document.getElementById("fullNameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("mobileError").textContent = "";

  if (fullName.trim() === "") {
    document.getElementById("fullNameError").textContent =
      "Please enter your full name!";
    isValid = false;
  }

  if (email.trim() === "") {
    document.getElementById("emailError").textContent =
      "Please enter your email!";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address!";
    isValid = false;
  }

  if (mobile.trim() === "") {
    document.getElementById("mobileError").textContent =
      "Please enter your mobile number!";
    isValid = false;
  } else if (!isValidMobile(mobile)) {
    document.getElementById("mobileError").textContent =
      "Please enter a valid mobile number!";
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidMobile(mobile) {
  var mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
}

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// project
// var title = document.getElementById("title");
var imgpro = document.getElementById("imgpro");
var pone = document.getElementById("para1");
var ptwo = document.getElementById("para2");
var pthree = document.getElementById("para3");
var pfour = document.getElementById("para4");
var pfive = document.getElementById("para5");

var viewcode = document.getElementById("viewcode");
var viewlive = document.getElementById("viewlive");
var bone = document.getElementById("div-1");
var btwo = document.getElementById("div-2");

var bfour = document.getElementById("div-4");
var bfive = document.getElementById("div-5");
imgpro.setAttribute("src", "Img/bootstrap.png");
imgpro.style.border = "";

bone.setAttribute("class", "bs1");
btwo.setAttribute("class", "bs2");

bfour.setAttribute("class", "bs4");
bfive.setAttribute("class", "bs5");

pone.innerHTML =
  "<h4 style='color:#ddb726;'>What is This?</h4> <p > Its My First Bootstrap Project & I  implemented Bootstrap's grid system.</p>";
ptwo.innerHTML =
  "<h4 style='color:#a0bdc5;'>What I Learned From this?</h4><p>Exploring CSS customization options within Bootstrap to tailor the project's visual appearance.Experimenting with different column classes to achieve desired layout designs. _________*_________</p>";
pthree.innerHTML =
  "<p style='color:#3370C1;'>For my Bootstrap project, I designed and developed a responsive website using HTML, CSS, and Bootstrap framework. The project involved creating a modern and dynamic website layout that adjusts seamlessly across various screen sizes and devices. Leveraging Bootstrap's grid system and responsive utility classes, I ensured that the website maintains its functionality and aesthetics regardless of the device being used.</p>";
pfour.innerHTML =
  "<h4 style='color:#ddb726;'>How much time you taken to complete?</h4><p>{ 3 days }</p>";
pfive.innerHTML =
  "<h4 style='color:#a0bdc5;'> What technology used? </h4><p > Html, Css, Bootstrap, Firebase</p>";

function css() {
  imgpro.setAttribute("src", "Img/css.png");
  viewcode.setAttribute(
    "href",
    "https://github.com/KeerthanaVenkatesann/cssProject"
  );
  viewlive.setAttribute("href", "https://css-project-a3fd0.web.app/");
  bone.setAttribute("class", "css1");
  btwo.setAttribute("class", "css2");

  bfour.setAttribute("class", "css4");
  bfive.setAttribute("class", "css5");

  // title.innerHTML = "CSS";

  pone.innerHTML =
    "<h4 style='color:#ddb726;'>What is This?</h4> <p > Its My Css Project & demonstrating my ability to design and style a modern and responsive website interface.</p>";

  ptwo.innerHTML =
    "<h4 style='color:#a0bdc5;'>What I Learned From this?</h4><p> I gained invaluable experience in utilizing CSS to create engaging and functional web designs. I learned how to design websites that seamlessly adapt to different screen sizes and devices using CSS media queries and flexible layout techniques.</p>";

  pthree.innerHTML =
    "<p style='color:#3370C1;'>This project involved designing the frontend interface for a fictional online fashion boutique. The goal was to create a sleek and modern design that reflects the brand's identity and provides an intuitive browsing experience for users. Leveraging CSS, I implemented a responsive layout that adjusts seamlessly to different screen sizes, ensuring optimal viewing on desktops, tablets, and smartphones.</p>";

  pfour.innerHTML =
    "<h4 style='color:#ddb726;'>How much time you taken to complete?</h4><p>{ 4 days }</p>";

  pfive.innerHTML =
    "<h4 style='color:#a0bdc5;'> What technology used? </h4><p > Html, Css, Firebase</p>";
}

function bootstrap() {
  viewcode.setAttribute(
    "href",
    "https://github.com/KeerthanaVenkatesann/week_6"
  );
  viewlive.setAttribute("href", "https://bootstrap2-task.web.app/");
  // title.innerHTML = "Mobile Bootstrap";

  imgpro.setAttribute("src", "Img/bootstrap.png");
  imgpro.style.border = "";
  bone.setAttribute("class", "bs1");
  btwo.setAttribute("class", "bs2");

  bfour.setAttribute("class", "bs4");
  bfive.setAttribute("class", "bs5");

  pone.innerHTML =
    "<h4 style='color:#ddb726;'>What is This?</h4> <p > Its My First Bootstrap Project & I  implemented Bootstrap's grid system.</p>";

  ptwo.innerHTML =
    "<h4 style='color:#a0bdc5;'>What I Learned From this?</h4><p>Exploring CSS customization options within Bootstrap to tailor the project's visual appearance.Experimenting with different column classes to achieve desired layout designs. _________*_________</p>";

  pthree.innerHTML =
    "<p style='color:#3370C1;'>For my Bootstrap project, I designed and developed a responsive website using HTML, CSS, and Bootstrap framework. The project involved creating a modern and dynamic website layout that adjusts seamlessly across various screen sizes and devices. Leveraging Bootstrap's grid system and responsive utility classes, I ensured that the website maintains its functionality and aesthetics regardless of the device being used.</p>";

  pfour.innerHTML =
    "<h4 style='color:#ddb726;'>How much time you taken to complete?</h4><p>{ 3 days }</p>";

  pfive.innerHTML =
    "<h4 style='color:#a0bdc5;'> What technology used? </h4><p > Html, Css, Bootstrap, Firebase</p>";
}

function js() {
  // title.innerHTML = "JavaScript";

  imgpro.setAttribute("src", "Img/Js.png");
  bone.setAttribute("class", "js1");
  btwo.setAttribute("class", "js2");

  bfour.setAttribute("class", "js4");
  bfive.setAttribute("class", "js5");
  pone.innerHTML =
    "<h4 style='color:#ddb726;'>What is This?</h4> <p >This project is a CRUD (Create, Read, Update, Delete) application developed using JavaScript.</p>";

  ptwo.innerHTML =
    "<h4 style='color:#a0bdc5;'>What I Learned From this?</h4><p> I learned how to communicate with a server using JavaScript's built-in Fetch API or other libraries like Axios to perform CRUD operations and update the UI accordingly. _________*_________</p>";

  pthree.innerHTML =
    "<p style='color:#3370C1;'>This JavaScript CRUD project is a simple web application that allows users to perform CRUD operations on a collection of items. The application features a user-friendly interface where users can add new items, view existing items, update item details, and delete items from the collection.</p>";

  pfour.innerHTML =
    "<h4 style='color:#ddb726;'>How much time you taken to complete?</h4><p>{ 3 days }</p>";

  pfive.innerHTML =
    "<h4 style='color:#a0bdc5;'> What technology used? </h4><p > Html, Css, Bootstrap, Javascript, Api, Firebase</p>";
}

function react() {
  // title.innerHTML = "React";
  viewcode.setAttribute(
    "href",
    "https://github.com/KeerthanaVenkatesann/Reactjs"
  );
  viewlive.setAttribute("href", "https://reactjs-61d59.web.app/");
  imgpro.setAttribute("src", "Img/reactjs.png");

  bone.setAttribute("class", "react1");
  btwo.setAttribute("class", "react2");

  bfour.setAttribute("class", "react4");
  bfive.setAttribute("class", "react5");
  pone.innerHTML =
    "<h4 style='color:#ddb726;'>What is This?</h4> <p > This React.js app integrates Razorpay for payments, Formik for forms, and OTP for security. Auto-OTP feature streamlines payments, ensuring a seamless user experience.</p>";

  ptwo.innerHTML =
    "<h4 style='color:#a0bdc5;'>What I Learned From this?</h4><p> I gained experience in integrating third-party libraries and APIs into a React.js application, particularly Razorpay for payment processing and Formik for form management.</p>";

  pthree.innerHTML =
    "<p style='color:#3370C1;'>This React.js web application enables secure online payments with Razorpay integration and OTP authentication. Utilizing Formik for form management, it ensures a smooth user experience. The auto-OTP feature simplifies transactions by automatically generating and verifying OTPs. With its intuitive interface, users can initiate payments effortlessly for products or services.</p>";

  pfour.innerHTML =
    "<h4 style='color:#ddb726;'>How much time you taken to complete?</h4><p>{ 2 days }</p>";

  pfive.innerHTML =
    "<h4 style='color:#a0bdc5;'> What technology used? </h4><p > Reactjs, Razor Pay, Javascript, Firebase</p>";
}

function reactcrud() {
  viewcode.setAttribute(
    "href",
    "https://github.com/KeerthanaVenkatesann/reactcrud"
  );
  viewlive.setAttribute("href", "https://reactjs-61d59.web.app/");
  // title.innerHTML = "Crud Operation{ReactJs}";
  imgpro.setAttribute("src", "Img/crudreact.png");

  bone.setAttribute("class", "reactcrud1");
  btwo.setAttribute("class", "reactcrud2");

  bfour.setAttribute("class", "reactcrud4");
  bfive.setAttribute("class", "reactcrud5");
  pone.innerHTML =
    "<h4 style='color:#ddb726;'>What is This?</h4> <p > Its My First Bootstrap Project & I  implemented Bootstrap's grid system.</p>";

  ptwo.innerHTML =
    "<h4 style='color:#a0bdc5;'>What I Learned From this?</h4><p>Exploring CSS customization options within Bootstrap to tailor the project's visual appearance.Experimenting with different column classes to achieve desired layout designs. _________*_________</p>";

  pthree.innerHTML =
    "<p style='color:#3370C1;'>For my Bootstrap project, I designed and developed a responsive website using HTML, CSS, and Bootstrap framework. The project involved creating a modern and dynamic website layout that adjusts seamlessly across various screen sizes and devices. Leveraging Bootstrap's grid system and responsive utility classes, I ensured that the website maintains its functionality and aesthetics regardless of the device being used.</p>";

  pfour.innerHTML =
    "<h4 style='color:#ddb726;'>How much time you taken to complete?</h4><p>{ 3 days }</p>";

  pfive.innerHTML =
    "<h4 style='color:#a0bdc5;'> What technology used? </h4><p > Html, Css, Bootstrap, Firebase</p>";
}

function reduxsaga() {
  // title.innerHTML = "ReduxSaga";

  imgpro.setAttribute("src", "Img/contact.png");
  bone.setAttribute("class", "redux1");
  btwo.setAttribute("class", "redux2");

  bfour.setAttribute("class", "redux4");
  bfive.setAttribute("class", "redux5");
  pone.innerHTML =
    "<h4 style='color:#ddb726;'>What is This?</h4> <p > Its My First Bootstrap Project & I  implemented Bootstrap's grid system.</p>";

  ptwo.innerHTML =
    "<h4 style='color:#a0bdc5;'>What I Learned From this?</h4><p>Exploring CSS customization options within Bootstrap to tailor the project's visual appearance.Experimenting with different column classes to achieve desired layout designs. _________*_________</p>";

  pthree.innerHTML =
    "<p style='color:#3370C1;'>For my Bootstrap project, I designed and developed a responsive website using HTML, CSS, and Bootstrap framework. The project involved creating a modern and dynamic website layout that adjusts seamlessly across various screen sizes and devices. Leveraging Bootstrap's grid system and responsive utility classes, I ensured that the website maintains its functionality and aesthetics regardless of the device being used.</p>";

  pfour.innerHTML =
    "<h4 style='color:#ddb726;'>How much time you taken to complete?</h4><p>{ 3 days }</p>";

  pfive.innerHTML =
    "<h4 style='color:#a0bdc5;'> What technology used? </h4><p > Html, Css, Bootstrap, Firebase</p>";
}

const sentences = [
  "You Get What You Work For!.",
  "EveryThing Is Hard Before It Is Easy!.",
  "Make It Simple But Significant!.",
  "I Never Dreamed About Success,I worked For It!.",
  "Nothing Will Work Unless You Do!.",
  "It Takes A Lots Of Hard Work To Make Something Simple!.",
  "Either You Run The Day Or The Day Runs You!",
  "Don't Be The Same Be Better!.",
  "If U Work It Will Work!.",
  "The World Is Change By Your Example Not By Your Opinion!."
];

function setRandomSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  document.getElementById('sentence').textContent = sentences[randomIndex];

}


setRandomSentence();

setInterval(setRandomSentence, 5000);
