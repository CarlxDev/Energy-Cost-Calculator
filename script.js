function calculateEnergyCost() {
    var powerConsumption = document.getElementById('power-consumption').value;
    var hoursPerDay = document.getElementById('hours-per-day').value;
    var energyRate = document.getElementById('energy-rate').value;
  
    var energyCost = (powerConsumption * hoursPerDay * 30 * energyRate) / 1000;
  
    document.getElementById('energy-cost').innerHTML = "The monthly energy cost is ₱" + energyCost.toFixed(2);
  }