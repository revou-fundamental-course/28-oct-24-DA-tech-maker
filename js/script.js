function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // konversi tinggi dari cm ke meter

  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerText =
      "Masukkan nilai berat dan tinggi yang valid.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let status;

  if (bmi < 18.5) {
    status = "Kurus";
  } else if (bmi < 24.9) {
    status = "Normal";
  } else if (bmi < 29.9) {
    status = "Kelebihan berat badan";
  } else {
    status = "Obesitas";
  }

  document.getElementById("result").innerText = `BMI Anda: ${bmi} (${status})`;
}
