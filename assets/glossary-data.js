/* MUS 302 listening guides - glossary data
 *
 * Each entry has a label (the term as it should appear in the popup,
 * properly capitalized and formatted) and a definition (plain-language
 * explanation aimed at non-majors with no musical background).
 *
 * Keep definitions to roughly 1-3 sentences. Plain English. No jargon
 * without explanation. Imagine the student has just clicked on the term
 * mid-paragraph and wants to keep reading; the definition should answer
 * "what is this?" quickly and let them get back to the prose.
 *
 * Plain text only, no HTML. The glossary loader (assets/glossary.js,
 * line 76) injects definitions via .textContent, which treats whatever
 * it gets as literal characters. Anything that looks like HTML in a
 * definition will render as literal characters to the student:
 *   - Do NOT use <em>, </em>, <strong>, or any HTML tags. The popup
 *     will show the literal "<em>" characters. To convey emphasis,
 *     just write the title or term as plain text in mid-sentence;
 *     the surrounding prose should make clear it is a title.
 *   - Do NOT use <a> tags to link to other pages. The popup cannot
 *     render clickable links; the literal "<a href=...>" will show.
 *     If you need to point students to another page, do it in the
 *     listening guide prose, not in the glossary popup.
 *   - Do NOT use HTML entities. Use plain & (not &amp;), plain < and
 *     > (not &lt; / &gt;), and plain straight or curly quotes. If you
 *     write "R&amp;B" the popup will display the literal five
 *     characters "R&amp;B" rather than "R&B."
 *
 * Character encoding: these strings are JavaScript string literals.
 * For curly quotes and accented characters, use Unicode escapes
 * (\u201c, \u00e9, etc.) rather than typing literal Unicode where
 * possible; the file is a JS source and the escapes survive any
 * encoding conversion safely.
 */

