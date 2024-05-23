/**
 * website.ts Common Script File
 *
 * @project yii2
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, July 10, 2023 at 11:49 AM GMT+3
 *
 */

import "@scss/tiers/website/website.scss";
import "@/native";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Icon } from '@iconify/vue';

import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

declare var window: any;

(() => {
  function main() {
    AOS.init();
    scrollTo();
    animation();
    swiper();
    navScroll();
    numberAnimation();
  }

  document.addEventListener("readystatechange", async (event: any) => {
    if (event.target.readyState === "complete") {
      // (await import("@/modules/theme"))?.initTheme?.()
      main();
    }
  });
})();

function scrollTo() {
  document.querySelectorAll('.scroll-to').forEach((a) => {
    a.addEventListener('click', (e) => {
      const elementId = a.getAttribute('href').split('#')[1];
      const element = document.getElementById(elementId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    })
  })
}

function animation() {
  const menuHamburger = document.querySelector(".menu-hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (menuHamburger && navLinks) {
    menuHamburger.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-menu");
    });
    document.addEventListener("DOMContentLoaded", function () {
      const menuIcon = document.getElementById("menu-icon");
      const navMenu = document.querySelector(".nav-menu");
      const navLinks = document.querySelectorAll(".nav-menu li");
      if (menuIcon && navMenu) {
        menuIcon.addEventListener("click", function () {
          navLinks.forEach((link: any, index) => {
            link.style.animation = "";
          });

          //   void navMenu.offsetWidth;

          navLinks.forEach((link: any, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7
              }s`;
          });
        });
      }
    });
  }
}

function swiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay],
    direction: 'horizontal',

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

function navScroll() {
  var headerWrapper = document.querySelector(".header-wrapper");
  var topDiv = document.querySelector(".top");
  var logoLink = document.querySelector(".logo");


  window.addEventListener("scroll", function () {
    headerWrapper.display = "none";
    if (window.scrollY > 200) {
      headerWrapper.classList.add("fixed");
      topDiv.style.display = "none";
      headerWrapper.style.setProperty('--height', '80px');
      logoLink.style.backgroundSize = "contain";
      logoLink.style.setProperty('height', '80px');
      headerWrapper.display = "flex";

    } else if (window.scrollY < 20) {
      headerWrapper.classList.remove("fixed");
      topDiv.style.display = "flex";
      headerWrapper.style.setProperty('--height', '140px');
      logoLink.style.backgroundSize = "contain";
      logoLink.style.setProperty('height', '170px');
      headerWrapper.display = "flex";
    }
  });
}

function money(amount: number, currency: string = "USD") {
  return Intl.NumberFormat('en-US', {
    style: 'currency', currency, minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(amount)
}

function numberAnimation() {
  const countElement = document.getElementById('count-up');

  const finalNumber = parseFloat(window.donation);

  const animationDuration = 1500;
  let startTime = null;

  function formatNumberWithLeadingZerosAndDollarSign(number) {
    const formattedNumber = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumIntegerDigits: 6,
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
    // return formattedNumber;
    return formattedNumber.replace('$', '') + ' $';

  }

  function updateNumber(timestamp) {
    if (!startTime)
      startTime = timestamp;

    if (startTime && countElement) {
      const progress = (timestamp - startTime) / animationDuration;

      if (progress < 1) {
        const currentNumber = Math.min(finalNumber, progress * finalNumber);
        countElement.textContent = formatNumberWithLeadingZerosAndDollarSign(
          +currentNumber.toFixed(0)
        );
        requestAnimationFrame(updateNumber);
      } else {
        countElement.textContent = formatNumberWithLeadingZerosAndDollarSign(
          +finalNumber.toFixed(0)
        );
      }
    }
  }

  if (finalNumber === 0) {
    let counter = 1;
    const formattedZero = formatNumberWithLeadingZerosAndDollarSign(0);
    const zeroAnimation = setInterval(() => {
      if (counter <= formattedZero.length) {
        countElement.textContent = formattedZero.slice(0, counter);
        counter++;
      } else {
        clearInterval(zeroAnimation);
      }
    }, animationDuration / formattedZero.length);
  } else {
    requestAnimationFrame(updateNumber);
  }
}