// questions.js — 35 preguntas de Pandas con espacios en blanco
// Sección 1: Fundamentos del DataFrame  (8 q — 10 pts)
// Sección 2: El Índice y su Uso         (7 q — 10 pts)
// Sección 3: Operaciones Estadísticas   (10 q — 14 pts)
// Sección 4: Filtrado y Manejo de Datos (6 q —  8 pts)
// Sección 5: Generación de Gráficos     (4 q —  8 pts)
// ── Total: 35 preguntas — 50 pts ──────────────────────
// Distribución: 20 preguntas × 1 pt + 15 preguntas × 2 pts

const QUIZ_SECTIONS = [
  { id: 1, name: "Fundamentos del DataFrame",  abbrev: "DataFrame", color: "#3B82F6" },
  { id: 2, name: "El Índice y su Uso",         abbrev: "Índice",    color: "#8B5CF6" },
  { id: 3, name: "Operaciones Estadísticas",   abbrev: "Ops",       color: "#10B981" },
  { id: 4, name: "Filtrado y Manejo de Datos", abbrev: "Filtros",   color: "#EF4444" },
  { id: 5, name: "Generación de Gráficos",     abbrev: "Plots",     color: "#F59E0B" },
];

const QUIZ_QUESTIONS = [

  // ══════════════════════════════════════════════════════
  // SECCIÓN 1 — Fundamentos del DataFrame (8 preguntas — 10 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 1, section: 1, points: 2,
    topic: "Importar Pandas",
    question: "Importa la librería Pandas con su alias estándar `pd`.",
    code:
`[1] pandas [2] pd
print("Pandas importado")`,
    blanks: [
      { id: 1, options: ["import", "from", "using", "include"],  correct: "import" },
      { id: 2, options: ["as", "import", "with", "is"],          correct: "as" },
    ],
  },

  {
    id: 2, section: 1, points: 1,
    topic: "Crear una Serie",
    question: "Crea una Serie de Pandas que representa una columna de datos con un índice.",
    code:
`import pandas as pd
datos_lista = [10, 20, 30]
mi_serie = pd.[1](datos_lista)
print(mi_serie)`,
    blanks: [
      { id: 1, options: ["Series", "DataFrame", "Index", "array"], correct: "Series" },
    ],
  },

  {
    id: 3, section: 1, points: 1,
    topic: "Crear un DataFrame",
    question: "Crea la estructura fundamental de Pandas, un DataFrame (tabla), a partir de un diccionario.",
    code:
`import pandas as pd
datos_dict = {'ColumnaA': [1, 2, 3], 'ColumnaB': ['X', 'Y', 'Z']}
mi_df = pd.[1](datos_dict)
print(mi_df)`,
    blanks: [
      { id: 1, options: ["DataFrame", "Series", "Index", "Panel"], correct: "DataFrame" },
    ],
  },

  {
    id: 4, section: 1, points: 1,
    topic: "Dimensiones del DataFrame",
    question: "Obtén las dimensiones (número de filas y columnas) del DataFrame `df`.",
    code:
`import pandas as pd
data = {'A': [1, 2], 'B': [3, 4], 'C': [5, 6]}
df = pd.DataFrame(data)
dimensiones = df.[1]
print(dimensiones)  # Debería mostrar (2, 3)`,
    blanks: [
      { id: 1, options: ["shape", "size", "ndim", "length"], correct: "shape" },
    ],
  },

  {
    id: 5, section: 1, points: 1,
    topic: "Nombres de las columnas",
    question: "Obtén un objeto Index con los nombres de las columnas del DataFrame `df`.",
    code:
`import pandas as pd
data = {'Nombre': ['Ana', 'Luis'], 'Edad': [25, 30]}
df = pd.DataFrame(data)
nombres_columnas = df.[1]
print(nombres_columnas)`,
    blanks: [
      { id: 1, options: ["columns", "index", "dtypes", "values"], correct: "columns" },
    ],
  },

  {
    id: 6, section: 1, points: 1,
    topic: "Tipos de datos por columna",
    question: "Obtén los tipos de datos (dtypes) de cada columna en el DataFrame `df`.",
    code:
`import pandas as pd
data = {'Enteros': [1, 2], 'Flotantes': [1.1, 2.2], 'Texto': ['a', 'b']}
df = pd.DataFrame(data)
tipos_datos = df.[1]
print(tipos_datos)`,
    blanks: [
      { id: 1, options: ["dtypes", "types", "columns", "info"], correct: "dtypes" },
    ],
  },

  {
    id: 7, section: 1, points: 1,
    topic: "Primeras filas del DataFrame",
    question: "Obtén las primeras 5 filas del DataFrame `df` para un vistazo rápido a los datos.",
    code:
`import pandas as pd
data = {'A': [1, 2, 3, 4, 5, 6], 'B': [10, 20, 30, 40, 50, 60]}
df = pd.DataFrame(data)
primeras = df.[1]()
print(primeras)`,
    blanks: [
      { id: 1, options: ["head", "tail", "first", "top"], correct: "head" },
    ],
  },

  {
    id: 8, section: 1, points: 2,
    topic: "Renombrar columnas",
    question: "Renombra las columnas 'A' y 'B' a 'Alpha' y 'Beta' usando el método correspondiente.",
    code:
`import pandas as pd
data = {'A': [1, 2], 'B': [3, 4]}
df = pd.DataFrame(data)
df_renombrado = df.[1]([2]={'A': 'Alpha', 'B': 'Beta'})
print(df_renombrado)`,
    blanks: [
      { id: 1, options: ["rename", "relabel", "set_names", "rename_axis"], correct: "rename" },
      { id: 2, options: ["columns", "index", "axis", "labels"],            correct: "columns" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 2 — El Índice y su Uso (7 preguntas — 10 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 9, section: 2, points: 1,
    topic: "Acceder al Índice",
    question: "Obtén el índice (las etiquetas de las filas) del DataFrame `df`.",
    code:
`import pandas as pd
data = {'A': [10, 20, 30]}
df = pd.DataFrame(data, index=['x', 'y', 'z'])
indice_df = df.[1]
print(indice_df)`,
    blanks: [
      { id: 1, options: ["index", "columns", "values", "shape"], correct: "index" },
    ],
  },

  {
    id: 10, section: 2, points: 2,
    topic: "Establecer Columna como Índice",
    question: "Usa la columna 'ID' como el nuevo índice del DataFrame `df`.",
    code:
`import pandas as pd
data = {'ID': [101, 102], 'Valor': [50, 60]}
df = pd.DataFrame(data)
df_con_indice = df.[1]('ID')
print(df_con_indice)`,
    blanks: [
      { id: 1, options: ["set_index", "reset_index", "reindex", "rename_axis"], correct: "set_index" },
    ],
  },

  {
    id: 11, section: 2, points: 1,
    topic: "Resetear el Índice",
    question: "Convierte el índice actual de `df_con_indice` en columna regular, restableciendo el índice numérico por defecto.",
    code:
`import pandas as pd
data = {'Valor': [50, 60]}
df_con_indice = pd.DataFrame(data, index=pd.Index([101, 102], name='ID'))
df_reseteado = df_con_indice.[1]()
print(df_reseteado)`,
    blanks: [
      { id: 1, options: ["reset_index", "set_index", "reindex", "drop_index"], correct: "reset_index" },
    ],
  },

  {
    id: 12, section: 2, points: 2,
    topic: "Selección por Etiqueta (.loc)",
    question: "Selecciona la fila cuya etiqueta de índice es 'y' usando el accesor `.loc`.",
    code:
`import pandas as pd
data = {'A': [10, 20, 30]}
df = pd.DataFrame(data, index=['x', 'y', 'z'])
fila_y = df.[1]['y']
print(fila_y)`,
    blanks: [
      { id: 1, options: ["loc", "iloc", "at", "iat"], correct: "loc" },
    ],
  },

  {
    id: 13, section: 2, points: 1,
    topic: "Selección por Posición (.iloc)",
    question: "Selecciona la primera fila (posición 0) del DataFrame usando el accesor `.iloc`.",
    code:
`import pandas as pd
data = {'A': [10, 20, 30]}
df = pd.DataFrame(data, index=['x', 'y', 'z'])
primera_fila = df.[1][0]
print(primera_fila)`,
    blanks: [
      { id: 1, options: ["iloc", "loc", "at", "iat"], correct: "iloc" },
    ],
  },

  {
    id: 14, section: 2, points: 2,
    topic: "Reindexar DataFrame",
    question: "Crea `df_reindexado` conformando `df` al nuevo índice `['w', 'x', 'y']`, rellenando valores faltantes con 0.",
    code:
`import pandas as pd
data = {'A': [10, 20]}
df = pd.DataFrame(data, index=['x', 'y'])
nuevo_indice = ['w', 'x', 'y']
df_reindexado = df.[1](nuevo_indice, fill_value=0)
print(df_reindexado)`,
    blanks: [
      { id: 1, options: ["reindex", "reset_index", "set_index", "rename"], correct: "reindex" },
    ],
  },

  {
    id: 15, section: 2, points: 1,
    topic: "Ordenar por Índice",
    question: "Ordena el DataFrame `df` alfabéticamente según las etiquetas de su índice.",
    code:
`import pandas as pd
data = {'Ventas': [200, 150, 300]}
df = pd.DataFrame(data, index=['C', 'A', 'B'])
df_ordenado = df.[1]()
print(df_ordenado)`,
    blanks: [
      { id: 1, options: ["sort_index", "sort_values", "reindex", "order"], correct: "sort_index" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 3 — Operaciones Estadísticas (10 preguntas — 14 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 16, section: 3, points: 1,
    topic: "Seleccionar una Columna (Serie)",
    question: "Selecciona la columna 'Precio' del DataFrame `df` como un objeto Serie.",
    code:
`import pandas as pd
data = {'Producto': ['A', 'B'], 'Precio': [100, 150]}
df = pd.DataFrame(data)
serie_precio = df[1]
print(type(serie_precio))`,
    blanks: [
      { id: 1, options: ["['Precio']", "['Producto']", ".Precio", ".values"], correct: "['Precio']" },
    ],
  },

  {
    id: 17, section: 3, points: 1,
    topic: "Operación Matemática en Columna",
    question: "Crea la columna 'PrecioConIVA' calculando el 19 % de IVA sobre 'Precio'. (IVA = Precio × 0.19)",
    code:
`import pandas as pd
data = {'Producto': ['A', 'B'], 'Precio': [100, 200]}
df = pd.DataFrame(data)
df['PrecioConIVA'] = df['Precio'] + (df['Precio'] [1] 0.19)
print(df)`,
    blanks: [
      { id: 1, options: ["*", "+", "/", "**"], correct: "*" },
    ],
  },

  {
    id: 18, section: 3, points: 1,
    topic: "Suma de una Columna",
    question: "Calcula la suma total de todos los valores en la columna 'Cantidad'.",
    code:
`import pandas as pd
data = {'Producto': ['A', 'B', 'C'], 'Cantidad': [10, 5, 8]}
df = pd.DataFrame(data)
total_cantidad = df['Cantidad'].[1]()
print(total_cantidad)  # Debería ser 23`,
    blanks: [
      { id: 1, options: ["sum", "mean", "max", "count"], correct: "sum" },
    ],
  },

  {
    id: 19, section: 3, points: 1,
    topic: "Media de una Columna",
    question: "Calcula el valor promedio (media) de la columna 'Puntuacion'.",
    code:
`import pandas as pd
data = {'Examen': [1, 2, 3], 'Puntuacion': [80, 90, 70]}
df = pd.DataFrame(data)
media_puntuacion = df['Puntuacion'].[1]()
print(media_puntuacion)  # Debería ser 80.0`,
    blanks: [
      { id: 1, options: ["mean", "sum", "median", "max"], correct: "mean" },
    ],
  },

  {
    id: 20, section: 3, points: 1,
    topic: "Valor Máximo en Columna",
    question: "Encuentra el valor máximo en la columna 'Temperatura'.",
    code:
`import pandas as pd
data = {'Dia': [1, 2, 3], 'Temperatura': [25, 28, 22]}
df = pd.DataFrame(data)
max_temp = df['Temperatura'].[1]()
print(max_temp)  # Debería ser 28`,
    blanks: [
      { id: 1, options: ["max", "min", "mean", "sum"], correct: "max" },
    ],
  },

  {
    id: 21, section: 3, points: 1,
    topic: "Valor Mínimo en Columna",
    question: "Encuentra el valor mínimo en la columna 'Temperatura'.",
    code:
`import pandas as pd
data = {'Dia': [1, 2, 3], 'Temperatura': [25, 28, 22]}
df = pd.DataFrame(data)
min_temp = df['Temperatura'].[1]()
print(min_temp)  # Debería ser 22`,
    blanks: [
      { id: 1, options: ["min", "max", "mean", "sum"], correct: "min" },
    ],
  },

  {
    id: 22, section: 3, points: 2,
    topic: "Estadísticas Descriptivas",
    question: "Genera un resumen de estadísticas descriptivas (conteo, media, std, min, max, etc.) para las columnas numéricas.",
    code:
`import pandas as pd
data = {'A': [1, 2, 3, 4, 5], 'B': [10, 20, 30, 40, 50]}
df = pd.DataFrame(data)
estadisticas = df.[1]()
print(estadisticas)`,
    blanks: [
      { id: 1, options: ["describe", "info", "summary", "stats"], correct: "describe" },
    ],
  },

  {
    id: 23, section: 3, points: 2,
    topic: "Aplicar una Función",
    question: "Usa `.apply()` para aplicar una función lambda que duplique cada valor de la columna 'Valor'.",
    code:
`import pandas as pd
data = {'Valor': [10, 20, 30]}
df = pd.DataFrame(data)
df['ValorDuplicado'] = df['Valor'].[1](lambda x: x * 2)
print(df)`,
    blanks: [
      { id: 1, options: ["apply", "map", "transform", "applymap"], correct: "apply" },
    ],
  },

  {
    id: 24, section: 3, points: 2,
    topic: "Conteo de Valores Únicos",
    question: "Cuenta cuántas veces aparece cada valor único en la columna 'Categoria'.",
    code:
`import pandas as pd
data = {'Categoria': ['A', 'B', 'A', 'C', 'B', 'A']}
df = pd.DataFrame(data)
conteo = df['Categoria'].[1]()
print(conteo)`,
    blanks: [
      { id: 1, options: ["value_counts", "count", "unique", "nunique"], correct: "value_counts" },
    ],
  },

  {
    id: 25, section: 3, points: 2,
    topic: "Ordenar por Valores",
    question: "Ordena el DataFrame `df` de menor a mayor según la columna 'Nota'.",
    code:
`import pandas as pd
data = {'Nombre': ['Carlos', 'Ana', 'Luis'], 'Nota': [75, 90, 85]}
df = pd.DataFrame(data)
df_ordenado = df.[1]([2]='Nota')
print(df_ordenado)`,
    blanks: [
      { id: 1, options: ["sort_values", "sort_index", "order_by", "arrange"], correct: "sort_values" },
      { id: 2, options: ["by", "on", "key", "column"],                        correct: "by" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 4 — Filtrado y Manejo de Datos (6 preguntas — 8 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 26, section: 4, points: 2,
    topic: "Filtrado Booleano Simple",
    question: "Filtra el DataFrame para obtener solo las filas donde la nota sea mayor o igual a 70.",
    code:
`import pandas as pd
data = {'Nombre': ['Ana', 'Luis', 'Carlos'], 'Nota': [90, 65, 80]}
df = pd.DataFrame(data)
mascara = df['Nota'] [1] 70
aprobados = df[[2]]
print(aprobados)`,
    blanks: [
      { id: 1, options: [">=", ">", "<=", "=="],                          correct: ">=" },
      { id: 2, options: ["mascara", "Nota", "True", "aprobados"],         correct: "mascara" },
    ],
  },

  {
    id: 27, section: 4, points: 2,
    topic: "Filtrado con Múltiple Condición",
    question: "Filtra el DataFrame para obtener filas donde la nota sea mayor que 60 Y menor o igual a 85.",
    code:
`import pandas as pd
data = {'Nombre': ['Ana', 'Luis', 'Carlos', 'Marta'], 'Nota': [90, 65, 80, 55]}
df = pd.DataFrame(data)
rango = df[(df['Nota'] [1] 60) [2] (df['Nota'] <= 85)]
print(rango)`,
    blanks: [
      { id: 1, options: [">", ">=", "<", "=="],   correct: ">" },
      { id: 2, options: ["&", "|", "and", "or"],  correct: "&" },
    ],
  },

  {
    id: 28, section: 4, points: 1,
    topic: "Detectar Valores Nulos",
    question: "Genera un DataFrame booleano que indica qué celdas contienen valores nulos (NaN).",
    code:
`import pandas as pd
import numpy as np
data = {'A': [1, np.nan, 3], 'B': [4, 5, np.nan]}
df = pd.DataFrame(data)
nulos = df.[1]()
print(nulos)`,
    blanks: [
      { id: 1, options: ["isnull", "isna", "notna", "dropna"], correct: "isnull" },
    ],
  },

  {
    id: 29, section: 4, points: 1,
    topic: "Eliminar Filas con Nulos",
    question: "Elimina todas las filas que contengan al menos un valor nulo (NaN).",
    code:
`import pandas as pd
import numpy as np
data = {'A': [1, np.nan, 3], 'B': [4, 5, np.nan]}
df = pd.DataFrame(data)
df_limpio = df.[1]()
print(df_limpio)`,
    blanks: [
      { id: 1, options: ["dropna", "fillna", "isnull", "remove_null"], correct: "dropna" },
    ],
  },

  {
    id: 30, section: 4, points: 1,
    topic: "Rellenar Valores Nulos",
    question: "Reemplaza todos los valores nulos (NaN) del DataFrame con el valor 0.",
    code:
`import pandas as pd
import numpy as np
data = {'A': [1, np.nan, 3], 'B': [4, 5, np.nan]}
df = pd.DataFrame(data)
df_relleno = df.[1](0)
print(df_relleno)`,
    blanks: [
      { id: 1, options: ["fillna", "dropna", "isnull", "replace_null"], correct: "fillna" },
    ],
  },

  {
    id: 31, section: 4, points: 1,
    topic: "Eliminar una Columna",
    question: "Elimina la columna 'B' del DataFrame `df`.",
    code:
`import pandas as pd
data = {'A': [1, 2], 'B': [3, 4], 'C': [5, 6]}
df = pd.DataFrame(data)
df_sin_b = df.[1](columns=['B'])
print(df_sin_b)`,
    blanks: [
      { id: 1, options: ["drop", "remove", "delete", "pop"], correct: "drop" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 5 — Generación de Gráficos (4 preguntas — 8 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 32, section: 5, points: 2,
    topic: "Gráfico de Líneas desde Serie",
    question: "Genera un gráfico de líneas simple directamente desde la Serie `mi_serie`.",
    code:
`import pandas as pd
import matplotlib.pyplot as plt
mi_serie = pd.Series([5, 8, 6, 10, 7])
mi_serie.[1]()
plt.show()`,
    blanks: [
      { id: 1, options: ["plot", "show", "graph", "draw"], correct: "plot" },
    ],
  },

  {
    id: 33, section: 5, points: 2,
    topic: "Gráfico de Líneas desde DataFrame",
    question: "Genera un gráfico de líneas usando el índice como eje X y cada columna numérica como una línea.",
    code:
`import pandas as pd
import matplotlib.pyplot as plt
data = {'Serie1': [10, 12, 15], 'Serie2': [8, 9, 7]}
df = pd.DataFrame(data, index=[2020, 2021, 2022])
df.[1]()
plt.show()`,
    blanks: [
      { id: 1, options: ["plot", "show", "graph", "draw"], correct: "plot" },
    ],
  },

  {
    id: 34, section: 5, points: 2,
    topic: "Gráfico de Barras",
    question: "Genera un gráfico de barras a partir del DataFrame `df`, usando el índice como categorías.",
    code:
`import pandas as pd
import matplotlib.pyplot as plt
data = {'Ventas': [150, 220, 180]}
df = pd.DataFrame(data, index=['TiendaA', 'TiendaB', 'TiendaC'])
df.[1](kind='bar')
plt.ylabel('Ventas')
plt.show()`,
    blanks: [
      { id: 1, options: ["plot", "bar", "show", "graph"], correct: "plot" },
    ],
  },

  {
    id: 35, section: 5, points: 2,
    topic: "Histograma de una Columna",
    question: "Genera un histograma para visualizar la distribución de los valores en la columna 'Edad'.",
    code:
`import pandas as pd
import matplotlib.pyplot as plt
data = {'Edad': [22, 25, 30, 25, 40, 35, 30, 28, 22, 50]}
df = pd.DataFrame(data)
df['Edad'].[1](kind='hist', bins=5)
plt.xlabel('Edad')
plt.show()`,
    blanks: [
      { id: 1, options: ["plot", "hist", "show", "graph"], correct: "plot" },
    ],
  },

];
