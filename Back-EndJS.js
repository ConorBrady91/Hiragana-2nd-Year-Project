// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var counter = 0;
var counter2 = 0;

      function correct() {
    document.getElementById("demo").innerHTML = "Correct";
        counter++;
          $("p2").hide();
}
     function incorrect() {
    document.getElementById("demo").innerHTML = "Incorrect";
}
     function correct2() {
    document.getElementById("demo2").innerHTML = "Correct";
        counter++;
         $("p3").hide();
         
}
     function incorrect2() {
    document.getElementById("demo2").innerHTML = "Incorrect";
}
     function correct3() {
    document.getElementById("demo3").innerHTML = "Correct";
        counter++;
         $("p4").hide();
}
     function incorrect3() {
    document.getElementById("demo3").innerHTML = "Incorrect";
}
     function correct4() {
    document.getElementById("demo4").innerHTML = "Correct";
        counter++;
          $("p5").hide();
}
     function incorrect4() {
    document.getElementById("demo4").innerHTML = "Incorrect";
}
     function correct5() {
    document.getElementById("demo5").innerHTML = "Correct";
        counter++;
          $("p6").hide();
}
     function incorrect5() {
    document.getElementById("demo5").innerHTML = "Incorrect";
}
     function correct6() {
    document.getElementById("demo6").innerHTML = "Correct";
        counter++;
          $("p7").hide();
}
     function incorrect6() {
    document.getElementById("demo6").innerHTML = "Incorrect";
}
     function correct7() {
    document.getElementById("demo7").innerHTML = "Correct";
        counter++;
          $("p8").hide();
}
     function incorrect7() {
    document.getElementById("demo7").innerHTML = "Incorrect";
}
     function correct8() {
    document.getElementById("demo8").innerHTML = "Correct";
        counter++;
          $("p9").hide();
}
     function incorrect8() {
    document.getElementById("demo8").innerHTML = "Incorrect";
}
     function correct9() {
    document.getElementById("demo9").innerHTML = "Correct";
        counter++;
          $("p10").hide();
}
     function incorrect9() {
    document.getElementById("demo9").innerHTML = "Incorrect";
}
     function correct10() {
    document.getElementById("demo10").innerHTML = "Correct";
        counter++;
          $("p11").hide();
}
     function incorrect10() {
    document.getElementById("demo10").innerHTML = "Incorrect";
}
     function correct11() {
    document.getElementById("demo11").innerHTML = "Correct";
        counter2++;
           $("p12").hide();
}
     function incorrect11() {
    document.getElementById("demo11").innerHTML = "Incorrect";
}
     function correct12() {
    document.getElementById("demo12").innerHTML = "Correct";
        counter2++;
          $("p13").hide();
}
     function incorrect12() {
    document.getElementById("demo12").innerHTML = "Incorrect";
}
     function correct13() {
    document.getElementById("demo13").innerHTML = "Correct";
        counter2++;
          $("p14").hide();
}
     function incorrect13() {
    document.getElementById("demo13").innerHTML = "Incorrect";
}
     function correct14() {
    document.getElementById("demo14").innerHTML = "Correct";
        counter2++;
          $("p15").hide();
}
     function incorrect14() {
    document.getElementById("demo14").innerHTML = "Incorrect";
}
     function correct15() {
    document.getElementById("demo15").innerHTML = "Correct";
        counter2++;
          $("p16").hide();
}
     function incorrect15() {
    document.getElementById("demo15").innerHTML = "Incorrect";
}
     function correct16() {
    document.getElementById("demo16").innerHTML = "Correct";
        counter2++;
          $("p17").hide();
}
     function incorrect16() {
    document.getElementById("demo16").innerHTML = "Incorrect";
}
     function correct17() {
    document.getElementById("demo17").innerHTML = "Correct";
        counter2++;
          $("p18").hide();
}
     function incorrect17() {
    document.getElementById("demo17").innerHTML = "Incorrect";
}
     function correct18() {
    document.getElementById("demo18").innerHTML = "Correct";
        counter2++;
          $("p19").hide();
}
     function incorrect18() {
    document.getElementById("demo18").innerHTML = "Incorrect";
}
     function correct19() {
    document.getElementById("demo19").innerHTML = "Correct";
        counter2++;
          $("p20").hide();
}
     function incorrect19() {
    document.getElementById("demo19").innerHTML = "Incorrect";
}
     function correct20() {
    document.getElementById("demo20").innerHTML = "Correct";
        counter2++;
          $("p21").hide();
}
     function incorrect20() {
    document.getElementById("demo20").innerHTML = "Incorrect";
}
function end(){
    alert("You scored " + (counter*100)/10 + " percent");
}
function end2(){
    alert("You scored " + ((counter2)*100)/10 + " percent");
}
$(document).ready(function(){
 
    
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
    function insertText () {
    document.getElementById('td1').innerHTML = "n";
}
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../Hiragana-Project/sounds/a.mp3');
    var image = new Image();
    var img = new Image();
image.src='https://upload.wikimedia.org/wikipedia/commons/d/d8/Hiragana_%E3%81%82_stroke_order_animation.gif';
    img.src= 'https://upload.wikimedia.org/wikipedia/commons/6/67/Japanese_Hiragana_kyokashotai_A.svg';
    $('#img').hover(function(){
       $(this).attr('src',image.src);
    }, function(){
        $(this).attr('src', img.src);
         
    });
     $.get();       
    $('#img').click(function(){
        audioElement.play();      
    });
    
         var audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', '../Hiragana-Project/sounds/b.mp3');    
    var image2 = new Image();
    var img2 = new Image();
    image2.src ='https://upload.wikimedia.org/wikipedia/commons/c/cf/Hiragana_%E3%81%84_stroke_order_animation.gif';
    img2.src = 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Japanese_Hiragana_kyokashotai_I.png'
    $('#img2').hover(function(){
       $(this).attr('src',image2.src);
         }, function(){
        $(this).attr('src', img2.src);
});
    $.get();       
    $('#img2').click(function(){
        audioElement2.play();      
    });
    
    var audioElement3 = document.createElement('audio');
    audioElement3.setAttribute('src', '../Hiragana-Project/sounds/c.mp3');
     var image3 = new Image();
    var img3 = new Image();
    image3.src ='https://upload.wikimedia.org/wikipedia/commons/7/7f/Hiragana_%E3%81%86_stroke_order_animation.gif';
    img3.src= 'https://upload.wikimedia.org/wikipedia/commons/9/90/Japanese_Hiragana_kyokashotai_U.png'
    $('#img3').hover(function(){
       $(this).attr('src',image3.src);
         }, function(){
        $(this).attr('src', img3.src);
});
     $.get();       
    $('#img3').click(function(){
        audioElement3.play();      
    });
    
    var audioElement4 = document.createElement('audio');
    audioElement4.setAttribute('src', '../Hiragana-Project/sounds/d.mp3');
     var image4 = new Image();
    var img4 = new Image();
    image4.src ='https://upload.wikimedia.org/wikipedia/commons/4/4f/Hiragana_%E3%81%88_stroke_order_animation.gif';
    img4.src= 'https://upload.wikimedia.org/wikipedia/commons/b/be/Japanese_Hiragana_kyokashotai_E.png'
    $('#img4').hover(function(){
       $(this).attr('src',image4.src);
        }, function(){
        $(this).attr('src', img4.src);
});
     
    $.get();       
    $('#img4').click(function(){
        audioElement4.play();      
    });
    var audioElement5 = document.createElement('audio');
    audioElement5.setAttribute('src', '../Hiragana-Project/sounds/e.mp3');
     var image5 = new Image();
    var img5 = new Image();
    image5.src ='https://upload.wikimedia.org/wikipedia/commons/7/7b/Hiragana_%E3%81%8A_stroke_order_animation.gif';
    img5.src= 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Japanese_Hiragana_kyokashotai_O.png'
    $('#img5').hover(function(){
       $(this).attr('src',image5.src);
        }, function(){
        $(this).attr('src', img5.src);
});
     $.get();       
    $('#img5').click(function(){
        audioElement5.play();      
    });
    
    var audioElement6 = document.createElement('audio');
    audioElement6.setAttribute('src', '../Hiragana-Project/sounds/f.mp3');
     var image6 = new Image();
    var img6 = new Image();
    image6.src ='https://upload.wikimedia.org/wikipedia/commons/9/97/Hiragana_%E3%81%8B_stroke_order_animation.gif';
    img6.src= 'https://upload.wikimedia.org/wikipedia/commons/b/be/Japanese_Hiragana_kyokashotai_KA.svg'
    $('#img6').hover(function(){
       $(this).attr('src',image6.src);
        }, function(){
        $(this).attr('src', img6.src);
});
     $.get();       
    $('#img6').click(function(){
        audioElement6.play();      
    });
    
    var audioElement7 = document.createElement('audio');
    audioElement7.setAttribute('src', '../Hiragana-Project/sounds/g.mp3');
     var image7 = new Image();
    var img7 = new Image();
    image7.src ='https://upload.wikimedia.org/wikipedia/commons/1/18/Hiragana_%E3%81%8D_stroke_order_animation.gif';
    img7.src= 'https://upload.wikimedia.org/wikipedia/commons/6/63/Japanese_Hiragana_kyokashotai_KI.svg'
    $('#img7').hover(function(){
       $(this).attr('src',image7.src);
        }, function(){
        $(this).attr('src', img7.src);
});
     $.get();       
    $('#img7').click(function(){
        audioElement7.play();      
    });
    
    var audioElement8 = document.createElement('audio');
    audioElement8.setAttribute('src', '../Hiragana-Project/sounds/h.mp3');
     var image8 = new Image();
    var img8 = new Image();
    image8.src ='https://upload.wikimedia.org/wikipedia/commons/6/68/Hiragana_%E3%81%8F_stroke_order_animation.gif';
    img8.src= 'https://upload.wikimedia.org/wikipedia/commons/1/13/Japanese_Hiragana_kyokashotai_KU.svg'
    $('#img8').hover(function(){
       $(this).attr('src',image8.src);
        }, function(){
        $(this).attr('src', img8.src);
});
     $.get();       
    $('#img8').click(function(){
        audioElement8.play();      
    });
    
    var audioElement9 = document.createElement('audio');
    audioElement9.setAttribute('src', '../Hiragana-Project/sounds/i.mp3');
     var image9 = new Image();
    var img9 = new Image();
    image9.src ='https://upload.wikimedia.org/wikipedia/commons/5/57/Hiragana_%E3%81%91_stroke_order_animation.gif';
    img9.src= 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Japanese_Hiragana_kyokashotai_KE.png'
    $('#img9').hover(function(){
       $(this).attr('src',image9.src);
        }, function(){
        $(this).attr('src', img9.src);
});
     $.get();       
    $('#img9').click(function(){
        audioElement9.play();      
    });
    
    var audioElement10 = document.createElement('audio');
    audioElement10.setAttribute('src', '../Hiragana-Project/sounds/j.mp3');
     var image10 = new Image();
    var img10 = new Image();
    image10.src ='https://upload.wikimedia.org/wikipedia/commons/8/83/Hiragana_%E3%81%93_stroke_order_animation.gif';
    img10.src= 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Japanese_Hiragana_kyokashotai_KO.png'
    $('#img10').hover(function(){
       $(this).attr('src',image10.src);
        }, function(){
        $(this).attr('src', img10.src);
});
     $.get();       
    $('#img10').click(function(){
        audioElement10.play();      
    });
    
    var audioElement11 = document.createElement('audio');
    audioElement11.setAttribute('src', '../Hiragana-Project/sounds/k.mp3');
     var image11 = new Image();
    var img11 = new Image();
    image11.src ='https://upload.wikimedia.org/wikipedia/commons/7/79/Hiragana_%E3%81%95_stroke_order_animation.gif';
    img11.src= 'https://upload.wikimedia.org/wikipedia/commons/8/89/Japanese_Hiragana_kyokashotai_SA.svg'
    $('#img11').hover(function(){
       $(this).attr('src',image11.src);
        }, function(){
        $(this).attr('src', img11.src);
});
     $.get();       
    $('#img11').click(function(){
        audioElement11.play();      
    });
    
    var audioElement12 = document.createElement('audio');
    audioElement12.setAttribute('src', '../Hiragana-Project/sounds/l.mp3');
     var image12 = new Image();
    var img12 = new Image();
    image12.src ='https://upload.wikimedia.org/wikipedia/commons/a/a4/Hiragana_%E3%81%97_stroke_order_animation.gif';
    img12.src= 'https://upload.wikimedia.org/wikipedia/commons/6/61/Japanese_Hiragana_kyokashotai_SI.svg'
    $('#img12').hover(function(){
       $(this).attr('src',image12.src);
        }, function(){
        $(this).attr('src', img12.src);
});
     $.get();       
    $('#img12').click(function(){
        audioElement12.play();      
    });
    
    var audioElement13 = document.createElement('audio');
    audioElement13.setAttribute('src', '../Hiragana-Project/sounds/m.mp3');
     var image13 = new Image();
    var img13 = new Image();
    image13.src ='https://upload.wikimedia.org/wikipedia/commons/0/05/Hiragana_%E3%81%99_stroke_order_animation.gif';
    img13.src= 'https://upload.wikimedia.org/wikipedia/commons/7/79/Japanese_Hiragana_kyokashotai_SU.svg'
    $('#img13').hover(function(){
       $(this).attr('src',image13.src);
        }, function(){
        $(this).attr('src', img13.src);
});
     $.get();       
    $('#img13').click(function(){
        audioElement13.play();      
    });
    
    var audioElement14 = document.createElement('audio');
    audioElement14.setAttribute('src', '../Hiragana-Project/sounds/n.mp3');
     var image14 = new Image();
    var img14 = new Image();
    image14.src ='https://upload.wikimedia.org/wikipedia/commons/7/7a/Hiragana_%E3%81%9B_stroke_order_animation.gif';
    img14.src= 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Japanese_Hiragana_kyokashotai_SE.svg'
    $('#img14').hover(function(){
       $(this).attr('src',image14.src);
        }, function(){
        $(this).attr('src', img14.src);
});
     $.get();       
    $('#img14').click(function(){
        audioElement14.play();      
    });
    
    var audioElement15 = document.createElement('audio');
    audioElement15.setAttribute('src', '../Hiragana-Project/sounds/o.mp3');
     var image15 = new Image();
    var img15 = new Image();
    image15.src ='https://upload.wikimedia.org/wikipedia/commons/5/5b/Hiragana_%E3%81%9D_stroke_order_animation.gif';
    img15.src= 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Japanese_Hiragana_kyokashotai_SO.svg'
    $('#img15').hover(function(){
       $(this).attr('src',image15.src);
        }, function(){
        $(this).attr('src', img15.src);
});
     $.get();       
    $('#img15').click(function(){
        audioElement15.play();      
    });
    
    var audioElement16 = document.createElement('audio');
    audioElement16.setAttribute('src', '../Hiragana-Project/sounds/p.mp3');
     var image16 = new Image();
    var img16 = new Image();
    image16.src ='https://upload.wikimedia.org/wikipedia/commons/9/9a/Hiragana_%E3%81%9F_stroke_order_animation.gif';
    img16.src= 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Japanese_Hiragana_kyokashotai_TA.png'
    $('#img16').hover(function(){
       $(this).attr('src',image16.src);
        }, function(){
        $(this).attr('src', img16.src);
});
     $.get();       
    $('#img16').click(function(){
        audioElement16.play();      
    });
    
    var audioElement17 = document.createElement('audio');
    audioElement17.setAttribute('src', '../Hiragana-Project/sounds/q.mp3');
     var image17 = new Image();
    var img17 = new Image();
    image17.src ='https://upload.wikimedia.org/wikipedia/commons/3/32/Hiragana_%E3%81%A1_stroke_order_animation.gif';
    img17.src= 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Japanese_Hiragana_kyokashotai_TI.png'
    $('#img17').hover(function(){
       $(this).attr('src',image17.src);
        }, function(){
        $(this).attr('src', img17.src);
});
     $.get();       
    $('#img17').click(function(){
        audioElement17.play();      
    });
    
    var audioElement18 = document.createElement('audio');
    audioElement18.setAttribute('src', '../Hiragana-Project/sounds/r.mp3');
     var image18 = new Image();
    var img18 = new Image();
    image18.src ='https://upload.wikimedia.org/wikipedia/commons/0/08/Hiragana_%E3%81%A4_stroke_order_animation.gif';
    img18.src= 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Japanese_Hiragana_kyokashotai_TU.png'
    $('#img18').hover(function(){
       $(this).attr('src',image18.src);
        }, function(){
        $(this).attr('src', img18.src);
});
     $.get();       
    $('#img18').click(function(){
        audioElement18.play();      
    });
    
    var audioElement19 = document.createElement('audio');
    audioElement19.setAttribute('src', '../Hiragana-Project/sounds/s.mp3');
     var image19 = new Image();
    var img19 = new Image();
    image19.src ='https://upload.wikimedia.org/wikipedia/commons/1/15/Hiragana_%E3%81%A6_stroke_order_animation.gif';
    img19.src= 'https://upload.wikimedia.org/wikipedia/commons/9/96/Japanese_Hiragana_kyokashotai_TE.png'
    $('#img19').hover(function(){
       $(this).attr('src',image19.src);
        }, function(){
        $(this).attr('src', img19.src);
});
     $.get();       
    $('#img19').click(function(){
        audioElement19.play();      
    });
    
    var audioElement20 = document.createElement('audio');
    audioElement20.setAttribute('src', '../Hiragana-Project/sounds/t.mp3');
     var image20 = new Image();
    var img20 = new Image();
    image20.src ='https://upload.wikimedia.org/wikipedia/commons/6/6e/Hiragana_%E3%81%A8_stroke_order_animation.gif';
    img20.src= 'https://upload.wikimedia.org/wikipedia/commons/0/07/Japanese_Hiragana_kyokashotai_TO.png'
    $('#img20').hover(function(){
       $(this).attr('src',image20.src);
        }, function(){
        $(this).attr('src', img20.src);
});
     $.get();       
    $('#img20').click(function(){
        audioElement20.play();      
    });
    
    var audioElement21 = document.createElement('audio');
    audioElement21.setAttribute('src', '../Hiragana-Project/sounds/u.mp3');
     var image21 = new Image();
    var img21 = new Image();
    image21.src ='https://upload.wikimedia.org/wikipedia/commons/8/83/Hiragana_%E3%81%AA_stroke_order_animation.gif';
    img21.src= 'https://upload.wikimedia.org/wikipedia/commons/7/72/Japanese_Hiragana_kyokashotai_NA.png'
    $('#img21').hover(function(){
       $(this).attr('src',image21.src);
        }, function(){
        $(this).attr('src', img21.src);
});
     $.get();       
    $('#img21').click(function(){
        audioElement21.play();      
    });
    
    var audioElement22 = document.createElement('audio');
    audioElement22.setAttribute('src', '../Hiragana-Project/sounds/v.mp3');
     var image22 = new Image();
    var img22 = new Image();
    image22.src ='https://upload.wikimedia.org/wikipedia/commons/2/27/Hiragana_%E3%81%AB_stroke_order_animation.gif';
    img22.src= 'https://upload.wikimedia.org/wikipedia/commons/3/37/Japanese_Hiragana_kyokashotai_NI.png'
    $('#img22').hover(function(){
       $(this).attr('src',image22.src);
        }, function(){
        $(this).attr('src', img22.src);
});
     $.get();       
    $('#img22').click(function(){
        audioElement22.play();      
    });
    
    var audioElement23 = document.createElement('audio');
    audioElement23.setAttribute('src', '../Hiragana-Project/sounds/w.mp3');
     var image23 = new Image();
    var img23 = new Image();
    image23.src ='https://upload.wikimedia.org/wikipedia/commons/5/5a/Hiragana_%E3%81%AC_stroke_order_animation.gif';
    img23.src= 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Japanese_Hiragana_kyokashotai_NU.png'
    $('#img23').hover(function(){
       $(this).attr('src',image23.src);
        }, function(){
        $(this).attr('src', img23.src);
});
     $.get();       
    $('#img23').click(function(){
        audioElement23.play();      
    });
    
    var audioElement24 = document.createElement('audio');
    audioElement24.setAttribute('src', '../Hiragana-Project/sounds/x.mp3');
     var image24 = new Image();
    var img24 = new Image();
    image24.src ='https://upload.wikimedia.org/wikipedia/commons/0/0a/Hiragana_%E3%81%AD_stroke_order_animation.gif';
    img24.src= 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Japanese_Hiragana_kyokashotai_NE.png'
    $('#img24').hover(function(){
       $(this).attr('src',image24.src);
        }, function(){
        $(this).attr('src', img24.src);
});
     $.get();       
    $('#img24').click(function(){
        audioElement24.play();      
    });
    
    var audioElement25 = document.createElement('audio');
    audioElement25.setAttribute('src', '../Hiragana-Project/sounds/y.mp3');
     var image25 = new Image();
    var img25 = new Image();
    image25.src ='https://upload.wikimedia.org/wikipedia/commons/0/05/Hiragana_%E3%81%AE_stroke_order_animation.gif';
    img25.src= 'https://upload.wikimedia.org/wikipedia/commons/7/71/Japanese_Hiragana_kyokashotai_NO.png'
    $('#img25').hover(function(){
       $(this).attr('src',image25.src);
        }, function(){
        $(this).attr('src', img25.src);
});
     $.get();       
    $('#img25').click(function(){
        audioElement25.play();      
    });
    
    var audioElement26 = document.createElement('audio');
    audioElement26.setAttribute('src', '../Hiragana-Project/sounds/z.mp3');
     var image26 = new Image();
    var img26 = new Image();
    image26.src ='https://upload.wikimedia.org/wikipedia/commons/4/43/Hiragana_%E3%81%AF_stroke_order_animation.gif';
    img26.src= 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Japanese_Hiragana_kyokashotai_HA.png'
    $('#img26').hover(function(){
       $(this).attr('src',image26.src);
        }, function(){
        $(this).attr('src', img26.src);
});
     $.get();       
    $('#img26').click(function(){
        audioElement26.play();      
    });
    
    var audioElement27 = document.createElement('audio');
    audioElement27.setAttribute('src', '../Hiragana-Project/sounds/a2.mp3');
     var image27 = new Image();
    var img27 = new Image();
    image27.src ='https://upload.wikimedia.org/wikipedia/commons/4/40/Hiragana_%E3%81%B2_stroke_order_animation.gif';
    img27.src= 'https://upload.wikimedia.org/wikipedia/commons/2/24/%E3%81%B2_%E6%95%99%E7%A7%91%E6%9B%B8%E4%BD%93.png'
    $('#img27').hover(function(){
       $(this).attr('src',image27.src);
        }, function(){
        $(this).attr('src', img27.src);
});
     $.get();       
    $('#img27').click(function(){
        audioElement27.play();      
    });
    
    var audioElement28 = document.createElement('audio');
    audioElement28.setAttribute('src', '../Hiragana-Project/sounds/b2.mp3');
     var image28 = new Image();
    var img28 = new Image();
    image28.src ='https://upload.wikimedia.org/wikipedia/commons/1/1f/Hiragana_%E3%81%B5_stroke_order_animation.gif';
    img28.src= 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Japanese_Hiragana_kyokashotai_HU.png'
    $('#img28').hover(function(){
       $(this).attr('src',image28.src);
        }, function(){
        $(this).attr('src', img28.src);
});
     $.get();       
    $('#img28').click(function(){
        audioElement28.play();      
    });
    
    var audioElement29 = document.createElement('audio');
    audioElement29.setAttribute('src', '../Hiragana-Project/sounds/c2.mp3');
     var image29 = new Image();
    var img29 = new Image();
    image29.src ='https://upload.wikimedia.org/wikipedia/commons/4/40/Hiragana_%E3%81%B8_stroke_order_animation.gif';
    img29.src= 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Japanese_Hiragana_kyokashotai_HE.png'
    $('#img29').hover(function(){
       $(this).attr('src',image29.src);
        }, function(){
        $(this).attr('src', img29.src);
});
     $.get();       
    $('#img29').click(function(){
        audioElement29.play();      
    });
    
    var audioElement30 = document.createElement('audio');
    audioElement30.setAttribute('src', '../Hiragana-Project/sounds/d2.mp3');
     var image30 = new Image();
    var img30 = new Image();
    image30.src ='https://upload.wikimedia.org/wikipedia/commons/9/96/Hiragana_%E3%81%BB_stroke_order_animation.gif';
    img30.src= 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Japanese_Hiragana_kyokashotai_HO.png'
    $('#img30').hover(function(){
       $(this).attr('src',image30.src);
        }, function(){
        $(this).attr('src', img30.src);
});
     $.get();       
    $('#img30').click(function(){
        audioElement30.play();      
    });
    
    var audioElement31 = document.createElement('audio');
    audioElement31.setAttribute('src', '../Hiragana-Project/sounds/e2.mp3');
     var image31 = new Image();
    var img31 = new Image();
    image31.src ='https://upload.wikimedia.org/wikipedia/commons/6/65/Hiragana_%E3%81%BE_stroke_order_animation.gif';
    img31.src= 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Japanese_Hiragana_kyokashotai_MA.svg'
    $('#img31').hover(function(){
       $(this).attr('src',image31.src);
        }, function(){
        $(this).attr('src', img31.src);
});
     $.get();       
    $('#img31').click(function(){
        audioElement31.play();      
    });
    
    var audioElement32 = document.createElement('audio');
    audioElement32.setAttribute('src', '../Hiragana-Project/sounds/f2.mp3');
     var image32 = new Image();
    var img32 = new Image();
    image32.src ='https://upload.wikimedia.org/wikipedia/commons/d/d7/Hiragana_%E3%81%BF_stroke_order_animation.gif';
    img32.src= 'https://upload.wikimedia.org/wikipedia/commons/6/60/Japanese_Hiragana_kyokashotai_MI.png'
    $('#img32').hover(function(){
       $(this).attr('src',image32.src);
        }, function(){
        $(this).attr('src', img32.src);
});
     $.get();       
    $('#img32').click(function(){
        audioElement32.play();      
    });
    
    var audioElement33 = document.createElement('audio');
    audioElement33.setAttribute('src', '../Hiragana-Project/sounds/g2.mp3');
     var image33 = new Image();
    var img33 = new Image();
    image33.src ='https://upload.wikimedia.org/wikipedia/commons/1/1f/Hiragana_%E3%82%80_stroke_order_animation.gif';
    img33.src= 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Japanese_Hiragana_kyokashotai_MU.png'
    $('#img33').hover(function(){
       $(this).attr('src',image33.src);
        }, function(){
        $(this).attr('src', img33.src);
});
     $.get();       
    $('#img33').click(function(){
        audioElement33.play();      
    });
    
    var audioElement34 = document.createElement('audio');
    audioElement34.setAttribute('src', '../Hiragana-Project/sounds/h2.mp3');
     var image34 = new Image();
    var img34 = new Image();
    image34.src ='https://upload.wikimedia.org/wikipedia/commons/5/58/Hiragana_%E3%82%81_stroke_order_animation.gif';
    img34.src= 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Japanese_Hiragana_kyokashotai_ME.png'
    $('#img34').hover(function(){
       $(this).attr('src',image34.src);
        }, function(){
        $(this).attr('src', img34.src);
});
     $.get();       
    $('#img34').click(function(){
        audioElement34.play();      
    });
    
    var audioElement35 = document.createElement('audio');
    audioElement35.setAttribute('src', '../Hiragana-Project/sounds/i2.mp3');
     var image35 = new Image();
    var img35 = new Image();
    image35.src ='https://upload.wikimedia.org/wikipedia/commons/c/c1/Hiragana_%E3%82%82_stroke_order_animation.gif';
    img35.src= 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Japanese_Hiragana_kyokashotai_MO.png'
    $('#img35').hover(function(){
       $(this).attr('src',image35.src);
        }, function(){
        $(this).attr('src', img35.src);
});
     $.get();       
    $('#img35').click(function(){
        audioElement35.play();      
    });
    
    var audioElement36 = document.createElement('audio');
    audioElement36.setAttribute('src', '../Hiragana-Project/sounds/j2.mp3');
     var image36 = new Image();
    var img36 = new Image();
    image36.src ='https://upload.wikimedia.org/wikipedia/commons/0/07/Hiragana_%E3%82%84_stroke_order_animation.gif';
    img36.src= 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Japanese_Hiragana_kyokashotai_YA.png'
    $('#img36').hover(function(){
       $(this).attr('src',image36.src);
        }, function(){
        $(this).attr('src', img36.src);
});
     $.get();       
    $('#img36').click(function(){
        audioElement36.play();      
    });
    
    var audioElement37 = document.createElement('audio');
    audioElement37.setAttribute('src', '../Hiragana-Project/sounds/k2.mp3');
     var image37 = new Image();
    var img37 = new Image();
    image37.src ='https://upload.wikimedia.org/wikipedia/commons/7/78/Hiragana_%E3%82%86_stroke_order_animation.gif';
    img37.src= 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Japanese_Hiragana_kyokashotai_YU.png'
    $('#img37').hover(function(){
       $(this).attr('src',image37.src);
        }, function(){
        $(this).attr('src', img37.src);
});
     $.get();       
    $('#img37').click(function(){
        audioElement37.play();      
    });
    
    var audioElement38 = document.createElement('audio');
    audioElement38.setAttribute('src', '../Hiragana-Project/sounds/l2.mp3');
     var image38 = new Image();
    var img38 = new Image();
    image38.src ='https://upload.wikimedia.org/wikipedia/commons/8/80/Hiragana_%E3%82%88_stroke_order_animation.gif';
    img38.src= 'https://upload.wikimedia.org/wikipedia/commons/1/10/Japanese_Hiragana_kyokashotai_YO.png'
    $('#img38').hover(function(){
       $(this).attr('src',image38.src);
        }, function(){
        $(this).attr('src', img38.src);
});
     $.get();       
    $('#img38').click(function(){
        audioElement38.play();      
    });
    
    var audioElement39 = document.createElement('audio');
    audioElement39.setAttribute('src', '../Hiragana-Project/sounds/m2.mp3');
     var image39 = new Image();
    var img39 = new Image();
    image39.src ='https://upload.wikimedia.org/wikipedia/commons/6/6c/Hiragana_%E3%82%89_stroke_order_animation.gif';
    img39.src= 'https://upload.wikimedia.org/wikipedia/commons/2/20/Japanese_Hiragana_kyokashotai_RA.png'
    $('#img39').hover(function(){
       $(this).attr('src',image39.src);
        }, function(){
        $(this).attr('src', img39.src);
});
     $.get();       
    $('#img39').click(function(){
        audioElement39.play();      
    });
    
    var audioElement40 = document.createElement('audio');
    audioElement40.setAttribute('src', '../Hiragana-Project/sounds/n2.mp3');
     var image40 = new Image();
    var img40 = new Image();
    image40.src ='https://upload.wikimedia.org/wikipedia/commons/9/9f/Hiragana_%E3%82%8A_stroke_order_animation.gif';
    img40.src= 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Japanese_Hiragana_kyokashotai_RI.png'
    $('#img40').hover(function(){
       $(this).attr('src',image40.src);
        }, function(){
        $(this).attr('src', img40.src);
});
     $.get();       
    $('#img40').click(function(){
        audioElement40.play();      
    });
    
    var audioElement41 = document.createElement('audio');
    audioElement41.setAttribute('src', '../Hiragana-Project/sounds/o2.mp3');
     var image41 = new Image();
    var img41 = new Image();
    image41.src ='https://upload.wikimedia.org/wikipedia/commons/2/26/Hiragana_%E3%82%8B_stroke_order_animation.gif';
    img41.src= 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Japanese_Hiragana_kyokashotai_RU.png'
    $('#img41').hover(function(){
       $(this).attr('src',image41.src);
        }, function(){
        $(this).attr('src', img41.src);
});
     $.get();       
    $('#img41').click(function(){
        audioElement41.play();      
    });
    
    var audioElement42 = document.createElement('audio');
    audioElement42.setAttribute('src', '../Hiragana-Project/sounds/p2.mp3');
     var image42 = new Image();
    var img42 = new Image();
    image42.src ='https://upload.wikimedia.org/wikipedia/commons/6/6c/Hiragana_%E3%82%8C_stroke_order_animation.gif';
    img42.src= 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Japanese_Hiragana_kyokashotai_RE.png'
    $('#img42').hover(function(){
       $(this).attr('src',image42.src);
        }, function(){
        $(this).attr('src', img42.src);
});
     $.get();       
    $('#img42').click(function(){
        audioElement42.play();      
    });
    
    var audioElement43 = document.createElement('audio');
    audioElement43.setAttribute('src', '../Hiragana-Project/sounds/q2.mp3');
     var image43 = new Image();
    var img43 = new Image();
    image43.src ='https://upload.wikimedia.org/wikipedia/commons/3/35/Hiragana_%E3%82%8D_stroke_order_animation.gif';
    img43.src= 'https://upload.wikimedia.org/wikipedia/commons/7/70/Japanese_Hiragana_kyokashotai_RO.png'
    $('#img43').hover(function(){
       $(this).attr('src',image43.src);
        }, function(){
        $(this).attr('src', img43.src);
});
     $.get();       
    $('#img43').click(function(){
        audioElement43.play();      
    });
    
    var audioElement44 = document.createElement('audio');
    audioElement44.setAttribute('src', '../Hiragana-Project/sounds/r2.mp3');
     var image44 = new Image();
    var img44 = new Image();
    image44.src ='https://upload.wikimedia.org/wikipedia/commons/6/6a/Hiragana_%E3%82%8F_stroke_order_animation.gif';
    img44.src= 'https://upload.wikimedia.org/wikipedia/commons/0/01/Japanese_Hiragana_kyokashotai_WA.png'
    $('#img44').hover(function(){
       $(this).attr('src',image44.src);
        }, function(){
        $(this).attr('src', img44.src);
});
     $.get();       
    $('#img44').click(function(){
        audioElement44.play();      
    });
    
    var audioElement45 = document.createElement('audio');
    audioElement45.setAttribute('src', '../Hiragana-Project/sounds/s2.mp3');
     var image45 = new Image();
    var img45 = new Image();
    image45.src ='https://upload.wikimedia.org/wikipedia/commons/6/64/Hiragana_%E3%82%92_stroke_order_animation.gif';
    img45.src= 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Japanese_Hiragana_kyokashotai_WO.png'
    $('#img45').hover(function(){
       $(this).attr('src',image45.src);
        }, function(){
        $(this).attr('src', img45.src);
});
     $.get();       
    $('#img45').click(function(){
        audioElement45.play();      
    });
    
    var audioElement46 = document.createElement('audio');
    audioElement46.setAttribute('src', '../Hiragana-Project/sounds/t2.mp3');
     var image46 = new Image();
    var img46 = new Image();
    image46.src ='https://upload.wikimedia.org/wikipedia/commons/f/f6/Hiragana_%E3%82%93_stroke_order_animation.gif';
    img46.src= 'https://upload.wikimedia.org/wikipedia/commons/7/77/Japanese_Hiragana_kyokashotai_N.png'
    $('#img46').hover(function(){
       $(this).attr('src',image46.src);
        }, function(){
        $(this).attr('src', img46.src);
});
     $.get();       
    $('#img46').click(function(){
        audioElement46.play();      
    });
    
    function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.userid.value == "myuserid" && form.pswrd.value == "mypswrd") {
                    window.open('target.html')/*opens the target page while Id & password matches*/
                }
                else {
                    alert("Error Password or Username")/*displays error message*/
                }
            }
    
});