var GLOSSARY = {

  /* ============================
     Music history and genres
     ============================ */

  "gospel": {
    label: "Gospel",
    definition: "African American Christian church music that grew out of spirituals, hymns, and blues in the early twentieth century. Known for emotional vocal performances, call-and-response between lead singer and choir, and a tradition of singers \u201ctestifying\u201d through their voice. Many soul and R&B singers, including Sam Cooke and Aretha Franklin, came up through gospel before crossing over to pop."
  },

  "soul": {
    label: "Soul music",
    definition: "A Black American popular music style that emerged in the late 1950s and 1960s, combining the vocal intensity of gospel with the secular subject matter and rhythms of R&B. Often associated with labels like Motown (Detroit) and Stax (Memphis)."
  },

  "rnb": {
    label: "R&B (rhythm and blues)",
    definition: "A category of Black American popular music that emerged in the 1940s. The label has shifted over time. In the 1940s and 50s it described a wide range of Black popular music. From the 1960s onward it became more closely associated with smoother, vocal-driven styles. Today \u201cR&B\u201d typically means contemporary Black pop with a focus on singing."
  },

  "soul-stirrers": {
    label: "The Soul Stirrers",
    definition: "One of the most important African American gospel groups of the postwar era, founded in Texas in 1926. Known for innovations like adding a second lead singer and pushing gospel toward greater emotional intensity. Sam Cooke was their lead singer from 1950 to 1957."
  },

  "civil-rights-anthem": {
    label: "Civil rights anthem",
    definition: "A song that became closely associated with the African American civil rights movement of the 1950s and 1960s. Some were written explicitly for the movement (\u201cWe Shall Overcome\u201d). Others, like \u201cA Change Is Gonna Come,\u201d were taken up by movement participants because of what they expressed, regardless of the songwriter\u2019s original intent."
  },

  /* ============================
     Music industry and recording
     ============================ */

  "crossover": {
    label: "Crossover",
    definition: "When a recording artist or song moves from one market to another, especially when a Black artist breaks through to white pop audiences. In the racially segregated American music industry of the mid-twentieth century, crossing over carried real cultural and commercial weight, and could complicate an artist\u2019s relationship with their original audience."
  },

  "b-side": {
    label: "B-side",
    definition: "The flip side of a 45 RPM single record. The A-side was the song the label was promoting. The B-side was usually a less commercial track. \u201cA Change Is Gonna Come\u201d was originally released as the B-side of \u201cShake.\u201d B-sides occasionally outlived their A-sides in cultural memory."
  },

  "billboard-charts": {
    label: "Billboard charts",
    definition: "Weekly rankings of popular records published by Billboard magazine since the 1940s. The Hot 100 ranks pop singles overall; the R&B chart ranks Black popular music. Chart positions are based on a mix of sales, radio airplay, and (more recently) streaming data."
  },

  "rca-victor": {
    label: "RCA Victor",
    definition: "A major American record label, originally part of the Radio Corporation of America. In the mid-twentieth century, RCA was one of the \u201cbig four\u201d labels alongside Columbia, Decca, and Capitol. Sam Cooke signed with RCA Victor in 1960."
  },

  "sheet-music": {
    label: "Sheet music",
    definition: "The printed score of a song or instrumental piece, with the melody, lyrics, and chord or piano accompaniment laid out in standard musical notation on paper. From roughly the 1880s through the 1920s, sheet music was the way popular songs traveled commercially: songs were sold as printed pages people bought at music stores and played at home on a piano or parlor organ, and a song was a hit when its sheet music sold in large numbers, not when its records did. Owning the publishing rights to a sheet-music edition meant collecting income on every copy sold and on every performance and recording licensed from it, which is why W.C. Handy founded his own publishing company after losing the rights to \u201cMemphis Blues.\u201d Sheet music as the dominant format declined as recording, radio, and the Great Depression reshaped the industry, but the publishing-rights structure it set up still organizes the music industry today."
  },

  /* ============================
     Form, arrangement, and production
     ============================ */

  "arrangement": {
    label: "Arrangement",
    definition: "The decisions about how a song is performed: which instruments play, when they enter and leave, how the parts fit together. An arranger writes those decisions down or works them out with the players. The same song can be arranged many different ways for different effects."
  },

  "arranger": {
    label: "Arranger",
    definition: "A musician who decides how a song will be performed and recorded. The arranger chooses the instruments, writes the parts they play, and shapes the song\u2019s overall sound. Ren\u00e9 Hall arranged \u201cA Change Is Gonna Come.\u201d"
  },

  "orchestration": {
    label: "Orchestration",
    definition: "The art of choosing which instruments play which parts of a song. An orchestrated arrangement uses orchestral instruments (strings, woodwinds, brass) rather than just a small band. \u201cA Change Is Gonna Come\u201d is orchestrated, with eleven violins, a French horn, and timpani."
  },

  "timpani": {
    label: "Timpani",
    definition: "Large drums tuned to specific pitches, played with mallets. Common in orchestras. They produce a deep, resonant sound that can carry tremendous weight in a recording."
  },

  "movement": {
    label: "Movement",
    definition: "A self-contained section of a longer musical work, typically used to describe parts of a symphony or concerto. In the context of \u201cA Change Is Gonna Come,\u201d the song\u2019s structure is sometimes described as having multiple movements because each verse uses different instrumentation, like the parts of a small symphony."
  },

  /* ============================
     History and cultural context
     ============================ */

  "great-migration": {
    label: "The Great Migration",
    definition: "The movement of approximately six million African Americans out of the rural South into northern, midwestern, and western cities between roughly 1910 and 1970. Driven by escape from racial violence, segregation, and economic exploitation, the Great Migration reshaped American cities and brought Southern Black musical traditions into the urban industrial centers where they would become rock and roll, R&B, soul, and hip hop."
  },

  "jim-crow": {
    label: "Jim Crow",
    definition: "The system of state and local laws and customs that enforced racial segregation across the American South from after the Civil War until the civil rights legislation of the 1960s. \u201cWhites only\u201d signs, segregated hotels and restaurants, and the disenfranchisement of Black voters were all features of Jim Crow."
  },

  "march-on-washington": {
    label: "March on Washington",
    definition: "The August 28, 1963 civil rights demonstration in Washington, D.C., where Martin Luther King Jr. delivered the \u201cI Have a Dream\u201d speech to a crowd of approximately 250,000. One of the largest political demonstrations in American history at the time."
  },

  "16th-street-bombing": {
    label: "16th Street Baptist Church bombing",
    definition: "A Ku Klux Klan terrorist attack on September 15, 1963, in Birmingham, Alabama, that killed four Black girls (Addie Mae Collins, Cynthia Wesley, Carole Robertson, Denise McNair) attending Sunday school. The bombing galvanized national support for civil rights legislation."
  },

  "medgar-evers": {
    label: "Medgar Evers",
    definition: "An NAACP field secretary in Mississippi and one of the most prominent civil rights activists of his era, assassinated in his driveway in Jackson, Mississippi on June 12, 1963. His murder by a member of the White Citizens\u2019 Council was a major event in the year leading up to \u201cA Change Is Gonna Come.\u201d"
  },

  "dylan-blowing-in-the-wind": {
    label: "\u201cBlowin\u2019 in the Wind\u201d",
    definition: "A 1962 song by Bob Dylan that became one of the most iconic protest songs of the civil rights and anti-war movements. Sam Cooke heard the song in 1963 and was both moved by it and reportedly ashamed that a white singer had written a more direct song about American racism than Cooke himself had. The encounter helped spur Cooke to write \u201cA Change Is Gonna Come.\u201d"
  },

  /* ============================
     Vocal and ensemble vocabulary
     ============================ */

  "baptist": {
    label: "Baptist",
    definition: "A major Protestant Christian denomination, with deep roots in African American religious life since the 18th century. Black Baptist churches were central institutions of community organizing and music-making, and produced many of the singers who would shape gospel, soul, and R&B."
  },

  "tenor": {
    label: "Tenor voice",
    definition: "The highest of the standard adult male vocal ranges. A tenor can sing roughly an octave above middle C and remain comfortable. In gospel and soul, tenors often carry the lead melody because their range cuts through an ensemble."
  },

  "falsetto": {
    label: "Falsetto",
    definition: "A vocal technique where a singer produces notes above their normal range using a different mode of vocal cord vibration, creating a lighter, often airy sound. Common in gospel, soul, R&B, and rock. Think of the high notes in a Prince or Marvin Gaye song."
  },

  "hard-gospel": {
    label: "Hard gospel",
    definition: "A style of postwar African American gospel singing characterized by extreme emotional intensity, vocal grit, shouting, and improvisation. It contrasted with the smoother, more harmony-focused jubilee tradition. Hard gospel directly fed into the development of soul music."
  },

  "jubilee": {
    label: "Jubilee tradition",
    definition: "An earlier style of African American gospel singing that emphasized smooth four-part vocal harmony and tightly arranged spirituals. Groups like the Fisk Jubilee Singers helped popularize this style in the late 19th and early 20th centuries. It contrasts with the more emotionally raw \u201chard gospel\u201d that came later."
  },

  "gospel-circuit": {
    label: "Gospel circuit",
    definition: "The network of churches, auditoriums, and theaters where Black gospel groups toured in the mid-20th century, especially through the South and Midwest. A vibrant ecosystem with its own audiences, traveling rules, and economic logic, separate from the mainstream pop touring world."
  },

  /* ============================
     Record labels and industry
     ============================ */

  "specialty-records": {
    label: "Specialty Records",
    definition: "An independent Los Angeles record label founded in 1946 by Art Rupe. Specialty was a major force in postwar Black popular music, with a roster that included Little Richard, the Soul Stirrers, and Sam Cooke. The label\u2019s gospel and R&B catalog shaped early rock and roll."
  },

  "keen-records": {
    label: "Keen Records",
    definition: "A small Los Angeles label that signed Sam Cooke in 1957 after he left Specialty. Keen released \u201cYou Send Me\u201d and several other early Cooke pop hits before Cooke moved to RCA Victor in 1960."
  },

  "pseudonym": {
    label: "Pseudonym",
    definition: "A false name used by an artist to release work without attaching their real name to it. Cooke used \u201cDale Cook\u201d for his first secular single because gospel audiences considered crossover to pop a betrayal. Pseudonyms have a long history in popular music, especially when artists work across genres."
  },

  "top-forty": {
    label: "Top forty",
    definition: "Refers to the forty highest-ranking songs on Billboard\u2019s Hot 100 chart in a given week. \u201cHaving a top-forty hit\u201d is a standard measure of mainstream commercial success in the post-1958 era."
  },

  "segregated-venues": {
    label: "Segregated venues",
    definition: "Concert halls, clubs, and auditoriums in the United States that physically separated Black and white audiences, either through ropes down the middle of a room or through entirely separate performances. Segregation in venues was legally mandated in much of the South into the 1960s and culturally enforced elsewhere."
  },

  "pop-chart": {
    label: "Billboard pop chart",
    definition: "Billboard magazine\u2019s ranking of the best-selling singles in the mainstream popular music market. From 1958 onward this has been the Billboard Hot 100. The pop chart was traditionally dominated by white-oriented popular music, while the R&B chart tracked Black popular music separately."
  },

  /* ============================
     Civil rights movement
     ============================ */

  "civil-rights-movement": {
    label: "Civil rights movement",
    definition: "The mass political movement led primarily by African Americans, from roughly 1954 to 1968, that sought to dismantle legal segregation, secure voting rights, and end racial discrimination in the United States. Major events included the Montgomery Bus Boycott, the March on Washington, the Selma marches, and the passage of the Civil Rights Act (1964) and Voting Rights Act (1965)."
  },

  "kkk": {
    label: "Ku Klux Klan",
    definition: "A series of white supremacist terrorist organizations in the United States, founded after the Civil War in the 1860s and revived in multiple waves since. The Klan used violence, intimidation, and murder to enforce white supremacy. The 1963 16th Street Baptist Church bombing in Birmingham was one of many Klan attacks during the civil rights era."
  },

  "protest-song": {
    label: "Protest song",
    definition: "A song that addresses social or political injustice and calls for change. Protest songs span many genres: folk (Pete Seeger, Bob Dylan), gospel (\u201cWe Shall Overcome\u201d), soul (\u201cA Change Is Gonna Come\u201d), reggae (Bob Marley), hip hop (Public Enemy, Kendrick Lamar), and many others."
  },

  "sncc": {
    label: "Student Nonviolent Coordinating Committee (SNCC)",
    definition: "A major civil rights organization founded in 1960 by young Black activists, focused on direct action and grassroots organizing in the South. SNCC organized sit-ins, voter registration drives, and Freedom Rides. The Freedom Singers, a SNCC-affiliated quartet, popularized many of the freedom songs of the movement."
  },

  /* ============================
     Recording, instrumentation, and reception
     ============================ */

  "rhythm-section": {
    label: "Rhythm section",
    definition: "The instruments in a band that establish the song\u2019s rhythm and harmonic foundation: typically drums, bass, and a chord-playing instrument like piano, guitar, or organ. The rhythm section is what the rest of the band plays over."
  },

  "national-recording-registry": {
    label: "National Recording Registry",
    definition: "A list maintained by the United States Library of Congress of recordings deemed \u201cculturally, historically, or aesthetically significant.\u201d Each year the Librarian of Congress adds new recordings. \u201cA Change Is Gonna Come\u201d was added in 2006."
  },

  /* ============================
     Cuban and Latin musical forms
     ============================ */

  "son": {
    label: "Son cubano",
    definition: "A Cuban musical form that emerged in the late 19th century in the eastern part of the island, fusing Spanish guitar and song traditions with West African rhythmic patterns. Son is the foundational genre underneath salsa, mambo, and most modern Cuban dance music; the basic structure of most salsa songs (cuerpo followed by montuno) comes directly from son. The basic son ensemble has bongos, claves, maracas, guitar, and a singer."
  },

  "guaracha": {
    label: "Guaracha",
    definition: "An uptempo Cuban song form, often satirical or humorous in its lyrics, developed in Havana during the 19th century and revived by mid-20th-century groups like La Sonora Matancera. Celia Cruz was famous for her guarachas and was nicknamed \u201cLa Guarachera de Cuba\u201d (the guaracha singer of Cuba)."
  },

  "rumba": {
    label: "Rumba",
    definition: "A family of Afro-Cuban dance and music styles rooted in African religious and secular traditions, performed primarily on percussion (congas, claves) with vocals. Originated among working-class Afro-Cubans in port cities like Havana and Matanzas. Distinct from the ballroom \u201crumba\u201d marketed to American audiences in the early 20th century."
  },

  "bolero": {
    label: "Bolero",
    definition: "A slow, romantic Latin American song form, typically about love or heartbreak, that developed in late 19th-century Cuba and spread throughout Spanish-speaking Latin America. Different from the Spanish bolero. Many of Celia Cruz\u2019s most beloved recordings with Sonora Matancera were boleros."
  },

  "afro-cuban": {
    label: "Afro-Cuban",
    definition: "Refers to Cuban culture, music, religion, and identity rooted in the African heritage brought to Cuba through the trans-Atlantic slave trade. Afro-Cuban musical forms (rumba, son, guaracha, mambo, the bat\u00e1 drum traditions) blend Yoruba, Bantu, and other West and Central African elements with Spanish-derived ones. Celia Cruz was a Black Afro-Cuban singer."
  },

  "santeria": {
    label: "Santer\u00eda",
    definition: "An Afro-Cuban religion that developed when enslaved Yoruba people in Cuba syncretized their traditional religion with Roman Catholicism. Santer\u00eda has its own pantheon of orishas (deities), distinctive ceremonial music played on bat\u00e1 drums, and ritual dance. It deeply shaped Cuban music. Celia Cruz, before her solo career, recorded with the Santer\u00eda-influenced Coro Yoruba y Tambores Bat\u00e1."
  },

  "bata": {
    label: "Bat\u00e1 drums",
    definition: "A set of three two-headed hourglass-shaped drums originally from the Yoruba people of West Africa, central to Santer\u00eda religious ceremonies in Cuba. Bat\u00e1 patterns and timbres permeate Cuban popular music."
  },

  "salsa": {
    label: "Salsa",
    definition: "A pan-Latin popular music genre that emerged in 1960s and 1970s New York from the blending of Cuban son, guaracha, and mambo with Puerto Rican styles, jazz harmony, and the urban experience of Caribbean migrants. Often associated with Fania Records. The name \u201csalsa\u201d (literally \u201csauce\u201d) was a marketing term that stuck."
  },

  "clave": {
    label: "Clave",
    definition: "A two-bar rhythmic pattern that organizes most Afro-Cuban and salsa music. Two basic forms exist: 3-2 clave (three accents in the first bar, two in the second) and 2-3 clave (the reverse). Once you hear the clave, you hear it everywhere in Latin music. The pattern is often played on two wooden sticks called \u201cclaves.\u201d"
  },

  "montuno": {
    label: "Montuno",
    definition: "Two related meanings in Cuban and salsa music. (1) The improvisational call-and-response section of a son or salsa performance, where the lead singer trades phrases with the chorus. (2) A syncopated repeating piano figure that anchors the harmonic and rhythmic feel of the band. Both are essential."
  },

  "tumbao": {
    label: "Tumbao",
    definition: "The basic syncopated rhythmic pattern played on the conga drum (or by the bass) in Afro-Cuban and salsa music. The tumbao is what makes Latin music feel like Latin music, and it is what the rest of the band locks into."
  },

  "sonero": {
    label: "Sonero",
    definition: "The lead singer in a salsa or son ensemble, especially one skilled at improvising lyrics in the call-and-response montuno section. Becoming a great sonero requires not just a strong voice but a sharp wit and a deep memory of the genre\u2019s vocabulary. Cruz was considered one of the great soneras (the feminine form)."
  },

  "coro": {
    label: "Coro",
    definition: "Spanish for \u201cchorus.\u201d In salsa, the coro is the chorus that sings the repeating refrain in the montuno section, in call-and-response with the sonero. Often the coro is sung by the band members themselves rather than a separate vocal group."
  },

  "azucar": {
    label: "\u00a1Az\u00facar!",
    definition: "Spanish for \u201csugar.\u201d Celia Cruz\u2019s signature shout, which she would deliver at climactic moments in performance. The phrase began as a comment about a sweet rum drink at a Miami restaurant and became inseparable from her stage persona."
  },

  /* ============================
     Latin diasporic genres and forms (added for Module 3)
     ============================ */

  "danzon": {
    label: "Danzón",
    definition: "The national dance of Cuba from the late nineteenth century forward, a slow elegant dance music played by a charanga ensemble of flute, violins, piano, bass, and percussion. The danzón is one of the foundational forms out of which mambo and cha-cha-chá later developed in the 1930s and 1940s."
  },

  "cha-cha-cha": {
    label: "Cha-cha-chá",
    definition: "A Cuban dance music genre developed in the early 1950s by violinist and composer Enrique Jorrín, derived from the danzón and the mambo but with a slower, more accessible tempo and a distinctive triple-step (cha-cha-cha) rhythm. Spread quickly through US ballrooms in the mid-1950s and remained a staple of Latin dance music for decades."
  },

  "bomba": {
    label: "Bomba",
    definition: "A Puerto Rican drum-and-dance tradition rooted in the African-descent communities along the island\u2019s coast, particularly in Loíza on the northeast coast. The form features a call-and-response between a lead singer and a chorus over barrel drums, with dancers and lead drummer engaging in an improvised conversation. Bomba is one of the deepest layers of Afro-Puerto Rican musical practice."
  },

  "plena": {
    label: "Plena",
    definition: "A Puerto Rican popular song form that emerged in the early twentieth century in working-class neighborhoods in Ponce, often called \u201cthe newspaper of the people\u201d because its lyrics commented on current events and local life. Played on hand drums (panderetas) and accompanied by guitar or accordion. In Panama, the same word \u201cplena\u201d came to refer to Spanish-language reggae, the music that became reggaeton\u2019s direct precursor."
  },

  "bebop": {
    label: "Bebop",
    definition: "A jazz style that emerged in the early 1940s, primarily through after-hours jam sessions at Harlem clubs (Minton's Playhouse, Monroe's Uptown House) where a group of younger musicians (saxophonist Charlie Parker, trumpeter Dizzy Gillespie, pianist Thelonious Monk, drummer Kenny Clarke, others) developed a new musical language that broke with the swing era. Bebop is characterized by fast tempos, complex chord substitutions and chromatic harmony, virtuosic improvisation, and small-ensemble formats designed for listening rather than dancing. By the late 1940s bebop musicians (especially Gillespie, working with Cuban percussionist Chano Pozo) were also collaborating directly with Mario Bauzá and Machito's New York Cuban orchestras, producing the Afro-Cuban-jazz fusion that became Latin jazz."
  },

  "latin-jazz": {
    label: "Latin jazz",
    definition: "The fusion of Afro-Cuban (and later other Latin) rhythmic and percussion practices with the harmonic and improvisational language of jazz. Emerged in 1940s New York through collaborations between Cuban musicians (Mario Bauzá, Machito, Chano Pozo) and jazz figures (Dizzy Gillespie, Charlie Parker), and developed into a continuous tradition that runs from the mambo era through the present."
  },

  "cancion": {
    label: "Canción",
    definition: "Spanish for \u201csong.\u201d In the Mexican musical tradition, the canción is the broad category of song with guitar accompaniment, with roots in colonial Spanish musical inheritance. Many specific Mexican song forms (canción ranchera, canción romántica, canción bolero) are subcategories of this broader tradition."
  },

  "corrido": {
    label: "Corrido",
    definition: "The Mexican narrative ballad form that recounts deeds and historical events in verse, with roots going back to medieval Spanish ballads and developed extensively in the borderland regions during and after the Mexican Revolution (1910-1920). Corridos are still actively composed today; contemporary narcocorridos extend the form into accounts of the drug trade."
  },

  "ranchera": {
    label: "Ranchera",
    definition: "The Mexican song genre most associated with rural Mexican identity, typically performed in 3/4 (waltz) or 2/4 time and accompanied by mariachi. Ranchera lyrics often deal with love, country life, patriotism, and loss. Major ranchera figures include Lola Beltrán, José Alfredo Jiménez, and Vicente Fernández."
  },

  "mariachi": {
    label: "Mariachi",
    definition: "The Mexican ensemble form with violins, trumpets, guitar, vihuela (a small high-pitched guitar), and guitarrón (a large bass guitar), developed in the Jalisco region in the nineteenth century and promoted as a national symbol by the Mexican state in the twentieth. The mariachi ensemble is the standard accompaniment for ranchera and a global symbol of Mexican music."
  },

  "conjunto": {
    label: "Conjunto",
    definition: "The accordion-and-bajo-sexto-anchored ensemble form of working-class Mexican-American music in South Texas and northern Mexico, developed in the late nineteenth and early twentieth centuries from the meeting of Mexican folk song with the polkas and waltzes of German and Czech immigrants in the borderland. Conjunto is one of the two main streams (with orquesta) that fed into the later Tejano music of the 1980s and 1990s."
  },

  "orquesta": {
    label: "Orquesta",
    definition: "The brass-and-strings ensemble form of middle-class Mexican-American music in South Texas, developed alongside conjunto in the mid-twentieth century but with a more cosmopolitan, big-band-derived instrumentation. Orquesta and conjunto are the two main streams that fed into the Tejano music of the 1980s and 1990s; Selena\u2019s band Selena y Los Dinos drew on both."
  },

  "accordion": {
    label: "Accordion",
    definition: "A handheld instrument with a bellows and two keyboards (or buttons), played by squeezing air through metal reeds while pressing keys. The button accordion is the signature instrument of Mexican-American conjunto and Tejano music; it arrived in the Texas-Mexico borderland with German and Czech immigrants in the late nineteenth century and was adopted by Mexican-American musicians, who reshaped how it was played."
  },

  "bajo-sexto": {
    label: "Bajo sexto",
    definition: "A twelve-string Mexican guitar tuned in courses (six pairs of strings), played as the rhythmic and bass-line foundation of conjunto music. Paired with the button accordion, the bajo sexto defines the conjunto sound. The instrument developed in central Mexico in the nineteenth century and was adopted into Texas-Mexican music by the early twentieth."
  },

  "bachata": {
    label: "Bachata",
    definition: "A Dominican popular music genre that developed from rural guitar-and-bolero traditions in the mid-twentieth century, often dealing in lyrics of heartbreak and working-class life. Long stigmatized in the Dominican Republic as music of the poor, bachata went mainstream from the late 1980s onward (with figures like Juan Luis Guerra and later Aventura) and has become one of the major Latin genres of the twenty-first century."
  },

  "merengue": {
    label: "Merengue",
    definition: "The national dance music of the Dominican Republic, in fast 2/4 time with accordion (or saxophone), tambora (a two-headed drum), and güira (a metal scraper) as the core instruments. Merengue dominated Dominican popular music from the mid-twentieth century forward and crossed over to wide US audiences in the 1980s and 1990s through figures like Wilfrido Vargas and Juan Luis Guerra."
  },

  /* ============================
     Latin migration history (added for Module 3)
     ============================ */

  "bracero-program": {
    label: "Bracero Program",
    definition: "A US-Mexico bilateral labor program that ran from 1942 to 1964, bringing several million Mexican contract laborers (\u201cbraceros\u201d) into US agriculture, railroad work, and other industries. The program shaped patterns of Mexican migration to the United States for decades after it ended; many bracero families settled in the US permanently. The program ended in 1964 partly because of growing concerns about exploitation of the workers."
  },

  "jones-shafroth-act": {
    label: "Jones-Shafroth Act",
    definition: "The 1917 US law that granted US citizenship to all residents of Puerto Rico, formalized the territorial relationship, and (by making Puerto Ricans US citizens) made Puerto Ricans eligible for the military draft just as the US entered World War I. The act made all subsequent Puerto Rican movement to the US mainland legally a matter of internal migration rather than immigration, even though the experience was an immigrant experience in nearly every other respect."
  },

  "operation-bootstrap": {
    label: "Operation Bootstrap",
    definition: "The economic restructuring program initiated by Puerto Rican governor Luis Muñoz Marín in the late 1940s and 1950s, which used US tax incentives to attract American manufacturers to set up factories in Puerto Rico. The program shifted the Puerto Rican economy from agriculture to industry, but it also displaced rural workers, contributing to the mass migration to the US mainland known as the Great Puerto Rican Migration."
  },

  "freedom-flights": {
    label: "Freedom Flights",
    definition: "The US-Cuban government program that ran twice-daily charter flights between Varadero, Cuba, and Miami from 1965 to 1973, allowing roughly 260,000 Cubans to leave Cuba for the United States during that period. The Freedom Flights were the second major wave of post-revolutionary Cuban migration, after the Early Exiles of 1959-62 and before the Mariel Boatlift of 1980."
  },

  "el-barrio": {
    label: "El Barrio",
    definition: "Spanish for \u201cthe neighborhood,\u201d the name Puerto Rican New Yorkers gave to East Harlem in upper Manhattan, the neighborhood that has been the cultural and demographic center of Puerto Rican New York since the 1920s. El Barrio was the home of mambo, boogaloo, salsa, and many of the institutions of Puerto Rican community life in the city."
  },

  "loisaida": {
    label: "Loisaida",
    definition: "The Nuyorican Spanish pronunciation and renaming of the Lower East Side of Manhattan, the Puerto Rican-settled neighborhood south of Houston Street and east of Avenue A. The name was popularized by the Nuyorican poet Bittman \u201cBimbo\u201d Rivas and his 1974 poem \u201cLoisaida\u201d and became the official designation of Avenue C in the 1980s. The neighborhood was a center of Puerto Rican cultural life from the 1950s through the 1980s."
  },

  "little-havana": {
    label: "Little Havana",
    definition: "The Cuban-American neighborhood in central Miami, centered along the Calle Ocho commercial district (SW 8th Street), built by the Cuban exile community after the 1959 Cuban Revolution. Little Havana became the cultural, commercial, and political center of Cuban-American Miami and the heart of the broader Latin Miami that developed from the 1960s forward."
  },

  /* ============================
     Latin / American historical concepts (added for Module 3)
     ============================ */

  "atlantic-slave-trade": {
    label: "Atlantic slave trade",
    definition: "The forced transatlantic transportation of an estimated 12 million enslaved Africans, primarily from West and Central Africa to the Americas, between roughly the early 1500s and the late 1800s. The slave trade was the foundation of plantation economies across the Caribbean, Brazil, and the southern United States, and it carried with it the West and Central African musical practices that became the substrate for African American, Afro-Cuban, Afro-Puerto Rican, Afro-Brazilian, and other Black music in the Americas."
  },

  "treaty-of-guadalupe-hidalgo": {
    label: "Treaty of Guadalupe Hidalgo",
    definition: "The 1848 treaty that ended the US-Mexican War (1846-1848) and transferred to the United States the Mexican territory that became California, Nevada, Utah, most of Arizona and New Mexico, and parts of Colorado, Wyoming, Kansas, and Oklahoma. Roughly 80,000 Mexican citizens living in those territories were given the option of US citizenship or returning to Mexico; most stayed. The treaty is the legal origin of the Mexican-American populations of the US Southwest, and the standard short way of saying \u201cthe community didn\u2019t move; the border did.\u201d"
  },

  "us-mexican-war": {
    label: "US-Mexican War",
    definition: "The 1846-1848 war between the United States and Mexico, fought over the US annexation of Texas (1845) and the disputed Texas-Mexico border. US forces invaded northern Mexico and eventually occupied Mexico City. The war ended with the Treaty of Guadalupe Hidalgo, in which Mexico ceded roughly half its national territory to the United States. The war is also called the Mexican-American War in much US writing; in Mexican historiography it is more often framed as a US invasion (la Intervenci\u00f3n Estadounidense en M\u00e9xico)."
  },

  "mexican-revolution": {
    label: "Mexican Revolution",
    definition: "The decade-long armed political upheaval (1910-1920) that overthrew the long dictatorship of Porfirio D\u00edaz, killed roughly 1 to 2 million Mexicans, and reshaped Mexican society. The Revolution drove substantial migration north to the United States, particularly to Texas and the Southwest. Many corridos (the Mexican narrative ballad form) were composed about its battles and figures, and the revolutionary period remains central to Mexican popular memory."
  },

  "mariel-boatlift": {
    label: "Mariel Boatlift",
    definition: "The mass migration of approximately 125,000 Cubans from the port of Mariel, Cuba, to Florida between April and October 1980, after the Cuban government temporarily allowed anyone who wished to leave to do so. The Mariel migration was the third major post-revolutionary Cuban exodus, and the first to include a significant Afro-Cuban population. The Cubans who arrived (\u201cMarielitos\u201d) faced harsher reception in the US than earlier Cuban refugees had."
  },

  "chicano": {
    label: "Chicano / Chicana",
    definition: "A self-identifier adopted by many Mexican-Americans starting in the 1960s to assert a politicized cultural identity distinct from both the Mexican nation and the white US mainstream. The term reclaims a word that was earlier used as a slur. \u201cChicano\u201d is masculine; \u201cChicana\u201d is feminine; \u201cChicanx\u201d and \u201cChicane\u201d are gender-inclusive variants. The Chicano Movement of the late 1960s and 1970s gave the term its political weight."
  },

  "chicano-movement": {
    label: "Chicano Movement",
    definition: "The Mexican-American civil rights, cultural, and political movement of the late 1960s and 1970s, centered in California, Texas, the Southwest, and the Midwest. The movement included the United Farm Workers led by C\u00e9sar Ch\u00e1vez and Dolores Huerta, student walkouts in Los Angeles, the Crusade for Justice in Denver, the founding of MEChA (a college student organization), and the broader cultural assertion of Chicano identity in art, literature, theater, and music. The Movement reshaped how Mexican-Americans related to the US and to Mexico."
  },

  "dembow": {
    label: "Dembow",
    definition: "The signature drum pattern of reggaeton, adapted by Panamanian and Puerto Rican producers in the 1990s from a Jamaican dancehall riddim of the same name (the \u201cDem Bow\u201d riddim built by Bobby \u201cDigital\u201d Dixon for Shabba Ranks\u2019s 1990 song \u201cDem Bow\u201d). The pattern is a steady boom-ch-boom-chick that anchors almost every reggaeton track; once you hear it, you hear it everywhere in the genre."
  },

  "cumbia": {
    label: "Cumbia",
    definition: "A Colombian dance music genre with roots on the Caribbean coast, blending African, Indigenous, and Spanish musical elements into a moderate-tempo dance form anchored by drum patterns and traditionally featuring accordion, gaita flute, and percussion. Cumbia spread across Latin America in the second half of the twentieth century and developed regional variations in Mexico, Peru, Argentina, and elsewhere. Mexican and Tejano cumbia is one of the streams that fed into Selena\u2019s music."
  },

  "tex-mex": {
    label: "Tex-Mex",
    definition: "A general descriptor for the cultural fusion of the Texas-Mexico borderland: in food, in language, and in music. As a music term, \u201cTex-Mex\u201d is sometimes used interchangeably with conjunto and Tejano, sometimes more loosely to cover the broader range of Mexican-American popular music in Texas (including the cross-border country and rock fusions of figures like the Texas Tornados). The term is older than \u201cTejano\u201d and has a slightly different feel; \u201cTejano\u201d is the more specific genre name for the 1980s-90s pop-flavored borderland music that Selena was central to."
  },

  /* ============================
     Latin music figures (added for Module 3)
     ============================ */

  "mario-bauza": {
    label: "Mario Bauz\u00e1",
    definition: "Cuban-born trumpeter, alto saxophonist, arranger, and bandleader (1911-1993) who was the architect of Afro-Cuban jazz. Moved from Havana to New York in 1930; became musical director of Chick Webb\u2019s big band in 1934, then of Cab Calloway\u2019s in 1938 (where he persuaded Calloway to hire Dizzy Gillespie). In 1940 he co-founded Machito and the Afro-Cubans with his brother-in-law Machito, where he served as musical director until 1976. His 1943 composition \u201cTang\u00e1\u201d is widely treated as the first true Afro-Cuban jazz piece."
  },

  "machito": {
    label: "Machito",
    definition: "Stage name of Frank Ra\u00fal Guti\u00e9rrez Grillo (1909-1984), the Cuban-born vocalist, maraca player, and bandleader who fronted Machito and the Afro-Cubans in New York from 1940 until his death. The band, with Mario Bauz\u00e1 as musical director, was the central institution of the New York mambo era at the Palladium Ballroom and one of the foundational forces in the development of Afro-Cuban jazz. Machito was Bauz\u00e1\u2019s brother-in-law."
  },

  "curtis-mayfield": {
    label: "Curtis Mayfield",
    definition: "African American singer, songwriter, guitarist, and producer (1942-1999), one of the most important figures in 1960s and 1970s soul music. Led the vocal group the Impressions through the early 1960s civil rights era, writing songs (\u201cPeople Get Ready,\u201d \u201cKeep On Pushing\u201d) that became anthems of the movement. Went solo in 1970 and recorded the iconic Super Fly soundtrack in 1972. His original \u201cGypsy Woman\u201d (1961, with the Impressions) is the song Joe Bataan covered for the Module 3 Track 2 listening guide."
  },

  "ruben-blades": {
    label: "Rub\u00e9n Blades",
    definition: "Panamanian singer, songwriter, lawyer, actor, and politician (born 1948), one of the central figures of 1970s and 1980s salsa. Known for politically and narratively substantive lyrics that brought social-realist storytelling into Latin popular music; his 1978 album Siembra with Willie Col\u00f3n, including the track \u201cPedro Navaja,\u201d remains one of the best-selling salsa albums ever recorded. Has run for the Panamanian presidency and served as Panama\u2019s minister of tourism (2004-2009)."
  },

  "willie-colon": {
    label: "Willie Col\u00f3n",
    definition: "Puerto Rican-American trombonist, bandleader, singer, and producer (born 1950 in the South Bronx), one of the foundational figures of New York salsa. Recorded a series of influential Fania albums in the 1970s, often with vocalist H\u00e9ctor Lavoe and (later) songwriter Rub\u00e9n Blades. His 1978 collaboration with Blades, Siembra, brought social-realist storytelling and political content into the salsa mainstream and remains a landmark of the genre."
  },

  "tito-puente": {
    label: "Tito Puente",
    definition: "Ernest Anthony Puente Jr. (1923-2000), New York-born Puerto Rican bandleader, percussionist (most famously on timbales), composer, and arranger; one of the central figures of the New York mambo era and a sustained presence in Latin music for the next half century. Raised in Spanish Harlem, apprenticed in the Machito Orchestra in the early 1940s, served in the US Navy, studied at Juilliard on the GI Bill, and led the Tito Puente Orchestra from 1947 forward. Known as \u201cEl Rey de los Timbales\u201d (the King of the Timbales). His 1962 composition \u201cOye Como Va\u201d is the song the Module 3 Track 1 listening guide covers and the song Carlos Santana covered in 1970 for the Track 3 listening guide."
  },

  "tito-rodriguez": {
    label: "Tito Rodr\u00edguez",
    definition: "Pablo Rodr\u00edguez Lozada (1923-1973), Puerto Rican-born singer and bandleader, the third of the \u201cthree Titos\u201d of the New York mambo era (with Tito Puente and Machito). Born in Santurce, Puerto Rico; moved to East Harlem in 1940. Sang with Xavier Cugat, Noro Morales, and Cuban pianist Jos\u00e9 Curbelo in the 1940s before forming his own band in 1947. Headlined the Palladium Ballroom alongside Puente and Machito throughout the 1950s in what was widely treated as a friendly rivalry with Puente. Later known as \u201cEl Inolvidable\u201d (the Unforgettable) for his 1963 bolero recording of that name."
  },

  "bad-bunny": {
    label: "Bad Bunny",
    definition: "Stage name of Benito Antonio Mart\u00ednez Ocasio (born 1994 in Bayam\u00f3n, raised in Vega Baja, Puerto Rico), the most globally successful Latin music artist of the 2020s. His sound combines reggaeton, Latin trap, dembow, dancehall, salsa, and bomba; his preferred genre descriptor is m\u00fasica urbana. Several of his albums (YHLQMDLG 2020, Un Verano Sin Ti 2022, Deb\u00ed Tirar M\u00e1s Fotos 2025) topped the Billboard 200 in Spanish, with Deb\u00ed Tirar M\u00e1s Fotos becoming the first Spanish-language album to win a Grammy for Album of the Year. His public work has consistently engaged Puerto Rican politics: the 2019 protests that drove Governor Ricardo Rossell\u00f3 from office, post-Hurricane Mar\u00eda recovery, the island's debate over its political status, and gender politics in Latin pop. Treated in detail in Module 6."
  },

  /* ============================
     Cuban history and exile
     ============================ */

  "cuban-revolution": {
    label: "Cuban Revolution",
    definition: "The armed revolution led by Fidel Castro that overthrew Cuban dictator Fulgencio Batista on January 1, 1959. The revolution moved Cuba into a Soviet-aligned socialist state, nationalized industries, restructured land ownership, and dramatically changed Cuban cultural and economic life. Roughly half a million Cubans, including most of Celia Cruz\u2019s musical world, eventually went into exile."
  },

  "exile": {
    label: "Exile",
    definition: "The condition of being barred from returning to one\u2019s home country, often for political reasons. Following the Cuban Revolution, hundreds of thousands of Cubans went into political exile, primarily in the United States. Celia Cruz lived the rest of her life in exile after 1960, formally barred from returning by Castro\u2019s government even when her mother was dying."
  },

  "fulgencio-batista": {
    label: "Fulgencio Batista",
    definition: "Cuban military leader and dictator who controlled Cuba from 1933 to 1944 and again from 1952 until his overthrow by Fidel Castro\u2019s revolutionary forces on January 1, 1959. His government was widely considered corrupt and repressive."
  },

  "cuban-cabarets": {
    label: "Havana cabarets",
    definition: "The high-profile Havana nightclubs (Tropicana, Sans Souci, Topeka, Bamboo) that flourished in the 1940s and 1950s. They drew international tourists and showcased Cuba\u2019s top musicians. The clubs were closed by the Castro government after the Revolution as symbols of capitalist decadence, ending the careers many performers had built."
  },

  /* ============================
     Salsa institutions
     ============================ */

  "sonora-matancera": {
    label: "La Sonora Matancera",
    definition: "One of the most important Cuban orchestras of the 20th century, founded in 1924 in the city of Matanzas. Celia Cruz fronted the group from 1950 to 1965, recording 188 songs. After her debut at age 24, she became the band\u2019s first Afro-Cuban lead singer and the face of its golden era."
  },

  "fania-records": {
    label: "Fania Records",
    definition: "The independent New York record label, founded in 1964 by Dominican-born flutist Johnny Pacheco and Italian-American lawyer Jerry Masucci, that became the engine of the salsa boom of the late 1960s and 1970s. Fania\u2019s roster included Cruz, H\u00e9ctor Lavoe, Willie Col\u00f3n, R\u00faben Blades, Ray Barretto, and many others."
  },

  "fania-all-stars": {
    label: "Fania All-Stars",
    definition: "A rotating supergroup formed in 1968 from the artists on the Fania Records roster. They recorded primarily live, capturing the energy of New York salsa concerts. Their landmark performances at the Cheetah Club (1971), Yankee Stadium (1973), and Zaire 74 (1974) are foundational documents of salsa\u2019s commercial peak."
  },

  "tico-records": {
    label: "Tico Records",
    definition: "A New York record label specializing in mambo and Latin music. Celia Cruz signed with Tico in 1965 after leaving Sonora Matancera. Fania Records bought Tico in 1974, which is how Cruz came to be associated with Fania."
  },

  /* ============================
     Zaire 74 context
     ============================ */

  "zaire-74": {
    label: "Zaire 74",
    definition: "A three-day music festival held September 22\u201324, 1974 at the Stade du 20 Mai in Kinshasa, Zaire (now the Democratic Republic of the Congo). Conceived by South African trumpeter Hugh Masekela and American producer Stewart Levine, it brought together African American, Latin, and African artists. Held in conjunction with the Muhammad Ali / George Foreman heavyweight title fight (the \u201cRumble in the Jungle\u201d). Eighty thousand people attended."
  },

  "rumble-jungle": {
    label: "Rumble in the Jungle",
    definition: "The October 30, 1974 heavyweight boxing championship fight in Kinshasa, Zaire, in which Muhammad Ali defeated George Foreman by knockout. Promoted by Don King, the fight drew a global television audience and made Kinshasa briefly the center of the world\u2019s sporting and cultural attention."
  },

  "mobutu": {
    label: "Mobutu Sese Seko",
    definition: "President (and effectively dictator) of Zaire from 1965 to 1997. His government was authoritarian, kleptocratic, and propped up by Cold War US support. Mobutu funded Zaire 74 and the Ali-Foreman fight as part of a campaign to promote his ideology of \u201cAfrican authenticity\u201d and to project Zaire as a modern African nation on the world stage."
  },

  "diaspora": {
    label: "Diaspora",
    definition: "The dispersal of a population from its original homeland, whether by force, choice, or both. The African diaspora refers to the global spread of people of African descent, particularly through the trans-Atlantic slave trade. Music historians often describe styles like salsa, samba, jazz, and hip hop as products of the African diaspora because they fuse African musical traditions with the conditions of new geographies."
  },

  "pan-africanism": {
    label: "Pan-Africanism",
    definition: "A political and cultural movement that emphasizes solidarity among people of African descent globally. Pan-Africanist thought has informed liberation movements, cultural festivals, and music criticism since the 19th century. Zaire 74 was framed in part as a Pan-Africanist gesture: a reunion of African and African-diasporic music."
  },

  /* ============================
     Methodology terms (cross-track)
     ============================ */

  "call-and-response": {
    label: "Call and response",
    definition: "A musical structure where a leader (\u201ccall\u201d) and a group (\u201cresponse\u201d) alternate. Found across African and African-diasporic music: in work songs, gospel, blues, jazz, salsa, hip hop, and many other forms. In salsa, the sonero calls and the coro responds. In gospel, the preacher or lead singer calls and the choir or congregation responds."
  },

  "improvisation": {
    label: "Improvisation",
    definition: "Music made up in the moment by the performer, rather than following a written-out score. Salsa\u2019s montuno sections are heavily improvised: the sonero invents new lines on the spot in dialogue with the band and audience. Improvisation is central to jazz, blues, salsa, hip hop freestyle, and many other traditions."
  },

  "aretha-franklin": {
    label: "Aretha Franklin (1942\u20132018)",
    definition: "American singer, pianist, and songwriter widely regarded as the greatest soul singer of her generation. Born in Memphis and raised in Detroit, she came up through her father\u2019s church and recorded gospel as a teenager before crossing over to secular music. Her late-1960s run on Atlantic Records (\u201cRespect,\u201d \u201cChain of Fools,\u201d \u201c(You Make Me Feel Like) A Natural Woman\u201d) defined a vocal style that brought gospel intensity into pop and R&B, and she became a central artistic voice of the civil rights and Black feminist movements."
  },

  "bob-dylan": {
    label: "Bob Dylan (b. 1941)",
    definition: "American singer-songwriter who became central to the early-1960s folk revival and to the political music of the civil rights and antiwar movements. \u201cBlowin\u2019 in the Wind\u201d (1963) and \u201cThe Times They Are a-Changin\u2019\u201d (1964) became anthems of the era. Dylan later moved through folk-rock, country, gospel, and other styles. Sam Cooke heard \u201cBlowin\u2019 in the Wind\u201d in 1963 and was both moved by it and ashamed that he, as a Black artist, had not yet written something so direct about American racism. Cooke began performing the song in his own sets and started writing what would become \u201cA Change Is Gonna Come.\u201d"
  },

  /* ============================
     Filipino American history
     ============================ */

  "philippine-annexation": {
    label: "U.S. annexation of the Philippines (1898)",
    definition: "After the Spanish-American War, the United States acquired the Philippines from Spain in 1898 and held the islands as a colonial territory until 1946. The annexation made Filipinos eligible for entry to the United States as \u201cAmerican nationals\u201d (a unique status that allowed entry without immigration restrictions but did not confer citizenship), which shaped the major Filipino migration to the West Coast in the early 20th century."
  },

  "american-national": {
    label: "American national",
    definition: "A specific legal status that applied to people from U.S. territories like the Philippines from 1898 to 1934. American nationals could enter the United States without going through immigration restrictions, but they were not citizens and could not vote. Most Filipino men who came to California in this era arrived under this status, often working as agricultural laborers, sailors, or service workers. The status ended with the 1934 Tydings-McDuffie Act."
  },

  "filipino-migration": {
    label: "Filipino migration to the U.S.",
    definition: "Following the 1898 U.S. annexation of the Philippines, hundreds of thousands of Filipinos came to the United States, primarily to the West Coast and Hawai\u2018i. Most were young men working in agriculture, canneries, or domestic service. Anti-miscegenation laws and racially exclusionary social practices meant many could not bring or start families easily. The community was a foundational part of mid-century California life, especially in cities like Stockton, San Francisco, and Los Angeles."
  },

  "tagalog": {
    label: "Tagalog",
    definition: "One of the major languages of the Philippines, and the basis for Filipino, the country\u2019s national language. Tagalog is spoken by tens of millions of people in the Philippines and throughout the Filipino diaspora. Many words in Filipino American daily life and food culture are Tagalog in origin."
  },

  "ampalaya": {
    label: "Ampalaya",
    definition: "The Tagalog word for bitter melon (also called bitter gourd), a green ridged vegetable that is a staple of Filipino cooking and traditional medicine. Sugar Pie DeSanto's birth name, Umpeylia, was derived from this word, in honor of her Filipino grandmother."
  },

  /* ============================
     Country music vocabulary
     ============================ */

  "hillbilly": {
    label: "Hillbilly music",
    definition: "An older marketing term used by record labels from the 1920s through the 1940s for the rural Southern white music that would later be rebranded as country music. The term is now generally considered derogatory, but it was used neutrally and even proudly within the industry of the time. Hank Williams was sometimes called the \u201cHillbilly Shakespeare.\u201d"
  },

  "anglo-celtic": {
    label: "Anglo-Celtic ballad tradition",
    definition: "The folk song tradition brought to the American South by Scotch-Irish, English, and Welsh immigrants beginning in the 18th century. These ballads, often telling stories about love, loss, and death using vivid natural imagery, settled deepest in Appalachia and the rural South, where they shaped the songwriting style that would become country music. The lyrical structure of \u201cI\u2019m So Lonesome I Could Cry\u201d draws from this tradition."
  },

  "steel-guitar": {
    label: "Steel guitar",
    definition: "A guitar played horizontally, with the strings raised above the body, played with a metal slide that lets the player smoothly glide between pitches. Two main types: lap steel (held in the lap) and pedal steel (mounted on a stand, with foot pedals to change tunings). The crying, sliding quality of the steel guitar is one of the most recognizable sounds in country music. Jerry Byrd played the steel guitar part on \u201cI\u2019m So Lonesome I Could Cry.\u201d"
  },

  "fiddle": {
    label: "Fiddle",
    definition: "A violin played in folk, country, bluegrass, or Celtic styles, often with a more rhythmic and percussive technique than classical violin playing. The fiddle is a defining instrument of country music. Tommy Jackson played the fiddle part on \u201cI\u2019m So Lonesome I Could Cry.\u201d"
  },

  "grand-ole-opry": {
    label: "Grand Ole Opry",
    definition: "A weekly country music radio program broadcast from Nashville since 1925, the longest-running broadcast in American history. The Opry became country music\u2019s most important institution and a star-making venue. Membership in the Opry was treated as the highest honor in country music. Hank Williams joined in 1949 after the success of \u201cLovesick Blues,\u201d and was fired in August 1952 for habitual drunkenness."
  },

  "drifting-cowboys": {
    label: "The Drifting Cowboys",
    definition: "Hank Williams\u2019s touring band, formed in 1938 and continuing in various lineups throughout his career. The most famous edition (1949 onward) included Bob McNett, Hillous Butrum, Jerry Rivers, and Don Helms. The Drifting Cowboys did not, however, play on \u201cI\u2019m So Lonesome I Could Cry,\u201d which was recorded with a different group of session musicians in Cincinnati."
  },

  "luke-the-drifter": {
    label: "Luke the Drifter",
    definition: "A pseudonym Hank Williams used for a series of recordings of recitations and moralistic spoken-word songs, often with religious themes. Williams\u2019s label MGM thought these would not appeal to honky-tonk audiences and so released them under the alter ego. \u201cI\u2019m So Lonesome I Could Cry\u201d was originally written as a Luke the Drifter spoken-word piece before friends convinced Williams to sing it instead."
  },

  "honky-tonk": {
    label: "Honky-tonk",
    definition: "A style of country music developed in the 1940s and 1950s for small Southern bars (also called honky-tonks), characterized by uptempo dance rhythms, prominent steel guitar and fiddle, and lyrics about drinking, heartbreak, and working-class life. Williams was a master of the form, even as \u201cI\u2019m So Lonesome I Could Cry\u201d slows the honky-tonk tradition down to a near-stop."
  },

  "rufus-payne": {
    label: "Rufus \u201cTee Tot\u201d Payne",
    definition: "An African American street musician (1884\u20131939) who taught Hank Williams blues, guitar, and singing during Williams\u2019s childhood in Alabama. Born on the Payne Plantation in Sandy Ridge, Lowndes County, Alabama, raised in New Orleans, returned to Alabama in 1915. Met Williams in Georgiana around 1933. Williams\u2019s mother fed Payne in exchange for the lessons. They sat under the front porch of the Williams house, out of sight, to avoid social trouble across the color line. Williams said in 1951 that Payne gave him \u201call the music training I ever had.\u201d"
  },

  "spina-bifida": {
    label: "Spina bifida occulta",
    definition: "A congenital spinal condition in which one or more vertebrae fail to fully close around the spinal cord during fetal development. The \u201cocculta\u201d (hidden) form is often mild and asymptomatic, but it caused Hank Williams chronic back pain throughout his life. The pain led to dependence on alcohol and morphine, which contributed to his death at 29."
  },

  "mgm-records": {
    label: "MGM Records",
    definition: "An American record label, founded in 1946 as a subsidiary of the film studio Metro-Goldwyn-Mayer. Hank Williams signed with MGM in 1947 and recorded all of his major hits for the label, including \u201cI\u2019m So Lonesome I Could Cry.\u201d"
  },

  "acuff-rose": {
    label: "Acuff-Rose",
    definition: "A Nashville music publishing company founded in 1942 by Roy Acuff and Fred Rose. Acuff-Rose published Hank Williams\u2019s songs and largely shaped his career; Fred Rose was Williams\u2019s producer and effective business manager. The company\u2019s catalog became one of the most valuable in country music."
  },

  "jukebox": {
    label: "Jukebox",
    definition: "A coin-operated automatic record player, typically installed in bars, diners, and roadhouses, where customers could pay to play specific songs. Jukeboxes were a major commercial venue for popular music in the 1940s and 1950s. \u201cI\u2019m So Lonesome I Could Cry\u201d was relegated to the B-side of \u201cMy Bucket\u2019s Got a Hole in It\u201d in part because uptempo songs were preferred for jukebox play."
  },

  "race-records": {
    label: "Race records",
    definition: "A music industry marketing category from roughly 1920 to 1949, denoting recordings made by African American artists for African American audiences. Distinct from \u201chillbilly\u201d records (rural white music). The categories were rigid commercially even as the actual musical traditions overlapped considerably across racial lines. The term was replaced in 1949 by \u201crhythm and blues.\u201d"
  },

  "country-music-hall-of-fame": {
    label: "Country Music Hall of Fame",
    definition: "An institution in Nashville, Tennessee, that honors country music\u2019s most significant artists, songwriters, executives, and other contributors. Inductees are elected annually by a panel of country music professionals. Hank Williams was one of three artists in the inaugural class of 1961, alongside Jimmie Rodgers and Fred Rose."
  },

  "pulitzer-prize-music": {
    label: "Pulitzer Prize Special Citation (Williams)",
    definition: "In 2010, the Pulitzer Board awarded Hank Williams a Special Citation for his \u201ccraftsmanship as a songwriter who expressed universal feelings with poignant simplicity and played a pivotal role in transforming country music into a major musical and cultural force in American life.\u201d One of the very few times the Pulitzer has recognized a country songwriter."
  },

  "appalachia": {
    label: "Appalachia",
    definition: "A cultural region of the eastern United States, comprising parts of the Appalachian mountain range from western New York to northern Georgia and Alabama. Appalachia developed a distinctive folk culture rooted in Scotch-Irish, English, and African American traditions, and its music (ballads, fiddle tunes, mountain banjo styles) was a foundational element of country music."
  },

  /* ============================
     Music theory and analysis
     ============================ */

  "rhythm": {
    label: "Rhythm",
    definition: "The pattern of long and short sounds in time, organized around a steady underlying pulse. Rhythm is the most basic dimension of music: any time you tap your foot, clap, or nod your head along with a song, you are responding to its rhythm. A song's rhythm is shaped by its meter (how the beats are grouped), its tempo (how fast the beats go by), and the specific patterns of stresses and silences the musicians play on top of that grid. Different musical traditions emphasize rhythm differently: West African and Afro-diasporic musics treat rhythm as the central organizing element, often with several different rhythmic patterns layered at once, while a Western European art-music tradition like the classical waltz tends to keep one steady pattern running throughout. American popular music's distinctiveness owes much to the rhythmic complexity it inherited from West Africa through the blues, gospel, jazz, R&B, funk, hip hop, salsa, and other traditions."
  },

  "dynamics": {
    label: "Dynamics",
    definition: "In music, dynamics are the loud and soft levels of a sound, and the choices musicians make about how loudly or softly to play at any given moment. The everyday English meaning of \u201cdynamic\u201d (lively, energetic, full of change) overlaps with the musical meaning but is not the same: in music, dynamics are specifically about volume. A song with strong dynamic contrast might whisper one verse and shout the next; a song with flat dynamics stays at roughly the same volume throughout. Singers shape dynamics by leaning closer to or further from the microphone, by holding a note back or pushing it forward, by adding breath or taking it out; instrumentalists shape dynamics by hitting a drum harder, plucking a guitar string with more weight, or pulling a bow more firmly across a string. Dynamic choices are one of the most powerful expressive tools a performer has, and one that recording technology can amplify (a small dynamic shift at the microphone becomes a larger one in the listener\u2019s ear)."
  },

  "beat": {
    label: "Beat",
    definition: "The basic unit of time in a piece of music: the steady pulse you tap your foot to or count along with. A song\u2019s beats run at a particular tempo (how fast they go by) and group into a particular meter (how many beats are in each measure). In 4/4 meter, the most common in popular music, beats group in fours: ONE-two-three-four, ONE-two-three-four. In 3/4 meter (a waltz), they group in threes. The beats themselves can be subdivided: each big beat in 12/8 splits into three smaller pulses, and each big beat in 4/4 often splits into two or four. Listening for the beat is the entry point into almost every other rhythmic feature of a recording."
  },

  "offbeat": {
    label: "Offbeat",
    definition: "In musical usage, the offbeats are the weak parts of the measure: in 4/4 meter, the offbeats are beats 2 and 4 (where the snare drum usually hits in rock and R&B), or the small \u201cand\u201d pulses between the main beats (\u201cone-AND-two-AND\u201d). The everyday English meaning of \u201coffbeat\u201d (unusual, quirky, unexpected) is a metaphorical extension of the musical meaning, but in music the term is technical: it specifies which moments in a measure a player is hitting. Landing accents on the offbeats rather than the downbeats is one of the central techniques of African American popular music, distinguishing styles from blues and jazz to funk and reggae from the on-the-beat emphasis of marches and most European folk traditions."
  },

  "meter": {
    label: "Meter",
    definition: "The way a song's beats are grouped. A meter has a recurring number of beats per measure, with one beat (usually the first) feeling stronger than the others. The most common meter in popular music is 4/4 (four beats per measure). Waltzes are in 3/4 (three beats per measure). 12/8 is a slower, rocking meter common in soul ballads."
  },

  "twelve-eight": {
    label: "12/8 meter",
    definition: "A meter with four main beats per measure, where each main beat divides into three smaller pulses (so twelve total small pulses per measure). The result is a slow, swinging, rocking feel underneath the main pulse, like a heartbeat with a triplet pattern inside it. Slow gospel, doo-wop, and slow soul ballads are often in 12/8. \u201cA Change Is Gonna Come\u201d is in 12/8."
  },

  "four-four": {
    label: "4/4 meter",
    definition: "The most common meter in popular music: four beats per measure, with the strongest emphasis on beat one and a lighter emphasis on beat three. So common it is sometimes called \u201ccommon time.\u201d Most rock, pop, hip hop, and country songs are in 4/4."
  },

  "three-four": {
    label: "3/4 meter",
    definition: "A meter with three beats per measure, with the strongest emphasis on beat one. The waltz feel: ONE-two-three, ONE-two-three. Less common in popular music than 4/4, and when it appears it can feel old-fashioned, formal, or hesitant. Hank Williams\u2019s \u201cI\u2019m So Lonesome I Could Cry\u201d is in 3/4."
  },

  "tempo": {
    label: "Tempo",
    definition: "The speed of a song, measured in beats per minute (BPM). A slow ballad might be 60 BPM; a dance track might be 120 BPM or higher. Tempo is one of the first things that creates a song's emotional feel, before any lyric or harmony does its work."
  },

  "bpm": {
    label: "BPM (beats per minute)",
    definition: "The unit for measuring a song's tempo. 60 BPM is one beat per second, the speed of a resting heartbeat. 120 BPM is two beats per second, the speed of brisk walking. Most uptempo dance music sits between 110 and 140 BPM."
  },

  "key": {
    label: "Key",
    definition: "The tonal center of a song: the note (and the scale built on that note) that the music returns to and feels resolved on. Songs in the key of C major treat C as home; songs in B-flat major treat B-flat as home. Key is one of the most basic ways music creates a sense of stability and motion."
  },

  "major-key": {
    label: "Major key",
    definition: "A key based on the major scale, generally felt as bright, stable, or affirming. Most American popular songs are in major keys. \u201cA Change Is Gonna Come\u201d is in B-flat major."
  },

  "minor-key": {
    label: "Minor key",
    definition: "A key based on a minor scale, generally felt as darker, sadder, or more uncertain than a major key. Songs sometimes shift briefly into a minor key for moments of doubt or grief, even if the song overall is in a major key. The bridge of \u201cA Change Is Gonna Come\u201d shifts to G minor."
  },

  "melisma": {
    label: "Melisma",
    definition: "The vocal technique of singing a single syllable across multiple notes. Common in gospel, soul, R&B, and Arabic music. Sam Cooke\u2019s signature \u201cwhoa-whoa-whoa\u201d on the word \u201cknow\u201d in \u201cA Change Is Gonna Come\u201d is melisma. The term comes from the Greek for \u201csong\u201d and has been used for centuries to describe the technique in many musical traditions, sacred and secular."
  },

  "vocal-grain": {
    label: "Vocal grain",
    definition: "The roughness or texture in a singer\u2019s voice, beyond the pitch and the words. Some grain is natural to the voice; some can be controlled. Gospel and soul singers cultivate vocal grain as an expressive resource. The catch in Sam Cooke\u2019s voice on certain syllables is grain. So is the rasp in Howlin\u2019 Wolf or Janis Joplin."
  },

  "back-phrasing": {
    label: "Back-phrasing",
    definition: "The vocal technique of singing slightly behind the underlying beat, then catching up. Used to create a sense of relaxation, exhaustion, hesitation, or emphasis. Frank Sinatra was famous for back-phrasing. Sam Cooke uses it throughout \u201cA Change Is Gonna Come\u201d to make the verses sound tired before the chorus catches up with conviction."
  },

  "bridge": {
    label: "Bridge",
    definition: "A contrasting middle section in a song, typically used once, between repetitions of the verse and chorus. The bridge often shifts to a different harmonic area, a different melody, and a different emotional register, before the song returns to familiar material. The bridge of \u201cA Change Is Gonna Come\u201d (\u201cThen I go to my brother\u201d) shifts the song from B-flat major to G minor for the only time."
  },

  "verse-chorus": {
    label: "Verse-chorus form",
    definition: "A common popular song structure in which alternating verses (with new lyrics each time) and a chorus (with the same lyrics each time) build the shape of the song. The chorus is usually the most memorable part and the part listeners will sing along to. Most pop, rock, R&B, and country songs use some version of verse-chorus form."
  },

  "arpeggio": {
    label: "Arpeggio",
    definition: "The notes of a chord played one at a time, in sequence, rather than all together. The word comes from the Italian \u201carpa\u201d (harp), because harpists naturally play chords as arpeggios. The strings in the bridge of \u201cA Change Is Gonna Come\u201d play a sustained G minor arpeggio: the three notes of the chord laid out in time."
  },

  "harmony": {
    label: "Harmony",
    definition: "The chords of a song and the way they relate to each other. Harmony is what creates a sense of forward motion in music: a chord that sounds unresolved pulls toward a chord that sounds resolved. Most popular music harmony moves between three or four core chords in a key, with occasional excursions to other chords for emotional emphasis."
  },

  "melody": {
    label: "Melody",
    definition: "The main musical line of a song, typically the part the singer sings or the most prominent instrumental phrase. Melody is what most people remember and hum to themselves after a song is over."
  },

  "cuerpo": {
    label: "Cuerpo",
    definition: "Spanish for \u201cbody.\u201d The first section of a typical salsa song, where the lead singer presents the song\u2019s main lyrics over a moderately energetic groove. The cuerpo presents the song. After the cuerpo, the song moves into the montuno section, which is where the band stretches out."
  },

  "cascara": {
    label: "C\u00e1scara",
    definition: "A salsa percussion pattern played on the metal shells of the timbales (with sticks), used during the calmer cuerpo section of a song. When the song moves into the louder, more energetic montuno section, the timbales player typically switches from c\u00e1scara to playing the mambo bell."
  },

  "mambo-bell": {
    label: "Mambo bell",
    definition: "A large cowbell played by the timbales player during the louder, more energetic sections of a salsa song (typically the montuno section). The switch from c\u00e1scara on the drum shells to the mambo bell signals to dancers and the rest of the band that the song has shifted gears."
  },

  "mambo-section": {
    label: "Mambo (instrumental section)",
    definition: "Within a salsa song, an instrumental break in which the horn section (trumpets, trombones, saxophones) takes the lead with a written-out figure or solo, while the singer pauses. The mambo punctuates the montuno and gives the band a chance to stretch out. (Note: the same word \u201cmambo\u201d also refers to a separate Cuban dance music genre, named after this kind of section.)"
  },

  "three-two-clave": {
    label: "3-2 son clave",
    definition: "The most common form of son clave: a two-bar pattern with three accented beats in the first bar and two accented beats in the second bar. The asymmetry creates rhythmic tension and release. The same pattern is the basis of Bo Diddley\u2019s rock-and-roll beat. Most classic salsa is in either 3-2 or 2-3 son clave."
  },

  /* ============================
     Blues and R&B form vocabulary
     ============================ */

  "twelve-bar-blues": {
    label: "12-bar blues",
    definition: "One of the most influential musical forms in American history. Each \u201cverse\u201d is twelve measures (units of four beats each) long, organized into three four-measure phrases. The chords follow a specific pattern based on the I, IV, and V chords of the home key. The whole 12-bar pattern then repeats throughout the song. Once you can hear it, you can hear it in thousands of songs: most blues, much early rock and roll, much country, much jazz, much R&B."
  },

  "measure": {
    label: "Measure (or bar)",
    definition: "The basic unit of time in written music: a group of beats that recurs throughout a song. In 4/4 time, each measure has four beats. \u201cBar\u201d and \u201cmeasure\u201d mean the same thing and are often used interchangeably. Most popular songs are organized in groups of 4, 8, 12, or 16 measures."
  },

  "tonic": {
    label: "Tonic (the I chord)",
    definition: "The home chord of a song's key: the chord built on the first note of the scale. The tonic is where the song feels most resolved and at rest. In the key of C major, the tonic is C. In the key of E minor, the tonic is E minor. Songs typically begin and end on the tonic."
  },

  "subdominant": {
    label: "Subdominant (the IV chord)",
    definition: "The chord built on the fourth note of the scale, four scale steps above the tonic. In the key of C, the IV chord is F. In a 12-bar blues, the move from the tonic (I) to the subdominant (IV) in measure 5 is the first major harmonic shift, and the listener feels it as the song moving away from home before returning."
  },

  "dominant": {
    label: "Dominant (the V chord)",
    definition: "The chord built on the fifth note of the scale, five scale steps above the tonic. In the key of C, the V chord is G. The dominant has the strongest pull back to the tonic of any chord in the key, so it is often used at the end of phrases to set up the return home. In a 12-bar blues, the V chord typically appears in measure 9 and creates the climax of the 12-bar cycle."
  },

  "horn": {
    label: "Horn (jazz/blues/R&B usage)",
    definition: "In jazz, blues, R&B, soul, and related styles, \u201chorn\u201d is a catch-all term for any wind or brass instrument played by blowing: trumpet, cornet, trombone, tuba, saxophone, clarinet, flute, and so on. A \u201chorn player\u201d in this sense is anyone who plays one of those instruments, and the \u201chorn section\u201d of a band is the group of those players collectively. This is different from the everyday word \u201chorn,\u201d which sometimes refers specifically to the French horn (the curled brass orchestral instrument heard in classical music and film scores). When a jazz writer calls Louis Armstrong the most rhythmically inventive horn player in American music, they mean he was playing the cornet (and later the trumpet), not the French horn."
  },

  "horn-stabs": {
    label: "Horn stabs",
    definition: "Short, punchy figures played by the horn section in R&B, soul, and funk arrangements, typically inserted between vocal phrases. The horns \u201cstab\u201d in for one or two beats, then drop out, leaving the singer foregrounded. Horn stabs were a defining feature of the Chess Records sound in the 1960s and of Stax, Motown, and other R&B production styles."
  },

  "chess-house-band": {
    label: "Chess house band",
    definition: "The studio musicians employed by Chess Records in Chicago in the 1960s to play on most of the label\u2019s recordings. The band included future Earth, Wind & Fire members Maurice White (drums), Louis Satterfield (trombone), Charles Handy (trumpet), and Don Myrick (alto saxophone), all jazz musicians who originally played as the Jazzmen and the Pharaohs in Chicago. Their jazz training shaped the harmonic sophistication of even the simplest Chess R&B records."
  },

  /* ============================
     Country and folk form vocabulary
     ============================ */

  "simple-verse-form": {
    label: "Simple verse form",
    definition: "A song structure with only one repeating musical idea: a single verse, repeated multiple times with different lyrics each time. Also called strophic form. There is no chorus, no bridge, no contrasting section. The form is common in folk ballads, hymns, and country music, and was the dominant popular song form before verse-chorus structures took over in the mid-20th century. Hank Williams\u2019s \u201cI\u2019m So Lonesome I Could Cry\u201d is in simple verse form."
  },

  "strophic-form": {
    label: "Strophic form",
    definition: "Another name for simple verse form: a song with one repeating musical idea (called a \u201cstrophe\u201d) used for each verse with different lyrics. The term comes from the Greek \u201cstrophe,\u201d meaning a turn or stanza. Most folk ballads, most hymns, and many older popular songs use strophic form."
  },

  "instrumental-verse": {
    label: "Instrumental verse",
    definition: "A repetition of the song\u2019s verse structure played by an instrument instead of being sung. In country music, the instrumental verse is often played by the steel guitar or the fiddle, paraphrasing the melody the singer would otherwise have sung. In \u201cI\u2019m So Lonesome I Could Cry,\u201d two of the verses are played as instrumentals on guitar."
  },

  "yodeling": {
    label: "Yodeling",
    definition: "A vocal technique of rapidly switching between chest voice (the lower, fuller register most people speak in) and head voice or falsetto (the lighter, higher register), producing a distinctive break in the sound. Originally a feature of Alpine folk music in central Europe, yodeling came to American popular music through Jimmie Rodgers in the 1920s and became a defining technique of country music. Hank Williams\u2019s catch on words like \u201ccry\u201d uses a brief, partial yodel."
  },

  "i-iv-v": {
    label: "I-IV-V progression",
    definition: "The most common chord progression in Western popular music, using the chords built on the first (tonic), fourth (subdominant), and fifth (dominant) notes of the scale. In the key of E major, the I-IV-V chords are E, A, and B. Most blues, much country, much folk, and much early rock and roll use the I-IV-V as the harmonic foundation. \u201cI\u2019m So Lonesome I Could Cry\u201d uses just these three chords."
  },

  "waltz": {
    label: "Waltz",
    definition: "A dance and musical form in 3/4 meter, with three beats per measure and a strong emphasis on beat one (ONE-two-three, ONE-two-three). The waltz originated in 18th-century European folk music and became the dominant ballroom dance of the 19th century. In country music, the slow waltz tempo is associated with sentimental ballads. Hank Williams\u2019s \u201cI\u2019m So Lonesome I Could Cry\u201d is a slow waltz."
  }
,

  /* ============================
     San Francisco history
     ============================ */

  "fillmore-district": {
    label: "Fillmore District",
    definition: "A multiethnic neighborhood in central San Francisco, just west of downtown. From the 1940s through the 1960s, the Fillmore was San Francisco\u2019s primary Black cultural center and one of the most important West Coast jazz and R&B scenes. It earned the nickname \u201cHarlem of the West\u201d. The neighborhood was largely destroyed by city redevelopment policies in the 1960s and 1970s, displacing thousands of Black residents."
  },

  "harlem-of-the-west": {
    label: "Harlem of the West",
    definition: "The popular nickname for San Francisco\u2019s Fillmore District at its mid-20th-century peak, when the neighborhood\u2019s two dozen jazz clubs and Black-owned businesses drew comparisons to Harlem in New York. Billie Holiday, Charlie Parker, Dizzy Gillespie, John Coltrane, and many others played the Fillmore. The neighborhood\u2019s decline reflected both the broader story of postwar American urban renewal and the specific politics of Black displacement in San Francisco."
  },

  "executive-order-9066": {
    label: "Executive Order 9066",
    definition: "The order signed by President Franklin Roosevelt on February 19, 1942, authorizing the forced removal and incarceration of approximately 120,000 people of Japanese descent (most of them U.S. citizens) from the West Coast during World War II. The Japanese American residents of San Francisco\u2019s Fillmore District were forcibly relocated. Their homes and businesses were quickly occupied by African Americans arriving for defense industry work, transforming the neighborhood\u2019s demographic composition."
  },

  "urban-renewal": {
    label: "Urban renewal",
    definition: "The post-World War II federal and municipal policy of demolishing and rebuilding city neighborhoods, often labeled as \u201cslum clearance.\u201d In practice, urban renewal disproportionately targeted Black neighborhoods, displacing residents and destroying community institutions. James Baldwin called it \u201cNegro removal.\u201d The Fillmore District was largely destroyed by urban renewal beginning in the 1960s."
  },

  "shipyards": {
    label: "Wartime shipyards",
    definition: "During World War II, U.S. shipyards employed millions of workers building Liberty Ships, destroyers, and other vessels for the war effort. The largest concentration was on the West Coast (the Bay Area, Los Angeles, Portland, Seattle), but Gulf Coast yards in Mobile, Alabama and elsewhere also expanded dramatically. The labor demand drew massive Black migration out of the rural South to these wartime industrial cities, reshaping the demographics of places like Oakland, Richmond, San Francisco, Mobile, and Portland. This wartime migration is sometimes called the second Great Migration."
  },

  /* ============================
     Chess Records and the R&B industry
     ============================ */

  "chess-records": {
    label: "Chess Records",
    definition: "An independent Chicago record label founded in 1950 by Polish-Jewish immigrant brothers Leonard and Phil Chess. Chess was the most important Black music label of the postwar era, with a roster including Muddy Waters, Howlin\u2019 Wolf, Chuck Berry, Bo Diddley, Etta James, Little Walter, Buddy Guy, and Sugar Pie DeSanto. The label\u2019s blues, R&B, and rock and roll catalog shaped global popular music."
  },

  "checker-records": {
    label: "Checker Records",
    definition: "A subsidiary of Chess Records, founded in 1952. Many of Chess\u2019s biggest hits came out on the Checker imprint, including singles by Bo Diddley, Little Walter, and Sugar Pie DeSanto. \u201cI Don\u2019t Wanna Fuss\u201d was released on Checker."
  },

  "answer-song": {
    label: "Answer song",
    definition: "A song that responds to or comments on another popular song, often from a different perspective (frequently the perspective of the gendered other in the original). DeSanto\u2019s \u201cSlip-In Mules (No High Heel Sneakers)\u201d was an answer to Tommy Tucker\u2019s 1964 hit \u201cHi-Heel Sneakers.\u201d The answer song tradition was a notable feature of mid-20th-century R&B."
  },

  "northern-soul": {
    label: "Northern Soul",
    definition: "A British working-class subculture that emerged in the late 1960s in the cities of northern England, centered on collecting and dancing to obscure American R&B and soul records of the early-to-mid 1960s. Northern Soul DJs prized records that had not been mainstream U.S. hits, like Sugar Pie DeSanto\u2019s. The scene revived the careers of many under-recognized American artists."
  },

  "ready-steady-go": {
    label: "Ready Steady Go!",
    definition: "A British music television show that ran from 1963 to 1966, broadcasting live performances by major British and American pop and R&B artists. The show was central to the British Invasion era and to Britain\u2019s discovery of American R&B. Sugar Pie DeSanto performed \u201cI Don\u2019t Wanna Fuss\u201d on the show in 1964."
  },

  "american-folk-blues-festival": {
    label: "American Folk Blues Festival",
    definition: "A series of touring concerts that brought American blues and R&B musicians to European audiences from 1962 through the 1970s, organized by German promoters Horst Lippmann and Fritz Rau. The tours were instrumental in establishing serious European audiences for American Black music. DeSanto toured with the festival in 1964, alongside Howlin\u2019 Wolf, Sonny Boy Williamson, and Lightnin\u2019 Hopkins."
  },

  "staff-songwriter": {
    label: "Staff songwriter",
    definition: "A songwriter employed by a publishing company or record label to write songs for other artists on the company\u2019s roster, typically working in shared writer rooms (the most famous example being Motown\u2019s Holland-Dozier-Holland team). DeSanto became a staff songwriter at Chess in the mid-1960s, writing songs for Fontella Bass, Billy Stewart, Minnie Riperton, and others, an unusual role for a woman in that era."
  },

  "novelty-act": {
    label: "Novelty act",
    definition: "A music industry category for performers whose appeal was treated as based on something unusual or eye-catching about their presentation rather than the seriousness of their music. The label was often used to dismiss women, performers of mixed racial heritage, or artists with theatrical stage presences. \u201cNovelty\u201d framing kept many artists out of the institutional recognition (Hall of Fame inductions, prestige reissues) that their actual musical contributions warranted."
  },

  /* ============================
     R&B and soul vocabulary
     ============================ */

  "house-band": {
    label: "House band",
    definition: "A group of session musicians employed by a record label or studio to play on most of the label\u2019s recordings. Famous house bands include the Funk Brothers (Motown), Booker T. and the M.G.s (Stax), the Wrecking Crew (Los Angeles), and the Chess house band that played behind Sugar Pie DeSanto, Etta James, and Muddy Waters."
  },

  "session-musician": {
    label: "Session musician",
    definition: "A professional musician hired to play on a specific recording session, typically working across many different artists\u2019 records. Session musicians are usually not credited on the album cover but are essential to the actual sound of the record. Maurice White, who later co-founded Earth, Wind & Fire, was a Chess session drummer."
  },

  /* ============================
     Framing reading: history and concepts
     ============================ */

  "middle-passage": {
    label: "Middle Passage",
    definition: "The forced sea voyage that brought enslaved Africans to the Americas as part of the transatlantic slave trade, from the sixteenth through the nineteenth centuries. The crossing took roughly six to eight weeks, and the death rate was catastrophic. The Middle Passage is the founding violence behind the African presence in the Americas, including the African American foundational musical traditions this course studies."
  },

  "redlining": {
    label: "Redlining",
    definition: "The 20th-century U.S. practice in which banks, insurance companies, and the federal government refused mortgages and other financial services to Black neighborhoods, marking them on maps in red as too risky to lend to. Redlining created and entrenched residential segregation in American cities and is one of the major reasons for the Black-white wealth gap that persists today. It also concentrated Black musical communities in particular neighborhoods, which shaped where the music came from."
  },

  "scots-irish": {
    label: "Scots-Irish",
    definition: "Protestants from the Scottish Lowlands and Northern Ireland who migrated to North America beginning in the eighteenth century and largely settled in the Appalachian Mountains. They brought with them a tradition of unaccompanied ballad singing and fiddle playing that, in dialogue with Black musical practice in the same region, became one of the roots of country music."
  },

  "aids-crisis": {
    label: "AIDS crisis",
    definition: "The emergence of HIV/AIDS as an epidemic in the United States starting in 1981, which devastated communities of gay men, IV drug users, and people of color through the 1980s and 1990s. Federal inaction and social stigma made the crisis worse. The disease killed many of the artists and audiences who had built the disco era and the early 1980s dance music scene, including Sylvester, Patrick Cowley, and many others."
  },

  "intersectionality": {
    label: "Intersectionality",
    definition: "A framework, named by legal scholar Kimberl\u00e9 Crenshaw in 1989, for thinking about how multiple social identities (race, gender, class, sexuality, immigration status, ability, and others) overlap and combine in any one person\u2019s life. The point of the framework is that you cannot understand a Black woman\u2019s experience by looking at race and gender separately; they are interlocking. Intersectionality is now standard vocabulary across the humanities and social sciences."
  },

  /* ============================
     Framing reading: genres
     ============================ */

  "blues": {
    label: "Blues",
    definition: "An African American musical tradition that emerged in the late nineteenth and early twentieth century in the rural South, with roots in West African musical practice, work songs, and spirituals. The blues uses specific harmonic structures (most famously the 12-bar blues) and a vocal style built around bent notes, slides, and improvised lyrics about everyday life and hardship. The blues is foundational to nearly all American popular music that came after it: jazz, R&B, rock and roll, country, soul, and hip hop all draw on blues vocabulary."
  },

  "jazz": {
    label: "Jazz",
    definition: "An African American musical tradition that emerged in New Orleans in the late 19th and early 20th centuries from the blending of blues, ragtime, brass-band marches, spirituals and hymns, and the layered rhythmic practices of Afro-Caribbean music. Jazz is built around improvisation: musicians take turns playing solos that respond to and develop a song\u2019s underlying chord progression. As both a popular and an art music, jazz dominated American popular culture from the 1920s through the 1940s and remains a foundational influence on R&B, soul, hip hop, and Latin popular music."
  },

  "country-music": {
    label: "Country music",
    definition: "An American popular music tradition rooted largely in the Scots-Irish ballad tradition of the Appalachian Mountains, in dialogue with Black musical practice in the same region. Country music took commercial form in the 1920s with figures like the Carter Family and Jimmie Rodgers, was originally marketed as \u201chillbilly\u201d music and rebranded as \u201ccountry and western\u201d in the late 1940s, and became centered on the Nashville recording industry by the 1950s. Hank Williams is widely considered country music\u2019s first superstar. The genre continues to evolve through subgenres including honky-tonk, bluegrass, outlaw country, and contemporary country pop."
  },

  "hip-hop": {
    label: "Hip hop",
    definition: "A musical and cultural movement that emerged in the 1970s in the South Bronx of New York, created primarily by Black, Puerto Rican, and Caribbean American young people. Hip hop centers four traditional elements: DJing, MCing (rapping), graffiti, and breakdancing. As a musical form, it is built on rhythm, sampling, and spoken-word vocal performance, and it has become the dominant popular music of the twenty-first century globally."
  },

  "punk": {
    label: "Punk",
    definition: "A musical and cultural movement that emerged in the mid-1970s in New York and London, characterized by short, fast, aggressive songs and a do-it-yourself ethos opposed to mainstream commercial music. Often associated with white working-class scenes, punk had Black originators (the band Death formed in Detroit in 1971; Pure Hell in Philadelphia around the same time) whose work was largely written out of the standard punk history."
  },

  "doo-wop": {
    label: "Doo-wop",
    definition: "A vocal harmony style that emerged in African American and Italian American urban neighborhoods in the late 1940s and 1950s, often sung by groups on street corners with no instruments. The name comes from nonsense syllables (\u201cdoo wop, doo wop\u201d) used as backing vocals. Doo-wop was a major source of early rock and roll and shaped the sound of pop singing across the 1950s and 1960s."
  },

  "mambo": {
    label: "Mambo",
    definition: "A Cuban dance music style that developed in the 1940s, combining Cuban son and danz\u00f3n with the harmonic and arranging vocabulary of American big-band jazz. The mambo era of postwar New York, centered on the Palladium Ballroom, brought together Cuban, Puerto Rican, and African American musicians and audiences and laid the groundwork for what would later become salsa."
  },

  "boogaloo": {
    label: "Latin boogaloo",
    definition: "A short-lived but influential New York musical style of the mid-to-late 1960s, made primarily by young Puerto Rican and African American musicians, that combined Latin rhythms with R&B, soul, and English-language vocals. Joe Bataan and Pete Rodriguez are central figures. Boogaloo was a self-consciously bicultural music: it sounded like the actual neighborhoods that made it."
  },

  "latin-soul": {
    label: "Latin soul",
    definition: "An umbrella term for music made in 1960s New York that combined Latin rhythms with African American soul and R&B vocal styles, sung primarily in English. Latin soul overlaps with boogaloo and is closely associated with figures like Joe Bataan, who recorded for Fania Records and was hailed as the \u201cKing of Latin Soul.\u201d"
  },

  "tejano": {
    label: "Tejano music",
    definition: "Mexican American music developed along the Texas-Mexico border, with roots reaching back to the nineteenth century and a commercial peak in the 1980s and 1990s. Tejano combines accordion-based traditions (conjunto), polka, country, pop, and regional Mexican styles. Selena Quintanilla brought Tejano to mainstream American pop audiences before her death in 1995."
  },

  "reggaeton": {
    label: "Reggaeton",
    definition: "A Spanish-language popular music style that developed in Panama and Puerto Rico in the 1990s, drawing on Jamaican dancehall, hip hop, and Latin musical traditions. Reggaeton is built on a specific drum pattern called \u201cdembow,\u201d adapted from a Jamaican dancehall riddim of the same name. By the 2010s, reggaeton had become globally dominant, with artists like Daddy Yankee, Bad Bunny, and Karol G."
  },

  "latin-trap": {
    label: "Latin trap",
    definition: "A contemporary Spanish-language popular music style that emerged in the 2010s, applying the production aesthetic of Atlanta trap (heavy 808 bass, hi-hat rolls, dark synths) to Latin American themes and Spanish lyrics. Closely connected to reggaeton, with major figures including Bad Bunny, Anuel AA, and Ozuna. Latin trap is one of the most-streamed genres globally in the 2020s."
  },

  "dancehall": {
    label: "Dancehall",
    definition: "A Jamaican popular music style that emerged in the late 1970s and 1980s, growing out of reggae but with sparser, more drum-and-bass-driven production and a vocal style closer to rapping than singing. Dancehall is one of the direct sources of reggaeton, and its rhythms and vocal techniques have shaped hip hop and global pop."
  },

  "k-pop": {
    label: "K-pop",
    definition: "A category of South Korean popular music that became globally influential in the 2010s. K-pop typically combines highly produced pop, hip hop, and electronic dance vocabulary with elaborate choreography, strong visual identities, and tightly managed group structures (often called \u201cidol groups\u201d). Major figures include BTS, BLACKPINK, and many others. K-pop\u2019s relationship to Asian American identity is complicated: it is not made by Asian Americans, but Asian American audiences have been central to its U.S. success."
  },

  "turntablism": {
    label: "Turntablism",
    definition: "The art of using two or more turntables and a mixer as a musical instrument, manipulating records through scratching, beat juggling, and other techniques. Turntablism grew out of hip hop DJing in the 1970s and developed into its own performance tradition in the 1980s and 1990s, with Filipino American DJs in the San Francisco Bay Area, including the Invisibl Skratch Piklz, becoming central to the form globally."
  },

  /* ============================
     Framing reading: institutions and projects
     ============================ */

  "brill-building": {
    label: "Brill Building",
    definition: "An office building at 1619 Broadway in midtown Manhattan that became a center of professional songwriting in the late 1950s and early 1960s. \u201cBrill Building\u201d is shorthand for a system in which staff songwriters, many of them Jewish American (Carole King, Gerry Goffin, Burt Bacharach, Jerry Leiber and Mike Stoller, others), wrote songs to be recorded by other artists. Many hits of the era for the Drifters, the Ronettes, Aretha Franklin, and others came out of this system."
  },

  "eighty-eight-rising": {
    label: "88rising",
    definition: "An American media and music company founded in 2015 by Sean Miyashiro, focused on platforming Asian and Asian American artists in the global music market. 88rising operates as a record label, management company, and festival producer (Head in the Clouds), and has been central to a wave of Asian and Asian American artists reaching global audiences in the late 2010s and 2020s, including Rich Brian, NIKI, and Joji."
  },

  "invisibl-skratch-piklz": {
    label: "Invisibl Skratch Piklz",
    definition: "A San Francisco-based DJ crew formed in the early 1990s, made up of mostly Filipino American DJs including Q-Bert, Mix Master Mike, and DJ Apollo. The Piklz were foundational to the development of turntablism as an art form, and to Bay Area hip hop more broadly. Their technique-driven approach to DJing influenced a global generation of turntablists."
  },

  "halluci-nation": {
    label: "The Halluci Nation",
    definition: "An Indigenous electronic music group based in Ottawa, Canada, formed in 2007 as A Tribe Called Red and renamed The Halluci Nation in 2021. Currently a duo (Bear Witness and 2oolman), the group combines powwow drumming, vocals, and dance music genres including dubstep and hip hop, while engaging directly with Indigenous activism and the Idle No More movement."
  },

  "cowboy-carter": {
    label: "Cowboy Carter",
    definition: "Beyonc\u00e9\u2019s 2024 country album, which engages directly with the systematic erasure of Black contributions from country music. The album includes collaborations with Black country artists across generations (Linda Martell, Willie Jones, Tanner Adell, Brittney Spencer, Tiera Kennedy, Reyna Roberts) alongside Willie Nelson and Dolly Parton, and was both a commercial success and a public reckoning with country music\u2019s racial history."
  },

  /* ============================
     Framing reading: artists
     ============================ */

  "joe-bataan": {
    label: "Joe Bataan (b. 1942)",
    definition: "Singer, pianist, and bandleader of Filipino and African American heritage, raised in Spanish Harlem and central to the Latin boogaloo and Latin soul scenes of 1960s and 1970s New York. Hailed as the \u201cKing of Latin Soul,\u201d Bataan recorded for Fania Records and later coined the term \u201csalsoul\u201d for his fusion of salsa, soul, and funk."
  },

  "deford-bailey": {
    label: "DeFord Bailey (1899\u20131982)",
    definition: "African American harmonica player who was one of the original stars of the Grand Ole Opry, joining the radio show in 1927. Bailey was the first Black performer on the Opry and one of its most popular early artists. He was abruptly fired in 1941, an act widely understood as racially motivated, and his contributions to country music were largely written out of the standard history until recent reckoning."
  },

  "charley-pride": {
    label: "Charley Pride (1934\u20132020)",
    definition: "African American country singer who became one of country music\u2019s biggest stars of the late 1960s and 1970s, with twenty-nine number-one country hits. Pride\u2019s success in a genre that was overwhelmingly marketed as white was a significant break in the industry\u2019s racial framing, though it did not lead to broad change. He was inducted into the Country Music Hall of Fame in 2000."
  },

  "rhiannon-giddens": {
    label: "Rhiannon Giddens (b. 1977)",
    definition: "African American banjoist, fiddler, and singer who has been central to the contemporary reckoning with country and folk music\u2019s Black roots. A founding member of the Carolina Chocolate Drops, she has won a MacArthur Fellowship, two Grammys, and a Pulitzer Prize for music. Her scholarship and performance practice have helped restore figures like Black banjo players who were systematically erased from the genre\u2019s standard history."
  },

  "jim-pepper": {
    label: "Jim Pepper (1941\u20131992)",
    definition: "American jazz saxophonist of Kaw and Muscogee heritage, born in Salem, Oregon. A pioneer of jazz-rock fusion in the late 1960s, Pepper combined elements of Native American music with jazz throughout his career. His 1969 recording \u201cWitchi Tai To,\u201d adapted from a peyote song he had learned from his grandfather, reached the Billboard Hot 100 and remains one of the most recorded compositions to draw on Native American musical traditions."
  },

  "frank-ocean": {
    label: "Frank Ocean (b. 1987)",
    definition: "American singer-songwriter and producer, originally part of the hip hop collective Odd Future, whose albums Channel Orange (2012) and Blonde (2016) have been widely influential in contemporary R&B and pop. In 2012, Ocean publicly disclosed that his first love had been a man, a moment widely seen as a watershed for openness about queer identity in hip hop and R&B."
  },

  "mitski": {
    label: "Mitski (b. 1990)",
    definition: "American singer-songwriter, born in Japan to a Japanese mother and an American father, whose work in indie rock and art-pop became widely influential in the late 2010s and 2020s. Albums including Puberty 2 (2016), Be the Cowboy (2018), and The Land Is Inhospitable and So Are We (2023) have shaped contemporary indie rock. Mitski has expressed ambivalence about labels like \u201cAsian American\u201d and describes herself as \u201chalf Japanese, half American but not fully either.\u201d"
  },

  "h-e-r": {
    label: "H.E.R. (b. 1997)",
    definition: "Stage name of Gabriella Sarmiento Wilson, an American R&B singer-songwriter and multi-instrumentalist of Filipino and African American heritage, raised in Vallejo, California. She has won five Grammy Awards and an Academy Award (for \u201cFight for You,\u201d from the 2021 film Judas and the Black Messiah). Her 2020 song \u201cI Can\u2019t Breathe\u201d was a direct response to police violence against Black Americans and won the Grammy for Song of the Year."
  },

  "selena": {
    label: "Selena Quintanilla (1971\u20131995)",
    definition: "Mexican American singer who became the most popular Tejano artist of the early 1990s and a major crossover figure in Latin music. Born and raised in Texas, she fronted Selena y Los Dinos and built an audience that crossed Tejano, regional Mexican, and English-language pop. She was murdered by the president of her fan club in 1995, just before the release of her first English-language album. Her cultural footprint has only grown in the decades since."
  },

  /* ============================
     Module 2: Roots and routes of Black popular music
     ============================ */

  "spirituals": {
    label: "Spirituals",
    definition: "Religious songs created by enslaved African Americans, drawing on West African musical practice, Christian hymn texts, and the conditions of life under slavery. Spirituals were sung in worship, in fields, and in coded communication, and they used call-and-response, layered rhythm, and bent vocal notes that would later shape the blues, gospel, and almost every American popular form to follow. Songs like \u201cGo Down, Moses,\u201d \u201cWade in the Water,\u201d and \u201cSwing Low, Sweet Chariot\u201d are spirituals."
  },

  "west-african-music": {
    label: "West African musical practice",
    definition: "A broad set of musical traditions from the regions of West Africa from which most enslaved people were trafficked to the Americas. These traditions emphasize layered, polyrhythmic percussion, call-and-response between a leader and a group, the use of voice as a percussive instrument, the close relationship between singing and speaking, and music as something a community makes together rather than something a few professionals perform for an audience. Almost every formal feature of Black popular music in the United States, from the blues forward, has roots in these practices."
  },

  "field-hollers": {
    label: "Field hollers",
    definition: "Solo, unaccompanied calls sung by enslaved and later sharecropping African Americans while working in the fields. A holler typically used long, sustained notes, slides between pitches, and a half-sung half-shouted vocal quality, sometimes to communicate across a distance and sometimes simply to make the work bearable. Field hollers are one of the direct musical sources of the blues."
  },

  "ring-shouts": {
    label: "Ring shouts",
    definition: "A counterclockwise circle dance combined with call-and-response singing, hand-clapping, and foot-stamping, practiced by enslaved African Americans and their descendants in religious settings. The ring shout fused West African circle-dance and ancestor-honoring traditions with Christian worship, and it is one of the earliest forms in which African musical practice was preserved and developed in North America. Many features of later Black popular music (the centrality of rhythm, the leader-group exchange, the ecstatic vocal performance) have roots here."
  },

  "reconstruction": {
    label: "Reconstruction",
    definition: "The period after the U.S. Civil War, roughly 1865 to 1877, when the federal government attempted to rebuild the defeated Southern states and integrate formerly enslaved Black Americans into civic and political life. Black Southerners briefly held office, voted in large numbers, and built schools and churches. Reconstruction ended with the federal withdrawal of troops in 1877, after which Southern white governments imposed Jim Crow laws and the systematic disenfranchisement and racial terror that followed. The blues took shape in the conditions Reconstruction failed to prevent."
  },

  "bent-notes": {
    label: "Bent notes",
    definition: "A vocal or instrumental technique in which a pitch is slid into, away from, or between the standard notes of the Western scale, producing the characteristic in-between pitches of the blues, gospel, and most Black popular music that came after them. On a guitar, you bend a note by pushing the string sideways while it sounds; with the voice, you slide the pitch with the muscles of the throat. Bent notes carry feeling that the fixed pitches of the piano cannot."
  },

  "juke-joints": {
    label: "Juke joints",
    definition: "Informal Black-run music venues, common in the rural South from roughly the 1920s onward, where Black audiences gathered to drink, dance, and hear live blues. Often roadhouses, converted homes, or rough wooden buildings on the outskirts of towns or plantations, juke joints existed outside the white-policed mainstream entertainment industry, and they were where most early blues musicians actually played. The recorded blues that reached white audiences through the race-records market was always a more polished version of what was happening in the joints."
  },

  "funk": {
    label: "Funk",
    definition: "A style of Black popular music that took shape in the mid-to-late 1960s, primarily through James Brown\u2019s shift from the backbeat-emphasis of soul to a heavy emphasis on the downbeat (\u201cthe One\u201d). Funk treats every instrument, including horns and voice, as a percussion instrument, and it builds songs out of repeating, interlocking rhythmic patterns rather than chord progressions. Funk is the rhythmic foundation of most hip hop and a great deal of contemporary R&B and pop."
  },

  "motown": {
    label: "Motown Records",
    definition: "A Detroit-based record label founded by Berry Gordy in 1959 that became the most commercially successful Black-owned company of the 1960s and the dominant producer of Black popular music in that decade. Motown\u2019s artists included the Supremes, the Temptations, Marvin Gaye, Stevie Wonder, the Jackson 5, and Smokey Robinson. The label\u2019s sound (polished, song-driven, built around a tight in-house rhythm section) shaped what mainstream pop sounded like for a generation."
  },

  "mississippi-delta": {
    label: "Mississippi Delta",
    definition: "The flat, fertile region of northwest Mississippi between the Mississippi and Yazoo rivers, where cotton plantations relied on enslaved and later sharecropping Black labor for over a century. The Delta is the historical home of country blues: musicians like Robert Johnson, Charley Patton, and Son House developed the form there in the 1920s and 1930s. As Delta musicians moved north during the Great Migration, the Delta blues fed directly into the electric Chicago blues of the 1940s and 1950s."
  },

  "chicago-blues": {
    label: "Chicago blues",
    definition: "An electrified, ensemble-driven version of the blues that took shape in Chicago in the 1940s and 1950s as Mississippi musicians who had moved north during the Great Migration adapted the country blues to the louder, faster, urban environment. The classic Chicago blues lineup features electric guitar, amplified harmonica, electric bass, drums, and sometimes piano. Muddy Waters, Howlin\u2019 Wolf, Little Walter, and Willie Dixon are central figures; Chess Records was the central label."
  },

  "muddy-waters": {
    label: "Muddy Waters",
    definition: "American blues singer, guitarist, and bandleader (1913 or 1915\u20131983), born McKinley Morganfield in Issaquena County, Mississippi, raised on the Stovall Plantation outside Clarksdale, and a foundational figure of postwar electric blues. The musicologist Alan Lomax recorded him at Stovall in 1941 and 1942 for the Library of Congress, sessions that gave Waters the confidence to leave Mississippi. He moved to Chicago in 1943 as part of the Great Migration, plugged his Delta-style guitar into an amplifier so it could carry over the noise of South Side house parties and clubs, and effectively invented the sound that would be called Chicago blues. His Chess Records hits from 1948 forward, including \u201cI Can\u2019t Be Satisfied,\u201d \u201cRollin\u2019 Stone,\u201d \u201cI\u2019m Your Hoochie Coochie Man,\u201d and \u201cMannish Boy,\u201d carried Mississippi Delta phrasing into a band format with electric guitar, amplified harmonica, bass, drums, and piano. Waters\u2019s influence on rock and roll is direct and enormous: Chuck Berry signed to Chess on Waters\u2019s recommendation, the Rolling Stones took their name from his 1950 record \u201cRollin\u2019 Stone,\u201d and the British rock guitarists of the 1960s (Eric Clapton, Keith Richards, Jimmy Page) studied his records the way classical violinists study Bach. He was on the May 1964 Blues and Gospel Train tour of England that included Sister Rosetta Tharpe."
  },

  "thomas-dorsey": {
    label: "Thomas A. Dorsey (1899\u20131993)",
    definition: "An African American songwriter and bandleader called \u201cthe Father of Gospel Music.\u201d Dorsey began his career in the 1920s as a successful blues pianist and composer (sometimes recording under the name \u201cGeorgia Tom\u201d), then turned to sacred music in the late 1920s and brought blues feeling, bent notes, and rhythmic drive into the church. His hymns, including \u201cTake My Hand, Precious Lord\u201d and \u201cPeace in the Valley,\u201d became foundational to the gospel repertoire and to the soul music that followed."
  },

  "pentecostal": {
    label: "Pentecostal",
    definition: "A branch of Protestant Christianity that emphasizes direct experience of the Holy Spirit through ecstatic worship, including speaking in tongues, healing, and energetic music-making with full congregational participation. Pentecostal churches emerged in the early twentieth century, with the Church of God in Christ (founded 1897) becoming the largest historically Black Pentecostal denomination. The musical practices nurtured in Pentecostal worship\u2014loud, rhythmic, instrumentally rich, vocally extravagant\u2014shaped much of twentieth-century Black popular music. Sister Rosetta Tharpe was raised in this tradition."
  },

  "sacred-music": {
    label: "Sacred and secular music",
    definition: "Sacred music is music made for religious worship and reflection (in the Black American context, this means spirituals, gospel, and church hymns). Secular music is music made for everyday life outside of worship (love songs, dance music, pop, blues lyrics about work and heartbreak). The distinction matters because Black popular music in the twentieth century is constantly moving between the two: gospel singers crossing over to secular careers, secular artists going back to the church for vocal training, gospel form showing up in pop hits. The sacred and the secular are technically separate categories, but in practice they have always shaped each other."
  },

  "vocal-runs": {
    label: "Vocal runs",
    definition: "A sequence of rapidly sung pitches over a single syllable, common in gospel, soul, R&B, and contemporary pop. A run differs from melisma in that it is usually quicker, more virtuosic, and often improvised on the spot rather than written into the melody. Singers like Aretha Franklin, Whitney Houston, Mariah Carey, and Beyonc\u00e9 are known for highly developed runs that they typically learned in church before they ever recorded."
  },

  "testifying": {
    label: "Testifying",
    definition: "In the Black Protestant church tradition, the practice of speaking or singing publicly about one\u2019s personal experience of God, faith, or struggle, often in an emotionally direct, exhortative voice that moves between speech and song. The testifying voice (preacher, gospel singer, soul singer, MC) carries a specific authority: the speaker bears witness to something true. Testifying as a vocal mode shows up across Black popular music, from the way James Brown delivers a vocal to the way a hip hop verse claims first-person authority."
  },

  "cipher": {
    label: "Cipher",
    definition: "In hip hop, a circular gathering of rappers (or breakdancers, or other hip hop practitioners) who take turns performing for and to one another. The cipher is part competition, part collaboration, and part communal celebration. Structurally it is a call-and-response form: each MC\u2019s verse responds to what came before and sets up what comes next. The cipher\u2019s circular shape echoes the ring shout and other West African and African American communal forms."
  },

  "mc": {
    label: "MC",
    definition: "Short for \u201cmaster of ceremonies.\u201d In hip hop, an MC is a rapper: a vocalist who delivers rhymed lyrics over a beat, often with rhythmic and rhetorical complexity. The role grew out of the early hip hop party DJs of the 1970s, who had MCs hyping the crowd; over time the MC\u2019s role expanded from short call-outs to full lyrical performance, and the term came to mean what \u201crapper\u201d means today, with a slight emphasis on craft and lineage. Grandmaster Flash and the Furious Five were one of the first groups to make the MC the center of the recording, not just the live show."
  },

  "sampling": {
    label: "Sampling",
    definition: "The practice of taking a segment of an existing recording (a drum break, a horn line, a vocal phrase, a whole loop) and using it as a building block in a new piece of music. Sampling is fundamental to hip hop and to a great deal of electronic dance music; it is also legally and ethically complicated, because it involves using someone else\u2019s recording, often without paying the original artist. Hip hop producers from the 1970s on built a deep practice of sampling Black recorded music, treating earlier records as a usable archive rather than as finished, untouchable works."
  },

  "backbeat": {
    label: "Backbeat",
    definition: "An accent placed on the second and fourth beats of a four-beat measure (the \u201cback\u201d half of each pair of beats). The backbeat is the rhythmic foundation of most rock, R&B, and soul; it is what you clap along to at a concert. Compare with the downbeat (the first beat of a measure), which funk and a great deal of contemporary Black popular music emphasize instead."
  },

  "downbeat": {
    label: "Downbeat",
    definition: "The first beat of a musical measure, often the strongest and most emphasized beat. Funk\u2019s defining innovation, associated with James Brown and famously cued with the command \u201con the one,\u201d was to shift the heaviest emphasis from the backbeat (beats two and four) to the downbeat (beat one), reorganizing how the music feels and freeing the other beats for syncopation."
  },

  "black-power": {
    label: "Black Power",
    definition: "A political and cultural movement that emerged in the mid-1960s as a challenge to the integrationist mainstream of the civil rights movement, calling instead for Black self-determination, racial pride, economic and political autonomy, and a reckoning with anti-Black violence. Stokely Carmichael popularized the phrase in 1966; the Black Panther Party, founded that same year, became its most visible organization. The Black Power moment shaped the music, fashion, hairstyles, and visual aesthetics of late-1960s and early-1970s Black popular culture, including James Brown\u2019s \u201cSay It Loud \u2014 I\u2019m Black and I\u2019m Proud.\u201d"
  },

  "black-panthers": {
    label: "Black Panther Party",
    definition: "A revolutionary Black political organization founded in Oakland, California in October 1966 by Huey P. Newton and Bobby Seale, originally as the Black Panther Party for Self-Defense. The Panthers organized armed copwatch patrols of Oakland police, ran free breakfast programs and health clinics, published a national newspaper, and became the most visible face of the Black Power movement. The FBI\u2019s COINTELPRO program targeted the party as what J. Edgar Hoover called the country\u2019s \u201cgreatest internal threat,\u201d and through a combination of arrests, infiltrations, and the assassination of party members (most notoriously Fred Hampton in Chicago in December 1969) had effectively destroyed it as a national organization by the late 1970s. The party\u2019s visual aesthetic (black leather jackets, black berets, raised fists) became globally recognizable. Beyonc\u00e9\u2019s 2016 Super Bowl halftime performance of \u201cFormation\u201d featured a backing troupe in black leather and berets, an explicit visual citation of the Panthers; the performance landed exactly fifty years after the party\u2019s founding."
  },

  "beyonce": {
    label: "Beyonc\u00e9",
    definition: "Beyonc\u00e9 Knowles-Carter (born 1981 in Houston, Texas), American singer, songwriter, performer, and producer. After early success with the group Destiny\u2019s Child in the late 1990s and early 2000s, she became one of the defining solo artists of her generation, particularly with the visual albums Beyonc\u00e9 (2013) and Lemonade (2016). Her work draws explicitly on Black Southern, gospel, R&B, hip hop, and Afro-diasporic traditions, and increasingly engages Black political themes (\u201cFormation,\u201d the Lemonade film, the country album Cowboy Carter) directly. She is one of Module 2\u2019s anchor artists."
  },

  "grandmaster-flash": {
    label: "Grandmaster Flash and the Furious Five",
    definition: "A pioneering hip hop group from the South Bronx, New York, active from the late 1970s. Grandmaster Flash (Joseph Saddler, born 1958 in Barbados, raised in the Bronx) is one of hip hop\u2019s foundational DJs, credited with developing techniques like the quick mix and the backspin that turned the turntables into an instrument. The Furious Five were the group\u2019s MCs: Melle Mel, Cowboy, Kid Creole, Mr. Ness/Scorpio, and Rahiem. Their 1982 record \u201cThe Message,\u201d the fourth anchor track of this module, is widely cited as the moment hip hop turned from party music to social commentary."
  },

  "whitney-houston": {
    label: "Whitney Houston",
    definition: "American singer (1963\u20132012), born in Newark, New Jersey, into a family of singers (her mother Cissy Houston was a leading gospel and session vocalist; her cousin Dionne Warwick and her godmother Aretha Franklin were both major recording artists). Houston was trained in church before she was trained anywhere else, and her vocal technique drew on the gospel runs and melisma of the Black Protestant tradition. She became one of the best-selling artists of all time, with a string of pop and R&B hits in the late 1980s and 1990s. Her career is a clear example of gospel-trained vocal craft moving into mainstream secular pop."
  },

  /* ============================
     Module 2 Track 1: Bessie Smith and "St. Louis Blues"
     ============================ */

  "empress-of-the-blues": {
    label: "Empress of the Blues",
    definition: "The press nickname for Bessie Smith from roughly the mid-1920s on, used as a billing on her concert posters and Columbia record labels. The title positioned her above the older \u201cMother of the Blues\u201d (Ma Rainey) in the popular imagination, a kind of generational handing-off, and reflected her status as the highest-paid Black entertainer in the United States in that decade."
  },

  "ma-rainey": {
    label: "Ma Rainey",
    definition: "Gertrude \u201cMa\u201d Rainey (born Gertrude Pridgett, 1886\u20131939), African American blues singer billed as the \u201cMother of the Blues.\u201d She came up through Southern minstrel and tent-show vaudeville in the 1900s and 1910s with her husband, William \u201cPa\u201d Rainey, and by the 1920s was one of the genre-defining classic blues artists, recording about a hundred sides for Paramount Records between 1923 and 1928, including \u201cSee See Rider Blues\u201d and \u201cMa Rainey\u2019s Black Bottom.\u201d She and Bessie Smith toured briefly together in 1912 and remained connected for the rest of Smith\u2019s life. Rainey was openly bisexual at a moment when that was both rare and dangerous, and she sang about it; her 1928 \u201cProve It on Me Blues\u201d is often cited as one of the earliest openly queer recordings in American popular music."
  },

  "classic-blues": {
    label: "Classic blues",
    definition: "A music-industry and music-history term for the recorded blues of the 1920s, dominated by African American women singers like Bessie Smith, Ma Rainey, Ethel Waters, Ida Cox, Alberta Hunter, and Mamie Smith. Classic blues recordings were generally backed by small jazz bands or solo pianists, performed in vaudeville-influenced staged settings, and aimed at the race-records market. The label distinguishes this body of recordings from the country blues that came later on record (rural, mostly male, accompanied by acoustic guitar) and from the urban Chicago blues that followed in the 1940s."
  },

  "vaudeville": {
    label: "Vaudeville",
    definition: "A form of variety theater that dominated American popular entertainment from roughly the 1880s through the 1920s, made up of short, varied acts (singers, comedians, dancers, novelty performers) presented one after another on a single bill. Vaudeville was strictly segregated: white vaudeville played mostly white theaters and produced stars like Eddie Cantor and Sophie Tucker; Black vaudeville played mostly Black-owned theaters on circuits like the Theater Owners\u2019 Booking Association (TOBA) and produced stars like Bessie Smith, Ma Rainey, and Ethel Waters. Many of the conventions of later live popular music (the headliner, the warm-up act, the touring revue) come from vaudeville."
  },

  "toba": {
    label: "TOBA (Theater Owners' Booking Association)",
    definition: "The major Black vaudeville circuit of the 1910s and 1920s, a network of Black-owned and Black-operated theaters across the South and East Coast that booked Black performers for Black audiences. TOBA gave artists like Bessie Smith and Ma Rainey a steady working circuit at a time when white vaudeville was largely closed to them, but the pay and accommodations were notoriously poor; performers wryly glossed the acronym as \u201cTough On Black Asses.\u201d Almost every major Black recording artist of the 1920s came up through TOBA."
  },

  "columbia-records": {
    label: "Columbia Records",
    definition: "An American record label founded in 1888, one of the oldest still-operating record companies in the world. In the 1920s Columbia became one of the major labels recording Black artists for the race-records market; Bessie Smith was its biggest star in that decade, and her sales were credited with pulling the company through a near-bankruptcy. Columbia later signed artists across nearly every era and genre, from Billie Holiday and Frank Sinatra to Bob Dylan and Bruce Springsteen, and remains a major label today as a subsidiary of Sony Music."
  },

  "w-c-handy": {
    label: "W.C. Handy",
    definition: "William Christopher Handy (1873\u20131958), African American bandleader, cornetist, and music publisher who composed and published some of the earliest commercially successful blues songs, including \u201cMemphis Blues\u201d (1912) and \u201cSt. Louis Blues\u201d (1914). The title of his 1941 autobiography, Father of the Blues, became his nickname; the claim is overstated (the blues was alive in Black Southern communities long before Handy heard it), but Handy did do something specific and important: he put the blues onto sheet music in a form the publishing industry could sell. His New York-based Pace & Handy Music Company was one of the earliest Black-owned music publishers."
  },

  "habanera": {
    label: "Habanera",
    definition: "A syncopated rhythmic pattern that originated in nineteenth-century Cuba, named after Havana (la Habana) and central to the Cuban contradanza and danz\u00f3n traditions. The pattern, sometimes notated as a dotted quarter note plus an eighth plus two quarters, traveled with Cuban musicians and sailors to New Orleans, Buenos Aires, and Spain in the late nineteenth century. It became a foundational rhythm of the tango in Argentina and a recurring presence in the early jazz of New Orleans. W.C. Handy heard it on a 1900 trip to Cuba and put it into the bridge of \u201cSt. Louis Blues.\u201d"
  },

  "spanish-tinge": {
    label: "Spanish tinge",
    definition: "Jelly Roll Morton\u2019s phrase for the Latin (specifically Cuban habanera) rhythmic flavor that runs through New Orleans jazz, ragtime, and early American popular music. Morton, the New Orleans pianist who claimed to have invented jazz, told the folklorist Alan Lomax in his 1938 Library of Congress interviews that you could not really play jazz without putting in what he called the \u201cSpanish tinge.\u201d The phrase has stuck as shorthand for the Caribbean and Latin American influences that shaped American popular music from the very beginning."
  },

  "carmen": {
    label: "Carmen (Bizet)",
    definition: "A French opera by Georges Bizet, first performed in Paris in 1875, set in Spain and centered on a Romani woman named Carmen who works in a Seville cigarette factory and refuses to be controlled. The opera\u2019s most famous number is the \u201cHabanera\u201d aria, also known by its first line \u201cL\u2019amour est un oiseau rebelle\u201d (\u201cLove is a rebellious bird\u201d), which Bizet built on the Cuban habanera rhythm by way of a song called \u201cEl Arreglito\u201d by the Spanish composer Sebasti\u00e1n Yradier. The aria made the habanera rhythm internationally recognizable, and that rhythm is the same one that traveled to New Orleans, fed early jazz, and shows up in the bridge of \u201cSt. Louis Blues.\u201d Carmen is one of the most performed operas in the standard repertoire."
  },

  "tango": {
    label: "Tango",
    definition: "A partner dance and music form that emerged in the working-class neighborhoods of Buenos Aires and Montevideo in the late nineteenth century, drawing on Cuban habanera rhythm, European waltz and polka, and Afro-Argentine candombe. By the early 1910s tango had become an international dance craze in Paris and New York, where it was perceived as exotic and erotic. The 1914 craze is what W.C. Handy was responding to when he wrote the tango bridge into \u201cSt. Louis Blues.\u201d"
  },

  "acoustic-recording": {
    label: "Acoustic recording",
    definition: "The pre-electrical method of recording sound, used from the late 1870s until 1925. Performers played and sang directly into a large horn that funneled the sound waves to a needle, which cut grooves into a wax master disc. There were no microphones, no amplifiers, and no overdubs. Singers had to project loud enough to drive the cutting needle, which is why early-twentieth-century vocal training emphasized projection. Columbia and the other major labels switched to electrical recording (using microphones and electrical amplification) in 1925. Bessie Smith\u2019s \u201cSt. Louis Blues,\u201d cut in January of that year, was one of the last great acoustic vocal recordings."
  },

  "cornet": {
    label: "Cornet",
    definition: "A brass instrument closely related to the trumpet, with the same range and roughly the same fingering, but a more compact, conical bore that produces a slightly warmer, mellower tone than the trumpet\u2019s brighter, more cylindrical sound. The cornet was the standard high-brass instrument of New Orleans jazz and of much marching-band and dance-band music through the 1920s. Louis Armstrong played cornet on his early sides, including the 1925 sessions with Bessie Smith, before switching to trumpet later in the decade. Most listeners cannot distinguish them by ear without practice."
  },

  "louis-armstrong": {
    label: "Louis Armstrong",
    definition: "American jazz cornetist, trumpeter, and singer (1901\u20131971), born in New Orleans, nicknamed \u201cSatchmo\u201d and \u201cPops.\u201d Armstrong learned cornet as a child at the Colored Waifs\u2019 Home for Boys after a New Year\u2019s Eve arrest, came up under the mentorship of the New Orleans cornetist King Oliver, followed Oliver to Chicago in 1922, played a year with Fletcher Henderson\u2019s big band in New York in 1924\u20131925, and recorded the Hot Five and Hot Seven sides in Chicago between 1925 and 1928. The Hot Five and Hot Seven recordings are widely regarded as the foundation of jazz as a soloist\u2019s art: before Armstrong, jazz was mostly collective ensemble improvisation; after him, the featured solo became the music\u2019s organizing principle. His phrasing, his rhythmic placement, and the swing in his sound shaped almost every horn player and singer who followed, including Billie Holiday, who named him alongside Bessie Smith as her two most important early influences. In the second half of his career he became one of the most recognizable popular entertainers in the world, with hits like \u201cHello, Dolly!\u201d (which knocked the Beatles off the top of the Billboard chart in 1964) and \u201cWhat a Wonderful World\u201d (1968)."
  },

  "harmonium": {
    label: "Harmonium (pump organ)",
    definition: "A small reed organ powered by foot-pumped bellows that push air across thin metal reeds to produce sound. Common in nineteenth- and early-twentieth-century homes, schools, and small churches, especially in rural areas without electricity, the harmonium was associated with hymns and parlor music. Its slightly wheezing, breathy sound is unmistakable. Fred Longshaw played one on Bessie Smith\u2019s \u201cSt. Louis Blues,\u201d a choice that gave the recording a sacred, country-church quality and is one of the reasons the track sounds the way it does."
  },

  "contralto": {
    label: "Contralto",
    definition: "The lowest standard female vocal range in Western classical and popular music, typically running from the F below middle C up to the F nearly two octaves above. A true contralto voice is rare and is usually described as deep, dark in color, and powerful in its lower range. Bessie Smith was a contralto, and a great deal of what makes her recordings sound the way they do (the weight of the bottom of her voice, the authority of her low notes) comes from that vocal type."
  },

  "obbligato": {
    label: "Obbligato",
    definition: "An accompanying musical line, often improvised, that weaves around and comments on a main vocal or solo line. The Italian word means \u201cobligatory,\u201d in the sense that the line is essential to the music rather than optional ornamentation. In jazz and blues recordings of the 1920s and 1930s, the obbligato was typically played by a horn (cornet, trumpet, clarinet, saxophone) responding to the singer\u2019s phrases in the spaces between vocal lines. Louis Armstrong\u2019s cornet behind Bessie Smith on \u201cSt. Louis Blues\u201d is one of the most famous examples in the recorded literature."
  },

  "aab": {
    label: "AAB form (blues lyric)",
    definition: "The standard lyric pattern of the twelve-bar blues. Each verse has three lines: the first line is sung once, then repeated almost identically (the two A lines), and then a third, contrasting line completes the thought (the B line). For example: \u201cI hate to see that evening sun go down / I hate to see that evening sun go down / It makes me think I\u2019m on my last go round.\u201d The repetition of the first line gives the singer a moment to think, gives the listener time to absorb the image, and creates the suspended, conversational feel that distinguishes the blues from most other song forms."
  },

  "ragtime": {
    label: "Ragtime",
    definition: "A composed, syncopated piano music that flourished from roughly the 1890s through the 1910s, most associated with the African American composer Scott Joplin (1868\u20131917) and his \u201cMaple Leaf Rag\u201d (1899). Ragtime\u2019s defining feature is a syncopated, \u201cragged\u201d right-hand melody played against a steady, marching left-hand bass, and its multi-strain compositional shape (several distinct sections in succession, like a march) influenced early jazz, the songs of W.C. Handy, and a great deal of American popular music in the 1910s and 1920s. \u201cSt. Louis Blues,\u201d with its three contrasting strains, is closer in shape to a rag than to a folk blues."
  },

  "billie-holiday": {
    label: "Billie Holiday",
    definition: "American jazz and blues singer (1915\u20131959), born Eleanora Fagan in Philadelphia and raised mostly in Baltimore. Holiday became one of the most influential vocalists of the twentieth century, known for her unusual phrasing (typically singing slightly behind the beat, lingering on or bending notes), her emotional directness, and her ability to make a song sound like she was telling you a true story about herself. She named Bessie Smith and Louis Armstrong as her two most important early influences. Her 1939 recording of \u201cStrange Fruit,\u201d a song about a Southern lynching, is one of the earliest and most important protest songs in American popular music."
  },

  "big-mama-thornton": {
    label: "Big Mama Thornton",
    definition: "American blues singer (1926\u20131984), born Willie Mae Thornton in Montgomery, Alabama, who came up through the same Southern touring circuits Bessie Smith had worked a generation earlier. In the 1940s she was sometimes billed as \u201cBessie Smith\u2019s Younger Sister.\u201d Her 1952 recording of \u201cHound Dog\u201d (written by Jerry Leiber and Mike Stoller) was a major R&B hit; Elvis Presley\u2019s 1956 cover, modeled on her version, was a much bigger pop hit and largely erased her from the song\u2019s public history. Her 1968 \u201cBall and Chain\u201d was covered to fame by Janis Joplin. Thornton\u2019s career is one of the clearest examples of how the lineage from Bessie Smith forward into rock and roll runs through Black women singers who rarely got the credit."
  },

  /* ============================
     Module 2 Track 2: Sister Rosetta Tharpe and "Strange Things Happening Every Day"
     ============================ */

  "cogic": {
    label: "COGIC (Church of God in Christ)",
    definition: "The largest historically Black Pentecostal denomination in the United States, founded in 1897 in Lexington, Mississippi by Bishop Charles Harrison Mason. COGIC worship is musical, ecstatic, and physical: singing, dancing, clapping, speaking in tongues, instruments of every kind welcome in the sanctuary. Unusually for American Christian denominations of the early twentieth century, COGIC allowed women to teach and lead, which is part of the context that made it possible for Sister Rosetta Tharpe and her mother Katie Bell Nubin to be working musical evangelists. The musical practices nurtured in COGIC services, including the rhythmic drive, the call-and-response between leader and congregation, and the use of guitars and other amplified instruments in worship, shaped a great deal of twentieth-century Black popular music."
  },

  "decca": {
    label: "Decca Records",
    definition: "A major American record label, the U.S. branch (founded 1934) of the British company of the same name. Decca was one of the \u201cbig four\u201d American labels through the mid-twentieth century, alongside Columbia, RCA Victor, and Capitol. Decca signed Sister Rosetta Tharpe in 1938 and released the first commercial gospel records in U.S. major-label history. Decca\u2019s settlement with the American Federation of Musicians in September 1943, more than a year before its competitors, is part of why Tharpe was positioned to record actively during the wartime years."
  },

  "from-spirituals-to-swing": {
    label: "From Spirituals to Swing",
    definition: "A pair of landmark concerts produced by the music critic and producer John Hammond at Carnegie Hall on December 23, 1938 and December 24, 1939. The shows presented Black sacred and secular music side by side: gospel singers, blues musicians, boogie-woogie pianists, swing bands. Sister Rosetta Tharpe was one of the gospel performers in 1938; the Count Basie Orchestra, Big Bill Broonzy, the Golden Gate Quartet, and the boogie-woogie pianists Albert Ammons, Pete Johnson, and Meade Lux Lewis also appeared. The concerts were among the first major New York events to present Black musical traditions to a racially mixed concert audience as serious art rather than as exotica."
  },

  "cotton-club": {
    label: "Cotton Club",
    definition: "A whites-only nightclub in Harlem (1923\u20131940) that featured Black performers for white audiences. Despite its segregated admission policy, the Cotton Club was one of the most important venues in 1920s and 1930s American popular music: Duke Ellington, Cab Calloway, Lena Horne, the Nicholas Brothers, and Sister Rosetta Tharpe all worked there. The club represents one of the central paradoxes of the era: Black musicians were performing some of the most innovative music in America in rooms that would not let Black audiences in to hear it."
  },

  "electric-guitar": {
    label: "Electric guitar",
    definition: "A guitar with magnetic pickups that convert string vibrations into an electrical signal, which is then amplified through a separate amplifier and loudspeaker. Commercial electric guitars became available in the early 1930s (Rickenbacker\u2019s \u201cFrying Pan\u201d in 1932; the Gibson ES-150 in 1936), and Sister Rosetta Tharpe was one of the first popular recording artists to make the instrument central to her sound. The electric guitar transformed popular music: it could compete in volume with horn sections and drum kits, it could be expressively bent and sustained in ways an acoustic guitar could not, and the slightly distorted tone of an overdriven amplifier became one of the most recognizable sounds of twentieth-century popular music."
  },

  "gayle-wald": {
    label: "Gayle Wald",
    definition: "American scholar of African American music and popular culture, professor of English and American Studies at George Washington University, and author of Shout, Sister, Shout!: The Untold Story of Rock-and-Roll Trailblazer Sister Rosetta Tharpe (Beacon, 2007; revised 2023), the standard biography of Tharpe. Wald is also the author of It\u2019s Been Beautiful: Soul! and Black Power Television (Duke, 2015) and the editor of several scholarly collections on Black music. Most contemporary writing about Tharpe, including the framing in this listening guide, rests on Wald\u2019s research."
  },

  "afm-strike": {
    label: "AFM recording ban",
    definition: "A long musicians\u2019-union strike against the major U.S. record labels that ran from August 1942 through November 1944, called by James Petrillo, the president of the American Federation of Musicians, over royalty payments from radio play and jukebox use. For most of the strike, instrumentalists who were union members could not record commercially in the United States. Decca settled with the union in September 1943; the other major labels held out longer (Columbia and RCA Victor settled in November 1944). The settlement timeline is part of why Sister Rosetta Tharpe and a small number of other Decca artists were able to record more freely in 1944 than artists at competing labels could."
  },

  "v-discs": {
    label: "V-Discs",
    definition: "12-inch unbreakable vinyl records (rather than the standard breakable shellac of the era) pressed by the U.S. military between 1943 and 1949 for distribution to American troops overseas during and just after World War II. V-Discs were exempt from the AFM recording ban because the union agreed the records served the war effort. Sister Rosetta Tharpe and the Dixie Hummingbirds were the only Black gospel acts authorized to record V-Discs; the program is one of the small but real ways American popular music carried into the global theater of the war."
  },

  "sammy-price": {
    label: "Sammy Price",
    definition: "American boogie-woogie and blues pianist (1908\u20131992), born in Honey Grove, Texas, and Decca Records\u2019 house pianist for boogie-woogie and gospel sessions through the 1940s and into the 1950s. Price led the Sam Price Trio that backed Sister Rosetta Tharpe on \u201cStrange Things Happening Every Day\u201d and on most of her Decca sides through 1951. He was also a producer, a club owner, and one of the most prolific session pianists of the postwar era; he can be heard behind everyone from Tharpe to Mezz Mezzrow to Jelly Roll Morton."
  },

  "boogie-woogie": {
    label: "Boogie-woogie",
    definition: "A blues-based piano style that emerged in African American communities in the 1920s and became a national popular style in the late 1930s and 1940s. The defining feature is a fast, repeating left-hand bass pattern (typically eight beats to the bar, often called \u201ceight to the bar\u201d) that drives the rhythm while the right hand plays bluesy melodic figures and improvised solos on top. Boogie-woogie pianists like Albert Ammons, Pete Johnson, Meade Lux Lewis, and Sammy Price worked in juke joints, rent parties, and clubs through the 1930s before the From Spirituals to Swing concerts brought the style to Carnegie Hall. The boogie-woogie left-hand pattern is the rhythmic engine of \u201cStrange Things Happening Every Day,\u201d and its insistent forward motion is one of the things that made the recording sound so much like what would later be called rock and roll."
  },

  "marie-knight": {
    label: "Marie Knight",
    definition: "American gospel and rhythm-and-blues singer (1925\u20132009), born Marie Roach in Sanford, Florida, and raised in Newark, New Jersey. Sister Rosetta Tharpe heard Knight perform at a Mahalia Jackson concert in 1946, recognized her talent, and invited her to tour. The two of them recorded a series of gospel hits together in the late 1940s, including \u201cUp Above My Head\u201d (1947) and \u201cBeams of Heaven\u201d (1947), and toured the gospel circuit as one of the genre\u2019s biggest live draws. According to Tharpe\u2019s biographer Gayle Wald, Tharpe and Knight were rumored to have been romantically involved; their partnership and its suppression in the mainstream record of both artists\u2019 careers is part of the queer history of American popular music that scholars have begun to recover. After their breakup in 1950 and a 1951 fire that killed Knight\u2019s mother and two children, Knight\u2019s career took a different shape, but she continued to record into the 2000s."
  },

  "dixie-hummingbirds": {
    label: "Dixie Hummingbirds",
    definition: "American gospel quartet formed in Greenville, South Carolina in 1928 by James B. Davis and his classmates, originally as the Junior Boys, then the Sterling High School Quartet, and finally the Dixie Hummingbirds. Their sound emerged from the Church of God Holiness tradition. Lead singer Ira Tucker, who joined in 1938 at age thirteen and stayed for the rest of his life, became one of the most influential gospel vocalists of the twentieth century. Equally important was Tucker\u2019s stagecraft: running through the aisles during a performance, jumping off the stage, falling to his knees in prayer at the climax of a song. That theatrical vocabulary, invented inside Black gospel quartet performance in the 1940s, became the template for almost every soul performer who came after, including James Brown, Jackie Wilson, Bobby \u201cBlue\u201d Bland, and the Temptations. The Hummingbirds, like Sister Rosetta Tharpe, were one of only two Black gospel acts the U.S. military authorized to record V-Discs during World War II. They sang behind Paul Simon on \u201cLoves Me Like a Rock\u201d in 1973 and won a Grammy for their own recording of the song the following year. The group, in some lineup or other, has been performing continuously since 1928."
  },

  "overdrive": {
    label: "Overdrive (guitar amplifier)",
    definition: "The warm, slightly broken-up, harmonically rich sound that an electric guitar amplifier produces when its tubes are pushed past the volume they were designed to handle cleanly. At low volumes a tube amplifier reproduces the guitar\u2019s clean signal; as the volume increases, the tubes saturate, the waveform clips, and the resulting sound has a grainy, singing quality with extra harmonics that the clean signal does not have. Overdrive is a softer, more musical-sounding form of distortion than the harder fuzz and distortion sounds of later rock; it is what Sister Rosetta Tharpe is producing on \u201cStrange Things Happening Every Day\u201d and what most blues, country, and early rock guitarists would seek for the next several decades. The discovery that an amplifier sounds better when slightly broken than when perfectly clean is one of the central aesthetic facts of twentieth-century electric-guitar music."
  },

  /* ============================
     Module 2 Track 3: James Brown and "Say It Loud — I'm Black and I'm Proud"
     ============================ */

  "boston-garden": {
    label: "Boston Garden",
    definition: "An indoor arena in Boston, Massachusetts, the home of the Boston Celtics and Boston Bruins from 1928 until it was demolished in 1995. The venue hosted James Brown\u2019s concert on April 5, 1968, the night after the assassination of Martin Luther King Jr. Mayor Kevin White and Brown\u2019s management arranged for the show to be broadcast live on Boston public-television station WGBH so that grieving Black Bostonians who might otherwise have attended in person would have a reason to stay home. The broadcast is widely credited with helping Boston avoid the wave of urban uprisings that hit dozens of other American cities in the days following King\u2019s assassination."
  },

  "al-sharpton": {
    label: "Al Sharpton",
    definition: "American Baptist minister, civil rights activist, and television host (born 1954). Sharpton met James Brown as a teenager in 1969 and became a close friend and protege; he often credited Brown with shaping his public style and his political commitments. Sharpton has been a prominent figure in late-twentieth and early-twenty-first century African American civil rights activism, founding the National Action Network in 1991 and running for several elected offices including U.S. President in 2004. He delivered eulogies at James Brown\u2019s funeral in 2006 and remains a major source for biographical detail about Brown\u2019s political and personal life in his later years."
  },

  "stokely-carmichael": {
    label: "Stokely Carmichael",
    definition: "American Trinidadian-born civil rights activist (1941\u20131998, later known as Kwame Ture). Carmichael came up through the Student Nonviolent Coordinating Committee (SNCC) and rose to national prominence in 1966 when, during a march in Mississippi, he popularized the slogan \u201cBlack Power\u201d as a counterpoint to Martin Luther King Jr.\u2019s nonviolent integrationism. Black Power as Carmichael articulated it called for political and economic self-determination for Black communities, separate institutional development, and pride in African heritage. He briefly served as honorary prime minister of the Black Panther Party in 1968, then moved to Guinea in 1969 and worked the rest of his life in pan-African politics."
  },

  "clyde-stubblefield": {
    label: "Clyde Stubblefield",
    definition: "American drummer (1943\u20132017), known as \u201cthe Funky Drummer\u201d after a James Brown song of the same name (1969) that became one of the most-sampled drum recordings in popular music. Stubblefield was born in Chattanooga, Tennessee, joined James Brown\u2019s band in 1965, and shared drumming duties with John \u201cJabo\u201d Starks for the next five years. His drum break on \u201cFunky Drummer\u201d has been sampled more than a thousand times in hip hop, including on Public Enemy\u2019s \u201cFight the Power\u201d and LL Cool J\u2019s \u201cMama Said Knock You Out.\u201d He played on \u201cCold Sweat,\u201d \u201cI Got the Feelin\u2019,\u201d \u201cSay It Loud \u2014 I\u2019m Black and I\u2019m Proud,\u201d \u201cMother Popcorn,\u201d and dozens of other Brown classics. Drummer David Garibaldi has credited Stubblefield with inventing the vocabulary of funk drumming."
  },

  "fred-wesley": {
    label: "Fred Wesley",
    definition: "American trombonist, arranger, and bandleader (born 1943), one of the central figures in James Brown\u2019s bands and in funk music more broadly. Wesley joined Brown\u2019s touring band in 1968 (his first session was \u201cSay It Loud \u2014 I\u2019m Black and I\u2019m Proud\u201d) and served as Brown\u2019s musical director through much of the 1970s. He led the J.B.\u2019s, the band Brown reorganized in 1970 around Wesley, the Collins brothers, and the drummers Stubblefield and Starks. Wesley later worked with Parliament-Funkadelic, Count Basie, and many others. His arrangements shape the horn parts on virtually every Brown recording from 1968 to 1975."
  },

  "pee-wee-ellis": {
    label: "Pee Wee Ellis",
    definition: "American saxophonist, composer, arranger, and bandleader (1941\u20132021), born Alfred James Rogers in Bradenton, Florida and raised in Lubbock, Texas and then Rochester, New York after his stepfather\u2019s racist murder forced the family north. Ellis studied jazz saxophone in weekly lessons with Sonny Rollins beginning at age sixteen, attended Manhattan School of Music, and joined James Brown\u2019s band in 1965 at the invitation of trumpeter Waymon Reed. In January 1967 Brown promoted him to bandleader and musical director, the position from which he co-wrote and arranged the recordings that crystallized funk as a genre: \u201cCold Sweat\u201d (1967), often pointed to as the moment funk arrived, and \u201cSay It Loud \u2014 I\u2019m Black and I\u2019m Proud\u201d (1968). Ellis described his musical contribution to Brown\u2019s sound as the fusion of his jazz training with Brown\u2019s R&B background, which produced the percussive, horn-section-as-rhythm-instrument arrangements that became the funk template. He left Brown in 1969, worked extensively in jazz arrangement (his composition \u201cThe Chicken\u201d became a jazz-funk standard through Jaco Pastorius\u2019s recording), served as Van Morrison\u2019s bandleader and arranger from 1979, and continued to lead his own bands and tour internationally until shortly before his death in Somerset, England."
  },

  "charles-bobbitt": {
    label: "Charles Bobbitt",
    definition: "James Brown\u2019s longtime personal manager and road manager from the late 1960s until Brown\u2019s death in 2006. Bobbitt was the manager who, in early August 1968, drove a school bus into Watts and Compton to recruit the children\u2019s chorus that sings the call-and-response on \u201cSay It Loud \u2014 I\u2019m Black and I\u2019m Proud.\u201d He told the story at Brown\u2019s funeral in December 2006: \u201cI got an old school bus and we rode around Watts and got 30 children, brought them down to the studio, recorded \u2018Say It Loud.\u2019 I gave them ten dollars each and a James Brown album. That\u2019s how the song that you love so well was played.\u201d"
  },

  "hubert-humphrey": {
    label: "Hubert Humphrey",
    definition: "American politician (1911\u20131978), Vice President of the United States under Lyndon B. Johnson from 1965 to 1969. Humphrey was the Democratic Party\u2019s candidate for president in 1968 and lost narrowly to Richard Nixon in an election shaped by the Vietnam War, the assassinations of Martin Luther King Jr. and Robert F. Kennedy, and widespread urban unrest. James Brown publicly endorsed Humphrey, recorded a campaign song for him, and worked to mobilize Black voters on his behalf. After Humphrey\u2019s loss, Brown switched political allegiances and supported Richard Nixon."
  },

  "rhythm-guitar": {
    label: "Rhythm guitar",
    definition: "A guitar part that supports a song\u2019s rhythm and harmony rather than playing a melody or solo. The rhythm guitarist typically strums chords or plays a short repeating pattern, locking into the bass and drums to define the groove. In funk, the rhythm guitar is often played percussively with muted strings (\u201cchicken scratch\u201d), treating the guitar almost as another drum rather than as a chord-providing instrument. Jimmy Nolen\u2019s rhythm guitar work for James Brown is the foundational example of funk rhythm guitar."
  },

  "vamp": {
    label: "Vamp",
    definition: "A short repeating musical pattern that loops continuously while other elements (lead vocal, solos, improvisation) happen on top. A vamp typically lasts one or two measures and stays on the same chord or moves between two closely-related chords. Vamps are the structural backbone of funk, much hip hop, and a great deal of dance music: instead of moving through a chord progression, the song stays parked on a single repeating pattern and lets the energy come from variation in what is layered on top. \u201cSay It Loud \u2014 I\u2019m Black and I\u2019m Proud\u201d is built on a single vamp for its entire three-minute runtime."
  },

  /* ============================
     Module 2 Track 4: Grandmaster Flash and the Furious Five and "The Message"
     ============================ */

  "south-bronx": {
    label: "South Bronx",
    definition: "The southern portion of the Bronx, the northernmost borough of New York City, generally considered to be the area south of the Cross-Bronx Expressway. The neighborhood was a predominantly white working-class area through the 1940s; in the 1950s and 1960s, white flight, redlining, and the construction of the Cross-Bronx Expressway transformed it into a predominantly Black and Puerto Rican neighborhood. Through the 1970s and into the 1980s the South Bronx became a national symbol of urban poverty and disinvestment, with widespread building abandonment and arson. It is also the place where hip hop was born, in 1973."
  },

  "robert-moses": {
    label: "Robert Moses",
    definition: "American urban planner (1888\u20131981), often called New York City\u2019s \u201cmaster builder.\u201d Moses held a series of unelected positions of enormous power from the 1930s through the 1960s, including parks commissioner, construction coordinator, and chair of the Triborough Bridge and Tunnel Authority. He oversaw the construction of hundreds of parks, playgrounds, bridges, public housing projects, and highways across the New York metropolitan area. He also displaced hundreds of thousands of residents in the process, disproportionately working-class people of color, and his planning decisions are widely regarded as having reshaped the city\u2019s racial geography. Robert Caro\u2019s 1974 biography The Power Broker is the standard account of Moses\u2019s career and is one of the most influential works of urban history ever written."
  },

  "cross-bronx-expressway": {
    label: "Cross-Bronx Expressway",
    definition: "A seven-mile stretch of Interstate 95 cut through the Bronx between 1948 and 1972, designed by Robert Moses to connect New Jersey to Long Island. Moses\u2019s route required the demolition of a five-mile-wide swath through working-class Bronx neighborhoods, displacing tens of thousands of residents and dividing the borough physically and socially. The expressway is widely regarded as the single most destructive piece of mid-twentieth-century urban planning in the United States, and the conditions it produced in the South Bronx (mass displacement, building abandonment, the loss of the borough\u2019s social fabric) are central to the story of how hip hop emerged from the area in the 1970s."
  },

  "white-flight": {
    label: "White flight",
    definition: "The mid-twentieth-century migration of white residents out of American cities and into newly built suburbs, often in response to the arrival of Black and other nonwhite residents in their neighborhoods. White flight was driven by racism, by federally subsidized highway construction and home loans that favored suburban development, and by redlining policies that drove down the perceived value of integrating neighborhoods. In the South Bronx, white flight transformed a borough that was two-thirds non-Hispanic white in 1950 into one that was two-thirds Black and Puerto Rican by 1960. The phenomenon hollowed out the urban tax base and accelerated the disinvestment that turned neighborhoods like the South Bronx into nationally visible symbols of urban decline."
  },

  "deindustrialization": {
    label: "Deindustrialization",
    definition: "The decline and disappearance of manufacturing employment in American cities, especially from the 1960s through the 1980s. As factories closed, automated, or relocated overseas, neighborhoods built around those jobs (typically working-class and racially mixed, with significant Black, Latino, and immigrant populations) lost their economic foundation. Deindustrialization is one of the structural conditions out of which several musics in this course emerged, including hip hop in the South Bronx, punk in the Detroit and English Midlands, and rust-belt rock more broadly."
  },

  "kool-herc": {
    label: "DJ Kool Herc",
    definition: "Jamaican-born American DJ (born Clive Campbell, 1955), widely credited as the founding figure of hip hop. On August 11, 1973, Herc threw a back-to-school party in the recreation room of his apartment building at 1520 Sedgwick Avenue in the Bronx, where he used two turntables and two copies of the same record to extend the rhythmic break of a song so the dancers could keep moving. That technique, the breakbeat or merry-go-round, is the technical foundation hip hop is built on. Herc had grown up in Kingston, Jamaica, around the Jamaican sound-system tradition of toasting (talking rhythmically over instrumentals), which he carried into his Bronx parties along with the powerful sound systems Jamaican DJs used. He is generally treated as the first of hip hop\u2019s three foundational DJs, alongside Afrika Bambaataa and Grandmaster Flash."
  },

  "afrika-bambaataa": {
    label: "Afrika Bambaataa",
    definition: "American DJ, producer, and community organizer (born Lance Taylor, 1957), one of the foundational figures of hip hop. Bambaataa grew up in the Bronx River Houses in the South Bronx and rose through the Black Spades street gang in the early 1970s before turning to DJing. In 1973 or 1974 he founded the Universal Zulu Nation, a community of DJs, MCs, b-boys and b-girls, and graffiti writers committed to redirecting Bronx street energy from gang conflict into hip hop culture. He is generally credited with codifying the four elements of hip hop (DJing, MCing, breakdancing, graffiti) and with the cultural-organizing side of the movement, alongside Kool Herc\u2019s DJ techniques and Grandmaster Flash\u2019s turntable engineering. His 1982 record \u201cPlanet Rock,\u201d built on a Roland TR-808 drum machine and a sample of Kraftwerk\u2019s \u201cTrans-Europe Express,\u201d helped define electro and was a major influence on dance music for the next two decades. Sexual abuse allegations against Bambaataa, dating from the 1980s and surfacing in the 2010s, have complicated his legacy; the Universal Zulu Nation removed him from leadership in 2016."
  },

  "block-party": {
    label: "Block party / park jam",
    definition: "An outdoor neighborhood gathering where music is played for a community on a closed-off street or in a public park. Block parties have a long history in Black American urban life and trace back through Caribbean and West African traditions of outdoor communal celebration. In the 1970s South Bronx, block parties and park jams were the venue where hip hop took shape: a DJ would set up turntables in a playground or on a sidewalk, often hot-wiring power from a streetlight, and the neighborhood\u2019s teenagers would dance, rap, and watch each other\u2019s moves. Many of hip hop\u2019s formal innovations, including the breakbeat, the cipher, and the role of the MC as crowd-warmer, were worked out at these gatherings before any of it reached a recording studio."
  },

  "breakbeat": {
    label: "Breakbeat",
    definition: "A short percussion-only section of a recording, originally a passage in a funk or soul track where the rest of the band drops out and only the drums (sometimes with bass and percussion) keep playing. Hip hop DJs in the 1970s discovered that these breaks were the parts dancers responded to most strongly, and they used two turntables with two copies of the same record to loop the break indefinitely, switching back and forth from one record to the other. That technique, generally credited to DJ Kool Herc and refined by Grandmaster Flash, is the technical foundation hip hop is built on. The same word, breakbeat, is also used for the longer category of recordings featuring those drum patterns and for related genres of electronic dance music that grew out of them."
  },

  "sugar-hill-records": {
    label: "Sugar Hill Records",
    definition: "American independent record label, founded in 1979 in Englewood, New Jersey, by Sylvia and Joe Robinson. The label was named after the Sugar Hill neighborhood in Harlem and was hip hop\u2019s first major commercial label. Its 1979 release \u201cRapper\u2019s Delight\u201d by the Sugarhill Gang was the first commercially successful hip hop record, and its 1982 release of Grandmaster Flash and the Furious Five\u2019s \u201cThe Message\u201d established hip hop as a vehicle for serious social commentary. Sugar Hill\u2019s in-house band (Doug Wimbish on bass, Skip McDonald on guitar, Keith LeBlanc on drums) played on most of the label\u2019s releases. The label folded in 1985 after a series of legal and financial troubles."
  },

  "sylvia-robinson": {
    label: "Sylvia Robinson",
    definition: "American singer, producer, and label executive (1935\u20132011), often called the \u201cMother of Hip-Hop.\u201d Robinson\u2019s career began in the 1950s as Little Sylvia and as half of the duo Mickey & Sylvia, whose 1956 hit \u201cLove Is Strange\u201d remains a R&B standard. After a 1973 solo hit, \u201cPillow Talk,\u201d she co-founded Sugar Hill Records in 1979 with her husband Joe Robinson and oversaw the production of \u201cRapper\u2019s Delight\u201d (1979) and \u201cThe Message\u201d (1982), the two records most responsible for hip hop\u2019s early commercial breakthrough. She did not invent the techniques she put on record; what she did was hear, before anyone else in the industry, that hip hop had crossover potential, and she built a label around that hearing. She was inducted into the Rock and Roll Hall of Fame in 2022."
  },

  "melle-mel": {
    label: "Melle Mel",
    definition: "American MC (born Melvin Glover, 1961), generally credited as the first rapper to refer to himself as an \u201cMC\u201d and one of the foundational vocalists of hip hop. Mel grew up in the South Bronx, became part of Grandmaster Flash\u2019s circle in the mid-1970s, and was one of the original members of the Furious Five. He was the only member of the Furious Five who actually performed on \u201cThe Message\u201d (1982), delivering its climactic final twenty-eight-measure verse. He went on to a long career, including the 1983 anti-cocaine record \u201cWhite Lines (Don\u2019t Don\u2019t Do It).\u201d He was inducted into the Rock and Roll Hall of Fame as part of Grandmaster Flash and the Furious Five in 2007."
  },

  "duke-bootee": {
    label: "Duke Bootee",
    definition: "American percussionist, songwriter, and rapper (Edward Fletcher, 1951\u20132021), born and raised in Savannah, Georgia, and based in Elizabeth, New Jersey, when he became part of the Sugar Hill Records circle in the early 1980s. Fletcher was the primary writer and performer of \u201cThe Message\u201d (1982): he came up with the hook (\u201cdon\u2019t push me, \u2019cause I\u2019m close to the edge\u201d), wrote most of the verses, played drum machine, synthesizer, and percussion on the recording, and delivered the lead vocal on the verses. The track was credited to Grandmaster Flash and the Furious Five at Sylvia Robinson\u2019s direction; only Melle Mel of the credited group performed on it. Fletcher held a master\u2019s degree in education and after his music career taught high-school English in New Jersey for more than two decades."
  },

  "skip-mcdonald": {
    label: "Skip McDonald",
    definition: "American guitarist (born 1949), longtime member of the Sugar Hill Records house band along with bassist Doug Wimbish and drummer Keith LeBlanc. McDonald played guitar on most of Sugar Hill\u2019s major releases, including \u201cRapper\u2019s Delight\u201d (1979) and \u201cThe Message\u201d (1982). After Sugar Hill folded, McDonald, Wimbish, and LeBlanc moved to the UK and worked extensively with the producer Adrian Sherwood\u2019s On-U Sound label, performing as Tackhead and as the rhythm section behind a wide range of post-punk, dub, and industrial recordings."
  },

  "drum-machine": {
    label: "Drum machine",
    definition: "An electronic instrument that produces drum sounds, either by synthesizing them or by playing back short stored recordings of real drums (samples). Drum machines became commercially viable in the late 1970s and early 1980s and quickly reshaped popular music, especially in genres where studio production was central: hip hop, R&B, electronic dance music, synth-pop. They allowed a single producer to lay down rhythmic patterns without hiring a drummer and with perfect timekeeping, and their distinctive timbres (the boomy kick of the Roland TR-808, the snappy snares of the Linn LM-1 and Oberheim DMX) became sounds in their own right. \u201cThe Message\u201d uses an Oberheim DMX, one of the first sampling drum machines."
  },

  "synthesizer": {
    label: "Synthesizer",
    definition: "An electronic instrument that generates sound from scratch (rather than picking up an acoustic source like a guitar string or a singer\u2019s voice) using oscillators, filters, and other circuits. Synthesizers became musically important in the 1960s with instruments like the Moog and the ARP, and exploded into popular music in the 1970s and 1980s as instruments became smaller, cheaper, and easier to play. Synthesizers can produce sounds that imitate acoustic instruments and sounds that no acoustic instrument could make; both kinds of sound have been central to popular music for the last fifty years. The Sequential Circuits Prophet 5, used on \u201cThe Message,\u201d is one of the iconic early polyphonic analog synthesizers."
  },

  "analog-synth": {
    label: "Analog synthesizer",
    definition: "A synthesizer that generates sound using continuous electrical signals (voltage-controlled oscillators, filters, and amplifiers) rather than digital computation. Analog synthesizers dominated the 1970s and early 1980s and have a characteristic warm, slightly imprecise sound that is still prized today. The Prophet 5, the Minimoog, the Roland Jupiter-8, and the Oberheim OB-Xa are all classic analog synthesizers from this era. The hook on \u201cThe Message\u201d is played on a Prophet 5."
  },

  "prophet-5": {
    label: "Prophet 5",
    definition: "A polyphonic analog synthesizer manufactured by Sequential Circuits in San Jose, California, beginning in 1978. The Prophet 5 was the first widely-available synthesizer that could play five notes at once with fully programmable sounds that could be saved to memory and recalled, which made it usable in live performance as well as studio recording. Its bright, slightly clipped lead and brass-like sounds appear on a great deal of late-1970s and early-1980s pop, R&B, and hip hop, including the hook of \u201cThe Message.\u201d"
  },

  "public-enemy": {
    label: "Public Enemy",
    definition: "American hip hop group founded in 1985 in Long Island, New York, around lead MC Chuck D (Carlton Ridenhour), Flavor Flav (William Drayton), DJ Terminator X (Norman Rogers), and the Bomb Squad production team. Public Enemy\u2019s late-1980s and early-1990s records (It Takes a Nation of Millions to Hold Us Back, 1988; Fear of a Black Planet, 1990) are widely regarded as the high-water mark of politically explicit hip hop, building on the path \u201cThe Message\u201d had opened in 1982. The group\u2019s dense, aggressive production style, its sustained engagement with Black political and intellectual traditions, and Chuck D\u2019s commanding rhetorical voice influenced essentially every subsequent generation of socially-engaged hip hop artists, from KRS-One and X-Clan through Kendrick Lamar and Run the Jewels."
  },

  "conscious-hip-hop": {
    label: "Conscious hip hop",
    definition: "An informal label for hip hop that engages directly with social and political subject matter, generally including some combination of analysis of structural racism, critique of capitalism, exploration of African American history and identity, and explicit calls for political action or self-determination. Conscious hip hop is typically traced to Grandmaster Flash and the Furious Five\u2019s \u201cThe Message\u201d (1982) and developed through Public Enemy, KRS-One and Boogie Down Productions, A Tribe Called Quest, the Native Tongues collective, the Roots, Mos Def, Common, Lauryn Hill, dead prez, Kendrick Lamar, and many others. The label is often used in contrast to \u201cgangsta rap\u201d or \u201cparty rap,\u201d though many artists work in more than one of these registers and the boundaries between them have always been porous."
  },

  "clifton-jiggs-chase": {
    label: "Clifton \u201cJiggs\u201d Chase",
    definition: "American jazz organist, arranger, and record producer (Clifton Nathaniel Chase, born 1940), Sugar Hill Records\u2019 in-house producer and arranger from the late 1970s through the mid-1980s. Chase came up as a jazz musician; one of his earliest documented recordings is his organ playing on saxophonist Buddy Terry\u2019s 1967 album Natural Soul (Prestige) alongside trumpeter Woody Shaw, and in 1976 he played sideman on Pharoah Sanders\u2019s album Pharoah. He went to Sugar Hill in the late 1970s pitching an artist he was arranging for; the label passed on the artist but hired him for the arranging work, and Sylvia Robinson eventually elevated him to in-house producer alongside her. He co-wrote and co-produced \u201cThe Message\u201d (1982): he was the one who pushed Ed \u201cDuke Bootee\u201d Fletcher (his bandmate from years before he joined Sugar Hill) to write the song, recognized the hook when Fletcher came up with it on the couch in his Elizabeth, New Jersey apartment, and brought Sylvia Robinson in. Chase also has co-writing credit on the Sugar Hill Gang\u2019s 1981 \u201cApache,\u201d the source of one of the most heavily sampled breakbeats in hip hop, and arranged Funky Four Plus One\u2019s \u201cThat\u2019s the Joint.\u201d Sugar Hill\u2019s in-house engineer through this period was Steve Jerome; the studio in Englewood, New Jersey where most of this work was done burned down in 2002."
  },

  "cowboy": {
    label: "Cowboy",
    definition: "American MC (Keith Wiggins, 1960\u20131989), one of the founding members of the Furious Five and the first rapper to officially join Grandmaster Flash. Cowboy is widely credited with coining the word \u201chip hop\u201d itself: at a Bronx party for a friend who had just enlisted in the Army, he scat-sang the syllables \u201chip / hop / hip / hop\u201d to mimic a marching cadence, and worked it into his routines from then on. The phrase \u201chip hopper\u201d was first used by older disco fans as a putdown of the new music; Cowboy and the Furious Five reclaimed it. Cowboy specialized in the role of crowd MC, the rapper who keeps the audience engaged with calls and chants, including \u201cthrow your hands in the air and wave \u2018em like you just don\u2019t care.\u201d He did not perform on \u201cThe Message\u201d (1982). He died of complications from a long crack-cocaine addiction in September 1989, just before his twenty-ninth birthday."
  },

  "kid-creole": {
    label: "Kid Creole",
    definition: "American MC (Nathaniel Glover, born 1960), founding member of the Furious Five along with his younger brother Melle Mel and Cowboy. Glover took his stage name from the 1958 Elvis Presley film King Creole, and is sometimes credited as Kidd Creole (he is a different person from August Darnell, the Kid Creole of the disco group Kid Creole and the Coconuts, who began performing under that name a few years later). Kid Creole and Melle Mel were the first rappers to refer to themselves as \u201cMCs.\u201d He did not perform on \u201cThe Message\u201d (1982). After the Furious Five split in 1983 he went with Grandmaster Flash and Rahiem to Elektra Records. He was inducted into the Rock and Roll Hall of Fame as part of Grandmaster Flash and the Furious Five in 2007. In 2017 he was arrested for the stabbing death of a homeless man in midtown Manhattan; he was convicted of manslaughter in 2022 and sentenced to sixteen years in prison."
  },

  "scorpio": {
    label: "Scorpio",
    definition: "American MC (Eddie Morris, born 1960), also known as Mr. Ness, founding member of the Furious Five. Scorpio joined the group along with Rahiem after the Three MCs (Melle Mel, Kid Creole, Cowboy) had already formed; the lineup with him in it is the Furious Five most fans recognize. He did not perform on \u201cThe Message\u201d (1982). After the group split in 1983 he stayed with Melle Mel and Cowboy in Grandmaster Melle Mel and the Furious Five; he and Melle Mel still tour together as Grandmaster\u2019s Furious Five. He was inducted into the Rock and Roll Hall of Fame as part of Grandmaster Flash and the Furious Five in 2007."
  },

  "rahiem": {
    label: "Rahiem",
    definition: "American MC (Guy Todd Williams, born 1963), the youngest member of the Furious Five. Rahiem joined the group along with Scorpio after the original three MCs were already in place. He did not perform on \u201cThe Message\u201d (1982); in the song\u2019s music video he is the member shown lip-syncing Duke Bootee\u2019s recorded vocal. After the Furious Five split in 1983 he went with Grandmaster Flash and Kid Creole to Elektra Records. He was inducted into the Rock and Roll Hall of Fame as part of Grandmaster Flash and the Furious Five in 2007."
  },

  "doug-wimbish": {
    label: "Doug Wimbish",
    definition: "American electric bassist (born 1956 in Hartford, Connecticut), one third of the Sugar Hill Records house rhythm section in the early 1980s alongside drummer Keith LeBlanc and guitarist Skip McDonald. Wimbish, McDonald, and LeBlanc were the band on \u201cThe Message\u201d (1982), \u201cWhite Lines (Don\u2019t Don\u2019t Do It)\u201d (1983), and most of the Sugar Hill Gang\u2019s and Grandmaster Flash and the Furious Five\u2019s major releases. After Sugar Hill folded in the mid-1980s, Wimbish and his two bandmates moved to London and worked extensively with British dub producer Adrian Sherwood at On-U Sound; the three of them, with Sherwood, recorded as Tackhead. Wimbish later joined the rock band Living Colour in 1992 and has been their bassist ever since. His bass playing is widely considered foundational to the sound of early commercial hip hop."
  },

  "keith-leblanc": {
    label: "Keith LeBlanc",
    definition: "American drummer and producer (1954\u20132024), the drummer in the Sugar Hill Records house rhythm section from 1979 to roughly 1984. LeBlanc replaced the original house drummer Harold Sargent at Sargent\u2019s recommendation and joined Doug Wimbish and Skip McDonald in a trio that played on most of Sugar Hill\u2019s major releases, including \u201cThe Message\u201d (1982). Outside Sugar Hill, LeBlanc was an early adopter of sampling: his 1983 single \u201cNo Sell Out,\u201d built on samples of Malcolm X speeches over a programmed drum track, is widely considered one of the first sample-based hip hop records. After Sugar Hill folded he moved to London with Wimbish and McDonald, where the three of them with British producer Adrian Sherwood formed Tackhead. He went on to a long career as a session drummer and producer, including production credits on Nine Inch Nails\u2019s 1989 debut Pretty Hate Machine."
  },

  "reggie-griffin": {
    label: "Reggie Griffin",
    definition: "American multi-instrumentalist, arranger, and producer (Reginald D. Griffin, born in Indianapolis), Sugar Hill Records\u2019 in-house synthesizer player and drum-machine programmer in the early 1980s. Griffin came up with the Indianapolis funk band Manchild, which also featured a teenage Kenny \u201cBabyface\u201d Edmonds. After Manchild dissolved he was hired by Sylvia Robinson at Sugar Hill, where he programmed the studio\u2019s LinnDrum and Oberheim DMX drum machines and played most of the synthesizer parts on the label\u2019s major releases. He is widely credited with creating the iconic Prophet 5 hook on \u201cThe Message\u201d (1982), though the album credits list him alongside Jiggs Chase and Sylvia Robinson on the Prophet. In 1982 he also released \u201cMirda Rock\u201d under the name Reggie Griffin and Technofunk, an early electro single sometimes cited as the first record to use the word \u201ctechno\u201d on its sleeve. He later contributed to Chaka Khan\u2019s 1984 hit \u201cI Feel for You.\u201d"
  },

  "tina-knowles": {
    label: "Tina Knowles",
    definition: "American fashion designer, businesswoman, and the mother of Beyonc\u00e9 and Solange Knowles (born C\u00e9lestine Ann Beyonc\u00e9, January 4, 1954, in Galveston, Texas). Knowles\u2019s Louisiana Creole family came up Catholic in segregated South Louisiana, with roots in New Iberia, Abbeville, and the broader bayou parishes; the family settled in Galveston around 1950. She built one of the most successful Black-owned hair salons in 1980s Houston (Headliners), designed the costumes Destiny\u2019s Child wore on stage in their early years, and co-founded the fashion line House of D\u00e9r\u00e9on with her daughter in 2004 (named for Tina\u2019s mother, Agn\u00e9s D\u00e9r\u00e9on, a seamstress). Her family geography is named directly in the opening lines of \u201cFormation.\u201d Her 2025 memoir Matriarch was a New York Times bestseller and an Oprah\u2019s Book Club selection."
  },

  "louisiana-creole": {
    label: "Louisiana Creole",
    definition: "A cultural identity, not a single ethnic identity, that emerged in colonial Louisiana out of the mixing of French, Spanish, African, and Native American populations. Louisiana Creole people are historically associated with French- and Kreyol-speaking Catholic communities in New Orleans and across the bayou parishes of South Louisiana (St. Landry, St. Martin, Iberia, Lafayette, Vermilion, and others). Creole identity overlaps with but is distinct from Cajun identity (which traces specifically to Acadian exiles) and from generic African American identity. Many Creole families are of mixed Black, white, and Indigenous descent, and the label has been used through American history to mark a position both inside and outside the Black-white color line that organizes most of the rest of the country. Beyonc\u00e9\u2019s mother Tina Knowles is from a Louisiana Creole family."
  },

  "acadian": {
    label: "Acadian",
    definition: "The French-speaking Catholic settlers of the maritime region of northeastern North America (modern Nova Scotia, New Brunswick, Prince Edward Island, and parts of Maine and Quebec) from the early 1600s. After the British conquest of the region in 1710 and the Treaty of Utrecht in 1713, the British colonial government deported most of the Acadian population in a campaign that ran from 1755 to 1764, called by Acadians le Grand D\u00e9rangement (the Great Upheaval). Many of the deportees made their way to South Louisiana, where their descendants became known as Cajuns (an anglicization of cadien, short for acadien). The Acadian leader Joseph Broussard, called Beausoleil, led one of the major migrations to Louisiana in 1765. Beyonc\u00e9 is descended through her mother\u2019s mother\u2019s line from the Broussard family."
  },

  "keeanga-yamahtta-taylor": {
    label: "Keeanga-Yamahtta Taylor",
    definition: "American historian and political scientist (born 1972), professor at Northwestern University, and the author of From #BlackLivesMatter to Black Liberation (Haymarket, 2016) and Race for Profit (UNC Press, 2019). Taylor\u2019s scholarship is one of the standard accounts of the Movement for Black Lives as a sustained Black political mobilization, and her work places the wave of protest that ran from Trayvon Martin\u2019s 2012 killing through Ferguson, Baltimore, and beyond in the longer history of Black radical politics in the United States. The 2016 book is the source most often cited in academic writing on the political moment in which \u201cFormation\u201d landed."
  },

  "trayvon-martin": {
    label: "Trayvon Martin",
    definition: "Unarmed seventeen-year-old Black high school student (1995\u20132012) shot and killed by neighborhood-watch volunteer George Zimmerman in Sanford, Florida, on February 26, 2012, while walking back from a convenience store to the home where he was staying. Zimmerman was acquitted of second-degree murder and manslaughter in July 2013. The acquittal triggered a nationwide wave of protest and is the moment most often named as the beginning of the Black Lives Matter movement; the hashtag #BlackLivesMatter was first used in a Facebook post by Alicia Garza in response to the verdict, and was developed into an organizing framework by Garza, Patrisse Cullors, and Opal Tometi over the following year."
  },

  "black-lives-matter": {
    label: "Black Lives Matter",
    definition: "A decentralized political movement and the network of organizations that grew out of it, founded in 2013 by Alicia Garza, Patrisse Cullors, and Opal Tometi following the acquittal of George Zimmerman in the killing of Trayvon Martin. The movement gained mass-protest momentum after the August 2014 killing of Michael Brown by Ferguson, Missouri police, and again after the May 2020 killing of George Floyd by Minneapolis police. By the time \u201cFormation\u201d was released in February 2016, Black Lives Matter had become the central organizing language for a sustained wave of street protest, scholarly work, and electoral organizing about anti-Black police violence and the broader structures of racial inequity in the United States. The framing reading\u2019s discussion of Module 2 returns to the movement in the closing-paragraph framing."
  },

  "michael-brown": {
    label: "Michael Brown",
    definition: "Unarmed eighteen-year-old Black man (1996\u20132014) shot and killed by Ferguson, Missouri police officer Darren Wilson on August 9, 2014. Brown and a friend had been walking down the middle of Canfield Drive when Wilson stopped them; an altercation followed, and Wilson fired twelve shots, six or seven of which struck Brown. His body was left in the street for over four hours in the August heat, an image many residents and journalists have cited as the moment the killing became a public injury rather than a private one. A St. Louis County grand jury declined to indict Wilson on November 24, 2014; the U.S. Department of Justice declined federal civil-rights charges in March 2015 but issued a separate civil report documenting systemic anti-Black discrimination in Ferguson police and municipal-court practices. The Ferguson protests that ran from August through November 2014 launched the largest sustained wave of Black-led street protest in the United States since the late 1960s; the chant \u201chands up, don\u2019t shoot,\u201d based on accounts that Brown had his hands raised when Wilson opened fire, became a Black Lives Matter rallying cry."
  },

  "eric-garner": {
    label: "Eric Garner",
    definition: "Forty-three-year-old Black father of six (1970\u20132014) killed by New York Police Department officer Daniel Pantaleo on July 17, 2014, in Staten Island, New York. NYPD officers had approached Garner on suspicion of selling loose, untaxed cigarettes; when Garner pulled his arm away from being cuffed, Pantaleo placed his arm around Garner\u2019s neck in a hold prohibited by NYPD regulations and pinned him to the sidewalk. Garner repeated the words \u201cI can\u2019t breathe\u201d eleven times before losing consciousness; he was pronounced dead at the hospital, and the New York City medical examiner ruled the death a homicide caused by neck and chest compression. A Staten Island grand jury declined to indict Pantaleo in December 2014; the U.S. Department of Justice declined federal charges in 2019; Pantaleo was fired by the NYPD in August 2019 after a departmental disciplinary trial; the city settled a wrongful-death claim with Garner\u2019s family for $5.9 million in 2015. Garner\u2019s phrase \u201cI can\u2019t breathe\u201d became one of the central rallying cries of the Black Lives Matter movement, and was revived as such after the May 2020 killing of George Floyd, who used the same words."
  },

  "sandra-bland": {
    label: "Sandra Bland",
    definition: "Twenty-eight-year-old Black woman (1987\u20132015) found dead in a Waller County, Texas jail cell on July 13, 2015, three days after being arrested during a traffic stop for failing to signal a lane change. The arresting officer, state trooper Brian Encinia, threatened her with a Taser and forcibly removed her from her car; the dashcam video circulated widely. Authorities ruled her death a suicide; her family and many activists have disputed that ruling. Bland\u2019s death was one of the central cases the Black Lives Matter movement organized around in 2015 and 2016, and the question \u201cwhat happened to Sandy?\u201d, sometimes shouted at protests, is part of the Black political vocabulary the framing reading describes."
  },

  "mike-will-made-it": {
    label: "Mike Will Made-It",
    definition: "American hip hop record producer (Michael Len Williams II, born 1989, in Atlanta), one of the central figures in 2010s mainstream Atlanta trap. He came up producing for Gucci Mane, Future, and 2 Chainz, broke through commercially with Miley Cyrus\u2019s \u201cWe Can\u2019t Stop\u201d (2013) and Rae Sremmurd\u2019s catalog (2015 onward), and produced Beyonc\u00e9\u2019s \u201cFormation\u201d (2016) and most of Kendrick Lamar\u2019s 2017 Black Panther soundtrack work. The original \u201cFormation\u201d beat came from his collaborator Pluss; the freestyled chorus came from Swae Lee of Rae Sremmurd; Mike Will sent the reference to Beyonc\u00e9, who took it in a different direction than he had planned and built the song we now know on top of it."
  },

  "pluss": {
    label: "Pluss",
    definition: "American hip hop record producer (Asheton Hogan, born in Canton, Ohio, raised in Atlanta), Mike Will Made-It\u2019s longtime production partner and the head of A&R at Mike Will\u2019s EarDrummers label. The two met in high school in Atlanta and have collaborated steadily since. His first major chart placement was Lil Wayne\u2019s \u201cLove Me\u201d featuring Drake and Future (2013); he co-produced Rae Sremmurd\u2019s \u201cNo Flex Zone\u201d (2014) and \u201cCome Get Her\u201d (2015) under the EarDrummers imprint. He is the credited co-producer of \u201cFormation\u201d alongside Mike Will and Beyonc\u00e9: in interviews he has said that he and Mike Will were trading ideas at his house when the original beat came together, and that Mike Will then took it to Swae Lee, who freestyled the chorus over it. Pluss won a Grammy for Best Rap Song in 2018 for co-producing Kendrick Lamar\u2019s \u201cHUMBLE.\u201d (2017) with Mike Will."
  },

  "atlanta-trap": {
    label: "Atlanta trap",
    definition: "A subgenre of Southern hip hop that emerged in Atlanta in the early 2000s, named for the \u201ctrap house\u201d (slang for a place where crack cocaine is sold) and known for its slow tempos, half-time hi-hat patterns, distorted 808 sub-bass, and minimalist arrangements built around a few tightly-programmed elements. T.I.\u2019s 2003 album Trap Muzik popularized the name. By the mid-2010s trap had become the dominant rhythmic feel of mainstream pop and hip hop, with Atlanta producers (Mike Will Made-It, Metro Boomin, Zaytoven, Lex Luger, and others) working on records that ran the chart from 2012 onward. \u201cFormation\u201d is built on a trap rhythmic foundation, with a New Orleans brass-band layer added on top."
  },

  "marching-band": {
    label: "marching band",
    definition: "An ensemble of brass, woodwinds, and percussion that performs while moving (parading, marching, or in choreographed formation), distinct from a concert band that plays seated. American marching-band culture is shaped by two especially powerful Black traditions: the New Orleans brass band tradition (which feeds the second-line parade) and the HBCU homecoming-band tradition that came to national attention through the films Drumline (2002) and the documentary Halftime. \u201cFormation\u201d\u2019s chorus uses a brass-and-snare-drum stab that explicitly evokes that tradition; Beyonc\u00e9 said in interviews she wanted the song to be playable by a marching band, and her later live shows used HBCU-trained drumlines and brass sections, most famously at her 2018 Coachella headlining set, documented as the film Homecoming."
  },

  "second-line": {
    label: "second line",
    definition: "A specifically New Orleans tradition of street parade, in which a brass band leads the \u201cmain line\u201d (the people the parade is for, often a funeral procession or a benevolent-society anniversary) and a \u201csecond line\u201d of dancers and musicians follows behind, dancing, twirling parasols, and improvising. The second line is also the name of the syncopated rhythm pattern played by the bass drum and snare drum in the brass-band style: a pattern with a long-short-long feel that gives New Orleans music its distinctive forward propulsion. The second-line rhythm runs through New Orleans-rooted styles from Louis Armstrong\u2019s early jazz to bounce music to brass-band hip hop. The horn stab in \u201cFormation\u201d\u2019s chorus draws on the second-line tradition and its sonic associations with public Black New Orleans celebration."
  },

  "trap-music": {
    label: "trap",
    definition: "Short for Atlanta trap; the subgenre of Southern hip hop that emerged in Atlanta in the early 2000s and became the dominant rhythmic feel of mainstream pop and hip hop in the 2010s. Defining sonic features include slow tempos (often 70\u201385 BPM, doubled to 140\u2013170 in the half-time hi-hat patterns), heavy distorted 808 sub-bass, sparse arrangements built around a few sharply-programmed elements, and a vocal delivery style that sits somewhere between rapping and singing. \u201cFormation\u201d is built on a trap rhythmic foundation."
  },

  "bounce-music": {
    label: "bounce music",
    definition: "A New Orleans dance subgenre that emerged in the early 1990s, built on rapid call-and-response chants over the \u201cTriggerman\u201d beat (sampled from the Showboys\u2019 1986 record \u201cDrag Rap\u201d) and the \u201cBrown Beat\u201d (sampled from Derek B\u2019s 1988 \u201cRock the Beat\u201d). Bounce is the dance music of working-class Black New Orleans neighborhoods and second-line parades, and it has long been associated with a queer Black cultural ecology that includes performers like Big Freedia, Sissy Nobby, and the late Messy Mya, all of whom worked in or alongside the bounce scene. \u201cFormation\u201d uses two voices from this scene (Mya and Freedia) and the New Orleans associations they carry."
  },

  "messy-mya": {
    label: "Messy Mya",
    definition: "American bounce rapper, YouTube comedian, and street performer (Anthony Michael Barr\u00e9, December 15, 1987 \u2013 November 14, 2010). Mya was a queer Black New Orleanian who built a substantial following on YouTube in the late 2000s with comedic, profane, sharply-observed videos shot around the city, often with the catchphrase \u201cnow who gonna pop me?\u201d He was murdered in the city\u2019s 7th Ward at age 22, leaving his girlfriend\u2019s baby shower; the murder remains unsolved. Two of his lines (\u201cwhat happened at the New Orleans?\u201d and \u201cI like that\u201d) appear in \u201cFormation\u201d as samples; in February 2017 his sister and sole heir Angel Barr\u00e9 sued Beyonc\u00e9 for $20 million, claiming the samples had been used without consent and that Mya had not been credited as a writer. The case settled in February 2018 on undisclosed terms."
  },

  "big-freedia": {
    label: "Big Freedia",
    definition: "American bounce rapper and performer (Freddie Ross Jr., born 1978, in New Orleans), widely called \u201cthe Queen of Bounce.\u201d Freedia is a Black gender-nonconforming artist who uses she/her pronouns in performance and either she/her or he/him in personal life; her presence is one of the central public faces of New Orleans bounce music and its associated queer Black cultural ecology. She has been a featured voice on \u201cFormation\u201d (\u201cI did not come to play with you hoes / I came to slay, bitch\u201d) and on Drake\u2019s \u201cNice for What\u201d (2018), and starred in the Fuse reality series Big Freedia: Queen of Bounce from 2013 to 2017. Her presence on \u201cFormation\u201d connects the song to the queer Black New Orleans tradition that the framing reading places at the center of the song\u2019s political work."
  },

  "fair-use": {
    label: "fair use",
    definition: "A doctrine in U.S. copyright law (codified at 17 U.S.C. \u00a7107) that permits limited use of copyrighted material without the rightsholder\u2019s permission for purposes such as criticism, comment, news reporting, teaching, scholarship, or research. Whether a particular use qualifies as fair use depends on a four-factor test: the purpose and character of the use (especially whether it is \u201ctransformative\u201d), the nature of the copyrighted work, the amount used, and the effect on the market for the original. In the Messy Mya estate\u2019s 2017 lawsuit against Beyonc\u00e9, Beyonc\u00e9\u2019s legal team argued that the samples qualified as fair use; in July 2017, U.S. District Judge Nannette Jolivette Brown denied the motion to dismiss, ruling that the samples had not been transformed in the legal sense the doctrine requires. The case settled in February 2018 on undisclosed terms."
  },

  "melina-matsoukas": {
    label: "Melina Matsoukas",
    definition: "American film and music-video director (born 1981, in the Bronx), the director of the music videos for Beyonc\u00e9\u2019s \u201cFormation\u201d (2016) and Rihanna\u2019s \u201cWe Found Love\u201d (2011) and \u201cS&M\u201d (2010), among many others. Matsoukas trained at NYU\u2019s Tisch School of the Arts and the AFI Conservatory; she has won two Grammys for Music Video of the Year. Her feature directorial debut, Queen & Slim (2019, written by Lena Waithe), tells the story of a young Black couple who become fugitives after a traffic-stop killing. Her video work for \u201cFormation\u201d was named the greatest music video of all time by Rolling Stone in 2021."
  },

  "arthur-jafa": {
    label: "Arthur Jafa",
    definition: "American filmmaker, cinematographer, and video artist (born 1960, in Tupelo, Mississippi). Jafa is known for his sustained interest in what he has called the \u201cspecific power, beauty, and alienation of Black being\u201d and his attempt to develop a Black cinema with what he calls Black aesthetic specificity. He was the cinematographer of Julie Dash\u2019s landmark Daughters of the Dust (1991), the first feature film by an African American woman to receive theatrical distribution in the U.S., and he served as camera operator on the \u201cFormation\u201d music video, where his hand is visible in the documentary-grain texture of several scenes. His video installation Love Is the Message, the Message Is Death (2016), a seven-minute compilation of Black American footage cut to Kanye West\u2019s \u201cUltralight Beam,\u201d won the Golden Lion at the 2019 Venice Biennale."
  },

  "malcolm-x": {
    label: "Malcolm X",
    definition: "American Black Muslim minister, organizer, and writer (Malcolm Little, May 19, 1925 \u2013 February 21, 1965). Malcolm X was the most prominent national spokesman for the Nation of Islam from 1952 until his break with the organization in 1964; in the year between his break and his assassination, he made the hajj to Mecca, founded the Organization of Afro-American Unity, and revised many of his earlier positions while sharpening his critique of American racism, U.S. foreign policy, and the limits of mainstream civil-rights liberalism. He was assassinated at the Audubon Ballroom in Harlem in February 1965 by gunmen tied to the Nation of Islam. His Autobiography of Malcolm X, co-written with Alex Haley and published posthumously in 1965, is one of the foundational works of twentieth-century African American political writing. The X-formation in the \u201cFormation\u201d music video and the Super Bowl performance is widely understood as a reference to him."
  },

  "pazz-and-jop": {
    label: "Pazz & Jop",
    definition: "An annual U.S. music critics\u2019 poll, run by The Village Voice from 1971 through 2018, in which several hundred working music critics submitted year-end ballots ranking their top albums and singles of the year. The poll was created and named by the critic Robert Christgau (\u201cpazz\u201d for jazz, \u201cjop\u201d for pop, in his characteristically wry phrasing). For most of its run it was the most prestigious year-end critics\u2019 poll in American popular music. \u201cFormation\u201d topped the 2016 singles poll. The Voice folded as a print publication in 2018; subsequent attempts to continue the poll under other auspices have not had the same authority."
  },

  "trap-808": {
    label: "trap-style 808 drums",
    definition: "The drum-machine sounds and programming style closely associated with Atlanta trap. The 808 in question is the Roland TR-808, a drum machine released in 1980 (and discussed elsewhere in this glossary). Trap producers in the 2000s and 2010s rediscovered the 808\u2019s sub-bass kick drum and built it into a signature element: the kick is heavily sustained and pitch-tuned so that it functions as both percussion and bass, the snare and clap are tightly programmed, and the hi-hat patterns are sub-divided into rapid sixteenth-note rolls (the \u201ctriplet hat\u201d patterns are a particular trap signature). \u201cFormation\u201d uses this rhythmic vocabulary, with Mike Will Made-It and his engineer Jaycen Joshua adding distortion and saturated upper harmonics to the 808 to make it cut through the mix."
  },

  "vocal-fry": {
    label: "vocal fry",
    definition: "A vocal register, lower than chest voice, in which the vocal folds are loose enough that they vibrate irregularly and produce a creaky, rattling sound. Fry is a normal feature of speech in many languages and many speakers (the lower register most people use first thing in the morning); it has been the subject of disproportionate criticism in U.S. English when used by women and girls (the most-cited 2010s example being the way young women were criticized for fry while young men using the same register were not). In music, vocal fry is used as a deliberate timbral choice: a low, rattling, conversational sound that signals casualness, intimacy, threat, or refusal-to-perform-prettily, depending on context. Beyonc\u00e9\u2019s opening lines on \u201cFormation\u201d (\u201cy\u2019all haters corny with that Illuminati mess\u201d) are delivered in deliberate vocal fry, sitting near the floor of her chest voice."
  },

  "code-switching": {
    label: "code-switching",
    definition: "The linguistic and cultural practice of moving between two or more languages or dialects, or between two or more registers within a single language, depending on the social context. The term comes originally from sociolinguistics; it has come into wider use to describe the labor that members of marginalized groups, especially Black Americans, often do when they shift their speech, dress, or comportment to fit white-coded professional or institutional spaces. To refuse to code-switch is to maintain one\u2019s home register in spaces that expect a different one; the cultural critic Lauren Chanel Allen, writing in Teen Vogue, read Beyonc\u00e9\u2019s vocal delivery on \u201cFormation\u201d as exactly such a refusal: a Houston-and-Atlanta voice on a Houston-and-Atlanta beat, instead of the radio-pop voice the industry had been asking her to use."
  },

  "hbcu": {
    label: "HBCU",
    definition: "Historically Black College or University. The HBCU system in the United States is a network of more than one hundred colleges and universities founded primarily before 1964 to educate Black students in a country that systematically barred them from white institutions. The system includes Howard, Spelman, Morehouse, Hampton, Tuskegee, Fisk, Florida A&M, Jackson State, Grambling, and dozens of other institutions, many in the South. HBCU homecoming-band culture (the marching bands, the drumlines, the dance lines, the halftime-show formations) is one of the most powerful Black musical and visual traditions in contemporary American life; the films Drumline (2002) and Beyonc\u00e9\u2019s own Homecoming (2019), documenting her 2018 Coachella headlining set, both center it. The marching-band horn stab in \u201cFormation\u201d points toward this tradition."
  },

  /* ============================
     Module 3 Track 1: Tito Puente and "Oye Como Va"
     ============================ */

  "palladium-ballroom": {
    label: "Palladium Ballroom",
    definition: "The dance hall at 53rd Street and Broadway in midtown Manhattan that was the central institution of New York Latin music from 1947 to 1966. Featured live Latin music four nights a week, anchored by the \u201cBig Three\u201d orchestras of Machito, Tito Puente, and Tito Rodr\u00edguez. The Palladium was unusual for its time in being racially and ethnically integrated: Puerto Rican, Cuban, Italian, Jewish, African American, and Irish dancers and musicians shared the floor. Closed in 1966 after a police drug raid invoking the Cabaret License Law. The era is widely treated as the high point of the New York mambo and cha-cha-ch\u00e1 scene."
  },

  "charanga": {
    label: "charanga",
    definition: "A Cuban dance band format built around flute, violin (or violins), piano, bass, and percussion, descended from the early-20th-century danz\u00f3n ensembles. The charanga sound is lighter and more melodic than the brass-heavy mambo orchestra; the wooden five-key Cuban flute and the violin carry the lead lines. Popular in Cuba in the 1940s and 1950s and exported to New York alongside the mambo. Tito Puente\u2019s \u201cOye Como Va\u201d uses a charanga texture (Pacheco\u2019s flute, Legarreta\u2019s violin) layered with a full brass section."
  },

  "arsenio-rodriguez": {
    label: "Arsenio Rodr\u00edguez",
    definition: "Cuban tres player, composer, and bandleader (1911-1970), one of the most influential figures in 20th-century Cuban music. Born in Matanzas province, blinded in childhood by a horse kick, he developed the conjunto format that expanded the traditional son sextet by adding a piano, a second trumpet, and a conga drum, transforming the rhythm and texture of Cuban dance music in the 1940s. Moved to New York in 1953 and continued recording and performing until his death. His harmonic and rhythmic innovations are foundational to mambo, son montuno, and salsa."
  },

  "ned-sublette": {
    label: "Ned Sublette",
    definition: "American musicologist, composer, and music journalist (born 1951), author of Cuba and Its Music: From the First Drums to the Mambo (Chicago Review Press, 2004) and The World That Made New Orleans (Lawrence Hill, 2008). His work argues for the centrality of Caribbean (especially Cuban) musical traditions to the development of American popular music, and is widely cited in the literature on the New York mambo and salsa eras."
  },

  "el-rey-bravo": {
    label: "El Rey Bravo",
    definition: "Tito Puente\u2019s 1962 LP for Tico Records, recorded at the Hotel Riverside Plaza Ballroom in Manhattan and produced by Teddy Reig. The album was a working dance-floor record at the time of its release; its second track, \u201cOye Como Va,\u201d was a modest hit in 1962 but would become an international standard after Carlos Santana covered it in 1970. The album has been reissued by Craft Latino in remastered editions in the 2020s."
  },

  "cachao": {
    label: "Cachao",
    definition: "Stage name of Israel L\u00f3pez Vald\u00e9s (1918-2008), Cuban bassist, composer, and bandleader, widely credited (with his brother Orestes) with co-inventing the mambo in the late 1930s through compositions written for the Antonio Arca\u00f1o orchestra. After the 1959 revolution he settled first in Spain, then in Las Vegas and Miami, where he continued performing and recording into his late eighties. His 1957 mambo \u201cChanchullo\u201d is the source of the piano figure Puente reworked into \u201cOye Como Va.\u201d His descargas (jam sessions) of the late 1950s are foundational documents of Afro-Cuban improvised music."
  },

  "johnny-pacheco": {
    label: "Johnny Pacheco",
    definition: "Dominican-born flutist, composer, bandleader, and music executive (1935-2021), one of the central figures in 20th-century New York Latin music. Played in Tito Puente\u2019s orchestra (including on \u201cOye Como Va\u201d) before co-founding Fania Records with the lawyer Jerry Masucci in 1964. Pacheco was Fania\u2019s musical director through the 1970s and is widely credited with popularizing the term \u201csalsa\u201d as a label for the New York-grown Latin sound. The framing reading covers his role in the salsa boom; he reappears here as a sideman a few years before Fania began."
  },

  "dorian-mode": {
    label: "Dorian mode",
    definition: "One of the seven traditional church modes, equivalent to the major scale starting on its second note (so D Dorian uses the white keys of the piano from D to D, with no sharps or flats). Compared to a natural minor scale starting on the same note, Dorian raises the sixth, which gives it a brighter and more open sound than minor while keeping the minor third that grounds it. \u201cOye Como Va\u201d is in A Dorian, alternating between A minor 7 and D 7, the two chords built on the mode\u2019s tonic and fourth. The Dorian sound is common in jazz, in Cuban dance music, in much of British folk, and in 1960s and 1970s rock (\u201cScarborough Fair,\u201d \u201cEleanor Rigby,\u201d \u201cSo What\u201d)."
  },

  "ostinato": {
    label: "ostinato",
    definition: "A musical figure (a melodic line, a rhythmic pattern, a chord progression) that repeats throughout a section of music or sometimes throughout an entire piece, while other elements change around it. The Italian word means \u201cstubborn,\u201d and that is what an ostinato does: it stays put while the rest of the music moves. The piano block-chord pattern in \u201cOye Como Va\u201d is an ostinato; so is most bass-line repetition in funk and hip hop, the chaconne and passacaglia of Baroque music, and the looped sample of much of contemporary popular music."
  },

  "the-pocket": {
    label: "the pocket",
    definition: "Musicians\u2019 vocabulary for the locked-in rhythmic spot where a band\u2019s separate parts collectively imply a steady beat without any single instrument simply playing the beat on the surface. A drummer playing slightly behind the bassist, the bassist playing slightly ahead of the rhythm guitarist, and the keyboard player splitting the difference can produce a pocket the dancer hears as a clear groove, even though no one in the band is laying it down on its own. The term comes mainly from R&B and funk; the same idea organizes most great dance-band music, including the rhythm section of Puente\u2019s \u201cOye Como Va.\u201d"
  },

  "ethan-hein": {
    label: "Ethan Hein",
    definition: "American music theorist, educator, and writer who teaches at New York University and the New School. His blog, ethanhein.com, has been an unusually rich source of accessible analytical writing about popular music since the late 2000s, covering everything from Beatles harmony to hip hop production to Cuban dance music. The Track 1 listening guide draws on his analysis of \u201cOye Como Va\u2019s\u201d Dorian harmony and rhythmic figure."
  },

  "horn-section": {
    label: "horn section",
    definition: "The group of wind instruments (trumpets, trombones, saxophones) within a band. \u201cHorns\u201d in popular-music usage usually means brass and saxophones together, even though a saxophone is technically a woodwind. The horn section provides the punchy melodic riffs and harmonic sustain that thicken a soul, funk, salsa, or big-band arrangement. Puente\u2019s \u201cOye Como Va\u201d horn section is unusually large: three trumpets, one trombone, four saxophones plus a baritone."
  },

  "vibraphone": {
    label: "vibraphone",
    definition: "A tuned percussion instrument with metal bars laid out like a piano keyboard, struck with mallets, and amplified by tubular resonators below each bar. A motor turns small disks inside the resonators, producing the slow vibrato (the \u201cvibe\u201d) that gives the instrument its name. Developed in the United States in the 1920s and adopted by jazz players in the 1930s. Tito Puente recorded extensively on vibraphone and is credited with bringing it into the Latin orchestra format."
  },

  "timbales": {
    label: "timbales",
    definition: "Paired high-pitched single-headed drums of Cuban origin, mounted on a stand at chest height and played with thin wooden sticks. The drums are tuned to slightly different pitches; the player switches between striking the heads, the metal shells (the c\u00e1scara pattern), and a cowbell mounted between them. Timbales are the central percussion instrument of midcentury Cuban dance music, and Tito Puente, perhaps more than any other player, established the timbales as a front-of-the-stage solo voice rather than a back-of-the-band timekeeper."
  },

  "mulata": {
    label: "mulata",
    definition: "Spanish noun describing a woman of mixed Black and European ancestry. The word descends from the Spanish colonial racial-classification system of the Caribbean; many Spanish-speakers today consider it offensive (its English cognate, mulatto, is similarly considered dated and offensive in most current usage). In Cuban dance-music lyrics of the 1940s through 1960s, however, mulata appeared frequently as a stock romantic or celebratory term of address, often without conscious racial-political weight on the part of the writer. The word\u2019s use in \u201cOye Como Va\u201d sits in that midcentury idiom and is not transferable to current contexts; today\u2019s Latin musicians and writers generally reach for other vocabulary."
  },

  /* ============================
     Module 3 Track 2: Joe Bataan and "Gypsy Woman"
     ============================ */

  "frankie-lymon": {
    label: "Frankie Lymon",
    definition: "African American doo-wop singer (1942-1968) who, with his group the Teenagers, recorded \u201cWhy Do Fools Fall in Love\u201d in 1956 when he was thirteen. The song was a number-one R&B and number-six pop hit and made Lymon the first Black teen idol of the rock-and-roll era. He was a major influence on a generation of young Black, Latino, and white singers in 1950s and early 1960s New York, including Joe Bataan. Lymon\u2019s career collapsed quickly after his voice changed; he died of a heroin overdose at twenty-five."
  },

  "dragons-gang": {
    label: "the Dragons",
    definition: "A predominantly Puerto Rican street gang in mid-twentieth-century East Harlem, one of dozens of neighborhood gangs that organized New York\u2019s working-class teenage social life in the 1950s and 1960s. Joe Bataan was, by his own account, named the Dragons\u2019 president when he was about fifteen, before the stolen-car arrest that sent him upstate. Bataan was not Puerto Rican by parentage but was accepted into a Puerto Rican gang because he had grown up alongside the same kids in El Barrio."
  },

  "coxsackie": {
    label: "Coxsackie Correctional Facility",
    definition: "A New York State prison in upstate Greene County, opened in 1935 and historically operated as a youth and young-adult facility. Joe Bataan served roughly five years at Coxsackie beginning at age fifteen, on a stolen-car charge. He has said in interviews that he learned to play the piano during his time inside and that the experience redirected his life toward music. He returned to a similar facility in the 1980s, this time as a youth counselor at the Bridges Juvenile Center in the Bronx."
  },

  "latin-swingers": {
    label: "Joe Bataan and the Latin Swingers",
    definition: "Joe Bataan\u2019s first band, formed in 1965 or 1966 in East Harlem after his release from Coxsackie. Bataan recruited a group of neighborhood teenagers, most of them eleven to thirteen years old at the start, and taught himself the piano alongside teaching them their parts. The band played weddings, dances, and small ballrooms in the Bronx and East Harlem before being signed to Fania Records in 1966. The personnel on the 1967 Gypsy Woman LP is essentially the Latin Swingers, with Bataan on piano and English vocals and Joe Pagan on Spanish vocals."
  },

  "tropicoro-ballroom": {
    label: "Tropicoro Ballroom",
    definition: "A Bronx Latin music venue active in the 1960s, one of the regular gigging spots for the young boogaloo and Latin soul bands of the era including Joe Bataan and the Latin Swingers. The Tropicoro and similar Bronx and Manhattan ballrooms (Colgate Gardens, the Hunts Point Palace, the Cheetah Club) were where the next generation of Latin musicians built audiences after the closing of the Palladium in 1966."
  },

  "joe-cuba": {
    label: "Joe Cuba",
    definition: "Stage name of Gilberto Miguel Calder\u00f3n Cardona (1931-2009), Puerto Rican-born conga player and bandleader of the Joe Cuba Sextet, the New York group most often called the godfather of Latin boogaloo. The sextet\u2019s 1966 single \u201cBang Bang\u201d was the genre\u2019s first major commercial hit, selling around a million copies; their earlier \u201cEl Pito (I\u2019ll Never Go Back to Georgia)\u201d in 1965 had already pointed the way. Joe Cuba is often credited as the first major exponent of what would later be called Nuyorican music, and his sextet format was unusual for keeping the band small enough to play teenage social clubs that could not afford a full orchestra."
  },

  "pete-rodriguez": {
    label: "Pete Rodriguez",
    definition: "Puerto Rican-born pianist, singer, and bandleader (born 1932) whose 1967 single \u201cI Like It Like That\u201d became one of the genre-defining boogaloo recordings. Rodriguez\u2019s career was almost entirely confined to the boogaloo era; unlike most of his contemporaries he did not move on to salsa when the boogaloo wave passed. The 2015 documentary We Like It Like That takes its title from his hit."
  },

  "king-nando": {
    label: "King Nando",
    definition: "Stage name of Fernando Rivera (1945-2008), Puerto Rican-American boogaloo bandleader and songwriter active in New York from the mid-1960s through the early 1970s. His mid-1960s hit \u201cFortuna\u201d had international reach, and his three boogaloo LPs (Shing-A-Ling With King Nando and His Orchestra, El Solitario, and Unpredictable Sounds) document the genre\u2019s peak. King Nando is widely quoted across the literature on boogaloo\u2019s end describing the industry-wide shutout that killed the genre when the young bands tried to organize for better pay and top billing."
  },

  "the-impressions": {
    label: "the Impressions",
    definition: "Chicago vocal group, originally founded in 1958 as the Roosters by Sam Gooden, Richard Brooks, and Arthur Brooks, which by the early 1960s had become the trio of Curtis Mayfield, Sam Gooden, and Fred Cash. Recording for ABC-Paramount, the Impressions had a string of hits in the 1960s including \u201cGypsy Woman\u201d (1961), \u201cIt\u2019s All Right\u201d (1963), \u201cKeep On Pushing\u201d (1964), \u201cPeople Get Ready\u201d (1965), and \u201cWe\u2019re a Winner\u201d (1968). Mayfield\u2019s songwriting for the group made the Impressions one of the central voices of soul music\u2019s civil rights moment."
  },

  "jerry-masucci": {
    label: "Jerry Masucci",
    definition: "Italian-American lawyer (1934-1997) who co-founded Fania Records in 1964 with the flutist Johnny Pacheco. Masucci handled the business side of the operation while Pacheco handled the music. The two of them built Fania into the dominant Latin music label of the 1970s salsa boom; the label\u2019s relationships with its artists were widely contested over royalties and ownership, and several major Fania artists, including Joe Bataan, eventually left over financial disputes."
  },

  "salsoul-records": {
    label: "Salsoul Records",
    definition: "New York record label founded in 1974 by the Cayre brothers (Kenneth, Stanley, and Joseph) with Joe Bataan as a creative co-founder. Bataan named the label by combining \u201csalsa\u201d and \u201csoul\u201d to describe the fusion he had been working on; he sold his interest early on and the label was largely steered by the Cayres. Salsoul became one of the central labels of late-1970s disco, with the Salsoul Orchestra (an in-house ensemble built around former Philadelphia International musicians) producing some of the era\u2019s most influential dance records."
  },

  "rap-o-clap-o": {
    label: "\u201cRap-O Clap-O\u201d",
    definition: "Joe Bataan\u2019s 1979 single on Salsoul Records, recorded a few months after the Sugarhill Gang\u2019s \u201cRapper\u2019s Delight,\u201d that is among the earliest commercially released rap recordings. \u201cRap-O Clap-O\u201d included rapping in Spanish as well as English and was a top-ten hit across much of Europe, where it is sometimes credited as the first international rap hit. It barely charted in the United States. The orange-background publicity image of Bataan in suspenders and a hand-painted Rap-O Clap-O t-shirt that opens this listening guide is from this period."
  },

  "conga": {
    label: "conga",
    definition: "A tall single-headed hand drum of Cuban origin, played in pairs or sets of three at a standing height, struck with the palms and fingers. Congas are the central hand-drum sound of Afro-Cuban dance music and (through that route) of all the New York Latin genres in this module: mambo, cha-cha-ch\u00e1, boogaloo, salsa, Latin jazz, salsoul, and reggaeton. The conga is the instrument most often used to teach the basic Afro-Cuban rhythmic patterns (the tumbao, the martillo) on which a Latin band\u2019s groove is built."
  },

  "trombone": {
    label: "trombone",
    definition: "A brass wind instrument with a sliding inner tube that the player extends and contracts to change the pitch. Trombones can be used in concert orchestras, jazz big bands, ska and reggae horn sections, soul and funk arrangements, and Latin dance bands. The two-trombone front line that Joe \u201cChickie\u201d Fuente and Ruben Hernandez play on \u201cGypsy Woman\u201d became a signature texture of the late-1960s Fania sound, picked up most famously by Willie Col\u00f3n and Hector Lavoe."
  },

  "nuyorican": {
    label: "Nuyorican",
    definition: "A term, originally a slur but reclaimed in the 1970s, for New York-born Puerto Ricans and the cultural production of New York-born Puerto Ricans. The Nuyorican generation came of age in the 1960s and 1970s, born to parents who had migrated during the postwar Operation Bootstrap years. Their experience was bicultural and bilingual in ways their island-born parents\u2019 was not, and Nuyorican literature, theater, and music (the Nuyorican Poets Cafe was founded in 1973 on the Lower East Side) became a self-conscious cultural movement. Boogaloo and Latin soul are sometimes called the first Nuyorican music."
  },

  "carlos-santana": {
    label: "Carlos Santana",
    definition: "Mexican-born American guitarist and bandleader (born July 20, 1947, in Autl\u00e1n de Navarro, Jalisco). Carlos started on the violin at age five, taught by his mariachi-violinist father Jos\u00e9; he switched to guitar at eight after the family moved to Tijuana in 1955. He played the Tijuana club scene as a teenager, joined his family in San Francisco in 1963, graduated from Mission High School in 1965, was naturalized as a US citizen the same year, and started the Santana Blues Band in October 1966. Now widely considered one of the founders of Latin rock; his playing fuses electric blues guitar phrasing (B.B. King, T-Bone Walker) with Afro-Cuban and mariachi rhythmic and melodic instincts. The eponymous band he leads has been working continuously since 1966."
  },

  "santana-the-band": {
    label: "Santana (the band)",
    definition: "American rock band founded in San Francisco in October 1966 as the Santana Blues Band by guitarist Carlos Santana, organist and vocalist Gregg Rolie, and a rotating roster of other Bay Area musicians. The classic late-1960s lineup that broke through at Woodstock and recorded the first three studio albums (Santana, 1969; Abraxas, 1970; Santana III, 1971) consisted of Carlos, Rolie, bassist David Brown, drummer Michael Shrieve, conga player Michael Carabello, and timbales/conga player Jos\u00e9 \u201cChepito\u201d Areas. The band\u2019s sound\u2014electric blues-rock guitar over an Afro-Cuban percussion section anchored by congas and timbales\u2014is one of the founding statements of Latin rock. Inducted into the Rock and Roll Hall of Fame in 1998."
  },

  "abraxas-album": {
    label: "Abraxas",
    definition: "Santana\u2019s second studio album, recorded April 17 to May 2, 1970 at Wally Heider\u2019s Studios in San Francisco with producer Fred Catero, and released by Columbia Records on September 23, 1970. The album reached number one on the Billboard 200 and spawned two hit singles, \u201cBlack Magic Woman\u201d (a cover of the Fleetwood Mac song) and \u201cOye Como Va\u201d (a cover of the Tito Puente song). The cover painting, Mati Klarwein\u2019s 1961 Annunciation, became one of the most recognizable rock album covers of the era. Selected for preservation by the Library of Congress in 2015 as a recording of cultural, historical, or aesthetic significance."
  },

  "latin-rock": {
    label: "Latin rock",
    definition: "An umbrella term for rock music that incorporates Latin American rhythmic, melodic, or instrumental elements\u2014most often Afro-Cuban percussion (congas, timbales) and harmonic structures derived from Cuban dance music. The genre crystallized at the end of the 1960s in San Francisco around Santana, whose first three albums (1969-1971) established the sound, but its lineage runs through Ritchie Valens (\u201cLa Bamba,\u201d 1958), War, Malo, Azt\u00e9ca, El Chicano, and many subsequent Chicano and Latin American rock bands. Latin rock is a parallel development to New York salsa\u2014the same generation reaching for similar fusions of US Black popular music with Caribbean and Mexican traditions, but on the West Coast and through the rock idiom rather than through a Latin dance band."
  },

  "mission-district": {
    label: "Mission District",
    definition: "A neighborhood in central San Francisco, named for Mission San Francisco de As\u00eds (1776), that became the city\u2019s primary Mexican-American and later broader Latin American neighborhood from the 1940s onward. The transformation began when Mexican-American residents of the Rincon Hill \u201cMexican Barrio\u201d were displaced by the construction of the western landing of the Bay Bridge in the early 1930s and resettled south in the Mission. By the 1960s the neighborhood had a heavily Chicano character, and the late-1960s and 1970s Chicano cultural renaissance produced lasting institutions there: the bilingual newspaper El Tecolote (1970), the Galer\u00eda de la Raza (1971), and the Mission Cultural Center for Latino Arts (1976). Carlos Santana grew up in the Mission and graduated from Mission High School in 1965."
  },

  "bill-graham": {
    label: "Bill Graham",
    definition: "American concert promoter (1931-1991), born Wulf Wolodia Grajonca in Berlin, who escaped Nazi Germany as a child and became the most influential rock promoter on the US West Coast. Graham ran the Fillmore Auditorium and later the Fillmore West in San Francisco as well as the Fillmore East in New York, and he managed Jefferson Airplane, the Grateful Dead, and Santana, among others. He used his leverage as the Airplane and Dead\u2019s manager to force the organizers of the 1969 Woodstock festival to also book his then-unknown Mission District clients, the Santana Blues Band, on the bill\u2014the booking that made Santana an overnight national act."
  },

  "fillmore-west": {
    label: "Fillmore West",
    definition: "San Francisco rock venue at the corner of Market Street and South Van Ness Avenue, run by Bill Graham from 1968 to 1971 as the West Coast counterpart to his Fillmore East in New York. The Fillmore West (and its predecessor, the Fillmore Auditorium) was the central live venue of the late-1960s San Francisco rock scene, hosting Jefferson Airplane, the Grateful Dead, Janis Joplin, Santana, and most of the rest of the Bay Area\u2019s major bands of the period. Carlos Santana saw B.B. King perform there in the mid-1960s, an experience he has cited as decisive for his decision to commit fully to music."
  },

  "gregg-rolie": {
    label: "Gregg Rolie",
    definition: "American keyboard player, organist, and singer (born 1947), co-founder of Santana with Carlos Santana in 1966 and the band\u2019s lead vocalist on most of the first three albums. Rolie played the Hammond B-3 organ that is, alongside Carlos\u2019s guitar, the band\u2019s most identifiable melodic voice. He left Santana in 1972 along with guitarist Neal Schon to co-found Journey. Rock and Roll Hall of Fame inductee with Santana (1998) and Journey (2017)."
  },

  "hammond-organ": {
    label: "Hammond organ",
    definition: "An electric organ designed by Laurens Hammond and patented in 1934, originally as a low-cost replacement for a pipe organ. The instrument generates tones using rotating tonewheels and shapes them through nine drawbars (per manual) that mix harmonic partials\u2014a kind of mechanical additive synthesis that produces the instrument\u2019s characteristic warm, bright, slightly buzzing timbre. The B-3 model, built from 1954 to 1975 and almost always paired with a Leslie rotating-speaker cabinet, became the standard organ of jazz, gospel, R&B, and rock from the 1950s onward. Gregg Rolie\u2019s Hammond B-3 is one of the two melodic voices (the other being Carlos\u2019s electric guitar) that defines the early Santana sound."
  },

  "jose-chepito-areas": {
    label: "Jos\u00e9 \u201cChepito\u201d Areas",
    definition: "Nicaraguan-born percussionist (born 1946 in Le\u00f3n, Nicaragua), the timbales and conga player on Santana\u2019s classic Woodstock-era lineup. Areas joined the band in 1969, just before the Woodstock performance, and is widely credited (along with Michael Carabello) with deepening the band\u2019s Afro-Cuban rhythmic vocabulary, having grown up with cha-cha-ch\u00e1, mambo, and Cuban dance music traditions. He played on Santana, Abraxas, and Santana III before injuries and band conflicts curtailed his role in the early 1970s."
  },

  "michael-shrieve": {
    label: "Michael Shrieve",
    definition: "American drummer (born 1949 in San Francisco), the youngest member of Santana\u2019s classic Woodstock-era lineup; he was twenty when he played the festival. Shrieve\u2019s extended drum solo in the band\u2019s closing performance of \u201cSoul Sacrifice,\u201d captured in the 1970 documentary film Woodstock, became one of the most-watched drum solos in rock and a defining moment in the band\u2019s breakthrough. He played on the first seven Santana studio albums and remained close to the band as a collaborator after his departure in 1974."
  },

  "autlan-de-navarro": {
    label: "Autl\u00e1n de Navarro",
    definition: "A small town in the western Mexican state of Jalisco, southwest of Guadalajara, with a population of about thirty thousand at the time of Carlos Santana\u2019s 1947 birth there. The town has a long tradition of mariachi music; Carlos\u2019s father, Jos\u00e9, was a working mariachi violinist there before the family moved to Tijuana in 1955."
  },

  "tijuana": {
    label: "Tijuana",
    definition: "Mexican border city directly south of San Diego, California, the principal land crossing point between Mexico and the western United States. By the 1950s and 1960s, when the Santana family lived there, the city\u2019s economy revolved around US tourism, and its nightlife drew US servicemen and college students; the Tijuana Strip\u2019s clubs and bars employed many young Mexican musicians who absorbed American rock and roll, blues, and R&B from US radio stations across the line. Carlos Santana\u2019s teenage musical formation\u2014blues and rock and roll grafted onto a mariachi-trained foundation\u2014happened in this border-city context."
  },

  "wally-heiders": {
    label: "Wally Heider\u2019s Studios",
    definition: "A San Francisco recording studio at 245 Hyde Street, opened by audio engineer Wally Heider in 1969, that became the dominant West Coast studio of the late 1960s and 1970s. The Grateful Dead, Jefferson Airplane, Crosby, Stills, Nash &amp; Young, Creedence Clearwater Revival, and Santana all recorded major albums there. Santana\u2019s Abraxas was recorded at Wally Heider\u2019s from April 17 to May 2, 1970 with producer Fred Catero. The studio was sold in the 1980s and has continued under the name Hyde Street Studios."
  },

  "jefferson-airplane": {
    label: "Jefferson Airplane",
    definition: "American rock band formed in San Francisco in 1965, the first Bay Area band of the 1960s psychedelic-rock generation to achieve international commercial success. The classic 1966-1970 lineup, inducted into the Rock and Roll Hall of Fame in 1996, was Marty Balin (vocals), Paul Kantner (rhythm guitar, vocals), Grace Slick (vocals, keyboards), Jorma Kaukonen (lead guitar, vocals), Jack Casady (bass), and Spencer Dryden (drums). Their 1967 album Surrealistic Pillow, with the Grace Slick-fronted hits \u201cSomebody to Love\u201d and \u201cWhite Rabbit,\u201d was one of the defining recordings of the Summer of Love. The band played Monterey Pop (1967), Woodstock (1969), and Altamont (1969); Bill Graham was their manager during the period that overlaps Santana\u2019s breakthrough."
  },

  "grateful-dead": {
    label: "Grateful Dead",
    definition: "American rock band formed in Palo Alto in 1965, central to San Francisco\u2019s psychedelic and hippie counterculture and to the Haight-Ashbury Summer of Love. The founding members were Jerry Garcia (lead guitar, vocals), Bob Weir (rhythm guitar, vocals), Phil Lesh (bass), Bill Kreutzmann (drums), and Ron \u201cPigpen\u201d McKernan (keyboards, harmonica, vocals). The band came up through the Palo Alto folk and jug-band scene (as Mother McCree\u2019s Uptown Jug Champions, then briefly the Warlocks) before being christened the Grateful Dead in late 1965. Their style fused rock, blues, folk, bluegrass, jazz, and country into long improvisational live performances; the band toured nearly continuously from 1965 until Garcia\u2019s death in 1995, playing more than 2,300 concerts and developing a uniquely devoted touring fan base known as Deadheads. Bill Graham managed the band during the 1969 period that produced the Woodstock-leverage move that put Santana on the festival\u2019s bill."
  },

  "rico-reyes": {
    label: "Rico Reyes",
    definition: "Jos\u00e9 Rico Reyes (1945-2002), American singer and percussionist who was part of the extended Santana band percussion section from roughly 1970 to 1972. Reyes contributed backing vocals and additional percussion on Abraxas (1970, including the Spanish backing vocal on \u201cOye Como Va\u201d and on \u201cEl Nicoya\u201d), then continued through Santana III (1971, where he is credited as a co-writer on \u201cGuajira\u201d) and Caravanserai (1972). Outside the Santana band proper, Reyes also recorded with the Bay Area Latin-rock band Azteca (1972 and 1973) and on the trumpeter Luis Gasca\u2019s 1972 record For Those Who Chant. He returned to Carlos Santana\u2019s working band on the 1992 Milagro album and the 1993 Sacred Fire live record."
  },

  "lake-jackson": {
    label: "Lake Jackson, Texas",
    definition: "A small town in Brazoria County on the Gulf Coast of Texas, southwest of Houston, built in the 1940s as a planned community to house workers at the Dow Chemical complex in nearby Freeport. Selena Quintanilla was born there on April 16, 1971. Her father Abraham Quintanilla Jr. worked at the Dow plant for some years before opening the Tex-Mex restaurant Papa Gayo\u2019s in Lake Jackson in 1980, where Selena and her siblings first performed publicly as a family band. The 1980s oil glut bankrupted the restaurant in 1981 and the Quintanillas moved to Corpus Christi."
  },

  "corpus-christi": {
    label: "Corpus Christi, Texas",
    definition: "A coastal Gulf-of-Mexico city in South Texas, roughly halfway down the Texas coast between Houston and the US-Mexico border. By the late twentieth century the city was around sixty percent Hispanic, with a long-established Mexican American population and a regional center of Tejano music and Tejano-related institutions. The Quintanilla family moved there in 1981 after their Lake Jackson restaurant went bankrupt, and the city became Selena\u2019s home and performance base for the rest of her life. Q-Productions, the Quintanilla family\u2019s recording and management operation, was based in Corpus Christi, and the Selena Museum opened there in 1998 in the former family studio."
  },

  "abraham-quintanilla": {
    label: "Abraham Quintanilla Jr.",
    definition: "American Tejano musician and music industry figure (b. 1939), Selena\u2019s father, manager, and producer of much of the family\u2019s commercial operation. As a young man in the 1950s and 1960s he sang in a Tejano group called Los Dinos. After leaving music for industrial work in the 1970s he turned the next-generation family band, also called Los Dinos, into Selena y Los Dinos and managed Selena\u2019s career through her death. He runs Q-Productions, the company that recorded, managed, and merchandised Selena\u2019s career and continues to control her catalog."
  },

  "ab-quintanilla": {
    label: "A.B. Quintanilla III",
    definition: "American Tejano songwriter, bassist, and producer (b. 1963), Selena\u2019s older brother and the principal music producer behind her commercial peak. As bandleader of Selena y Los Dinos he played bass and wrote or co-wrote most of the songs on Selena\u2019s major albums. He produced Amor Prohibido (1994), the album this listening guide\u2019s track is from, and arranged \u201cBidi Bidi Bom Bom.\u201d After Selena\u2019s death he led the cumbia-pop group A.B. Quintanilla III y los Kumbia Kings into the early 2000s and continues to produce and perform."
  },

  "pete-astudillo": {
    label: "Pete Astudillo (b. 1963)",
    definition: "American Tejano singer, dancer, songwriter, and longtime backup vocalist for Selena y Los Dinos (joined 1988). Astudillo co-wrote many of Selena\u2019s biggest hits with A.B. Quintanilla III, including \u201cComo la Flor\u201d (1992), \u201cAmor Prohibido\u201d (1994), and \u201cBidi Bidi Bom Bom\u201d (1994), winning BMI Songwriter of the Year in 1994. He has described \u201cBidi Bidi Bom Bom\u201d as the only song he ever wrote with Selena directly, helping translate her improvised English-language soundcheck phrases into the Spanish lyric the song was recorded with."
  },

  "chris-perez": {
    label: "Chris P\u00e9rez (b. 1969)",
    definition: "American guitarist, lead guitarist of Selena y Los Dinos from 1990 onward, and Selena\u2019s husband. He and Selena married on April 2, 1992, against her father\u2019s initial objection; her father later accepted the marriage and brought P\u00e9rez back into the band. P\u00e9rez plays the electric guitar parts on Amor Prohibido, including the figure on \u201cBidi Bidi Bom Bom.\u201d After Selena\u2019s death in 1995 he formed the Chris P\u00e9rez Band, which won the 2000 Grammy for Best Latin Rock Album. He published a memoir of his life with Selena, To Selena, With Love, in 2012."
  },

  "selena-y-los-dinos": {
    label: "Selena y Los Dinos",
    definition: "The Tejano band Selena fronted from age nine until her death, named for an earlier 1960s Tejano band of the same name in which her father had played. The 1980s lineup centered on Selena on lead vocals, brother A.B. Quintanilla III on bass, and sister Suzette Quintanilla on drums; subsequent members included keyboardist Ricky Vela, backup vocalist and dancer Pete Astudillo, and from 1990 onward lead guitarist Chris P\u00e9rez (who married Selena in 1992). The band recorded for small regional labels through the 1980s and signed with EMI Latin in 1989."
  },

  "amor-prohibido": {
    label: "Amor Prohibido (1994)",
    definition: "Selena\u2019s fourth studio album, released by EMI Latin on March 13, 1994. Produced by A.B. Quintanilla III and recorded at Manny Guerra\u2019s studio in San Antonio, the album fused Tejano cumbia with synthesizer-rich pop production, rock en espa\u00f1ol guitar work, dancehall and reggae elements, and contemporary R&B vocal practice. Four of its singles topped the Billboard Hot Latin Songs chart (\u201cAmor Prohibido,\u201d \u201cBidi Bidi Bom Bom,\u201d \u201cNo Me Queda M\u00e1s,\u201d \u201cFotos y Recuerdos\u201d), and it became the first Tejano album to reach number one on the Billboard Top Latin Albums chart, where it stayed in the top five for ninety-eight consecutive weeks. It is generally considered Selena\u2019s and her band\u2019s artistic peak."
  },

  "q-productions": {
    label: "Q-Productions",
    definition: "The recording, management, and merchandising operation that Selena\u2019s father Abraham Quintanilla Jr. built around the family\u2019s music business, eventually housed in a state-of-the-art studio in an industrial district of Corpus Christi. The company recorded, promoted, and marketed Selena\u2019s career while she was alive and continues to manage her catalog and likeness today. After Selena\u2019s death in 1995, the studio was converted into the Selena Museum, which opened in 1998 and remains a Corpus Christi tourist destination."
  },

  "emi-latin": {
    label: "EMI Latin",
    definition: "The Latin-music division of the major label EMI Records, founded in 1989 with operations in Los Angeles and Miami. EMI Latin signed Selena in 1989, releasing her self-titled debut that year and her major commercial albums (Ven Conmigo 1990, Entre a Mi Mundo 1992, Selena Live! 1993, Amor Prohibido 1994) through her death in 1995. The label was the major-label infrastructure that scaled Tejano music from a regional Texas-Mexico market into a national and international one, and Selena was its flagship Tejano artist."
  },

  "onomatopoeia": {
    label: "Onomatopoeia",
    definition: "A word or phrase that imitates the sound of the thing it describes, like \u201cbuzz,\u201d \u201cdrip,\u201d \u201cmeow,\u201d or \u201cknock knock.\u201d In song lyrics, onomatopoeic phrases are common in pop and dance music because they cross language boundaries: a syllable like \u201cdoo-wop,\u201d \u201cshoop shoop,\u201d or \u201cbidi bidi bom bom\u201d carries the same meaning to a listener who does not speak the song\u2019s language as to one who does. The title phrase of \u201cBidi Bidi Bom Bom\u201d is onomatopoeia for a heart palpitating with attraction."
  },

  "guacharaca": {
    label: "G\u00fciro / guacharaca",
    definition: "A scraped percussion instrument that gives Latin American dance musics, especially cumbia, their characteristic forward motion. The Cuban g\u00fciro is a hollowed-out gourd with notches carved in one side; the Colombian guacharaca is a longer cane stick with notches. Both are scraped with a stiff brush or a thin metal-tined comb to produce the rasping rhythmic pattern often described as \u201cchu-chu-cu-chu,\u201d running through almost every cumbia recording. On \u201cBidi Bidi Bom Bom\u201d the g\u00fciro scrape is in the foreground throughout, the most consistent rhythmic element on the track."
  },

  "chord-progression": {
    label: "Chord progression",
    definition: "The sequence of chords a song moves through. A chord progression can be very long (a jazz standard might cycle through ten or more distinct chords in a single chorus) or very short (a one-chord vamp, a two-chord ostinato). Songs built on a short repeating chord progression hold an audience\u2019s attention through rhythm, ensemble, and melody rather than through harmonic motion; this is the architecture of much American funk, reggae, and salsa, and of \u201cBidi Bidi Bom Bom,\u201d which sits on the same four-chord I-IV-V-IV cycle from the first downbeat to the last."
  },

  "clave": {
    label: "Clave",
    definition: "The five-stroke rhythmic pattern, distributed across two bars, that anchors most Cuban dance music and the salsa genre that grew out of it. The two halves of the pattern are not symmetrical: a 3-2 clave puts three strokes in the first bar and two in the second, while a 2-3 clave reverses the order. Salsa arrangers organize an entire ensemble around the clave, with each instrument\u2019s pattern locking against it. Cumbia, Selena\u2019s rhythmic foundation on \u201cBidi Bidi Bom Bom,\u201d is a Colombian rather than Cuban tradition and is not built on clave; the cumbia walking groove and the g\u00fciro scrape do the structural work that clave does in salsa."
  },

  "polka": {
    label: "Polka",
    definition: "A fast couples dance and music genre in 2/4 meter, with three quick steps and a hop, that originated among Czech peasants in Bohemia (now part of the Czech Republic) in the early 1830s. The name probably comes from the Czech p\u016flka, meaning \u201chalf-step,\u201d referring to the dance\u2019s short, half-tempo footwork. By 1840 polka had reached the ballrooms of Prague, Vienna, and Paris and set off the international fashion known at the time as \u201cpolkamania,\u201d sweeping through European court and concert music (Strauss, Lanner, Smetana, Dvo\u0159\u00e1k all wrote polkas) and across the Atlantic with European emigration. In the second half of the nineteenth century, German, Czech, and Polish immigrants brought the polka, the waltz, the schottische, and the diatonic button accordion to central Texas, the Texas-Mexico borderland, and northern Mexico. There the polka rhythm and the accordion fused with Mexican song traditions in the music that became conjunto, norte\u00f1o, and Tejano: the \u201coom-pah-pah\u201d substrate that runs underneath \u201cBidi Bidi Bom Bom\u201d and the rest of the Tejano cumbia tradition is descended directly from this nineteenth-century European-immigrant transmission."
  },

  "tego-calderon": {
    label: "Tego Calder\u00f3n (b. 1972)",
    definition: "Tegui Calder\u00f3n Rosario, born September 1, 1972 in Santurce, San Juan, Puerto Rico, and raised in R\u00edo Grande and Carolina near Lo\u00edza on the island\u2019s northeast coast. An Afro-Puerto Rican rapper whose 2002 debut album El Abayarde, released by White Lion Records in Puerto Rico and re-released internationally by BMG U.S. Latin in 2003, is widely regarded as the album that brought reggaeton out of the Puerto Rican mixtape underground and onto major-label distribution. Tego is the genre\u2019s most articulate political voice: his lyrics return repeatedly to Black Puerto Rican identity, the legacy of slavery in the Caribbean, the politics of Lo\u00edza and the island\u2019s African heritage, and Puerto Rican independence. He attended the Escuela Libre de M\u00fasica in San Juan with a percussion concentration before moving to Miami as a teenager, where he absorbed Public Enemy and N.W.A.; he credits Vico C with showing him that hip hop could be done in Spanish."
  },

  "el-abayarde-album": {
    label: "El Abayarde (album)",
    definition: "Tego Calder\u00f3n\u2019s debut studio album, released November 1, 2002 on White Lion Records in Puerto Rico and re-released internationally on BMG U.S. Latin / Sony BMG in 2003. Nineteen tracks, total runtime 57:32, produced collectively by Luny Tunes, DJ Nelson, Maestro, Rafy Mercenario, DJ Joe, DJ Adam, Echo, and Coo-kee, with executive production by El\u00edas De Le\u00f3n. The album sold 50,000 copies in its first week in Puerto Rico, eventually reaching 132,000 copies in the US and more than 350,000 worldwide; it was nominated for a Latin Grammy for Best Rap/Hip Hop Album at the 4th Latin Grammy Awards in 2003. El Abayarde is the album that, along with Daddy Yankee\u2019s 2004 Barrio Fino, Ivy Queen\u2019s Diva, and Don Omar\u2019s The Last Don, internationalized reggaeton; \u201cAbayarde,\u201d Spanish for \u201cfire ant,\u201d was the nickname Tego\u2019s grandmother gave him as a child."
  },

  "loiza": {
    label: "Lo\u00edza",
    definition: "A municipality on Puerto Rico\u2019s northeast coast, just east of San Juan, with the highest concentration of Afro-Puerto Rican residents on the island and the strongest surviving African cultural presence. Lo\u00edza is the historical center of bomba, the Afro-Puerto Rican drum-and-dance tradition; the town\u2019s annual Fiestas de Santiago Ap\u00f3stol (Festival of St. James the Apostle) in late July is one of the major living-tradition events of Black Caribbean Catholicism. When Tego Calder\u00f3n names Lo\u00edza in his lyrics or brings bomba percussion into his reggaeton, he is making a deliberate connection to this tradition and to the Afro-Puerto Rican identity that mainstream Puerto Rican culture has often been reluctant to foreground."
  },

  "santurce": {
    label: "Santurce",
    definition: "A densely populated district of San Juan, Puerto Rico, historically a working-class neighborhood with a strong Afro-Puerto Rican presence and a rich musical history. Tego Calder\u00f3n was born in Santurce and located his recording studio, El Sitio, there as an adult; he has said in interviews that he kept the studio in Santurce as a deliberate statement that the neighborhood is not dying. Santurce has been the home of generations of Puerto Rican musicians, from Ismael Rivera and Rafael Cortijo through the underground reggaeton scene of the 1990s."
  },

  "escuela-libre-de-musica": {
    label: "Escuela Libre de M\u00fasica",
    definition: "The Free School of Music, a network of public conservatories in Puerto Rico that admits students through audition and provides music-conservatory training (instrumental performance, theory, composition) alongside the standard secondary-school curriculum. The flagship school in San Juan has trained generations of Puerto Rican musicians across genres. Tego Calder\u00f3n attended the Escuela Libre de M\u00fasica with a percussion concentration; the conservatory training in Puerto Rican traditional music (bomba, plena, salsa) is part of what allows him to bring those forms into his reggaeton with a working musician\u2019s knowledge rather than as quotation."
  },

  "ismael-rivera": {
    label: "Ismael Rivera (1931-1987)",
    definition: "Puerto Rican salsa singer, songwriter, and bandleader, born in Santurce, often called \u201cEl Sonero Mayor\u201d (The Greatest Sonero) by his peers. Rivera came up in the 1950s with the bandleader Rafael Cortijo and Cortijo\u2019s combo, helping to bring bomba and plena into the mainstream Puerto Rican popular music of the 1950s and 1960s. His 1975 song \u201cLas Caras Lindas (de mi gente negra)\u201d (\u201cThe Beautiful Faces of My Black People\u201d) is a foundational document of Afro-Puerto Rican musical pride. Tego Calder\u00f3n has named Rivera as the central artistic and political model for his own work; the walls of Tego\u2019s studio, El Sitio, are wallpapered with photographs of Rivera."
  },

  "vico-c": {
    label: "Vico C (b. 1971)",
    definition: "Luis Armando Lozada Cruz, born in Brooklyn and raised in Puerto Rico, the foundational figure of Spanish-language hip hop in Puerto Rico and one of the genre\u2019s first major Latin American voices. Active from the late 1980s, Vico C (sometimes \u201cEl Filos\u00f3fo,\u201d \u201cThe Philosopher\u201d) made the early case that hip hop could be performed in Spanish without simply translating English-language conventions, and his work shaped the underground Puerto Rican rap scene out of which reggaeton later emerged. Tego Calder\u00f3n has named Vico C as his most important model for rapping in Spanish and has credited him with making reggaeton imaginable as a Spanish-language music in the first place."
  },

  "eddie-dee": {
    label: "Eddie Dee (b. 1976)",
    definition: "Eddie \u00c1vila, Puerto Rican rapper and reggaeton artist active from the late 1990s. Eddie Dee\u2019s 2000 album El Terrorista de la L\u00edrica was an early-2000s mixtape-era reggaeton release that featured Tego Calder\u00f3n in a guest spot; the appearance was one of the early visibility-building moments for Tego before his own debut album. Eddie Dee\u2019s 2004 compilation 12 Disc\u00edpulos brought together twelve of the genre\u2019s leading artists (Tego, Daddy Yankee, Don Omar, Ivy Queen, Voltio, and others) on a single record and marked a moment of collective genre consolidation just before the 2004-2005 international breakthrough."
  },

  "dj-joe": {
    label: "DJ Joe",
    definition: "Jos\u00e9 Velez, Puerto Rican reggaeton producer active since the late 1990s, one of the producers credited on Tego Calder\u00f3n\u2019s El Abayarde and the lead producer on the album\u2019s biggest single, \u201cPa\u2019 Que Retozen.\u201d DJ Joe also produced influential underground compilations including the Reggaeton Sex and Sandunguero series with DJ Blass and Plan B in the early 2000s, helping establish the dembow-driven sound that defined PR reggaeton at the moment of its commercial breakthrough."
  },

  "rafy-mercenario": {
    label: "Rafy Mercenario",
    definition: "Puerto Rican reggaeton producer, co-credited with DJ Joe on \u201cPa\u2019 Que Retozen\u201d and on several other tracks of Tego Calder\u00f3n\u2019s El Abayarde. Tego name-checks both producers in the song\u2019s opening: \u201cTego Calde con DJ Joe\u2026 Junto a DJ Joe y Rafy Mercenario.\u201d Mercenario was one of the working PR reggaeton beat-makers of the early 2000s commercial moment."
  },

  "white-lion-records": {
    label: "White Lion Records",
    definition: "An independent Puerto Rican record label founded by El\u00edas De Le\u00f3n, focused on emerging Puerto Rican urban music, that brought reggaeton out of the underground mixtape circuit and onto formal commercial distribution in the early 2000s. White Lion released Tego Calder\u00f3n\u2019s El Abayarde in November 2002, selling 50,000 copies in the first week and setting a sales record for the then-underground genre. After the album\u2019s success, BMG U.S. Latin and Sony BMG re-released it internationally in 2003. White Lion continued to be a key label for the genre\u2019s breakout generation."
  },

  "jiggiri-records": {
    label: "Jiggiri Records",
    definition: "Tego Calder\u00f3n\u2019s own record label, founded after the success of El Abayarde to give Tego control over his own catalog and his subsequent releases. Jiggiri now controls the digital reissue rights to El Abayarde, which is why the YouTube and streaming releases of \u201cPa\u2019 Que Retozen\u201d list the phonogram copyright as \u201c\u2117 2003 Jiggiri Records\u201d even though the original 2002 release was on White Lion Records. In 2005, Tego signed a partnership between Jiggiri and Atlantic Records, becoming the first reggaeton artist to have a deal with a major US record company."
  },

  "elias-de-leon": {
    label: "El\u00edas De Le\u00f3n",
    definition: "Puerto Rican music industry executive, founder of White Lion Records, and the executive producer of Tego Calder\u00f3n\u2019s El Abayarde. De Le\u00f3n had Tego participate in several reggaeton compilations to build anticipation for the album, including the 2002 Planet Reggae compilation. His role on El Abayarde was the institutional one: securing distribution, coordinating producers, and bringing a reggaeton album to formal commercial release at a moment when the genre still circulated mostly through underground mixtapes."
  },

  "perreo": {
    label: "Perreo",
    definition: "The signature partnered dance of reggaeton, in which a couple grinds hip-to-hip with the woman in front of the man (the name comes from perro, \u201cdog,\u201d sometimes translated as \u201cdoggy-style dancing\u201d). Perreo emerged in the Puerto Rican underground club scene of the 1990s and became the genre\u2019s default dance form. The dance was the central target of the 2002 Anti-Pornography Campaign led by Senator Velda Gonz\u00e1lez, which sought to ban reggaeton music videos that depicted perreo from Puerto Rican television. Contemporary Puerto Rican feminist writers (notably the LX Project at NYU\u2019s coverage in the 2020s) have reframed perreo as a site of women\u2019s and queer self-expression rather than only the object of older masculinist reggaeton."
  },

  "velda-gonzalez": {
    label: "Velda Gonz\u00e1lez (1933-2016)",
    definition: "Puerto Rican actress, dancer, and Popular Democratic Party senator, who served in the Puerto Rico Senate from 1981 to 2005. In 2002, Gonz\u00e1lez led the Anti-Pornography Campaign that sought to remove perreo dance content and reggaeton lyrics deemed sexually explicit from Puerto Rican television and radio. The campaign coincided with police raids on reggaeton producers (DJ Playero\u2019s home was searched) and the confiscation of mixtape inventories from record stores under penal obscenity codes. Scholars including Petra Rivera-Rideau have argued the campaign was as much about the racial coding of Black Puerto Rican youth as about the explicit content; Gonz\u00e1lez lost her 2004 reelection bid as the campaign\u2019s political moment passed and reggaeton entered the mainstream."
  },

  "el-general": {
    label: "El General (b. 1969)",
    definition: "Edgardo Franco, Afro-Panamanian rapper and singer, one of the founding figures of Spanish-language reggae (reggae en espa\u00f1ol) and a direct precursor of reggaeton. Active from the late 1980s and through the 1990s, El General produced Spanish-language adaptations of Jamaican dancehall riddims for Panamanian and US Latin audiences; his hits \u201cTu Pum Pum\u201d (1991) and \u201cMuevelo\u201d (1991) brought the dancehall-derived sound to a wide Latin American audience. The Panamanian reggae en espa\u00f1ol scene that El General represented was one of the direct sources from which Puerto Rican producers built reggaeton in the early 1990s."
  },

  "dj-playero": {
    label: "DJ Playero",
    definition: "Pedro Gerardo Torruellas Vivoni, Puerto Rican producer and mixtape DJ, the most influential of the early-1990s underground reggaeton mixtape producers. DJ Playero\u2019s mixtape series, sold from car trunks and at PR record stores, gave early visibility to artists including Daddy Yankee (Playero 37, 1992) and shaped the dembow-driven sound that defined the underground scene before commercial reggaeton consolidated in the early 2000s. His home was raided by the Puerto Rican police during the 2002 Anti-Pornography Campaign, and his recordings were confiscated as obscene material."
  },

  "daddy-yankee": {
    label: "Daddy Yankee (b. 1976)",
    definition: "Ram\u00f3n Luis Ayala Rodr\u00edguez, Puerto Rican rapper and reggaeton producer, often called \u201cthe King of Reggaeton.\u201d Came up through DJ Playero\u2019s mixtape series in the 1990s and released his 2004 album Barrio Fino on his own label El Cartel; the album\u2019s breakthrough single \u201cGasolina\u201d became the first reggaeton track to reach a global mainstream audience and established the genre as an international pop force. Daddy Yankee\u2019s commercial trajectory after El Abayarde\u2019s 2002 breakthrough is the story of reggaeton becoming the dominant Spanish-language popular music of the twenty-first century."
  },

  "nwa": {
    label: "N.W.A.",
    definition: "Niggaz Wit Attitudes, a Compton, California hip hop group active 1986-1991, consisting at its commercial peak of Eazy-E, Dr. Dre, Ice Cube, MC Ren, and DJ Yella. Their 1988 album Straight Outta Compton is the foundational document of West Coast \u201cgangsta rap,\u201d a hip hop register centered on first-person accounts of Black urban life, police violence, and the political economy of the post-Reagan inner city. N.W.A.\u2019s confrontational style and their refusal to sanitize the political conditions they were rapping about influenced essentially every subsequent generation of hip hop, including the Spanish-language Caribbean rappers (Tego Calder\u00f3n among them) who absorbed the group as teenagers in the early 1990s."
  }

};
