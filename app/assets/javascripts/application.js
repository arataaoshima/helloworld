// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

func1 = function(){
    alert("Hello, World");
}

func2 = function() {
    $('h1').fadeOut(1500);
}

func3 = function() {
    $('h1').fadeIn(1500);
}

$(document).on('turbolinks:load',function(){
    $('.message').on('click',function(){
        $('h1').fadeOut(1500);
    })
    
    $('.arata').on('click',function(){
        $('h1').fadeIn(2000);
    })
    
    
})

