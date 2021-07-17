const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attactHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
}

attackBtn.addEventListener("click", attactHandler);
