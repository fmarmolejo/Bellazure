function initializeTable(){
    Papa.parse('csv/data.csv', {
        download: true,
        header: true,
        complete: function(results) {
            // Adaptar los nombres de las columnas del CSV a los usados en la tabla
            const data = results.data.map(row => ({
                id: row['Número'],
                name: row['Perfume'],
                category: row['Categoría'] ? row['Categoría'].toLowerCase() : ''
            }));
            csvData = data; // Guardar los datos globalmente
            $('#table').bootstrapTable({
                data: csvData,
                toggle: 'table',
                customViewDefaultView: true,
                customView: 'customView',
                columns: [
                    { field: 'id', title: 'ID' },
                    { field: 'name', title: 'Name' },
                    { field: 'category', title: 'Category' }
                ]
            });
        }
    });
};

let csvData = []; // Variable global

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

    // Ya no es necesario el evento load-success.bs.table para asignar datos

    // Events

    $('.navbar-nav a').on('click', function(e) {
        e.preventDefault();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        const category = $(this).attr('data-category');
        if (category === 'all') {
            $('#table').bootstrapTable('load', csvData);
        } else {
            const filteredData = csvData.filter(item => item.category === category);
            $('#table').bootstrapTable('load', filteredData);
        }
        document.getElementById('table').scrollIntoView; 
    });

    $('#search-input').closest('form').on('submit', function(event){
        event.preventDefault();
    });

    $('#search-input').on('input', function(e) {
        const searchTerm = $(this).val().toLowerCase();
        const filteredData = csvData.filter(item => item.name.toLowerCase().includes(searchTerm) ||
                                                    item.id.toString().includes(searchTerm));
        $('#table').bootstrapTable('load', filteredData);
    });

    $('#priceModal').modal('show');

});

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
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


