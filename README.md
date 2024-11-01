# Molebuster

## Descripción General
**Molebuster** es un juego clásico de "atrapar al topo". El objetivo es hacer clic en un topo que aparece aleatoriamente en diferentes lugares de la pantalla antes de que desaparezca. Cada vez que el jugador atrapa al topo, gana un punto, y al llegar a 10 puntos, el jugador gana el juego.

## Funcionalidades Clave

### Interfaz de Usuario (UI)
- Una cuadrícula de hoyos donde pueden aparecer los topos (por ejemplo, una cuadrícula de 3x3 o 4x4).
- Un marcador en la parte superior que muestra el puntaje actual del jugador.
- Un contador de tiempo o un botón de reinicio que permite al jugador comenzar de nuevo o reiniciar la partida.
- Un mensaje de "¡Ganaste!" que aparece cuando se alcanzan los 10 puntos.

### Mecánica de Juego
- Un topo aparece en una posición aleatoria dentro de la cuadrícula por un tiempo breve.
- El jugador debe hacer clic en el topo antes de que desaparezca.
- Al hacer clic en el topo, se añade un punto al marcador y el topo desaparece.
- El topo reaparece en otra posición aleatoria después de cada intento.
- Cuando el jugador alcanza 10 puntos, aparece un mensaje de "¡Ganaste!" y el juego se detiene.

### Lógica de Puntuación
- Cada topo capturado suma 1 punto.
- Al alcanzar 10 puntos, el juego termina automáticamente con un mensaje de victoria.

### Animaciones y Sonidos
- Una pequeña animación para que el topo aparezca y desaparezca de los hoyos.
- Un sonido de éxito cada vez que el jugador atrapa al topo.
- Un sonido de "fin del juego" cuando el jugador alcanza los 10 puntos.

## Tecnologías Utilizadas
- **HTML**: Para la estructura del juego y la cuadrícula de hoyos.
- **CSS**: Para el diseño visual de la cuadrícula y los estilos de los elementos.
- **JavaScript**: Para manejar la lógica del juego, generar la aparición aleatoria del topo, actualizar la puntuación, y mostrar el mensaje de victoria.

## Instrucciones de Instalación y Ejecución
1. Clona este repositorio en tu máquina local:
   
   git clone https://github.com/tu-usuario/molebuster.git
