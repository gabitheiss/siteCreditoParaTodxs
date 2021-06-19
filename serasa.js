let escolha = document.getElementById("escolha");
let div = document.getElementById("simulacao");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  switch (escolha.value) {
    case "1":
      div.innerHTML += `Para o empréstimo de R$1.000,00 temos as seguintes opções de parcelamento:</br>
    12 x R$93,10</br>
    24 x R$52,25</br>
    36 x R$38,90 </br>
    48 x R$32,42`;
      break;
    case "2":
      div.innerHTML += `Para o empréstimo de R$2.000,00 temos as seguintes opções de parcelamento:</br>
       12 x R$186,21 </br>
       24 x R$104,49</br>
       36 x R$77,79</br>
       48 x R$64,84`;
      break;
    case "3":
      div.innerHTML += `Para o empréstimo de R$5.000,00 temos as seguintes opções de parcelamento:</br>
     12 x R$465,52</br>
     24 x R$261,23</br>
     36 x R$194,49 </br>
     48 x R$162,10`;
      break;
    case "4":
      div.innerHTML += `Para o empréstimo de R$10.000,00 temos as seguintes opções de parcelamento:<br>
       12 x R$931,04<br>
       24 x R$522,46<br>
       36 x R$388,97<br>
       48 x R$324,19`;
      break;
    case "5":
      div.innerHTML += `Para o empréstimo de R$20.000,00 temos as seguintes opções de parcelamento:<br>
       12 x R$1.862,08<br>
       24 x R$1.044,02<br>
       36 x R$777,94<br>
       48 x R$648,39`;
  }
});
