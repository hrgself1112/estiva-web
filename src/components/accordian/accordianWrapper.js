'use client'
import React, { useEffect } from 'react'
export const AccordianWrapper = ({children , className}) => {
    useEffect(() => {

      // getting all the dom elements by class and adding into the array 
      let accordianHead = Array.from(document.querySelectorAll(".accordian_head"));

    //  mappping all the getted array  to add the event listener
      accordianHead.map((item) =>
        item.addEventListener("click", () => {

          // after clicking into any item this function will fire
          closeAllAccordian(item);
        })
      );
 



      function closeAllAccordian(current_target) {
        accordianHead.forEach((item) => {
          
          // checking the conidtion is true or not
          
          if (current_target == item) {
            // if its true  then setting  class hidden for hide all the elements 
            accordianHead.forEach((it)=>{
              it.parentElement.classList.remove("activator")
              document.getElementById(it.dataset.opener).classList.add("hidden")
              
            })

            // after all the elements got hide we opening only element which is equal to current element clicked
            document.getElementById(current_target.dataset.opener).classList.add("block")
            document.getElementById(current_target.dataset.opener).classList.remove("hidden")

            // current_target.parentElement.classList.add("deactivator")
            current_target.parentElement.classList.add("activator")

     

            
            current_target.nextElementSibling.classList.toggle("active_body");

          }
            else {
          
            item.firstElementChild.classList.remove("active")
            item.nextElementSibling.classList.remove("active_body");

            // item.previousElementSibling.classList.remove("bg-set");

          }
        });
      }
      
        
         }, [])
    

  return (
    <>
      <div className={`${className}`}>
        {children}
      </div>
    </>
  )
}
