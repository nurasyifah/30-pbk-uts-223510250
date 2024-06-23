<template>
    <h1>Porch - UAS</h1>
    <div class="text-container">
    <h5 class="justified-text">Assalamu'alaikum Wr. Wb. pak, perkenalkan nama saya Nur Asyifah NPM 223510250 dari kelas 4B, 
      disini saya mau mengucapkan banyak terima kasih kepada bapak karena sudah mengajarkan saya 
      pada mata kuliah pemrograman berbasis komponen ini, sebelumnya saya ingin meminta maaf jika
      terdapat kesalahan dalam saya membuat tugas di mata kuliah bapak, jujur saja saya juga mulai belajar
      dengan memahami secara perlahan semua yang ada pada vue atau vite js ini, saya mengerjakan semuanya
      semampu yang saya bisa, saya harap bapak bisa memaklumi jika yang saya buat masih kurang dalam tampilannya
      sekali lagi, terima kasih pak :)
    </h5>
    </div>
    
  <div class="cv-container">
    <header>
      <h2>My Bio @nurasyifah_</h2>
      <h2>Informatics Engineering</h2>
      <p>Email: nurasyifah39@gmail.com | Phone: (+62) 852-5609-1271</p>
    </header>

    <section class="section">
      <h3>Personal Details</h3>
      <ul>
        <li>Address: Jl. Air Dingin GG. Taqwa 5, Pekanbaru, Indonesia</li>
        <li>Date of Birth: May 11, 2004</li>
      </ul>
    </section>

    <section class="section">
      <h3>Education Background</h3>
      <ul>
        <li>
          <strong>TK Raudhatul Athfal Al Hidayah (2009-2010)</strong><br>
          <strong>SD Madrasah Ibtidaiyah Sa'adah El Islamiyah (2010-2016)</strong><br>
          <strong>SMP Madrasah Tsanawiyah Sa'adah El Islamiyah (2016-2019)</strong><br>
          <strong>SMK Teknik Komputer & Jaringan- SMK Negeri 1 Tembilahan Kota (2019-2022)</strong><br>
          <strong>S1 Teknik Informatika- Universitas Islam Riau (2022-Sekarang)</strong><br>
        </li>
      </ul>
    </section>

    <section class="section">
      <h3>Work Experience</h3>
      <ul>
        <li>
          <ul>
            <strong>(2021/2022) Praktik Kerja Lapangan (PKL) on Office Immigration Class II TPI Tembilahan</strong><br>
          </ul>
        </li>
      </ul>
    </section>

    <section class="section">
      <h3>Certificate Of Competence</h3>
      <ul>
        <li>Indonesian National Qualification Framework Level II on Business Skills 
          Competence Computer and Network Engineering and</li>
        <li>On behalf of BNSP P-1 State Vocational High School 1 Tembilahan Professional Certificaton Institute</li>
      </ul>
    </section>

    <section class="section">
      <h3>About Me</h3>
      <ul>
        <li>hello I'm cipa, my family calls me that I'm the 3rd child of 3 siblings yes I'm the last child but 
            I'm not spoiled ok :) I'm was born on May 11, 2004 yes now I'm 19 years old my zodiac sign is Taurus 
            (the stubborn bull) but it's okay then my hobby is reading anything because I like learning then 
            my favorite food is chocolate "Dairy Milk" my favorite drink is "Taro". The last is my quote that 
            always remember is "if you never do, you'll never know" and "learning is a process to become better 
            than before"</li>
      </ul>
    </section>

    <section class="section">
      <h3>My Social Media</h3>
      <ul>
        <a href="https://www.instagram.com/nur__asyifah/" target="_blank" rel="noopener">My instagram is nur__asyifah</a><br>
        <a href="http://www.youtube.com/@nur__asyifah/" target="_blank" rel="noopener">My youtube is nur__asyifah</a><br>
        <a href="https://x.com/nurasyifah967/" target="_blank" rel="noopener">My twitter is nurasyifah967</a><br>
      </ul>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
h1 {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 40px;
  color: black;
  margin-bottom: 4px;
}

h3 {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 12px;
  color: black;
  margin-bottom: 4px;
}

.cv-container {
  width: 80%;
  margin: auto;
  font-family: 'Century', sans-serif;
  color: #333;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 36px;
  margin: 0;
  color: #FDB0C0; 
}

header h2 {
  font-size: 24px;
  margin: 5px 0;
  color: #555; 
}

header p {
  font-size: 16px;
  color: #777;
}

.section {
  margin-bottom: 20px;
}

.section h3 {
  font-size: 20px;
  margin-bottom: 10px;
  border-bottom: 2px solid #FDB0C0; 
  padding-bottom: 5px;
}

.section ul {
  list-style-type: none;
  padding: 0;
}

.section ul li {
  margin-bottom: 10px;
}

.section ul li strong {
  font-size: 16px;
  color: #333; 
}

.section a {
  color: black;
}

.justified-text {
  text-align: justify;
  padding: 0 20%;
}

.text-container {
  text-align: center;
}
</style>