Z15Light
========

jQuery a'la lightbox gallery. Galery in one JS script. You can use "k" and "l" key on Your keyboard to rewinds.

How to use
========

Copy and Paste to Your \<head>.
`````javascript
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js' type='text/javascript'></script>
<script src='z15light.js' type='text/javascript'></script>
`````
Add Your images, name your div or other tag (use id or class).
`````html
<div id='gall'>
<a href="http://z15.pl/img/apple1.jpg" title="t_up"><img src="http://proffice-solutions.pl/img/kropka.png" alt="" ></a>
<a href="http://z15.pl/img/2.png" title="jakiś tekst z </br>as"><img src="http://proffice-solutions.pl/img/kropka.png" alt="" ></a>
</div>
`````
And finally add
`````javascript
$(document).ready(function() {
  $('#gall').z15light({opaticy:0.8,bgColor:'#000',closetext:'Zamknij',prev:'Poprzedni',next:'Następny',prevHint:'Klawisz "j"',nextHint:'Klawisz "k"'});
});
`````
In this example, z15light is setup for a Polish language.<br/>
You can setup
* opaticy
* bgColor - background color
* closetext
* prev
* next
* prevHint
* nextHint
