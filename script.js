 
    // Mobile nav toggle
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");

    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("mobile-open");
    });

    // Smooth scroll helper for buttons
    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Smooth scroll for all nav links (desktop + mobile)
    document.querySelectorAll("a[href^='#']").forEach(link => {
      link.addEventListener("click", e => {
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          mobileNav.classList.remove("mobile-open");
        }
      });
    });

    // Project filter buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-filter");

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        projectCards.forEach(card => {
          const cardCat = card.getAttribute("data-category");
          if (category === "all" || category === cardCat) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    // Scroll reveal using IntersectionObserver
    const revealElements = document.querySelectorAll(".reveal");
    const options = { threshold: 0.15 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // Animate skill meters when skills section comes into view
          if (entry.target.classList.contains("skills-grid")) {
            document.querySelectorAll(".skill-meter-fill").forEach(bar => {
              const value = bar.getAttribute("data-skill");
              bar.style.width = value + "%";
            });
          }
        }
      });
    }, options);

    revealElements.forEach(el => observer.observe(el));

    // Dummy contact form submit
    function handleFormSubmit(event) {
      event.preventDefault();
      alert("This is a demo form. Replace with your own email/backend service.");
      event.target.reset();
    }

    // Footer year
    document.getElementById("year").textContent = new Date().getFullYear();

