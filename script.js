const listaPalavras = ["TERMO","JOGAR","NOITE","SAGAZ","PODER","MUNDO","IDEIA","LIVRO",
"FESTA","BRAVO","PORTA","TEMPO","VALOR","CORPO","CAMPO","CHAVE","PLANO","SONHO","AREIA",
"FOGO","LUVAS","VENTO","ROCHA","PRATO","BRISA","TIGRE","LUCRO","VIGOR","NAVIO","SOLAR",
"RAZAO","AMIGO","RISOS","FAROL","DENTE","NUVEM","SINAL","GRAFO","TRAJE","CUIDA","CEDRO",
"MELAO","PISTA","FEIRA","TORRE","FALTA","CANTO","JUSTO","ETAPA","LENTA","GRAMA","NOBRE",
"SALDO","BOLSA","CARRO","LINHA","VERSO","LARGO","CUSTO","RUMOR","PLUMA","PEDRA","MORAL",
"FERRO","RITMO","CALMA","CLIMA","FURIA","MAGIA","PESCA","BICHO","TROCA","ZONAS","LOUSA",
"CAUSA","SENHA","HONRA","JUIZO","REINO","PALCO","DADOS","SELVA","FIBRA","METAL","VAPOR",
"PONTO","NORTE","SULCO","OESTE","LESTE","MUSGO","FARSA","POMAR","VITAL","USINA","OPERA",
"CORAL","TENDA","FAIXA","TERRA"];

let palavraSecreta = "", tentativaAtual = 0, letraAtual = 0, palpiteAtual = "";
let tempoSegundos = 0, intervaloTimer, jogoAtivo = false, maxTentativas = 6, scoreTotal = 0, acertosSeguidos = 0;

function salvarDados() {
    const estado = {
        scoreTotal,
        acertosSeguidos,
        maxTentativas,
        palavraSecreta,
        tentativaAtual,
        letraAtual,
        palpiteAtual,
        tempoSegundos,
        jogoAtivo,
        historicoHTML: document.getElementById('lista-historico').innerHTML,
        tabuleiroHTML: document.getElementById('game-board').innerHTML,
        jogoEmAndamento: localStorage.getItem('jogoEmAndamento') 
    };
    localStorage.setItem('palavraSecretaData', JSON.stringify(estado));
}

function carregarDados() {
    const salvo = JSON.parse(localStorage.getItem('palavraSecretaData'));
    if (salvo) {
        scoreTotal = salvo.scoreTotal;
        acertosSeguidos = salvo.acertosSeguidos;
        maxTentativas = salvo.maxTentativas;
        document.getElementById('score').innerText = scoreTotal;
        document.getElementById('streak').innerText = acertosSeguidos;
        document.getElementById('lista-historico').innerHTML = salvo.historicoHTML;

        if (salvo.jogoEmAndamento === 'true') {
            document.getElementById('menu-inicial').style.display = "none";
            palavraSecreta = salvo.palavraSecreta;
            tentativaAtual = salvo.tentativaAtual;
            letraAtual = salvo.letraAtual;
            palpiteAtual = salvo.palpiteAtual;
            tempoSegundos = salvo.tempoSegundos;
            jogoAtivo = salvo.jogoAtivo;
            document.getElementById('game-board').innerHTML = salvo.tabuleiroHTML;
            
            gerarTeclado();
            sincronizarTeclado();
            continuarTimer();
            
            if (!jogoAtivo) mostrarBotoesFinais(palpiteAtual === palavraSecreta);
        }
    }
}

function startGame() {
    localStorage.setItem('jogoEmAndamento', 'true');
    document.getElementById('menu-inicial').style.display = "none";
    
    document.getElementById('lista-historico').innerHTML = "";
    scoreTotal = 0;
    acertosSeguidos = 0;
    document.getElementById('score').innerText = "0";
    document.getElementById('streak').innerText = "0";
    
    initGame();
}

function initGame() {
    palavraSecreta = listaPalavras[Math.floor(Math.random() * listaPalavras.length)].toUpperCase();
    tentativaAtual = 0; letraAtual = 0; palpiteAtual = ""; jogoAtivo = true; tempoSegundos = 0;
    document.getElementById('message').innerText = "";
    document.getElementById('btn-next').style.display = "none";
    document.getElementById('btn-lose-menu').style.display = "none";
    
    const board = document.getElementById('game-board');
    board.innerHTML = "";
    for (let i = 0; i < maxTentativas; i++) {
        let row = document.createElement('div'); row.className = 'row';
        for (let j = 0; j < 5; j++) {
            let tile = document.createElement('div'); tile.className = 'tile';
            tile.id = `tile-${i}-${j}`; row.appendChild(tile);
        }
        board.appendChild(row);
    }
    gerarTeclado();
    continuarTimer();
    salvarDados();
}

function proximaPalavra() {
    initGame();
}

function continuarTimer() {
    clearInterval(intervaloTimer);
    intervaloTimer = setInterval(() => {
        if (jogoAtivo) {
            tempoSegundos++;
            atualizarDisplayTimer();
            if (tempoSegundos % 5 === 0) salvarDados();
        }
    }, 1000);
    atualizarDisplayTimer();
}

