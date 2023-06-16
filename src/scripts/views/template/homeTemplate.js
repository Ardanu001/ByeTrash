const homeTemplate = () => `<!-- Hero -->
  <section id="hero" class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 order-md-1">
          <img src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/hero/hero-1.jpg?raw=true" alt="pilah sampah" class="img-fluid">
        </div>
        <div class="col-md-6 md-4">
            <h1 class="mb-4 mt-2 display-4 fw-bold">Turn Your Trash <span style="color: #4a9f0f;">Into Money</span></h1>
            <div class="mt-4 md-4">
              Satu langkah kecil untukmu, satu langkah besar bagi lingkungan. Tukarkan sampah menjadi uang dan bantu menciptakan dunia yang lebih hijau
            </div>
        </div>
       
      </div>
       <a href="#/servicepage" class="mt-2 btn btn-md btn-outline-light" style="background-color: #70B858;" role="button">Excange Now</a>
    </div>
  </section>
<!-- Hero End -->

<!-- Jenis sampah -->
<!-- Section One Start -->
<section id="jenis-sampah" class="steps container-custom">
<div class="row ms-2 me-2">
        <div class="col-12 col-sm-6 d-md-flex justify-content-md-center">
            <img src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/organic.jpg?raw=true" alt="organic" class="img-fluid pb-4 steps__section-thumbnail" width="553" height="746" loading="lazy">
        </div>
        <div class="col-12 col-sm-6 align-self-center justify-content-md-center">
            <div class="steps__content-width">
                <h1 class="h2 mb-4 fw-bold">Sampah Organik</h1>
                <p class="mb-4">Sampah organik disebut sampah basah (garbage), karena sebagian besar cukup banyak mengandung air. Sampah rumah tangga termasuk sebagian besar contoh bahan organik.</p>
                <a href="#" target="_blank" class="mt-2 btn btn-md btn-outline-light" role="button" style="background-color: #70B858;">Read more</a>
            </div>
        </div>
    </div>  
</section>
<!-- Section One End -->

<!-- Section Two Start -->
<section class="steps steps--background bg-body-tertiary">
<div class="container-custom">
    <div class="row ms-2 me-2">
        <div class="col-12 col-sm-6 d-md-flex justify-content-md-center order-sm-1">
            <img src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/non-organic.jpg?raw=true" alt="Sampah Anorganik" class="img-fluid pb-4 steps__section-thumbnail" width="553" height="746" loading="lazy">
        </div>
        <div class="col-12 col-sm-6 align-self-center justify-content-md-center">
            <div class="steps__content-width">
                <h1 class="h2 mb-4 fw-bold">Sampah Anorganik</h1>
                <p class="mb-4">Sampah Anorganik diartikan sebagai sampah yang dihasilkan dari bahan  non hayati berupa produk sinterik atau hasil proses teknologi pengolahan bahan tambang. </p>
                <a href="#" target="_blank" class="mt-2 btn btn-md btn-outline-light" role="button" style="background-color: #70B858;"><i class="bi bi-github"></i> Read more</a>
            </div>
        </div>
    </div>  
</div>
</section>
<!-- Section Two End -->

<!-- Jenis sampah End -->

<!-- Panduan website -->
<section id="panduan">
  <div class="container pt-5 pb-5">
    <div class="row text-center mb-3">
      <div class="col fs-4">
        <h2 class="fw-bold">Panduan BYETRASH</h2>
      </div>
    </div>
    <img src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/thumb1.png?raw=true" class="img-fluid lazyload" alt="Panduan" />
  </div>
</section>

<!-- Panduan website end -->

<!--Google map-->
<section id="maps" style="background-color: #fff">
  <div class="container pt-5 pb-5">
    <div class="row text-center mb-3">
      <div class="col fs-4">
        <h2>Maps</h2>
      </div>
    </div>
    <div id="map-container-google-1" class="z-depth-1-half map-container">
      <iframe
        src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        style="height: 100%; width: 100%"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</section>
<!--Google Maps end-->`;

export default homeTemplate;
