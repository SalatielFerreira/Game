// Banco de dados de palavras do jogo
const listaPalavras = [
  "TERMO","JOGAR","NOITE","SAGAZ","PODER","MUNDO","IDEIA","LIVRO","FESTA","BRAVO",
  "PORTA","TEMPO","VALOR","CORPO","CAMPO","CHAVE","PLANO","SONHO","AREIA","FOGO",
  "LUVAS","VENTO","ROCHA","PRATO","BRISA","TIGRE","LUCRO","VIGOR","NAVIO","SOLAR",
  "RAZAO","AMIGO","RISOS","FAROL","DENTE","NUVEM","SINAL","GRAFO","TRAJE","CUIDA",
  "CEDRO","MELAO","PISTA","FEIRA","TORRE","FALTA","CANTO","JUSTO","ETAPA","LENTA",
  "GRAMA","NOBRE","SALDO","BOLSA","CARRO","LINHA","VERSO","LARGO","CUSTO","RUMOR",
  "PLUMA","PEDRA","MORAL","FERRO","RITMO","CALMA","CLIMA","FURIA","MAGIA","PESCA",
  "BICHO","TROCA","ZONAS","LOUSA","CAUSA","SENHA","HONRA","JUIZO","REINO","PALCO",
  "DADOS","SELVA","FIBRA","METAL","VAPOR","PONTO","NORTE","SULCO","OESTE","LESTE",
  "MUSGO","FARSA","POMAR","VITAL","USINA","OPERA","CORAL","TENDA","FAIXA","TERRA",
  "BANCO","COFRE","VOTAR","CERTO","TRENO","PUDIM","MANHA","VIVER","MUITO","PENSA",
  "MESES","SORTE","AREAL","GRADE","FALAR","TRAMA","COISA","VULTO","PEIXE","GOLPE",
  "BANDA","LANCE","FRUTA","BUSCA","TREVO","LEGAL","DORAL","VILAO","CALDO","BRUTO",
  "CALCA","FORCA","GRUPO","POSTO","MODAL","CERCA","CURIO","AUREA","TINTA","TAVER",
  "FORNO","DUQUE","CARTA","BEIJO","GENRO","FUNDO","TURMA","ARENA","POETA","PONTA",
  "FIXAR","VAGOS","TOSCO","GIGAS","HERDA","BINGO","PENTA","FESTO","LIVRE","CURSO",
  "LIMPO","VILAS","FUSCA","DRAMA","PULAR","GENTE","MISTO","GRITO","LUGAR","BRIGA",
  "FALHA","BARCO","SUAVE","PROVA","MANSO","TAXAS","HARPA","MOSCA","CABOS","MUDAR",
  "CERNE","TOTAL","TREZE","VELOZ","LOCAL","AUDIO","ORGAO","RADIO","VIDEO","TEXTO",
  "IDOLO","MAGUA","SAUDE","DUBIO","EXAME","FONTE","FRASE","MIDIA","PAREO","MAFIA",
  "MOLHO","FORTE","FRITO","GOSTO","LOUCO","PRETO","VERDE","BRANC","AZUIS","CARGA",
  "FROTA","BORDA","TRILH","RELOJ","PEITO","COURO","FALSA","DORME","CORDA","BOMBA",
  "CAIXA","MONTE","COSTA","CENAS","DITOS","FACES","GRUDE","JEITO","LOMBO","MARCA",
  "NINHO","OTIMO","PASSO","QUEDA","ROUPA","SERIO","TUDO","URSOZ","VAZIO","ZELAR",
  "TRETO","PLACA","MURAL","FILME","FOCOZ","ATIVO","EXTRA","SUTIL","GOLFO","USUAL",
  "ALBUM","ALADO","ALGAS","ALMAS","ALTAR","ALTER","AMADO","AMBAR","AMIDO","AMORA",
  "ANOES","ANEXO","ANJOS","ANTES","ANTRO","APELO","APITO","APRES","APTOS","AQUEM",
  "ARAME","ARCAR","ARDOR","ARREO","ARTES","ASILO","ASTRO","ATLAS","ATRAZ","AUTOR",
  "AVISO","AVELA","AXILA","AZEDA","AZEVE","BABAR","BACIA","BAFOS","BAILE","BAIXO",
  "BALAS","BALDE","BALSA","BANHO","BANJO","BARBA","BARKA","BARRA","BARRO","BASES",
  "BASTA","BATOM","BEBER","BEICO","BELAS","BELOS","BENTO","BERCO","BERRO","BESTA",
  "BICOS","BIELA","BIGUA","BILHA","BISPO","BOATE","BOCAS","BODAS","BOIAR","BOLAS",
  "BOLOS","BOMBO","BONDE","BONES","BORRA","BOTAS","BOTAO","BRACO","BRASA","BREVE",
  "BRINS","BROCA","BROTO","BRUXA","BUCHA","BUNDA","BUEIRO","BUSTO","CABER","CABRA",
  "CACHO","CAFES","CAIDO","CAIRO","CAJUS","CALHA","CALOS","CALOR","CANAL","CANAS",
  "CANIL","CANOA","CAPAS","CAPAZ","CAPUT","CARAS","CARME","CARPA","CASAL","CASAS",
  "CASCO","CAUDA","CAULE","CAVAS","CEDER","CEGAS","CELAS","CENSO","CESTA","CESTO",
  "CHAPA","CHATO","CHEFE","CHEIO","CHILE","CHOCA","CHORO","CHOVE","CHULE","CHUPA",
  "CHUTE","CICLO","CIDRA","CIFRA","CINCO","CINZA","CIOSA","CIPOS","CIRCO","CISNE",
  "CITAR","CIVIL","CLARO","CLAVA","CLERO","CLIPE","CLORO","COQUE","COBRA","COCOS",
  "CORES","COICE","COITO","COLAR","COMER","COMUM","CONDE","CONES","CONTO","COPAS",
  "COPIA","COXAS","COXOS","CRAVO","CREDO","CREME","CRIME","CRISE","CRIVO","CROMA",
  "CRUEL","CRUZA","CUBOS","CUECA","CUICA","CUPIM","CURVA","CURVO","CUTIS","DAGAS",
  "DANCA","DANOS","DARDO","DATAS","DEBEL","DEDOS","DEIXA","DELTA","DEMAO","DENSO",
  "DEPOR","DEPUT","DERMA","DESCE","DESSE","DESTA","DETEM","DEUSA","DEVER","DIETA",
  "DIGNO","DIQUE","DIRIA","DISCO","DISSO","DIVAS","DIZER","DOBAR","DOCES","DOIDO",
  "DOZE","DORSO","DOSES","DOTES","DOUTO","DRAGA","DROGA","DUPLA","DUPLO","DURAR",
  "DUROS","DUVIDA","EIXOS","ELITE","ELVEM","EMBATE","EMBORA","EMULA","ENCHA","ENFIM",
  "ENTES","ENTAO","ENTRE","ENVIA","EPOCA","ERROS","ERVAS","ESCAL","ESCOS","ESPACO",
  "ESPIA","ESPOR","ESQUI","ESTAR","ESTES","ESTIO","ESTOU","ETANO","ETIQU","EVITA",
  "EXATA","EXILE","EXODO","EXITO","FADAS","FALAS","FALSO","FAMAS","FARDO","FATAL",
  "FATIA","FATOS","FAUNA","FAVOR","FECHO","FEDER","FEITO","FEIXE","FELIZ","FENDI",
  "FERAS","FEROZ","FERRA","FETOS","FEUDO","FIADO","FIAPO","FICHA","FIGAS","FIGOS",
  "FILHO","FINAL","FINAS","FINOS","FINTA","FIQUE","FIRMA","FISCO","FIVEL","FIXOS",
  "FLAMA","FLORA","FLUXO","FOCOS","FOLHA","FORMA","FORO","FOSSO","FOTOS","FRACO",
  "FRADE","FRAGA","FRAGU","FREIO","FRENE","FRENT","FRESA","FRETE","FRIAS","FRIOS",
  "FRUTO","FUGAZ","FUGIR","FUMAR","FUMOS","FUNGO","FUNIL","FURAR","FURNA","FUROR",
  "FURTO","FUSAO","FUSCO","FUSOS","FUSTE","FUTEL","FUTUR","GADOS","GAIOL","GAITA",
  "GALAS","GALAO","GALHO","GALOS","GAMAS","GANHA","GANHO","GARBO","GARCA","GARFO",
  "GARRA","GASES","GASTO","GEADA","GELOS","GEMER","GEMES","GENES","GERAL","GERAR",
  "GERES","GERME","GESSO","GESTA","GESTO","GIBIS","GIRAR","GIROS","GLOBO","GLOSA",
  "GOELA","GOLES","GOMAS","GOMES","GONZO","GORDA","GORDO","GOTAS","GOZAR","GRANA",
  "GRATA","GRATO","GRAUS","GRAVE","GRAXA","GRAXO","GREVE","GRIFO","GRILO","GRIPE",
  "GRUTA","GUETO","GUIAS","GUISA","GUITA","HABIL","HASTE","HAVER","HELIO","HIATO",
  "HIFEN","HINOS","HORAS","HORDA","HORTA","HOSCO","HOSTA","HOUVE","HUMOR","IAMOS",
  "ICONE","IDADE","IDEAL","IGUAL","ILHAS","IMENS","IMUNE","INDEX","INDIO","INFIA",
  "INFRA","INHAM","INICO","INJET","IRADO","IRMAO","ISCAS","ISOLA","ITENS","IVONE",
  "IXORA","JACAS","JALES","JANTA","JAPAO","JARRA","JARRO","JATOS","JAULA","JEJUM",
  "JERRI","JESUS","JIBOIA","JOGOS","JOIAS","JOQUE","JOVEM","JUDAS","JUDO","JUROS",
  "JUSTA","KRILL","LABIA","LACRE","LADOS","LADRA","LAGOA","LAGOS","LAICO","LAJES",
  "LAMAS","LAMBE","LAMPI","LANCA","LANCO","LAPIS","LARES","LARVA","LASCA","LASER",
  "LATAS","LATIM","LATIR","LAUDO","LAZER","LEOES","LEIGO","LEITE","LEITO","LEIVA",
  "LEMAS","LEMES","LENTE","LEQUE","LERDA","LERDO","LETRA","LEVAM","LEVAR","LEVES",
  "LEVIS","LIDAR","LIDOR","LIGAR","LIGAS","LIMBO","LIMES","LINCE","LINDA","LINDO",
  "LINHO","LIRAS","LIRIO","LISOS","LISTA","LITRO","LIXOS","LOBOS","LOCUS","LOGOS",
  "LOIRA","LOIRO","LOJAS","LONAS","LONGE","LOTES","LOTUS","LOUCA","LOURO","LUCHO",
  "LULAS","LUPAS","LUPUS","LUZES","MACIO","MACAS","MACHO","MADRE","MAEVE","MAGMA",
  "MAGNA","MAGNO","MAGOA","MAIOR","MAIRA","MAIS","MALAS","MALHA","MALTA","MAMAR",
  "MANAS","MANCO","MANDA","MANDO","MANGA","MANIA","MANSA","MANTA","MANTO","MAPAS",
  "MARCO","MARES","MARIA","MARRA","MARTA","MARTE","MASSA","MATAR","MATES","MATIZ",
  "MATOS","MAURO","MECHA","MEDIR","MEDOS","MEIAS","MEIGO","MEIOS","MELOS","MEMES",
  "MENOR","MENOS","MENTA","MENTE","MERCE","MERDA","MESAS","MESMA","MESMO","METAS",
  "METRO","MEXER","MICAS","MICOS","MICRO","MIEDO","MIGRE","MILHO","MIMAR","MIMOS",
  "MINAS","MINHA","MINIO","MIOLO","MIOPE","MIRAR","MIRAS","MISSA","MITOS","MIXER",
  "MODAS","MODEL","MODEM","MODOS","MOEDA","MOELA","MOFOS","MOLAR","MOLDE","MONGE",
  "MORAR","MORDA","MORRO","MORTE","MORTA","MORTO","MOTEL","MOTOR","MOTOS","MOURA",
  "MOURO","MOVEL","MOVER","MUDAS","MUDOS","MULAS","MULTA","MUROS","MURRO","MUSEU",
  "MUSSA","MUTUA","NADAR","NADAS","NAIPE","NANAR","NARIZ","NASAL","NATAL","NATAS",
  "NATOS","NAUAS","NAVAL","NEGAR","NEGAO","NEGRO","NELAS","NELES","NENEM","NENHUM",
  "NEONS","NERVO","NESSE","NESTA","NETAS","NETOS","NEVAR","NEVES","NEXOS","NICHO",
  "NIPES","NITRO","NIVEL","NODAL","NOIVA","NOIVO","NOMES","NONTO","NORMA","NOSSA",
  "NOSSO","NOTAS","NOTAR","NOVAS","NOVOS","NUNCA","OBRAS","OBTER","OBVIO","OCASO",
  "OCEAN","OCHOS","OCIOS","ODIAR","OITAV","OLEOS","OLHAR","OLHOS","OLIVA","OMBRO",
  "ONTEM","OPCAO","OPINA","OPOST","ORBIT","ORDEM","ORGIA","ORLAR","ORNAA","OSGAS",
  "OSSOS","OSTRA","OTICA","OUVIR","OUROS","OUTRA","OUTRO","OVELH","OVULO","OXIDA",
  "PABLO","PACAS","PACOA","PACTO","PADRE","PAGAR","PAGES","PAINE","PAIS","PALHA",
  "PALMA","PALMO","PAMPA","PANAS","PANDA","PANEL","PANOS","PAPAI","PAPAS","PAPEL",
  "PARAR","PARAS","PARDO","PARIR","PARIS","PARTE","PARTO","PASMO","PASTA","PASTO",
  "PATAS","PATOS","PAUSA","PAUTA","PAVIO","PAVAO","PECAR","PECAS","PEDAL","PEDIR",
  "PEDRO","PELAR","PELAS","PELES","PELOS","PENAS","PENAL","PENAR","PENCO","PENDE",
  "PENIS","PENTE","PERDA","PERDO","PERES","PERNA","PERTO","PERUA","PESAR","PESOS",
  "PESTE","PETIZ","PIADA","PIANO","PICAR","PICOS","PIEDO","PIERO","PIFAO","PILAR",
  "PILHA","PILOT","PINOS","PINTA","PINTO","PIORA","PIRES","PIRAO","PISAR","PISOS",
  "PIVOT","PIXEL","PLATA","PLEBE","PLENO","PNEUS","POBRE","POCOS","PODAR","PODIO",
  "POEMA","POLAR","POLIR","POLOS","POLVO","POMBA","POMBO","POMPA","PONTE","POPUL",
  "PORCO","PORES","PORTO","POSAR","POSSE","POSTE","POTES","POUCA","POUCO","POUSO",
  "POVAS","POVOO","PRADO","PRAGA","PRATA","PRAZO","PRECE","PRECO","PREGO","PRELO",
  "PRESA","PRESO","PREVE","PRIMA","PRIMO","PRUDO","PULAS","PULGA","PULOS","PULSO",
  "PUMAS","PUNHA","PUNHO","PUNIR","PURAS","PUROS","PUXAR","QUASE","QUERO","QUOTA",
  "RABOS","RACHA","RADAR","RAIAS","RAIVA","RAIZS","RAMAL","RAMOS","RAMPA","RANGO",
  "RASAS","RASOS","RASPA","REAIS","REBUS","RECOR","REDUZ","REFEM","REGIA","REGRA",
  "RELES","REMAA","RENDA","RENEU","REPOR","RESES","RESTO","RETER","RETRO","REUNI",
  "REVES","REVIS","REZAR","RIFAS","RIGOR","RIMAS","RIRIA","RISCO","RIVAS","ROBOS",
  "RODAS","RODEO","RODOU","ROGAR","ROJAS","ROLAS","ROLOS","ROMAA","ROMBO","RONCO",
  "RONDA","ROQUE","ROSAS","ROTAA","ROTAS","ROUBO","ROXOS","RUAAS","RUBRO","RUDES",
  "RUELA","RUGBY","RUIDO","RUINA","RUMOS","RURAL","RUSSO","SABER","SABIO","SABOR",
  "SACAS","SACOS","SACRA","SACRO","SADIO","SAFRA","SAIA","SAIDA","SAIR","SALAS",
  "SALMO","SALSA","SALTO","SALVA","SALVO","SAMBA","SANTO","SAPOS","SAQUE","SARAR",
  "SARCA","SEARA","SECOS","SEDEE","SEDER","SEDES","SEDIA","SEGUE","SEIVA","SELAO",
  "SELAR","SELAS","SELOS","SENAR","SENDA","SENSO","SENTI","SERAO","SERES","SERIA",
  "SERIE","SERRA","SERRO","SERVE","SERVI","SERVO","SESTA","SETAS","SETES","SEXTO",
  "SIAAS","SIGLA","SIGMA","SIGNO","SILVA","SINCO","SINES","SINTO","SIRIS","SISMA",
  "SITAR","SITIO","SITUA","SKATE","SOADO","SOBAR","SOBEO","SOBRA","SOBRE","SOCAS",
  "SOCIO","SOFAS","SOFRE","SOGRA","SOGRO","SOLDA","SOLDO","SOLOS","SOLTA","SOLTO",
  "SOMAS","SOMAR","SONDA","SONSO","SOPAS","SOPRO","SORRI","SOROS","SOUZA","SUCAR",
  "SUCHO","SUCOS","SUDOR","SUECO","SUGAR","SUICA","SUICO","SUIZA","SUSTO","TABUA",
  "TACAS","TACOS","TALAO","TALCO","TALHA","TALHO","TALOS","TAMPA","TANGA","TANGO",
  "TANTA","TANTO","TAPAR","TAPAS","TARDE","TARIF","TARJA","TASCA","TATUA","TAXIS",
  "TECER","TECLA","TEIAS","TEIMA","TEITO","TELAS","TELHA","TEMAS","TEMOR","TENAZ",
  "TENDE","TENIS","TENOR","TENRA","TENRO","TENSA","TENSO","TENTA","TENTO","TERAO",
  "TERCA","TERCO","TERIA","TERMA","TERME","TERNA","TERNO","TESAO","TESES","TESTA",
  "TESTE","TETAS","TETOS","TEXAS","TIARA","TIBIA","TICOS","TIJOL","TILDA","TIMAO",
  "TIMBO","TIMID","TINTO","TIPOS","TIRAR","TIRAS","TIRSO","TITAN","TITIA","TITIO",
  "TIVEM","TIVER","TOADA","TOCAR","TOCHA","TODAS","TODOS","TOGAS","TOLDA","TOLDO",
  "TOMAR","TOMBO","TONEL","TONS","TONTO","TOPAR","TOPOS","TOQUE","TORAS","TORCA",
  "TORCO","TORNA","TORNE","TORNO","TORRA","TORSO","TORTA","TORTO","TOSSE","TOUCA",
  "TOURO","TRACA","TRACO","TRAGA","TRAPO","TRATA","TRATO","TRAVE","TREM","TREVA",
  "TRIBO","TRIGO","TRINA","TRINO","TRIOS","TRIPA","TRIST","TROCO","TRONO","TROPA",
  "TROTE","TRUCO","TRUFA","TRUTA","TUBOS","TUMOR","TUMUL","TUNEL","TURBA","TURBO",
  "TURNO","TURVO","TUTOR","TUTUS","UFAAS","UIUUI","ULTRA","UNHAS","UNIAO","UNICA",
  "UNICO","UNIDA","UNIDO","UNIR","URANO","URINA","URNAS","URSAO","URSAS","URSOS",
  "URUBU","USADO","UTILE","VACAS","VACUO","VADIU","VAGAS","VALAS","VALER","VALES",
  "VALSA","VAMOS","VARAS","VARIA","VARIO","VARIZ","VASOS","VASTU","VASTO","VATES",
  "VAZAR","VEADO","VECES","VELAS","VELHA","VELHO","VEMAS","VENCE","VENDA","VENDO",
  "VENHA","VENIA","VENUS","VERAS","VERBA","VERBO","VERES","VERME","VERSA","VERTE",
  "VESPA","VESTE","VETAR","VETOR","VEZES","VIADO","VIAGS","VIBRA","VICIA","VICIO",
  "VIDAS","VIDRO","VIELA","VIGIA","VIMOS","VINDE","VINDO","VINTE","VIOLA","VIRAL",
  "VIRAR","VIRAS","VIRIA","VIRIL","VISAO","VISAR","VISOS","VISTA","VISTO","VIVA",
  "VIVOS","VOCES","VODKA","VOGAL","VOLTA","VOLTE","VOLTO","VOTOS","VOVOS","VOZES",
  "VULGO","XADRE","XALES","XAROP","XERAF","XERIF","XINGA","XISTO","XUCRO","ZANGA",
  "ZEBRA","ZELOS","ZEROS","ZINCO","ZORRA","ZUMBI"
];

