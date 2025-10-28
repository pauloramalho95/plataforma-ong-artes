/* ================================================= */
/* MÓDULO: VALIDACAO.JS - MÁSCARAS E VALIDAÇÃO DE FORMULÁRIO */
/* Requisito: Sistema de verificação de consistência de dados (Máscaras e Validação) */
/* ================================================= */

// ----------------------------------------------------
// 1. HELPER PARA FORMATAR (Aplicar a Máscara)
// ----------------------------------------------------
function formatInput(input, mask) {
    // Retira todos os caracteres não numéricos
    let value = input.value.replace(/\D/g, "");
    let maskedValue = "";
    let k = 0; // Contador para a string de valor

    for (let i = 0; i < mask.length; i++) {
        if (k >= value.length) {
            break;
        }
        
        // Se o caractere da máscara for um placeholder (9)
        if (mask[i] === "9") {
            maskedValue += value[k];
            k++;
        } 
        // Se for um caractere fixo (., -, /), adiciona o caractere
        else {
            maskedValue += mask[i];
        }
    }
    
    // Atualiza o valor do campo com a máscara
    input.value = maskedValue;
}

// ----------------------------------------------------
// 2. FUNÇÕES ESPECÍFICAS DE MÁSCARA (Com base nos requisitos do HTML)
// ----------------------------------------------------

function maskCPF(e) {
    // Máscara: 999.999.999-99
    formatInput(e.target, "999.999.999-99");
}

function maskTelefone(e) {
    // Máscara: (99) 99999-9999 (para celular com 9º dígito)
    // Verifica o tamanho para aplicar a máscara correta (8 ou 9 dígitos)
    let mask = (e.target.value.length <= 14) ? "(99) 9999-9999" : "(99) 99999-9999";
    formatInput(e.target, mask);
}

function maskCEP(e) {
    // Máscara: 99999-999
    formatInput(e.target, "99999-999");
}

// ----------------------------------------------------
// 3. VALIDAÇÃO DE CONSISTÊNCIA AVANÇADA (Obrigatória)
// ----------------------------------------------------

// Esta função adiciona classes de erro e exibe mensagens dinâmicas
function handleFormValidation(e) {
    const input = e.target;
    // O navegador já faz a validação nativa graças ao 'required' e 'pattern' no HTML.
    
    if (input.validity.valid) {
        // Se o campo for válido, remove qualquer mensagem de erro
        input.classList.remove('input-invalid');
        input.setCustomValidity(''); // Reseta a mensagem nativa
    } else {
        // Se o campo for inválido, adiciona classe de estilo e define mensagem
        input.classList.add('input-invalid');
        const errorMessage = getCustomErrorMessage(input);
        input.setCustomValidity(errorMessage);
        // Exibe a mensagem de erro nativa do navegador
    }
}

// Helper para definir mensagens de erro mais amigáveis ao usuário
function getCustomErrorMessage(input) {
    if (input.validity.valueMissing) {
        return "Este campo é obrigatório.";
    }
    if (input.validity.patternMismatch) {
        if (input.id === 'cpf') {
            return "O CPF deve estar no formato 000.000.000-00.";
        }
        if (input.id === 'telefone') {
            return "O Telefone deve estar no formato (00) 00000-0000.";
        }
        if (input.id === 'cep') {
            return "O CEP deve estar no formato 00000-000.";
        }
    }
    // Caso de erro de tipo (ex: email mal formatado)
    if (input.validity.typeMismatch) {
        return `Por favor, insira um ${input.type} válido.`;
    }
    return "Valor inválido."; // Mensagem genérica
}

// ----------------------------------------------------
// 4. FUNÇÃO PRINCIPAL PARA INICIALIZAR O MÓDULO
// ----------------------------------------------------

export function initFormValidation(formElement) {
    const cpfInput = formElement.querySelector('#cpf');
    const telefoneInput = formElement.querySelector('#telefone');
    const cepInput = formElement.querySelector('#cep');
    const allInputs = formElement.querySelectorAll('input');

    // 4.1. Aplicar Máscaras (no evento 'input' - enquanto o usuário digita)
    if (cpfInput) cpfInput.addEventListener('input', maskCPF);
    if (telefoneInput) telefoneInput.addEventListener('input', maskTelefone);
    if (cepInput) cepInput.addEventListener('input', maskCEP);

    // 4.2. Aplicar Validação de Consistência (no evento 'blur' - ao sair do campo)
    allInputs.forEach(input => {
        // Ignorar o campo de data, que tem validação nativa forte
        if (input.type !== 'date') { 
             input.addEventListener('blur', handleFormValidation);
        }
    });

    // 4.3. Prevenir envio se houver erro (para forçar a exibição das mensagens nativas)
    formElement.addEventListener('submit', (e) => {
        allInputs.forEach(input => {
            // Roda a validação em todos os campos antes do envio
            handleFormValidation({ target: input });
        });
        
        // Se a validação nativa falhar, a submissão é bloqueada e as mensagens aparecem.
        if (!formElement.checkValidity()) {
            e.preventDefault(); 
        }
    });
    
    console.log("Módulo de Validação e Máscaras iniciado.");
}

