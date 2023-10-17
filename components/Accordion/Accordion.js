import accordion from "./Accordion.html"
import "./Accordion.css"

export class Accordion extends HTMLElement {
    connectedCallback() {
        this.innerHTML = accordion;
        let accordionItems = document.querySelectorAll(".accordion-card");
        let accordionItemsArr = Array.from(accordionItems);
        accordionItemsArr.forEach((item) => {item.addEventListener("click", clickHandler)})
        function clickHandler(e){
            e.preventDefault()
            let currontItem = e.target.closest(".accordion-card");
            let currontContent = e.target.nextElementSibling;
            currontItem.classList.toggle("active");
            if (currontItem.classList.contains("active")) {
                currontContent.style.maxHeight = currontContent.scrollHeight + "px";
                currontContent.style.display = "block";
            }else {
                currontContent.style.display = "none";
            }
        }
    }
}