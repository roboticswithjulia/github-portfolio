"use strict";
import form from "./form.js";
import skillbar from "./skillbar.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
  });
  form();
  skillbar();

  const nav = document.querySelector("#nav");
  const navBtn = document.querySelector("#nav-btn");
  const navBtnImg = document.querySelector("#nav-btn-img");

  //Hamburger menu
  navBtn.onclick = () => {
    if (nav.classList.toggle("open")) {
      navBtnImg.src = "img/icons/close.svg";
    } else {
      navBtnImg.src = "img/icons/open.svg";
    }
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const hero = document.querySelector("#home");
    let triggerHeight = hero.offsetHeight - 170;

    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
      goToTop.classList.add("reveal");
    } else {
      header.classList.remove("header-sticky");
      goToTop.classList.remove("reveal");
    }
  });

  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 170;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };
});


// Tab functionality for both skills and talks sections
document.addEventListener('DOMContentLoaded', function() {
  // Handle Skills tabs
  setupTabs('.tabs-nav .tab-button', '#content-robotics, #content-automatics-control, #content-others');
  
  // Handle Talks tabs
  setupTabs('.tabs-nav-2 .tab-button', '#content-2025, #content-2024');
  
  // Function to set up tab functionality
  function setupTabs(tabSelector, contentSelector) {
    const tabButtons = document.querySelectorAll(tabSelector);
    const tabContents = document.querySelectorAll(contentSelector);
    
    // Set default active state
    if (tabButtons.length > 0 && tabContents.length > 0) {
      // Make sure first tab is active and visible
      tabButtons[0].classList.add('active');
      tabButtons[0].setAttribute('aria-selected', 'true');
      tabContents[0].classList.add('active');
      
      // Hide other tabs
      for (let i = 1; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
      }
    }
    
    // Add click event listener to each tab button
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Get the ID of the content to show
        const contentId = button.getAttribute('aria-controls');
        
        // Deactivate all tabs
        tabButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        
        // Hide all tab contents
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Activate selected tab and show content
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        document.getElementById(contentId).classList.add('active');
      });
    });
  }
});