// Variáveis de controle de estado do jogo
let palavraSecreta = "", tentativaAtual = 0, letraAtual = 0, palpiteAtual = "";
let tempoSegundos = 0, startTime = null, intervaloTimer, jogoAtivo = false, maxTentativas = 6, scoreTotal = 0, acertosSeguidos = 0;

// Salva o estado atual no armazenamento do navegador (LocalStorage)
function salvarDados() {
    const estado = { scoreTotal, acertosSeguidos, maxTentativas, palavraSecreta, tentativaAtual, letraAtual, palpiteAtual, tempoSegundos, startTime: localStorage.getItem('startTime'), jogoAtivo, historicoHTML: document.getElementById('lista-historico').innerHTML, tabuleiroHTML: document.getElementById('game-board').innerHTML, jogoEmAndamento: localStorage.getItem('jogoEmAndamento') };
    localStorage.setItem('palavraSecretaData', JSON.stringify(estado));
}

// Recupera dados salvos ao abrir a página
function carregarDados() {
    const salvo = JSON.parse(localStorage.getItem('palavraSecretaData'));
    if (salvo) {
        scoreTotal = salvo.scoreTotal; acertosSeguidos = salvo.acertosSeguidos; maxTentativas = salvo.maxTentativas;
        document.getElementById('score').innerText = scoreTotal; document.getElementById('streak').innerText = acertosSeguidos;
        document.getElementById('lista-historico').innerHTML = salvo.historicoHTML;
        document.querySelectorAll('.btn-dif').forEach(b => b.classList.remove('active'));
        if(maxTentativas == 10) document.getElementById('dif-facil').classList.add('active');
        else if(maxTentativas == 4) document.getElementById('dif-dificil').classList.add('active');
        else document.getElementById('dif-normal').classList.add('active');
        
        if (salvo.jogoEmAndamento === 'true') {
            document.getElementById('menu-inicial').style.display = "none";
            palavraSecreta = salvo.palavraSecreta; tentativaAtual = salvo.tentativaAtual; letraAtual = salvo.letraAtual; palpiteAtual = salvo.palpiteAtual; tempoSegundos = salvo.tempoSegundos; jogoAtivo = salvo.jogoAtivo;
            document.getElementById('game-board').innerHTML = salvo.tabuleiroHTML;
            // Reatribui eventos de clique após recarregar HTML do tabuleiro
            document.querySelectorAll('.tile').forEach(tile => { const parts = tile.id.split('-'); tile.onclick = () => selecionarTile(parseInt(parts[1]), parseInt(parts[2])); });
            gerarTeclado(); sincronizarTeclado(); continuarTimer(); atualizarDestaque();
            if (!jogoAtivo) mostrarBotoesFinais(palpiteAtual === palavraSecreta);
        }
    }
}

