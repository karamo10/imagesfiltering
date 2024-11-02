document.addEventListener('DOMContentLoaded', function() {

    const filterBtns = document.querySelectorAll('.filter-btn')
    const itemsFilter = document.querySelectorAll('.item');

   //  console.log(filterBtns);

    filterBtns.forEach(button => {
        button.addEventListener('click', function() {
           filterBtns.forEach(btn => btn.classList.remove('active'));

           button.classList.add('active');
 

           const filter = button.getAttribute('data-filter');

           itemsFilter.forEach(item => {
             if(filter === "all" || item.classList.contains(filter)) {
                item.style.diplay = 'block';
             }
             else{
                item.style.display = 'none';
             }
           });
           
        });
    });

    document.querySelector('.filter-btn[data-filter="all"]').click();
})

