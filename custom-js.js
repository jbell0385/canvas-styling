var jquery3 = require('./node_modules/jquery/dist/jquery.js');
var bootstrap = require("./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
//require("./jquery-ui.min.js");
//var gifplayer = require("./node_modules/gif-player-jquery/dist/jquery.gifplayer.js");
//var sticky = require("./node_modules/sticky-header/index.js");

//window.Popper = window._popper = $.popper = require("./node_modules/popper.js/dist/umd/popper.min.js");
//var popover = require("./node_modules/popper.js/dist/umd/popper.min.js");
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
    (function($) {
        if($('[data-toggle="tooltip"]').length>0){
            $('[data-toggle="tooltip"]').tooltip();
        }

        // Activate popovers and glossary
        if($('[data-toggle="popover"]').length>0){
            $('[data-toggle="popover"]').popover();
        }

        if( $('.glossary').length>0){
           $('.glossary').each(function(){
                $(this).popover({
                    trigger:'hover',
                    delay:{"show":500, "hide":100}
                });
            }) 
        }
            

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
        if ($(".answer-button").length>0) {
            $(".answer-button").on("click", function(event) {
                event.preventDefault();
                $(this).parent().siblings().toggle(".answer-button");
                if ($(this).text() === "Answer") {
                    $(this).text("Hide");
                } else {
                    $(this).text("Answer");
                }
            })
        }
        /* Removes scroll bars off iframes on the hero banner */
        if ($(".ems-container-fluid iframe")) {
            $(".ems-container-fluid iframe").attr("scrolling", "no");
        }
        // Activate Gifplayer
        // if ($('.gifplayer').length>0) {
        //     $('.gifplayer').gifplayer({
        //         glabel: 'PLAY'
        //     });
        // }

        //Change Canvas quiz icon styling
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

        //Change Canvas lesson icon sytling
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
        // var moduleTimer = setTimeout(function() {
        //     var contextModule = $(".context_module");
        //     $.each(contextModule, function() {
        //         var igRows = $(this).find(".ig-row");
        //         var totalItems = igRows.length;
        //         var requirementsMsg = $(this).find(".requirements_message");
        //         var completedItems = 0;
        //         $.each(igRows, function(index, value) {
        //             if ($(this).find("i.icon-check").css("display") === "inline-block") {
        //                 completedItems++;
        //                 $(this).css("border-left", "3px solid #aebe37");
        //             } else {
        //                 $(this).css("border-left", "3px solid #ebbab9");
        //             }
        //         })
        //         $(requirementsMsg).find("ul li").text(completedItems + "/" + totalItems);
        //     })
        // }, 800)

        //Create colored left borders on module items that indicate completion status
        var checkModuleIcon = setInterval(function(){
            if($('.module-item-status-icon i').length){
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
                clearInterval(checkModuleIcon); 
            }
        },100)


        //Add Unit Headers to Module Page

        var headerRegex = /(\d)\.0/;
        var contextModules = $(".context_module");

        $(contextModules).each(function(index,value){
            var igHeaderElem = $(this).find(".ig-header-title");
            var igHeaderTitle = igHeaderElem[1]["title"];
            if(igHeaderTitle.match(headerRegex)){
                $(`<div class="custom-unit-header">Unit ${igHeaderTitle[0]}</div>`).prependTo($(this));
            }
        })

        $("#quiz_ip_filter").attr("maxlength","524288");



        //Hide Page Lesson Titles
        

        //Activate Sticky Headers
        // var navs = document.querySelectorAll(".nav");
        // Array.prototype.forEach.call(navs, function(nav){
        //     sticky(nav);
        // })

        // var stickies = document.querySelectorAll(".headers-sticky");
        // Array.prototype.forEach.call(stickies, function(theSticky){
        //     sticky(theSticky);
        // })


        //Leave at the end of file
        $.noConflict(true);
        //$(".question_input").addClass("selectpicker");
    })(jquery3)


};

(function($) {
    $(".page-title").ready(function(){
        var pageTitle = $(".page-title").text();
        if(pageTitle.length > 0){
            $(".hero-text").text(pageTitle);
            $(".hero-text-bg").css("display","inline");
            $(".page-title").css("display","none");
        }
    })
})(jquery3)