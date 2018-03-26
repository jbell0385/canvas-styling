
var jquery = require('./node_modules/jquery/dist/jquery.js');
global.$ = global.jQuery = jquery;
//window.Popper = window._popper = $.popper = require("./node_modules/popper.js/dist/umd/popper.min.js");
//var popover = require("./node_modules/popper.js/dist/umd/popper.min.js");
var bootstrap = require("./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
require("./node_modules/gif-player-jquery/dist/jquery.gifplayer.js");
//require("p5");
//Import any CDN's like Font Awesome
window.onload = function() {
    var cssNode;

    function loadjscssfile(filename, filetype) {
        if (filetype == "js") {
            cssNode = document.createElement('script');
            cssNode.setAttribute("type", "text/javascript");
            cssNode.setAttribute("src", filename);
        } else if (filetype == "css") {
            cssNode = document.createElement("link");
            cssNode.setAttribute("rel", "stylesheet");
            cssNode.setAttribute("type", "text/css");
            cssNode.setAttribute("href", filename);
        }
        if (typeof cssNode != "undefined") document.getElementsByTagName("head")[0].appendChild(cssNode);
    }
    //loadjscssfile("//use.fontawesome.com/3813284168.js", "js");
    // loadjscssfile("//code.jquery.com/jquery-3.2.1.slim.min.js", "js");
    // loadjscssfile("//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js", "js");
    // loadjscssfile("//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", "js");
    loadjscssfile("//use.fontawesome.com/releases/v5.0.4/js/all.js", "js");
    loadjscssfile("//www.desmos.com/api/v0.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6", "js");
    loadjscssfile("//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML", "js");
    // $(function() {
    //     $('[data-toggle="tooltip"]').tooltip();
    // });
    // //Enable bootstrap popover
    // $(function() {
    //     $('[data-toggle="popover"]').popover()
    // })
    $(".ems-modal-content").each(function() {
        $(this).draggable({
            handle: ".modal-dialog"
        });
    });
    // Old self-check button answer. Possibly delete.
    $('.btn-answer').click(function(event) {
        event.preventDefault();
        $(this).siblings().toggleClass('hideAnswer');
        if ($(this).text() === "Answer") {
            $(this).text("Hide");
        } else {
            $(this).text("Answer");
        }
    })
    // Creates show/hide interactivity of self-check answer
    $(".answer-button").on("click", function(event) {
        event.preventDefault();
        $(this).parent().siblings().toggle(".answer-button");
        if ($(this).text() === "Answer") {
            $(this).text("Hide");
        } else {
            $(this).text("Answer");
        }
    })
    /* Removes scroll bars off iframes on the hero banner */
    $(".ems-container-fluid iframe").attr("scrolling", "no");
    $('.gifplayer').gifplayer({
        label: 'PLAY'
    });
    var quizIcons = $('.icon-quiz');
    $.each(quizIcons, function(index, value) {
        if ($(this).css('display') !== 'none') {
            $(this).css('display', 'flex');
            $(this).css('color', 'white');
            $(this).css('background-color', '#ef8641');
            $(this).css('border-radius', '20px');
            $(this).css('width', '25px');
            $(this).css('height', '25px');
            $(this).css('justify-content', 'center');
            $(this).css('align-items', 'center');
        }
    })
    var lessonIcons = $('.icon-document');
    $.each(lessonIcons, function(index, value) {
        if ($(this).css('display') !== 'none') {
            $(this).css('display', 'flex');
            $(this).css('color', 'white');
            $(this).css('background-color', '#0786a0');
            $(this).css('border-radius', '20px');
            $(this).css('width', '25px');
            $(this).css('height', '25px');
            $(this).css('justify-content', 'center');
            $(this).css('align-items', 'center');
        }
    })
    var moduleTimer = setTimeout(function() {
        var contextModule = $(".context_module");
        $.each(contextModule, function() {
            var igRows = $(this).find(".ig-row");
            var totalItems = igRows.length;
            var requirementsMsg = $(this).find(".requirements_message");
            var completedItems = 0;
            $.each(igRows, function(index, value) {
                if ($(this).find("i.icon-check").css("display") === "inline-block") {
                    completedItems++;
                    $(this).css("border-left", "3px solid #aebe37");
                } else {
                    $(this).css("border-left", "3px solid #ebbab9");
                }
            })
            $(requirementsMsg).find("ul li").text(completedItems + "/" + totalItems);
        })
    }, 500)

    //Leave at the end of file
    $.noConflict(true);
    //$(".question_input").addClass("selectpicker");
};