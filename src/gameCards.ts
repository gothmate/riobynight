export interface deckType {
    nome: string
    cla: string
    descricao: string
    imagem: string
    atributos: {
        fisico: number
        social: number
        mental: number
        disciplina: number
    }
}

const deckSabbat:deckType[] = [
    {
      nome: 'Ouros',
      cla: 'Ravnos',
      descricao: 'Ouros representa riqueza e prosperidade nas cartas de tarô, mas que pode trazer perigo ou ilusão. Ela se juntou ao Sabá durante os anos 50, buscando proteção contra a violência entre os clãs. Permaneceu fiel à seita mesmo após a queda do Arcebispo, mas, no fundo, sua verdadeira lealdade é consigo mesma.',
      imagem: '/images/ouros.png',
      atributos: { fisico: 3, social: 6, mental: 5, disciplina: 4 }
    },
    {
      nome: 'Espadas',
      cla: 'Lasombra',
      descricao: 'O nome verdadeiro de Espadas se perdeu no tempo, assim como a sua paciência. Filho de Teodoro, conheceu Ouros no século XVI, formando o bando Sabá do Castelo de Cartas',
      imagem: '/images/espadas.png',
      atributos: { fisico: 5, social: 3, mental: 4, disciplina: 5 }
    },
    {
      nome: 'Copas',
      cla: 'Toreador Antitribbu',
      descricao: 'Arthur sempre foi um golpista de coração. Cria de Camille, esse Toreador abandonado por sua Senhora, se envolveu com um Setita em algo profano.',
      imagem: '/images/copas.png',
      atributos: { fisico: 3, social: 4, mental: 2, disciplina: 3 }
    },
    {
      nome: 'Bibelô',
      cla: `Malkaviana Antitribbu`,
      descricao: 'De certo modo, o abuso moldou a existência de Bibelô desde sempre. À medida que crescia, uma sexualidade voraz sufocava suas inseguranças. Bibelô é cria de Cintia, e ninguém sabe o que ela passou sob sua tutela.',
      imagem: '/images/bibelo.png',
      atributos: { fisico: 4, social: 3, mental: 3, disciplina: 5 }
    },
    {
      nome: 'Porcelana',
      cla: `Pander`,
      descricao: 'A criatura conhecida como Porcelana pode ter sido um escultor ou artesão durante seus dias mortais. A maioria dos detalhes relativos à sua existência permanece desconhecida. A Besta o deixou louco, então esses detalhes provavelmente estão perdidos para sempre. Alguns mortos-vivos especulam que ele é um experimento doentio dos Tzimisce.',
      imagem: '/images/porcelana.png',
      atributos: { fisico: 4, social: 2, mental: 1, disciplina: 5 }
    },
    {
      nome: 'Sabrina',
      cla: `Lasombra`,
      descricao: 'Herdeira da Casa Roja, um bordel luxuoso. Sua avó morreu e deixou o estabelecimento para ela. Em um novembro frio, ela conheceu o Lasombra, Luciano que tornou-se seu Senhor.',
      imagem: '/images/sabrina.png',
      atributos: { fisico: 3, social: 4, mental: 2, disciplina: 3 }
    },
    {
      nome: 'Luciano',
      cla: `Lasombra`,
      descricao: 'Luciano entendeu que o ambiente mais regulamentado também é o mais corruptível. Quando o pacto foi forjado, Luciano supervisionou a maior parte dos campos de caça de Teodoro. A maioria dos vampiros se ressentia de sua ascensão meteórica ao poder.',
      imagem: '/images/luciano.png',
      atributos: { fisico: 4, social: 5, mental: 4, disciplina: 5 }
    },
    {
      nome: 'João e Maria',
      cla: `Panders`,
      descricao: 'Estes mórbidos gêmeos nasceram em uma família religiosa superprotetora. Inseparáveis, nunca vão participar de um conflito sozinhos.',
      imagem: '/images/joaomaria.png',
      atributos: { fisico: 4, social: 6, mental: 5, disciplina: 3 }
    },
    {
      nome: 'Acemira',
      cla: `Tzimisce`,
      descricao: 'Antes dos vampiros europeus entrarem no Brasil, Acemira já existia. Defini-la como a vampira mais antiga do país seria uma simplificação excessiva. Na densa Mata Atlântica, os índios Tupinambás a adoraram durante séculos. A tribo canibal costumava oferecer seu sangue e a deusa da noite e da dor os recompensava com vitórias e poderes bestiais.',
      imagem: '/images/acemira.png',
      atributos: { fisico: 7, social: 5, mental: 6, disciplina: 6 }
    },
    {
      nome: 'Feia',
      cla: `Tzimisce`,
      descricao: 'Silenciosa, violenta e desumana. Esses adjetivos acompanham Feia antes mesmo de se tornar uma guerreira temível do Sabá.',
      imagem: '/images/feia.png',
      atributos: { fisico: 4, social: 4, mental: 3, disciplina: 4 }
    },
    {
      nome: 'Dom Victor',
      cla: `Tzimisce`,
      descricao: 'Victor era um artesão no antigo Reino de Portugal. Quando seus patrocinadores se mudaram para o Brasil colonial, Victor os seguiu. Ficou conhecido por suas criações bizarras entre os Tzimisce.',
      imagem: '/images/dom_victor.png',
      atributos: { fisico: 7, social: 5, mental: 6, disciplina: 6 }
    },
    {
      nome: 'Penélope',
      cla: `Ventrue`,
      descricao: 'Seu nome incomoda muitos vampiros do Rio. Foram necessários vários anciões para sustentar o Pacto de São Sebastião, mas apenas uma neófita imprudente para mandar tudo pelos ares. Esta temível Ventrue antitribu tem um legado de caos, e ela o carrega com orgulho.',
      imagem: '/images/penelope.png',
      atributos: { fisico: 4, social: 3, mental: 5, disciplina: 6 }
    },
]
  
