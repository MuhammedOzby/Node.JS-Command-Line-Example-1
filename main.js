const PI = Math.PI;
const r = parseInt(process.argv.slice(2));

function calculateCircleArea(PI, r) {
  return PI * r * 2;
}

if (!r) console.log("Girilen sayı algılanamadı.");
else
  console.log(
    `Yarıçapı: ${r} olan dairenin alanı: ${calculateCircleArea(PI, r)}`
  );

function calculateCircleArea(PI, r) {
  return PI * r * 2;
}
