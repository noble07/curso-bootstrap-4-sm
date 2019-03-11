* REGLAS DE FLEXBOX *

Notas: - Por defecto el tamaño de los flex items se define por el tamaño de su contenido.

1. Flexbox necesita un padre y por lo menus un hijo.
2. El Flex Container tiene 2 ejes:
  - Eje principal (Horizontal).
  - Eje secundario (Vertical).
3. Podemos modificar el eje principal con la propiedad: flex-direction
4. Podemos permitir el salto de columnas con Flex-Wrap.
5. Alineamos elementos en el eje principal con justify-content.
6. Alineamos elementos en el eje secundario con align-items.
7. Podemos alinear los flex items de forma individual en el eje secundario con align-self
8. Los flex items ignoran propiedades como float, clear, vertical-align.
9. Podemos modificar el tamaño de los flex items con flex-grow, flex-shrink, flex-basis
  - flex-grow: Define el tamaño que crecerá un flex item, en relación a sus demás hermanos, cuando
               hay espacio disponible en el contenedor.
               Su valor por defecto es '0'.
  - flex-shrink: Define el tamaño de reducción de un flex item en relación a sus demás hermanos,
                 cuando falte espacio en el contenedor.
                 Por defecto es '1'.
  - flex-basis: Define el tamaño inicial del hijo.
                Su valor por defecto es "auto".
10. Podemos resumir todo en la propiedad: flex (flex-grow, flex-shrink, flex-basis).
11. Podemos reordenar los flex items con la propiedad Order.