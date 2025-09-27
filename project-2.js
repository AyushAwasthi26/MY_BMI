document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const result = document.querySelector("#result");

    if (height === "" || height < 0 || isNaN(height)) {
      result.innerHTML = `Please enter a valid height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
      result.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      let cur_status;
      if (bmi<18.6){
        cur_status='Under Weight'
      }
      else if(18.6<=bmi && bmi<=24.9){
        cur_status='Normal'
      }
      else if(bmi>24.9){
        cur_status='Over Weight'
      }
      result.innerHTML = `Your BMI is:<span>${bmi}</span> : ${cur_status}`;
    }
  });
});