// Inicia uma sessão de jogo zerada
function startGame() { localStorage.setItem('jogoEmAndamento', 'true'); document.getElementById('menu-inicial').style.display = "none"; document.getElementById('lista-historico').innerHTML = ""; scoreTotal = 0; acertosSeguidos = 0; document.getElementById('score').innerText = "0"; document.getElementById('streak').innerText = "0"; initGame(); }

// Inicializa uma nova rodada (palavra nova)
function initGame() {
    palavraSecreta = listaPalavras[Math.floor(Math.random() * listaPalavras.length)].toUpperCase();
    tentativaAtual = 0; letraAtual = 0; palpiteAtual = ""; jogoAtivo = true; startTime = Date.now(); localStorage.setItem('startTime', startTime); tempoSegundos = 0;
    document.getElementById('message').innerHTML = ""; document.getElementById('btn-next').style.display = "none"; document.getElementById('btn-lose-menu').style.display = "none";
    const board = document.getElementById('game-board'); board.innerHTML = "";
    // Cria os quadrados do tabuleiro dinamicamente com base nas tentativas permitidas
    for (let i = 0; i < maxTentativas; i++) {
        let row = document.createElement('div'); row.className = 'row';
        for (let j = 0; j < 5; j++) { let tile = document.createElement('div'); tile.className = 'tile'; tile.id = `tile-${i}-${j}`; tile.onclick = () => selecionarTile(i, j); row.appendChild(tile); }
        board.appendChild(row);
    }
    gerarTeclado(); continuarTimer(); atualizarDestaque(); salvarDados();
}

