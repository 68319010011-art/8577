// อัตราแปลงเป็นเมตร
const conversionRates = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344
};

function convertLength() {
  const inputValue = parseFloat(document.getElementById('inputValue').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const resultBox = document.getElementById('result');

  if (isNaN(inputValue)) {
    resultBox.innerHTML = '⚠ กรุณากรอกตัวเลข';
    resultBox.classList.add('show');
    return;
  }

  // แปลงเป็นเมตรก่อน
  const valueInMeters = inputValue * conversionRates[fromUnit];

  // แปลงจากเมตรไปยังหน่วยปลายทาง
  const result = valueInMeters / conversionRates[toUnit];

  resultBox.innerHTML = `
    ${inputValue} ${fromUnit} <br>
    = <br>
    <span style="color:#6c63ff;font-size:30px;">
      ${result.toLocaleString(undefined,{maximumFractionDigits:6})}
    </span>
    ${toUnit}
  `;

  resultBox.classList.remove('show');
  void resultBox.offsetWidth;
  resultBox.classList.add('show');
}

// ปุ่มสลับหน่วย
document.getElementById('swapBtn').addEventListener('click', () => {
  const from = document.getElementById('fromUnit');
  const to = document.getElementById('toUnit');

  [from.value, to.value] = [to.value, from.value];

  if (document.getElementById('inputValue').value !== '') {
    convertLength();
  }
});

// กด Enter เพื่อแปลงได้ทันที
document.getElementById('inputValue').addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    convertLength();
  }
});