$(document).ready(function () {
  var text =
    "  Hi mabby, as I sit down to write you this letter on our 2nd monthsary, my heart is filled with an overwhelming sense of gratitude and love. Time has flown by, yet every moment with you feels like a cherished eternity. I want you to know just how much you mean to me and how you inspire me every day. deeply sorry I am for making you worry and cry. Knowing that I've caused you pain and concern breaks my heart, and I want you to understand that it was never my intention. My love for you is unwavering, and I am committed to making things right and ensuring that you never have to feel that way again.";
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
