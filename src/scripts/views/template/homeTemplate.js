const homeTemplate = () => `
<!-- Hero -->
<section id="hero" class="pt-5">
  <div class="container">
    <div class="row">
      <div class="col-md-6 order-md-1">
        <img
          src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/hero/hero-1.jpg?raw=true"
          alt="pilah sampah"
          class="img-fluid"
        />
      </div>
      <div class="col-md-6 md-4">
        <h1>Tukarkan Sampahmu Jadi Uang</h1>
        <div class="mt-4 md-4">
          Satu langkah kecil untukmu, satu langkah besar bagi lingkungan.
          Tukarkan sampah menjadin uang dan bantu menciptakan dunia yang
          lebih hijau
        </div>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#b2bda0"
      fill-opacity="1"
      d="M0,96L40,117.3C80,139,160,181,240,202.7C320,224,400,224,480,197.3C560,171,640,117,720,106.7C800,96,880,128,960,170.7C1040,213,1120,267,1200,282.7C1280,299,1360,277,1400,266.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
</section>
<!-- Hero End -->

<!-- Jenis sampah -->
<section id="about" style="background-color: #b2bda0">
  <div class="container">
    <div class="row text-center mb-3">
      <div class="col fs-3">
        <h2>Jenis Sampah</h2>
      </div>
    </div>
    <div class="row justify-content-center text-center">
      <div class="col-12 col-md-6 col-md-4 order-md-1 pt-5">
        <div class="card">
          <div class="card-body p-5">
            <h5 class="card-title">Sampah Organik</h5>
            <p class="card-text text-start">
              Sampah organik disebut sampah basah (garbage), karena sebagian
              besar cukup banyak mengandung air. Sampah rumah tangga
              termasuk sebagian besar contoh bahan organik.<br />

              Sampah organik merupakan jenis sampah yang mudah terurai
              melalui proses alami. Artinya, terurainya sampah organik bisa
              terjadi tanpa adanya campur tangan manusia.
            </p>
            <a href="#" class="btn btn-link">Baca selengkapnya</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-md-4 order-md-1 pt-5">
        <div class="card">
          <div class="card-body p-5">
            <h5 class="card-title">Sampah Non Organik</h5>
            <p class="card-text text-start">
              Sampah anorganik diartikan sebagai sampah yang dihasilkan dari
              bahan non hayati berupa produk sinterik atau hasil proses
              teknologi pengolahan bahan tambang. <br />

              Contoh bahan-bahan anorganik adalah bahan logam, plastik,
              kaca, karet, dan kaleng. Sifat sampah anorganik adalah tahan
              lama dan sukar membusuk
            </p>
            <a href="#" class="btn btn-link">Baca selengkapnya</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#b2bda0"
      fill-opacity="1"
      d="M0,128L40,112C80,96,160,64,240,48C320,32,400,32,480,64C560,96,640,160,720,154.7C800,149,880,75,960,69.3C1040,64,1120,128,1200,149.3C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
    ></path>
  </svg>
</section>
<!-- Jenis sampah End -->

<!-- Panduan website -->
<section id="panduan">
  <div class="container pt-5 pb-5">
    <div class="row text-center mb-3">
      <div class="col fs-4">
        <h2>Panduan BYETRASH</h2>
      </div>
    </div>
    <img src="https://github.com/Ardanu001/ByeTrash/blob/main/src/public/pict/thumb1.png?raw=true" class="img-fluid lazyload" alt="Paduan" />
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
<!--Google Maps end-->
    `;

export default homeTemplate;