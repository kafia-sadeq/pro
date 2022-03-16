<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    @include('user.css')
    <title>Hello, world!</title>
  </head>
  <body>
     @include('user.navbar')
     {{-- Slider bar --}}
<section id="slider-section">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/118519904_982839272184386_354254058227765864_n.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/118519904_982839272184386_354254058227765864_n.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/118519904_982839272184386_354254058227765864_n.jpg" class="d-block w-100" alt="...">
          </div>
        </div>

      </div>



</section>


<div class="slider-box">
    <div class="card " style="width: 25rem;">
        <div class="card-body">
          <h5 class="card-title">Special title treatment Special title treatmentSpecial title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.
          </p>
          <div class="text-center">
            <a href="#" class=" bnt-slider">SING THE PETITION</a>
          </div>

        </div>
      </div>
</div>






      {{-- End slider bar --}}
@include('user.aboutsection')
@include('user.lastest')
@include('user.our_impact')
{{-- Section what other say --}}
@include('user.say_others')
@include('user.footer')
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
@include('user.javscript')
</body>
</html>
