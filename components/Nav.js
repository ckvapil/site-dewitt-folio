if(window.location.href.includes('github')){
document.getElementById('nav')
        .innerHTML = 
        `<div class="nav">
            <ul>
                <li><a href="/site-dewitt-folio/">home</a></li>
                <li><a href="/site-dewitt-folio/portfolio/">portfolio</a></li>
                <li><a href="/site-dewitt-folio/about/">about me</a></li>
                <li><a href="/site-dewitt-folio/contact/">contact</a></li>
            </ul>
        </div>`;
}
else{
document.getElementById('nav')
        .innerHTML = 
        `<div class="nav">
            <ul>
                <!--<li><img src="../img/logo-b.png"></li>-->
                <li><a href="/">home</a></li>
                <li><a href="/portfolio/">portfolio</a></li>
                <li><a href="/about/">about me</a></li>
                <li><a href="/contact/">contact</a></li>
            </ul>
        </div>`;
}