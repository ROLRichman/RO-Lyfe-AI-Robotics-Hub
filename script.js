/* =========================================================
   RO'Lyfe AI Robotics Hub™
   COMMAND CENTER SCRIPT — V2
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("🤖 RO’Lyfe AI Robotics Hub™ Loaded");
    console.log("RO’Lyfe Command Center: Online");


    /* =====================================================
       SMOOTH SECTION NAVIGATION
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       ROBOTICS STATUS
       ===================================================== */

    const roboticsStatus = document.querySelector(".robot-box");

    if (roboticsStatus) {

        console.log(
            "🤖 Robotics Division Status: Research / Evaluation"
        );

    }


    /* =====================================================
       CARD REVEAL ANIMATION
       ===================================================== */

    const cards = document.querySelectorAll(
        ".card, .partner-card, .finance-card, .partnership-item"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


        cards.forEach(function (card) {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(20px)";

            card.style.transition =
                "opacity .6s ease, transform .6s ease";

            observer.observe(card);

        });

    } else {

        cards.forEach(function (card) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        });

    }


    /* =====================================================
       DROPDOWN NAVIGATION
       ===================================================== */

    const navItems = document.querySelectorAll(".nav-item");


    navItems.forEach(function (item) {

        const trigger = item.querySelector(":scope > a");

        const dropdown = item.querySelector(".dropdown-menu");


        if (!trigger || !dropdown) {
            return;
        }


        trigger.addEventListener("click", function (event) {

            /*
             * On touch/mobile devices, first tap opens
             * the dropdown rather than immediately navigating.
             */

            if (window.innerWidth <= 700) {

                const isOpen =
                    item.classList.contains("dropdown-open");


                if (!isOpen) {

                    event.preventDefault();


                    navItems.forEach(function (otherItem) {

                        if (otherItem !== item) {

                            otherItem.classList.remove(
                                "dropdown-open"
                            );

                        }

                    });


                    item.classList.add(
                        "dropdown-open"
                    );

                }

            }

        });

    });


    /* =====================================================
       CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".nav-item")) {

            navItems.forEach(function (item) {

                item.classList.remove(
                    "dropdown-open"
                );

            });

        }

    });


    /* =====================================================
       CLOSE MOBILE DROPDOWN AFTER SELECTING A LINK
       ===================================================== */

    document.querySelectorAll(
        ".dropdown-menu a"
    ).forEach(function (link) {

        link.addEventListener("click", function () {

            navItems.forEach(function (item) {

                item.classList.remove(
                    "dropdown-open"
                );

            });

        });

    });


    /* =====================================================
       ESC KEY CLOSES DROPDOWNS
       ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navItems.forEach(function (item) {

                item.classList.remove(
                    "dropdown-open"
                );

            });

        }

    });


    /* =====================================================
       MOBILE VIEWPORT RESET
       ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 700) {

            navItems.forEach(function (item) {

                item.classList.remove(
                    "dropdown-open"
                );

            });

        }

    });


    /* =====================================================
       COMMAND CENTER READY
       ===================================================== */

    console.log(
        "🚀 RO’Lyfe Command Center Navigation: Ready"
    );

});