// Seleção manual de qual letra preencher
function selecionarTile(r, c) { if (!jogoAtivo || r !== tentativaAtual) return; letraAtual = c; atualizarDestaque(); }

// Atualiza visualmente qual quadrado está selecionado
function atualizarDestaque() { document.querySelectorAll('.tile').forEach(t => t.classList.remove('selected')); if (jogoAtivo) { const tileAtiva = document.getElementById(`tile-${tentativaAtual}-${letraAtual}`); if (tileAtiva) tileAtiva.classList.add('selected'); } }

// Processa as teclas pressionadas no teclado virtual
function lidarComClique(t) {
    if (!jogoAtivo) return;
    const row = document.querySelectorAll(`#game-board .row`)[tentativaAtual]; const tiles = row.children;
    if (t === "Apagar") { tiles[letraAtual].innerText = ""; if (letraAtual > 0) letraAtual--; }
    else if (t === "Enviar") {
        let p = ""; for(let i=0; i<5; i++) p += tiles[i].innerText;
        if (p.length === 5) { palpiteAtual = p; validarPalpite(); }
        else { const m = document.getElementById('message'); m.innerText = "Complete a palavra!"; setTimeout(() => m.innerText = "", 1500); }
    } else if (t.length === 1) { tiles[letraAtual].innerText = t; if (letraAtual < 4) letraAtual++; }
    atualizarDestaque(); salvarDados();
}

