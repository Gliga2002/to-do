export function getInputValue(inputEl) {
  const inputValue = inputEl.value;
  inputEl.value = "";
  return inputValue;
}

export function setInputFocus(inputEl) {
  inputEl.select();
}

export function getElementId(element) {
  return element.dataset.id;
}