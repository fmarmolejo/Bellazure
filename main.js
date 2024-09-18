function initializeTable(){
    $('#table').bootstrapTable({
        url: 'json/data.json',
        toogle: 'table',
        customViewDefaultView: true,
        customView: 'customView',
        columns: [
            { field: 'id', title: 'ID' },
            { field: 'name', title: 'Name' },
            { field: 'category', title: 'Category' }
        ]
    });
};

function customView(data) {
    const template = $('#template').html()
    let view = ''
    $.each(data, function (i, row) {
        view += template.replaceAll('%ID%', row.id)
        .replaceAll('%NAME%', row.name)
        .replaceAll('%CATEGORY%', row.category)
    })

    return `<div class="row mx-0">${view}</div>`
};

function addCategories() {
    const categories = ['mujer', 'hombre', 'infantil'];
    categories.forEach(category => {
        $('#navbar_top .nav-pills').append(`<li class="nav-item"><a class="nav-link mx-2 text-uppercase" href="#" data-category="${category}">${category}</a></li>`);
    });
};


$(document).ready(function() {
    initializeTable();
    addCategories();

    let jsonData = [];
    $('#table').on('load-success.bs.table', function (e, data) {
        jsonData = data;
    });


    // Events

    $('.navbar-nav a').on('click', function(e) {
        e.preventDefault();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        const category = $(this).attr('data-category');
        if (category === 'all') {
            $('#table').bootstrapTable('load', jsonData);
        } else {
            const filteredData = jsonData.filter(item => item.category === category);
            $('#table').bootstrapTable('load', filteredData);
        }
    });

});

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 54) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            //navbar_height = document.querySelector('.navbar').offsetHeight;
            //document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        } 
    });
});

    
