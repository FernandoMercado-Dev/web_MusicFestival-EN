function fixedNavegation(){const e=document.querySelector(".header"),t=document.querySelector(".about-festival");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<1?e.classList.add("fixed"):e.classList.remove("fixed")}))}function createGallery(){const e=document.querySelector(".gallery-images");for(let t=1;t<=16;t++){const o=document.createElement("PICTURE");o.innerHTML=`\n            <source srcset="build/img/gallery/thumb/${t}.avif" type="image/avif">\n            <source srcset="build/img/gallery/thumb/${t}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${t}.jpg" alt="image gallery">\n        `,o.onclick=function(){showImage(t)},e.appendChild(o)}}function showImage(e){const t=document.createElement("PICTURE");t.innerHTML=`\n        <source srcset="build/img/gallery/full/${e}.avif" type="image/avif">\n        <source srcset="build/img/gallery/full/${e}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${e}.jpg" alt="imagen galeria">\n    `;const o=document.createElement("DIV");o.classList.add("modal"),o.onclick=closeModal;const l=document.createElement("BUTTON");l.textContent="X",l.classList.add("btn-close"),l.onclick=closeModal,o.appendChild(t),o.appendChild(l);const n=document.querySelector("body");n.classList.add("overflow-hidden"),n.appendChild(o)}function closeModal(){const e=document.querySelector(".modal");e.classList.add("fade-out"),setTimeout((()=>{e?.remove();document.querySelector("body").classList.remove("overflow-hidden")}),500)}function highlightLinks(){document.addEventListener("scroll",(function(){const e=document.querySelectorAll("section"),t=document.querySelectorAll(".navigation-main a");let o="";e.forEach((e=>{const t=e.offsetTop,l=e.clientHeight;window.scrollY>=t-l/3&&(o=e.id)})),t.forEach((e=>{e.classList.remove("active"),e.getAttribute("href")==="#"+o&&e.classList.add("active")}))}))}function scrollNav(){document.querySelectorAll(".navigation-main a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}))}document.addEventListener("DOMContentLoaded",(function(){fixedNavegation(),createGallery(),highlightLinks(),scrollNav()}));