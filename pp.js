
function setupTypewriter(t) {
  var HTML = t.innerHTML;

  t.innerHTML = "";

  var cursorPosition = 0,
      tag = "",
      writingTag = false,
      tagOpen = false,
      typeSpeed = 50,
    tempTypeSpeed = 0;

  var type = function() {
    
      if (writingTag === true) {
          tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
              tagOpen = false;
              writingTag = true;
          } else {
              tag = "";
              tagOpen = true;
              writingTag = true;
              tag += HTML[cursorPosition];
          }
      }
      if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
              tempTypeSpeed = 0;
          }
          else {
              tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          }
          t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          writingTag = false;
          if (tagOpen) {
              var newSpan = document.createElement("span");
              t.appendChild(newSpan);
              newSpan.innerHTML = tag;
              tag = newSpan.firstChild;
          }
      }

      cursorPosition += 1;
      if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
      }

  };

  return {
      type: type
  };
}

var typer = document.getElementById('htmlcode');

typewriter = setupTypewriter(htmlcode);

typewriter.type();



function scrollToSection() {
  var targetPosition = document.getElementById('section4').offsetTop;
  var startPosition = window.scrollY;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var scrollAmount = Math.easeInOutQuad(progress, startPosition, distance, 100); // 1000ms animation duration

    window.scrollTo(0, scrollAmount);

    if (progress < 100) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

function scrollToSection2() {
  var targetPosition = document.getElementById('section4').offsetTop;
  var startPosition = window.scrollY;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var scrollAmount = Math.easeInOutQuad(progress, startPosition, distance, 100); 

    window.scrollTo(0, scrollAmount);

    if (progress < 100) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}


// Easing function for smooth scrolling
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function scrollFunction() {
  if (document.body.scrollTop > 590 || document.documentElement.scrollTop > 590) {
      document.getElementById("name1").style.opacity = 1;
  } else {
      document.getElementById("name1").style.opacity = 0;
  }
}

// Listen for the scroll event and call the scrollFunction
window.addEventListener("scroll", scrollFunction);


//highlighted function background
const highlight = document.querySelector('.highlight');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    highlight.style.left = `${x}px`;
    highlight.style.top = `${y}px`;
});

document.addEventListener('mouseenter', () => {
    highlight.style.transform = 'scale(1)';
    highlight.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'; /* Slightly more visible on hover */
});

document.addEventListener('mouseleave', () => {
    highlight.style.transform = 'scale(0)';
    highlight.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; /* Reset color on exit */
});

