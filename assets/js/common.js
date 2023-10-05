$(document).ready(function () {
  var text =
    "  Hi mabby, as I develop this website I want to write you this letter on our 2nd monthsary, my heart is filled with an overwhelming sense of gratitude and love. Time has flown by, yet every moment with you feels like a cherished eternity. I want you to know just how much you mean to me and how you inspire me every day. deeply sorry I am for making you worry and cry. Knowing that I've caused you pain and concern breaks my heart, and I want you to understand that it was never my intention. My love for you is unwavering, and I am committed to making things right and ensuring that you never have to feel that way again.  I promise to cherish and adore you, not just on our monthsary, but every single day. Thank you for being my inspiration, my rock, and the love of my life. I am truly blessed to have you by my side, and I can't wait to see where our love takes us in the future.";
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