// Lógica principal: compara o palpite do usuário com a palavra secreta
function validarPalpite() {
    let sec = palavraSecreta.split(''), pal = palpiteAtual.split('');
    const row = document.querySelectorAll(`#game-board .row`)[tentativaAtual]; const tiles = row.children;
    
    if (palpiteAtual === palavraSecreta) {
        jogoAtivo = false; tempoSegundos = Math.floor((Date.now() - parseInt(localStorage.getItem('startTime'))) / 1000);
        atualizarDestaque(); for (let i = 0; i < 5; i++) { tiles[i].className = 'tile correct'; atualizarTecla(pal[i], 'correct'); }
        vitoria();
    } else {
        // Primeira passada: marca letras corretas na posição correta
        for (let i = 0; i < 5; i++) { if (pal[i] === sec[i]) { tiles[i].classList.add('correct'); atualizarTecla(pal[i], 'correct'); sec[i] = null; pal[i] = null; } }
        // Segunda passada: marca letras que existem mas em posição errada ou ausentes
        for (let i = 0; i < 5; i++) { if (pal[i]) { let idx = sec.indexOf(pal[i]); if (idx > -1) { tiles[i].classList.add('present'); atualizarTecla(pal[i], 'present'); sec[idx] = null; } else { tiles[i].classList.add('absent'); atualizarTecla(pal[i], 'absent'); } } }
        tentativaAtual++; letraAtual = 0; palpiteAtual = ""; if (tentativaAtual === maxTentativas) derrota(); else atualizarDestaque();
    }
    salvarDados();
}

