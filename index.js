// Definindo o objeto do herói
let nome = ""
let xp = 5005
let nivel


switch (true) {
    case xp <= 1000:
        nivel = "ferro";
        break;
    case xp >= 1001 && xp <= 2000:
        nivel = "bronze";
        break;
    case xp >= 2001 && xp <= 5000:
        nivel = "prata";
        break;
    case xp >= 5001 && xp <= 7000:
        nivel = "ouro";
        break;
    case xp >= 7001 && xp <= 8000:
        nivel = "platina";
        break;
    case xp >= 8001 && xp <= 9000:
        nivel = "ascendente";
        break;
    case xp >= 9001 && xp <= 10000:
        nivel = "imortal";
        break;
    case xp >= 10001:
        nivel = "radiante";
        break;
    

}

// Exibindo a mensagem de saída
console.log("O heroi de nome " + nome + " está no nível de " + nivel )
