export default function addToggleViewportColorListener() {
  const viewportBox = document.querySelector('.toggle-viewport-color');
  const bodyEl = document.querySelector('body');
  const lightInnerHTML = viewportBox.innerHTML;
  const darkInnerHTML = `
  <div class="ball"></div>
  <i class="fa-solid fa-moon fa-3x" style="color:var(--moon);"></i>
  `

  viewportBox.addEventListener('click', function(e) {
    viewportBox.innerHTML = '';
    bodyEl.classList.toggle('dark');
    if(bodyEl.classList.contains('dark')) viewportBox.innerHTML = darkInnerHTML;
    else viewportBox.innerHTML = lightInnerHTML;
  })
}




