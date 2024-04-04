function converteTemperatura(temperaturaAtual, escalaAtual, escalaConversao) {

    let temperaturaConvertida, msgErro = 'Ok';
    
    if (!isNaN(temperaturaAtual)) {
    
        escalaAtual = escalaAtual.toUpperCase();
        escalaConversao = escalaConversao.toUpperCase();
        
    
        if (escalaAtual === 'Cº') {
    
            if (escalaConversao === 'K') {
                temperaturaConvertida = temperaturaAtual + 273.15;
    
            } else if (escalaConversao === 'Fº') {
                temperaturaConvertida = (temperaturaAtual * 9 / 5) + 32;
    
            } else if (escalaConversao === 'Cº') {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
    
            } else {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
            }
    
        } else if (escalaAtual === 'Fº') {
    
            if (escalaConversao === 'K') {
                temperaturaConvertida = (temperaturaAtual + 459.67) * 5 / 9;
    
            } else if (escalaConversao === 'Cº') {
                temperaturaConvertida = (temperaturaAtual - 32) * 5 / 9;
    
            } else if (escalaConversao === 'Fº') {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
    
            } else {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
            }
    
        } else if (escalaAtual === 'K') {
    
            if (escalaConversao === 'Cº') {
                temperaturaConvertida = temperaturaAtual - 273.15;
    
            } else if (escalaConversao === 'Fº') {
                temperaturaConvertida = temperaturaAtual * 9 / 5 - 459.67;
    
            } else if (escalaConversao === 'K') {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
    
            } else {
                msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
            }
    
        } else {
            msgErro = `ERRO: Escala ATUAL selecionada: ${escalaAtual}. A escala ATUAL não existe ou não está disponível neste programa.`;
        }
    
    } else {
        msgErro = 'ERRO: O número digitado para conversão não é um número válido.';
    }

    // retornando em JSON - JavaScript Object Notation
    return {
        temperaturaAtual: temperaturaAtual,
        escalaAtual: escalaAtual,
        escalaConversao: escalaConversao,
        temperaturaConvertida: temperaturaConvertida,
        msgErro: msgErro
    }; 

}