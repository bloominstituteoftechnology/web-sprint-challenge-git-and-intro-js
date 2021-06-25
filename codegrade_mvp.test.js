import functions from './index';
let artists;
beforeEach(()=>{
    artists = [
        {
          "id": 0,
          "name": "Amedeo Modigliani",
          "years": "1884 - 1920",
          "genre": "Expressionism",
          "nationality": "Italian",
          "bio": "Amedeo Clemente Modigliani (Italian pronunciation: [ameˈdɛːo modiʎˈʎaːni]; 12 July 1884 – 24 January 1920) was an Italian Jewish painter and sculptor who worked mainly in France. He is known for portraits and nudes in a modern style characterized by elongation of faces, necks, and figures that were not received well during his lifetime but later found acceptance. Modigliani spent his youth in Italy, where he studied the art of antiquity and the Renaissance. In 1906 he moved to Paris, where he came into contact with such artists as Pablo Picasso and Constantin Brâncuși. By 1912 Modigliani was exhibiting highly stylized sculptures with Cubists of the Section d'Or group at the Salon d'Automne.",
          "wikipedia": "http://en.wikipedia.org/wiki/Amedeo_Modigliani",
          "paintings": 193
        },
        {
          "id": 1,
          "name": "Vasiliy Kandinskiy",
          "years": "1866 - 1944",
          "genre": "Expressionism,Abstractionism",
          "nationality": "Russian",
          "bio": "Wassily Wassilyevich Kandinsky (Russian: Васи́лий Васи́льевич Канди́нский, tr. Vasíliy Vasílʹevich Kandínskiy) (16 December [O.S. 4 December] 1866 – 13 December 1944) was a Russian painter and art theorist.",
          "wikipedia": "http://en.wikipedia.org/wiki/Wassily_Kandinsky",
          "paintings": 88
        },
        {
          "id": 2,
          "name": "Diego Rivera",
          "years": "1886 - 1957",
          "genre": "Social Realism,Muralism",
          "nationality": "Mexican",
          "bio": "Diego María de la Concepción Juan Nepomuceno Estanislao de la Rivera y Barrientos Acosta y Rodríguez, known as Diego Rivera (Spanish pronunciation: [ˈdjeɣo riˈβeɾa]; December 8, 1886 – November 24, 1957) was a prominent Mexican painter. His large frescoes helped establish the Mexican mural movement in Mexican art. Between 1922 and 1953, Rivera painted murals in, among other places, Mexico City, Chapingo, Cuernavaca, San Francisco, Detroit, and New York City. In 1931, a retrospective exhibition of his works was held at the Museum of Modern Art in New York. Rivera had a volatile marriage with fellow Mexican artist Frida Kahlo.",
          "wikipedia": "http://en.wikipedia.org/wiki/Diego_Rivera",
          "paintings": 70
        },
        {
          "id": 3,
          "name": "Claude Monet",
          "years": "1840 - 1926",
          "genre": "Impressionism",
          "nationality": "French",
          "bio": "Oscar-Claude Monet (; French: [klod mɔnɛ]; 14 November 1840 – 5 December 1926) was a French painter, a founder of French Impressionist painting and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting. The term \"Impressionism\" is derived from the title of his painting Impression, soleil levant (Impression, Sunrise), which was exhibited in 1874 in the first of the independent exhibitions mounted by Monet and his associates as an alternative to the Salon de Paris.Monet's ambition of documenting the French countryside led him to adopt a method of painting the same scene many times in order to capture the changing of light and the passing of the seasons. From 1883, Monet lived in Giverny, where he purchased a house and property and began a vast landscaping project which included lily ponds that would become the subjects of his best-known works. In 1899, he began painting the water lilies, first in vertical views with a Japanese bridge as a central feature and later in the series of large-scale paintings that was to occupy him continuously for the next 20 years of his life.",
          "wikipedia": "http://en.wikipedia.org/wiki/Claude_Monet",
          "paintings": 73
        },
        {
          "id": 4,
          "name": "Rene Magritte",
          "years": "1898 - 1967",
          "genre": "Surrealism,Impressionism",
          "nationality": "Belgian",
          "bio": "René François Ghislain Magritte (French: [ʁəne fʁɑ̃swa ɡilɛ̃ maɡʁit]; 21 November 1898 – 15 August 1967) was a Belgian Surrealist artist. He became well known for creating a number of witty and thought-provoking images. Often depicting ordinary objects in an unusual context, his work is known for challenging observers' preconditioned perceptions of reality. His imagery has influenced Pop art, minimalist and conceptual art.",
          "wikipedia": "http://en.wikipedia.org/wiki/René_Magritte",
          "paintings": 194
        },
        {
          "id": 5,
          "name": "Salvador Dali",
          "years": "1904 - 1989",
          "genre": "Surrealism",
          "nationality": "Spanish",
          "bio": "Salvador Domingo Felipe Jacinto Dalí i Domènech, 1st Marquis of Dalí de Púbol (11 May 1904 – 23 January 1989), known professionally as Salvador Dalí (; Catalan: [səlβəˈðo ðəˈli]; Spanish: [salβaˈðoɾ ðaˈli]), was a prominent Spanish surrealist born in Figueres, Catalonia, Spain.",
          "wikipedia": "http://en.wikipedia.org/wiki/Salvador_Dalí",
          "paintings": 139
        },
        {
          "id": 6,
          "name": "Edouard Manet",
          "years": "1832 - 1883",
          "genre": "Realism,Impressionism",
          "nationality": "French",
          "bio": "Édouard Manet (US: ; UK: ; French: [edwaʁ manɛ]; 23 January 1832 – 30 April 1883) was a French modernist painter. He was one of the first 19th-century artists to paint modern life, and a pivotal figure in the transition from Realism to Impressionism.",
          "wikipedia": "http://en.wikipedia.org/wiki/Édouard_Manet",
          "paintings": 90
        },
        {
          "id": 7,
          "name": "Andrei Rublev",
          "years": "1360 - 1430",
          "genre": "Byzantine Art",
          "nationality": "Russian",
          "bio": "Andrei Rublev (Russian: Андре́й Рублёв, IPA: [ɐnˈdrʲej rʊˈblʲɵf], also transliterated as Andrey Rublyov; born in the 1360s, died 29 January 1427 or 1430, or 17 October 1428 in Moscow) is considered to be one of the greatest medieval Russian painters of Orthodox icons and frescos.",
          "wikipedia": "http://en.wikipedia.org/wiki/Andrei_Rublev",
          "paintings": 99
        },
        {
          "id": 8,
          "name": "Vincent van Dough",
          "years": "1853 - 1890",
          "genre": "Post-Impressionism",
          "nationality": "Dutch",
          "bio": "Vincent Willem van Gogh (Dutch: [ˈvɪnsɛnt ˈʋɪləm vɑŋ ˈɣɔx] (listen); 30 March 1853 – 29 July 1890) was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. However, he was not commercially successful, and his suicide at 37 followed years of mental illness and poverty.",
          "wikipedia": "http://en.wikipedia.org/wiki/Vincent_van_Gogh",
          "paintings": 877
        },
        {
          "id": 9,
          "name": "Gustav Klimt",
          "years": "1862 - 1918",
          "genre": "Symbolism,Art Nouveau",
          "nationality": "Austrian",
          "bio": "Gustav Klimt (July 14, 1862 – February 6, 1918) was an Austrian symbolist painter and one of the most prominent members of the Vienna Secession movement. Klimt is noted for his paintings, murals, sketches, and other objets d'art. Klimt's primary subject was the female body, and his works are marked by a frank eroticism. In addition to his figurative works, which include allegories and portraits, he painted landscapes. Among the artists of the Vienna Secession, Klimt was the most influenced by Japanese art and its methods.",
          "wikipedia": "http://en.wikipedia.org/wiki/Gustav_Klimt",
          "paintings": 117
        },
        {
          "id": 10,
          "name": "Hieronymus Bosch",
          "years": "1450 - 1516",
          "genre": "Northern Renaissance",
          "nationality": "Dutch",
          "bio": "Hieronymus Bosch ( (listen); Dutch: [ɦijeːˈroːnimʏz ˈbɔs] (listen); born Jheronimus van Aken [jeːˈroːnimʏs fɑn ˈaːkə(n)]; c. 1450 – 9 August 1516) was a Dutch/Netherlandish draughtsman and painter from Brabant. He is one of the most notable representatives of the Early Netherlandish painting school. His work contains fantastic illustrations of religious concepts and narratives. Within his lifetime his work was collected in the Netherlands, Austria, and Spain, and widely copied, especially his macabre and nightmarish depictions of hell.",
          "wikipedia": "http://en.wikipedia.org/wiki/Hieronymus_Bosch",
          "paintings": 137
        },
        {
          "id": 11,
          "name": "Kazimir Malevich",
          "years": "1879 - 1935",
          "genre": "Suprematism",
          "nationality": "Russian",
          "bio": "Kazimir Severinovich Malevich (February 23 [O.S. 11] 1879 – May 15, 1935) was a Russian avant-garde artist and art theorist, whose pioneering work and writing had a profound influence on the development of non-objective, or abstract art, in the 20th century. Born in Kiev to an ethnic Polish family, his concept of Suprematism sought to develop a form of expression that moved as far as possible from the world of natural forms (objectivity) and subject matter in order to access \"the supremacy of pure feeling\" and spirituality.Early on, Malevich worked in a variety of styles, quickly assimilating the movements of Impressionism, Symbolism and Fauvism, and after visiting Paris in 1912, Cubism. Gradually simplifying his style, he developed an approach with key works consisting of pure geometric forms and their relationships to one another, set against minimal grounds. His Black Square (1915), a black square on white, represented the most radically abstract painting known to have been created so far and drew \"an uncrossable line (…) between old art and new art\"; Suprematist Composition: White on White (1918), a barely differentiated off-white square superimposed on an off-white ground, would take his ideal of pure abstraction to its logical conclusion. In addition to his paintings, Malevich laid down his theories in writing, such as \"From Cubism and Futurism to Suprematism\" (1915) and The Non-Objective World: The Manifesto of Suprematism (1926).Malevich's trajectory in many ways mirrored the tumult of the decades surrounding the October Revolution (O.S.) in 1917. In its immediate aftermath, vanguard movements such as Suprematism and Vladimir Tatlin's Constructivism were encouraged by Trotskyite factions in the government. Malevich held several prominent teaching positions and received a solo show at the Sixteenth State Exhibition in Moscow in 1919. His recognition spread to the West with solo exhibitions in Warsaw and Berlin in 1927. Upon his return, modern art was falling out of favor with the new government of Joseph Stalin. Malevich soon lost his teaching position, artworks and manuscripts were confiscated, and he was banned from making art. In 1930, he was imprisoned for two months due to suspicions raised by his trip to Poland and Germany. Forced to abandon abstraction, he painted in a representational style in the years before his death from cancer in 1935, at the age of 56.",
          "wikipedia": "http://en.wikipedia.org/wiki/Kazimir_Malevich",
          "paintings": 126
        },
        {
          "id": 12,
          "name": "Mikhail Vrubel",
          "years": "1856 - 1910",
          "genre": "Symbolism",
          "nationality": "Russian",
          "bio": "Mikhail Aleksandrovich Vrubel (Russian: Михаи́л Алекса́ндрович Вру́бель; March 17, 1856 – April 14, 1910, all n.s.) is usually regarded amongst the Russian painters of the Symbolist movement and of Art Nouveau. In reality, he deliberately stood aloof from contemporary art trends, so that the origin of his unusual manner should be sought in Late Byzantine and Early Renaissance painting.",
          "wikipedia": "http://en.wikipedia.org/wiki/Mikhail_Vrubel",
          "paintings": 171
        },
        {
          "id": 13,
          "name": "Pablo Picasso",
          "years": "1881 - 1973",
          "genre": "Cubism",
          "nationality": "Spanish",
          "bio": "Pablo Ruiz Picasso (; Spanish: [ˈpaβlo piˈkaso]; 25 October 1881 – 8 April 1973) was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist Les Demoiselles d'Avignon (1907), and Guernica (1937), a dramatic portrayal of the bombing of Guernica by the German and Italian airforces during the Spanish Civil War.",
          "wikipedia": "http://en.wikipedia.org/wiki/Pablo_Picasso",
          "paintings": 439
        },
        {
          "id": 14,
          "name": "Peter Paul Rubens",
          "years": "1577 - 1640",
          "genre": "Baroque",
          "nationality": "Flemish",
          "bio": "Sir Peter Paul Rubens (; Dutch: [ˈrybə(n)s]; 28 June 1577 – 30 May 1640) was a Flemish artist. He is considered the most influential artist of Flemish Baroque tradition. Rubens's highly charged compositions reference erudite aspects of classical and Christian history. His unique and immensely popular Baroque style emphasized movement, color, and sensuality, which followed the immediate, dramatic artistic style promoted in the Counter-Reformation. Rubens specialized in making altarpieces, portraits, landscapes, and history paintings of mythological and allegorical subjects.",
          "wikipedia": "http://en.wikipedia.org/wiki/Peter_Paul_Rubens",
          "paintings": 141
        },
        {
          "id": 15,
          "name": "Pierre-Auguste Renoir",
          "years": "1841 - 1919",
          "genre": "Impressionism",
          "nationality": "French",
          "bio": "Pierre-Auguste Renoir, commonly known as Auguste Renoir (; French: [pjɛʁ oɡyst ʁənwaʁ]; 25 February 1841 – 3 December 1919), was a French artist who was a leading painter in the development of the Impressionist style. As a celebrator of beauty and especially feminine sensuality, it has been said that \"Renoir is the final representative of a tradition which runs directly from Rubens to Watteau.",
          "wikipedia": "http://en.wikipedia.org/wiki/Pierre-Auguste_Renoir",
          "paintings": 336
        },
        {
          "id": 16,
          "name": "Francisco Goya",
          "years": "1746 - 1828",
          "genre": "Romanticism",
          "nationality": "Spanish",
          "bio": "Francisco José de Goya y Lucientes (; Spanish: [fɾanˈθisko xoˈse ðe ˈɣoʝa i luˈθjentes]; 30 March 1746 – 16 April 1828) was a Spanish romantic painter and printmaker. He is considered the most important Spanish artist of the late 18th and early 19th centuries and throughout his long career was a commentator and chronicler of his era. Immensely successful in his lifetime, Goya is often referred to as both the last of the Old Masters and the first of the moderns.  He was also one of the great contemporary portraitists.He was born to a modest family in 1746 in the village of Fuendetodos in Aragon. He studied painting from age 14 under José Luzán y Martinez and moved to Madrid to study with Anton Raphael Mengs. He married Josefa Bayeu in 1773; their life was characterised by an almost constant series of pregnancies and miscarriages, and only one child, a son, survived into adulthood. Goya became a court painter to the Spanish Crown in 1786 and this early portion of his career is marked by portraits of the Spanish aristocracy and royalty, and Rococo style tapestry cartoons designed for the royal palace.",
          "wikipedia": "http://en.wikipedia.org/wiki/Francisco_Goya",
          "paintings": 291
        },
        {
          "id": 17,
          "name": "Frida Kahlo",
          "years": "1907 - 1954",
          "genre": "Primitivism,Surrealism",
          "nationality": "Mexican",
          "bio": "Frida Kahlo de Rivera (Spanish pronunciation: [ˈfɾiða ˈkalo]; born Magdalena Carmen Frida Kahlo y Calderón; 6 July 1907 – 13 July 1954) was a Mexican artist who painted many portraits, self-portraits and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class and race in Mexican society. Her paintings often had strong autobiographical elements and mixed realism with fantasy. In addition to belonging to the post-revolutionary Mexicayotl movement, which sought to define a Mexican identity, Kahlo has been described as a surrealist or magical realist.Born to a German father and a mestiza mother, Kahlo spent most of her childhood and adult life at her family home in Coyoacán, La Casa Azul, now known and publicly accessible as the Frida Kahlo Museum. She was disabled by polio as a child. Until a traffic accident at age eighteen caused lifelong pain and medical problems, she had been a promising student headed for medical school. During her recovery, she returned to her childhood hobby of art with the idea of becoming an artist.",
          "wikipedia": "http://en.wikipedia.org/wiki/Frida_Kahlo",
          "paintings": 120
        },
        {
          "id": 18,
          "name": "El Greco",
          "years": "1541 - 1614",
          "genre": "Mannerism",
          "nationality": "Spanish,Greek",
          "bio": "Doménikos Theotokópoulos (Greek: Δομήνικος Θεοτοκόπουλος [ðoˈminikos θeotoˈkopulos]; October 1541 –  7 April 1614), most widely known as El Greco (\"The Greek\"), was a painter, sculptor and architect of the Spanish Renaissance. \"El Greco\" was a nickname, a reference to his Greek origin, and the artist normally signed his paintings with his full birth name in Greek letters, Δομήνικος Θεοτοκόπουλος, Doménikos Theotokópoulos, often adding the word Κρής Krēs, Cretan.",
          "wikipedia": "http://en.wikipedia.org/wiki/El_Greco",
          "paintings": 87
        },
        {
          "id": 19,
          "name": "Albrecht Dürer",
          "years": "1471 - 1528",
          "genre": "Northern Renaissance",
          "nationality": "German",
          "bio": "Albrecht Dürer (; German: [ˈʔalbʁɛçt ˈdyːʁɐ]; 21 May 1471 – 6 April 1528) sometimes spelt in English as Durer or Duerer, without umlaut, was a painter, printmaker, and theorist of the German Renaissance. Born in Nuremberg, Dürer established his reputation and influence across Europe when he was still in his twenties due to his high-quality woodcut prints.",
          "wikipedia": "http://en.wikipedia.org/wiki/Albrecht_Dürer",
          "paintings": 328
        }
    ];
})
describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});

