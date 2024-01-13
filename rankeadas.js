function partidas(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado
  }
  
  function ranking() {
    let SaldoVitorias = partidas(60, 20)
    let nivel = ""
    if (SaldoVitorias <= 10) {
      nivel = "Ferro"
    } else if (SaldoVitorias <= 20) {
      nivel = "Bronze"
    } else if (SaldoVitorias <= 50) {
      nivel = "Prata"
    } else if (SaldoVitorias <= 80) {
      nivel = "Ouro"
    } else if (SaldoVitorias <= 90) {
      nivel = "Diamante"
    } else if (SaldoVitorias <= 100) {
      nivel = "Lendário"
    } else if (SaldoVitorias >= 100) {
      nivel = "Imortal"
    }
    return "O Herói tem de saldo de " + SaldoVitorias + " e está no nível de " + nivel
  }
  
  console.log(ranking())