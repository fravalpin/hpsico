# agent.md — Landing Page Psicóloga Ana Herrera (React + Bootstrap)

Fuente de contenido: PDF adjunto :contentReference[oaicite:0]{index=0}

---

## Objetivo
Crear una **landing page one-page** para la psicóloga **Ana Herrera**:
- Al hacer **scroll** se recorre toda la web.
- Un **menú sticky** permite saltar a cada apartado (anclas) con **scroll suave**.
- **Mobile-first** (perfecta en móvil) sin descuidar escritorio.
- Añadir **1 imagen por apartado** coherente con psicología, calma, bienestar, cercanía.

---

## Stack y restricciones técnicas
- React (recomendado con Vite).
- Bootstrap (CSS + componentes; opcional react-bootstrap).
- Imágenes optimizadas (`.webp`), `loading="lazy"`.
- Accesibilidad básica: contraste, `alt`, navegación por teclado, headings correctos.
- Sin backend obligatorio (contacto puede ser formulario + `mailto:` o CTA a WhatsApp).

---

## Branding: colores y estilo
- Fondo general: **#f2f2f2**
- Primary: **#516b8c**
- Paleta:
  - **#6a84a6**
  - **#8fa4bf**
  - **#f2f2f2**
  - **#0d0d0d**

Reglas:
- Texto principal: #0d0d0d
- Botones/links: primary #516b8c; hover con #6a84a6
- Acentos suaves: #8fa4bf
- No usar colores fuera de paleta salvo grises neutros Bootstrap si es imprescindible.

---

## Arquitectura sugerida
- `src/components/NavbarMenu.jsx`
- `src/components/Section.jsx` (wrapper genérico con `id`, `title`, `children`, `image`)
- `src/sections/Hero.jsx`
- `src/sections/SobreMi.jsx`
- `src/sections/Servicios.jsx`
- `src/sections/FAQ.jsx`
- `src/sections/Contacto.jsx`
- `src/sections/Footer.jsx`
- `src/styles/theme.css`
- `src/assets/images/` (1 imagen por sección)

---

## UX / Layout (one-page)
### Navbar
- Sticky top, con collapse en móvil (hamburguesa).
- Enlaces a anclas: `#inicio`, `#sobre-mi`, `#servicios`, `#faq`, `#contacto`
- Scroll suave:
  - `html { scroll-behavior: smooth; }`
- En móvil: al clicar un enlace, cerrar el menú.

### Secciones
- Hero (H1) + resto H2.
- Cada sección con padding generoso.
- Layout responsive: en desktop 2 columnas (texto/imagen), en mobile 1 columna.
- 1 imagen por apartado.

---

## Contenido EXACTO (del PDF)
> Usar este texto tal cual (copiar/pegar). :contentReference[oaicite:1]{index=1}

### 1) INICIO (Hero) — `id="inicio"`
**Título:** `Bienvenidx a este espacio!`

**Texto:**
Me presento: soy Ana, psicóloga sanitaria.  
Acompaño a personas que están atravesando un momento complicado y quieren sentirse  
mejor, entenderse y reencontrar el equilibrio en sus vidas o a personas que quieren  
conocerse en mayor profundidad y gestionar sus emociones de una forma más saludable.  

Mi manera de trabajar se basa en un enfoque integrador, (¿y eso qué es Ana? Que tengo  
una base cognitiva-conductual, que es la que se suele estudiar en la carrera, pero también  
me he formado en trauma, apego y terapias de tercera generación). Esto me permite  
adaptarme a las necesidades de cada persona, porque cada proceso, igual que cada  
persona, es un mundo. Completamente único y personal.  

En las sesiones encontrarás un espacio seguro, donde puedas hablar sin juicios y con  
absoluta tranquilidad. Un espacio donde poder mostrarte vulnerable y sentirte  
escuchadx, sostenidx y apoyadx. Donde miraremos lo que duele, pero también  
descubriremos tus recursos y tu capacidad de cambio.

**Frase destacada (opcional en Hero):**
“Todo cambio empieza por un pequeño paso.”

**Imagen (1):**
- Recomendación visual: foto cálida y minimalista (luz natural), consulta/ambiente calmado o naturaleza suave.

**CTA (botón):**
- “Contactar por WhatsApp” (llevar a `#contacto` o enlace directo si se define).
- Secundario: “Ver servicios” (ancla `#servicios`).

---

### 2) SOBRE MÍ — `id="sobre-mi"`
**Título:** `💫 Sobre mí`

**Texto:**
Desde que empecé mi camino como psicóloga, he tenido claro que lo importante no es  
encajar a las personas en una etiqueta diagnóstica, sino escuchar y comprender su  
historia.  

Como comentaba anteriormente, esa es la razón de escoger un enfoque integrador, para  
no solo eliminar el síntoma, ya que suele ser la parte visible del iceberg, pero siempre hay  
algo debajo que hay que resolver. Combinar diferentes corrientes terapéuticas me permite  
adaptarme a cada persona y a lo que necesita en cada momento. Con mucho mimo y  
mucho tacto y al ritmo que cada uno va marcando.  

Mi forma de trabajar se basa en la cercanía, el respeto y la autenticidad. Respetando  
siempre los ritmos de cada persona e implicándome en cada una de las historias que  
acompaño.  

A lo largo del proceso, iremos profundizando en el autoconocimiento, en la gestión  
emocional y en el desarrollo de herramientas que te permitan vivir de forma más consciente,  
tranquila y equilibrada.  

Creo en la posibilidad de transformar el malestar en comprensión, y la comprensión en  
crecimiento y evolución.

**Frase destacada (opcional en esta sección):**
“Cada persona tiene su propio ritmo.”

