//Caso-1

var salario= 2500000

alert(" Hola Hildebrando \n Recuerda que tu viaje es hoy, prepara todo con tiempo")

alert(`Bancolombia te informa que tienes un saldo actual de ${salario}`)

alert("Tu vuelo aborda a las 9 de la noche y tendra escala a Medellin con destino a Macondo")

let comida= prompt("¿Gustas de comer algo? \n | 1)Si. | 2)No. |");

if(decisioncomida = "1"){
    alert("|Elige una opcion|")

    let elccion1= prompt('|1) Almohabana y gaseosa $15000 | 2)Subway con gaseosa $23.000|')
    if(elccion1 == 1){
        salario = salario -15000
        alert(`uy quieto que dolor de estomago =c, eso estaba picho ya tanto rato en el stand \n Saldo actual= ${salario}`)
    }
    else if ( elccion1 == 2){
        salario = salario - 23000
        alert(`mmmm ñamñamñam estaba riquisimo y las vacaciones apenas empieza \n Saldo actual=  ${salario}`)
    }
}
else if (comida == 2){
    alert(`Espera hasta llegar a medellin \n tu salario actual es de ${salario}`)} 

//Caso-2

let altorequerido=55
let largorequerido=40
let anchorequerido=20

let altomaleta=60
let largomaleta=40
let anchomaleta=20

alert("ya en la sala de espera voy a documentar mi maleta. ")

alert("TU MALETA NO CUMPLE CON LAS MEDIDAS CORRECTAS")

alert("|Las medidas deben de ser 55(Alto)x 40(Largo)x 20(Ancho) |\n |Tus medidas son 60(Alto)x 40(Largo)x 20(Ancho)|")

alert("|Elige una opcion|")

let eleccion2= prompt("| 1)Quitar ropa y reacomodar las medidas | \n | 2) No reorganizar y volver pa la casa a hacer perecita XD")

if(eleccion2==1){
    let minimaleta= Math.min((altorequerido/altomaleta), (anchorequerido/anchomaleta),(largorequerido/largomaleta))
    let nuevoalto= altomaleta*altorequerido
    let nuevoancho= anchomaleta*anchorequerido
    let nuevolargo= largomaleta*largorequerido
    alert ("Muy bien, acomodaste todo perfectamente.")
    alert(`Las nuevas medias de tu equipaje \n alto:${Math.round(nuevoalto) } \n Ancho:${Math.round(nuevoancho)} \n Largo:${Math.round(nuevolargo)}`)
}

else if (eleccion2==2){
    alert("Deje la pereza parcero y acomode la maleta psssss (ง︡'-'︠)ง ")
    
    let eleccion2= prompt("| 1)Quitar ropa y reacomodar las medidas | (ง︡'-'︠)ง \n | 1)Quitar ropa y reacomodar las medidas | (ง︡'-'︠)ง")

}

//Caso-3

alert("Perfecto, porfin en medallo. \n Vamos a comer algo y aprovechamos a confirmar la reserva del hotel...")
alert("UUUUUUUYYYYY Quietooooooo. Como asi??? (ㆆ_ㆆ)")
alert("EL Wifi vale 50lks la Hora __( ͠* _⦣ ͡*)_/¯")
alert("Bueno ni modo todo para poder confirmar la habitacion \n $$(*Lo paga*)$$")
alert("|La contraseña es: 01110010_01101001_01110111_01101001| \n vamos a codificarla entones.. ")

let wifi_clave= "01110010_01101001_01110111_01101001"
let wifi_1=wifi_clave.split("_")[0]
let wifi_2=wifi_clave.split("_")[1]
let wifi_3=wifi_clave.split("_")[2]
let wifi_4=wifi_clave.split("_")[3]

function decimas(num){
    retenedor= 0
    let numvar= num.split("").reverse('').join('')
    for (let i= 0; i< numvar.length; i++) {
        retenedor = retenedor+numvar[i]* 2**[i]
    }
    return retenedor
}

let abcbina= {97:'a',98:'b',99:'c',100:'d',101:'e',102:'f',103:'g',104:'h',105:'i',106:'j',107:'k',108:'l',109:'m',110:'n',111:'o',112:'p',113:'q',114:'r',115:'s',116:'t',117:'u',118:'v',119:'w',120:'x',121:'y',122:'z'};
alert(`Perfecto codificaste la clave que es: ${abcbina[decimas(wifi_1)]}${abcbina[decimas(wifi_2)]}${abcbina[decimas(wifi_3)]}${abcbina[decimas(wifi_4)]}`) 


//Caso-4

alert("uyyy chino casi que no llegamos a Macondo")
alert("     !!!! Carachas !!!!     \n Donde sera que puedo tomar un taxi? \n le voy a preguntar a este señor..")
alert("jidi mini qli rili milici cin isis chinclis y midiis")
alert("Ahggg aqui todos hablan como niñas de 5 años \n __( ͡❛  ͟ʖ ͡❛)_/¯")
alert("Hey!!! (Grita***) Taxi me puede llevar al hotel mariposas amarillas")
alert("aaahhh no... como es que se dice")

let opcionTaxi = (prompt(`|1):Hablar como niña de 5 años que solo hablar con la 'i'` ))
let fraseTaxis = 'Taxi me puede llevar al hotel mariposas amarillas'
let frasei = fraseTaxis.replaceAll("a","i").replaceAll("e","i").replaceAll("o","i") 

