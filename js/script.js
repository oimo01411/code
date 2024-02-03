// MV以降背景が変化
// $(function () {
//   $(window).on('scroll', function () {
//       if ($('.mv').height() < $(this).scrollTop()) {
//           $('.js-header').addClass('change-color');
//     } else {
//           $('.js-header').removeClass('change-color');
//     }
//   });
// });
// ページ内スクロール
$(function () {
  // ヘッダーの高さ取得
  const headerHeight = $(".js-header").height();
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    // ヘッダーの高さ分下げる
    let position = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// ハンバーガーメニュー
$(function () {
  var drawerClosed = true;
  function resizeHandler() {
    var windowWidth = $(window).width();
    if (windowWidth >= 768 && !drawerClosed) {
      $(".js-hamburger").removeClass("is-active");
      $(".js-drawer").fadeOut();
      drawerClosed = true;
    }
  }
  resizeHandler();
  $(window).on("resize", resizeHandler);
  $(".js-hamburger, .js-drawer, .js-drawer a").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
    drawerClosed = !drawerClosed;
  });
});

// スライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// タブ
$(function () {
  const tabButton = $(".js-tab-button"),
    tabContent = $(".js-tab-content");
  tabButton.on("click", function () {
    let index = tabButton.index(this);

    tabButton.removeClass("is-active");
    $(this).addClass("is-active");
    tabContent.removeClass("is-active");
    tabContent.eq(index).addClass("is-active");
  });
});

// モーダル
$(function () {
  const open = $(".js-modal-open"),
    close = $(".js-modal__close"),
    modal = $(".js-modal");

  open.on("click", function () {
    modal.addClass("is-open");
  });

  close.add(modal).on("click", function () {
    modal.removeClass("is-open");
  });
});

$(window).on("scroll", function () {
  const target = $('section').data('target');
  if ($(this).scrollTop() > $('.' + target).offset().top) {
    $(".header").addClass("is-scroll");
  } else {
    $(".header").removeClass("is-scroll");
  }
});