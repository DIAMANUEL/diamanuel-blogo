---
title: "Los juegos ''4D''"
date: 2026-07-31T00:00:00+02:00
draft: false
image: "/img/posts/4d.png"
tag: ["Videojuegos", "Actualidad", "4D"]
---

![4D](/img/posts/4d.png)


Hace unos días estaba jugando Minecraft tranquilamente y de repente me acordé de una moda que hubo alrededor de 2020-2023: los juegos en 4D.

Si no estuviste en Internet por 2022, un YouTuber creó un videojuego inspirado en Minecraft pero con 4 ejes de coordenadas (de ahí lo de 4D). 

>Para los que no sepan de lo que hablo: en matemáticas siempre se ha hablado de la existencia de una 4ª dimensión donde hay cuatro ejes de coordenadas: anchura, altura, profundidad y el tiempo. El 4D representa el espacio y el tiempo, claro que nuestro planeta está en 3D, así que no podemos ver directamente esta 4ª dimensión, y por eso en los videojuegos "4D" solo se añade un cuarto eje (x, y, z, w), en vez del tiempo. Si sigues sin entender nada, te recomiendo mirar algún vídeo en YouTube. 

Hubieron varios videojuegos "4D" a lo largo de la historia del videojuego, desde *Four-Dimensional Maze* (1989) pasando por *Adanaxis* (2005) y más recientemente *4D Miner* (2022) y *4D Golf* (2024)

Estos juegos surgieron para demostrar que un ordenador podría simular un mundo en 4D, que por alguna razón es interesante para los matemáticos. Su objetivo no era el de convertirse en los mejores juegos jamás creados, pero sí ofrecer una experiencia distinta al usar un concepto tan extraño.

En este post voy a hablar sobre todo de 4D Miner porque fue el que me hizo descubrir el tema del 4D, y a lo mejor me paso por otros juegos si hay algo interesante que decir.

Pero... ¿Cómo funciona entonces lo del 4D, si no podemos verlo?

Lo cierto es que en 4D Miner se soluciona con un mando que te permite moverte por el cuarto eje a través de una ruedita. Fuera del juego solo tienes que girar la rueda del ratón. El resultado es que en vez de bloques, ves polígonos irregulares que van cambiando de forma a medida que te mueves en cualquiera de las cuatro dimensiones.

Realmente, durante la partida nunca llegas a ver una figura tetradimensional entera, solo ves un trozo porque nuevamente, no podemos ver en 4D. 

Todo esto hizo que surgiera una especie de "moda" por los juegos en 4D y su naturaleza confusa. Por ejemplo, 4D Golf.

Hoy en día obviamente los juegos en 4D no son nada más que un *gimmick*, como siempre lo ha sido, pero fue un experimento curioso que hizo que gente de Internet se interesase un mínimo por las mates, y eso es lo más impresionante.


Ahora quiero dar una explicación algo más técnica de cómo se logra simular una cuarta dimensión en un ordenador y hablaré de motores de videojuegos, matemáticas y cosas algo más aburridas. Si esto no te resulta interesante, el post ha acabado para tí. ¡Hasta el próximo post!




...




Ahora que los de letras se han largado, toca hablar de cómo funciona internamente el 4D.

Para renderizar un entorno tetradimensional no hace falta tecnología de la NASA, sino álgebra lineal pura. Los motores gráficos de toda la vida calculan la posición de cada objeto en pantalla mediante vectores de tres variables: X, Y y Z. 

Sin embargo, para crear un motor 4D, el desarrollador tiene que programar todo el código desde cero añadiendo una cuarta variable matemática en cada matriz de cálculo: el eje W. Para el procesador de un ordenador, procesar esta cuarta dimensión no supone ningún problema porque solo son más números operando dentro de una ecuación; el verdadero dolor de cabeza es cómo demonios proyectar esos datos en tu monitor tridimensional o bidimensional.

La solución que utilizan estos motores gráficos se basa en un concepto llamado proyecciones de sección cruzada. La mejor forma de entenderlo es imaginar una manzana tridimensional atravesando un plano en 2D, un ser plano que habitase allí no vería una manzana completa; solo vería círculos flotantes que cambian de tamaño de forma extraña a medida que el objeto cruza su realidad. Como dije al principio del post, es más fácil entenderlo con vídeos.

Con los videojuegos en 4D ocurre exactamente lo mismo. El ordenador calcula en su memoria el hipercubo (o teseracto) entero con sus cuatro coordenadas espaciales fijas, pero en tu pantalla solo renderiza la "rebanada" tridimensional exacta que intersecta con tu coordenada actual en el eje W.

Por eso, cuando juegas a 4D Miner y giras la rueda del ratón, lo que estás haciendo a nivel técnico es desplazar esa rebanada de corte matemorfa a lo largo del eje W. Los bloques cúbicos tradicionales mutan y se convierten en polígonos irregulares porque estás viendo secciones transversales tridimensionales de un objeto 4D en movimiento. El motor gráfico tiene que recalcular en tiempo real la iluminación, las colisiones y las texturas de unas figuras geométricas que cambian de forma constantemente según tu posición hiperdimensional. 

Al final, todo el truco técnico consiste en engañar a tus ojos mostrando partes tridimensionales consecutivas de un mundo que tu cerebro es incapaz de asimilar de golpe.


Bof, eso ha sido muy técnico y desde luego Gemini no me ha ayudado a buscar toda es ainfo, pero en fin.

Espero que este post os haya parecido interesante. ¡Hasta el próximo post!