const deckCamarilla:deckType[] = [
    {
      nome: 'Cintia',
      cla: 'Malkaviana',
      descricao: 'A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática. Sob sua liderança, os Malkavianos assumiram a Lapa.',
      imagem: '/images/cintia.png',
      atributos: { fisico: 3, social: 5, mental: 5, disciplina: 6 }
    },
    {
      nome: 'Joseph',
      cla: 'Ventrue',
      descricao: 'Joseph especializou em comprar empresas quase falidas e reconstruí-las. Ele ajudou seu senhor a estabelecer um refúgio digno de sua linhagem: o suntuoso Copacabana Palace Resort. Primogenito Ventrue do Rio de Janeiro',
      imagem: '/images/joseph.png',
      atributos: { fisico: 3, social: 4, mental: 3, disciplina: 4 }
    },
    {
      nome: 'Valkiria',
      cla: 'Ventrue',
      descricao: 'Valkiria nasceu em uma família influente do Rio de Janeiro. Cria de Joseph, controla muitas organizações, incluindo empresas de transporte aéreo e aviação. A base de operações é o Galeão, o único aeroporto internacional na cidade.',
      imagem: '/images/valkiria.png',
      atributos: { fisico: 3, social: 4, mental: 3, disciplina: 2 }
    },
    {
      nome: 'Eric',
      cla: 'Ventrue',
      descricao: 'A maioria das pessoas luta para conseguir algo em suas vidas. Não Eric. Filho de um solteirão rico e influente, ele sempre teve tudo o que quis. Quando seu pai faleceu após uma overdose, ele herdou seus negócios e, mais importante, seus contatos.',
      imagem: '/images/eric.png',
      atributos: { fisico: 3, social: 3, mental: 3, disciplina: 4 }
    },
    {
      nome: 'Vicenzo',
      cla: 'Tremere',
      descricao: 'A família desse astrólogo pertencia a uma sociedade secreta perseguida pela igreja romana. Durante a Idade Média, Vicenzo desenvolveu suas teorias. Misturava matemática, astronomia, astrologia e observações sobre o comportamento humano.',
      imagem: '/images/vicente.png',
      atributos: { fisico: 3, social: 3, mental: 5, disciplina: 6 }
    },
    {
      nome: 'Sophia',
      cla: 'Tremere',
      descricao: 'Não se engane com a aparência de garotinha. Sophia não é ingênua nem inocente. Estranhos poderes cercaram sua existência muito antes do abraço. Desde seu nascimento em 1841, os escravos da fazenda pareciam nervosos com sua presença.',
      imagem: '/images/sofia.png',
      atributos: { fisico: 2, social: 4, mental: 4, disciplina: 5 }
    },
    {
      nome: 'Lispector',
      cla: 'Tremere',
      descricao: 'Apesar de ter sido abraçada apenas no final dos anos 1970, Lispector já desempenha um papel importante na Camarilla carioca. Assim que os Tremere se aliaram aos Toreador, os feiticeiros ganharam domínio sobre a Biblioteca Nacional. Amante da literatura, Lispector cuida deste Elysium habilmente.',
      imagem: '/images/lispector.png',
      atributos: { fisico: 3, social: 4, mental: 4, disciplina: 2 }
    },
    {
      nome: 'Anderson',
      cla: 'Nosferatu',
      descricao: 'A relação de Anderson com a verdade beira à obsessão. A maioria dos jornalistas busca informações como uma missão de seu ofício. Os motivos de Anderson são pessoais, inevitáveis e compulsivos. Ele simplesmente se sente compelido a desvendar os múltiplos ângulos de uma narrativa que captam sua curiosidade. Não importa o custo.',
      imagem: '/images/anderson.png',
      atributos: { fisico: 3, social: 4, mental: 4, disciplina: 3 }
    },
    {
      nome: 'Marquesa',
      cla: 'Nosferatu',
      descricao: 'A Primogênita dos Nosferatu é uma figura indescritível. Sua presença mórbida assombra o Rio desde o início dos tempos coloniais. Alguns acreditam que ela chegou depois dos primeiros exploradores.',
      imagem: '/images/marquesa.png',
      atributos: { fisico: 4, social: 4, mental: 5, disciplina: 5 }
    },
    {
      nome: 'Helena',
      cla: 'Giovanni',
      descricao: 'Durante os anos 20, o Rio era a capital do novo e do belo. A cidade atraiu muitos imigrantes, a família burguesa de Helena entre eles. Acostumada a uma vida de luxo, Helena desfrutou da efervescência da cidade. Helena se tornou uma vampira respeitada no Rio. Alguns poucos a procuram para contrabandear itens (ou aliados) para dentro ou fora da cidade em segredo.',
      imagem: '/images/helena.png',
      atributos: { fisico: 3, social: 5, mental: 3, disciplina: 4 }
    },
    {
      nome: 'Bianca',
      cla: 'Brujah',
      descricao: 'Primogênita Brujah de temperamento ousado e confiante. Embora a arrogância e a impulsividade a tornem imprópria para políticas cainitas, ela mais do que compensa isso no campo de batalha.',
      imagem: '/images/bianca.png',
      atributos: { fisico: 5, social: 4, mental: 3, disciplina: 4 }
    },
    {
      nome: 'Heitor',
      cla: 'Brujah',
      descricao: 'Na Lisboa do século XVII, Heitor era um intelectual em formação. Impressionado, o escrivão local levou o jovem como aprendiz. O tempo gasto com o burocrata tornou o jovem Heitor familiarizado com as intrigas da corte e as maquinações sociais.',
      imagem: '/images/heitor.png',
      atributos: { fisico: 4, social: 3, mental: 4, disciplina: 4 }
    },
    {
      nome: 'Sinfonia',
      cla: 'Filha da Cacofonia',
      descricao: 'A introspecção de Carolina sempre lhe rendeu um ar misterioso. Embora bem ligada ao seu universo interno, muitas vezes ela não tinha palavras para traduzi-lo corretamente. Na música ela encontrou seu próprio idioma.',
      imagem: '/images/sinfonia.png',
      atributos: { fisico: 2, social: 4, mental: 3, disciplina: 4 }
    },
    {
      nome: 'Fellini',
      cla: 'Gangrel',
      descricao: 'Durante os séculos XVI e XVII, o Brasil ainda era uma colônia em desenvolvimento. Seus territórios selvagens e desconhecidos escondiam perigos. Ainda assim, a promessa de fortuna e necessidade de expansão motivou os bandeirantes. Fellini era um deles.',
      imagem: '/images/fellini.png',
      atributos: { fisico: 5, social: 3, mental: 4, disciplina: 6 }
    },
    {
      nome: 'Lucas',
      cla: 'Gangrel',
      descricao: 'O lado perigoso do Rio de Janeiro fica fora dos cartões-postais, mas Lucas o conhecia em primeira mão. A mesma sociedade que aboliu a escravidão no Brasil marginalizou os afrodescendentes libertos. Sem empregos ou a simpatia pública, essas famílias pobres sobreviveram em guetos e favelas.',
      imagem: '/images/lucas.png',
      atributos: { fisico: 4, social: 3, mental: 3, disciplina: 3 }
    },
    {
      nome: 'Adriana',
      cla: 'Gangrel',
      descricao: 'O Rio de Janeiro apresenta uma mistura entre o natural e o urbano. Adriana é uma boa representação dessa fusão. Seguindo os passos de sua família, ela se tornou uma estudante de direito. No entanto, seu tempo livre foi gasto em trilhas e praias da zona sul. A paixão por atividades entre a natureza reforçava sua determinação e autoconfiança. Além disso, concedia-lhe um físico atlético imponente, incomum em sua profissão burocrática.',
      imagem: '/images/adriana.png',
      atributos: { fisico: 4, social: 3, mental: 4, disciplina: 2 }
    },
    {
      nome: 'Abutre',
      cla: 'Makaviano',
      descricao: 'Desde a juventude, Tomás tinha fixação pelo Exército e seu prestígio inerente. Seu esforço e habilidades físicas foram notados durante os testes militares, mas acabou rejeitado. Sua relutância em aceitar tal resultado chamou a atenção do coronel Cardoso. Tal dedicação certamente poderia servir a seus propósitos. O militar corrupto convidou Tomás para servir o país “informalmente” e o garoto aceitou imediatamente.',
      imagem: '/images/abutre.png',
      atributos: { fisico: 4, social: 2, mental: 4, disciplina: 3 }
    },
    {
      nome: 'Cipriano',
      cla: 'Nosferatu',
      descricao: 'Corrupção no Brasil não é um fenômeno novo, e Cipriano é uma prova disso. Como a maioria dos industriais brasileiros de sua época, Cipriano construiu sua riqueza sobre esquemas obscuros com agentes do governo, suborno e manobras questionáveis.',
      imagem: '/images/cipriano.png',
      atributos: { fisico: 3, social: 4, mental: 4, disciplina: 3 }
    },
    {
      nome: 'Andrew',
      cla: 'Setita',
      descricao: 'O que o início da era vitoriana celebrou como valores morais, Andrew amaldiçoou como hipocrisia. O jovem aristocrata gastou a juventude e a riqueza da família nos bordéis mais caros de Londres.Pivot do bizarro trato de Copas.',
      imagem: '/images/andrew.png',
      atributos: { fisico: 4, social: 3, mental: 3, disciplina: 5 }
    },
    {
      nome: 'Samira',
      cla: 'Setita',
      descricao: 'Mulher negra, nascida na periferia de São Paulo nos anos 60, Samira experimentou inúmeros preconceitos. Apesar disso (ou talvez por causa disso), ela cresceu interessada em História desde cedo.',
      imagem: '/images/samira.png',
      atributos: { fisico: 3, social: 4, mental: 3, disciplina: 3 }
    },
    {
      nome: 'Gregório',
      cla: 'Toreador',
      descricao: 'Gregorio era um artesão viajante na Ibéria do século XIV. Charmoso e astuto, ele era frequentemente atraído por damas “proibidas” - filhas de nobres, aristocratas ou jovens religiosas. Durante suas andanças, ele tentou cortejar a anciã Angela, na época mascarada de acompanhante de uma princesa portuguesa. A Toreador zombou da tentativa, mas sua ousadia a divertiu.',
      imagem: '/images/gregorio.png',
      atributos: { fisico: 6, social: 5, mental: 3, disciplina: 6 }
    },
    {
      nome: 'Maya',
      cla: 'Toreador',
      descricao: 'Maya cresceu em uma aldeia onde, hoje, fica o norte da Angola. Intrépida e carismática, mesmo em tenra idade, ela nunca se privou de se posicionar. Como escrava, tentou articular a força de trabalho escravizada. Seu magnetismo pessoal inspirou alguns de seus colegas. Infelizmente, isso também a fez ser notada pelos aristocratas. Como punição, a jovem teve sua língua cortada, silenciada para sempre.',
      imagem: '/images/maia.png',
      atributos: { fisico: 4, social: 3, mental: 3, disciplina: 4 }
    },
    {
      nome: 'Fernando',
      cla: 'Toreador',
      descricao: 'Mesmo em seus dias mortais, Fernando Vilas Boas era narcisista. O charmoso ator se acostumou a ter relacionamentos de curta duração com as mais cobiçadas estrelas. Entre os anos 20 e 30, diretores de teatro lutavam por ele. As peças estreladas pelo ator atraíam centenas de cariocas, e seu rosto vivia em cartazes e revistas da época. ',
      imagem: '/images/fernando.png',
      atributos: { fisico: 3, social: 4, mental: 3, disciplina: 3 }
    },
]

export {deckCamarilla, deckSabbat}