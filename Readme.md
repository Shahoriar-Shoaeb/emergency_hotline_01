1. Difference between getElementById, getElementsByClassNames, querySelector, querySelectorAll :
---> getElementById provides a single element of an specific id
---> getElementByClassName provides an html collection of multiple elements
---> querySelector selects the first item matching the selector(id, class, tag..)
---> querySelectorAll provides all html element matching the selector .


2. ---> First we need to access the parent html element
   ---> then create an element holder variable that will hold the html element  using document.createElement("html_element")
   ---> after we need to add html body to the variable using variable.innerHTML = ` `
   ---> then append the variable to the parent element using parent_element.append() .
   
   
3. Event bubbling is a type of event propagation where an event is handeled first by the child element , then it propagates through it's parent upto the html tag. Like, if we click a button inside a p tag then the event will be first handeled by the button then by the p tag , then p tags parent...upto ,<html> tag . 


4. Event delegagtio is an event handling process, where we add event handler  to a parent element to handle events on it's child element, it uses the event bubbling process, when an event is happend in a child element, it propagetes to it's parent and the parents event handler handles it .


5. Difference between preventDefault() and stopPropagation() :
--> preventDefault stops the dafault action of an element event
--> stopPropagation prevents the elements bubbling , it does not stop the default action
