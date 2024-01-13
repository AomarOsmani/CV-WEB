/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };
    
    
    
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
    
        var bibExportButtons = document.querySelectorAll('a.bib-export');

        bibExportButtons.forEach(function (bibExportButton) {
            bibExportButton.addEventListener('click', function (event) {
                event.preventDefault();
                var preContent = bibExportButton.querySelector('pre').innerHTML;
                alert_copy(preContent);
            });
        });
    
    

    
        var bibExportButtons = document.querySelectorAll('a.bib-doi');

        bibExportButtons.forEach(function (bibExportButton) {
            bibExportButton.addEventListener('click', function (event) {
                event.preventDefault();
                var preContent = bibExportButton.innerHTML;
                alert_copy(preContent);
            });
        });
    

    });


    function copyTextToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            // alert('Text copied to clipboard');
        }).catch(function(err) {
            console.error('Unable to copy text to clipboard', err);
        });
    }
    function alert_copy(data){
        copyTextToClipboard(data)
        alert(data +" copied!")
    }    

    