**Imagen (1):**
- Recomendación visual: retrato profesional suave (si existe) o imagen simbólica (libreta, té, luz, manos, naturaleza).

---

### 3) SERVICIOS / TERAPIAS — `id="servicios"`
**Título:** `🌱 Servicios / Terapias`

**Intro:**
Ofrezco acompañamiento psicológico a personas jóvenes y adultas que están atravesando  
momentos de dificultad o que simplemente quieren conocerse mejor.  

**Lista (bullets):**
Algunas de las razones más comunes por las que la gente acude a consulta son:  
- Ansiedad, estrés o sensación de bloqueo.  
- Alteraciones del estado de ánimo.  
- Regulación emocional  
- Problemas de autoestima o inseguridad.  
- Autoconocimiento  
- Autoexigencia y perfeccionismo  
- Habilidades sociales  
- Resolución de problemas  
- Dificultades en las relaciones o rupturas.  
- Dependencia emocional.  
- Procesos de duelo, cambio o toma de decisiones.

**Modalidades:**
Las sesiones pueden ser presenciales u online, según lo que te resulte más cómodo.  
Si tu estado actual no te permite salir de casa, también se valorarán intervenciones a  
domicilio por la zona del Baixo Miño.  
En cualquiera de las opciones, encontrarás un espacio seguro, cercano y confidencial,  
donde poder avanzar a tu ritmo.

**Imagen (1):**
- Recomendación visual: imagen de acompañamiento/bienestar (persona escribiendo, caminando en naturaleza, etc.).

---

### 4) PREGUNTAS FRECUENTES — `id="faq"`
**Título:** `❓ Preguntas frecuentes`

**Q1:** ¿Cómo empiezo el proceso?  
**A:** Mándame un Whatsapp y me pondré en contacto contigo lo antes posible. Te llamaré para  
que me cuentes brevemente el motivo de consulta y agendaremos una cita para poder  
empezar lo antes posible.

**Q2:** ¿Cuánto dura una sesión?  
**A:** Las sesiones suelen ser de 50 minutos, salvo excepciones.

**Q3:** ¿Cada cuánto se hacen las sesiones?  
**A:** Lo más recomendable es que al inicio sean semanales, y a medida que avanza el proceso  
terapéutico se vayan espaciando. Sin embargo, siempre tengo en cuenta las circunstancias  
de cada persona para adaptarnos a lo que mejor le conviene.

**Q4:** ¿Cuánto dura una terapia?  
**A:** No hay una duración establecida. Cada proceso es diferente: algunas personas necesitan  
un acompañamiento más breve, otras requieren de más tiempo. Lo importante es que el  
ritmo tenga sentido para ti.

**Imagen (1):**
- Recomendación visual: imagen tranquila (plantas, escritorio cálido, detalle de consulta).

Implementación sugerida: acordeón Bootstrap.

---

### 5) CONTACTO — `id="contacto"`
**Título:** `📞 Contacto`

**Texto:**
Si sientes que es momento de empezar tu proceso o simplemente quieres más información,  
puedes escribirme a:

**Datos:**
- 📧 anaherrerapsicologia@gmail.com  
- 📱 623755502  
- 📍 O Rosal  
- 💻Online  

**Texto adicional:**
También puedes dejarme un mensaje a través del formulario de contacto. Te responderé lo  
antes posible :)

**Frase destacada (ideal en contacto):**
“A veces cuidarse también es pedir ayuda.”

**Imagen (1):**
- Recomendación visual: imagen de cercanía (mano con móvil, mensaje, o naturaleza calmada).

Formulario (sin backend):
- Nombre, Email, Mensaje
- Botón “Enviar”
- Alternativa/CTA: botón “Abrir WhatsApp” con el número.

---

## Notas de copy extra (del PDF)
“Cada persona tiene su propio ritmo.”  
“Todo cambio empieza por un pequeño paso.”  
“A veces cuidarse también es pedir ayuda.”  
(Usarlas como microcopy en Hero, Sobre mí y Contacto, respectivamente.) :contentReference[oaicite:2]{index=2}

---

## GitHub flow (OBLIGATORIO)
Siempre con PR:

1. `git checkout master`
2. `git pull origin master`
3. `git checkout -b feature/landing-ana-herrera`
4. Commits claros y pequeños.
5. `git push -u origin feature/landing-ana-herrera`
6. Abrir Pull Request hacia `master` (NO merge directo).

En el PR incluir:
- resumen de cambios
- checklist responsive (375/768/1024+)
- secciones implementadas
- capturas si se puede

---

## Definition of Done (DoD)
- One-page con scroll y navegación por menú a anclas.
- Mobile perfecto + desktop cuidado.
- Paleta aplicada correctamente.
- 1 imagen por sección + lazy loading.
- Texto del PDF implementado tal cual.
- PR creado desde rama nueva hacia `master`.

---

## README.md (OBLIGATORIO)
Durante el desarrollo del proyecto se debe **crear o actualizar el archivo README.md** del repositorio.

El README debe incluir, como mínimo:
- Nombre del proyecto.
- Descripción clara y breve de qué es la web (landing page one-page para la psicóloga Ana Herrera).
- Tecnologías utilizadas (React, Bootstrap).
- Explicación de la estructura one-page y navegación por secciones.
- Información básica de diseño (paleta de colores y enfoque mobile-first).
- Instrucciones básicas para:
  - instalar dependencias
  - ejecutar el proyecto en local
- Estado del proyecto (ej. “En desarrollo”).

El contenido del README debe ser **claro, conciso y orientado a desarrolladores**, no a pacientes.
No inventar funcionalidades que no existan.