// Funções de finalização da rodada
function vitoria() { scoreTotal += (maxTentativas - tentativaAtual) * 100 + 100; acertosSeguidos++; registrarNoHistorico(true); mostrarBotoesFinais(true); }
function derrota() { jogoAtivo = false; tempoSegundos = Math.floor((Date.now() - parseInt(localStorage.getItem('startTime'))) / 1000); acertosSeguidos = 0; registrarNoHistorico(false); mostrarBotoesFinais(false); }

// Exibe mensagem de vitória/derrota e botões de ação
function mostrarBotoesFinais(v) {
    const m = document.getElementById('message');
    if (v) { m.innerHTML = `<div class="msg-status" style="color:var(--cor-correta)">VENCEU!</div><div class="msg-palavra">Palavra Chave: ${palavraSecreta}</div>`; document.getElementById('btn-next').style.display = "inline-block"; }
    else { m.innerHTML = `<div class="msg-status" style="color:var(--cor-perigo)">FIM DE JOGO!</div><div class="msg-palavra">palavra Chave: ${palavraSecreta}</div>`; document.getElementById('btn-lose-menu').style.display = "inline-block"; }
    document.getElementById('score').innerText = scoreTotal; document.getElementById('streak').innerText = acertosSeguidos;
}

// Vai para a próxima palavra mantendo pontos e combo
function proximaPalavra() { initGame(); }

