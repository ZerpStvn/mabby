$(document).ready(function () {
  var text =
    "I just wanted to take a moment to let you know how much I appreciate and adore you. Every day, I'm reminded of the incredible person you are, and it fills my heart with joy. I absolutely love the way you say 'I love you '. It's like a warm, comforting hug for my soul. Hearing those three words from your lips is a reminder of the deep connection we share, and it makes every moment with you even more special. And when you say, 'Take care', it's as though you're wrapping me in a protective cocoon of love and concern. It means the world to me, knowing that you care about my well-being in such a thoughtful way. But there's one phrase that melts my heart every single time – when you tell me to 'do your best at work.' Those words are like a motivational mantra that plays in my mind throughout the day. Your encouragement gives me the strength and determination to excel in everything I do. Your love, your care, and your unwavering support mean more to me than I could ever express in words. You are my rock, my inspiration, and the love of my life. Thank you for being you, and for being a shining light in my life. I cherish every moment with you and look forward to a future filled with even more beautiful moments together. With all my love,";
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
