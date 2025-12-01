const display = document.getElementById('result');

function append(value) {
  if (display.value === '0' || display.value === 'Error') {
    display.value = (value === '.') ? '0.' : value;
  } else {
    display.value += value;
  }
}

function clearResult() {
  display.value = '0';
}

function deleteLast() {
  display.value = display.value.length > 1 ? display.value.slice(0, -1) : '0';
}

function calculate() {
  try {
    let expression = display.value.replace(/×/g, '*');
    let result = eval(expression);
    display.value = isFinite(result) ? Number(result.toFixed(10)) : 'Error';
  } catch {
    display.value = 'Error';
    setTimeout(() => display.value = '0', 1200);
  }
}

document.addEventListener('keydown', e => {
  if (e.key >= '0' && e.key <= '9') append(e.key);
  if (e.key === '.') append('.');
  if (e.key === '+' || e.key === '-') append(e.key);
  if (e.key === '*') append('×');
  if (e.key === '/') append('/');
  if (e.key === 'Enter' || e.key === '=') calculate();
  if (e.key === 'Backspace') deleteLast();
  if (e.key === 'Escape') clearResult();
});
