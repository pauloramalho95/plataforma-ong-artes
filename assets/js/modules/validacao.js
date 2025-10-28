function formatInput(input, mask) {
    let value = input.value.replace(/\D/g, "");
    let maskedValue = "";
    let k = 0;
    for (let i = 0; i < mask.length; i++) {
        if (k >= value.length) break;
        if (mask[i] === "9") {
            maskedValue += value[k];
            k++;
        } else {
            maskedValue += mask[i];
        }
    }
    input.value = maskedValue;
}

function maskCPF(e) {
    formatInput(e.target, "999.999.999-99");
}

function maskTelefone(e) {
    let mask = (e.target.value.length <= 14) ? "(99) 9999-9999" : "(99) 99999-9999";
    formatInput(e.target, mask);
}

function maskCEP(e) {
    formatInput(e.target, "99999-999");
}

function handleFormValidation(e) {
    const input = e.target;
    if (input.validity.valid) {
        input.classList.remove('input-invalid');
        input.setCustomValidity('');
    } else {
        input.classList.add('input-invalid');
        const errorMessage = getCustomErrorMessage(input);
        input.setCustomValidity(errorMessage);
    }
}

function getCustomErrorMessage(input) {
    if (input.validity.valueMissing) return "Este campo é obrigatório.";
    if (input.validity.patternMismatch) {
        if (input.id === 'cpf') return "O CPF deve estar no formato 000.000.000-00.";
        if (input.id === 'telefone') return "O Telefone deve estar no formato (00) 00000-0000.";
        if (input.id === 'cep') return "O CEP deve estar no formato 00000-000.";
    }
    if (input.validity.typeMismatch) return `Por favor, insira um ${input.type} válido.`;
    return "Valor inválido.";
}

export function initFormValidation(formElement) {
    const cpfInput = formElement.querySelector('#cpf');
    const telefoneInput = formElement.querySelector('#telefone');
    const cepInput = formElement.querySelector('#cep');
    const allInputs = formElement.querySelectorAll('input');

    if (cpfInput) cpfInput.addEventListener('input', maskCPF);
    if (telefoneInput) telefoneInput.addEventListener('input', maskTelefone);
    if (cepInput) cepInput.addEventListener('input', maskCEP);

    allInputs.forEach(input => {
        if (input.type !== 'date') { 
             input.addEventListener('blur', handleFormValidation);
        }
    });

    formElement.addEventListener('submit', (e) => {
        allInputs.forEach(input => {
            handleFormValidation({ target: input });
        });
        if (!formElement.checkValidity()) {
            e.preventDefault(); 
        }
    });
}