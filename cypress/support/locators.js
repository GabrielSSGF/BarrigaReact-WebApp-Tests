const locators = {
    LOGIN: {
        USER: '.input-group > .form-control',
        PASSWORD: ':nth-child(2) > .form-control',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        SETTINGS: '.dropdown-toggle',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: ':nth-child(2) > .nav-link > .fas'
    },
    CONTAS: {
        NOME: '.form-control',
        BTN_SALVAR: '.btn'
    },
    MOVIMENTACAO:{
        DESCRICAO: '#descricao',
        VALOR: '.col-4 > .form-control',
        INTERESSADO: '#envolvido',
        BTN_SALVAR: '.btn-primary'
    },
    EXTRATO: {
        LINHAS: '.list-group > li'
    },
    MESSAGE: '.toast-message'


}

export default locators;