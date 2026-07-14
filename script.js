// RO'Lyfe AI Robotics Hub Script

document.addEventListener("DOMContentLoaded", function () {

    console.log("RO’Lyfe AI Robotics Hub Loaded");

    
    // Smooth section navigation support

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });



    // Future robotics status system

    const roboticsStatus = document.querySelector(".robot-box");


    if(roboticsStatus){

        console.log(
            "Robotics Division Status: Coming Soon - Partnership Evaluation Phase"
        );

    }



    // Simple reveal animation

    const cards = document.querySelectorAll(".card");


    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },

        {
            threshold: .15
        }

    );



    cards.forEach(card => {

        card.style.opacity = "0";

        card.style.transform = "translateY(20px)";

        card.style.transition = "all .6s ease";

        observer.observe(card);

    });



});
