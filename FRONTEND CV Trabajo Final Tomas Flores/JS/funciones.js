let BS;
document.getElementById('botonDarkMode').addEventListener('mouseover',function(){
    if(BS != 0) {
        document.getElementById('botonDarkMode').setAttribute('class','btn bg-body-secondary');
    } else {
        document.getElementById('botonDarkMode').setAttribute('class','btn bg-info-subtle');
    }
})
document.getElementById('botonDarkMode').addEventListener('mouseout',function(){
    if(BS != 0) {
        document.getElementById('botonDarkMode').setAttribute('class','btn bg-dark-subtle');
    } else {
        document.getElementById('botonDarkMode').setAttribute('class','btn bg-light');
    }
})

document.getElementById('botonDarkMode').addEventListener('click',function(){
    if (BS != 0) {
        document.body.style.backgroundColor= '#15202B';
        document.getElementById('botonDarkMode').innerHTML = "Light Mode";
        document.getElementById('botonDarkMode').setAttribute('class', 'btn bg-light');
        document.getElementById('nav').setAttribute('class', 'navbar navbar-expand-sm bg-dark');
        document.getElementById('columnas').setAttribute('class', 'col-sm-4 col-md-3 col-lg-3 bs-body-color-rgb(21,32,43)');
        document.getElementById('cuerpo').setAttribute('class','p-3 col-sm-8 col-md 9 col-lg-9 bg-dark');
        document.getElementById('Conocimientos').setAttribute('class','text-info fw-bold p-1');
        document.getElementById('Experiencia').setAttribute('class','text-info fw-bold p-1');
        document.getElementById('seccion1').setAttribute('class','text-light');
        document.getElementById('seccion2').setAttribute('class','text-light');
        BS = 0;
    } else {
        document.body.style.backgroundColor= '#ced4da';
        document.getElementById('botonDarkMode').innerHTML = "Dark Mode";
        document.getElementById('botonDarkMode').setAttribute('class', 'btn bg-dark-subtle');
        document.getElementById('nav').setAttribute('class', 'navbar navbar-expand-sm bg-dark');
        document.getElementById('columnas').setAttribute('class', 'col-sm-4 col-md-3 col-lg-3 bg-dark-subtle');
        document.getElementById('cuerpo').setAttribute('class','p-3 col-sm-8 col-md 9 col-lg-9 bg-secondary-subtle');
        document.getElementById('Conocimientos').setAttribute('class','text-info-emphasis fw-bold p-1');
        document.getElementById('Experiencia').setAttribute('class','text-info-emphasis fw-bold p-1');
        document.getElementById('seccion1').setAttribute('class','');
        document.getElementById('seccion2').setAttribute('class','');
        BS = 1;
    }
})
document.getElementById('direccion1').addEventListener('mouseover',function(){
    document.getElementById('direccion1').setAttribute('class','nav-link active text-secondary-emphasis');
})
document.getElementById('direccion1').addEventListener('mouseout',function(){
    document.getElementById('direccion1').setAttribute('class','nav-link active text-white');
})

document.getElementById('direccion2').addEventListener('mouseover',function(){
    document.getElementById('direccion2').setAttribute('class','nav-link active text-secondary-emphasis');
})
document.getElementById('direccion2').addEventListener('mouseout',function(){
    document.getElementById('direccion2').setAttribute('class','nav-link active text-white');
})

