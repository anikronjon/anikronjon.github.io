jQuery(function ($) {
  "use strict";

  const $scrollToTop = $(".scrollToTop");
  const $progressPath = $scrollToTop.find("path");

  if (!$progressPath.length) return;

  const progressPath = $progressPath[0];
  let pathLength;

  try {
    pathLength = progressPath.getTotalLength();
  } catch (e) {
    console.error("Error getting path length:", e);
    return;
  }

  // Set up path stroke styles
  $progressPath.css({
    transition: "none",
    strokeDasharray: `${pathLength} ${pathLength}`,
    strokeDashoffset: pathLength,
  });

  // Trigger reflow
  progressPath.getBoundingClientRect();

  // Enable transition
  $progressPath.css({
    transition: "stroke-dashoffset 10ms linear",
  });

  const $window = $(window);
  const $document = $(document);
  const $chat = $(".tmp-ready-chat");
  const offset = 50;
  const duration = 550;

  function updateProgress() {
    const scroll = $window.scrollTop();
    const height = $document.height() - $window.height();
    const progress = pathLength - (scroll * pathLength) / height;

    $progressPath.css("strokeDashoffset", progress);

    if (scroll > offset) {
      $scrollToTop.addClass("active-progress");
      $chat.addClass("chat-visible");
    } else {
      $scrollToTop.removeClass("active-progress");
      $chat.removeClass("chat-visible");
    }
  }

  // Initial + scroll update
  updateProgress();
  $window.on("scroll", updateProgress);

  // Smooth scroll to top
  $scrollToTop.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
  });
});