if(opcionTaxi ==1){
 
    alert(`Muy bien ${fraseTaxis.replaceAll("a","i").replaceAll("e","i").replaceAll("u","i").replaceAll("o","i")}`)
} 

//Caso-5 

alert("Mani, son 300barras")
alert("uy no chino, apostemonos un piedra papel o tijera 1 pa 1 sin camiseta")
alert("Buena suerte (Dice el taxista mañoso que me quiere tumbar)")

let casos=["piedra","papel","tijeras"]
var taxista= Math.floor(Math.random()*3);
alert("Elige una opcion")
let apuesta = prompt("|1): Piedra| |2):Papel| |3):Tijera|")

if(apuesta== taxista){
    alert("Empate, no pasa nada..... ")
}

else if(apuesta== 1 && casos[taxista]== casos[1] || apuesta== 2 && casos[taxista]== casos[2] || apuesta== 3 && casos[taxista]==casos[0] ){
    alert(`OHHH NOOOOOOOOOOOOO, Perdiste, tu saldo actual es de ${salario -300000}`)
}

else if(apuesta==1 && casos[taxista]==casos[2] || apuesta==2 && casos[taxista]==casos[0] || apuesta==3 && casos[taxista]==casos[1]){
    alert(`HAHAAHAAH te gane costeño mañoso. no pago nada bye jajaj`)
}

// Caso-6


alert("Yo creo que no me puede pasar nada mas en este viaje. pero menos mal ya en el hotel ")

alert("Cada dia tenemos actividades diferentes con su respectiva vestimenta. \n Agenda las actividades:")
let color = prompt("|1):Amarillo| |2):Verde| |3):Rojo| |4):Azul|")
if(color==1){
    alert("Ahhh que relajo")
    alert("Vamos para piscina. Mmmmm el agua huele a picho, pero bueno ya que hijuemadres no le voy a dar imporancia ")
    
    alert("Elige una opcion")
    let Opcio1=prompt("|1):Entras a la piscina.| |2):No entrar.|")

    if(Opcio1 ==1){
    
        alert("Un jurgo de cloro tiene esta cosa bruhhh ahgggahhftvm9tn 'se ahoga')*** ")
        alert("F me mori. \n Fue un buen viaje")

    }
    else if (Opcio1 ==2){
        alert("uy no que chinada esa agua, Mejor tomemos el sol")
    }
}
else if(color==2){
    alert("vamonos de caminata ٩( ͡▀̿ ̿ ͜ʖ ͡▀̿ ̿ ԅ) ")

    alert("Estas a media caminata")

    alert("Elige una opcion")

    let caminaop=prompt("|1):Seguir caminando| |2):devolvernos|")
    if (caminaop ==1){
        
        alert("Buahhhhh que es esto tan lindo, que hijuemadre cascada \n (foto)** ٩( ͡▧ ͜ʖ ͡▧ԅ)")
    }

    else if(caminaop ==2){
        alert("ahhggg por la pereza tan berraca me perdi ( ˘︹˘ ) ")
    }

else if(color ==3){
    alert("Actividades en la playa")
    alert("Elige una opcion")
    let playa  = prompt('|1):Jugar volei| |2):Nadar en el mar y probar la moto| |3):Ponerme hasta la burger de alcohol|')

    if(playa==1){
        alert("Tremendo partidos nos estamos sacando ٩(︡▧ ͜ʖ▧︠ԅ)")

    }
    else if(playa==2){
        alert("uffff que moto mas agogo... tremendo parche esto aqui \n ٩(︡▧ ェ▧︠ԅ)")
    }
    else if(playa==3){
        alert("uy noooo este chirrinchamber cuales??? wuahhhggg ٩(●̮̮̃•)۶ \n ¡Buagh!  ¡Buagh! ¡Buagh! ٩(●̮̮̃•)۶ ٩(●̮̮̃•)۶ \n (Muere de coma etilico por andar tomando cosas que lo iban a dejar ciego)*** ")

    }
else if(color ==4){
    alert("Hay actividades dentro del hotel")
    alert("Elige que hacer hoy ")
    let actividade = prompt('|1):Jugar Bingo| |2):Bailar| |3):casino|')
   
    if(actividade==1){
        alert("WUUUUUUUJUUU que suerte me gane 1 palito asi de free jajaj a")
        alert(`Tu saldo es ${sueldoDisponible +1000000}`)

    }
   
    else if (actividade ==2){
        alert("Hasta bajo... ( ▀̿ ̿︡ ͜ʖ ▀̿ ̿ ︠ ) \n Hasta bajo... ( ▀̿ ̿︡ ͜ʖ ▀̿ ̿ ︠ ) \n Hasta bajo... ( ▀̿ ̿︡ ͜ʖ ▀̿ ̿ ︠ )")
    }
   
    else if(actividade ==3){
        alert("ahhggg yo si soy una loca, todos los problemas que tuve para llegar y al final me pongo a entar mas la suerte y perdi jajajajajaj (╥﹏╥)(╥﹏╥)(╥﹏╥)")
        alert(`tu salario actual es de ${sueldoDisponible - 2000000}`)
    }
}

}
}
alert("GG se termino el viaje chao :*")
