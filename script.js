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
  "MUSGO","FARSA","POMAR","VITAL","USINA","OPERA","CORAL","TENDA","FAIXA","TERRA"
];
let palavraSecreta = "", tentativaAtual = 0, letraAtual = 0, palpiteAtual = "";
let tempoSegundos = 0, intervaloTimer, jogoAtivo = false, maxTentativas = 6, scoreTotal = 0, acertosSeguidos = 0;

function toggleSettings() {
    const m = document.getElementById('settings-menu');
    m.style.display = m.style.display === 'block' ? 'none' : 'block';
}

function setDificuldade(t, el) {
    maxTentativas = t;
    document.querySelectorAll('.btn-dif').forEach(b => { b.style.background="white"; b.style.color="black"; });
    el.style.background = "#2fa35bff"; el.style.color = "white";
}

function startGame() {
    document.getElementById('menu-inicial').style.display = "none";
    initGame();
}

function initGame() {
    palavraSecreta = listaPalavras[Math.floor(Math.random() * listaPalavras.length)].toUpperCase();
    tentativaAtual = 0; letraAtual = 0; palpiteAtual = ""; jogoAtivo = true;
    document.getElementById('message').innerText = "";
    document.getElementById('btn-next').style.display = "none";
    document.getElementById('btn-lose-menu').style.display = "none";
    
    const board = document.getElementById('game-board');
    board.innerHTML = "";
    for (let i = 0; i < maxTentativas; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 5; j++) {
            let tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}-${j}`;
            row.appendChild(tile);
        }
        board.appendChild(row);
    }
    gerarTeclado();
    startTimer();
}

function startTimer() {
    tempoSegundos = 0;
    clearInterval(intervaloTimer);
    intervaloTimer = setInterval(() => {
        tempoSegundos++;
        let min = Math.floor(tempoSegundos / 60).toString().padStart(2, '0');
        let seg = (tempoSegundos % 60).toString().padStart(2, '0');
        document.getElementById('timer').innerText = `${min}:${seg}`;
    }, 1000);
}

function gerarTeclado() {
    const kb = document.getElementById('keyboard');
    kb.innerHTML = "";
    const layout = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Enviar","Z","X","C","V","B","N","M","Apagar"]];
    layout.forEach(l => {
        let div = document.createElement('div');
        div.className = 'kb-row';
        l.forEach(t => {
            let b = document.createElement('button');
            b.className = 'key' + (t.length > 1 ? ' wide' : '');
            b.innerText = t;
            b.id = `key-${t}`;
            b.onclick = () => lidarComClique(t);
            div.appendChild(b);
        });
        kb.appendChild(div);
    });
}

function lidarComClique(t) {
    if (!jogoAtivo) return;
    if (t === "Apagar" && letraAtual > 0) {
        letraAtual--; palpiteAtual = palpiteAtual.slice(0, -1);
        document.getElementById(`tile-${tentativaAtual}-${letraAtual}`).innerText = "";
    } else if (t === "Enviar" && palpiteAtual.length === 5) {
        validarPalpite();
    } else if (t.length === 1 && letraAtual < 5) {
        document.getElementById(`tile-${tentativaAtual}-${letraAtual}`).innerText = t;
        palpiteAtual += t; letraAtual++;
    }
}

function validarPalpite() {
    let sec = palavraSecreta.split(''), pal = palpiteAtual.split('');
    for (let i = 0; i < 5; i++) {
        let t = document.getElementById(`tile-${tentativaAtual}-${i}`);
        if (pal[i] === sec[i]) {
            t.classList.add('correct');
            atualizarTecla(pal[i], 'correct');
            sec[i] = null; pal[i] = null;
        }
    }
    for (let i = 0; i < 5; i++) {
        if (pal[i]) {
            let t = document.getElementById(`tile-${tentativaAtual}-${i}`);
            let idx = sec.indexOf(pal[i]);
            if (idx > -1) {
                t.classList.add('present');
                atualizarTecla(pal[i], 'present');
                sec[idx] = null;
            } else {
                t.classList.add('absent');
                atualizarTecla(pal[i], 'absent');
            }
        }
    }
    if (palpiteAtual === palavraSecreta) {
        scoreTotal += (maxTentativas - tentativaAtual) * 100 + 100;
        acertosSeguidos++;
        registrarNoHistorico(true);
        endGame(true);
    } else {
        tentativaAtual++; letraAtual = 0; palpiteAtual = "";
        if (tentativaAtual === maxTentativas) {
            acertosSeguidos = 0;
            registrarNoHistorico(false);
            endGame(false);
        }
    }
    document.getElementById('score').innerText = scoreTotal;
    document.getElementById('streak').innerText = acertosSeguidos;
}

function atualizarTecla(l, c) {
    let b = document.getElementById(`key-${l}`);
    if (b && !b.classList.contains('correct')) {
        b.classList.remove('present', 'absent');
        b.classList.add(c);
    }
}

function registrarNoHistorico(vitoria) {
    const lista = document.getElementById('lista-historico');
    const tempo = document.getElementById('timer').innerText;
    const item = document.createElement('div');
    item.className = 'hist-item';
    item.innerHTML = `
        <span class="${vitoria ? 'hist-vitoria' : 'hist-derrota'}">${vitoria ? '✓' : '✗'} ${palavraSecreta}</span>
        <span style="color:#666">⏱ ${tempo} | 🎯 ${tentativaAtual + (vitoria ? 1 : 0)}/${maxTentativas}</span>
    `;
    lista.prepend(item);
}

function endGame(v) {
    jogoAtivo = false; clearInterval(intervaloTimer);
    const m = document.getElementById('message');
    if (v) {
        m.innerHTML = "<span style='color:green'>ACERTOU!</span>";
        document.getElementById('btn-next').style.display = "block";
    } else {
        m.innerHTML = `<span style='color:red'>GAME OVER</span><br><span style='font-size:0.9rem'>A palavra era: ${palavraSecreta}</span>`;
        document.getElementById('btn-lose-menu').style.display = "block";
    }
}

function abrirModalReset() { document.getElementById('modal-confirm').style.display = 'flex'; toggleSettings(); }
function fecharModal() { document.getElementById('modal-confirm').style.display = 'none'; }
function confirmarReset() { acertosSeguidos = 0; document.getElementById('streak').innerText = 0; initGame(); fecharModal(); }

// Fechar menu ao clicar fora
window.onclick = function(e) {
    if (!e.target.closest('#settings-container')) {
        const menu = document.getElementById('settings-menu');
        if (menu) menu.style.display = 'none';
    }
}