function atualizarDisplayTimer() {
    let min = Math.floor(tempoSegundos / 60).toString().padStart(2, '0');
    let seg = (tempoSegundos % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${min}:${seg}`;
}

function lidarComClique(t) {
    if (!jogoAtivo) return;
    const tiles = document.querySelectorAll(`#game-board .row`)[tentativaAtual].children;

    if (t === "Apagar" && letraAtual > 0) {
        letraAtual--; 
        palpiteAtual = palpiteAtual.slice(0, -1);
        tiles[letraAtual].innerText = "";
    } else if (t === "Enviar" && palpiteAtual.length === 5) {
        validarPalpite();
    } else if (t.length === 1 && letraAtual < 5) {
        tiles[letraAtual].innerText = t;
        palpiteAtual += t; 
        letraAtual++;
    }
    salvarDados();
}

function validarPalpite() {
    let sec = palavraSecreta.split(''), pal = palpiteAtual.split('');
    const tiles = document.querySelectorAll(`#game-board .row`)[tentativaAtual].children;

    for (let i = 0; i < 5; i++) {
        if (pal[i] === sec[i]) {
            tiles[i].classList.add('correct');
            atualizarTecla(pal[i], 'correct');
            sec[i] = null; pal[i] = null;
        }
    }
    for (let i = 0; i < 5; i++) {
        if (pal[i]) {
            let idx = sec.indexOf(pal[i]);
            if (idx > -1) {
                tiles[i].classList.add('present');
                atualizarTecla(pal[i], 'present');
                sec[idx] = null;
            } else {
                tiles[i].classList.add('absent');
                atualizarTecla(pal[i], 'absent');
            }
        }
    }

    if (palpiteAtual === palavraSecreta) {
        vitoria();
    } else {
        tentativaAtual++; letraAtual = 0; palpiteAtual = "";
        if (tentativaAtual === maxTentativas) derrota();
    }
    salvarDados();
}

function vitoria() {
    jogoAtivo = false;
    scoreTotal += (maxTentativas - tentativaAtual) * 100 + 100;
    acertosSeguidos++;
    registrarNoHistorico(true);
    mostrarBotoesFinais(true);
}

function derrota() {
    jogoAtivo = false;
    acertosSeguidos = 0;
    registrarNoHistorico(false);
    mostrarBotoesFinais(false);
}

function mostrarBotoesFinais(v) {
    const m = document.getElementById('message');
    if (v) {
        m.innerHTML = "<span style='color:var(--cor-correta)'>VENCEU!</span>";
        document.getElementById('btn-next').style.display = "inline-block";
    } else {
        m.innerHTML = `<span style='color:var(--cor-perigo)'>FIM DE JOGO! <br> 
            Palavra Secreta: ${palavraSecreta}</span>`;
        document.getElementById('btn-lose-menu').style.display = "inline-block";
    }
    document.getElementById('score').innerText = scoreTotal;
    document.getElementById('streak').innerText = acertosSeguidos;
}

function sincronizarTeclado() {
    const todasTiles = document.querySelectorAll('.tile');
    todasTiles.forEach(t => {
        if (t.classList.contains('correct')) atualizarTecla(t.innerText, 'correct');
        else if (t.classList.contains('present')) atualizarTecla(t.innerText, 'present');
        else if (t.classList.contains('absent')) atualizarTecla(t.innerText, 'absent');
    });
}

function atualizarTecla(l, c) {
    let b = document.getElementById(`key-${l}`);
    if (!b) return;
    if (c === 'correct') { b.className = 'key correct'; }
    else if (c === 'present' && !b.classList.contains('correct')) { b.className = 'key present'; }
    else if (c === 'absent' && !b.classList.contains('correct') && !b.classList.contains('present')) { b.className = 'key absent'; }
}

function gerarTeclado() {
    const kb = document.getElementById('keyboard'); kb.innerHTML = "";
    const layout = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Enviar","Z","X","C","V","B","N","M","Apagar"]];
    layout.forEach(l => {
        let div = document.createElement('div'); div.className = 'kb-row';
        l.forEach(t => {
            let b = document.createElement('button');
            b.className = 'key' + (t.length > 1 ? ' wide' : '');
            b.innerText = t; b.id = `key-${t}`;
            b.onclick = () => lidarComClique(t);
            div.appendChild(b);
        });
        kb.appendChild(div);
    });
}

function registrarNoHistorico(vitoria) {
    const lista = document.getElementById('lista-historico');
    const item = document.createElement('div'); item.className = 'hist-item';
    item.innerHTML = `
        <span class="${vitoria ? 'hist-vitoria' : 'hist-derrota'}">${vitoria ? '✓' : '✗'} ${palavraSecreta}</span>
        <br><small style="color:#666">⏱ ${document.getElementById('timer').innerText} | 🎯 ${tentativaAtual + (vitoria?1:0)}/${maxTentativas}</small>
    `;
    lista.prepend(item);
}

function setDificuldade(t, el) {
    maxTentativas = t;
    document.querySelectorAll('.btn-dif').forEach(b => { b.style.background="white"; b.style.color="black"; });
    el.style.background = "#c9b458"; el.style.color = "white";
    salvarDados();
}

function voltarAoMenu() {
    localStorage.setItem('jogoEmAndamento', 'false');
    salvarDados();
    location.reload();
}

function toggleSettings() {
    const m = document.getElementById('settings-menu');
    m.style.display = m.style.display === 'block' ? 'none' : 'block';
}

function abrirModalReset() { document.getElementById('modal-confirm').style.display = 'flex'; toggleSettings(); }
function fecharModal() { document.getElementById('modal-confirm').style.display = 'none'; }

function confirmarReset() { 
    acertosSeguidos = 0; 
    scoreTotal = 0;
    document.getElementById('score').innerText = "0";
    document.getElementById('streak').innerText = "0";
    document.getElementById('lista-historico').innerHTML = ""; 
    
    fecharModal(); 
    initGame(); 
}

window.onclick = (e) => { if (!e.target.closest('#settings-container')) document.getElementById('settings-menu').style.display = 'none'; }
