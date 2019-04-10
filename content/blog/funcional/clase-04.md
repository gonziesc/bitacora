---
title: Cuarta clase
date: '2019-04-08'
description: 'Orden Superior y Guardas'
tags: [funcional, orden-superior, guardas]
---

## Tarea para la clase que viene

- Hacer lecciones 5 y 6 de [Mumuki](https://mumuki.io/pdep-utn).

## ¿Qué vimos hoy?

1. Orden superior
2. Guardas

## Orden Superior

Poder pasar como parámetro a una función _otra función_, es lo que se llama **orden superior** 🤯.
Ejemplos de funciones de estas características son:

```haskell
map :: (a -> b) -> [a] -> [b]

> map length ["hola", "como", "estás", "?"]
[4, 4, 5, 1]
```

```haskell
filter :: (a -> Bool) -> [a] -> [a]

> filter even [1,2,4,6,9]
[2, 4, 6]
```

Es muy importante tener en cuenta que `map` y `filter` **no** modifican la lista que les pasamos como argumento sino que **crean** una nueva. Esto es porque no hay _estado_ o _efecto de lado_.

Otras funciones interesantes de orden superior que vimos son:

```haskell
any :: (a -> Bool) -> [a] -> Bool

> any even [1,2,4,6,9]
True
```

```haskell
all :: (a -> Bool) -> [a] -> Bool

> all even [1,2,4,6,9]
False
```

También recordemos que ya habíamos usado antes, sin darnos cuenta, funciones de orden superior como `.` y `$`.

Entonces, ¿a qué conclusión llegamos? 🤔 A que las funciones también son _ciudadanos de primer orden_ porque se pueden pasar por parámetro. 🎉

Como sabemos que al principio marea saber qué hace `filter` y `map` 😖, te dejamos una bella foto de recordatorio: 🎉

![diagrama_filter_map](./filter_map.jpg 'Diagrama de filter y map')

#### Ejercicios en clase:

- Dadas las notas de un curso, queremos saber cuáles son las aprobadas (más de 6):

```haskell
notasAprobadas :: [Int] -> [Int]
notasAprobadas notas = filter (>6) notas

-- Pero también recordemos que usando la anotación point-free podemos escribir la función de esta manera:
notasAprobadas = filter (>6)
```

- Dadas las notas de un curso que no tiene el mejor comportamiento 😈, vamos a bajarle todas las notas a la mitad:

```haskell
cursoDelDemonio :: [Float] -> [Float]
cursoDelDemonio = map (/2)
```

- Dada una lista de notas, decir si un curso es de 10 💯, esto pasa cuando todos las notas son un 10:

```haskell
cursoDe10 :: [Int] -> Bool
cursoDe10 = all (==10)
```

- Dadas unas notas (y un billetín 💸😝), vamos a sumarle 6 puntos a las notas menores o iguales a 4:

```haskell
aprobacionDudosa :: [Int] -> [Int]
aprobacionDudosa notas = map (+6).notasBajas $ notas
notasBajas = filter (<= 4)
```

- Hacer `pdepMails`, que dado una lista de nombres, les saca los espacios a cada uno y después le agrega el "@pdep.com.ar":

```haskell
pdepMails :: [String] -> [String]
pdepMails = map (agregarSufijo.quitarEspacios)
agregarSufijo nombre = nombre ++ "@pdep.com.ar"
```

## Guardas

En matemática tenemos a las funciones partidas y, como el funcionaloso Haskell no puede quedarse atrás 😝, también las tiene y las llama **guardas**.
Es muy importante que cada guarda devuelva algo (que tenga un `=`) y que ese algo sea del **mismo tipo**.
El ejemplo que vimos en clase fue:

```haskell
valorAbsoluto :: Num a => a -> a
valorAbsoluto numero
  | numero >= 0 = numero
  | otherwise = - numero
```

¿Qué era el `otherwise`? 😅 Era para indicarle a la función lo que tiene que devolver en _cualquier otro caso_.

Lo que **no** 🚫 hay que hacer con guardas es:

```haskell
esMayor edad
 | edad <= 18 = False
 | otherwise = True
```

```haskell
esBisiesto anio
| esMultiploDe anio 400 = True
| esMultiploDe anio 4 && not (esMultiploDe anio 100) = True
| otherwise = False
```

Hacer esto ☝️ equivale a un 2 (🦆) en el parcial. ¿Por qué? 😨 Porque es un mal uso de booleanos. Lo correcto es hacer:

```haskell
esMayor edad = edad <= 18
```

```haskell
esBisiesto anio = esMultiploDe anio 400 || esMultiploDe anio 4 && not (esMultiploDe anio 100)
```

#### Ejercicios en clase:

- Dada la nota de un examen queremos evaluarla. Si la misma es menor a 6, "Desaprueba"; si es menor a 8, "Aprueba"; en cualquier otro caso, "Promociona":

```haskell
evaluarExamen :: Int -> String
evaluarExamen unaNota
 | unaNota < 6 = "Desaprueba"
 | unaNota < 8 = "Aprueba"
 | otherwise = "Promociona"
```

¡Ojo! 👀 El orden en las guardas importa y mucho. No es lo mismo la solución anterior que esta:

```haskell{4}
evaluarExamen :: Int -> String
evaluarExamen unaNota
 | unaNota < 8 = "Aprueba"
 | unaNota < 6 = "Desaprueba"
 | otherwise = "Promociona"
```

En este caso nunca llegamos a evaluar si la nota es menos a 6 (línea destacada) porque esos casos ya los cubre la guarda anterior.
Con lo cual nadie podría desaprobar... cualquier nota menor a 8 aprueba y cualquier otro caso (`otherwise`) directamente promociona.

## Links Útiles

- [Orden Superior](http://wiki.uqbar.org/wiki/articles/orden-superior.html)
- [Guardas](http://wiki.uqbar.org/wiki/articles/funciones-por-partes.html)
