const flowerHead = document.getElementById("flowerHead");
const flowerContainer = document.getElementById("flower");
const textMessage = document.getElementById("textMessage");

const totalPetals = 12;
let isBloomed = false;
let SparkleInterval;
const petals = [];

for (let i = 0; i < totalPetals; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    const angle = (360 / totalPetals) * i;
    petal.style.transform = `rotate(${angle}deg) scaleY(0.6) translateY(20px)`;

    flowerHead.appendChild(petal);
    petals.push(petal);
}

flowerContainer.addEventListener("click", () => {
    if (!isBloomed) {
        petals.forEach((petal, i) => {
            const angle = (360 / totalPetals) * i;

            petal.style.transform = `rotate(${angle}deg) translateY(-20px) scale(1)`;
            petal.style.background = `linear-gradient(to top, #ff758f, #ffb3c1)`;
        });

        textMessage.innerHTML = "Special Flower for You! 🌸";
        textMessage.classList.add("show");
        isBloomed = true;

        SparkleInterval = setInterval(createSparkle, 150);
    } else {
        petals.forEach((petal, i) => {
            const angle = (360 / totalPetals) * i;

            petal.style.transform = `rotate(${angle}deg) scaleY(0.6) translateY(20px)`;
            petal.style.background = `linear-gradient(to top, #ff4d6d, #ff758f)`;
        });

        textMessage.classList.remove("show");
        textMessage.innerHTML = "Klik Bunganya agar Mekar";
        isBloomed = false;

        clearInterval(SparkleInterval);
    }
});

function createSparkle() {
    if (!isBloomed) return;
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 200 + 50 + "px";
    sparkle.style.bottom = '250px';

    const randomX = (Math.random() - 0.5) * 100 + "px";
    sparkle.style.setProperty('--x', randomX);

    flowerContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}