import { getMetadata } from "../../scripts/aem.js";
import { loadFragment } from "../fragment/fragment.js";

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata("footer");
  const footerPath = footerMeta
    ? new URL(footerMeta, window.location).pathname
    : "/footer";
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = "";
  const footer = document.createElement("div");
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
  const all_h5s = footer.querySelectorAll(
    "div > .section:nth-child(2) > div > h5"
  );
  console.log(all_h5s);
  Array(...all_h5s).map((h5) => {
    console.log(h5);
    var button = document.createElement("button");
    button.textContent = ">";
    button.addEventListener("click", () => {
      var next_element_sibling = h5.nextElementSibling;
      if (next_element_sibling.style.display == "block") {
        next_element_sibling.style.display = "none";
        button.textContent = ">";
      } else {
        button.textContent = "<";
        next_element_sibling.style.display = "block";
      }
    });
    h5.append(button);
  });
}
