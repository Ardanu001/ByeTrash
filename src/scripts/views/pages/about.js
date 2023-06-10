const About = {
  async render() {
    return `
    <div class="container">
      <div class="section">
        <div class="about-section">
          <div class="">
            <h2>TENTANG BYTRASH</h2>
            <p>
              Byetrahs adalah website yang memfasilitasi masyarakat untuk
              mengelola sampah supaya bisa mengurangi polusi. Di website ini
              masyarakat bisa menukarkan sampah yang mereka miliki menjadi uang
              tunai berdasarkan jenis sampah yang ditukarkan. Dengan adanya
              website ini diharapkan masyarakat semakin sadar akan lingkungan
              dan tidak membuang sampah sembarangan karena mereka bisa
              menukarkannya menjadi uang tunai.
            </p>
          </div>
          <img src="logo-1-resize.png" alt="Logo" />
      </div>

      <div class="about">
        <h2
          style="
            text-align: center;
            border-bottom: 2px solid green;
            width: 180px;
            margin: 0 auto;
          "
        >
          Our Team
        </h2>

        <div class="team-section">
          <div class="team-card">
            <img src="profile-1.jpg" alt="Team Member 1" />
            <h3>Dea</h3>
            <p>STMIK AMIKA Soppeng</p>
          </div>

          <div class="team-card">
            <img src="profile-1.jpg" alt="Team Member 2" />
            <h3>Ardanu</h3>
            <p>Univ. Handayani Makassar</p>
          </div>

          <div class="team-card">
            <img src="profile-1.jpg" alt="Team Member 3" />
            <h3>Alif</h3>
            <p>Univ. Amikom Purwokerto</p>
          </div>

          <div class="team-card">
            <img src="profile-1.jpg" alt="Team Member 4" />
            <h3>Fadhil</h3>
            <p>STMIK IM Bandung</p>
          </div>
        </div>
      </div>
    </div>
    `;
  },
};

export default About;
