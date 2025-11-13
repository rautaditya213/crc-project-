function xor(a, b) {
  let result = "";
  for (let i = 1; i < b.length; i++) {
    result += (a[i] === b[i]) ? "0" : "1";
  }
  return result;
}

function mod2div(dividend, divisor) {
  let pick = divisor.length;
  let tmp = dividend.substring(0, pick);

  while (pick < dividend.length) {
    if (tmp[0] === '1')
      tmp = xor(divisor, tmp) + dividend[pick];
    else
      tmp = xor("0".repeat(pick), tmp) + dividend[pick];

    pick += 1;
  }

  if (tmp[0] === '1')
    tmp = xor(divisor, tmp);
  else
    tmp = xor("0".repeat(pick), tmp);

  return tmp;
}

function encode() {
  const dataword = document.getElementById("dataword").value.trim();
  const generator = document.getElementById("generator").value.trim();
  if (!dataword || !generator) {
    alert("Please enter both Data Frame and Generator Polynomial.");
    return;
  }

  const l_gen = generator.length;
  const appendedData = dataword + "0".repeat(l_gen - 1);
  const remainder = mod2div(appendedData, generator);
  const codeword = dataword + remainder;

  document.getElementById("encodedResult").innerHTML = 
    `Remainder: <b>${remainder}</b><br>Encoded Codeword: <b>${codeword}</b>`;
}

function decode() {
  const received = document.getElementById("receivedCode").value.trim();
  const generator = document.getElementById("decoderGen").value.trim();
  if (!received || !generator) {
    alert("Please enter both Received Codeword and Generator Polynomial.");
    return;
  }

  const remainder = mod2div(received, generator);
  const valid = !remainder.includes("1");

  document.getElementById("decodedResult").innerHTML = 
    valid 
      ? "✅ No error detected. Data received correctly."
      : `❌ Error detected! Syndrome (remainder): <b>${remainder}</b>`;
}
