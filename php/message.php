<?php 
$to = "tucandera.tours@hotmail.com";
$subject = "Pagina Web Tucandera";
$nombre = $_POST["name"];
$email = $_POST["email"];
$asunto = $_POST["subject"];
$mensaje = $_POST["message"];
$mensaje2 = "Muchas gracias por comunicarse con nosotros, en unos instantes responderemos a su pregunta.\nQue tenga un lindo dia!!!";
$subject2 = "Tucandera Tours";

$message = "Nombre: ".$nombre."\nCorreo: ".$email."\nAsunto: ".$asunto."\nMensaje: ".$mensaje;

$boole = mail($to, $subject, $message);

if ($boole = mail($to, $subject, $message)) {
    mail($email,$subject2,$mensaje2);
    echo'<p>Su mensaje fue enviado satisfactiamente!!!</p> Para volver a la p&aacute;gina principal haga click <a href="../index.html#contact">aqu&iacute;.</a>';
}else{
    echo '<p>Error al enviar el mensaje. Compruebe su conexion e int&eacute;ntelo denuevo.</p> Para volver a la p&aacute;gina principal haga click <a href="../index.html">aqu&iacute;.</a>';
}



 ?>