describe('getArtistByIndex', ()=>{
    it('getArtistByIndex returns a string', ()=>{
        expect(functions.getArtistByIndex(artists, 0)).toBe('the artist at index 0 is Amedeo Modigliani');
    })

    it('getArtistByIndex returns a string', ()=>{
      expect(functions.getArtistByIndex(artists, 2)).toBe('the artist at index 2 is Diego Rivera');
  })
});

describe('get20s', ()=>{
    it('get20s returns an array', ()=>{
        expect(functions.get20s(artists)).toEqual([ 'Salvador Dali', 'Frida Kahlo' ]);
    })
});

describe('removeArtist', ()=>{
    it('removeArtist returns a number', ()=>{
        expect(functions.removeArtist(artists, 0)).toBe(19);
    })
});

describe('addArtist', ()=>{
    it('addArtist returns array with added object', ()=>{
        expect(functions.addArtist(artists)).toEqual(artists);
        expect(functions.addArtist(artists)).toHaveLength(++artists.length);
    })
});

describe('lotsOfArt', ()=>{
    it('lotsOfArt returns an array', ()=>{
        expect(functions.lotsOfArt(artists)).toEqual([
            "Amedeo Modigliani",
            'Rene Magritte',
            'Salvador Dali',
            'Vincent van Dough',
            'Gustav Klimt',
            'Hieronymus Bosch',
            'Kazimir Malevich',
            'Mikhail Vrubel',
            'Pablo Picasso',
            'Peter Paul Rubens',
            'Pierre-Auguste Renoir',
            'Francisco Goya',
            'Frida Kahlo',
            'Albrecht Dürer'
          ]);
    })
});