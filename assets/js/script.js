function juego(){

    let numeroJuegos = parseInt(prompt("Ingrese el numero de veces que deseas jugar"));
    let MaquinaCachipun = ["Piedra","Papel","Tijeras"];
    let randomChoice;
    let Juego, victoria=0, empate=0, derrota=0;
    
    if(numeroJuegos<=0){
        alert("Ingrese un numero valido, el numero debe ser mayor a 0");
    }else{
        cachipun();
    }
    function cachipun(){
        while(numeroJuegos>0){
            let eleccion = parseInt(prompt("Ingrese su elección, 1 para papel, 2 para tijeras, 3 para piedra"));
            if(eleccion<=0 || eleccion>3){
                alert("Ingresa un numero entre 1 - 2 -3");
                numeroJuegos=0;
            }else{
                switch(eleccion){
                    case 1:
                        randomChoice = Math.floor(Math.random() * MaquinaCachipun.length);
                        Juego = MaquinaCachipun[randomChoice];
                        if(Juego==="Piedra"){
                            alert(`Tu eleccion es Papel, La maquina ha elegido ${Juego}, Haz ganado esta ronda`);
                            Juego=null;
                            // MaquinaCachipun="";
                            victoria++;
                        }else if (Juego==="Papel"){
                            alert(`Tu eleccion es Papel, La maquina ha elegido ${Juego}, Es un empate`);
                            Juego=null;
                            // MaquinaCachipun="";
                            empate++;
                        }else{
                            alert(`Tu eleccion es Papel, La maquina ha elegido ${Juego}, Has perdido, intentalo de nuevamente`);
                            Juego=null;
                            // MaquinaCachipun="";
                            derrota++;
                        }
                        break;
                    case 2:
                        randomChoice = Math.floor(Math.random() * MaquinaCachipun.length);
                        Juego = MaquinaCachipun[randomChoice];
                        if(Juego==="Tijeras"){
                            alert(`Tu eleccion es Piedra, La maquina ha elegido ${Juego}, Haz ganado esta ronda`);
                            Juego=null;
                            // MaquinaCachipun="";
                            victoria++;
                        }else if (Juego==="Papel"){
                            alert(`Tu eleccion es Piedra, La maquina ha elegido ${Juego}, Es un empate`);
                            Juego=null;
                            // MaquinaCachipun="";
                            empate++;
                        }else{
                            alert(`Tu eleccion es Piedra, La maquina ha elegido ${Juego}, Has perdido, intentalo de nuevamente`);
                            Juego=null;
                            // MaquinaCachipun="";
                            derrota++;
                        }
                        break;
                    case 3:
                        randomChoice = Math.floor(Math.random() * MaquinaCachipun.length);
                        Juego = MaquinaCachipun[randomChoice];
                        if(Juego==="Papel"){
                            alert(`Tu eleccion es Tijeras, La maquina ha elegido ${Juego}, Haz ganado esta ronda`);
                            Juego=null;
                            // MaquinaCachipun="";
                            victoria++;
                        }else if(Juego==="Papel"){
                            alert(`Tu eleccion es Tijeras, La maquina ha elegido ${Juego}, Es un empate`);
                            Juego=null;
                            // MaquinaCachipun="";
                            empate++;
                        }else{
                            alert(`Tu eleccion es Tijeras, La maquina ha elegido ${Juego}, Has perdido, intentalo de nuevamente`);
                            Juego=null;
                            // MaquinaCachipun="";
                            derrota++;
                        }
                        break;
                }  
            }
            numeroJuegos--;
        }
        
        if(victoria!=0||derrota!=0||empate!=0){
            alert(`El juego ha terminado, el resultado es Victorias : ${victoria} Derrotas : ${derrota} Empates : ${empate}`);
            if(victoria>derrota){
                alert("Felicidades!!!! Haz ganado contra la maquina");
            }else if(derrota>victoria){
                alert("Haz perdido esta vez, intentalo nuevamente");
            }else if(empate>victoria||empate>derrota){
                alert("Es un empate");
            }
        }
    }
}