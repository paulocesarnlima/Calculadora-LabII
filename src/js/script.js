let index = 1;


const add = (number) => {
  let visor = document.getElementById("resultado");
  let currentInput = visor.innerHTML;

  // Verifica se o visor já possui 14 dígitos
  if (currentInput.length >= 13) {
    return; // Não permita adicionar mais dígitos
  }

  visor.innerHTML = currentInput + number;
};




const clean = () => {
  document.getElementById("resultado").innerHTML = "";
};

const back = () => {
  let res = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = res.substring(
    0,
    res.length - 1
  );
};

const calculation = () => {
  let res = document.getElementById("resultado").innerHTML;
  const teste = document.getElementsByClassName("line");

  if (res) {
    if (index <= teste.length) {
      history_calculation(res, index);
      document.getElementById("resultado").innerHTML = eval(res);
      index++;
    } else {
      index = 1;
      history_calculation(res, index);
      document.getElementById("resultado").innerHTML = eval(res);
      index++;
    }
  } else {
    document.getElementById("resultado").innerHTML = "Error";
  }
};

const date_time = () => {
  const date = new Date();
  
  const options = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: false, // Formato de 24 horas
    timeZoneName: 'short'
  };

  const formattedDate = date.toLocaleDateString('pt-BR', options);
  return formattedDate;
};


const history_calculation = (res, index) => {
  document.getElementById(`history-${index}`).value = date_time();

  document.getElementById(`calculation-${index}`).value = `${res} = ${eval(
    res )}`;


};



let number = 0;



