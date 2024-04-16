

// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
        
//         question.classList.toggle("show-text");
//     });
// });



// second solution
//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach(function(question) {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener("click" , function() {

        // closing onw questoin already opened when open another one
        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    })
});






