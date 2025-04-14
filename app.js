function mostrarHoraAtual() {
    let agora = new Date();
    let hora = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');
    
    let horaAtual = hora + ':' + minutos + ':' + segundos;
    document.getElementById('relogio').textContent = horaAtual;
  }
  
  setInterval(mostrarHoraAtual, 1000); // Atualiza a cada segundo




  

  