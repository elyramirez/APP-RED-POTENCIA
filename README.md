# red-potencia-app
Aplicación de Android iOs para consulta y compra de tiempo aire de telefonia de red potencia
con OpenPay como plataforma para pagos
creada con React Native, Java, Swift y Objective -C

Hasta este momento la integración de OpenPay esta completa, los archivos de Java de dicha libreria
se encuentran en: android/app/src/main/java/com/potencia
Y la libreria de OpenPay del lado de ios se encuentra en dicha carpeta, asi como el bridge para esta, entre ios y React Native

Para utilizar este repo:

    • Download repo
    • cd red-potencia-app-main
    • nvm use v12.19.0 (si se esta usando una version anterior de npm)
    • npm i react-native-cli
    • yarn
    • abrir emulador de android studio
    • react-native start
    • react-native run android
   
   Nota:
   En este momento en la construccion de la app, quedan pendientes estos puntos a desarrollar:
   1. conectar los inputs con el backend y enviar la data a back
   2. recibir la respuesta de back y crear una alerta para el usuario de exito o fracaso
   3. añadir funcionalidad de mandar al usuario un correo en caso de elegir otra forma de pago
   4. conectar con back para inicio de sesion de usuarios reales
   