// Gerenciamento do cronômetro
function continuarTimer() { clearInterval(intervaloTimer); const savedStart = localStorage.getItem('startTime'); startTime = savedStart ? parseInt(savedStart) : Date.now(); intervaloTimer = setInterval(() => { if (jogoAtivo) { tempoSegundos = Math.floor((Date.now() - startTime) / 1000); atualizarDisplayTimer(); } }, 1000); atualizarDisplayTimer(); }
function atualizarDisplayTimer() { let total = jogoAtivo ? Math.floor((Date.now() - startTime) / 1000) : tempoSegundos; let min = Math.floor(total / 60).toString().padStart(2, '0'); let seg = (total % 60).toString().padStart(2, '0'); document.getElementById('timer').innerText = `${min}:${seg}`; }

// Sincroniza as cores das teclas do teclado com o que já foi tentado no tabuleiro
function sincronizarTeclado() { document.querySelectorAll('.tile').forEach(t => { if (t.classList.contains('correct')) atualizarTecla(t.innerText, 'correct'); else if (t.classList.contains('present')) atualizarTecla(t.innerText, 'present'); else if (t.classList.contains('absent')) atualizarTecla(t.innerText, 'absent'); }); }
function atualizarTecla(l, c) { let b = document.getElementById(`key-${l}`); if (!b) return; if (c === 'correct') b.className = 'key correct'; else if (c === 'present' && !b.classList.contains('correct')) b.className = 'key present'; else if (c === 'absent' && !b.classList.contains('correct') && !b.classList.contains('present')) b.className = 'key absent'; }

