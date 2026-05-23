// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}


export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {

  if (clear) {
    parentElement.innerHTML = "";
  }

  
  const htmlStrings = list.map(templateFn);

  // Insert all HTML into the page
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// get a parameter from the URL
export function getParam(param) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(param);
}

// update cart badge count
export function initCartBadge() {
  const cart = getLocalStorage("so-cart") || [];

  const badge = document.querySelector(".cart-count");

  if (!badge) return;

  badge.textContent = cart.length;

  if (cart.length > 0) {
    badge.classList.remove("hide");
  } else {
    badge.classList.add("hide");
  }
}
