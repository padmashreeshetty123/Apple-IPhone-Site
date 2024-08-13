import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
  const slideNavButtons = document.createElement('div');
    slideNavButtons.classList.add('navigation-buttons');
    slideNavButtons.innerHTML = `
      <button type="button" class= "prev" aria-label="${placeholders.previousSlide || 'Previous Slide'}"><</button>
      <button type="button" class="next" aria-label="${placeholders.nextSlide || 'Next Slide'}">></button>
    `;
    block.append(slideNavButtons);

    const next_button=document.querySelectorAll('.next')[0];
 
    next_button.addEventListener('click',()=>{
      const ul=document.querySelectorAll('.cards ul')[0];
      console.log(ul)
      ul.scrollLeft = 200;
    })
    const prev_button=document.querySelectorAll('.prev')[0];
  prev_button.addEventListener('click',()=>{
      const ul=document.querySelectorAll('.cards ul')[0];
      console.log(ul)
      ul.scrollLeft = -200;
    })
}
