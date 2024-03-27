console.log("here")
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    let thresholds = [];
    for (let i = 0; i <= 10; i++) {
        thresholds.push(i / 10)
    }
    let options = {
        threshold: thresholds,
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            let ratio = Math.round(entry.intersectionRatio * 10) / 10;
            console.log(ratio)

            if (entry.boundingClientRect.top > 0) {
                entry.target.classList.remove("width-60")
                entry.target.classList.remove("width-70")
                entry.target.classList.remove("width-80")
                entry.target.classList.remove("width-90")
                entry.target.classList.remove("width-100")

                if (ratio >= 0 && ratio < 0.5) {
                    entry.target.classList.add("width-60")
                }
                else if (ratio >= 0.5 && ratio < 0.6) {
                    entry.target.classList.add("width-70")
                }
                else if (ratio >= 0.6 && ratio < 0.7) {
                    entry.target.classList.add("width-80")
                }
                else if (ratio >= 0.7 && ratio < 0.8) {
                    entry.target.classList.add("width-90")
                }
                else if (ratio >= 0.8 && ratio <= 1) {
                    entry.target.classList.add("width-100")
                }
            }
        });
   }, options);

   const icons = document.querySelectorAll(".hide");
   icons.forEach((icon) => observer.observe(icon));
