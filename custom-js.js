var jquery = require('./node_modules/jquery/dist/jquery.js');
global.$ = global.jQuery = jquery;
window.Popper = window._popper = $.popper = require("./node_modules/popper.js/dist/umd/popper.min.js");
var bootstrap = require("./node_modules/bootstrap/dist/js/bootstrap.min.js");
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
        if (typeof cssNode != "undefined")
            document.getElementsByTagName("head")[0].appendChild(cssNode);
    }
    loadjscssfile("//use.fontawesome.com/3813284168.js", "js");
    loadjscssfile("//www.desmos.com/api/v0.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6", "js");
    loadjscssfile("//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML", "js");
    loadjscssfile('//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js','js');


    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });



    $(".gc-modal-content").each(function(){
      $(this).draggable({
          handle:".modal-header"
      });
    });


    $('.btn-answer').click(function(event){
      event.preventDefault();
      $(this).siblings().toggleClass('hideAnswer');
      if($(this).text()==="Answer"){
        $(this).text("Hide");
      }else{
        $(this).text("Answer");
      }
    })

};





//$(".question_input").addClass("selectpicker");
