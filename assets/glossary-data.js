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
 * Inline HTML is permitted in definitions. The glossary loader
 * (assets/glossary.js) injects definitions via .innerHTML, so a small
 * set of inline tags renders correctly:
 *   - <em>...</em> for album, song, book, and film titles, matching
 *     how titles are styled in the listening-guide prose.
 *   - <strong>...</strong> for emphasis where it is genuinely needed
 *     (rare; the convention is to keep definitions plain).
 *   - <a href="...">...</a> for cross-links to other pages on the
 *     site, used sparingly.
 * Do NOT use block-level HTML (no <p>, <ul>, <li>, <div>, <h1>-<h6>,
 * etc.). Definitions are single short paragraphs, no internal
 * structure.
 *
 * HTML entities: use plain & (not &amp;) in non-tag content. Inside
 * an <a href="..."> the URL itself follows normal URL escaping; the
 * surrounding prose stays plain.
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

  "pop": {
    label: "Pop",
    definition: "Short for \u201cpopular music,\u201d but in genre-classification usage \u201cpop\u201d names a specific commercial style: short, hook-driven, melody-forward songs in standard verse-chorus form, designed for radio rotation and built around a lead vocal. Pop draws on whatever the dominant production aesthetic of the moment is (the Brill Building style of the early 1960s, the Motown sound of the mid-1960s, the disco production of the late 1970s, the Minneapolis sound of the mid-1980s, the contemporary streaming-era pop of the 2020s) and tends to soften the musical edges of the genres it borrows from. \u201cFunk and pop,\u201d as a phrase, names a hybrid: the rhythmic vocabulary of funk (a Black American dance music built on tight rhythmic patterns and prominent bass) blended with the formal and melodic conventions of commercial pop."
  },

  "indie-rock": {
    label: "Indie rock",
    definition: "Both a genre and an institutional space. As a genre, indie rock is a loose late-twentieth- and early-twenty-first-century descendant of the 1980s American college-rock and post-punk scenes (R.E.M., the Replacements, Sonic Youth, Pixies, Pavement) that inherited those scenes' guitar-based instrumentation, rough recording aesthetic, and ambivalence about commercial success. As an institutional space, indie rock is the cluster of independent record labels (Sub Pop, Matador, Merge, 4AD, Touch and Go, and in the 2010s the Secretly Group umbrella that covers Dead Oceans, Jagjaguwar, and Secretly Canadian), independent-music magazines and websites (early Pitchfork, Stereogum, Brooklyn Vegan), college and community radio stations, and small-to-mid-sized rock venues that constitute a parallel music industry alongside the major-label pop industry. The genre and the space are entangled: a record made for indie rock distribution will tend to use the genre's sonic vocabulary, and a record using the genre's sonic vocabulary will tend to be received as belonging to the space. Through its first three decades the indie rock space was overwhelmingly white and overwhelmingly male; the late 2010s saw a substantial rebalancing of who got to be at the center of the picture, and Mitski's career is one of the data points scholars and critics use when arguing that point."
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

  "pitchfork": {
    label: "Pitchfork",
    definition: "An online music magazine founded by Ryan Schreiber in Minneapolis in 1995 (originally as Turntable, renamed Pitchfork in 1996), now based in New York. From the late 1990s through the 2010s, Pitchfork was the central critical institution of indie rock and the broader independent-music space, with daily reviews, a 0.0-to-10.0 numerical rating scale (a 7.7 is a positive review; an 8.0 or above is a 'Best New Music' designation that can substantially change an album's commercial trajectory), longer feature pieces, and an annual end-of-year list that helped consolidate critical consensus. A favorable Pitchfork review of a debut or sophomore record by a small-label artist could move that artist from the underground into the wider conversation, and a Best New Music designation could move them onto bigger labels and bigger tours; Mitski's 7.7 review of Bury Me at Makeout Creek in 2014 was the moment that brought her work to Dead Oceans' attention. Cond\u00e9 Nast acquired Pitchfork in 2015 and merged it into GQ in 2024, which reduced the site's editorial staff and the daily review pace; through the listening-guide era this course covers, however, Pitchfork's institutional role in the indie rock space was central."
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

  "one-drop-rule": {
    label: "One-drop rule",
    definition: "The American legal and social principle that any traceable African ancestry made a person legally Black, regardless of how that person looked or how the person identified. The rule was never a single statute, but it was codified across most southern states between roughly the 1890s and the 1930s as part of the broader Jim Crow legal architecture (Virginia\u2019s 1924 Racial Integrity Act was the most explicit statutory codification) and was enforced informally for much longer in the North. The rule had no parallel in the racial-classification systems of Latin America or the Caribbean, where mixed-ancestry categories had legal and social standing; it produced a US Black population that was treated as a single legal and commercial category despite its substantial internal diversity. The rule's enforcement was inseparable from the systematic transfer of wealth, land, and political power away from that population, and it shaped the racial categories the American recording industry would later impose on the music."
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

  "high-frequency": {
    label: "High-frequency",
    definition: "In acoustics, frequency is the rate at which a sound wave vibrates the air, measured in cycles per second (hertz, abbreviated Hz). Higher frequencies produce higher pitches: a low bass note might vibrate at around 50 Hz, a piano middle C at about 262 Hz, and a high violin note at over 2,000 Hz. When a record arrangement is described as filling the \u201chigh-frequency register,\u201d it means the instruments or voices occupying the top of the audible band, above the rhythm section's bass and drums and above the lead vocal: tenor harmony voices, falsetto, high horns, cymbals, and the upper notes of a violin section."
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

  "eddie-palmieri": {
    label: "Eddie Palmieri",
    definition: "Puerto Rican-American pianist, bandleader, and composer (born December 15, 1936, in Spanish Harlem; died August 6, 2025), one of the central figures of New York salsa across the second half of the twentieth century. Palmieri founded the band La Perfecta in 1961 with the unusual configuration of two trombones in place of trumpets, a sound that would influence the broader New York salsa instrumentation; his 1960s and 1970s records (<em>Azucar Pa\u2019 Ti</em>, 1965; <em>Justicia</em>, 1969; <em>Vamonos Pa\u2019l Monte</em>, 1971; <em>Sentido</em>, 1973; <em>The Sun of Latin Music</em>, 1974) combined traditional son montuno and guaracha forms with jazz harmony, modal explorations, and politically explicit lyrics on race, class, justice, and Puerto Rican identity. <em>The Sun of Latin Music</em> won the first Grammy in the Best Latin Recording category in 1975. Palmieri won multiple Grammys across his career and remained active as a recording and touring musician into his eighties. His public advocacy for Puerto Rican statehood, against the carceral system, and on broader Pan-Latin political concerns ran throughout his career."
  },

  "hector-lavoe": {
    label: "H\u00e9ctor Lavoe",
    definition: "Puerto Rican singer (born H\u00e9ctor Juan P\u00e9rez Mart\u00ednez, September 30, 1946, in Ponce, Puerto Rico; died June 29, 1993, in New York), one of the central vocal figures of New York salsa\u2019s commercial peak in the 1970s. Lavoe moved to New York in 1963 and became Willie Col\u00f3n\u2019s lead vocalist from 1967 forward, recording a sequence of canonical Fania albums together (<em>El Malo</em>, 1967; <em>The Hustler</em>, 1968; <em>Cosa Nuestra</em>, 1970; <em>La Gran Fuga</em>, 1971; <em>Lo Mato</em>, 1973). After Col\u00f3n stepped back from performing in the mid-1970s to focus on production, Lavoe led his own band; his solo records (<em>La Voz</em>, 1975; <em>De Ti Depende</em>, 1976; <em>Comedia</em>, 1978) include several of salsa\u2019s most-loved recordings (\u201cMi Gente,\u201d \u201cEl Cantante\u201d written for him by Blades, \u201cPeriodico de Ayer\u201d). Lavoe struggled with addiction across his career; his 1988 suicide attempt (a jump from a Condado hotel balcony in Puerto Rico, following his son\u2019s 1987 accidental death and his HIV diagnosis) left lasting injury. He died of AIDS-related complications at Saint Clare\u2019s Hospital in Manhattan in 1993 at 46. Marc Anthony portrayed him in Leon Ichaso\u2019s 2006 biographical film <em>El Cantante</em>."
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
    definition: "Stage name of Benito Antonio Mart\u00ednez Ocasio (born 1994 in Bayam\u00f3n, raised in Vega Baja, Puerto Rico), the most globally successful Latin music artist of the 2020s. His sound combines reggaeton, Latin trap, dembow, dancehall, salsa, and bomba; his preferred genre descriptor is m\u00fasica urbana. Several of his albums (YHLQMDLG 2020, Un Verano Sin Ti 2022, Deb\u00ed Tirar M\u00e1s Fotos 2025) topped the Billboard 200 in Spanish, with Deb\u00ed Tirar M\u00e1s Fotos becoming the first Spanish-language album to win a Grammy for Album of the Year. His public work has consistently engaged Puerto Rican politics: the 2019 protests that drove Governor Ricardo Rossell\u00f3 from office, post-Hurricane Mar\u00eda recovery, the island's debate over its political status, and gender politics in Latin pop. He has refused fixed categories around sexuality and gender presentation, using drag, queer fashion vocabulary, and same-gender kisses in his videos and stage appearances; the 2020 \u201cYo Perreo Sola\u201d video in which he appeared in drag is the most-cited example. Treated substantively in Module 3's \u201cwhat this module leaves out\u201d section as final-project territory."
  },

  "kany-garcia": {
    label: "Kany Garc\u00eda",
    definition: "Puerto Rican singer-songwriter (born Encarnita Garc\u00eda L\u00f3pez, September 25, 1982, in Toa Baja, Puerto Rico), one of the central figures of contemporary Latin pop and the most prominent out lesbian artist in Spanish-language popular music. Garc\u00eda studied composition and voice at the Conservatorio de M\u00fasica de Puerto Rico, won the Latin Grammy for Best New Artist in 2008 for her debut album <em>C\u00edcaro</em>, and has released a sequence of acoustic-pop and bolero-leaning albums (<em>Boleto de Entrada</em> 2010, <em>Kany Garc\u00eda</em> 2012, <em>Limonada</em> 2016, <em>Soy Yo</em> 2018, <em>Mes\u00e9as</em> 2019, <em>Contra El Viento</em> 2022) that have together won her multiple additional Latin Grammys. On Valentine\u2019s Day 2016 Garc\u00eda came out in an Instagram post announcing her relationship with her partner Jocelyn Troche, marking the first major coming-out by a Latin Grammy-winning woman in the contemporary Spanish-language pop scene; she married Troche in 2019 in a ceremony in Aguas Buenas, Puerto Rico, officiated by the chief justice of the Puerto Rican Supreme Court Maite Oronoz. Garc\u00eda has continued to advocate publicly for LGBTQ+ rights in Puerto Rico, including a public 2020 letter to the Puerto Rican senate supporting Senate Bill 184 banning conversion therapy."
  },

  "tokischa": {
    label: "Tokischa",
    definition: "Dominican rapper (born Tokischa Altagracia Peralta Ju\u00e1rez, March 17, 1996, in Santo Domingo), one of the central figures of contemporary Dominican dembow and a prominent openly bisexual voice in contemporary Latin popular music. Tokischa came up in the Los Frailes neighborhood of Santo Domingo Este, worked initially as an assistant to photographer Raymi Paulus (who has since managed her career), and broke through to international visibility with the 2021 collaborations \u201cLinda\u201d (with Rosal\u00eda) and \u201cPerra\u201d (with J Balvin), the latter of which generated substantial backlash for the video\u2019s racist imagery. Her work has consistently centered explicit queer female sexuality and refused the respectability politics of the broader Latin pop industry; her on-stage kisses with Rosal\u00eda and Madonna (a 2022 remix of Madonna\u2019s \u201cHung Up\u201d that featured Tokischa was released alongside an on-stage Madison Square Garden kiss between the two) became internationally circulated images of contemporary queer Latin pop visibility. Her career has also generated substantial criticism on grounds beyond sexuality, including for her defense of fellow Dominican dembow artist Rochy RD after accusations of sexual assault of a minor; the resulting controversies are part of how a contemporary queer Latin pop persona is constructed and contested in real time. The Bad Bunny Dominican Republic concert appearances of 2022 brought Tokischa into substantively wider circulation."
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

  "pre-chorus": {
    label: "Pre-chorus",
    definition: "A short transitional section in a verse-chorus song, sitting between a verse and the chorus that follows it. The pre-chorus is often where the song's harmonic motion accelerates and the dynamic level begins to rise; it functions as a ramp into the chorus and gives the chorus's arrival more impact when it lands. The pre-chorus typically uses the same lyrics each time it returns (like a chorus, unlike a verse), but is shorter than the chorus and rarely carries the song's title or main hook. In Mitski's \u201cYour Best American Girl,\u201d the pre-chorus (\u201cyou're the sun, you've never seen the night\u201d) is the lyrically densest passage and the place the song's metaphor work happens; it is also where the synthesizer pads and the drums enter for the first time, building the dynamic ramp into the distorted chorus."
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
    label: "Ulster Scots",
    definition: "Protestant settlers from the Scottish Lowlands and the north of Ireland (the Ulster province) who migrated to North America beginning in the early eighteenth century and largely settled in the Appalachian Mountains. They are also called \u201cScots-Irish\u201d (the dominant term in American scholarship) and \u201cScotch-Irish\u201d (an older variant); this course uses \u201cUlster Scots\u201d to keep them distinct from the Catholic Irish who arrived in the great famine-era waves of the 1840s and after, and who appear elsewhere in this module as part of the urban Catholic working-class thread. The Ulster Scots brought a tradition of unaccompanied ballad singing and fiddle playing that, in dialogue with Black musical practice in the same region, became one of the roots of country music."
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
    definition: "An American popular music tradition rooted largely in the Ulster Scots ballad tradition of the Appalachian Mountains, in dialogue with Black musical practice in the same region. Country music took commercial form in the 1920s with figures like the Carter Family and Jimmie Rodgers, was originally marketed as \u201chillbilly\u201d music and rebranded as \u201ccountry and western\u201d in the late 1940s, and became centered on the Nashville recording industry by the 1950s. Hank Williams is widely considered country music\u2019s first superstar. The genre continues to evolve through subgenres including honky-tonk, bluegrass, outlaw country, and contemporary country pop."
  },

  "hip-hop": {
    label: "Hip hop",
    definition: "A musical and cultural movement that emerged in the 1970s in the South Bronx of New York, created primarily by Black, Puerto Rican, and Caribbean American young people. Hip hop centers four traditional elements: DJing, MCing (rapping), graffiti, and breakdancing. As a musical form, it is built on rhythm, sampling, and spoken-word vocal performance, and it has become the dominant popular music of the twenty-first century globally."
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
    definition: "An office building at 1619 Broadway and 49th Street in midtown Manhattan, just north of Times Square, that became the symbolic center of professional pop songwriting in the late 1950s and early 1960s. \u201cBrill Building\u201d is also shorthand for a larger publishing-and-recording system that ran out of 1619 Broadway, the nearby 1650 Broadway (where Aldon Music was actually based), and the offices of the New York independent labels (Atlantic, Scepter, Roulette, Red Bird) that bought the songs the publishers placed. The system worked like this: a music publisher signed songwriters to staff contracts and put them in piano-equipped cubicles to write pop singles, paid them weekly draws against eventual royalties, made cheap piano-and-voice demos of the songs in an in-house demo studio, and employed pluggers whose job was to shop the demos to A&R people at the labels. A label that bought a song would assign it to one of the singers or vocal groups it had under contract; the label paid mechanical royalties on each record pressed back to the publisher, the publisher kept a share and paid the songwriters their share, and the singers were paid a wage or a small per-record fee with no royalty share at all. The system was the direct institutional successor to Tin Pan Alley and carried the same uneven racial dynamics. The writer-canon was overwhelmingly white and disproportionately Jewish American (Carole King and Gerry Goffin, Doc Pomus and Mort Shuman, Jeff Barry and Ellie Greenwich, Barry Mann and Cynthia Weil, Phil Spector, Burt Bacharach and Hal David, Neil Sedaka and Howard Greenfield, Jerry Leiber and Mike Stoller); the songs themselves were largely written for and made famous by Black vocal groups and Black soloists (the Drifters, the Shirelles, the Crystals, the Ronettes, the Cookies, the Chiffons, Little Eva, Aretha Franklin, Dionne Warwick, Ben E. King), drawing musical material from Black gospel, doo-wop, and rhythm and blues. The system's structural racism is part of what makes the music: a generation of mostly young Jewish American songwriters wrote some of the most enduring American popular songs of the twentieth century, and a generation of Black vocalists made those songs famous, with the songwriters and music publishers retaining most of the rights and most of the income. The Brill Building system declined in the mid-1960s as Black labels (Motown most prominently) built their own writer-publisher infrastructure, the singer-songwriter wave (Carole King's <em>Tapestry</em>, 1971, is the canonical pivot) absorbed the staff-writer model into a more autonomous artist-author role, and the music industry's center of gravity shifted to Los Angeles."
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

  "pure-hell": {
    label: "Pure Hell",
    definition: "An African American punk rock band formed in West Philadelphia in 1974 by Kenny \u201cStinker\u201d Gordon, Kerry \u201cLenny Steel\u201d Boles, Preston \u201cChip Wreck\u201d Morris III, and Michael \u201cSpider\u201d Sanders. The band moved to New York in 1975, lived at the Chelsea Hotel, befriended the New York Dolls and Sid Vicious, and recorded an album called Noise Addiction in 1978. Their manager Curtis Knight, formerly the bandleader of Jimi Hendrix\u2019s pre-fame group the Squires, withheld the master tapes after a falling-out, and the album sat unreleased for twenty-eight years before finally appearing in 2005. Pure Hell is one of the bands often cited, alongside Detroit\u2019s Death, as having played punk before there was a name for it."
  },

  "death-band": {
    label: "Death (Detroit band)",
    definition: "An African American proto-punk band formed in Detroit in 1971 by the three Hackney brothers, Bobby (bass and vocals), David (guitar), and Dannis (drums). Sons of a Baptist preacher, the brothers recorded seven songs at Detroit\u2019s United Sound Studios in 1975 with funding from Columbia Records, but Columbia withdrew its support when the brothers refused label president Clive Davis\u2019s demand that they change their name. They self-released a single on their own Tryangle label in 1976 and broke up in 1977. The 1975 recordings sat in an attic for more than three decades; Drag City finally released them as ...For The Whole World To See in 2009, and the 2012 documentary A Band Called Death brought the brothers\u2019 story to a wide audience."
  },

  "japanese-breakfast": {
    label: "Japanese Breakfast",
    definition: "Indie rock band led by Korean American singer-songwriter and guitarist Michelle Zauner (born 1989 in Seoul, raised in Eugene, Oregon). Zauner began releasing music as Japanese Breakfast in 2013; the project has produced four studio albums (Psychopomp 2016, Soft Sounds from Another Planet 2017, Jubilee 2021, For Melancholy Brunettes (& sad women) 2025) and a Grammy nomination for Best Alternative Music Album in 2022. Zauner\u2019s 2021 memoir Crying in H Mart, about her relationship with her Korean mother and her mother\u2019s death from cancer, spent more than a year on The New York Times bestseller list."
  },

  "the-drifters": {
    label: "The Drifters",
    definition: "American R&B vocal group formed in 1953 in New York at the request of Atlantic Records\u2019 Ahmet Ertegun, originally to back lead singer Clyde McPhatter. The Drifters had two distinct lineups across their first decade: McPhatter\u2019s original group (1953\u20131958) and a second group built around Ben E. King beginning in 1959. The group\u2019s commercial arrangement was unusually explicit in its asymmetry: manager George Treadwell, who bought McPhatter\u2019s half-interest in the group\u2019s name when McPhatter was drafted into the U.S. Army in 1954, owned the Drifters as a trademark and held the singers\u2019 employment contracts directly, paying them weekly wages with no royalty share, no share of songwriting income, and no rights in the group\u2019s name. Treadwell, in turn, had a recording contract with Atlantic Records that gave Atlantic the masters of every Drifters recording. The songs the group recorded were owned by their publishers (most often Aldon Music). So three separate parties owned three separate pieces of the same commercial product: Treadwell owned the singers, Atlantic owned the recordings, and the publisher owned the song. The singers, who carried the records vocally, owned none of the three. The Brill Building songwriting teams of Carole King and Gerry Goffin, and Doc Pomus and Mort Shuman, wrote many of the second lineup\u2019s hits, including \u201cSave the Last Dance for Me\u201d (1960), \u201cUp on the Roof\u201d (1962), \u201cOn Broadway\u201d (1963), and \u201cUnder the Boardwalk\u201d (1964). The Drifters were inducted into the Rock and Roll Hall of Fame in 1988."
  },

  "the-ronettes": {
    label: "The Ronettes",
    definition: "American girl group formed in New York in 1959 by sisters Ronnie Bennett (later Ronnie Spector) and Estelle Bennett with their cousin Nedra Talley. Signed to Phil Spector\u2019s Philles label in 1963, the group recorded a string of hits produced in Spector\u2019s Wall of Sound style, most famously \u201cBe My Baby\u201d (1963), one of the defining records of the girl-group era. The Ronettes broke up in 1967; Ronnie went on to a long solo career, and the group was inducted into the Rock and Roll Hall of Fame in 2007."
  },

  "the-band": {
    label: "The Band",
    definition: "Canadian-American rock group active from the mid-1960s through 1976. The original lineup was Robbie Robertson (guitar), Rick Danko (bass), Richard Manuel (piano), Garth Hudson (organ), and Levon Helm (drums); the four Canadians and one Arkansan had previously worked as the Hawks, the backing band for rockabilly singer Ronnie Hawkins, and toured with Bob Dylan in 1965 and 1966. Their 1968 debut Music From Big Pink and 1969 self-titled album were widely influential in the development of what came to be called Americana. The group\u2019s 1976 farewell concert in San Francisco was filmed by Martin Scorsese as The Last Waltz (1978). The Band was inducted into the Rock and Roll Hall of Fame in 1994."
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

  "h-e-r": {
    label: "H.E.R. (b. 1997)",
    definition: "Stage name of Gabriella Sarmiento Wilson, an American R&B singer-songwriter and multi-instrumentalist of Filipino and African American heritage, raised in Vallejo, California. She has won five Grammy Awards and an Academy Award (for \u201cFight for You,\u201d from the 2021 film Judas and the Black Messiah). Her 2020 song \u201cI Can\u2019t Breathe\u201d was a direct response to police violence against Black Americans and won the Grammy for Song of the Year."
  },

  "selena": {
    label: "Selena Quintanilla (1971\u20131995)",
    definition: "Mexican American singer who became the most popular Tejano artist of the early 1990s and a major crossover figure in Latin music. Born and raised in Texas, she fronted Selena y Los Dinos and built an audience that crossed Tejano, regional Mexican, and English-language pop. She was murdered by the president of her fan club in 1995, just before the release of her first English-language album. Her cultural footprint has only grown in the decades since."
  },

  "sam-cooke": {
    label: "Sam Cooke (1931\u20131964)",
    definition: "African American singer, songwriter, and entrepreneur, often called the King of Soul. Cooke rose to prominence in the early 1950s as lead singer of the gospel quartet the Soul Stirrers; he crossed over to secular pop in 1957 with \u201cYou Send Me,\u201d and over the next seven years recorded a series of hits that helped invent soul music. He founded his own record label, SAR Records, and his own publishing company, an unusual move for a Black artist of the period. Cooke was shot and killed at a Los Angeles motel in December 1964 under disputed circumstances at age thirty-three. His \u201cA Change Is Gonna Come,\u201d written in response to specific incidents of anti-Black racism and released posthumously, became a civil rights anthem and is the anchor track for Module 1\u2019s first listening guide."
  },

  "celia-cruz": {
    label: "Celia Cruz (1925\u20132003)",
    definition: "Cuban-born singer who became the most prominent female vocalist of twentieth-century Latin music. Cruz rose to fame in the 1950s with the Cuban big band Sonora Matancera; she left Cuba in 1960 after the revolution and never returned. Settling in the United States, she joined Tito Puente, Johnny Pacheco, and the Fania All-Stars and became the central female voice of the salsa era of the 1960s and 1970s. Her 1974 recording of \u201cQuimbara\u201d with the Fania All-Stars is the anchor track for Module 1\u2019s second listening guide. Cruz won multiple Grammy and Latin Grammy awards and recorded with artists from Willie Col\u00f3n to Wyclef Jean across her seven-decade career."
  },

  "sugar-pie-desanto": {
    label: "Sugar Pie DeSanto (1935\u20132024)",
    definition: "American R&B singer, songwriter, and dancer, born Umpeylia Marsema Balinton in Brooklyn to a Filipino seaman father and an African American concert-pianist mother. DeSanto grew up in San Francisco\u2019s Fillmore District, where she was childhood friends with Etta James. Discovered in 1955 by Johnny Otis at a San Francisco talent show, she toured with the Johnny Otis Revue and then the James Brown Revue (1959\u20131960), and signed with Chess Records in Chicago in 1962, where she recorded \u201cSlip-in Mules,\u201d \u201cI Don\u2019t Wanna Fuss,\u201d and the Etta James duets \u201cDo I Make Myself Clear\u201d and \u201cIn the Basement.\u201d DeSanto\u2019s mixed Filipino and African American identity, her West Coast and Midwestern recording histories, and her position as a woman in mid-century R&B all sit at intersections this course returns to. \u201cI Don\u2019t Wanna Fuss\u201d is the anchor track for Module 1\u2019s third listening guide."
  },

  "hank-williams": {
    label: "Hank Williams (1923\u20131953)",
    definition: "American country singer, songwriter, and guitarist, born Hiram King Williams in Mount Olive, Alabama. Williams had a brief and concentrated commercial career (barely six years) but recorded a body of songs (\u201cI\u2019m So Lonesome I Could Cry,\u201d \u201cYour Cheatin\u2019 Heart,\u201d \u201cHey, Good Lookin\u2019\u201d) that became foundational to the country tradition and influential well beyond it. His musical inheritance came partly from the Anglo-Celtic ballad tradition his family carried forward and partly from his apprenticeship with the African American street musician Rufus \u201cTee Tot\u201d Payne in Greenville and Georgiana, Alabama. Williams\u2019s substance use and chronic spinal pain caught up with him; he died in the back of a Cadillac on New Year\u2019s Day 1953 at age twenty-nine. \u201cI\u2019m So Lonesome I Could Cry\u201d is the anchor track for Module 1\u2019s fourth listening guide."
  },

  "james-brown": {
    label: "James Brown (1933\u20132006)",
    definition: "African American singer, songwriter, bandleader, and dancer, often called the Godfather of Soul. Brown\u2019s career spans the late 1950s through the 2000s and is usually treated as the central thread that connects mid-century R&B to soul to funk to hip hop. He pioneered the rhythmic shift to the downbeat (\u201cthe One\u201d) that became the foundation of funk; he led one of the most disciplined and influential touring bands in American popular music; and his April 1968 concert in Boston, broadcast live the night after Martin Luther King Jr.\u2019s assassination, is widely credited with helping the city avoid the wave of urban uprisings that hit dozens of other American cities. Brown\u2019s 1968 \u201cSay It Loud \u2014 I\u2019m Black and I\u2019m Proud\u201d is the anchor track for Module 2\u2019s third listening guide."
  },

  "anthony-brown": {
    label: "Anthony Brown (born 1953)",
    definition: "American jazz percussionist, composer, ethnomusicologist, and bandleader. Brown founded the Asian American Orchestra in 1997 as a touring component of a federally funded multimedia project on Japanese American internment; the ensemble\u2019s recording of Duke Ellington\u2019s Far East Suite was nominated for a Grammy in 2000. Brown holds a PhD in ethnomusicology from UC Berkeley and served as founding director of the Smithsonian Institution\u2019s Jazz Oral History Program from 1992 to 2012. The Asian American Orchestra continues the formal-innovation thread of the Asian American Jazz movement that ran through Jon Jang and Fred Ho\u2019s earlier work."
  },

  "yaeji": {
    label: "Yaeji (born 1993)",
    definition: "Stage name of Kathy Yaeji Lee, a Korean American singer, DJ, and producer based in Brooklyn. Born in Flushing, Queens, Yaeji moved with her family to Atlanta and then to Seoul before returning to the United States for college at Carnegie Mellon, where she began DJing. Her music blends house and hip hop with quiet, often whispered vocals in Korean and English; her 2017 single \u201cRaingurl\u201d brought her international attention, and her debut album <em>With a Hammer</em> was released in 2023. Yaeji has hosted queer-Asian-centered parties from her late-2010s breakthrough forward and has spoken in interviews about the need for marginalized artists across queer, Black, trans, and Asian communities to support one another in industry spaces that have not made room for them; her work is a central part of contemporary Brooklyn\u2019s queer Asian dance-music scene."
  },

  "robbie-robertson": {
    label: "Robbie Robertson (1943\u20132023)",
    definition: "Canadian guitarist, songwriter, and composer of Mohawk and Cayuga heritage on his mother\u2019s side. Born Jaime Royal Robertson in Toronto, Robertson grew up visiting his mother\u2019s family at the Six Nations of the Grand River reserve in Ontario, where he absorbed the music-making practices that would shape his later writing. He was the principal songwriter and lead guitarist of The Band from the mid-1960s until 1976, wrote \u201cThe Weight,\u201d \u201cThe Night They Drove Old Dixie Down,\u201d and many of the group\u2019s other defining songs, and engaged with his Indigenous heritage publicly in his solo career and in projects like the 1994 album Music for the Native Americans."
  },

  "janelle-monae": {
    label: "Janelle Mon\u00e1e (born 1985)",
    definition: "American singer, songwriter, and actor. Born Janelle Mon\u00e1e Robinson in Kansas City, Kansas, Mon\u00e1e broke through with the EP Metropolis: Suite I (The Chase) (2007) and the album The ArchAndroid (2010), both built around her android alter ego Cindi Mayweather and a science-fiction concept frame indebted to Octavia Butler and Sun Ra. Mon\u00e1e came out publicly as queer and pansexual in 2018 around the release of Dirty Computer, and as nonbinary in 2022; her music draws on funk, R&B, and Afrofuturism to do explicit political and identity work. Mon\u00e1e has also acted in Moonlight (2016), Hidden Figures (2016), and Glass Onion (2022)."
  },

  "lil-nas-x": {
    label: "Lil Nas X (born 1999)",
    definition: "American rapper, singer, and songwriter, born Montero Lamar Hill in the Atlanta area. His 2018 country-rap single \u201cOld Town Road\u201d went viral on TikTok and spent a record nineteen weeks at number one on the Billboard Hot 100 in 2019. He came out as gay on Twitter that summer, becoming the first artist to do so while holding a number-one record. His follow-up work, particularly the 2021 single \u201cMontero (Call Me By Your Name)\u201d and its provocative music video, has been openly and explicitly queer; he is among the first major Black queer male artists to celebrate his sexuality so directly in the country and hip hop genres."
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
    definition: "The practice of taking a segment of an existing recording (a drum break, a horn line, a vocal phrase, a whole loop) and using it as a building block in a new piece of music; the segments themselves are called samples. Sampling grew out of 1970s hip hop DJing, where DJs used two turntables to extract and loop the breakbeat sections of funk and soul records; the practice expanded across the 1980s and 1990s as digital samplers (the E-mu SP-1200, the Akai MPC, the Fairlight CMI) made it possible to capture, manipulate, and recombine recorded sound on demand. Samples can be used many ways: cycled as a continuous loop under a new song, scratched on a turntable as a percussive gesture, chopped into smaller fragments and rearranged, layered with other samples to build a track, or placed once as a recognizable quotation. Sampling is fundamental to hip hop and to a great deal of electronic dance music; it is also legally and ethically complicated, because it involves using someone else\u2019s recording, often without paying the original artist. Hip hop producers from the 1970s on built a deep practice of sampling Black recorded music, treating earlier records as a usable archive rather than as finished, untouchable works."
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

  "foxtrot": {
    label: "Foxtrot",
    definition: "A smooth ballroom dance in 4/4 time that emerged in 1914 and dominated American social dancing from the late 1910s through the 1940s. The dance is named for the vaudeville performer Harry Fox, who introduced a trotting step to ragtime music at the New York Theatre in 1914; Vernon and Irene Castle, the most famous white American ballroom dancers of the period, smoothed it into the gliding form that became the standard. By the 1920s the foxtrot was the default tempo for popular dance recordings: many records of the era, even ones that we would now classify as jazz or as the precursors of swing, were sold under the label \u201cfoxtrot\u201d to tell social dancers what to do with them."
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
    definition: "African American doo-wop singer (born September 30, 1942, in Washington Heights, Manhattan; died February 27, 1968, in Harlem) who, with his group the Teenagers, recorded \u201cWhy Do Fools Fall in Love\u201d in late 1955 when he was thirteen. Released in January 1956, the song reached number one on the R&B chart, number six on the pop chart, and number one in the United Kingdom, and made Lymon the first Black teen idol of the rock-and-roll era. His high, light pre-pubescent tenor was the direct vocal model for Ronnie Spector, Diana Ross, and Michael Jackson, and he was a major influence on a generation of young Black, Latino, and white singers in 1950s and early 1960s New York, including Joe Bataan. Lymon\u2019s career collapsed quickly after his voice changed; he died of a heroin overdose at twenty-five."
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
  },

  /* ============================
     Module 4 framing reading: identity and panethnicity
     ============================ */

  "panethnic": {
    label: "Panethnic",
    definition: "Describing an identity category that gathers multiple distinct ethnic groups under a single political label, usually for purposes of coalition-building, civil rights advocacy, or government data collection. \u201cAsian American,\u201d \u201cLatino,\u201d and \u201cAAPI\u201d are panethnic categories. The category bundles people whose ancestral languages, religions, and national histories may have nothing in common, on the grounds that their experience of US racial categorization makes them politically allied. Panethnic identities are usually invented for a specific historical purpose; \u201cAsian American\u201d was coined in 1968."
  },

  "indigenous": {
    label: "Indigenous",
    definition: "Describing the original inhabitants of a place, particularly when those inhabitants have been colonized or displaced by later arrivals. Indigenous peoples in the Americas, Pacific, and elsewhere often distinguish themselves from immigrant or settler populations because their relationship to the land predates the political states that now claim those lands. In the US context, Indigenous includes Native American nations, Native Hawaiians, and Native peoples of the US Pacific territories."
  },

  "pacific-islander": {
    label: "Pacific Islander",
    definition: "An umbrella term for the Indigenous peoples of Polynesia (Hawaii, Samoa, Tonga, Tahiti, others), Micronesia (Guam, the Marshall Islands, Federated States of Micronesia, others), and Melanesia (Fiji, Papua New Guinea, the Solomon Islands, others). The US federal government groups Pacific Islanders with Asian Americans for census and administrative purposes (the AAPI category), but many Pacific Islander organizers contest that grouping because Pacific Islander histories are histories of Indigenous peoples whose lands were colonized by the United States, rather than histories of immigration."
  },

  "south-asian": {
    label: "South Asian",
    definition: "An umbrella term for people whose ancestry traces to the South Asian subcontinent (India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, the Maldives) and the South Asian diaspora. South Asian Americans are the second-largest Asian American group in the US after Chinese Americans, with the population growing rapidly after the 1965 Hart-Celler Act\u2019s employment-based admissions opened the country to South Asian medical, engineering, and academic professionals."
  },

  "nisei": {
    label: "Nisei",
    definition: "The second generation of Japanese Americans: the US-born children of the Issei. Most Nisei were born between roughly 1910 and 1940, and most were US citizens by birth. The Nisei were the generation incarcerated as children and young adults during World War II, and later the generation that led the postwar fight for redress and reparations."
  },

  "issei": {
    label: "Issei",
    definition: "The first generation of Japanese immigrants to the United States: the people born in Japan who arrived in the late nineteenth and early twentieth centuries before the 1924 Immigration Act ended Japanese immigration. The Issei could not become US citizens (the law barred Asian-born immigrants from naturalization until 1952), and most were elderly by the time of World War II."
  },

  "sansei": {
    label: "Sansei",
    definition: "The third generation of Japanese Americans: the US-born grandchildren of the Issei and children of the Nisei. Most Sansei were born after World War II, and the Sansei generation came of age during the civil rights and Asian American movements of the 1960s and 1970s. Many of the founding figures of the Asian American Movement and the Asian American Jazz movement (including Mark Izu and Nobuko Miyamoto) were Sansei."
  },

  /* ============================
     Module 4 framing reading: immigration law and political history
     ============================ */

  "exclusion-laws": {
    label: "Asian exclusion laws",
    definition: "The series of US laws, beginning with the 1882 Chinese Exclusion Act and culminating in the 1924 Immigration Act, that restricted or prohibited immigration from Asian countries and barred Asian-born immigrants already in the United States from becoming citizens. The exclusion regime was largely undone by the 1952 McCarran-Walter Act (which removed racial bars on naturalization) and the 1965 Hart-Celler Act (which removed national-origin quotas). The eight decades of legal exclusion fundamentally shaped the small, heavily restricted Asian American population that existed before 1965."
  },

  "chinese-exclusion-act": {
    label: "Chinese Exclusion Act (1882)",
    definition: "The first US law to restrict immigration based explicitly on ethnicity, signed by President Chester Arthur on May 6, 1882. The act barred most Chinese laborers from entering the United States and made existing Chinese residents ineligible for naturalization. It was extended in 1892 and made permanent in 1902, and was not formally repealed until the 1943 Magnuson Act. The Chinese Exclusion Act is the foundational moment of the US legal regime that treated Asian immigration as a problem to be managed by exclusion."
  },

  "immigration-act-1924": {
    label: "Immigration Act of 1924",
    definition: "The US law (also called the Johnson-Reed Act and sometimes the Asian Exclusion Act) that established a national-origin quota system and effectively closed off most non-European immigration to the United States. For Asian immigration specifically, the law expanded earlier exclusion measures into a near-total ban on entry from Asia (with the Philippines, then a US colony, partially exempted). The 1924 Act\u2019s framework remained in place until the 1965 Hart-Celler Act."
  },

  "tydings-mcduffie-act": {
    label: "Tydings-McDuffie Act (1934)",
    definition: "The US law that granted eventual independence to the Philippines (then a US colony) and reclassified Filipinos in the United States from US nationals to aliens. The act reduced Filipino immigration to a quota of 50 people per year, effectively ending the open Filipino migration that had been the major exception to the 1924 Immigration Act\u2019s Asian restrictions. The act also paved the way for some Filipino agricultural laborers in the US to be deported."
  },

  "hart-celler-act": {
    label: "Hart-Celler Act (1965)",
    definition: "The Immigration and Nationality Act of 1965, signed by President Lyndon Johnson on October 3, 1965, at a ceremony at the foot of the Statue of Liberty. The law removed the national-origin quotas that had been in place since 1924 and replaced them with a preference system favoring family reunification (75 percent of admissions), employment-based admission (20 percent), and refugee status (5 percent). The act fundamentally transformed the demographic composition of the United States; the rapid growth and diversification of the Asian American population since the 1960s is largely a consequence of Hart-Celler."
  },

  "japanese-american-internment": {
    label: "Japanese American incarceration",
    definition: "The forced removal and confinement of approximately 120,000 people of Japanese descent (most of them US citizens) from the West Coast of the United States during World War II, authorized by Executive Order 9066 in February 1942 and carried out at ten War Relocation Authority camps in the interior West and Arkansas. The incarceration was acknowledged as unjust by the 1988 Civil Liberties Act, which provided a formal apology and $20,000 in reparations to surviving incarcerees. The course uses the word \u201cinternment\u201d as the term most students will recognize, while flagging that many community organizations now prefer \u201cincarceration\u201d as more accurate (\u201cinternment\u201d in international law usually applies to enemy nationals during wartime, not US citizens)."
  },

  "civil-liberties-act-1988": {
    label: "Civil Liberties Act of 1988",
    definition: "The federal law signed by President Ronald Reagan on August 10, 1988, that granted a formal presidential apology and $20,000 in reparations to each surviving Japanese American who had been incarcerated under Executive Order 9066 during World War II. The act was the result of more than a decade of community organizing led by the Japanese American Citizens League, the National Coalition for Redress and Reparations, and the National Council for Japanese American Redress, and was based on the 1983 federal report Personal Justice Denied, which named \u201crace prejudice, war hysteria, and a failure of political leadership\u201d as the causes of the incarceration."
  },

  "third-world-liberation-front": {
    label: "Third World Liberation Front",
    definition: "A coalition of student organizations representing Black, Asian American, Latino, and Native American students that led major strikes at San Francisco State College (November 6, 1968 to March 20, 1969) and UC Berkeley (January 22 to March 7, 1969) demanding ethnic studies programs, increased admission of students of color, and curricular changes. The SF State strike was the longest student strike in US history at the time. Both strikes succeeded in establishing ethnic studies programs at their universities; SF State\u2019s College of Ethnic Studies is the first in the United States."
  },

  /* ============================
     Module 4 framing reading: institutions and places
     ============================ */

  "i-hotel": {
    label: "International Hotel (I-Hotel)",
    definition: "A single-room-occupancy residential hotel at 848 Kearny Street in San Francisco that served as the last block of Manilatown, the city\u2019s historic Filipino American neighborhood. After a nine-year tenant-led campaign against eviction by Financial District redevelopment, the elderly Filipino and Chinese tenants were forcibly removed in a pre-dawn police raid on August 4, 1977, in which roughly 300 sheriff\u2019s deputies and police officers broke through a 3,000-person human barricade. The eviction was the largest civil-disobedience event in Asian American history to that date and a defining moment of the Asian American Movement in the Bay Area. After decades of advocacy, a new affordable senior-housing building opened on the site in 2005."
  },

  "manong": {
    label: "Manong",
    definition: "Tagalog and Ilocano for \u201colder brother,\u201d used as a respectful term of address in Filipino communities and, in Filipino American history, specifically to refer to the generation of Filipino men (often single, often agricultural or service workers) who immigrated to the United States in the 1920s and 1930s before the Tydings-McDuffie Act closed Filipino immigration. Many Manong-generation immigrants spent decades in the US without being permitted to bring families over and ended their lives in residential hotels like the I-Hotel."
  },

  "basement-workshop": {
    label: "Basement Workshop",
    definition: "The first Asian American political and arts organization in New York City, founded in 1970 by Columbia graduate student Danny N.T. Yung and a small group of urban-planning students who had been working on a community study of Manhattan's Chinatown. Basement Workshop took its name from its first home, a tenement basement at 54 Elizabeth Street; it later moved to 22 Catherine Street and then to a Lafayette Street loft. Its early projects included the Asian American Resource Center; Bridge: The Magazine of Asians in America (the first nationally distributed Asian American magazine, 1971-1978); the Yellow Pearl portfolio (1972, designed around the music of Chris Iijima, Joanne Nobuko Miyamoto, and Charlie Chin); a community planning arm that ran English-language and citizenship classes for Chinese immigrants; and a children's daycare and arts program. Basement Workshop closed in 1986; the organizations it helped spin off include the Asian American Dance Theater, the Asian American Arts Centre, Asian CineVision, the Godzilla Asian American Arts Network, and the Chinatown Historical Project (now the Museum of Chinese in America)."
  },

  "kearny-street-workshop": {
    label: "Kearny Street Workshop",
    definition: "The oldest multidisciplinary Asian Pacific American arts organization in the United States, founded in 1972 in the I-Hotel basement on Kearny Street in San Francisco\u2019s Manilatown by Jim Dong, Lora Jo Foo, and Michael Chin. After the 1977 I-Hotel eviction, KSW relocated to North Beach and later to South of Market. KSW founded the Asian American Jazz Festival in 1981 (under organizers George Leong and Paul Yamazaki) and has continued to incubate Asian American artists across visual art, performance, literature, and music for more than fifty years."
  },

  "soma-pilipinas": {
    label: "SOMA Pilipinas",
    definition: "San Francisco\u2019s Filipino Cultural Heritage District, formally established by the city\u2019s Board of Supervisors on April 22, 2016 and recognized by the State of California as one of the state\u2019s Cultural Districts in 2017. The district covers 1.5 square miles of South of Market and is home to Filipino American institutions including Bindlestiff Studio, Arkipelago Books, and the Mint Mall. The designation acknowledges more than a century of Filipino presence in San Francisco and serves as a working response to gentrification-driven displacement of the Filipino community."
  },

  /* ============================
     Module 4 framing reading: people
     ============================ */

  "mark-izu": {
    label: "Mark Izu (1954-2025)",
    definition: "Sansei (third-generation) Japanese American jazz double-bass player and composer, born in Vallejo, California. A central figure in the Asian American Jazz movement from the late 1970s onward, Izu studied gagaku (Japanese imperial court music) for twenty-six years with master Togi Suenobu and frequently combined gagaku and other Asian musical traditions with post-bop jazz in his compositions. He served as artistic director of the Asian American Jazz Festival from the mid-1980s through 2000."
  },

  "yuji-ichioka": {
    label: "Yuji Ichioka (1936-2002)",
    definition: "Japanese American historian, civil rights activist, and pioneering scholar of Asian American Studies. Born in San Francisco, Ichioka was incarcerated as a child at the Topaz internment camp in Utah during World War II. While a graduate student in Japanese history at UC Berkeley in the late 1960s, Ichioka and his partner Emma Gee called the May 1968 meeting at their apartment at 2005 Hearst Avenue that founded the Asian American Political Alliance (AAPA), the first known organization to use the phrase \u201cAsian American.\u201d In 1969 Ichioka taught the first Asian American Studies course in the United States at UCLA and helped establish the UCLA Asian American Studies Center, where he served as a research associate and adjunct professor of history until his death. His major scholarly work, The Issei: The World of the First Generation Japanese Immigrants, 1885-1924 (Free Press, 1988), won the 1989 US History Book Award of the Association for Asian American Studies."
  },

  "emma-gee": {
    label: "Emma Gee (1939-2023)",
    definition: "Chinese American activist, scholar, and writer who, with her partner Yuji Ichioka, co-coined the term \u201cAsian American\u201d and co-founded the Asian American Political Alliance (AAPA) at UC Berkeley in May 1968. Gee was instrumental in expanding AAPA beyond the Bay Area, building chapters at SF State, Mills, UC Santa Cruz, UC Davis, USC, Columbia, and Dartmouth, and in ensuring women activists like Vicci Wong and Penny Nakatsu held leadership roles in the organization. She later taught some of the first Asian American Studies courses at UC Berkeley and UCLA, including the first-ever course focused on Asian American women. The 2005 Hearst Avenue residence in Berkeley where Gee and Ichioka founded AAPA was designated a Berkeley city historical landmark in 2018."
  },

  "richard-aoki": {
    label: "Richard Aoki (1938-2009)",
    definition: "Japanese American activist, educator, and the most prominent non-Black member of the Black Panther Party, in which he held the formal leadership rank of Field Marshal. Born in San Leandro, Aoki was incarcerated as a young child at the Topaz internment camp in Utah from 1942 to 1945. After eight years of military service, he attended Merritt College in Oakland, where he became close friends with Huey Newton and Bobby Seale; according to Bobby Seale\u2019s memoir, Aoki provided the early Black Panther Party with some of its first firearms. In 1968 he was a co-founder of the Asian American Political Alliance and a leader in the Third World Liberation Front strikes that established the first Ethnic Studies programs at SF State and UC Berkeley. A 2012 FBI Freedom of Information Act disclosure that Aoki had been a paid informant for the bureau over a 15-year period has been the subject of significant ongoing debate among historians of the Asian American and Black Power movements; Diane Fujino\u2019s 2012 biography Samurai Among Panthers is the standard scholarly treatment."
  },

  "yuri-kochiyama": {
    label: "Yuri Kochiyama (1921-2014)",
    definition: "Japanese American civil rights and human rights activist, born Mary Yuriko Nakahara in San Pedro, California. Kochiyama and her family were incarcerated for two years at the Jerome War Relocation Center in Arkansas during World War II; the experience, and the death of her father shortly after his FBI detention, shaped her lifelong activism. After moving to Harlem in 1960 with her husband Bill Kochiyama (a 442nd Infantry Regiment veteran), she became closely involved in Black liberation organizing, and in October 1963 met Malcolm X at a CORE protest. They corresponded and collaborated until Malcolm\u2019s assassination at the Audubon Ballroom on February 21, 1965, where Kochiyama was present and was photographed cradling his head. Through the 1970s and 1980s she was an active member of Asian Americans for Action (the East Coast equivalent of AAPA), the Republic of New Afrika, and the Puerto Rican independence movement, and she was a major organizer in the redress campaign that led to the 1988 Civil Liberties Act. She received an honorary doctorate from CSU East Bay in 2010."
  },

  "chris-iijima": {
    label: "Chris Iijima (1948-2005)",
    definition: "Sansei (third-generation) Japanese American folksinger, lawyer, and legal scholar, born in New York City to activist parents Takeru (a 442nd Infantry veteran) and Kazu Iijima (one of the founders of Asian Americans for Action, the East Coast Asian American activist organization). Iijima graduated from Columbia University in 1969, where he was active in the 1968 anti-war protests, and met Nobuko Miyamoto at the 1970 Japanese American Citizens League convention in Chicago. With Miyamoto and (from 1970) Charlie Chin, he toured Asian American Movement events as the trio Yellow Pearl and recorded the 1973 album A Grain of Sand: Music for the Struggle by Asians in America for Paredon Records, the first album of Asian American music. Iijima later earned a JD from New York Law School in 1988 and taught at NYU Law, Western New England Law, and ultimately the William S. Richardson School of Law at the University of Hawai\u02bbi at M\u0101noa, where he wrote influential legal scholarship on race and identity until his death from amyloidosis in 2005."
  },

  "nobuko-miyamoto": {
    label: "Nobuko Miyamoto (b. 1939)",
    definition: "Sansei Japanese American songwriter, dancer, theater artist, and activist, born in Los Angeles. Her family was incarcerated at the Santa Anita detention center during World War II; her father then volunteered to harvest sugar beets and the family was transferred to Montana, then Idaho, then Utah for the duration of the war. Miyamoto trained as a ballet and modern dancer and performed in the films The King and I (1956) and West Side Story (1961, as Francisca, credited under the stage name \u201cJoanne Miya\u201d), and on Broadway in Flower Drum Song (1958). After leaving Hollywood for activist work in New York in the late 1960s, including documentary filmmaking on the Black Panthers, she met Chris Iijima at the 1970 Japanese American Citizens League convention; their trio with Charlie Chin recorded A Grain of Sand in 1973. Miyamoto founded the Los Angeles-based arts organization Great Leap in 1978, where she still serves as artistic director. Her memoir Not Yo' Butterfly: My Long Song of Relocation, Race, Love, and Revolution (UC Press, 2021) and the accompanying double album 120,000 Stories (Smithsonian Folkways, 2021) document her career."
  },

  "charlie-chin": {
    label: "William \u201cCharlie\u201d Chin (b. 1944)",
    definition: "Chinese American singer-songwriter, multi-instrumentalist, and writer, born in New York City and raised in Queens. Chin\u2019s father was from Toisan, China; his mother was of mixed Chinese, Carib, and Venezuelan ancestry, born in New York and raised in Trinidad. Inspired by Pete Seeger, Chin took up the banjo and grew up playing the cuatro, autoharp, and guitar in the early-1960s Greenwich Village folk scene. He toured nationally in the late 1960s with the rock band Cat Mother and the All Night Newsboys before returning to New York. In 1970 he joined Chris Iijima and Nobuko Miyamoto onstage at a Pace College Asian American conference, and the three recorded A Grain of Sand together in 1973. Chin has continued to perform and write as a children\u2019s book author, cultural historian, and storyteller about Chinese American history, including the building of the Transcontinental Railroad."
  },

  "vincent-chin": {
    label: "Vincent Chin (1955-1982)",
    definition: "Chinese American draftsman whose murder in Detroit on June 19, 1982 became a turning point in pan-Asian American civil rights organizing. Born in China\u2019s Guangdong province and adopted by Chinese American parents in Detroit, Chin was 27 years old and out for his bachelor party at a Highland Park club when he was confronted by Chrysler foreman Ronald Ebens and Ebens\u2019s laid-off stepson Michael Nitz; according to witness testimony, Ebens shouted that the decline of the American auto industry was the fault of Asian people like Chin. Ebens and Nitz beat Chin to death with a baseball bat in a McDonald\u2019s parking lot, and Chin died four days later. The judge\u2019s sentence of three years probation and a $3,780 fine, with no jail time, prompted Asian Americans across the country to organize the American Citizens for Justice (founded 1983, with journalist Helen Zia and lawyer Liza Chan among its leaders) and to demand a federal civil rights trial. Both federal trials ultimately ended in acquittal of the killers, but the case became a foundational moment in pan-Asian American mobilization and is commemorated in Christine Choy and Renee Tajima-P\u00e9\u00f1a\u2019s Oscar-nominated 1987 documentary Who Killed Vincent Chin?"
  },

  "francis-wong": {
    label: "Francis Wong (b. 1957)",
    definition: "Chinese American jazz saxophonist, flutist, erhu player, composer, and community organizer, born in San Francisco to a Shanghai father and a Cantonese mother. Wong has worked extensively with Black avant-garde jazz musicians including Cecil Taylor, Max Roach, Joseph Jarman, John Tchicai, and James Newton, and his work is often described as a fusion of free jazz and Asian musical traditions. With pianist Jon Jang, Wong co-founded Asian Improv aRts in 1987; the organization has been the central institutional home of the Asian American Jazz movement since the late 1980s. Since 2017 he has been a Lecturer in Asian American Studies at San Francisco State University."
  },

  "the-jets": {
    label: "The Jets",
    definition: "Tongan American family band of the eight oldest Wolfgramm siblings (LeRoy, Eddie, Eugene, Haini, Rudy, Kathi, Elizabeth, and Moana), the children of Maikeli and Vak\u00e9 Wolfgramm, who immigrated to Robbinsdale, a Minneapolis suburb, from the Kingdom of Tonga. (The full Wolfgramm family included seventeen children.) The siblings began performing as a family band in 1977 under the name Quasar; renamed The Jets and signed by MCA Records in 1985, they had five top-10 hits on the Billboard Hot 100 between 1985 and 1990, including the 1986 single \u201cCrush on You\u201d (#3 pop, #4 R&B), with thirteen-year-old Elizabeth Wolfgramm on lead vocal. Their early records were produced inside the Minneapolis sound infrastructure (engineer David Z, also known as David Rivkin, who worked with Prince) and the band continues to perform with a mix of original members and next-generation Wolfgramms."
  },

  "pat-suzuki": {
    label: "Pat Suzuki (b. 1930)",
    definition: "Nisei (second-generation) Japanese American singer and actress, born Chiyoko Suzuki in Cressey, California. Suzuki and her family were incarcerated at the Merced Assembly Center and the Granada (Amache) War Relocation Center in Colorado during World War II. After studying at San Jose State, she joined a touring production of The Teahouse of the August Moon and ended up performing nightly at Seattle\u2019s Colony Club for two years from 1955; Bing Crosby heard her there in 1957 and helped secure her a recording contract with RCA Victor. Her 1958 self-titled album was followed by a starring run as Linda Low in the original 1958 Broadway production of Rodgers and Hammerstein\u2019s Flower Drum Song; her recording of \u201cI Enjoy Being a Girl\u201d from that show became the standard version. Her 1959 album Broadway \u201959 was nominated for a Best Female Pop Vocal Performance Grammy in 1960. Two decades before the term \u201cAsian American\u201d existed, Suzuki was the most successful Asian American musician working in mainstream American entertainment."
  },

  "vijay-iyer": {
    label: "Vijay Iyer (b. 1971)",
    definition: "Indian American jazz pianist, composer, bandleader, and scholar, born in Albany, New York to parents who immigrated to the United States from South India in the wake of the 1965 Hart-Celler Act. Iyer earned a BS from Yale (1992) and a PhD in the cognitive science of music from UC Berkeley (1998), and he released his first album Memorophilia (1995) on Asian Improv Records, the label arm of the Asian American Jazz movement\u2019s Asian Improv aRts. He has collaborated extensively with the alto saxophonist Rudresh Mahanthappa and with major figures in the Black avant-garde jazz tradition. Iyer received a MacArthur Fellowship in 2013 and since 2014 has been the Franklin D. and Florence Rosenblatt Professor of the Arts at Harvard University, with a joint appointment in the Department of African and African American Studies."
  },

  "jon-jang": {
    label: "Jon Jang (b. 1954)",
    definition: "Chinese American pianist and composer, central to the Asian American Jazz movement from the late 1970s onward. Jang has explicitly drawn on Black mentors and traditions (Max Roach, Amiri Baraka, Duke Ellington, the Black-radical-tradition jazz suite) while bringing Chinese folk and classical materials into his work. With saxophonist Francis Wong, Jang co-founded Asian Improv Records in 1987 to document and circulate Asian American Jazz movement recordings. His 1984 album Are You Chinese or Charlie Chan? was composed in direct response to the 1982 murder of Vincent Chin."
  },

  "fred-ho": {
    label: "Fred Ho (1957-2014)",
    definition: "Chinese American baritone saxophonist, composer, and political organizer (born Fred Wei-Han Houn). One of the central figures of the Asian American Jazz movement and an outspoken Marxist organizer, Ho led the Afro Asian Music Ensemble and the Monkey Orchestra and composed large-scale works combining jazz, Chinese opera, and political theater. His writings on Asian American radical music are collected in Wicked Theory, Naked Practice (University of Minnesota Press, 2009)."
  },

  "asian-improv-arts": {
    label: "Asian Improv aRts",
    definition: "San Francisco-based Asian American arts organization founded in 1987 by pianist Jon Jang and saxophonist Francis Wong. AIR runs Asian Improv Records (the recording arm) and a presenting program that has documented and toured musicians of the Asian American Jazz movement, including Jang, Wong, Glenn Horiuchi, Mark Izu, Anthony Brown, and others. AIR has been the primary institutional home of Asian American Jazz as a recorded and touring tradition since the late 1980s."
  },

  "mitski": {
    label: "Mitski Miyawaki (b. 1990)",
    definition: "Japanese American singer-songwriter who records under just her first name. Born in Mie Prefecture, Japan, to a Japanese mother and an American State Department father, she grew up between Japan, China, Malaysia, the Czech Republic, the Democratic Republic of the Congo, Turkey, and several US locations, and graduated from the SUNY Purchase Conservatory of Music in 2013 with a studio composition degree. Her 2016 album Puberty 2 (especially its lead single \u201cYour Best American Girl\u201d) was the breakthrough that made her one of the most recognized Asian American musicians working in indie rock; subsequent albums Be the Cowboy (2018) and The Land Is Inhospitable and So Are We (2023) have continued that trajectory. Mitski has expressed ambivalence about labels like \u201cAsian American\u201d and has described herself as \u201chalf Japanese, half American but not fully either.\u201d"
  },

  "gay-asian-pacific-alliance": {
    label: "Gay Asian Pacific Alliance",
    definition: "San Francisco organization founded in February 1988 (incorporated as a 501(c)(4) social welfare organization), one of the first organizations in the United States specifically serving LGBTQ+ Asian Americans and Pacific Islanders. GAPA emerged from the Asian Gay Men\u2019s Support Group that had been meeting at the Pacific Center for Human Growth in Berkeley, and was founded both as a social-support and community-building organization and as a response to the AIDS crisis in API communities. Its early projects included the GAPA Community HIV Project (1989) and the GAPA Men\u2019s Chorus (1989). GAPA\u2019s AIDS work merged with the Asian AIDS Project (founded 1987) in 1996 to form the Asian Pacific Islander Wellness Center, now the San Francisco Community Health Center (renamed 2018). The organization renamed itself to the GLBTQ+ Asian Pacific Alliance in 2019/2021 to reflect its full LGBTQ+ membership."
  },

  "gapa-mens-chorus": {
    label: "GAPA Men\u2019s Chorus",
    definition: "Queer Asian American male choral ensemble founded in 1989 as a social and musical outlet for members of the Gay Asian Pacific Alliance in San Francisco; debuted on November 3, 1989, at the Metropolitan Community Church in San Francisco. The chorus has been one of the longest-running queer Asian American musical institutions, performing both Western choral repertoire and what the ensemble describes as \u201cthe forgotten songs of home\u201d from across Asia and the Pacific. The chorus has performed in pan-Asian LGBTQ choir festivals in Taipei (2015, the first such festival), Tokyo (2019), and Singapore (2025), as part of the Proud Voices Asia LGBT choir network. San Francisco Mayor Ed Lee proclaimed May 15, 2015, GAPA Men\u2019s Chorus Day in honor of the chorus\u2019s twenty-fifth anniversary."
  },

  "hayley-kiyoko": {
    label: "Hayley Kiyoko",
    definition: "American pop singer-songwriter and actress (born Hayley Kiyoko Alcroft, April 3, 1991, in Los Angeles), the daughter of the Japanese Canadian figure skater and choreographer Sarah Kawahara and the American actor and comedian Jamie Alcroft, and one of the most prominent publicly out Asian American pop stars of the 2010s and 2020s. Kiyoko began as a child actress (Disney Channel\u2019s <em>Lemonade Mouth</em>, 2011; <em>Wizards of Waverly Place</em>) and a member of the girl group the Stunners before moving to a solo recording career. Her 2015 single and self-directed video \u201cGirls Like Girls\u201d became a Tumblr and YouTube hit and was widely understood as her public coming out; the 2018 album <em>Expectations</em> reached the top twenty on the Billboard 200 and built her career on openly queer Asian American pop. Her second album <em>Panorama</em> (2022) extended that trajectory. Kiyoko\u2019s fans have called her \u201cLesbian Jesus,\u201d a moniker she has embraced; she has spoken across her career about the absence of openly queer Asian American pop stars when she was growing up as a driving force behind her own visibility work. She became engaged to Becca Tilley in July 2025."
  },

  "dj-qbert": {
    label: "DJ Q-Bert",
    definition: "Richard Quitevis, Filipino American turntablist from Daly City, California, widely regarded as one of the greatest turntablists in the history of the form. With Mix Master Mike and DJ Apollo, he co-founded the Invisibl Skratch Piklz in 1989. Q-Bert\u2019s 1998 album Wave Twisters (with an animated film of the same name) is among the most ambitious recorded turntablism documents ever made; his instructional videos shaped a generation of DJs."
  },

  "charlie-chan": {
    label: "Charlie Chan",
    definition: "A fictional Chinese American detective created by the writer Earl Derr Biggers in a 1925 novel and featured in more than forty Hollywood films from the late 1920s through the 1940s. Chan was almost always played by white actors in yellowface; the character\u2019s exaggerated pidgin speech, fortune-cookie aphorisms, and deferential manner made Chan a paradigmatic example of the white American cinematic imagination of Chinese American masculinity. Jon Jang\u2019s 1984 album Are You Chinese or Charlie Chan? names the choice the Vincent Chin murder had made unavoidable for Chinese Americans: claiming themselves on their own terms or remaining trapped inside the white imagination of who they are."
  },

  /* ============================
     Module 4 framing reading: musical practices
     ============================ */

  "yellowface": {
    label: "Yellowface",
    definition: "The theatrical and cinematic practice of non-Asian (typically white) performers wearing makeup and adopting accents and mannerisms to portray Asian characters. Yellowface was standard in Hollywood from the silent era through the 1960s and persisted in occasional high-profile cases (Mickey Rooney in Breakfast at Tiffany\u2019s in 1961, John Wayne as Genghis Khan in 1956, the Charlie Chan film series). The practice has been widely criticized as dehumanizing and as foreclosing professional opportunities for Asian American actors; by the 1970s and 1980s it had largely (though not entirely) ended in mainstream American film."
  },

  "minneapolis-sound": {
    label: "Minneapolis sound",
    definition: "A funk and R&B subgenre that emerged in Minneapolis in the late 1970s and dominated American pop and R&B charts in the 1980s, characterized by prominent synthesizers, drum machines (especially the LinnDrum), tightly arranged vocal harmonies, and a clean, slick production aesthetic. The style was forged largely by Prince and his collaborators (the Time, the Revolution, Sheila E.) and by the producers Jimmy Jam and Terry Lewis. The Jets\u2019 1986 hit \u201cCrush on You\u201d is a Minneapolis-sound production by Don Powell and David Z (David Rivkin), the latter of whom engineered Prince\u2019s Purple Rain."
  },

  "taiko": {
    label: "Taiko",
    definition: "Japanese drum or, more specifically, the tradition of large-ensemble drumming on Japanese drums (kumi-daiko) that developed in mid-twentieth-century Japan. Taiko was brought to the United States by Seiichi Tanaka, who founded the San Francisco Taiko Dojo in 1968. Taiko became central to the Asian American Movement\u2019s cultural expression and to the Asian American Jazz movement\u2019s instrumental palette."
  },

  "scratching": {
    label: "Scratching",
    definition: "A turntablist technique in which a DJ moves a record back and forth under the needle by hand to produce a percussive, rhythmically articulated sound; the crossfader on the mixer is used to chop the resulting sound into patterns. Invented by the Bronx DJ Grand Wizzard Theodore in the mid-1970s and developed extensively by Grandmaster Flash and others, scratching is the core technique that turns the turntable into an instrument. The Bay Area Filipino American scene of the 1980s and 1990s, particularly the Invisibl Skratch Piklz, extended scratching into a virtuoso practice with its own vocabulary of named scratches (the chirp, the flare, the crab, the orbit) and its own pedagogy."
  },

  "break-beat": {
    label: "Break beat",
    definition: "The percussion-only section of a funk, soul, or rock record (typically a few bars long, often a drum solo or a heavily rhythmic instrumental passage) that hip hop DJs in 1970s New York identified as the most danceable part of a song. By cuing the same break on two copies of a record on two turntables and switching between them, a DJ could extend the break indefinitely. The break-beat technique, developed in the South Bronx by DJ Kool Herc and others, is the foundational DJ practice from which hip hop and turntablism grew."
  },

  /* ============================
     Module 4 Track 1: A Grain of Sand, "We Are the Children"
     ============================ */

  "paredon-records": {
    label: "Paredon Records",
    definition: "An independent political-music label founded in Brooklyn in 1969 by the blues singer Barbara Dane and the writer/editor Irwin Silber. Paredon released fifty albums over fifteen years documenting protest, liberation, and revolutionary movements around the world: the label's first four 1970 issues were a Latin American protest-song compilation (Canci\u00f3n Protesta), an Angolan independence-movement record, an album of Vietnam-era anti-war GI songs (FTA!), and a recorded speech by Black Panther Party co-founder Huey Newton. Subsequent releases included recordings from Cuba, Chile, Vietnam, Ireland, Palestine, Puerto Rico, and elsewhere. Paredon released A Grain of Sand in 1973. In 1991 Dane and Silber donated the entire Paredon catalog to the Smithsonian Folkways collection, where it remains in print and freely streamable today."
  },

  "barbara-dane": {
    label: "Barbara Dane (1927-2024)",
    definition: "American blues, jazz, and folk singer, recording engineer, and lifelong political organizer. Dane sang professionally from her teens, recorded for Capitol and Folkways in the late 1950s and early 1960s, and was offered (and declined) major-label deals from labels including Frank Sinatra's Reprise. Her refusal to compromise her political views damaged her commercial career; in 1969 she co-founded Paredon Records with her husband Irwin Silber to document protest movements globally. Dane produced all fifty Paredon releases including A Grain of Sand, recruiting musicians, designers, and translators. She continued to perform and record into her nineties; her 2018 memoir is titled This Bell Still Rings: My Life of Defiance and Song."
  },

  "a-grain-of-sand-album": {
    label: "A Grain of Sand (album)",
    definition: "A Grain of Sand: Music for the Struggle by Asians in America (Paredon Records, 1973), the first studio album of Asian American music. Twelve songs by the trio of Chris Iijima, Joanne Nobuko Miyamoto, and William \"Charlie\" Chin (sometimes credited as the band Yellow Pearl), with backing musicians on bongos, electric bass, and (on some tracks) Charlie Chin\u2019s di zi (Chinese transverse flute). The album was recorded over two and a half days at A-1 Sound Studios in New York, produced by Barbara Dane and engineered by Jonathan Thayer; Charlie Chin compared the four-track recording process to a more polished commercial production as the difference between \u201ca folding chair and a Maserati.\u201d The album cover artwork is by Arlan Huang and Karl Matsuda for Basement Workshop. Reissued on CD in 1998 by Bindu Records and 2004 by Smithsonian Folkways, where it remains in print."
  },

  "folk-revival": {
    label: "Folk revival",
    definition: "The American folk music revival, a movement spanning roughly the late 1940s through the late 1960s in which a generation of mostly young, mostly urban musicians (Pete Seeger, Joan Baez, Bob Dylan, Phil Ochs, Odetta, Buffy Sainte-Marie, the Kingston Trio, Peter Paul and Mary, and others) revisited Anglo-American, African American, and immigrant folk traditions and used them as a vehicle for left political expression. The folk revival was the musical home of much civil rights and anti-Vietnam War organizing through the 1960s. Its instrumental conventions (acoustic guitar, banjo, harmonica, simple chord progressions, foregrounded lyrics) and its political earnestness directly shaped the protest-song traditions that the Asian American Movement musicians of the early 1970s, the Chicano movement musicians, and the women\u2019s music movement musicians inherited and adapted."
  },

  "fingerpicking": {
    label: "Fingerpicking",
    definition: "A guitar technique in which the player plucks the strings with the fingers (or fingertips and thumb) rather than striking them with a flat pick. Fingerpicking allows a player to articulate independent bass and melody lines on the same instrument, often with a steady alternating thumb pattern carrying the bass while the fingers handle melodic figures on the higher strings. Common in country blues, folk, classical guitar, and the singer-songwriter tradition, fingerpicking gives the guitar a more intimate and conversational sound than strumming."
  },

  "timbre": {
    label: "Timbre",
    definition: "The quality of a sound that distinguishes one source from another even when the pitch and loudness are the same: what makes a violin sound like a violin and not a flute, what makes one singer's voice recognizable as theirs even on a song you have never heard before, what makes a distorted electric guitar sound different from a clean one. Sometimes called \u201ctone color\u201d or \u201csound\u201d in everyday musician's talk. Listening for timbre means paying attention to the texture, weight, brightness, grain, and character of a sound rather than to its pitch or rhythm. A breathy voice, a nasal voice, a chesty voice, a clean tone, an overdriven tone, a muted brass attack, the rasp of a baritone saxophone, the bell-like ring of a Rhodes electric piano, the buzzing edge of a vintage synthesizer all describe timbre. Timbre is one of the four analytical frames introduced in the Module 1 methodology reading, alongside texture, form, and gesture."
  },

  "texture": {
    label: "Texture",
    definition: "How many musical voices or layers are present in a passage and how they relate to each other. A solo unaccompanied voice is the thinnest texture; a full orchestra plus chorus is among the thickest. Texture also describes the relationships among the layers: who is leading, who is supporting, who is in dialogue with whom, who is providing the rhythmic engine. Listening for texture means counting the parts and asking what each one is doing. Two acoustic guitars and three voices is a thinner texture than a salsa orchestra with brass section and full percussion battery; both can be appropriate to what the song is trying to do."
  },

  "bass-guitar": {
    label: "Bass guitar",
    definition: "An electric stringed instrument tuned an octave below a standard guitar, played either with the fingers or a pick. The bass guitar took over from the upright string bass in popular music starting in the 1950s; by the 1960s it was the standard low-end instrument in rock, soul, R&B, and most American popular music. Its primary role is to outline the chord changes and lock in with the drums to form the rhythm section."
  },

  "bongos": {
    label: "Bongos",
    definition: "A pair of small open-bottom drums of different sizes joined together, played with the hands while held between the knees. Bongos came out of late-19th-century Cuba (probably eastern Cuba, in the early son ensembles) and became, with the conga drum, one of the standard percussion instruments of Latin and Latin-influenced popular music. Less massive and lower-volume than congas, bongos are often used for quieter song accompaniments and for rhythmic figures that need a higher and crisper sound than congas can provide."
  },

  "harmonize": {
    label: "Harmonize",
    definition: "To sing or play notes that complement and reinforce a primary melody by sounding different pitches at the same time. The simplest case is two voices: one carries the tune while the other sings a parallel pitch above or below, producing a chord on each note of the melody. Vocal harmonization is one of the oldest and most widespread devices in popular music; folk duos and trios, gospel quartets, doo-wop groups, and rock and country bands all build their sound around it. Two voices that harmonize well together (a phenomenon partly about pitch matching, partly about timbre matching, and partly about timing) is a discovery that musicians make once and remember; Chris Iijima and Nobuko Miyamoto made it the first time they sang together at the 1970 Japanese American Citizens League convention."
  },

  /* ============================
     Module 4 Track 2: Are You Chinese or Charlie Chan?
     ============================ */

  "free-jazz": {
    label: "Free jazz",
    definition: "An umbrella term for the experimental jazz tradition that emerged in the late 1950s and early 1960s and that abandoned, in varying degrees, the harmonic, rhythmic, and formal conventions of the bebop and post-bop traditions that preceded it. Ornette Coleman\u2019s 1961 double-quartet album Free Jazz lent the movement its name; central figures include Coleman, Cecil Taylor, John Coltrane (in his late period), Albert Ayler, Pharoah Sanders, Sun Ra, Archie Shepp, and the collective associations AACM (Chicago) and BAG (St. Louis). Many free jazz musicians preferred terms like \u201cthe new thing,\u201d \u201cavant-garde jazz,\u201d or \u201ccreative music\u201d; the Art Ensemble of Chicago in particular rejected the word \u201cjazz\u201d altogether. Politically, free jazz was widely associated with Black nationalism and the Black Power movement of the late 1960s and provided the central musical model for the Asian American Jazz movement of the 1980s."
  },

  "john-coltrane-late-period": {
    label: "John Coltrane, late period",
    definition: "The final phase of Coltrane\u2019s career, roughly from late 1964 (the recording of A Love Supreme) through his death in July 1967, in which he abandoned the modal and chord-based playing of his earlier work in favor of free, often atonal improvisation organized around short motivic cells, extreme shifts in register (including the altissimo screams that became one of his signatures), and dense ensemble textures. Key recordings include A Love Supreme (1965), Ascension (1965), Meditations (1966), Interstellar Space (1967), and Expression (1967). The late Coltrane recordings became the central touchstone for the next generation of Black avant-garde jazz musicians and, through them, for the Asian American Jazz musicians of the 1980s. Mark Izu, Francis Wong, and Glenn Horiuchi all cited the late Coltrane records (especially Ascension) as the music that drew them into jazz."
  },

  "aacm": {
    label: "AACM",
    definition: "The Association for the Advancement of Creative Musicians, a Black musicians\u2019 collective founded in Chicago in 1965 by the pianist Muhal Richard Abrams and others. The AACM has been the central institutional home of Black experimental music in Chicago for the last sixty years; its early members included the Art Ensemble of Chicago, Anthony Braxton, Henry Threadgill, Wadada Leo Smith, and Roscoe Mitchell. The AACM model (a member-run, mutual-aid musicians\u2019 organization that produced its own concerts and developed its own audiences outside the commercial-jazz pipeline) directly inspired the BAG collective in St. Louis and, in turn, Asian Improv aRts. The AACM\u2019s preferred term for what it does is \u201ccreative music\u201d rather than \u201cjazz.\u201d George Lewis\u2019s A Power Stronger Than Itself (University of Chicago Press, 2008) is the standard scholarly history."
  },

  "bag-black-artists-group": {
    label: "BAG (Black Artists\u2019 Group)",
    definition: "The Black Artists\u2019 Group, a Black multidisciplinary arts collective founded in St. Louis in 1968, modeled on Chicago\u2019s AACM. BAG combined music, theater, dance, poetry, and visual arts in a single mutual-aid organization. Core BAG musicians included the Bowie brothers (trumpeter Lester, of the Art Ensemble of Chicago, and saxophonist Joseph), the saxophonist Oliver Lake, and the trumpeter Floyd LeFlore. Several BAG musicians, including the trumpeter George Sams, moved to the Bay Area in the 1970s and 1980s and became key collaborators with the Asian American Jazz musicians; Sams co-founded RPM Records, the label that issued Jon Jang\u2019s 1984 Are You Chinese or Charlie Chan?, with the Japanese American bassist Mark Izu and the Chicago AACM saxophonist Lewis Jordan."
  },

  "rpm-records-jang": {
    label: "RPM Records",
    definition: "An independent Bay Area record label co-founded in the early 1980s by the United Front collective (the Japanese American bassist Mark Izu, the African American trumpeter and BAG St. Louis member George Sams, the African American saxophonist and AACM Chicago member Lewis Jordan, and the Japanese-African-American percussionist Anthony Brown). RPM Records released several of the foundational Asian American Jazz movement recordings, including Jon Jang\u2019s self-titled debut Jang (1982, RPM4) and Are You Chinese or Charlie Chan? (1984, RPM5). RPM was no longer functioning by 1987, when Jang and Francis Wong founded Asian Improv Records as the Asian American Jazz movement\u2019s ongoing institutional home. Not to be confused with the British rock label of the same name."
  },

  "asian-improv-records": {
    label: "Asian Improv Records",
    definition: "An independent record label founded in San Francisco in 1987 by the pianist Jon Jang and the saxophonist Francis Wong as the recording arm of Asian Improv aRts. Asian Improv Records has been the primary institutional home of the Asian American Jazz movement on record since the late 1980s, releasing albums by Jang, Glenn Horiuchi, Mark Izu, Francis Wong, Anthony Brown, Vijay Iyer (whose first album Memorophilia was a 1995 AIR release), Jason Kao Hwang, Tatsu Aoki, Hafez Modirzadeh, and many others. The label was explicitly modeled on the AACM and BAG cooperative-production traditions; Jang and Wong have said that founding it was a refusal of the choice between commercial self-censorship and remaining unrecorded."
  },

  "wendell-logan": {
    label: "Wendell Logan (1940-2010)",
    definition: "African American composer, saxophonist, and educator, founding chair of the Department of Africana Studies (originally the Afro-American Music Department) at the Oberlin Conservatory of Music. Logan held the Conservatory\u2019s African American music chair from the late 1960s until his death in 2010, building the department into one of the central institutional homes for the academic study of jazz and Black music in the United States. Among his composition students were the pianist Jon Jang (B.Mus. 1978), who has described Logan as \u201ca mentor and a father figure,\u201d and Jang has explicitly credited Logan with the political and artistic framework he brought to the Asian American Jazz movement of the 1980s."
  },

  "sheng": {
    label: "Sheng",
    definition: "A Chinese free-reed mouth organ consisting of vertical bamboo pipes set into a small wind chamber that the player blows into. The sheng can produce complex, sustained chords as well as single melodic lines, and it has a distinctive shimmering, slightly metallic sound that can sit alongside Western wind instruments without being overpowered. The instrument has a continuous documented history in China of more than 2,000 years and is the ancestor of the Japanese sh\u014d (used in gagaku court music) and, more distantly, of the Western harmonica and accordion. The double-bass player Mark Izu plays sheng on Jon Jang\u2019s 1984 album <em>Are You Chinese or Charlie Chan?</em>, on the album\u2019s fourth and fifth tracks (\u201cYou Don\u2019t Know What Love Is\u201d and \u201cSheng Illusion\u201d) rather than on the title track itself; bringing the sheng into a jazz ensemble is one of the Asian American Jazz movement\u2019s signature moves and would become a central element of Jang\u2019s mature work in the 1990s and 2000s."
  },

  "redress-movement": {
    label: "Japanese American redress and reparations movement",
    definition: "The political campaign organized in the 1970s and 1980s to win an official US government apology and individual financial reparations for Japanese Americans who had been imprisoned in concentration camps during World War II. The Japanese American Citizens League formed its National Committee for Redress in 1978; the Commission on Wartime Relocation and Internment of Civilians (CWRIC) held public hearings across the country in 1981; the Civil Liberties Act of 1988, signed by President Ronald Reagan, granted a formal apology and $20,000 to each of the approximately 82,000 surviving incarcerees. The redress and reparations movement was the political backdrop against which much of the Asian American Jazz movement\u2019s most explicitly political work, including Jon Jang\u2019s Reparations Now! Concerto for Jazz Ensemble and Taiko (1987-88) and Glenn Horiuchi\u2019s Manzanar Voices (1989), was composed."
  },

  "aave": {
    label: "Black vernacular speech (AAVE)",
    definition: "African American Vernacular English, a variety of English with distinctive grammar, pronunciation, and vocabulary that developed in African American communities in the United States, primarily in the 19th and 20th centuries, and has been the topic of an extensive linguistic literature since the 1960s. AAVE has its own consistent grammatical rules (the habitual \u201cbe,\u201d the absence of the copula in present tense, double negation, distinctive verb-tense markers) and a rich vocabulary that has continually entered mainstream American English through Black music, film, and literature. The use of AAVE by non-Black speakers, especially in commercial music, has been the topic of long-running debate about cultural appropriation; the use of AAVE within the Asian American Jazz movement (notably by Woody Ichiyasu and Bob Matsueda in the spoken interlude on Jon Jang\u2019s 1984 \u201cAre You Chinese or Charlie Chan?\u201d) has been read by the musicologist Loren Kajikawa as one of the moves that built and at the same time interrogated the movement\u2019s solidarity with Black liberation politics."
  },

  "george-sams": {
    label: "George Sams",
    definition: "African American jazz trumpeter, composer, and bandleader, born in Texas. Sams was a member of the St. Louis-based Black Artists\u2019 Group (BAG) collective in the late 1960s and early 1970s, alongside the Bowie brothers Lester and Joseph and the saxophonist Oliver Lake; the BAG cohort moved to Paris in 1972, where Sams was active in the European free-jazz scene. After returning to the United States, Sams settled in the Bay Area and became a key collaborator with the Asian American Jazz movement, co-founding RPM Records with Mark Izu, Anthony Brown, and Lewis Jordan, and playing trumpet on Jon Jang\u2019s 1984 album <em>Are You Chinese or Charlie Chan?</em>"
  },

  "lewis-jordan": {
    label: "Lewis Jordan",
    definition: "African American jazz alto saxophonist and composer, a longtime member of the Chicago-based AACM (Association for the Advancement of Creative Musicians) collective in the 1970s before relocating to the Bay Area. In San Francisco, Jordan worked extensively in cross-racial collaborations and co-founded RPM Records with Mark Izu, Anthony Brown, and George Sams; the label issued the foundational Asian American Jazz movement recordings of the early 1980s, including Jon Jang\u2019s self-titled debut <em>Jang</em> (1982) and <em>Are You Chinese or Charlie Chan?</em> (1984). Jordan brought the AACM\u2019s do-it-yourself, mutual-aid model of musician-run record labels and concert presentation directly into the founding of the Asian American Jazz infrastructure."
  },

  "rahsaan-roland-kirk": {
    label: "Rahsaan Roland Kirk (1935-1977)",
    definition: "African American jazz multi-instrumentalist, composer, and bandleader, born Ronald Theodore Kirk in Columbus, Ohio. Kirk became blind at age two as a result of poor medical treatment, attended the Ohio State School for the Blind, and started playing R&B saxophone professionally at age 15. He is best known as a virtuoso saxophonist who could play two and sometimes three saxophones simultaneously (his standard tenor, plus the manzello and stritch, two modified soprano and alto saxophones), and as an inventive flutist who hummed or sang into the flute while playing it. Kirk was a politically outspoken performer who used his between-song stage banter to address Black history, the civil rights movement, and what he called Black Classical Music (his preferred term for jazz, which insisted on the music\u2019s status as a tradition of intellectual seriousness equivalent to European classical music). His <em>Bright Moments</em> double album, recorded live at the Keystone Korner in San Francisco on June 8 and 9, 1973, captured the period of Kirk\u2019s playing that the 19-year-old Jon Jang witnessed at the same club; Jang has cited that concert as the catalyzing event that made him decide to become a musician. Kirk had a stroke in 1975 that left half his body paralyzed; he learned to play one-handed and continued performing until his death from a second stroke in December 1977, at age 42."
  },

  /* ============================
     Module 4 Track 3: The Jets, "Crush On You"
     ============================ */

  "kingdom-of-tonga": {
    label: "Kingdom of Tonga",
    definition: "A Polynesian island nation of roughly 170 islands in the South Pacific, southeast of Fiji and south of Samoa, with a population of about 100,000. Tonga is the only Pacific Island nation never formally colonized; it became a British protectorate in 1900 and gained full independence in 1970, retaining a constitutional monarchy through both. Mormon (LDS) missionaries arrived in 1891, and by the 1970s about nineteen percent of the country\u2019s population had converted to the LDS Church, the highest per-capita Mormon population in the world. The Wolfgramm family, whose eight oldest siblings make up The Jets, are among the Tongan Latter-day Saints who emigrated to the United States in the 1960s and after."
  },

  "lds-church": {
    label: "LDS Church (Latter-day Saints, Mormons)",
    definition: "The Church of Jesus Christ of Latter-day Saints, an American Christian denomination founded in 1830 in upstate New York by Joseph Smith and headquartered in Salt Lake City, Utah, since 1847. Members are commonly called Latter-day Saints or, informally, Mormons. The church has run extensive overseas missionary programs since the nineteenth century; in Tonga, the church established a presence in 1891 and built schools, congregations, and an immigration pipeline that brought tens of thousands of Tongan converts to the United States, primarily to Utah, in the second half of the twentieth century. The Wolfgramm family, who became The Jets, immigrated to the United States from Tonga as Latter-day Saints in 1965."
  },

  "aapi": {
    label: "AAPI (Asian American and Pacific Islander)",
    definition: "An umbrella term combining Asian American and Pacific Islander, used since the 2000 US Census as a federal demographic category and widely adopted in advocacy and academic contexts. The grouping is contested; many Pacific Islander writers argue that Pacific Islander histories (as Indigenous peoples of lands the United States colonized) are categorically different from Asian American immigrant histories, and that the AAPI label flattens that distinction. The framing reading for this module discusses the contested grouping in detail. \u201cAPI\u201d (Asian Pacific Islander) and \u201cAAPI\u201d are used roughly interchangeably; sometimes the slightly older \u201cAPI\u201d is preferred by writers wanting to flag that Pacific Islander histories are not, in their view, properly contained inside the \u201cAsian American\u201d category."
  },

  "form": {
    label: "Form",
    definition: "The large-scale shape of a piece of music: which sections appear in what order, how long they are, and how they relate to each other. Verse-chorus form, AABA form, 12-bar blues, theme and variations, rondo, sonata form, and through-composed are all examples of musical forms. Listening for form means stepping back from any single moment to ask how the parts of the piece fit together as a whole. Most American popular songs are in verse-chorus form; older song traditions (Tin Pan Alley standards, jazz heads) often use AABA; many blues recordings cycle the 12-bar form repeatedly under different verses; long-form jazz pieces, suites, and concept-album tracks often invent their own form for the specific piece."
  },

  "gesture": {
    label: "Gesture",
    definition: "A specific musical move that carries meaning beyond the bare notes: a vocal phrasing decision, a rhythmic emphasis, an unexpected pause, an arrangement choice that signals something about the song's stance or attitude. Where timbre asks what something sounds like, texture asks how many layers there are, and form asks how the parts fit together, gesture asks why this particular move at this particular moment. A blues singer bending a single note longer than expected, a rapper breaking the beat to leave a syllable hanging in silence, a horn section punching in unison on the downbeat, a band suddenly stripping down to one instrument behind a key lyric, a singer addressing the listener in plural \u201cwe\u201d rather than first-person \u201cI\u201d are all gestures. Gesture is one of the four analytical frames introduced in the Module 1 methodology reading, alongside timbre, texture, and form, and it is often where the musical and the cultural meet most directly: a gesture's meaning depends on what tradition the listener and the musician share."
  },

  "hook": {
    label: "Hook",
    definition: "The most ear-catching, memorable element of a song: the part listeners can hum after one or two listens, the part radio programmers and A&R executives use to assess whether a song will land with audiences. Hooks can be vocal (the title-line refrain in a chorus), instrumental (a guitar riff, a synth figure, a horn line), or rhythmic (a distinctive beat). Many pop songs have multiple hooks layered together: a vocal hook in the chorus and an instrumental hook in the introduction or under the chorus. In commercial pop, the hook is often the part of the song writers and producers spend the most time on, because the hook is what gets the song stuck in a listener\u2019s head and brings them back to it."
  },

  "new-edition": {
    label: "New Edition",
    definition: "An African American R&B vocal group from the Orchard Park Projects in the Roxbury neighborhood of Boston, Massachusetts, formed in 1978 as childhood friends Bobby Brown, Michael Bivins, and Ricky Bell were still in elementary school. The lineup that became famous added Ronnie DeVoe and Ralph Tresvant. New Edition broke with their 1983 debut single \u201cCandy Girl\u201d on the independent Streetwise Records (the group\u2019s pitch was, in their manager\u2019s phrasing, \u201ca new edition of the Jackson Five\u201d), then signed with MCA Records in 1984 after a bidding war. Their MCA-era hits \u201cCool It Now,\u201d \u201cMr. Telephone Man,\u201d and \u201cCount Me Out\u201d were among the central youth-oriented R&B records of the mid-1980s. New Edition was the highest-profile teen R&B act on MCA when The Jets signed in 1984; the two acts shared the label\u2019s teen-and-young-adult R&B audience."
  },

  "ready-for-the-world": {
    label: "Ready for the World",
    definition: "An African American R&B and funk band from Flint, Michigan, formed in 1982 by vocalist Melvin Riley, guitarist Gordon Strozier, keyboardist Gregory Potts, percussionist Willie Triplett, bassist John Eaton, and drummer Gerald Valentine. The band released the slow-jam ballad \u201cTonight\u201d on their own Blue Lake label in 1983, attracted Detroit DJ The Electrifying Mojo\u2019s on-air championship, and signed with MCA Records, who reissued \u201cTonight\u201d in 1984 (#6 R&B). Their 1985 self-titled MCA debut produced the breakout single \u201cOh Sheila\u201d (#1 Hot 100, #1 R&B, #1 Dance), a Prince-and-Minneapolis-sound-influenced uptempo track from a band that was, like The Jets, an MCA act working inside the dominant 1985-86 funk-pop production aesthetic without coming directly out of the Minneapolis studio infrastructure."
  },

  "the-jacksons": {
    label: "The Jacksons (the Jackson family band)",
    definition: "American R&B and pop family group from Gary, Indiana, made up of nine children of Joseph and Katherine Jackson. The original five-member lineup, the Jackson 5 (Jackie, Tito, Jermaine, Marlon, and Michael), signed with Motown in 1968, and produced four consecutive #1 Hot 100 hits in 1970 (\u201cI Want You Back,\u201d \u201cABC,\u201d \u201cThe Love You Save,\u201d \u201cI\u2019ll Be There\u201d) with Michael Jackson, then 11 to 12 years old, on lead vocals. The group left Motown in 1976, renamed itself The Jacksons (Jermaine remained at Motown; Randy Jackson joined), and signed with Epic. Michael Jackson\u2019s solo career, launched in parallel with the family band\u2019s continued work in the late 1970s and 1980s, made him one of the most commercially successful recording artists in history. The Jackson 5 / Jacksons template (a sibling group with a child lead, signed to a major label, marketed as a family act) was the explicit reference point for The Jets and for many other family bands that followed."
  },

  "the-osmonds": {
    label: "The Osmonds",
    definition: "American pop and rock family group from Ogden, Utah, made up of nine children of George and Olive Osmond. The Osmonds were Latter-day Saints (LDS / Mormons), like the Wolfgramm family of The Jets, and built their early career through Mormon-community performance circuits in the 1960s. The group broke into mainstream pop in 1971 with \u201cOne Bad Apple\u201d (#1 Hot 100), an explicit Jackson 5 sound-alike that played up the family-pop-group format the Jacksons had established. The youngest brother Donny Osmond and sister Marie Osmond had parallel solo and duo careers through the 1970s and 1980s. The Osmonds were one of the two family-band reference points (alongside the Jacksons) that Mike and Vak\u00e9 Wolfgramm have said inspired them to start their own family band in the mid-1970s."
  },

  /* ============================
     Module 4 Track 4: Invisibl Skratch Piklz, Da Klamz Uv Deth
     ============================ */

  "mobile-dj": {
    label: "Mobile DJ",
    definition: "A DJ who owns and travels with their own portable sound system and lighting rig, performing at events (weddings, school dances, baptisms, birthday parties, corporate functions) where the venue does not have its own audio infrastructure. The mobile DJ is distinct from the resident club DJ, who works at a fixed venue with fixed equipment, and from the radio DJ, who works for a station. The Bay Area Filipino American mobile DJ scene of the late 1970s through the early 1990s, documented in detail in Oliver Wang\u2019s Legions of Boom (Duke University Press, 2015), was a community institution as much as a music-industry one: Filipino American crews like Ultimate Creations, Spintronix, and Images Inc. provided the audio and visual production for the steady cycle of community events that anchored the Bay Area Filipino American social calendar, and their garage parties and showcase events were the training ground for the generation of scratch DJs who eventually founded Invisibl Skratch Piklz."
  },

  "dmc": {
    label: "DMC (Disco Mix Club)",
    definition: "An international DJ membership organization founded in 1983 in the United Kingdom, originally for club and remix DJs but best known for its annual DMC World DJ Championships, the most prestigious global DJ competition from the late 1980s through the early 2000s. The DMC organizes regional, national, and world finals across solo and team categories. DJ Q-Bert won the 1991 US DMC and placed second at the world finals; Q-Bert, Mix Master Mike, and DJ Apollo competed as the Rocksteady DJs and took the 1992 world team title; Q-Bert and Mike won the next two world team titles (1993 and 1994), at which point the DMC asked the crew to retire from competition because their dominance was discouraging other entrants."
  },

  "grand-wizzard-theodore": {
    label: "Grand Wizzard Theodore",
    definition: "Theodore Livingston (born March 5, 1963), African American hip hop DJ from the Bronx, widely credited as the inventor of scratching. The standard origin story, which Theodore has told consistently in interviews and in the 2001 documentary Scratch: in 1975, at twelve or thirteen years old, he was practicing in his bedroom with his mother\u2019s 45s, the Incredible Bongo Band\u2019s \u201cBongo Rock\u201d (or \u201cApache,\u201d depending on the telling) loud through his speakers, when his mother banged on the door to tell him to turn it down. Holding the record still under the needle so he wouldn\u2019t lose his place, he moved it back and forth, heard the rhythmic sound the moving groove made under the stylus, and recognized that he could turn that sound into a deliberate musical technique. He came up under the mentorship of his older brother Mean Gene and Grandmaster Flash, performed publicly with the L-Brothers and later with the Fantastic Five, and appeared in the foundational 1983 hip hop film Wild Style. The point Wang and other turntablism scholars make is that scratching was the moment the turntable stopped being a playback device and became a percussion instrument that could be played; everything Invisibl Skratch Piklz built decades later rests on that single moment in a Bronx bedroom in 1975."
  },

  "grandmixer-dxt": {
    label: "Grandmixer DXT (formerly Grandmixer D.ST)",
    definition: "Derek Showard, African American turntablist from the Edenwald Projects in the Bronx. Originally went by Grandmixer D.ST (a reference to Manhattan\u2019s Delancey Street), and changed the spelling to DXT in 1988 after his brother\u2019s death. He performed with Afrika Bambaataa at the early-1980s Roxy nights, appeared in the 1983 film Wild Style, and was on the first hip hop tour to Europe. His most-cited credit is the turntable scratching on Herbie Hancock\u2019s 1983 single \u201cRockit,\u201d the centerpiece of Hancock\u2019s Future Shock album, produced with Bill Laswell. \u201cRockit\u201d won a Grammy for best R&B instrumental performance, the music video saturated MTV in late 1983 and 1984, and DXT and Hancock performed the piece together on the 1984 Grammy Awards telecast. \u201cRockit\u201d was the song through which scratching first entered mainstream pop visibility for many listeners. Q-Bert and Mix Master Mike both later named the Hancock single in interviews and in the documentary Scratch as the recording that first made them want to be turntablists."
  },

  "mix-master-mike": {
    label: "Mix Master Mike",
    definition: "Michael Schwartz (born April 4, 1970), Filipino and Ashkenazi Jewish American turntablist from the Bay Area, co-founder of Invisibl Skratch Piklz with Q-Bert and DJ Apollo in 1989. Mike won the 1992 New Music Seminar / Supermen Inc. DJ Battle for World Supremacy in New York City (the first West Coast DJ to take that title), shared the 1992 DMC World team title with the Rocksteady DJs (Q-Bert and Apollo), and won the 1993 and 1994 DMC World team titles with Q-Bert as the Dream Team. Mike began stepping back from ISP touring in the mid-1990s for solo work, and joined the Beastie Boys in 1997 as their resident DJ; he played on Hello Nasty (1998), To the 5 Boroughs (2004), and Hot Sauce Committee Part Two (2011), and was inducted into the Rock and Roll Hall of Fame with the band in 2012. He has continued working as a solo artist, with the Beastie Boys, and most recently with Cypress Hill."
  },

  "dj-apollo": {
    label: "DJ Apollo",
    definition: "Apollo Novicio, Filipino American turntablist born in the Philippines and raised in San Francisco's Mission District before his family moved to Daly City. Co-founder of Invisibl Skratch Piklz with Q-Bert and Mix Master Mike in 1989, and a member of the Rocksteady DJs lineup that took the 1992 DMC World team title. Apollo left ISP in 1993 (Shortkut joined the crew in his place) and went on to a long career as the touring DJ for jazz saxophonist Branford Marsalis's Buckshot LeFonque, the Oakland hip hop collective Souls of Mischief, the trumpeter Russell Gunn, and the Bay Area soul singer Goapele. Together with Shortkut and Vinroc, he is one of the three Triple Threat DJs. He appears in interviews in Gabe Meline's 2024 KQED long-form history of the Filipino mobile DJ scene, where he is one of the central voices on the late 1970s through early 1990s Daly City garage-party scene that produced the crew."
  },

  /* ============================
     Module 4 Track 5: Mitski, "Your Best American Girl"
     ============================ */

  "dead-oceans": {
    label: "Dead Oceans",
    definition: "An independent record label based in Bloomington, Indiana, founded in 2007 as part of the Secretly Group family (which also includes Jagjaguwar and Secretly Canadian). Dead Oceans signed Mitski in late 2015 and released Puberty 2 in 2016, Be the Cowboy in 2018, Laurel Hell in 2022, and The Land Is Inhospitable and So Are We in 2023. The label\u2019s broader roster includes Phoebe Bridgers, Khruangbin, Bright Eyes, Slowdive, and Japanese Breakfast, among others; in the second half of the 2010s and the early 2020s, Dead Oceans was one of the central institutional homes for the indie rock space\u2019s expanding roster of women and Asian American artists."
  },

  "patrick-hyland": {
    label: "Patrick Hyland",
    definition: "American producer, engineer, and songwriter; Mitski\u2019s long-term studio collaborator. Hyland produced Mitski\u2019s Bury Me at Makeout Creek (2014), Puberty 2 (2016), Be the Cowboy (2018), and Laurel Hell (2022); on Puberty 2, Mitski has said in interviews, the two of them played \u201cevery instrument\u201d on the record, which they recorded in two weeks at Acme Studios in Westchester County, New York. Hyland\u2019s broader credits include work with the Antlers and Sad13 (Speedy Ortiz\u2019s Sadie Dupuis)."
  },

  "zia-anger": {
    label: "Zia Anger",
    definition: "American filmmaker and music-video director, born 1985, based in upstate New York. Anger directed Mitski\u2019s music video for \u201cYour Best American Girl,\u201d which premiered on April 13, 2016 and became one of the most-discussed indie rock music videos of the decade. Her broader video work includes pieces for Jenny Hval, Angel Olsen, Maggie Rogers, and Helado Negro; her feature film My First Film (2024) is a fictionalized account of her own first attempted feature, framed around the labor and economic conditions of independent filmmaking. In her 2026 Marie Claire 10-year retrospective on the \u201cYour Best American Girl\u201d video, Anger discussed the production: a single-day shoot in a Brooklyn warehouse in February 2016, with cinematographer Ashley Connor, and the moment the entire crew applauded after Mitski\u2019s take of the chorus shred."
  },

  /* ============================
     Module 5 framing reading
     ============================ */

  "rock-and-roll": {
    label: "Rock and roll",
    definition: "An American popular music style that took shape in the early to mid-1950s out of African American rhythm and blues, gospel, and blues traditions, with contributions from country and pop. Early rock and roll was the music of teenage audiences crossing racial lines for the first time at large scale; its early stars included Black artists (Chuck Berry, Little Richard, Fats Domino) and white artists who recorded Black-originated material (Elvis Presley, Bill Haley). The hyphenated form \u201crock and roll\u201d typically refers to the 1950s and early 1960s style; \u201crock\u201d without the qualifier usually refers to the broader genre that descended from it through the Beatles, the Rolling Stones, and the long arc of guitar-based popular music since."
  },

  "heartland-rock": {
    label: "Heartland rock",
    definition: "A late-1970s and 1980s American rock subgenre associated with white working-class subject matter, mid-tempo song forms, and a sound built around guitar, piano, organ, drums, and saxophone. The defining figures are Bruce Springsteen (whose 1980 album The River is one of the genre\u2019s anchor recordings), Bob Seger, John Mellencamp, and Tom Petty. Heartland rock\u2019s lyric content often centers on the lives of small-town and industrial-city characters during the deindustrialization of the late 1970s and 1980s, and the genre is one of the central popular-music documents of that economic moment."
  },

  "pogrom": {
    label: "Pogrom",
    definition: "An organized, often state-sanctioned massacre or violent attack against an ethnic or religious group; the term is most often associated with the waves of anti-Jewish violence in the Russian Empire and adjacent territories, particularly between 1881 and 1921. The pogroms drove the largest Jewish migration in modern history, with more than two million Jewish refugees arriving in the United States between 1881 and 1924, mostly settling in New York City."
  },

  "tin-pan-alley": {
    label: "Tin Pan Alley",
    definition: "Both a place and an industry. As a place, Tin Pan Alley was the block of West 28th Street between Fifth and Sixth Avenues in Manhattan where most of the major American sheet-music publishing houses concentrated in the 1890s and early 1900s. As an industry, Tin Pan Alley refers to the broader sheet-music-driven popular song business of approximately 1885 to 1930, in which professional songwriters, lyricists, and pluggers produced the popular songs of the era for sale primarily as printed sheet music. Many of the era\u2019s most prominent songwriters were children of Eastern European Jewish immigrants, including Irving Berlin, George and Ira Gershwin, Jerome Kern, and Harold Arlen; the Tin Pan Alley songbook, extended by the Broadway musicals of Rodgers and Hammerstein and others through the 1940s and 1950s, is often called the Great American Songbook. The songbook was built in continuous dialogue with Black American music: ragtime, blues, and early jazz were the raw materials Tin Pan Alley songwriters drew on, often through the racist performance frameworks of blackface minstrelsy and vaudeville (Berlin\u2019s 1911 \u201cAlexander\u2019s Ragtime Band,\u201d Gershwin\u2019s 1919 \u201cSwanee\u201d as Al Jolson performed it, Jolson\u2019s 1927 film The Jazz Singer). The credit and royalty dynamics of the era meant that Jewish songwriters and white-owned publishing companies retained most of the rights and most of the income while Black musicians did much of the actual making, a pattern that Rachel Rubin, Jeffrey Melnick, and other scholars have argued is impossible to leave out of an honest history of the songbook."
  },

  "blackface-minstrelsy": {
    label: "Blackface minstrelsy",
    definition: "The most popular form of American entertainment through much of the nineteenth century, in which white (and, later, Black) performers darkened their faces with burnt cork and performed exaggerated, racist caricatures of Black Americans through song, dance, and comic dialogue. Minstrelsy\u2019s legacy in American popular music is substantial and uncomfortable: many of the songwriting and performance conventions of Tin Pan Alley, vaudeville, and early American popular song descended from minstrel forms, and prominent twentieth-century white performers (including the Jewish American singer Al Jolson, in the 1927 film The Jazz Singer) continued to perform in blackface well into the twentieth century. The minstrel tradition is one of the central conduits through which Black musical material reached white audiences in the nineteenth and early twentieth centuries, and an honest history of American popular music has to keep its presence in view."
  },

  "appalachia": {
    label: "Appalachia",
    definition: "A cultural and geographic region of the eastern United States covering parts of the Appalachian mountain range from western New York and Pennsylvania through West Virginia, eastern Kentucky, southwestern Virginia, eastern Tennessee, western North Carolina, and northern Georgia and Alabama. Appalachia developed a distinctive folk culture rooted in Ulster Scots, English, German, and African American traditions, and its music (ballads, fiddle tunes, banjo styles, unaccompanied hymn singing, gospel quartets) was a foundational element of country music, bluegrass, and the broader Americana tradition."
  },

  "punk": {
    label: "Punk rock",
    definition: "A musical and cultural movement that emerged in the mid-1970s in New York and London, characterized by short, fast, aggressive songs, a do-it-yourself ethos, and an oppositional stance toward mainstream commercial music. American punk\u2019s major early figures included the Ramones (Queens, mixed Italian American, Hungarian American, and Jewish American membership), Patti Smith (New Jersey), Television, the Talking Heads, and the Dead Boys, with West Coast scenes following in Los Angeles (X, the Germs, Black Flag) and San Francisco. Although punk is often remembered as overwhelmingly white, the form had Black originators (the band Death formed in Detroit in 1971; Pure Hell in Philadelphia around the same time) whose work was largely written out of the standard punk history."
  },

  "diy": {
    label: "DIY (do it yourself)",
    definition: "A musical and economic ethos that emerged with mid-1970s punk and ran through the hardcore, indie-rock, and underground music scenes that followed: musicians making and releasing their own records, promoting their own shows, running their own labels, and building their own touring and distribution networks rather than working through the major-label commercial music industry. The DIY ethos is partly aesthetic (a refusal of the high-budget polish of mainstream commercial music in favor of a deliberately rough, unmediated sound), partly political (a refusal of the corporate music industry's economic structure, including its racial and gender hierarchies), and partly practical (a workable response to the fact that the major-label system had no interest in most of the music the punk and post-punk scenes were making). The DIY infrastructure of independent labels, zines, all-ages shows, college-radio networks, distros, and house-show venues that the punk and hardcore scenes built in the late 1970s and early 1980s shaped the next four decades of American underground music; it is the institutional precondition for indie rock, riot grrrl, the cassette underground, the noise scene, and the contemporary Bandcamp ecosystem."
  },

  "fugazi": {
    label: "Fugazi",
    definition: "An American post-hardcore band from Washington, DC, active 1987 to 2003 (currently on indefinite hiatus rather than formally broken up). The band was formed by Ian MacKaye after his earlier hardcore band Minor Threat ended in 1983, with Guy Picciotto, Brendan Canty, and Joe Lally rounding out the lineup. Fugazi released seven studio albums on MacKaye's Dischord Records and is the canonical example of long-term DIY commitment: the band kept ticket prices low (typically five dollars throughout the 1990s, eventually rising to ten), refused to sell band merchandise at shows or charge for major-label-style promotional work, played all-ages venues whenever possible, and turned down major-label offers throughout its run. The band's musical work (taut, dynamic, politically engaged, drawing on hardcore, dub, post-punk, and noise rock) is widely recognized as a defining contribution to American underground rock; the band's economic and ethical model has been at least as influential."
  },

  "riot-grrrl": {
    label: "Riot grrrl",
    definition: "An American feminist punk movement that emerged in Olympia, Washington and Washington, DC in the early 1990s. The defining bands included Bikini Kill, Bratmobile, Heavens to Betsy, Sleater-Kinney, and Huggy Bear (UK); the scene\u2019s broader institutional life included a network of zines, regional festivals, and women-only sections of shows. Riot grrrl was substantially formed by working-class and lower-middle-class young women in the punk and indie-rock spaces, and its aftermath shaped the next two decades of American indie rock."
  },

  "grunge": {
    label: "Grunge",
    definition: "An American rock subgenre that emerged in Seattle in the late 1980s and crossed over to mainstream popularity in 1991 with Nirvana\u2019s Nevermind. Grunge\u2019s sonic vocabulary combined the heaviness of metal with the song-form discipline and emotional rawness of punk, and its lyric content often centered on alienation, depression, and working-class disaffection. The defining grunge bands (Nirvana, Pearl Jam, Soundgarden, Alice in Chains) were predominantly white and predominantly male, and the genre\u2019s relationship to the Pacific Northwest\u2019s deindustrialization and timber-economy collapse runs in parallel to heartland rock\u2019s relationship to the rust belt."
  },

  "americana": {
    label: "Americana",
    definition: "A late-twentieth- and early-twenty-first-century genre and radio format that mixes country, folk, bluegrass, rock, and roots music. Americana emerged in the 1990s as a category for music that did not fit cleanly into the commercial Nashville country mainstream but drew on the same traditions; major figures include Steve Earle, Lucinda Williams, Gillian Welch, Wilco, the Avett Brothers, and contemporary artists like Brandi Carlile and Tyler Childers. The genre often functions as the present-day inheritor of the 1960s folk revival\u2019s relationship to traditional Anglo-American material."
  },

  "doo-wop": {
    label: "Doo-wop",
    definition: "A vocal-harmony pop style that emerged from African American urban neighborhoods in the late 1940s and 1950s and reached mainstream popularity from approximately 1955 to 1962. Doo-wop groups typically performed without instruments or with minimal accompaniment, building elaborate close-harmony vocal arrangements around a lead singer, with bass, baritone, tenor, and falsetto parts each carrying their own melodic lines. The genre took its name from the nonsense syllables groups used to fill in the harmony parts (\u201cdoo-wop,\u201d \u201csh-boom,\u201d \u201cba-ba-ba\u201d). Although doo-wop began as a Black urban form, by the mid-1950s it had become a widely shared idiom across Black, Puerto Rican, Italian American, and Jewish American urban groups in New York, Philadelphia, and other Northeastern cities."
  },

  "yiddish-theater": {
    label: "Yiddish theater",
    definition: "A Yiddish-language theatrical tradition that emerged in Eastern Europe in the 1870s under Abraham Goldfaden and reached its commercial peak on the Lower East Side and Second Avenue of Manhattan between approximately 1900 and 1930. By 1925 the strip of Second Avenue running south from 14th Street housed more than a dozen Yiddish-language theaters and was known as the \u201cYiddish Broadway,\u201d sustaining hundreds of thousands of theatergoers a year, the first theatrical union in the United States, and a robust ecosystem of cafes, music stores, sheet-music publishers, and Yiddish-language press and radio. The four major Second Avenue composers (Joseph Rumshinsky, Abraham Ellstein, Sholom Secunda, and Alexander Olshanetsky) wrote a substantial original Yiddish-language musical theater repertoire, drawing on cantorial and Jewish folk traditions; Yiddish theater is one of the principal sources for the Tin Pan Alley and Broadway musical theater that followed."
  },

  "cantorial-music": {
    label: "Cantorial music",
    definition: "The sung liturgical music of the synagogue, performed by a hazzan (cantor) leading the congregation in prayer. Cantorial music is largely modal rather than functionally tonal, with elaborate vocal ornamentation and an expressive emotional range that draws on text-setting traditions running back to medieval and ancient Jewish practice. Many of the major figures of Tin Pan Alley and Broadway musical theater either grew up in cantorial households (Irving Berlin\u2019s and Harold Arlen\u2019s fathers were both cantors) or absorbed the tradition through Yiddish theater composers who had cantorial training; the influence on the harmonic and melodic vocabulary of American popular song between the 1910s and 1950s is substantial, though the question of how to weigh it against the parallel influence of African American music is an active scholarly debate."
  },

  "irving-berlin": {
    label: "Irving Berlin",
    definition: "American composer and lyricist (born Israel Beilin, May 11, 1888, in the Russian Empire; died September 22, 1989, New York City). The most prolific and commercially successful Tin Pan Alley songwriter, with an output estimated at more than 1,500 songs and scores for 21 Broadway and 17 Hollywood productions over a six-decade career. Berlin\u2019s family fled anti-Jewish pogroms and arrived on the Lower East Side in 1893, when Berlin was five; his father was a cantor. Berlin began as a singing waiter in the Bowery, became a Tin Pan Alley song plugger, and broke through as a songwriter with \u201cAlexander\u2019s Ragtime Band\u201d in 1911. His best-known songs include \u201cWhite Christmas\u201d (1942), \u201cGod Bless America\u201d (1938), \u201cThere\u2019s No Business Like Show Business\u201d (1946), and \u201cAlexander\u2019s Ragtime Band\u201d; his Broadway scores include Annie Get Your Gun (1946). Berlin never learned to read music in any sustained way and composed at the piano in F-sharp."
  },

  "george-gershwin": {
    label: "George Gershwin",
    definition: "American composer and pianist (born Jacob Gershowitz, September 26, 1898, in Brooklyn; died July 11, 1937, Hollywood) who fused Tin Pan Alley songcraft, Broadway musical theater, jazz, blues, and classical concert music into a body of work that defined a substantial portion of mid-twentieth-century American popular and concert music. Gershwin\u2019s parents were Russian Jewish immigrants from Vilnius and St. Petersburg; the family lived for years at 91 Second Avenue in the heart of the Yiddish Theatre District, and the Gershwin brothers regularly attended Yiddish-language theatrical productions as children. Gershwin began his career as a Tin Pan Alley song plugger at fifteen, broke through with \u201cSwanee\u201d in 1919 (the song made famous by Al Jolson), and over the next eighteen years wrote more than 20 Broadway musicals (most with lyrics by his brother Ira), the orchestral works Rhapsody in Blue (1924) and An American in Paris (1928), the Pulitzer Prize-winning musical Of Thee I Sing (1931), and the opera Porgy and Bess (1935). His death from a brain tumor at age 38 cut short what most contemporaries believed would have been one of the largest single bodies of work in twentieth-century American music."
  },

  "broadway-musical": {
    label: "Broadway musical",
    definition: "A theatrical form combining sung musical numbers, instrumental orchestration, dance, and spoken dialogue, typically performed in commercial New York City theaters in the Times Square area (the strip of Broadway and adjacent streets between roughly 41st and 53rd Streets). The Broadway musical evolved out of nineteenth-century operetta, vaudeville, and variety revue traditions; its modern integrated form (in which songs grow out of character and situation rather than serving as detachable numbers) is generally dated to Jerome Kern and Oscar Hammerstein II\u2019s Show Boat (1927) and consolidated by Rodgers and Hammerstein\u2019s Oklahoma! (1943). Broadway has been throughout its modern history the institutional home for many of the most consequential composers of the Great American Songbook, and remains a major source of American popular music."
  },

  "richard-rodgers": {
    label: "Richard Rodgers",
    definition: "American composer (born June 28, 1902, in Queens; died December 30, 1979, in New York City), the most prolific Broadway composer of the twentieth century, born to a German Jewish American physician father and a Russian Jewish American mother. Rodgers wrote 43 Broadway musicals across two long collaborations: first with lyricist Lorenz Hart from 1919 through Hart\u2019s death in 1943 (Babes in Arms 1937, Pal Joey 1940), then with Oscar Hammerstein II from 1943 to 1959 (Oklahoma! 1943, Carousel 1945, South Pacific 1949, The King and I 1951, The Sound of Music 1959). The Rodgers and Hammerstein partnership defined the postwar Broadway musical and produced a substantial portion of the Great American Songbook."
  },

  "oscar-hammerstein": {
    label: "Oscar Hammerstein II",
    definition: "American librettist and lyricist (born July 12, 1895, in New York City; died August 23, 1960, in Doylestown, Pennsylvania), the central figure in shaping the modern integrated American musical. Hammerstein wrote the book and lyrics for Show Boat (1927, with composer Jerome Kern) and for the long Rodgers and Hammerstein collaboration that ran from Oklahoma! (1943) through The Sound of Music (1959). His grandfather Oscar Hammerstein I was a German-Jewish-immigrant theatrical impresario who built a string of New York theaters in the late nineteenth century; the younger Hammerstein worked at one of his grandfather\u2019s theaters as a young man. Hammerstein later mentored the young Stephen Sondheim, who pushed the form further."
  },

  "great-american-songbook": {
    label: "Great American Songbook",
    definition: "A loose canon of approximately the 300 to 400 best-known popular songs written for Tin Pan Alley, Broadway, and Hollywood between roughly 1920 and 1960, treated by performers and critics as the central American popular-song repertoire of the twentieth century. The canon\u2019s racial dynamics are uneven across its three layers. The composer-canon is overwhelmingly white and disproportionately Jewish American, dominated by Irving Berlin, George and Ira Gershwin, Jerome Kern, Cole Porter, Harold Arlen, Richard Rodgers (with Hart and Hammerstein), Hoagy Carmichael, Johnny Mercer, and a few dozen others; the small group of Black composers admitted to the canon (Duke Ellington, Billy Strayhorn, Fats Waller, Andy Razaf, Eubie Blake) worked under structural segregation that excluded them from mainstream Broadway and from much of the music-publishing industry, and most of their songs entered the canon through later cover versions by white singers and bandleaders. The performer-canon is much more racially mixed and rests heavily on Black voices: Ella Fitzgerald (whose eight Verve \u201cSong Book\u201d albums of 1956\u20131964 are the canonical recorded survey), Billie Holiday, Sarah Vaughan, Nat King Cole, Lena Horne, Dinah Washington, Nina Simone, and Louis Armstrong are central to why the songs have the prestige they have. The musical material the songs are built from (ragtime, blues, and jazz vocabulary) is impossible to separate from African American music; the question of whose work the canon really credits has been contested for decades and remains live."
  },

  "thomas-nast": {
    label: "Thomas Nast",
    definition: "German-born American political cartoonist (born September 27, 1840, in Landau, Bavaria; died December 7, 1902, in Guayaquil, Ecuador), the dominant figure in nineteenth-century American political illustration and the staff cartoonist for Harper\u2019s Weekly from 1862 through 1886. Nast immigrated with his mother to the United States in 1846 at age six. He is credited with popularizing the elephant as the symbol of the Republican Party and the donkey as the symbol of the Democratic Party, with shaping the modern visual image of Santa Claus, and with the cartoon campaign that helped bring down New York City\u2019s Tammany Hall under William \u201cBoss\u201d Tweed. He is also remembered, less favorably, for dozens of viciously simianized caricatures of Irish Catholic immigrants drawn in the 1860s and 1870s, which became textbook examples of nineteenth-century American nativist art and contributed to the racialization of Irish Americans in the dominant Anglo-Protestant press."
  },

  "draft-riots": {
    label: "New York City Draft Riots",
    definition: "Four days of mob violence in lower and midtown Manhattan from July 13 to 16, 1863, sparked by working-class anger at the federal Enrollment Act, which had instituted the first conscription in United States history and allowed wealthy draftees to avoid service by paying a $300 commutation fee. The mobs, made up largely of recently arrived Irish Catholic immigrants, began by attacking draft offices and pro-war newspapers but quickly turned their violence on Black New Yorkers, lynching Black men in the streets, attacking Black neighborhoods, and burning the Colored Orphan Asylum at Fifth Avenue and 43rd Street (where staff and bystanders evacuated all 200-plus children before the four-story building was destroyed). The official death toll was around 120, with credible higher estimates; the city\u2019s Black population fell roughly 20 percent in the months that followed as families fled to Brooklyn, New Jersey, and beyond. The Draft Riots are the most cited example of how nineteenth-century European immigrant groups, themselves the targets of nativist violence, accelerated their consolidation into American whiteness through participation in anti-Black violence."
  },

  "wasp": {
    label: "WASP / Anglo-Saxon Protestant",
    definition: "White Anglo-Saxon Protestant, an informal term (the acronym \u201cWASP\u201d became common in the 1960s) for the racial-ethnic-religious group that held the dominant cultural, economic, and political position in the United States from the early colonial period through the middle of the twentieth century. WASP referred specifically to descendants of English, Scottish, and Welsh Protestant settlers (sometimes broadened to include German Protestants and Scandinavian Lutherans), and the category functioned both as a self-identification by elites and as the implicit norm against which other European immigrant groups (Irish Catholics, Italian Catholics, Polish Catholics, Eastern European Jews) were racialized as outsiders during the long American debate about who counted as fully white."
  },

  "nativism": {
    label: "Nativism",
    definition: "A political and social ideology that frames the interests of a country\u2019s native-born population as opposed to, and threatened by, immigrants. American nativism in the nineteenth and early twentieth centuries was largely Anglo-Saxon Protestant in orientation and targeted Irish Catholics, German Catholics, Italian Catholics, Polish Catholics, Eastern European Jews, Chinese, Japanese, and Mexican immigrants in successive waves. Its institutional expressions included the anti-Catholic Know-Nothing party of the 1850s, the Chinese Exclusion Act of 1882, the National Origins Act of 1924, and the long history of nativist mob violence and political cartooning that depicted immigrants as racial inferiors. Nativism is the political backdrop against which the European immigrant communities Module 5 covers were initially racialized."
  },

  "pale-of-settlement": {
    label: "Pale of Settlement",
    definition: "The western region of the Russian Empire, established by Catherine the Great in 1791 and lasting until 1917, in which Jews were legally required to live. The Pale included most of present-day Poland, Lithuania, Belarus, Ukraine, and Moldova, plus parts of western Russia. Conditions for Jews inside the Pale were difficult and worsened sharply after the assassination of Czar Alexander II in 1881, which triggered waves of state-sanctioned anti-Jewish violence (pogroms) and harsher legal restrictions. Roughly two million Jews left the Pale of Settlement for the United States between 1881 and 1924, the vast majority settling initially on the Lower East Side of Manhattan; the children of that immigration are the central figures in the Tin Pan Alley, Broadway, and Brill Building songwriting traditions Module 5 covers."
  },

  "national-origins-act": {
    label: "National Origins Act of 1924",
    definition: "Federal United States immigration legislation, also known as the Johnson-Reed Act, signed by President Calvin Coolidge on May 26, 1924. The act drastically restricted immigration from southern and eastern Europe (Italy, Greece, Russia, Poland, the Balkans) by setting national-origin quotas based on the 1890 census, before most of the southern and eastern European immigration had occurred. It also barred most Asian immigration entirely. The act effectively ended the great wave of European immigration that had begun in the 1880s, reduced annual European immigration to a small fraction of its prewar level for the next four decades, and remained in place until the 1965 Immigration and Nationality Act replaced it. In the Jacobson three-period account of American whiteness, the 1924 act marks the transition from the period when European \u201craces\u201d were divided in a hierarchy to the period when they were gradually consolidated into a single \u201cCaucasian\u201d category."
  },

  "show-boat": {
    label: "Show Boat",
    definition: "A 1927 Broadway musical with music by Jerome Kern and book and lyrics by Oscar Hammerstein II, adapted from Edna Ferber\u2019s 1926 novel of the same name, that opened at the Ziegfeld Theatre on December 27, 1927. The show is generally identified as the pivot point at which the American musical theater turned away from the revue and operetta tradition and toward the integrated book musical, in which songs grow out of character and dramatic situation rather than serving as detachable numbers. Show Boat was also the first major American musical to engage seriously with race, miscegenation law, and family rupture across the color line, and the work\u2019s racial politics are at once unprecedented for the period and uncomfortable for present-day audiences (the original opening chorus contained the n-word; some early productions used white actors in blackface for Black roles); modern revivals have rewritten and reframed substantial portions of the script."
  },

  "oklahoma": {
    label: "Oklahoma!",
    definition: "A 1943 Broadway musical with music by Richard Rodgers and book and lyrics by Oscar Hammerstein II, the first collaboration of the Rodgers and Hammerstein partnership, that premiered at the St. James Theatre on March 31, 1943. The show ran for 2,212 performances, won a special Pulitzer Prize in 1944, and is generally identified as the work that established the integrated book-musical formula (songs and dance growing out of plot and character) as the standard for postwar Broadway. Oklahoma! launched the Rodgers and Hammerstein run that included Carousel (1945), South Pacific (1949), The King and I (1951), and The Sound of Music (1959), which together produced a substantial portion of the Great American Songbook and defined the postwar Broadway musical."
  },

  "jazz-singer": {
    label: "The Jazz Singer (1927)",
    definition: "Warner Bros. film released October 6, 1927, directed by Alan Crosland and starring Al Jolson, the first feature-length motion picture with synchronized dialogue sequences (most of the film is silent in the conventional sense, but Jolson\u2019s musical numbers and a few short spoken scenes use the new Vitaphone sound-on-disc system). The film tells the story of a Jewish cantor\u2019s son who rebels against his father\u2019s tradition by performing American popular music in blackface; its commercial success effectively ended the silent-film era and launched the rapid transition to sound film across the late 1920s and early 1930s. The Jazz Singer\u2019s combination of Jewish American assimilation narrative and blackface minstrelsy makes it a central, and uncomfortable, document of the Tin Pan Alley era\u2019s racial dynamics."
  },

  "aldon-music": {
    label: "Aldon Music",
    definition: "New York-based music <em>publishing</em> company (not a record label) founded by Don Kirshner and Al Nevins in May 1958, housed at 1650 Broadway across the street from the Brill Building proper at 1619 Broadway. Aldon was the principal institutional engine of the Brill Building songwriting era of the late 1950s and early 1960s. A publisher\u2019s business is to own songs, not recordings: Aldon signed young songwriters to staff contracts that gave Aldon the copyright on every song they wrote, put them to work in piano-equipped cubicles writing pop singles, made piano-and-voice demos of the finished songs in an in-house demo studio (often with the songwriters themselves singing), and employed pluggers whose job was to take those demos around to A&R people at the major and independent labels until a label agreed to record the song with one of its artists. When a label bought a song, Aldon kept a share of the mechanical royalties on every record pressed and paid the songwriters their share. At its peak the company employed eighteen songwriters under that arrangement: Carole King and Gerry Goffin, Doc Pomus and Mort Shuman, Jeff Barry and Ellie Greenwich, Barry Mann and Cynthia Weil, Phil Spector, Neil Sedaka and Howard Greenfield, and Neil Diamond among others. Kirshner also ran two in-house Aldon-owned labels for the songs that Aldon decided not to shop out: Dimension Records (founded 1962, where Little Eva\u2019s \u201cThe Loco-Motion\u201d and her album version of \u201cUp on the Roof\u201d came out) and Chairman Records. Kirshner and Nevins sold Aldon to Columbia Pictures-Screen Gems in April 1963 for approximately two million dollars; the songs Aldon\u2019s writers produced supplied a substantial fraction of the early-1960s American pop charts."
  },

  "alan-lomax": {
    label: "Alan Lomax (1915-2002)",
    definition: "American ethnomusicologist and folklorist who, working for the Library of Congress's Archive of American Folk Song through the 1930s and 1940s, recorded thousands of traditional musicians across the rural American South, the Caribbean, and (later) Europe. Lomax carried portable disc-cutting equipment into the field, recording singers and players in their homes, on prison farms, at gatherings, and in churches. The recordings he made of artists including Lead Belly, Muddy Waters, Jelly Roll Morton, Woody Guthrie, Vera Hall, and Texas Gladden became foundational source material for the postwar American folk revival, for the blues revival, and for the wider mid-twentieth-century rediscovery of American vernacular music. His 1941 recording of Texas Gladden singing \u201cMary Hamilton\u201d for the Library of Congress is one of the early-twentieth-century American sources for the ballad."
  },

  "pete-seeger": {
    label: "Pete Seeger (1919-2014)",
    definition: "American folk singer, banjo player, songwriter, and activist who is widely considered the central institutional figure of the twentieth-century American folk revival. Seeger co-founded the Almanac Singers in 1940 with Woody Guthrie and others, and then the Weavers in 1948 with Lee Hays, Ronnie Gilbert, and Fred Hellerman; the Weavers' 1950 recording of Lead Belly\u2019s \u201cGoodnight, Irene\u201d topped the charts for thirteen weeks. In 1953 the Weavers were blacklisted as Communist sympathizers, and Seeger was subpoenaed by the House Un-American Activities Committee in 1955 and convicted of contempt of Congress in 1961 (the conviction was overturned in 1962). He continued performing through the blacklist on Folkways Records, on college campuses, and at children\u2019s concerts. Songs he wrote or co-wrote include \u201cWhere Have All the Flowers Gone?\u201d, \u201cIf I Had a Hammer\u201d (with Lee Hays), and \u201cTurn! Turn! Turn!\u201d (adapted from Ecclesiastes); he also helped popularize \u201cWe Shall Overcome\u201d as the central anthem of the civil rights movement after first hearing it from Zilphia Horton of the Highlander Folk School in 1948. Seeger was a direct mentor to Joan Baez, Bob Dylan, and many other younger folk-revival singers."
  },

  "odetta": {
    label: "Odetta (1930-2008)",
    definition: "Born Odetta Holmes in Birmingham, Alabama, December 31, 1930; died December 2, 2008, in New York City. African American folk singer, guitarist, and civil rights activist whose powerful contralto voice and repertoire of traditional spirituals, work songs, and prison-chain-gang songs made her, in Martin Luther King Jr.\u2019s 1961 phrase, \u201cthe Queen of American Folk Music.\u201d Trained classically at Los Angeles City College in opera and musical theater, Odetta turned to folk in 1950 on a San Francisco trip. Her 1956 debut album <em>Odetta Sings Ballads and Blues</em> was, by Bob Dylan\u2019s own account, the recording that converted him from rock-and-roll to folk: \u201cThe first thing that turned me on to folk singing was Odetta. Right then and there, I went out and traded my electric guitar and amplifier for an acoustical guitar.\u201d Joan Baez and Janis Joplin cited her as a primary early influence. She sang \u201cO Freedom\u201d at the 1963 March on Washington, marched at Selma in 1965, and remained a fixture of the civil-rights and antiwar movements through the late 1960s. Rosa Parks, asked late in life what songs she had listened to during the civil-rights years, answered: \u201cAll the songs Odetta sings.\u201d"
  },

  "peter-paul-and-mary": {
    label: "Peter, Paul and Mary",
    definition: "American folk trio formed in New York City in 1961 by manager Albert Grossman (who also managed Bob Dylan), consisting of Peter Yarrow (tenor), Noel Paul Stookey (baritone), and Mary Travers (contralto). The trio was assembled deliberately for commercial folk-revival success, and they delivered: their 1962 self-titled debut album held the Billboard Top Ten for ten months, and their second album <em>Moving</em> (1963) included \u201cPuff, the Magic Dragon.\u201d Their 1963 recording of Bob Dylan\u2019s \u201cBlowin\u2019 in the Wind\u201d reached number two on the Billboard pop chart and was the recording that broke Dylan\u2019s songwriting into the American mainstream; they also recorded Dylan\u2019s \u201cDon\u2019t Think Twice, It\u2019s All Right\u201d the same year, and Pete Seeger\u2019s \u201cIf I Had a Hammer\u201d and \u201cWhere Have All the Flowers Gone?\u201d earlier. They performed \u201cIf I Had a Hammer\u201d and \u201cBlowin\u2019 in the Wind\u201d at the August 28, 1963, March on Washington for Jobs and Freedom, the same event at which Joan Baez sang. The trio is often described as the commercial bridge between the older protest-folk tradition (Seeger, Guthrie) and the singer-songwriter generation that emerged in the mid 1960s. Travers died in 2009; Yarrow died in 2025."
  },

  "phil-ochs": {
    label: "Phil Ochs (1940-1976)",
    definition: "American songwriter who described himself as a \u201ctopical singer\u201d (he rejected the term \u201cprotest singer\u201d) and a \u201csinging journalist,\u201d writing songs drawn directly from newspaper stories. Born in El Paso, Texas, on December 19, 1940, to a Polish-Jewish doctor and a Scottish mother; raised in Far Rockaway, New York. Ochs arrived in Greenwich Village in 1962 and immediately became a fixture of the topical-song wing of the folk revival, contributing songs to <em>Broadside</em> magazine and recording for Elektra. His best-known songs include \u201cI Ain\u2019t Marching Anymore,\u201d \u201cDraft Dodger Rag,\u201d \u201cTalking Vietnam Blues,\u201d \u201cThere but for Fortune\u201d (a 1965 chart hit for Joan Baez), \u201cWhen I\u2019m Gone,\u201d \u201cCops of the World,\u201d and \u201cThe War Is Over.\u201d Where Bob Dylan was the most famous folk singer of the same generation, Ochs was the most explicitly political; he organized antiwar rallies through the late 1960s and continued to write topical songs after Dylan had moved away from protest material. The 1968 violence at the Democratic National Convention in Chicago, which he witnessed firsthand, deepened a depression he had struggled with since childhood. He died by suicide on April 9, 1976, at age 35."
  },

  "woody-guthrie": {
    label: "Woody Guthrie (1912-1967)",
    definition: "American folk songwriter, singer, and guitarist whose songs about Dust Bowl migration, labor organizing, fascism, and ordinary working life became the central inheritance the postwar folk revival reactivated. Born Woodrow Wilson Guthrie in Okemah, Oklahoma, on July 14, 1912, named after the newly elected Democratic president. After leaving Oklahoma during the Dust Bowl, Guthrie traveled west with Okie migrants, performed on Los Angeles radio with Maxine \u201cLefty Lou\u201d Crissman from 1937, and moved to New York in 1940, where he recorded his landmark album <em>Dust Bowl Ballads</em> for RCA Victor and wrote \u201cThis Land Is Your Land\u201d as a populist reply to Irving Berlin\u2019s \u201cGod Bless America.\u201d In New York he co-founded the Almanac Singers with Pete Seeger, Lee Hays, and Millard Lampell; recorded extensively for Moses Asch at Folkways through the 1940s; performed with the slogan \u201cThis Machine Kills Fascists\u201d painted on his guitar; and wrote roughly a thousand songs in his lifetime, including \u201cSo Long, It\u2019s Been Good to Know Yuh,\u201d \u201cPastures of Plenty,\u201d \u201cTom Joad,\u201d \u201cUnion Maid,\u201d and \u201cDeportee (Plane Wreck at Los Gatos).\u201d Guthrie was diagnosed with Huntington\u2019s disease (the same hereditary illness that had institutionalized his mother) in 1954 and spent his last thirteen years in hospitals in New York and New Jersey, where Bob Dylan, Joan Baez, Phil Ochs, and many other younger folk singers made pilgrimages to his bedside. He died on October 3, 1967, in Queens, New York. His son Arlo Guthrie went on to his own folk-music career."
  },

  "the-weavers": {
    label: "the Weavers",
    definition: "American folk quartet formed Thanksgiving 1948 in Pete Seeger\u2019s Greenwich Village basement by Seeger (banjo, tenor), Lee Hays (bass, b. 1914), Ronnie Gilbert (alto, b. 1926), and Fred Hellerman (guitar, baritone, b. 1927). Seeger and Hays had previously worked together in Woody Guthrie\u2019s wartime Almanac Singers; all four had been involved with People\u2019s Songs, the postwar leftist songwriters\u2019 organization. The group took its name from Gerhart Hauptmann\u2019s 1892 German play <em>Die Weber</em>, about a nineteenth-century weavers\u2019 strike (Hellerman was reading it at the time). After a late-1949 residency at the Village Vanguard, they signed to Decca Records and in 1950 released their version of Lead Belly\u2019s \u201cGoodnight, Irene\u201d backed with the Israeli folk song \u201cTzena, Tzena, Tzena\u201d; the single sold two million copies, topped the Billboard Best Sellers chart for thirteen weeks, and effectively launched the American postwar folk revival. Further Decca hits followed: \u201cOn Top of Old Smoky,\u201d \u201cSo Long, It\u2019s Been Good to Know Yuh\u201d (Guthrie), \u201cKisses Sweeter Than Wine\u201d (Hellerman and Hays), and \u201cWimoweh\u201d (an adaptation of Solomon Linda\u2019s Zulu \u201cMbube\u201d). Seeger and Hays wrote \u201cIf I Had a Hammer\u201d (originally \u201cThe Hammer Song\u201d) for the group in 1949. In 1950 Seeger was named in <em>Red Channels</em> as a Communist sympathizer; the group was blacklisted, Decca dropped them and deleted their catalogue in 1953, and they went on hiatus that year. A sold-out Christmas Eve 1955 reunion concert at Carnegie Hall, organized by Harold Leventhal, brought them back to public attention; Vanguard Records released the recording as <em>The Weavers at Carnegie Hall</em> in 1957. Seeger left the group in 1958 to pursue a solo career; the Weavers continued with replacements (Erik Darling, then Frank Hamilton, then Bernie Krause) until officially disbanding in December 1963. They received the Grammy Lifetime Achievement Award in 2006."
  },

  "carole-king": {
    label: "Carole King",
    definition: "American songwriter and singer-songwriter (born Carol Joan Klein in Brooklyn, February 9, 1942) who, with her then-husband Gerry Goffin, was one of the central songwriting teams of the Brill Building era at Aldon Music in the early 1960s. King and Goffin wrote a long string of pop hits including \u201cWill You Love Me Tomorrow\u201d (the Shirelles, 1960), \u201cThe Loco-Motion\u201d (Little Eva, 1962), \u201cUp on the Roof\u201d (the Drifters, 1962), \u201c(You Make Me Feel Like) A Natural Woman\u201d (Aretha Franklin, 1967), and many others. King\u2019s own 1971 album Tapestry was a commercial and critical pivot point in the early-1970s singer-songwriter wave, sold more than 25 million copies, won four Grammy Awards including Album of the Year, and is one of the central documents of the singer-songwriter tradition the Brill Building songwriters fed into."
  },

  "gerry-goffin": {
    label: "Gerry Goffin",
    definition: "American lyricist (born February 11, 1939, in Brooklyn; died June 19, 2014, in Los Angeles) who, with his then-wife Carole King, was one of the central songwriting teams of the Brill Building era at Aldon Music in the early 1960s. Goffin wrote the words; King wrote the music. Their long string of hits included \u201cWill You Love Me Tomorrow\u201d (the Shirelles, 1960), \u201cThe Loco-Motion\u201d (Little Eva, 1962), \u201cUp on the Roof\u201d (the Drifters, 1962), and \u201c(You Make Me Feel Like) A Natural Woman\u201d (Aretha Franklin, 1967). Goffin and King married in 1959 and divorced in 1968; their professional partnership ended around the same time, though Goffin continued writing with other collaborators throughout the 1970s and beyond."
  },

  "telharmonium": {
    label: "Telharmonium",
    definition: "An early electronic musical instrument invented by the American engineer Thaddeus Cahill, patented in 1897 and commercially demonstrated in New York City between 1906 and 1914. The Telharmonium produced sound by using massive rotating electromagnetic generators (the largest version weighed approximately 200 tons and filled a building) to generate audio-frequency electrical waveforms, which were then transmitted over telephone wires to subscribers in restaurants, hotels, and private homes. It is generally identified as the first significant electronic musical instrument and as a direct conceptual precursor to the synthesizer; the project failed commercially because the electrical signals interfered with telephone calls and because the equipment was prohibitively large and expensive, but the underlying idea (generating musical sound electronically and transmitting it remotely) anticipated both modern synthesis and broadcast audio."
  },

  "theremin-instrument": {
    label: "Theremin",
    definition: "An early electronic musical instrument patented in 1928 by the Russian engineer Leon Theremin (Lev Sergeyevich Termen). The instrument is played without physical contact: two metal antennas extend from a small electronic case, one controlling pitch and the other controlling volume, and the player\u2019s hand position relative to each antenna alters the capacitance of the surrounding electromagnetic field, producing a continuous, voice-like, gliding tone. The theremin became associated with the otherworldly soundtracks of mid-century science-fiction and horror films (Bernard Herrmann\u2019s score for The Day the Earth Stood Still, 1951) and was used by the Beach Boys on \u201cGood Vibrations\u201d (1966). Robert Moog began his electronic-music career in the early 1950s building theremin kits, and the theremin\u2019s voltage-controlled approach to pitch and volume directly informed the design of his later voltage-controlled synthesizer."
  },

  "wendy-carlos": {
    label: "Wendy Carlos",
    definition: "American electronic-music composer and Moog synthesizer pioneer (born November 14, 1939, in Pawtucket, Rhode Island), the central figure in the popular breakthrough of the synthesizer in the late 1960s. Carlos earned a bachelor\u2019s degree in physics and music from Brown University in 1962 and a master\u2019s in composition from Columbia University in 1965, where she studied at the Columbia-Princeton Electronic Music Center under Vladimir Ussachevsky and Otto Luening. Her debut album, Switched-On Bach (Columbia Masterworks, October 1968), produced with Rachel Elkind, made the Moog synthesizer a household instrument and won three 1969 Grammy Awards. Carlos went on to score Stanley Kubrick\u2019s A Clockwork Orange (1971) and The Shining (1980) and Disney\u2019s Tron (1982). She came out as a transgender woman in a 1979 Playboy interview; reissues of her recordings since that point have credited her as Wendy Carlos rather than the Walter Carlos under whom Switched-On Bach was originally released. Carlos has consistently asked that her music, not her transition, be the center of any serious account of her work."
  },

  "switched-on-bach": {
    label: "Switched-On Bach",
    definition: "Wendy Carlos\u2019s debut album, released by Columbia Masterworks in October 1968 and co-produced with Rachel Elkind. The album presents ten Bach compositions (selections from the Brandenburg Concertos, the Two-Part Inventions, and other works) realized on the Moog modular synthesizer, with each contrapuntal voice recorded as a separate monophonic line and then layered on Carlos\u2019s home-built eight-track tape machine over more than a thousand hours of studio work. Switched-On Bach was the first classical album to be certified platinum, topped the Billboard Classical chart for three years, and won three 1969 Grammy Awards. The album is generally credited as the demonstration that opened the door for the synthesizer to enter rock, pop, R&B, soul, disco, and every subsequent popular-music genre that took it up; Robert Moog himself credited it with making the synthesizer a viable popular-music instrument."
  },

  "robert-moog": {
    label: "Robert Moog",
    definition: "American engineer and electronic-music pioneer (born May 23, 1934, in Flushing, Queens; died August 21, 2005, in Asheville, North Carolina), the inventor of the Moog synthesizer. Moog\u2019s family was of German-Jewish ancestry; he earned bachelor\u2019s degrees in physics from Queens College and electrical engineering from Columbia University in 1957 and a PhD in engineering physics from Cornell in 1965. He founded R.A. Moog Co. in 1953 to sell theremin kits, and in 1963 moved his shop to a former furniture store on Main Street in Trumansburg, New York, where he built the first commercially viable voltage-controlled modular synthesizer. The instrument debuted at the Audio Engineering Society convention in October 1964. The 1970 Minimoog made the synthesizer portable and affordable for working musicians; by the mid-1970s Moog instruments were ubiquitous in rock, soul, funk, and progressive music. Moog founded a successor company, Big Briar (later Moog Music), in Asheville in 1978, where he continued designing instruments until his death from a brain tumor."
  },

  "don-buchla": {
    label: "Don Buchla",
    definition: "American instrument designer and engineer (born April 17, 1937, in South Gate, California; died September 14, 2016, in Berkeley, California), co-inventor of the voltage-controlled modular synthesizer with Robert Moog \u2014 the two worked independently on opposite coasts in the early 1960s and did not become aware of each other\u2019s work until both had built prototypes. Buchla studied physics, physiology, and music at UC Berkeley and graduated in 1959. He founded Buchla and Associates in Berkeley in 1962, and was commissioned by the composers Morton Subotnick and Ramon Sender of the San Francisco Tape Music Center to build an electronic instrument for live performance; the result, the Series 100 (Modular Electronic Music System), was assembled in 1965 with partial funding from a $500 Rockefeller Foundation grant and went into commercial production in 1966. CBS Musical Instruments briefly sold the line in 1968\u20131969 before dropping it. Buchla\u2019s design philosophy ran against the Moog template: he rejected the piano-style keyboard (which he called \u201cdictatorial\u201d) in favor of touch-sensitive plates and other unconventional controllers, and his modules carried distinctive names (Complex Waveform Generator, Source of Uncertainty, Multiple Arbitrary Function Generator) reflecting his interest in sound exploration rather than imitation of acoustic instruments. The Buchla 200 series followed in 1970; the Music Easel in 1972; and the modern 200e modular system from 2004 onward. The CSU East Bay music department owns an original, recently restored Series 100."
  },

  "columbia-princeton": {
    label: "Columbia-Princeton Electronic Music Center",
    definition: "The first major American institutional center for electronic music, founded in 1958 as a joint project of Columbia University and Princeton University with seed funding from the Rockefeller Foundation. The center was directed by the composers Vladimir Ussachevsky and Otto Luening of Columbia and Milton Babbitt and Roger Sessions of Princeton, and was housed at Columbia\u2019s Prentis Hall in Manhattan. Its central instrument in the early years was the RCA Mark II Sound Synthesizer, a large room-sized programmable synthesizer that used punch-paper tape control. Many of the most consequential figures in mid-century American electronic music studied or worked at the center, including Wendy Carlos (master\u2019s student under Ussachevsky in the early 1960s), Charles Wuorinen, Mario Davidovsky, Pril Smiley, Alice Shields, and Bulent Arel. The center was renamed the Computer Music Center in 1995 and remains active at Columbia."
  },

  "detroit-techno": {
    label: "Detroit techno",
    definition: "An electronic dance-music genre developed in the Detroit suburbs in the early to mid-1980s by a small group of young Black musicians: Juan Atkins, Derrick May, and Kevin Saunderson, often called the \u201cBelleville Three\u201d after the high school they attended together. Detroit techno fused the four-on-the-floor pulse and synthesizer textures of European electronic dance music (Kraftwerk especially) with American funk, soul, and Black popular music, and it ran in parallel to the Chicago house scene that emerged in the same period. The genre took its name from Atkins\u2019s 1984 \u201cTechno City\u201d and the 1988 compilation Techno!: The New Dance Sound of Detroit. Detroit techno was one of the central African American adoptions of synthesizer-based music that followed Wendy Carlos\u2019s 1968 Switched-On Bach demonstration; it became the foundational American influence on the global electronic dance music landscape from the late 1980s forward, particularly in European clubs that were better positioned to support the genre commercially than the American radio market was."
  },

  "cecil-sharp": {
    label: "Cecil Sharp",
    definition: "English folk-song and folk-dance collector (born November 22, 1859, in London; died June 23, 1924, in London), the central figure of the early-twentieth-century English folk-song revival and the most prolific ballad collector of his generation. Sharp collected nearly 5,000 folk songs and dance tunes over his career, mostly in the south and southwest of England (beginning in 1903) and in the southern Appalachian Mountains of the United States. With Olive Dame Campbell and his protégé Maud Karpeles, Sharp made three collecting expeditions to Appalachia in 1916, 1917, and 1918, documenting hundreds of ballads and tunes that had survived in the mountain communities, in some cases in older forms than what could still be heard in the British Isles. The published results, especially English Folk Songs from the Southern Appalachians (1917, expanded posthumous edition 1932), gave the early-twentieth-century American folk movement and the 1960s folk revival a shared canon to draw from. Sharp\u2019s narrative emphasized the Anglo-Saxon Protestant roots of the music and substantially under-documented the Black, Indigenous, and multiracial musical communities of the same Appalachian region; recent scholarship has pushed back hard against that framing while still recognizing the documentary value of his collection."
  },

  "francis-james-child": {
    label: "Francis James Child",
    definition: "American scholar and folklorist (born February 1, 1825, in Boston; died September 11, 1896, in Boston), Boylston Professor of Rhetoric and Oratory at Harvard from 1851 to 1876 and then America\u2019s first Professor of English from 1876 until his death. Child compiled The English and Scottish Popular Ballads, published in five volumes between 1882 and 1898 (the final volume edited posthumously by his student George Lyman Kittredge). The collection catalogued 305 distinct narrative ballads with their textual variants, drawing on manuscript and printed sources in some thirty languages and corresponding with scholars across Europe. Ballads in this collection are universally referenced by their Child catalogue number (\u201cChild 173\u201d for \u201cMary Hamilton,\u201d \u201cChild 12\u201d for \u201cLord Randall,\u201d and so on); the Child Ballad numbering remains the standard reference system in English-language folk-song scholarship more than a century later. Child was also the first president of the American Folklore Society, founded in 1888."
  },

  "banjo": {
    label: "Banjo",
    definition: "A stringed instrument with a thin membrane (originally animal skin, now usually plastic) stretched over a circular frame as a resonator, played with a flat or fingerpicked attack. The banjo is descended from the West African gourd-lute family (the Senegambian akonting, played by the Jola people, is the closest documented ancestor) and was developed in the Caribbean and colonial American South by enslaved Africans during the early decades of the Atlantic slave trade. It was played almost exclusively by Black musicians in North America through the early nineteenth century, when white blackface-minstrel performers (most influentially Joel Walker Sweeney of Virginia in the 1830s) adopted, modified, and commercialized it; Sweeney\u2019s five-string design became the basis of the modern instrument. By the second half of the nineteenth century the banjo had been taken up by white musicians in southern Appalachia, where it became a central voice in old-time, country, and bluegrass music, often without acknowledgment of the African and Black-American history it carried. The Black banjo tradition has been actively reclaimed in the twenty-first century by musicians and scholars including Rhiannon Giddens, Dom Flemons, the Black Banjo Reclamation Project, and the ethnomusicologist Daniel Laemouahuma Jatta."
  },

  "bluegrass": {
    label: "Bluegrass",
    definition: "An acoustic American string-band genre that crystallized in late 1945 when Bill Monroe added the banjo player Earl Scruggs to his Blue Grass Boys, joining Lester Flatt on guitar, Chubby Wise on fiddle, and Cedric Rainwater on bass. The genre took its name from the band; \u201cbluegrass\u201d as a label for the style was not in common use until the mid-1950s. The classic five-instrument lineup (mandolin, banjo, fiddle, guitar, upright bass) plays at fast tempos with a strongly syncopated drive, tight close-harmony singing in high \u201chigh-lonesome\u201d tenor, and Scruggs\u2019s three-finger banjo roll, which is unique to the genre. Bluegrass shares the Ulster Scots ballad tradition\u2019s repertoire and the Appalachian string-band sound it inherits, but it adds elements drawn from jazz and especially blues; Monroe consistently credited the African American Kentucky guitarist and fiddler Arnold Shultz (1886-1931) as a foundational influence on his musical thinking, and the genre\u2019s inheritance from Black American music is direct, even though twenty-first-century commercial bluegrass remains one of the whitest spaces in American popular music. Module 5 covers bluegrass through its Ulster Scots ancestor (Joan Baez\u2019s 1960 \u201cMary Hamilton\u201d on Track 2) rather than through commercial bluegrass directly; commercial country and bluegrass are abundant final-project territory."
  },

  "crooner": {
    label: "Crooner",
    definition: "A male popular singer, mostly working in the 1930s through the 1960s, who used a relaxed, intimate, conversational vocal style made possible by the carbon and condenser microphones built for radio broadcasting and electrical recording at the end of the 1920s. Before the microphone, popular singers had to project to the back of a theater (Al Jolson is the canonical pre-microphone example); the new technology let a singer sound as though leaning in close to the listener. Bing Crosby was the originator of the style and Frank Sinatra its most influential later figure; the line of major crooners also includes Russ Columbo, Perry Como, Vic Damone, Tony Bennett, Dean Martin, Nat King Cole, and Bobby Darin. The term was originally used pejoratively by critics who thought the style sentimental and unmasculine; Crosby and Sinatra both rejected the label even as they came to define the form."
  },

  "bing-crosby": {
    label: "Bing Crosby",
    definition: "American popular singer and actor (born Harry Lillis Crosby Jr., May 3, 1903, in Tacoma, Washington; died October 14, 1977, in Madrid). Crosby came up through the Paul Whiteman Orchestra and the Rhythm Boys vocal trio in the late 1920s and built a solo career in the early 1930s that made him the first major figure to record and broadcast in the new intimate style the microphone had just made possible. From the mid-1930s through the 1950s he was one of the most popular entertainers in the United States across records, radio, and film; \u201cWhite Christmas\u201d (1942) is one of the best-selling singles in recorded music history. Crosby was Irish American, not Italian American, but the relaxed, conversational, behind-the-microphone vocal style he developed became the template every later American crooner worked from, and he was the direct model for the Italian American crooners (Russ Columbo, Frank Sinatra, Perry Como, Dean Martin) who adopted the form and brought their own bel canto and Neapolitan-song inheritances to it."
  },

  "russ-columbo": {
    label: "Russ Columbo",
    definition: "American baritone, songwriter, and actor (born Ruggiero Eugenio di Rodolpho Colombo, January 14, 1908, in Camden, New Jersey; died September 2, 1934, in Los Angeles), the first major Italian American crooner. The twelfth child of Italian immigrant parents, Columbo was a violin prodigy who joined Gus Arnheim\u2019s orchestra as both a violinist and a vocalist in 1929 alongside Bing Crosby. He began a solo recording career on RCA Victor in 1931 with a late-night NBC radio slot, and through 1932 he was promoted as Crosby\u2019s direct rival in the press-driven \u201cbattle of the baritones.\u201d His signature recordings include \u201cYou Call It Madness (But I Call It Love)\u201d and \u201cPrisoner of Love,\u201d both of which he co-wrote and which entered the standards repertoire. Columbo died at 26 in an accidental shooting at a friend\u2019s home, weeks before what would have been his lead-role film debut. He is the connecting figure between the Crosby template and the later Italian American crooner line that ran through Sinatra, Como, Martin, Bennett, and Darin."
  },

  "frank-sinatra": {
    label: "Frank Sinatra",
    definition: "American popular singer and actor (born Francis Albert Sinatra, December 12, 1915, in Hoboken, New Jersey; died May 14, 1998, in Los Angeles), the central figure of the mid-twentieth-century Italian American crooner tradition and one of the most influential popular singers in American history. The son of a Sicilian immigrant father and a Genoese-immigrant-descended mother, Sinatra came up through the Hoboken Four amateur circuit, the Harry James band (1939), and the Tommy Dorsey band (1940-1942), then went solo in 1943. His Capitol Records run with arranger Nelson Riddle from 1953 through 1961 (In the Wee Small Hours, Songs for Swingin\u2019 Lovers!, Only the Lonely, and others) is generally identified as the period in which the integrated concept album was fully realized as an art form, and the Sinatra-Riddle ballad approach has shaped popular vocal interpretation ever since. Sinatra was also a substantial civil-rights advocate for a major popular entertainer of his generation: the 1945 short film The House I Live In, his refusal to play segregated venues, his 1958 Ebony essay \u201cThe Way I Look at Race\u201d (which named Billie Holiday as \u201cthe greatest single musical influence on me\u201d), and his decades of public friendship with Sammy Davis Jr. were all part of a sustained, public record."
  },

  "tony-bennett": {
    label: "Tony Bennett",
    definition: "American popular singer (born Anthony Dominick Benedetto, August 3, 1926, in Astoria, Queens; died July 21, 2023, in New York City), the major Italian American crooner of the generation immediately after Sinatra. Bennett was the son of a Calabrian immigrant grocer; he served in the US Army in Europe at the end of the Second World War and built his recording career on Columbia Records from 1950 forward, working with arranger Ralph Sharon. \u201cI Left My Heart in San Francisco\u201d (1962) became his signature recording. Bennett, like Sinatra, was directly formed by Black jazz singing (he was vocal across his career about Billie Holiday\u2019s influence on his phrasing) and was an active civil-rights advocate: at Harry Belafonte\u2019s direct invitation he joined the third 1965 Selma to Montgomery march, performing for the marchers from a stage built of coffin crates and plywood the night before they reached the Alabama State Capitol. Bennett continued performing into his nineties; his 2014 collaborative album with Lady Gaga, Cheek to Cheek, made him at 88 the oldest performer to top the Billboard 200."
  },

  "bel-canto": {
    label: "Bel canto",
    definition: "An Italian operatic vocal tradition (the term means \u201cbeautiful singing\u201d) that emphasizes long, sustained, evenly produced vocal lines, smooth control across the singer\u2019s full range, agile and ornamented passagework, and a tone that stays warm and floating rather than declamatory. The style was codified in the seventeenth and eighteenth centuries and reached its operatic peak in the early-nineteenth-century works of Bellini, Donizetti, and the early Rossini. The bel canto sensibility was carried into the United States by Italian immigrants in the late nineteenth and early twentieth centuries and shaped the vocal instincts of the Italian American popular singers (Russ Columbo, Frank Sinatra, Tony Bennett, Mario Lanza) who would later define the American crooner tradition; the long, lyrical, evenly produced ballad line that Sinatra in particular brought to the popular Songbook is recognizably bel canto in its underlying technique."
  },

  "neapolitan-song": {
    label: "Canzone napoletana",
    definition: "A Neapolitan-Italian popular-song tradition that developed across the nineteenth and early twentieth centuries in and around the city of Naples, sung in Neapolitan (a regional language distinct from standard Italian) and centered on themes of love, longing, the sea, exile, and homesickness. The standard repertoire includes \u201cO Sole Mio\u201d (1898), \u201cTorna a Surriento\u201d (1902), \u201cFuniculì, Funiculà\u201d (1880), \u201cSanta Lucia\u201d (mid-nineteenth century), and \u201c\u2019O Surdato \u2018Nnammurato\u201d (1915), among many others. Italian emigrants carried these songs across the Atlantic during the great migration period (1880-1924) and they became foundational repertoire in Italian American homes, social clubs, and weddings. The Neapolitan-song lyric sensibility (long, melodically arched, emotionally direct, romantically open in a way Anglo-American popular song of the same period was not) was a central inheritance the Italian American crooner generation brought to mid-century American popular singing."
  },

  "house-i-live-in": {
    label: "The House I Live In",
    definition: "An eleven-minute short film released by RKO Pictures on November 9, 1945, starring Frank Sinatra and directed by Mervyn LeRoy. Sinatra plays himself stepping outside a recording session to find a group of boys harassing a Jewish boy; he stops them, tells them anti-Semitism is unacceptable, and sings the title song (lyrics by Abel Meeropol, the same writer who wrote \u201cStrange Fruit\u201d). The film won an Academy Honorary Award and a special Golden Globe in 1946. It was made during the late stages of the Second World War as part of a broader American liberal-Jewish anti-prejudice film effort and stands as the most explicit moment in Sinatra\u2019s early civil-rights public record; he continued to refuse segregated venues and to insist on integrated bills through the rest of the 1940s and 1950s, and the film was screened in American schools well into the 1950s as part of postwar tolerance education."
  },

  "selma-march": {
    label: "Selma to Montgomery marches",
    definition: "Three civil-rights marches in March 1965 from Selma, Alabama, to the state capital of Montgomery, organized by the Southern Christian Leadership Conference (Martin Luther King Jr.) and the Student Nonviolent Coordinating Committee (John Lewis among others) to demand federal protection for Black voting rights in the South. The first march, on Sunday, March 7, was attacked by Alabama state troopers and county sheriff\u2019s deputies on the Edmund Pettus Bridge in what became known as Bloody Sunday; the televised footage produced national outrage. The second march on March 9 turned around at the bridge by King\u2019s decision. The third march, March 21 to 25, completed the route under federal protection ordered by President Johnson, with the marchers growing to about 25,000 by the time they reached the Alabama State Capitol. The marches were directly responsible for the passage of the Voting Rights Act of 1965 (signed August 6). Many entertainers, recruited largely by Harry Belafonte at King\u2019s request, performed for the marchers along the route, including Tony Bennett, Joan Baez, Mahalia Jackson, Nina Simone, Sammy Davis Jr., Peter Yarrow, Pete Seeger, and Belafonte himself."
  },

  "harry-belafonte": {
    label: "Harry Belafonte",
    definition: "American singer, actor, and civil-rights activist (born Harold George Bellanfanti Jr., March 1, 1927, in Harlem; died April 25, 2023, in New York City), the son of a Jamaican mother and a Martinican father. Belafonte\u2019s 1956 Calypso (RCA Victor) was the first solo album by a single artist to sell over a million copies in the United States; \u201cDay-O (The Banana Boat Song)\u201d became one of the most recognizable American popular recordings of the 1950s. Belafonte was also a central organizing figure in the civil-rights movement: a close personal friend and confidant of Martin Luther King Jr., he funded movement work, bailed organizers out of jail, and recruited fellow entertainers (Tony Bennett, Sammy Davis Jr., Joan Baez, Sidney Poitier, Marlon Brando, Paul Newman) to participate in marches and fundraisers across the 1960s. He continued movement work for the rest of his life, supporting anti-apartheid organizing in the 1980s, the 1985 USA for Africa \u201cWe Are the World\u201d project, and Black Lives Matter from its early years forward."
  },

  "norteno": {
    label: "Norteño",
    definition: "A Mexican popular music genre rooted in the borderland regions of northern Mexico and the southwestern United States, built on the accordion-and-bajo-sexto ensemble (the same two instruments at the heart of Tejano, with which it shares a nineteenth-century origin in the meeting of Mexican folk song with German, Czech, and Polish polkas and waltzes). Norte\u00f1o is distinct from Tejano in repertoire (more corridos, fewer Tejano-pop crossover ballads), in audience (more Mexican-side and Mexican-immigrant, less Texan Mexican-American middle-class), and in sound (rougher, more rhythmically driving). Los Tigres del Norte, founded in San Jos\u00e9, California in 1968 by brothers from Sinaloa, are the canonical reference for norte\u00f1o as a US-based Mexican-immigrant music; their politically explicit corridos about migration, border-crossing labor, drug-war violence, and Mexican-American working-class life have made them one of the most commercially and politically substantial popular acts in Spanish-language US music for over fifty years. Other major figures: Los Tucanes de Tijuana, Intocable, Ram\u00f3n Ayala, and the contemporary Calibre 50."
  },

  "banda-sinaloense": {
    label: "Banda sinaloense",
    definition: "A Mexican brass-band tradition originating in the state of Sinaloa in the late nineteenth century, characterized by an ensemble of clarinets, trumpets, trombones, tubas (the sousaphone in particular), and percussion (snare drum, bass drum, t\u00edmbales) playing a repertoire that includes traditional rancheras, corridos, polkas, waltzes, cumbias, and adapted pop songs. Banda El Recodo de Cruz Lizarraga, founded in 1938 in El Recodo, Sinaloa, is the genre's longest-running and most influential ensemble. The genre had a major US commercial moment in the 1990s with the rise of technobanda (a banda-with-electronic-keyboards offshoot, Banda Machos and others) and has been continuously popular among Mexican-American audiences in Los Angeles, Chicago, and the Pacific Northwest from the 1990s forward; Banda MS de Sergio Liz\u00e1rraga is the contemporary commercial leader. Helena Simonett's Banda: Mexican Musical Life Across Borders (Wesleyan, 2001) is the standard scholarly account."
  },

  "corridos-tumbados": {
    label: "Corridos tumbados",
    definition: "A subgenre of regional Mexican music that emerged at the US-Mexico border in the late 2010s, fusing the traditional corrido narrative ballad form with trap and hip-hop production, vocal delivery, and street-life lyrical themes. The Sonoran singer Natanael Cano (born 1991 in Hermosillo) is generally credited as the genre's founder; his 2019 album Corridos Tumbados, released on the Los Angeles independent label Rancho Humilde (founded ca. 2011 by Jimmy Humilde), gave the subgenre its name and its first commercial breakthrough. Cano's 2019 collaboration with Bad Bunny on the remix of \u201cSoy el Diablo\u201d brought the genre to a wider Latin audience. The Jalisco singer Peso Pluma (Hassan Emilio Kabande Laija, born 1999) became the genre's largest commercial star in 2023 with hits including \u201cAMG,\u201d \u201cLa Bebe,\u201d and \u201cEll a Baila Sola,\u201d and corridos tumbados became the most commercially successful Latin music in the United States from 2022 forward, with multiple corridos tumbados songs charting on the Billboard Hot 100. Other major figures: Junior H (Antonio Herrera P\u00e9rez, from Guanajuato), Fuerza Regida (a Sinaloa-rooted California-based group), Eslab\u00f3n Armado, and Tito Double P. The genre is controversial because many of its lyrics fall within the long Mexican narcocorrido tradition of songs that name and sometimes glorify drug-cartel figures; the United States revoked Peso Pluma's visa in 2025 as part of a broader policy targeting artists associated with cartel-linked themes, and several Mexican states have banned live performances of narcocorrido material."
  },

  "arthur-crudup": {
    label: "Arthur \"Big Boy\" Crudup",
    definition: "American blues singer, guitarist, and songwriter (1905\u20131974), born in Forest, Mississippi, who took up guitar in his early thirties and was discovered playing in Chicago in 1941 by the RCA Bluebird talent scout Lester Melrose. Crudup recorded around eighty songs for the RCA Bluebird and Victor labels between 1941 and 1956. He wrote and recorded \u201cThat\u2019s All Right\u201d in Chicago on September 6, 1946; the song was released by RCA Victor in April 1947. Eight years later, on July 5, 1954, an unknown nineteen-year-old named Elvis Presley recorded a faster version of the song at Sun Studios in Memphis as the A-side of his debut single, and the cover became one of the founding records of commercial rock and roll. Elvis subsequently covered two more Crudup songs, \u201cMy Baby Left Me\u201d and \u201cSo Glad You\u2019re Mine\u201d, both in 1956. The publishing rights to all of Crudup\u2019s songs had been retained by Melrose under the original 1941 contract, and Crudup received almost no royalties on the Elvis covers despite legal battles into the 1970s. He spent his last decades supporting his family as a contract farm laborer on Virginia\u2019s Eastern Shore, picking cucumbers, tomatoes, and sweet potatoes. He was rediscovered briefly during the 1960s blues revival, played some festivals and college dates, and died in Virginia at age 68 in 1974. Crudup\u2019s career is one of the clearest examples of the racial economics of the mid-twentieth-century American recording industry."
  },

  "elvis-presley": {
    label: "Elvis Presley",
    definition: "American popular singer and the most commercially consequential figure of early rock and roll (born Elvis Aaron Presley, January 8, 1935, in Tupelo, Mississippi; died August 16, 1977, in Memphis). Presley grew up in poverty in Tupelo and Memphis, formed musically through Black Southern gospel, R&B, and blues alongside white country and Pentecostal church music. His 1954 Sun Records breakthrough came under producer Sam Phillips\u2019s explicit project of finding a white singer who could sing Black material for white audiences (Phillips\u2019s assistant Marion Keisker recalled Phillips saying he was looking for \u201ca white man who has the Negro sound and the Negro feel\u201d); the Sun debut single, recorded July 5, 1954 and released July 19, 1954, paired Arthur Crudup\u2019s 1946 Chicago blues \u201cThat\u2019s All Right\u201d as the A-side with Bill Monroe\u2019s 1946 bluegrass waltz \u201cBlue Moon of Kentucky\u201d as the B-side. Presley moved to RCA Victor in late 1955 and over the next two decades became one of the best-selling musicians in recorded-music history. His role in mid-twentieth-century American popular music has been argued over since at least the 1970s: he is, on one hand, a poor white Southerner whose musical voice was inseparable from Black Memphis and Mississippi sources and who publicly credited his Black influences (including Crudup), and on the other, the canonical case of the racial economics of mid-twentieth-century American popular music, where Black originators (Big Mama Thornton, who recorded Leiber and Stoller\u2019s \u201cHound Dog\u201d in 1952 four years before Presley made it his biggest hit; Crudup, who never received royalties on Presley\u2019s cover) died in poverty while the white singer who covered their material became the wealthiest popular musician of the era. Greil Marcus\u2019s Mystery Train (1975, revised 2008), Peter Guralnick\u2019s two-volume biography Last Train to Memphis (1994) and Careless Love (1999), and Michael T. Bertrand\u2019s Race, Rock, and Elvis (2000) are the standard scholarly accounts."
  },

  "pat-boone": {
    label: "Pat Boone",
    definition: "American singer (born Charles Eugene Patrick Boone, June 1, 1934, in Jacksonville, Florida) whose 1955-1957 cover versions of Black R&B and rock-and-roll hits are the canonical example of the white-cover-version industrial practice. Boone recorded for Dot Records and was promoted as a clean-cut white alternative to the Black originators of the same material; his cover of Little Richard\u2019s \u201cTutti Frutti\u201d (1956) reached number twelve on the Billboard Hot 100 while Richard\u2019s original peaked at number seventeen, and his cover of Richard\u2019s \u201cLong Tall Sally\u201d (1956) reached number eight while Richard\u2019s reached number six. Boone\u2019s covers of Fats Domino, the El Dorados, the Charms, and others followed the same pattern. The practice was so routine that Little Richard later said in interviews that he wrote and recorded his songs deliberately faster and rougher to make them harder for Boone to cover, a strategy that worked on \u201cGood Golly, Miss Molly\u201d but not on the earlier hits."
  },

  "little-richard": {
    label: "Little Richard",
    definition: "American singer and pianist (born Richard Wayne Penniman, December 5, 1932, in Macon, Georgia; died May 9, 2020), one of the founding figures of rock and roll. His 1955-1958 Specialty Records sides (\u201cTutti Frutti,\u201d \u201cLong Tall Sally,\u201d \u201cRip It Up,\u201d \u201cReady Teddy,\u201d \u201cLucille,\u201d \u201cJenny, Jenny,\u201d \u201cGood Golly, Miss Molly\u201d) reorganized the rhythmic, vocal, and performance vocabularies of American popular music: the pounding piano triplets, the screamed falsetto, the gospel-derived ecstatic delivery, and the unapologetically queer Black Southern stage presence all became the template that white rock-and-roll performers (Presley, Jerry Lee Lewis, the Beatles, many more) drew from. Pat Boone\u2019s covers of his hits out-charted the originals on the white pop chart, the canonical case of the 1950s cover-version pattern. Little Richard was inducted into the Rock and Roll Hall of Fame in 1986 and remained a vocal critic for the rest of his life of the racial and sexual economics of the music industry that profited from his innovations."
  },

  "mtv": {
    label: "MTV",
    definition: "Music Television, an American cable channel that launched on August 1, 1981, with the format of broadcasting music videos around the clock interspersed with VJ commentary. MTV transformed the popular-music industry by making the music video the primary promotional form for new singles, but its early programming was nearly entirely white: Black artists were excluded from the rotation on the format-based reasoning that MTV was a \u201crock\u201d channel and Black music was not rock, a reasoning that did not survive scrutiny then or later. The exclusion broke under sustained pressure in 1983, when CBS Records reportedly threatened to pull all of its white artists\u2019 videos from MTV unless the channel agreed to play Michael Jackson\u2019s \u201cBillie Jean\u201d (the threat\u2019s exact contours are disputed by participants, but the outcome was the same: MTV added \u201cBillie Jean\u201d to heavy rotation in March 1983 and the broader integration of the channel followed). The MTV exclusion is one of the standard examples used to argue that the political-economy patterns of racial segregation in American popular music did not end with the formal end of segregated charts in the late 1940s."
  },

  "eminem": {
    label: "Eminem",
    definition: "American rapper (born Marshall Bruce Mathers III, October 17, 1972, in St. Joseph, Missouri; raised in Detroit) whose late-1990s and 2000s commercial success is one of the canonical cases of the racial economics of hip hop. Eminem trained in the Detroit hip hop scene under the mentorship of Black rappers, was signed by Dr. Dre to Aftermath Records in 1997, and from his 1999 album The Slim Shady LP forward sold records at a scale his Black peers did not match. Critical writing on Eminem since the early 2000s (Adam Bradley, Imani Perry, the broader hip hop studies literature) has consistently named the structural advantage his whiteness gave him in entering the mainstream pop and rock markets that hip hop\u2019s Black originators had been excluded from despite producing what most critics regard as comparable or stronger work. Eminem has himself addressed this directly in his lyrics (\u201cLet\u2019s do the math: if I was Black, I would have sold half\u201d on \u201cWhite America,\u201d 2002), naming the structural pattern even as his career has continued to benefit from it."
  },

  "david-mancuso": {
    label: "David Mancuso",
    definition: "American DJ and dance-music figure (born October 20, 1944, in Utica, New York; died November 14, 2016, in New York City), the proprietor of the Loft, the invitation-only membership-based dance parties he hosted in his Manhattan home starting with the legendary \u201cLove Saves the Day\u201d Valentine\u2019s Day party on February 14, 1970, at 647 Broadway. The Loft is widely cited as the foundational space of the modern dance-club tradition: mostly gay, racially mixed, deliberately built as a private and protected space against the homophobia and racism of the surrounding city, with a sound system and a curatorial DJ practice that the New York and Chicago club scenes of the 1970s and 1980s would both model themselves on. Mancuso did not mix records in the conventional DJ sense; he played them as complete tracks chosen and sequenced for the emotional arc of the night. The Loft moved twice (to 99 Prince Street in 1975 and then to 8 Beach Street in 1984) and continued running invitation parties until shortly before Mancuso\u2019s death."
  },

  "larry-levan": {
    label: "Larry Levan",
    definition: "American DJ (born Lawrence Philpot, July 20, 1954, in Brooklyn; died November 8, 1992, in New York City), the resident DJ at the Paradise Garage from its 1977 opening to its 1987 closing and one of the most influential figures in the history of dance music. Levan trained alongside Frankie Knuckles at the Continental Baths in the early 1970s under the guidance of Nicky Siano, and developed at Paradise Garage a curatorial style that combined Philadelphia soul, gospel, jazz, dub reggae, and early electronic music into the continuous emotional arc that came to be called the \u201cGarage sound\u201d (an early term for what is now called New York house or garage house). Levan\u2019s remixes and productions (for Inner Life, Gwen Guthrie, Taana Gardner, the Peech Boys, and many others) shaped the post-disco dance-music vocabulary and the modern remix as a creative form. Levan died of complications related to addiction and untreated AIDS-related illness in 1992 at 38. The block of King Street where the Paradise Garage stood was renamed Larry Levan Way in 2014."
  },

  "frankie-knuckles": {
    label: "Frankie Knuckles",
    definition: "American DJ and producer (born Francis Warren Nicholls Jr., January 18, 1955, in the Bronx; died March 31, 2014, in Chicago), known as the \u201cGodfather of House Music.\u201d Knuckles trained alongside Larry Levan at the Continental Baths in New York in the early 1970s, and in 1977 took the residency at the Warehouse, a primarily Black-and-Latino-and-gay dance club at 206 South Jefferson Street in Chicago, that Levan had declined in order to open the Paradise Garage in New York. Over the next five years Knuckles\u2019s sets at the Warehouse (mixing disco, soul, gospel, and early electronic music, with custom edits and drum-machine layered over the records) developed the sound and the curatorial practice that would be named after the club: by 1980 to 1981 Chicago record stores were stocking sections labeled \u201cWarehouse music,\u201d shortened to \u201chouse,\u201d and the name stuck to the genre Knuckles\u2019s scene was inventing. He left the Warehouse in 1982, opened his own club the Power Plant, and continued producing house records into the 2010s. The block of Jefferson Street where the Warehouse stood was renamed Frankie Knuckles Way in 2004; the building was designated a Chicago landmark in 2023. Knuckles survived the AIDS years and died of complications related to type II diabetes in 2014."
  },

  "paradise-garage": {
    label: "Paradise Garage",
    definition: "New York City discotheque at 84 King Street in SoHo, opened by Michael Brody in 1977 and closed in 1987, with Larry Levan as resident DJ for its full decade-long run. Paradise Garage was a membership-based dance club whose primarily Black-and-Latino-and-gay clientele built the template for the modern dance-club scene: the Richard Long sound system, Levan\u2019s sets-as-Saturday-night-mass, and the dance-floor-as-primary-space (rather than the bar) all influenced what dance clubs became after it. The club\u2019s nickname inside the scene was \u201cGay-rage.\u201d The genre name \u201cgarage\u201d (or \u201cgarage house,\u201d to distinguish it from the unrelated UK garage of the late 1990s) was applied retroactively to records that had been played there or that sounded like records that had been played there. The 48-hour closing party in September 1987 ran continuously. The original metal Paradise Garage sign is in the collection of Fales Library and Special Collections at NYU and was displayed in the 2019 Stonewall 50 exhibition at the New-York Historical Society."
  },

  "sylvester": {
    label: "Sylvester",
    definition: "American singer (born Sylvester James Jr., September 6, 1947, in Los Angeles; died December 16, 1988, in San Francisco), one of the canonical figures of disco-era queer Black popular music. Sylvester sang gospel in the Pentecostal church as a child, performed in the San Francisco drag and queer scenes of the early 1970s (with the Cockettes among other groups), and recorded his solo breakthrough album <em>Step II</em> on Fantasy Records in 1978; the album contained the canonical disco singles \u201cYou Make Me Feel (Mighty Real)\u201d and \u201cDance (Disco Heat),\u201d both produced by Patrick Cowley and featuring backup vocals from the Two Tons O\u2019 Fun (Martha Wash and Izora Armstead, later the Weather Girls). Sylvester performed in falsetto, wore feminine clothing on stage as a matter of course, and was unapologetically out across his career at a moment when no other Black male popular musician at his commercial scale was. He died of AIDS-related illness on December 16, 1988, at 41. Joshua Gamson\u2019s <em>The Fabulous Sylvester</em> (2005) is the standard biography."
  },

  "kendrick-lamar": {
    label: "Kendrick Lamar",
    definition: "American rapper, songwriter, and producer (born Kendrick Lamar Duckworth, June 17, 1987, in Compton, California), widely regarded as the most critically important hip hop artist of the 2010s and 2020s. Lamar grew up in Compton in a family that had moved from Chicago to escape gang violence; he signed to Top Dawg Entertainment in 2005 under the name K.Dot, secured a joint contract with Dr. Dre\u2019s Aftermath Entertainment and Interscope in 2012 after the release of <em>Section.80</em> (2011), and broke through with <em>good kid, m.A.A.d city</em> (2012), a concept album about growing up in Compton. <em>To Pimp a Butterfly</em> (2015) wove jazz, funk, soul, and spoken word into a sustained meditation on Black American experience and was widely regarded as the most consequential conscious-hip-hop work of the BLM era; its track \u201cAlright\u201d was adopted as a protest anthem at Black Lives Matter demonstrations. <em>DAMN.</em> (2017) won the 2018 Pulitzer Prize for Music, making Lamar the first hip hop artist and the first musician outside the classical and jazz categories to receive the award. Subsequent albums <em>Mr. Morale &amp; the Big Steppers</em> (2022) and <em>GNX</em> (2024) extended his arc. Lamar headlined the 2025 Super Bowl halftime show, the most-watched in NFL history. He has won twenty-seven Grammy Awards through the 2026 ceremony, the most of any rapper. Marcus J. Moore\u2019s <em>The Butterfly Effect</em> (2020) is the standard accessible study."
  },

  "tupac-shakur": {
    label: "Tupac Shakur",
    definition: "American rapper, actor, and poet (born Lesane Parish Crooks, June 16, 1971, in East Harlem, New York; died September 13, 1996, in Las Vegas), one of the most commercially and culturally consequential figures in hip hop. Shakur was the son of Black Panther Party members Afeni Shakur and Billy Garland; his godmother was Assata Shakur. He moved with his family to Baltimore in the mid-1980s, attended the Baltimore School for the Arts, and relocated to the San Francisco Bay Area in 1988. His solo albums (<em>2Pacalypse Now</em> 1991, <em>Strictly 4 My N.I.G.G.A.Z.</em> 1993, <em>Me Against the World</em> 1995, <em>All Eyez on Me</em> 1996) brought social-realist storytelling, autobiographical confession, and overt political commentary into the commercial mainstream of hip hop. Shakur was shot and killed in a still-unsolved drive-by shooting in Las Vegas on September 7, 1996, dying six days later at 25. His posthumous albums (most notably <em>The Don Killuminati: The 7 Day Theory</em>, 1996) extended his commercial reach. Shakur\u2019s influence on subsequent hip hop has been pervasive; Kendrick Lamar has named him as his single largest influence."
  },

  "lauryn-hill": {
    label: "Lauryn Hill",
    definition: "American singer, rapper, and songwriter (born May 26, 1975, in East Orange, New Jersey), member of the Fugees alongside Wyclef Jean and Pras Michel, and one of the most consequential figures of the 1990s neo-soul movement. The Fugees\u2019 <em>The Score</em> (1996), built around Hill\u2019s vocals and rap on covers of Roberta Flack\u2019s \u201cKilling Me Softly with His Song\u201d and Bob Marley\u2019s \u201cNo Woman, No Cry,\u201d sold over 22 million copies worldwide. Hill\u2019s solo debut <em>The Miseducation of Lauryn Hill</em> (1998), recorded substantially at Bob Marley\u2019s Tuff Gong studio in Kingston, won five Grammy Awards including Album of the Year, the first hip hop album to win that category. The album fused hip hop, R&amp;B, reggae, and soul with substantively political and personal lyrics, and remains one of the most commercially successful and critically celebrated albums of its era. Hill has released no studio follow-up to <em>Miseducation</em>; her subsequent work (the live <em>MTV Unplugged No. 2.0</em>, 2002; sporadic touring) has been the subject of substantial public commentary about her career arc."
  },

  "stevie-wonder": {
    label: "Stevie Wonder",
    definition: "American singer, songwriter, multi-instrumentalist, and producer (born Stevland Hardaway Judkins, May 13, 1950, in Saginaw, Michigan), one of the most commercially and critically consequential figures in twentieth-century American popular music. Blind from shortly after birth, Wonder signed to Motown at age 11 as \u201cLittle Stevie Wonder.\u201d His early Motown sides (\u201cFingertips Pt. 2,\u201d 1963; \u201cUptight,\u201d 1965; \u201cFor Once in My Life,\u201d 1968) made him a mainstream pop star as a teenager. The early-1970s run of albums he produced himself after renegotiating his Motown contract in 1971 (<em>Music of My Mind</em> 1972; <em>Talking Book</em> 1972; <em>Innervisions</em> 1973; <em>Fulfillingness\u2019 First Finale</em> 1974; <em>Songs in the Key of Life</em> 1976) is regarded by most critics as one of the great sustained creative arcs in American popular music. <em>Innervisions</em>, <em>Fulfillingness\u2019 First Finale</em>, and <em>Songs in the Key of Life</em> won three consecutive Grammy Awards for Album of the Year. Wonder has been politically active across his career, including his successful lobbying for the federal Martin Luther King Jr. Day holiday (established 1983, first observed 1986)."
  },

  "marvin-gaye": {
    label: "Marvin Gaye",
    definition: "American singer, songwriter, and producer (born Marvin Pentz Gay Jr., April 2, 1939, in Washington, DC; died April 1, 1984, in Los Angeles), one of the central figures of Motown soul and a foundational voice of socially conscious R&amp;B. Gaye signed to Motown in 1961 and recorded a sequence of hit duets and singles through the 1960s (\u201cAin\u2019t No Mountain High Enough\u201d with Tammi Terrell, 1967; \u201cI Heard It Through the Grapevine,\u201d 1968). His 1971 album <em>What\u2019s Going On</em>, written partly in response to his brother Frankie\u2019s account of returning from Vietnam and to the broader political climate of the early 1970s, broke with Motown\u2019s pop-single format to produce an album-length meditation on war, poverty, environmental destruction, and police violence; the title track, \u201cMercy Mercy Me (The Ecology),\u201d and \u201cInner City Blues (Make Me Wanna Holler)\u201d became canonical. <em>Let\u2019s Get It On</em> (1973), <em>I Want You</em> (1976), and <em>Here, My Dear</em> (1978) followed. Gaye was shot and killed by his father on April 1, 1984, the day before his 45th birthday."
  },

  "prince": {
    label: "Prince",
    definition: "American singer, songwriter, multi-instrumentalist, and producer (born Prince Rogers Nelson, June 7, 1958, in Minneapolis; died April 21, 2016, in Chanhassen, Minnesota), one of the most prolific and stylistically wide-ranging American popular musicians of the late twentieth century. Prince signed to Warner Bros. in 1977 and released his debut <em>For You</em> in 1978; his run of albums from <em>Dirty Mind</em> (1980) through <em>Sign o\u2019 the Times</em> (1987) is regarded by most critics as one of the great sustained creative arcs of the era, with <em>Purple Rain</em> (1984, the soundtrack to his feature film) selling more than twenty-five million copies and \u201cWhen Doves Cry\u201d hitting number one on the Billboard Hot 100. Prince played most of the instruments on his early records himself and was an active producer for the artists on his Paisley Park label (Sheila E., Sheena Easton, the Time, Vanity 6). His public dispute with Warner Bros. over creative control led to his changing his stage name to an unpronounceable symbol from 1993 to 2000 and to his appearing with \u201cSLAVE\u201d written on his face in public appearances during the dispute. Prince died of an accidental fentanyl overdose in 2016 at 57."
  },

  "michael-jackson": {
    label: "Michael Jackson",
    definition: "American singer, songwriter, and dancer (born August 29, 1958, in Gary, Indiana; died June 25, 2009, in Los Angeles), the best-selling popular musician of the late twentieth century and one of the central figures in the history of American popular music. Jackson began performing as a child with his brothers in the Jackson 5, who signed to Motown in 1968 and produced a series of hits between 1969 and 1975 (\u201cI Want You Back,\u201d \u201cABC,\u201d \u201cI\u2019ll Be There,\u201d \u201cDancing Machine\u201d). His solo career on Epic Records after the family\u2019s move from Motown produced <em>Off the Wall</em> (1979), <em>Thriller</em> (1982), and <em>Bad</em> (1987), all produced by Quincy Jones; <em>Thriller</em> remains the best-selling album in recorded-music history, with estimated sales of seventy million copies and counting. Jackson\u2019s \u201cBillie Jean\u201d became the recording that broke MTV\u2019s informal early-1980s exclusion of Black artists in March 1983. His subsequent albums (<em>Dangerous</em> 1991, <em>HIStory</em> 1995, <em>Invincible</em> 2001) sold at scale while his public life was marked by sustained allegations of child sexual abuse, criminal trials, and changes to his physical appearance. He died of acute propofol intoxication in 2009, with the criminal conviction of his physician Conrad Murray for involuntary manslaughter the following year."
  },

  "gladys-bentley": {
    label: "Gladys Bentley",
    definition: "American singer, pianist, and entertainer (born August 12, 1907, in Philadelphia; died January 18, 1960, in Los Angeles), one of the most visible openly queer performers of the Harlem Renaissance era. Bentley moved to New York at sixteen and became a fixture in Harlem cabaret and speakeasy culture by the late 1920s, performing in a top hat and white tuxedo, singing risqu\u00e9 reworkings of popular songs, and openly courting women in her audiences. She recorded sides for Okeh, Victor, and other labels between 1928 and 1930. The standard contemporaneous account (in Langston Hughes\u2019s 1940 memoir <em>The Big Sea</em>) describes Bentley as the lead attraction at Harry Hansberry\u2019s Clam House and the Cotton Club, drawing both Black and white audiences. In 1931 she married a woman in a civil ceremony reportedly in Atlantic City. Bentley\u2019s career declined sharply with the end of Prohibition and the Depression-era closure of much of the speakeasy circuit; she moved to Los Angeles in the late 1930s, where she continued to perform but increasingly under pressure to disavow her earlier openness about her sexuality. She published a 1952 <em>Ebony</em> magazine piece (\u201cI Am a Woman Again\u201d) describing herself as having undergone hormone treatments and married a man, claims that contemporary historians treat as a product of McCarthy-era survival pressure rather than a stable account of her identity."
  },

  "marc-anthony": {
    label: "Marc Anthony",
    definition: "American singer, songwriter, and actor (born Marco Antonio Mu\u00f1iz, September 16, 1968, in East Harlem, New York), one of the central figures of contemporary salsa and Latin pop. Anthony began his recording career as a backup singer for hip hop and freestyle artists in the late 1980s, recorded a Spanish-language salsa album (<em>Otra Nota</em>) in 1993, and through the 1990s recorded the salsa-pop albums (<em>Todo a Su Tiempo</em> 1995, <em>Contra la Corriente</em> 1997) that displaced Rub\u00e9n Blades and Willie Col\u00f3n\u2019s <em>Siembra</em> as the best-selling salsa album in the genre\u2019s history. His self-titled 1999 English-language debut produced the crossover hit \u201cI Need to Know.\u201d Anthony portrayed H\u00e9ctor Lavoe in Leon Ichaso\u2019s 2006 biographical film <em>El Cantante</em>, opposite then-wife Jennifer Lopez. He has continued to record in Spanish (most recently <em>Pa\u2019 Ll\u00e1 Voy</em> 2022) and remains the best-selling tropical music artist of all time, with multiple Latin Grammy and Billboard Latin Music Awards."
  },

  "ricky-martin": {
    label: "Ricky Martin",
    definition: "Puerto Rican singer, songwriter, and actor (born Enrique Mart\u00edn Morales, December 24, 1971, in San Juan), one of the central figures of the late-1990s Latin pop crossover boom and one of the most commercially successful Latin pop stars of the post-1990 period. Martin began performing as a child in the Puerto Rican boy band Menudo from 1984 to 1989, recorded a sequence of Spanish-language solo albums (<em>Ricky Martin</em> 1991, <em>Me Amar\u00e1s</em> 1993, <em>A Medio Vivir</em> 1995, <em>Vuelve</em> 1998), and broke through internationally with his 1999 self-titled English-language debut and its single \u201cLivin\u2019 la Vida Loca,\u201d which reached number one on the Billboard Hot 100 and went on to sell more than eight million copies as a single. On March 29, 2010, Martin posted a statement on his personal website declaring himself \u201ca fortunate homosexual man\u201d after years of public speculation about his sexuality; the announcement was widely understood as a watershed for Latin LGBTQ+ visibility, and Martin has continued advocating for LGBTQ+ rights in Puerto Rico and across Spanish-speaking audiences. His memoir <em>Me</em> was published in November 2010. He performed as a featured guest at the 2026 Super Bowl halftime show headlined by Bad Bunny."
  },

  "j-balvin": {
    label: "J Balvin",
    definition: "Colombian singer and rapper (born Jos\u00e9 \u00c1lvaro Osorio Balv\u00edn, May 7, 1985, in Medell\u00edn), one of the most commercially successful Latin music artists of the 2010s and a central figure in reggaet\u00f3n\u2019s 2010s global expansion. Balvin emerged from the Medell\u00edn urban scene with the 2013 hit \u201c6 AM\u201d featuring Farruko, recorded a sequence of Spanish-language hit albums (<em>La Familia</em> 2013, <em>Energ\u00eda</em> 2016, <em>Vibras</em> 2018, <em>Colores</em> 2020), and produced a string of high-profile collaborations with North American and Latin pop artists (Beyonc\u00e9 on the 2017 \u201cMi Gente\u201d remix; Cardi B and Bad Bunny on \u201cI Like It\u201d 2018; Tokischa on \u201cPerra\u201d 2021). The 2021 \u201cPerra\u201d video drew substantial criticism for portraying Black Dominican women on leashes; Balvin took the video down and apologized. Balvin has also been criticized inside the reggaet\u00f3n community for his perceived erasure of the genre\u2019s Black Puerto Rican origins; his 2021 boycott of the Latin Grammys drew a sustained public rebuke from Residente (Ren\u00e9 P\u00e9rez Joglar) and reopened a public conversation about race and credit inside Latin urban music."
  },

  "arca": {
    label: "Arca",
    definition: "Venezuelan electronic musician, producer, and vocalist (born Alejandra Ghersi Rodr\u00edguez, October 14, 1989, in Caracas), one of the central figures of contemporary experimental electronic music and a prominent trans Latin artist. Arca released a sequence of solo albums on Mute (<em>Xen</em> 2014, <em>Mutant</em> 2015, <em>Arca</em> 2017) before signing to XL Recordings for the four-volume <em>KiCk</em> series (<em>KiCk i</em> 2020, <em>KICK ii</em>, <em>KicK iii</em>, and <em>kick iiii</em> all released in late 2021) and <em>KICK iiiii</em> (2021), which moved her work substantially closer to reggaet\u00f3n, dembow, and Latin pop. As a producer she has been a central collaborator with Bj\u00f6rk (on <em>Vulnicura</em> 2015, <em>Utopia</em> 2017, and <em>Fossora</em> 2022), Kanye West (on <em>Yeezus</em> 2013), FKA twigs, Frank Ocean (on <em>Blonde</em> 2016), and many others; her work has shaped the contemporary avant-pop production vocabulary. Arca came out publicly as a trans woman in 2018 and has made trans Latin identity central to her subsequent work."
  },

  "british-invasion": {
    label: "British Invasion",
    definition: "The wave of British rock-and-roll bands that broke into the American popular-music market in 1964 and 1965, the largest and most consequential transatlantic musical exchange in twentieth-century American popular music. The conventional starting point is the Beatles\u2019 February 9, 1964 appearance on the Ed Sullivan Show, watched by an estimated 73 million viewers; the Rolling Stones, the Animals, the Kinks, the Who, the Dave Clark Five, Herman\u2019s Hermits, the Searchers, and many others followed across the next two years. The British Invasion bands had grown up listening to American Black blues, R&amp;B, and rock-and-roll records that had circulated in the UK in the 1950s, and their early American hits were often covers of or were modeled on Black American originals (the Rolling Stones\u2019 Chess Records sessions; the Animals\u2019 cover of \u201cThe House of the Rising Sun\u201d; Eric Clapton\u2019s blues-based work with the Yardbirds, John Mayall\u2019s Bluesbreakers, and Cream). The British musicians generally credited their Black American sources publicly, often more directly than their American white-rock-and-roll predecessors had; the political-economy outcome, however, was that chart success and royalty income flowed disproportionately to the British bands while many of the Black American originators they named had already died (Robert Johnson) or continued to work in poverty (Arthur Crudup; Muddy Waters\u2019s circumstances were better but not commensurate with the global success his songs achieved through the Stones)."
  },

  "the-beatles": {
    label: "The Beatles",
    definition: "Liverpool rock band (formed 1960; broke up 1970), comprising John Lennon, Paul McCartney, George Harrison, and Ringo Starr (replacing Pete Best in 1962). The Beatles became the most commercially and critically consequential popular-music act of the 1960s after their February 9, 1964 appearance on the Ed Sullivan Show; the appearance kicked off the broader British Invasion of American popular music. The band\u2019s musical formation drew heavily on Black American R&amp;B, rock-and-roll, and Motown sources (their early concert sets included covers of Chuck Berry, Little Richard, the Shirelles, the Marvelettes, and Smokey Robinson); their later work synthesized those sources with British music-hall, Indian classical music, and the studio experimentalism that George Martin\u2019s production enabled. The thirteen studio albums released between 1963 and 1970 remain among the best-selling records in popular-music history."
  },

  "rolling-stones": {
    label: "The Rolling Stones",
    definition: "London rock band (formed 1962), originally comprising Mick Jagger, Keith Richards, Brian Jones, Bill Wyman, and Charlie Watts. The Rolling Stones built their early sound on direct study of Chicago blues and Chess Records R&amp;B; they took their name from the Muddy Waters song \u201cRollin\u2019 Stone,\u201d and their first US recording sessions in June 1964 were at Chess Studios at 2120 South Michigan Avenue in Chicago, with Waters reportedly in attendance. Their 1964-1966 American hits (\u201c(I Can\u2019t Get No) Satisfaction\u201d in 1965; \u201cLast Time\u201d; \u201cPaint It, Black\u201d) sat alongside covers of Chuck Berry (\u201cCome On,\u201d their 1963 debut single), Muddy Waters, Howlin\u2019 Wolf, Bo Diddley, and Slim Harpo. Jagger and Richards have spoken consistently across their careers about the Black American blues musicians whose work they drew from, and Richards in particular has been a vocal advocate for the financial and historical recognition of those sources; the Stones\u2019 commercial scale, however, remains the canonical example of the racial-economic asymmetry between British rock acts and the Black American musicians their work was built on."
  },

  "the-animals": {
    label: "The Animals",
    definition: "Newcastle rock band (formed 1962), comprising Eric Burdon, Alan Price, Hilton Valentine, Chas Chandler, and John Steel. The Animals were one of the first British Invasion acts to chart in America after the Beatles, and their breakthrough 1964 single \u201cThe House of the Rising Sun\u201d (a traditional American folk song rearranged by the band on the model of Bob Dylan\u2019s 1962 acoustic version) became a number-one US hit. Burdon\u2019s vocal style was directly modeled on Black American blues singers, particularly Ray Charles and Nina Simone; the band\u2019s repertoire across the mid-1960s included covers of John Lee Hooker, Sam Cooke, Bo Diddley, and Chuck Berry. Chas Chandler, the Animals\u2019 bassist, later managed Jimi Hendrix and brought him from New York to London in 1966."
  },

  "eric-clapton": {
    label: "Eric Clapton",
    definition: "English rock and blues guitarist (born March 30, 1945, in Ripley, Surrey), among the most commercially successful musicians of the broader British Invasion generation. Clapton played with the Yardbirds (1963-1965), John Mayall\u2019s Bluesbreakers (1965-1966), Cream (1966-1968), Derek and the Dominos (1970), and as a solo artist from 1970 forward. His work has consistently named Black American blues sources, particularly Robert Johnson (whose 14 songs Clapton recorded for the 2004 tribute album <em>Me and Mr. Johnson</em>) and B.B. King (with whom Clapton recorded the 2000 duet album <em>Riding with the King</em>). Clapton\u2019s career sits inside the political-economic pattern this module's framing reading discusses: he has been one of the more vocal British acknowledgers of Black American sources, while also being one of the highest-earning beneficiaries of the asymmetry the framing names. His public statements have not always been consistent with his musical sources: a 1976 Birmingham concert stage speech endorsing the British politician Enoch Powell\u2019s anti-immigration position triggered the founding of Rock Against Racism, and Clapton has revisited and partially apologized for those comments in the decades since."
  },

  "muddy-waters": {
    label: "Muddy Waters",
    definition: "American blues musician (born McKinley Morganfield, April 4, 1913, in Issaquena County, Mississippi; died April 30, 1983, in Westmont, Illinois), the central figure of postwar electric Chicago blues. Waters moved to Chicago in 1943 as part of the Great Migration, switched from acoustic to electric guitar in the late 1940s, and recorded for Chess Records from 1947 forward; his band of the early 1950s (with harmonica player Little Walter, pianist Otis Spann, and drummer Elga Edmonds, joined later by Willie Dixon as bassist and songwriter) reorganized the rural Mississippi Delta blues into the electric ensemble form that became the template for Chicago blues and, by extension, for British and American rock. His major recordings of this period (\u201cI Can\u2019t Be Satisfied,\u201d \u201cRollin\u2019 Stone,\u201d \u201cHoochie Coochie Man,\u201d \u201cMannish Boy,\u201d \u201cGot My Mojo Working\u201d) shaped the postwar blues vocabulary; the Rolling Stones took their name from his 1950 \u201cRollin\u2019 Stone.\u201d Waters survived long enough to see the British Invasion bring his work back to a mass white American audience (he toured with the Stones in 1981), but his financial circumstances during the period of the Stones\u2019 peak commercial success remained modest by comparison."
  },

  "chuck-berry": {
    label: "Chuck Berry",
    definition: "American singer, songwriter, and guitarist (born Charles Edward Anderson Berry, October 18, 1926, in St. Louis; died March 18, 2017, in Wentzville, Missouri), one of the founding figures of rock and roll. Berry signed to Chess Records in 1955 and from his debut single \u201cMaybellene\u201d through the late 1950s recorded a sequence of records (\u201cRoll Over Beethoven,\u201d \u201cSchool Day,\u201d \u201cRock and Roll Music,\u201d \u201cSweet Little Sixteen,\u201d \u201cJohnny B. Goode,\u201d \u201cMemphis, Tennessee\u201d) that defined the rock-and-roll vocabulary: the double-stop guitar intros, the country-meets-blues phrasing, the lyric narratives about teenage American life. The Beatles, the Rolling Stones, the Beach Boys, and most of the British Invasion bands covered his songs and openly named him as a source. Berry remained active into his eighties and released his final album, <em>Chuck</em>, posthumously in 2017. The racial-economic pattern the framing reading discusses is visible in his case as well: he wrote the rock-and-roll vocabulary the British Invasion bands built their careers on, while his own commercial and critical recognition (particularly in the 1960s and 1970s) lagged behind theirs by orders of magnitude."
  },

  "robert-johnson": {
    label: "Robert Johnson",
    definition: "American Delta blues musician (born May 8, 1911, in Hazlehurst, Mississippi; died August 16, 1938, in Greenwood, Mississippi), the most influential prewar Mississippi bluesman despite a vanishingly small commercial footprint during his lifetime. Johnson recorded only 29 songs across two sessions for the American Record Corporation\u2019s Vocalion label (San Antonio, November 1936; Dallas, June 1937), released as eleven 78-rpm singles before his death and a final twelfth posthumously. Most sold in modest numbers (his most successful lifetime single sold about 10,000 copies); he was paid cash for the recordings and received no royalties. He died at 27 in Greenwood, Mississippi under disputed circumstances. The Columbia compilation <em>King of the Delta Blues Singers</em> (1961, prodded into existence by producer John Hammond at the height of the folk revival) circulated to a new generation of British and American musicians in the early 1960s and made Johnson a foundational reference for the British Invasion bands and the broader blues-rock tradition (Eric Clapton, the Rolling Stones, Led Zeppelin, the Allman Brothers Band, Bob Dylan all named him as a source). The financial and reputational rehabilitation that followed in the 1960s and after came too late for Johnson himself; the central figure of Mississippi Delta blues died in poverty and is buried in an unmarked grave (the three current markers in different locations near Greenwood reflect the unreliability of the surviving records)."
  },

  "bb-king": {
    label: "B.B. King",
    definition: "American blues guitarist and singer (born Riley B. King, September 16, 1925, in Itta Bena, Mississippi; died May 14, 2015, in Las Vegas), the most commercially successful blues musician of the second half of the twentieth century and the figure who carried the postwar electric blues from the chitlin circuit to the global concert hall. King\u2019s 1960s and 1970s recordings (\u201cThe Thrill Is Gone,\u201d 1969, his commercial peak) and his hundreds-of-shows-a-year touring schedule (he reportedly averaged 250 to 300 performances annually for decades) built the modern blues-musician\u2019s career as a sustainable form. He named his guitars Lucille across his career, after an incident at a 1949 Arkansas dance hall. The British Invasion guitarists named him as a foundational source: Eric Clapton recorded the 2000 duet album <em>Riding with the King</em> with him; the Rolling Stones toured with him; Keith Richards has spoken consistently about his influence. King was inducted into the Rock and Roll Hall of Fame in 1987, the Blues Hall of Fame in 1980, and the Songwriters Hall of Fame in 1988."
  },

  "washington-heights": {
    label: "Washington Heights",
    definition: "The Manhattan neighborhood at the northern tip of the island, running roughly from West 155th Street up to Dyckman Street, traditionally bounded by the Hudson River on the west and the Harlem River on the east. The neighborhood developed as an Irish, German Jewish, and Greek immigrant residential district in the first half of the twentieth century; through the 1940s and 1950s it became increasingly Black and Puerto Rican as African American residents moved north from Harlem and Puerto Rican migrants arrived from the island. By the 1960s and 1970s, Dominican migrants began arriving in large numbers; today the neighborhood is sometimes informally called \u201cLittle Dominican Republic.\u201d Frankie Lymon and the four other members of the Teenagers all grew up within a few blocks of each other in Washington Heights in the early 1950s."
  },

  "street-corner-harmony": {
    label: "Street-corner harmony",
    definition: "A working-class urban vocal-group practice in which young singers, typically four or five teenagers without instruments, gather on a sidewalk, in an apartment-building hallway, on a stoop, in a school auditorium, or in a tiled subway station to work out close-harmony arrangements of popular songs and originals. The hard surfaces give the unaccompanied voices a small natural reverb. Street-corner harmony was the rehearsal infrastructure of mid-1950s doo-wop, and most of the major doo-wop recordings of the period (the Penguins\u2019 \u201cEarth Angel,\u201d Frankie Lymon\u2019s \u201cWhy Do Fools Fall in Love,\u201d the Five Satins\u2019 \u201cIn the Still of the Night\u201d) came out of groups that had worked their parts out this way before ever entering a studio."
  },

  "herman-santiago": {
    label: "Herman Santiago",
    definition: "Puerto Rican American doo-wop singer (born February 18, 1941, in New York City), the first tenor of Frankie Lymon and the Teenagers. Santiago, along with Jimmy Merchant, wrote the original version of \u201cWhy Do Fools Fall in Love\u201d (initially titled \u201cWhy Do Birds Sing So Gay\u201d) based on a I-vi-IV-V chord pattern he had been working with; he was the group\u2019s lead singer until he was sick on the day of the 1955 audition with George Goldner, at which Frankie Lymon stepped in and Goldner reassigned the lead to Lymon. Santiago and Merchant spent decades attempting to recover their songwriting credit; a 1992 district-court ruling in their favor was overturned on a statute-of-limitations technicality in 1996, and the published credit on the song remains \u201cFrankie Lymon and Morris Levy\u201d to this day."
  },

  "joe-negroni": {
    label: "Joe Negroni",
    definition: "Puerto Rican American doo-wop singer (born September 9, 1940, in New York City; died of a brain hemorrhage in 1978 at thirty-seven), the baritone of Frankie Lymon and the Teenagers. Negroni had been singing with Herman Santiago in a local group called the Ermines before the lineup that became the Premiers (and then the Teenagers) came together in 1954."
  },

  "jimmy-merchant": {
    label: "Jimmy Merchant",
    definition: "African American doo-wop singer (born February 10, 1940, in the South Bronx), the second tenor of Frankie Lymon and the Teenagers. Merchant co-wrote the original version of \u201cWhy Do Fools Fall in Love\u201d with Herman Santiago and spent decades alongside Santiago attempting to recover the songwriting credit George Goldner had displaced; the 1992 district-court ruling that briefly awarded them the credit was overturned in 1996 on a statute-of-limitations technicality."
  },

  "sherman-garnes": {
    label: "Sherman Garnes",
    definition: "African American doo-wop singer (born June 8, 1940, in New York City; died of complications from heart surgery in 1977 at thirty-six), the bass singer and the organizer of Frankie Lymon and the Teenagers. At six feet four inches tall, Garnes anchored the group physically and vocally; his descending nonsense-syllable bass line (\u201coo-wah, oo-wah, oo-wah, oo-wah\u201d) opens and closes the 1955 recording of \u201cWhy Do Fools Fall in Love\u201d and is one of the most identifiable bass-singer figures of the doo-wop era."
  },

  "dion-and-the-belmonts": {
    label: "Dion and the Belmonts",
    definition: "An American doo-wop vocal group from the Belmont Avenue neighborhood of the Bronx, active 1957-1960 and intermittently after. The original lineup was four Italian American teenagers (Dion DiMucci, lead vocals, born 1939; Angelo D\u2019Aleo, first tenor; Fred Milano, second tenor; Carlo Mastrangelo, bass). Often cited as the first Italian American rock-and-roll vocal group to break through nationally in the doo-wop idiom, with \u201cI Wonder Why\u201d (1958), \u201cA Teenager in Love\u201d (1959), and \u201cWhere or When\u201d (1960). The group was named for Belmont Avenue, the main street of their Bronx neighborhood, and was substantively modeled on what its members had heard Frankie Lymon and the Teenagers do on \u201cWhy Do Fools Fall in Love\u201d two years earlier. Dion DiMucci has said in interviews that learning of Lymon\u2019s death in 1968 was the catalyst for getting clean of his own heroin addiction."
  },

  "frankie-valli": {
    label: "Frankie Valli",
    definition: "Italian American singer (born Francesco Castelluccio, May 3, 1937, in Newark, New Jersey), the lead vocalist of the Four Seasons and one of the central figures of the late-1950s and early-1960s Italian American doo-wop and rock-and-roll scene. Valli\u2019s pre-Four-Seasons groups, the Variety Trio (1951), the Variatones (1954), and the Four Lovers (1956-58, with their RCA Victor hit \u201cYou\u2019re the Apple of My Eye\u201d) all worked out of the same Newark, New Jersey, urban Italian American street-corner scene that produced parallel groups across the Northeast. The Four Seasons formed in 1960; their string of Vee-Jay and Philips singles from 1962 forward (\u201cSherry,\u201d \u201cBig Girls Don\u2019t Cry,\u201d \u201cWalk Like a Man,\u201d \u201cRag Doll\u201d) was one of the few white American commercial successes that survived the 1964 British Invasion intact."
  },

  "richard-barrett": {
    label: "Richard Barrett",
    definition: "African American doo-wop singer and record producer (1933-2006), lead singer of the New York vocal group the Valentines and the talent scout and production assistant who first brought the Premiers (later the Teenagers) to George Goldner\u2019s attention in 1955. Barrett went on to discover and produce a substantial roster of Goldner-affiliated vocal groups across the late 1950s, including the Chantels (the first major girl group of the rock-and-roll era), Little Anthony and the Imperials, and the Three Degrees, whom he managed across the 1960s and 1970s."
  },

  "george-goldner": {
    label: "George Goldner",
    definition: "American record producer and independent-label owner (born Jacob Goldman in 1919, Turtle Bay, Manhattan; died 1970) who, between 1948 and the mid-1960s, founded a sequence of New York independent labels (Tico, Rama, Gee, End, Gone, Roulette, Red Bird) that produced many of the foundational mambo, doo-wop, and early rock-and-roll recordings of the period. Goldner discovered or signed Tito Puente, Machito, the Crows, the Cleftones, Frankie Lymon and the Teenagers, the Flamingos, Little Anthony and the Imperials, the Chantels, the Isley Brothers, the Shangri-Las, and many others. He was Jewish American, an inveterate gambler, and reportedly mob-adjacent through his business partnerships with Morris Levy; he repeatedly sold his label interests to Levy to cover gambling debts. His producer\u2019s credit on the songwriting of \u201cWhy Do Fools Fall in Love,\u201d which displaced Herman Santiago and Jimmy Merchant from the credit they had earned, was one of many such credit appropriations across his career."
  },

  "gee-records": {
    label: "Gee Records",
    definition: "Small independent New York R&B record label founded by George Goldner in 1953 or 1954 as a subsidiary of his Rama label and named after the 1953 Crows hit \u201cGee.\u201d The Cleftones and Frankie Lymon and the Teenagers were Gee\u2019s most commercially successful artists in 1956 and 1957. Goldner sold his interest in Gee (along with Rama, Tico, and his share of Roulette Records) to Morris Levy in April 1957 to cover gambling debts; the label became dormant under Levy and was briefly reactivated as a Roulette subsidiary in the early 1960s for Cleftones and Regents singles before being permanently shut down."
  },

  "bell-sound-studios": {
    label: "Bell Sound Studios",
    definition: "Independent New York recording studio founded in 1950 by Allen Weintraub and Dan Cronin, two recent Brooklyn Tech graduates with a $600 initial investment, and one of the central studios of the mid-1950s through mid-1960s New York independent record-label scene. Bell recorded the Crows\u2019 \u201cGee\u201d (1953), Frankie Lymon and the Teenagers\u2019 \u201cWhy Do Fools Fall in Love\u201d (November 1955), Dion and the Belmonts\u2019 \u201cA Teenager in Love\u201d (1959), Little Anthony and the Imperials\u2019 \u201cTears on My Pillow\u201d (1958), the Flamingos\u2019 \u201cI Only Have Eyes for You\u201d (1958), Lloyd Price\u2019s \u201cStagger Lee\u201d (1958), Wilbert Harrison\u2019s \u201cKansas City\u201d (1959), and the Drifters\u2019 \u201cSave the Last Dance for Me\u201d (1959), among many others. The studio was located at several Manhattan addresses across its life (Mott Street, Brooklyn briefly, West 89th Street, and then West 46th Street and 8th Avenue from 1954); it closed in 1976."
  },

  "jimmy-wright": {
    label: "Jimmy Wright",
    definition: "American tenor saxophonist (active 1953-late 1950s) who led the house band for George Goldner\u2019s Rama, Gee, and Roulette labels through the mid 1950s. Wright\u2019s small band (tenor saxophone, piano, electric bass, drums) backed dozens of doo-wop and early rock-and-roll recordings on Goldner\u2019s labels, and Wright\u2019s own jumping tenor saxophone solos were a recognizable feature of the label\u2019s 1955-57 sound. Wright is also credited with giving the Premiers their new name, the Teenagers, in late 1955. His sixteen-bar tenor solo in the middle of \u201cWhy Do Fools Fall in Love\u201d is one of the recording\u2019s structural features."
  },

  "sax-solo": {
    label: "Tenor saxophone solo",
    definition: "A short instrumental passage played by a tenor saxophonist, typically in the middle of a vocal song after the second verse or second chorus. In the late 1940s and early 1950s, the tenor saxophone solo was the center of gravity of jump blues and early rhythm-and-blues records: a recording would build to the saxophonist\u2019s solo as its emotional and rhythmic climax. As doo-wop and early rock and roll took shape in the mid 1950s, the saxophone solo shrank from the recording\u2019s climax to a sixteen-bar interlude that gave the lead singer a chance to rest and the dancers a chance to dance, but the saxophone-solo convention persisted; almost every doo-wop and early rock-and-roll record of the mid 1950s has one."
  },

  "bass-singer": {
    label: "Bass singer",
    definition: "The lowest voice in a vocal group, especially in doo-wop and gospel quartets. The bass singer in a doo-wop group typically performs three structural functions: holding down the lowest pitch of the four-part harmony, singing nonsense-syllable patterns (\u201coo-wah,\u201d \u201cbom-bom,\u201d \u201cbup-bup-bup\u201d) that drive the rhythm in the absence of a string bass on lighter recordings, and occasionally stepping forward for a brief solo passage. Sherman Garnes\u2019s descending bass-singer line opens and closes \u201cWhy Do Fools Fall in Love\u201d; the bass-singer foreground convention is also audible across many other doo-wop recordings of the period."
  },

  "alan-freed": {
    label: "Alan Freed",
    definition: "American disc jockey (born December 21, 1921, Johnstown, Pennsylvania; died 1965) who, more than any other single figure, popularized the term \u201crock and roll\u201d as a name for the African American rhythm-and-blues music he was playing for a teenage audience that was increasingly white. Freed began his \u201cMoondog\u2019s Rock and Roll Party\u201d on Cleveland\u2019s WJW in July 1951 at the suggestion of record-store owner Leo Mintz, who had noticed white teenagers buying Black R&B records, and organized the 1952 \u201cMoondog Coronation Ball\u201d in Cleveland, often described as the first rock concert. Freed moved to New York\u2019s WINS in 1954 and to WABC in 1958; his package tours organized through George Goldner and others brought the Teenagers, the Flamingos, Little Anthony and the Imperials, Chuck Berry, Little Richard, and Bo Diddley to a national stage. His career was destroyed by the 1959-60 \u201cpayola\u201d scandal (record labels paying disc jockeys to play their records, then a widespread industry practice), and he died of cirrhosis in 1965 at age 43."
  },

  "jump-blues": {
    label: "Jump blues",
    definition: "An up-tempo, dance-oriented African American popular music style of the mid 1940s through the early 1950s, built on a small horn-section band (typically two or three saxophones plus trumpet, piano, electric bass, and drums) with a shouted blues vocal out front and an extended tenor-saxophone solo at the recording\u2019s center. Louis Jordan (\u201cChoo Choo Ch\u2019Boogie,\u201d 1946, and \u201cSaturday Night Fish Fry,\u201d 1949) was the central figure; Big Joe Turner, Wynonie Harris, Roy Brown, and Big Jay McNeely also made canonical jump-blues records. Jump blues was the most important commercial bridge between the swing-era big bands and the rhythm and blues of the late 1940s and early 1950s, and the tenor-saxophone solo as a structural feature of mid-1950s doo-wop, rock and roll, and early soul recordings descends directly from the jump-blues tradition."
  },

  "joan-baez": {
    label: "Joan Baez (b. 1941)",
    definition: "American folk singer, songwriter, and political activist (born Joan Chandos Baez, January 9, 1941, Staten Island, New York). Her father, Albert V. Baez, was a Mexican-born physicist; her mother, Joan Bridge, was of Scottish and English descent; the family converted to Quakerism during Joan\u2019s early childhood and the pacifist and social-justice commitments of the Quaker tradition shaped the rest of her life. Baez came up through the Cambridge, Massachusetts coffee-house folk scene in the late 1950s, made her national debut at the 1959 Newport Folk Festival as a guest of Bob Gibson, signed with Vanguard Records, and recorded her self-titled debut album in summer 1960 at nineteen. The album went gold and made her, in mainstream press shorthand, the \u201cMadonna of folk music\u201d and the \u201cQueen of Folk.\u201d Across the next decade she was central to the civil-rights and anti-Vietnam-War movements: she sang \u201cWe Shall Overcome\u201d at the 1963 March on Washington, was a close associate of Martin Luther King Jr., refused to play segregated venues across her Southern tours, founded the Institute for the Study of Nonviolence in 1965, was arrested at the Oakland Armed Forces Induction Center in 1967, and was in Hanoi in December 1972 during the U.S. \u201cChristmas bombing.\u201d Her early recording career also helped launch Bob Dylan\u2019s, beginning in 1961. She continued recording and performing through 2019."
  },

  "vanguard-records": {
    label: "Vanguard Records",
    definition: "An independent New York record label founded in 1950 by brothers Maynard and Seymour Solomon, originally as a classical-music label specializing in baroque and early-music recordings. In the late 1950s Vanguard opened a folk-music division and became one of the central labels of the postwar urban folk revival: its roster across the late 1950s and 1960s included the Weavers, Odetta, Joan Baez, Mimi and Richard Fari\u00f1a, Buffy Sainte-Marie, Phil Ochs, Country Joe and the Fish, and many others. The label\u2019s small scale and producer-led aesthetic (minimal overdubs, lean instrumentation, often only a singer and a guitar) was part of the folk revival\u2019s deliberate departure from major-label popular-music production gloss. Vanguard was sold to Welk Records in 1986 and is now part of the Concord Music Group."
  },

  "maynard-solomon": {
    label: "Maynard Solomon",
    definition: "American record producer, scholar, and writer (born January 5, 1930, Bronx, New York; died September 28, 2020, New York City), the co-founder, with his brother Seymour, of Vanguard Records in 1950. Solomon produced most of Vanguard\u2019s major folk-revival recordings of the 1950s and 1960s, including Joan Baez\u2019s self-titled 1960 debut and the first three of her albums, and was the writer of many of the label\u2019s liner notes. After leaving the music industry in the 1980s, Solomon became a prolific music biographer, publishing major scholarly studies of Beethoven (1977; revised 1998), Mozart (1995), and Schubert (others); his Beethoven biography won the 1978 ASCAP-Deems Taylor Award and is one of the standard reference works on the composer in English."
  },

  "newport-folk-festival": {
    label: "Newport Folk Festival",
    definition: "An annual folk-music festival held in Newport, Rhode Island, founded in 1959 by the impresario George Wein (who had already founded the Newport Jazz Festival in 1954) as a counterpart aimed at the folk-revival audience. Across its early years (1959 to 1969) Newport became the central gathering of the postwar American folk revival, with appearances by Pete Seeger, Joan Baez (1959 as Bob Gibson\u2019s guest, then 1960 and after as a headliner), Bob Dylan, Odetta, Phil Ochs, Mississippi John Hurt, Doc Watson, Buffy Sainte-Marie, and many others. Dylan\u2019s 1965 Newport set with a backing electric band is a famous and contested moment in the revival\u2019s history; the festival went on hiatus from 1970 to 1984 and has run continuously since 1985."
  },

  "child-ballad": {
    label: "Child ballad",
    definition: "A traditional English-language narrative ballad catalogued in Francis James Child\u2019s <em>The English and Scottish Popular Ballads</em>, published in five volumes from 1882 to 1898. Child catalogued 305 distinct ballads with their textual variants, drawing on manuscript and printed sources from across the British Isles and the United States. Ballads are universally referenced in folk-song scholarship by their Child catalogue number: \u201cChild 173\u201d is \u201cMary Hamilton,\u201d \u201cChild 12\u201d is \u201cLord Randall,\u201d \u201cChild 84\u201d is \u201cBarbara Allen,\u201d and so on. The Child numbering remains the standard reference system in English-language folk-song scholarship more than a century after the collection\u2019s completion."
  },

  "mary-queen-of-scots": {
    label: "Mary, Queen of Scots",
    definition: "Queen of Scotland from 1542 (when she became queen as an infant six days after the death of her father, King James V) until her forced abdication in 1567; also briefly Queen of France through her marriage to Francis II from 1559 to 1560. Mary spent her childhood in France (1548-1561), returned to Scotland in 1561, married Henry Stuart, Lord Darnley, in 1565, and bore the future King James VI of Scotland and James I of England in 1566. Darnley was murdered in February 1567 under circumstances that have been debated for four centuries. Mary fled to England in 1568, was held under house arrest by her cousin Elizabeth I for nineteen years, and was executed in 1587. Her four child-companion ladies-in-waiting (the \u201cFour Maries\u201d: Mary Beaton, Mary Fleming, Mary Livingston, and Mary Seton) accompanied her to France in 1548 and returned with her in 1561; the ballad \u201cMary Hamilton\u201d invokes this group of four Maries in its famous closing stanza, although the historical record gives no basis for the song\u2019s specific narrative."
  },

  "jeannie-robertson": {
    label: "Jeannie Robertson",
    definition: "Scottish traditional singer (born November 21, 1908, Aberdeen; died March 13, 1975, Aberdeen), one of the most influential singers of the twentieth-century British folk revival. Robertson came from an extended Scottish Traveller family (called \u201ctinkers\u201d in the older Scottish usage), with a deep family repertoire of ballads, songs, and pipe music. She was \u201cdiscovered\u201d by the folklorist Hamish Henderson of the University of Edinburgh\u2019s School of Scottish Studies in 1953, and her 1956 Riverside album <em>Songs of a Scots Tinker Lady</em> and subsequent Caedmon and Topic recordings made her ballad performances central reference points for both Scottish and American folk-revival singers. Her version of \u201cMary Hamilton\u201d (Child 173) is one of the best-known traditional recordings of the ballad."
  },

  "quakerism": {
    label: "Quakerism",
    definition: "The Religious Society of Friends, a Christian movement founded in mid-seventeenth-century England by George Fox and others. Quakers reject the formal clergy, sacraments, and hierarchical structure of most other Christian traditions, holding instead that every person has direct access to divine truth (\u201cthat of God in every person\u201d). Quaker practice centers on silent meeting for worship, plain speech, and active social testimony; the tradition\u2019s historic commitments include pacifism (refusal to participate in war), abolition (Quakers were central to the British and American antislavery movements), prison reform, and broader social-justice work. American Quaker families have been disproportionately represented in twentieth-century pacifist, civil-rights, and antiwar activism, and the Joan Baez family\u2019s mid-1950s conversion to Quakerism is one of the more visible musical-cultural examples of the tradition\u2019s influence."
  },

  "vibrato": {
    label: "Vibrato",
    definition: "A regular, controlled wavering in pitch (and sometimes loudness) applied to a sustained note. Vibrato is produced differently on different instruments: on strings by oscillating the fingertip on the fingerboard, on wind instruments by adjusting the airstream, in singing by oscillating the breath pressure or laryngeal position. Most singers in the European classical tradition use a vibrato roughly five to seven cycles per second, and the speed, width, and onset of the vibrato are central markers of an individual singer\u2019s timbre. Joan Baez\u2019s fast, narrow, continuously present vibrato on her 1960 debut album is one of the more recognizable vocal signatures in twentieth-century American popular music."
  },

  "we-shall-overcome": {
    label: "\u201cWe Shall Overcome\u201d",
    definition: "A protest anthem that became one of the central songs of the American civil rights movement of the 1950s and 1960s. The melody and the core lyric descend from the African American gospel hymn \u201cI\u2019ll Overcome Some Day,\u201d published by the Methodist minister Charles Albert Tindley in 1900; the song was reworked during a 1945 tobacco-workers\u2019 strike led by African American women in Charleston, South Carolina, was taught by the music director Zilphia Horton at the Highlander Folk School in Tennessee in 1947, was published in Pete Seeger\u2019s <em>People\u2019s Songs Bulletin</em> in 1948, and entered the civil rights movement through the Highlander training programs of the late 1950s and early 1960s. Joan Baez\u2019s performance of the song from the steps of the Lincoln Memorial at the August 28, 1963 March on Washington (the same day as Martin Luther King Jr.\u2019s \u201cI Have a Dream\u201d speech) is one of the most-cited individual performances of the song; her recording reached the United Kingdom top-ten in 1965."
  },

  "club-47": {
    label: "Club 47",
    definition: "A Cambridge, Massachusetts coffeehouse and folk-music venue at 47 Mount Auburn Street in Harvard Square, opened on January 6, 1958 by Paula Kelley and Joyce Kalina (two recent Brandeis graduates) as a jazz coffeehouse, and one of the central venues of the early Boston-area folk revival. Because Cambridge blue laws forbade an establishment serving food and drink from also housing more than three stringed instruments, the venue obtained a nonprofit educational charter and required a one-dollar membership at the door; the \u201cClub\u201d in the name comes from that legal workaround. Joan Baez performed there from 1958 through 1959 (she was paid ten dollars at her first gig); the club was also an early stage for the Charles River Valley Boys, Eric von Schmidt, Jackie Washington, Tom Rush, Jim Kweskin and the Jug Band, Geoff and Maria Muldaur, Taj Mahal, and (in unscheduled drop-in appearances) Bob Dylan. The club moved to 47 Palmer Street in 1963, was reorganized as Passim in 1969 under Bob and Rae Anne Donlin, was renamed Club Passim in 1994, and still operates at the Palmer Street address; the original Mount Auburn Street site is now renumbered 45\u00bd Mount Auburn Street."
  },

  /* ============================
     Module 5 Track 3: the Drifters and "Up on the Roof"
     ============================ */

  "rudy-lewis": {
    label: "Rudy Lewis (1936\u20131964)",
    definition: "American R&B singer (born Charles Rudolph Harrell, August 23, 1936, Philadelphia; died May 20, 1964, Harlem) and the lead vocalist of the Drifters from late 1960 through his death. Lewis came up entirely in gospel music: he was one of only two male singers ever in the Clara Ward Singers, the most commercially important Black gospel ensemble of the 1950s, and he was singing with Clara Ward up to the day before he auditioned for George Treadwell at Philadelphia\u2019s Uptown Theater in late 1960. Treadwell hired him on the spot to replace Ben E. King. Across his three and a half years with the Drifters, Lewis sang lead on \u201cPlease Stay\u201d (1961), \u201cSome Kind of Wonderful\u201d (1961), \u201cUp on the Roof\u201d (1962), and \u201cOn Broadway\u201d (1963). He was found dead in his Harlem hotel room on the morning the Drifters were scheduled to record \u201cUnder the Boardwalk,\u201d which had been written for him; Johnny Moore was rushed in to take the lead. Authorities ruled the death a probable drug overdose without conducting an autopsy. The Drifters\u2019 biographer Billy Vera, writing in the 1996 box-set liner notes for <em>Rockin\u2019 and Driftin\u2019</em>, was the first to publicly describe Lewis as a closeted gay man, a heroin user, and a sufferer from binge-eating disorder; this had been kept private during his lifetime. Lewis was inducted into the Rock and Roll Hall of Fame, as a Drifter, in 1988."
  },

  "george-treadwell": {
    label: "George Treadwell (1919\u20131967)",
    definition: "African American jazz trumpeter, artist manager, and the owner of the Drifters\u2019 name and trademark across the group\u2019s entire commercial peak. Treadwell played trumpet with the Cootie Williams and J.C. Heard bands in the 1940s, married Sarah Vaughan in 1947, and quit playing to manage her career; he later managed Ruth Brown and the Drifters as well. When Clyde McPhatter sold his half-interest in the Drifters\u2019 name to Treadwell on leaving the group in 1955, Treadwell became the sole owner of the trademark, with full authority to hire and fire group members. The vocalists who recorded under the Drifters name were Treadwell\u2019s salaried employees, not partners: they received weekly wages and no share of record royalties, no share of songwriting royalties, no share of the publishing, and no rights in the group\u2019s name. When Bill Pinkney asked for a raise in 1958, Treadwell fired him; when most of the rest of the lineup asked for raises later that year, he fired all of them and replaced them with the Five Crowns. The arrangement was unusual in the music industry for being so explicit, and it shaped every Drifters recording from \u201cThere Goes My Baby\u201d (1959) through Treadwell\u2019s death in 1967, including \u201cUp on the Roof\u201d (1962). On Treadwell\u2019s death his widow Faye took over the company; the family has retained ownership of the Drifters name into the twenty-first century."
  },

  "clara-ward-singers": {
    label: "Clara Ward Singers",
    definition: "The most commercially successful Black gospel vocal group of the 1950s, founded in Philadelphia in 1934 by Gertrude Ward and her two daughters, Willa and Clara. Clara Ward (1924\u20131973) was the lead singer and the group\u2019s musical director; her improvisatory melismatic style and her arrangements of traditional spirituals and contemporary gospel compositions were a major influence on Aretha Franklin (whose father, C.L. Franklin, was close friends with the Wards) and on most of the gospel-trained R&B and soul singers of the 1960s. The Clara Ward Singers were almost entirely women; Rudy Lewis was one of only two men ever to sing with the group. The Wards toured the gospel circuit constantly through the 1950s, recorded for Savoy and Vee-Jay, and crossed over to mainstream nightclub bookings in the late 1950s (Las Vegas residencies, the Newport Jazz Festival in 1957) in ways that drew criticism from more conservative figures in the gospel world."
  },

  "atlantic-records": {
    label: "Atlantic Records",
    definition: "American independent record label founded in New York in October 1947 by Ahmet Ertegun (the Istanbul-born son of the Turkish ambassador to the United States) and Herb Abramson, joined shortly afterward by Jerry Wexler and Ahmet\u2019s brother Nesuhi Ertegun. Atlantic became the most important American independent label specializing in rhythm and blues across the 1950s and 1960s, with a roster that ran from Ruth Brown, Big Joe Turner, the Drifters, and Ray Charles in the 1950s through Aretha Franklin, Otis Redding (through the Atlantic-Stax distribution arrangement), Wilson Pickett, and Solomon Burke in the 1960s. The label was sold to Warner-Seven Arts in 1967 for seventeen and a half million dollars; Ahmet Ertegun continued to run the label through the 1980s under the Warner corporate umbrella. The Drifters\u2019 entire commercial peak, including \u201cUp on the Roof\u201d (1962), was recorded for Atlantic."
  },

  "clyde-mcphatter": {
    label: "Clyde McPhatter (1932\u20131972)",
    definition: "African American R&B singer (born November 15, 1932, Durham, North Carolina; died June 13, 1972, Teaneck, New Jersey), one of the foundational tenor voices of postwar Black popular music. McPhatter was the lead singer of Billy Ward and his Dominoes from 1950 to early 1953; Atlantic\u2019s Ahmet Ertegun heard him at Birdland in May 1953, signed him on the spot, and let him form his own backing group, which became the original Drifters. McPhatter sang lead on the original Drifters\u2019 first hits (\u201cMoney Honey,\u201d 1953; \u201cHoney Love,\u201d 1954; \u201cWhite Christmas,\u201d 1954) before being drafted into the U.S. Army in May 1954. While stationed at Fort Dix, he sold his half-interest in the Drifters\u2019 name to manager George Treadwell and began a solo career on his release. His solo work (\u201cSeven Days,\u201d \u201cTreasure of Love,\u201d \u201cA Lover\u2019s Question\u201d) was commercially successful through the late 1950s and early 1960s, but he struggled with alcoholism through his later years and died at thirty-nine. McPhatter was the first Black artist inducted into the Rock and Roll Hall of Fame as a solo performer (1987), and the founding Drifters were inducted in 1988."
  },

  "ben-e-king": {
    label: "Ben E. King (1938\u20132015)",
    definition: "African American R&B and soul singer (born Benjamin Earl Nelson, September 28, 1938, Henderson, North Carolina; died April 30, 2015, Hackensack, New Jersey). King was the lead singer of the Five Crowns when George Treadwell hired the entire group to become the second Drifters in 1958; he sang lead on the first hits of the new Drifters (\u201cThere Goes My Baby,\u201d 1959; \u201cThis Magic Moment,\u201d 1960; \u201cSave the Last Dance for Me,\u201d 1960; \u201cI Count the Tears,\u201d 1960) before leaving the group for a solo career in mid-1960 over Treadwell\u2019s refusal to give him a raise. His solo singles for Atco (Atlantic\u2019s subsidiary), produced by Leiber and Stoller, included \u201cSpanish Harlem\u201d (1961) and \u201cStand by Me\u201d (1961, co-written with Leiber and Stoller and one of the most recorded songs in twentieth-century American popular music). King was inducted into the Rock and Roll Hall of Fame as a member of the Drifters in 1988."
  },

  "jerry-leiber": {
    label: "Jerry Leiber (1933\u20132011)",
    definition: "American songwriter and record producer (born April 25, 1933, Baltimore; died August 22, 2011, Los Angeles). Leiber wrote the lyrics; his lifelong songwriting partner Mike Stoller wrote the music. They began writing together as Los Angeles teenagers in 1950, sold \u201cHound Dog\u201d to Big Mama Thornton in 1952, and within a decade had written and produced a foundational catalogue of postwar American popular music: \u201cKansas City\u201d (Wilbert Harrison), \u201cJailhouse Rock\u201d and \u201cLoving You\u201d (Elvis Presley), \u201cYakety Yak,\u201d \u201cCharlie Brown,\u201d \u201cSearchin\u2019,\u201d and \u201cPoison Ivy\u201d (the Coasters), \u201cThere Goes My Baby,\u201d \u201cOn Broadway,\u201d and \u201cI Count the Tears\u201d (the Drifters), \u201cStand by Me\u201d and \u201cSpanish Harlem\u201d (Ben E. King). Leiber and Stoller were Jewish American, both children of Eastern European Jewish immigrants; Leiber grew up in a working-class Baltimore neighborhood where his mother ran a grocery store that served Black customers, and he learned the Black vernacular of his lyrics on the streets there. He and Stoller pushed the music industry to recognize the producer as a creative author rather than a studio technician, were the first rock-and-roll producers to receive on-record production credit, and were inducted into the Rock and Roll Hall of Fame in 1987."
  },

  "mike-stoller": {
    label: "Mike Stoller (b. 1933)",
    definition: "American songwriter and record producer (born Michael Stoller, March 13, 1933, Belle Harbor, Queens, New York). Stoller wrote the music; his lifelong songwriting partner Jerry Leiber wrote the lyrics. Stoller grew up in a Jewish family in Queens, took piano lessons from the Black stride pianist James P. Johnson as a child (one of the relatively few formal music-industry biographies to feature a documented cross-racial pre-teen apprenticeship), and studied music at Los Angeles City College before partnering with Leiber. The pair\u2019s 1959 production of the Drifters\u2019 \u201cThere Goes My Baby\u201d (which combined a Brazilian baion rhythm, kettledrums, and a five-piece string section with R&B vocal group instrumentation) effectively invented orchestral R&B as a commercial category and shaped the production of pretty much every Drifters recording that followed, including \u201cUp on the Roof.\u201d Stoller was inducted into the Rock and Roll Hall of Fame in 1987 with Leiber. He has continued composing and producing into his nineties."
  },

  "gary-sherman": {
    label: "Garry Sherman (1933\u20132014)",
    definition: "American arranger, conductor, and composer (born Garry Sherman, December 16, 1933, Brooklyn; died November 19, 2014). Sherman was one of the central staff arrangers at Atlantic Records and at Leiber and Stoller\u2019s production operation in the early 1960s. He scored and conducted the strings on most of the Drifters\u2019 Brill Building-era recordings, including \u201cUp on the Roof\u201d (1962), \u201cOn Broadway\u201d (1963), \u201cI\u2019ll Take You Home\u201d (1963), and others; his earlier credits include Solomon Burke and Ben E. King solo work for Atlantic. Sherman later moved into film scoring (he wrote the score for the 1969 film <em>Alice\u2019s Restaurant</em>) and continued working as a composer and producer through the rest of his career. His arrangements set the texture conventions that defined Atlantic\u2019s early-1960s orchestral R&B sound."
  },

  "there-goes-my-baby": {
    label: "\u201cThere Goes My Baby\u201d",
    definition: "The 1959 Drifters single, lead vocal by Ben E. King, that effectively invented orchestral R&B as a commercial category. Produced by Jerry Leiber and Mike Stoller and recorded at Coastal Studios in New York on March 6, 1959, with an unprecedented fifteen-musician backing band that included a five-piece string section, kettledrums, and a Brazilian baion rhythm pattern alongside the regular R&B rhythm section. Atlantic\u2019s Jerry Wexler heard the playback and is reported to have said it sounded like \u201ca radio caught between two stations\u201d; he and Ahmet Ertegun considered the recording unreleasable, but Leiber and Stoller\u2019s commercial track record on the Coasters and the Elvis Presley sessions earned the recording a single release in April 1959. It reached number two on the Billboard Hot 100 and number one on the R&B chart, and its production formula (string section + R&B vocal group + Latin-derived rhythm) became the template for the rest of the Drifters\u2019 1959-1964 Atlantic singles, including \u201cUp on the Roof\u201d (1962)."
  },

  "baion": {
    label: "Baion",
    definition: "A Brazilian rhythm pattern (baiao in Portuguese) from the northeastern Brazilian sertao, derived from the dance music of the rural interior of Pernambuco and neighboring states and made commercially central in mid-twentieth-century Brazil through the work of the accordionist and singer Luiz Gonzaga. The baion\u2019s characteristic pattern (an emphasized dotted-quarter beat followed by an eighth-note rest and a syncopated second-beat figure) entered American popular music in the late 1950s through Mike Stoller, who had heard the rhythm on a 1956 trip to Latin America and adapted it for the Drifters\u2019 \u201cThere Goes My Baby\u201d (1959) and most of the Drifters\u2019 subsequent Leiber-Stoller-produced recordings. The baion underpins \u201cUp on the Roof\u201d (1962), \u201cOn Broadway\u201d (1963), and Ben E. King\u2019s \u201cStand by Me\u201d (1961), among many others."
  },

  "kettledrum": {
    label: "Kettledrum",
    definition: "A large tunable drum, also called a timpani in classical-orchestra contexts, consisting of a copper or fiberglass bowl with a calfskin or plastic head stretched across the top. Unlike most drums, kettledrums are tuned to specific pitches (the player uses a foot pedal or hand-tightening mechanism to change the head tension and so the pitch); a classical orchestra typically uses two to four kettledrums tuned to different notes. Kettledrums had been a staple of European concert music since the eighteenth century but were essentially unheard in rhythm-and-blues recording before Leiber and Stoller put them on the Drifters\u2019 \u201cThere Goes My Baby\u201d in 1959; the kettledrum has been part of the Drifters\u2019 production sound ever since."
  },

  "string-section": {
    label: "String section",
    definition: "The portion of a band or orchestra that plays bowed string instruments: violins, violas, cellos, and double basses. In classical orchestras the string section is the largest single group of musicians (typically fifty to sixty players in a full symphony); in mid-twentieth-century popular music a \u201cstring section\u201d on a pop or R&B recording usually meant a much smaller ensemble (four to ten players, often without violas or basses) hired for a single session. Before 1959, string sections were heard on classical recordings, on Tin Pan Alley pop ballads, and on Broadway cast albums, but rarely on rhythm and blues. The Drifters\u2019 \u201cThere Goes My Baby\u201d (1959) was the first commercial R&B recording to build its production around a string section; the convention spread rapidly through Atlantic\u2019s 1960s output and into the broader pop-soul sound of the period."
  },

  "charlie-thomas": {
    label: "Charlie Thomas (1937\u20132023)",
    definition: "African American R&B singer (born Charles Nowlin Thomas, April 7, 1937, Lynchburg, Virginia; died January 31, 2023, Bowie, Maryland), tenor of the second Drifters lineup from 1958 until 1967. Thomas was a member of the Five Crowns when George Treadwell hired the entire group to replace the original Drifters in 1958; he sang on every Drifters recording across the group\u2019s commercial peak, including \u201cThere Goes My Baby\u201d (1959), \u201cSave the Last Dance for Me\u201d (1960), \u201cUp on the Roof\u201d (1962), and \u201cUnder the Boardwalk\u201d (1964), and sang lead on \u201cSweets for My Sweet\u201d (1961) and \u201cWhen My Little Girl Is Smiling\u201d (1962). After leaving the Treadwell-owned group in 1967, Thomas led his own splinter version of the Drifters in the long American nostalgia-circuit aftermath, touring almost continuously until the COVID-19 pandemic forced him to stop in 2020. He was inducted into the Rock and Roll Hall of Fame as a Drifter in 1988."
  },

  "tommy-evans": {
    label: "Tommy Evans (1927\u20131989)",
    definition: "African American R&B bass singer (born March 9, 1927, Philadelphia; died February 14, 1989), bass of the second Drifters lineup from 1958 through the mid-1960s. Evans had previously sung with the Ravens (replacing Jimmy Ricks in 1956) and was hired into the original Drifters in 1957 to fill the bass spot Bill Pinkney had occupied. He stayed when Treadwell fired the rest of the lineup in 1958 and became part of the Five Crowns-and-one new Drifters. Evans sang bass on \u201cUp on the Roof\u201d (1962) and most of the other Drifters Atlantic sides of the early 1960s."
  },

  "gene-pearson": {
    label: "Gene Pearson",
    definition: "African American R&B baritone singer (born Eugene Pearson, August 18, 1936, Brooklyn; died July 28, 2023), baritone of the Drifters from 1962 through 1966. Pearson had previously sung with the Cleftones, one of George Goldner\u2019s late-1950s doo-wop groups, before being brought into the Drifters in 1962 to overdub baritone parts and then replace Dock Green permanently. He sang on the second half of the \u201cUp on the Roof\u201d session (June 28, 1962) and on the Drifters recordings that followed through the mid-1960s, including \u201cOn Broadway\u201d (1963) and \u201cUnder the Boardwalk\u201d (1964)."
  },

  "george-duvivier": {
    label: "George Duvivier (1920\u20131985)",
    definition: "African American jazz double-bassist and arranger (born August 17, 1920, New York City; died July 11, 1985, Manhattan), one of the most-recorded bass players in twentieth-century American popular music. Duvivier came up through the big-band tradition: he toured with Lucky Millinder and Cab Calloway in the early 1940s, served in the U.S. Army as a non-commissioned officer in the Military Police during World War II, and was Jimmie Lunceford\u2019s staff arranger from 1945 until Lunceford\u2019s death in 1947. He was Bud Powell\u2019s bassist on <em>The Amazing Bud Powell, Vol. 2</em> (Blue Note, 1953), a member of the Eddie \u201cLockjaw\u201d Davis quartet with organist Shirley Scott from 1957 to 1959, and toured Europe with Lena Horne in the 1950s. From the late 1950s forward he worked primarily as a New York session player, recording with Sarah Vaughan, Eric Dolphy, Coleman Hawkins, Benny Goodman, Frank Sinatra, Count Basie, Hank Jones, Oliver Nelson, and several hundred other jazz, pop, R&B, and soundtrack dates. His playing on the Drifters\u2019 \u201cUp on the Roof\u201d session in June 1962 is one example of the cross-traffic between the New York jazz session circuit and the Brill Building pop recording scene: the bass parts on most of the early-1960s Atlantic and Aldon-era hits were played by jazz musicians who came up through the Black big-band tradition and then made most of their living on pop dates."
  },

  "gary-chester": {
    label: "Gary Chester (1924\u20131987)",
    definition: "American studio drummer (born Cesario Gurciullo, October 27, 1924, New York City, to Sicilian immigrant parents from Siracusa; died August 17, 1987, Suffern, New York), the most-booked session drummer on the East Coast through the 1960s and 1970s and Atlantic Records\u2019 effective house drummer across the Brill Building era. Chester grew up in Harlem, left school after the eighth grade to go on the road with a touring band, and by the late 1950s was working New York studio dates almost continuously; he is estimated to have played on more than fourteen thousand recording sessions across his career. His credits include the Drifters\u2019 \u201cSave the Last Dance for Me\u201d (1960), \u201cUp on the Roof\u201d (1962), \u201cOn Broadway\u201d (1963), and \u201cUnder the Boardwalk\u201d (1964); Ben E. King\u2019s \u201cStand by Me\u201d (1961); the Shirelles\u2019 \u201cWill You Love Me Tomorrow\u201d (1960); the Chiffons\u2019 \u201cHe\u2019s So Fine\u201d (1963); the Angels\u2019 \u201cMy Boyfriend\u2019s Back\u201d (1963); Dionne Warwick\u2019s \u201cWalk On By\u201d (1964) and most of her other Bacharach-and-David singles; Van Morrison\u2019s \u201cBrown Eyed Girl\u201d (1967); the Lovin\u2019 Spoonful and the Monkees catalogues; Simon and Garfunkel\u2019s \u201cThe Boxer\u201d (1969); and hundreds more. Chester occupied roughly the same position on the East Coast that Hal Blaine occupied on the West Coast, as the drummer whose playing defines the rhythmic feel of the era\u2019s pop records even though his name appears on very few of them. He spent the last decade of his life developing an independent-coordination drum-method system, published as <em>The New Breed</em> (Modern Drummer Publications, 1985), which has remained an influential drum-pedagogy text since."
  },

  "west-side-story": {
    label: "<em>West Side Story</em>",
    definition: "A Broadway musical that opened at the Winter Garden Theatre on September 26, 1957, with music by Leonard Bernstein, lyrics by Stephen Sondheim, book by Arthur Laurents, and choreography by Jerome Robbins. The story reframes Shakespeare\u2019s <em>Romeo and Juliet</em> as a feud between two New York street gangs, the white working-class Jets and the Puerto Rican Sharks, on the Upper West Side of Manhattan in the mid-1950s; the love story between Tony (a Jet) and Maria (a Shark\u2019s sister) plays out across tenement fire escapes, rooftops, and dance-hall floors. The 1961 film adaptation, directed by Robert Wise and Jerome Robbins, won ten Academy Awards including Best Picture. Gerry Goffin has said the film\u2019s rooftop imagery directly inspired the lyric of \u201cUp on the Roof,\u201d which he and Carole King were writing in 1962. The musical\u2019s production team was, like the Brill Building songwriting generation, largely Jewish American (Bernstein, Sondheim, Laurents, Robbins, and producer Hal Prince were all Jewish New Yorkers); its representation of Puerto Rican New York has been criticized and re-examined in subsequent productions, most recently in the 2021 Steven Spielberg film, which cast Latina and Latino actors in all the Puerto Rican roles and incorporated extended untranslated Spanish-language scenes."
  },

  "tenement": {
    label: "Tenement",
    definition: "A multifamily urban apartment building, originally a New York legal category, designed to house large numbers of people on small lots in working-class urban neighborhoods. The classic New York tenement of the 1880s through the 1920s was a five- or six-story walk-up brick building covering most of a 25-by-100-foot lot, with four small apartments on each floor sharing a common hallway, often without indoor plumbing, with minimal natural light to the interior apartments, and with a tar-papered flat roof that residents used for laundry, kitchen-garden plots in summer, sleeping in the heat, and (a feature both \u201cUp on the Roof\u201d and <em>West Side Story</em> draw on) for escape from the noise and the heat below. The 1879 New York Tenement House Act required new construction to include air shafts and outdoor windows (producing the \u201cdumbbell\u201d tenement form); the 1901 New New York Tenement House Act required indoor toilets, fire escapes, and proper ventilation. By 1962, when \u201cUp on the Roof\u201d was recorded, most of the surviving Manhattan tenement housing stock was concentrated in the Lower East Side, East Harlem, the Upper West Side, and the working-class outer-borough neighborhoods that had received the Italian, Polish, Jewish, and Black migrations of the previous half century."
  },

  "sarah-vaughan": {
    label: "Sarah Vaughan (1924\u20131990)",
    definition: "African American jazz singer (born March 27, 1924, Newark, New Jersey; died April 3, 1990, Hidden Hills, California), one of the great jazz vocalists of the postwar era. Vaughan won the Apollo Theater amateur night competition in 1942 and was hired by Earl Hines as a singer and second pianist; she sang with the Billy Eckstine orchestra (which included Charlie Parker and Dizzy Gillespie) in 1944-45 before launching a solo career that ran across the next four decades, with major recordings for Columbia, Mercury, Roulette, and Mainstream. Her vocal technique (a three-octave range, an unusually wide vibrato, and a contralto chest resonance) made her one of the most virtuosic singers of her generation; her interpretations of the Great American Songbook on the 1954 Mercury album <em>Sarah Vaughan</em> (with Clifford Brown) are central documents of postwar jazz singing. She was married to George Treadwell from 1947 to 1957, during which time Treadwell was her exclusive manager; Treadwell continued to manage her career after the divorce. Vaughan was inducted into the Jazz Hall of Fame in 1985 and won a posthumous Lifetime Achievement Grammy in 1989."
  },

  "the-shirelles": {
    label: "the Shirelles",
    definition: "African American girl group formed in 1957 at Passaic High School in Passaic, New Jersey, under the name the Poquellos by four classmates: Shirley Owens (b. June 10, 1941, Passaic; lead vocals), Doris Coley (b. August 2, 1941, Goldsboro, North Carolina; d. February 4, 2000), Addie \u201cMicki\u201d Harris (b. January 22, 1940, Passaic; d. June 10, 1982, Los Angeles, of a heart attack during a performance), and Beverly Lee (b. August 3, 1941, Passaic). The group entered a school talent show on a teacher\u2019s suggestion with an original song, \u201cI Met Him on a Sunday\u201d; a classmate, Mary Jane Greenberg, brought them home to audition for her mother Florence Greenberg, a white Jewish New Jersey housewife who had just started a small label called Tiara Records out of her living room. The Shirelles signed with Tiara in 1958, then followed Greenberg to Scepter Records, the larger label she founded in 1959, which she eventually moved to offices at 1650 Broadway in the same building as Aldon Music. Working with Greenberg and the African American producer-songwriter Luther Dixon, the Shirelles became the first African American girl group to reach number one on the Billboard Hot 100 with the Goffin-and-King song \u201cWill You Love Me Tomorrow\u201d in November 1960; \u201cDedicated to the One I Love\u201d (a cover of the Five Royales), \u201cMama Said,\u201d \u201cBaby It\u2019s You,\u201d \u201cSoldier Boy,\u201d and \u201cFoolish Little Girl\u201d followed across the next three years. Greenberg told the Shirelles that Scepter was holding their royalties in trust funds that they would receive on their twenty-first birthdays; when they reached the age and asked, the trusts did not exist. The group sued Scepter in 1964 for breach of contract, settled out of court in 1965, and were contractually unable to record for any other label during the litigation, which broke their commercial momentum at the exact moment Motown\u2019s Detroit girl groups (the Supremes, the Marvelettes, Martha and the Vandellas) were ascending. The original Shirelles were inducted into the Rock and Roll Hall of Fame in 1996. The trust-fund scam they were subjected to was a common extractive practice in the white-owned independent record industry of the 1950s and early 1960s, and the Shirelles\u2019 story is a touchstone example of how Black girl-group vocal labor on hit records of that period was systematically separated from the royalty income those records generated."
  },

};
