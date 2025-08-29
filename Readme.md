#-Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

--> 1. getElementById("id") - returns a single element by its ID. 2. getElementByClassName - returns multiple elements of html collection by one class. 3. document.querySelector - return 1st maching single element using css selector. 4. document.querySelectorAll - return the nodelist for all maching elements.

#-Q2: How do you create and insert a new element into the DOM?

-->
At first, we have to create an element by text=document.createElement(), then we will put texts by executing text.innerText="text here", then we have to insert it into the DOM by appendChild --> document.body.appendChild(text).

#-Q3: What is Event Bubbling and how does it work?

-->
Is a way that events propagate through the DOM. When an event happens on an element, like a click, it first triggers on the element itself. Then the event propagate to its parent, then the parent’s parent, all the way up to the html element.

#-Q4: What is Event Delegation in JavaScript? Why is it useful?

-->
Event Delegation is a technique where instead of adding an event listener to every single child element, you add one listener to their parent, and then check which child triggered the event. It relies on Event Bubbling, because the event bubbles up from the child to the parent.

#-Q5: What is the difference between preventDefault() and stopPropagation() methods?

-->

A.  preventDefault() - The purpose is to stop the default browser behavior of an element without stopping the event itself. But It does not stop the event from bubbling.
B.  stopPropagation() - The purpose is to stop the event from bubbling up to the parent elements.