// Renderiza o teclado QWERTY na tela
function gerarTeclado() { const kb = document.getElementById('keyboard'); kb.innerHTML = ""; const layout = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Enviar","Z","X","C","V","B","N","M","Apagar"]]; layout.forEach(l => { let div = document.createElement('div'); div.className = 'kb-row'; l.forEach(t => { let b = document.createElement('button'); b.className = 'key' + (t.length > 1 ? ' wide' : ''); b.innerText = t; b.id = `key-${t}`; b.onclick = () => lidarComClique(t); div.appendChild(b); }); kb.appendChild(div); }); }

// Adiciona o resultado da partida na lista de histórico
function registrarNoHistorico(vitoria) { const lista = document.getElementById('lista-historico'); const item = document.createElement('div'); item.className = 'hist-item'; item.innerHTML = `<span class="${vitoria ? 'hist-vitoria' : 'hist-derrota'}">${vitoria ? '✓' : '✗'} ${palavraSecreta}</span><br><small style="color:#666">⏱ ${document.getElementById('timer').innerText} | 🎯 ${tentativaAtual + (vitoria?1:0)}/${maxTentativas}</small>`; lista.prepend(item); }

// Define as tentativas baseadas no nível escolhido
function setDificuldade(t, el) { maxTentativas = t; document.querySelectorAll('.btn-dif').forEach(b => b.classList.remove('active')); el.classList.add('active'); salvarDados(); }

// Controle de abertura e fechamento de menus e modais
function abrirModalReset() { document.getElementById('modal-title').innerText = "Novo Jogo"; document.getElementById('modal-text').innerText = "Isso limpará seu histórico, pontos e combo!"; const btn = document.getElementById('modal-confirm-btn'); btn.onclick = confirmarReset; document.getElementById('modal-confirm').style.display = 'flex'; toggleSettings(); }
function abrirModalVoltar() { if (!jogoAtivo) { voltarAoMenu(); return; } document.getElementById('modal-title').innerText = "Voltar ao Menu"; document.getElementById('modal-text').innerText = "Você perderá o progresso da rodada atual!"; const btn = document.getElementById('modal-confirm-btn'); btn.onclick = voltarAoMenu; document.getElementById('modal-confirm').style.display = 'flex'; toggleSettings(); }
function fecharModal() { document.getElementById('modal-confirm').style.display = 'none'; }
function confirmarReset() { acertosSeguidos = 0; scoreTotal = 0; document.getElementById('score').innerText = "0"; document.getElementById('streak').innerText = "0"; document.getElementById('lista-historico').innerHTML = ""; fecharModal(); initGame(); }
function voltarAoMenu() { localStorage.setItem('jogoEmAndamento', 'false'); salvarDados(); location.reload(); }
function toggleSettings() { const m = document.getElementById('settings-menu'); m.style.display = m.style.display === 'block' ? 'none' : 'block'; }

// Fecha o menu de configurações se clicar fora dele
window.onclick = (e) => { if (!e.target.closest('#settings-container')) document.getElementById('settings-menu').style.display = 'none'; }
