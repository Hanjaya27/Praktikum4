function mulaiQuiz() {
    let uts = prompt("Masukkan nilai UTS (0-100):");
    let uas = prompt("Masukkan nilai UAS (0-100):");
    let tugas = prompt("Masukkan nilai Tugas (0-100):");
  
    if (isNaN(uts) || isNaN(uas) || isNaN(tugas) || uts < 0 || uts > 100 || uas < 0 || uas > 100 || tugas < 0 || tugas > 100) {
      alert("Input tidak valid. Harap masukkan angka antara 0 dan 100.");
      return;
    }
  
    let valuesArray = [parseFloat(uts), parseFloat(uas), parseFloat(tugas)];
    let rata = hitungRata(valuesArray);
  
    localStorage.setItem('uts', uts);
    localStorage.setItem('uas', uas);
    localStorage.setItem('tugas', tugas);
    localStorage.setItem('rata', rata);
  
    let status = getStatus(rata);
    let grade = getGrade(rata);
  
    localStorage.setItem('status', status);
    localStorage.setItem('grade', grade);
  
 
    tampilHasil(rata, status, grade);
  }
  

  function hitungRata(valuesArray) {
    let total = valuesArray.reduce((sum, value) => sum + value, 0);
    return total / valuesArray.length;
  }
  
  function tampilHasil(rata, status, grade) {
    let hasilDiv = document.getElementById("hasilQuiz");
    hasilDiv.innerHTML = `
      <p>Rata-rata: ${rata.toFixed(2)}</p>
      <p>Status: ${status}</p>
      <p>Grade: ${grade}</p>
    `;
  
    if (status === "Lulus") {
      hasilDiv.style.color = 'green';
    } else if (status === "Remedial") {
      hasilDiv.style.color = 'orange';
    } else {
      hasilDiv.style.color = 'red';
    }
  }
  
  function getStatus(rata) {
    if (rata >= 60) {
      return "Lulus";
    } else if (rata >= 40) {
      return "Remedial";
    } else {
      return "Tidak Lulus";
    }
  }
  
  
  function getGrade(rata) {
    if (rata >= 85) {
      return "A";
    } else if (rata >= 70) {
      return "B";
    } else if (rata >= 50) {
      return "C";
    } else {
      return "D";
    }
  }
  
  function ulangQuiz() {
    localStorage.clear();
    document.getElementById("hasilQuiz").innerHTML = '';
    alert("Quiz telah diulang. Silakan coba lagi!");
  }
  