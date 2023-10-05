$(document).ready(function () {
  var text =
    "They say that a successful relationship is built on trust, understanding, and the ability to share a pizza without any arguments. Well, we've certainly aced the pizza part, but I promise to work on the rest. I promise to cherish and adore you, not just on our monthsary, but every single day. Thank you for being my inspiration, my rock, and the love of my life. I am truly blessed to have you by my side, and I can't wait to see where our love takes us in the future.";
  var delay = 50; // Adjust the delay (in milliseconds) between each character

  function typeWriter(text, i) {
    if (i < text.length) {
      $("#par-col").append(text.charAt(i));
      i++;
      setTimeout(function () {
        typeWriter(text, i);
      }, delay);
    }
  }

  typeWriter(text, 0);
});
