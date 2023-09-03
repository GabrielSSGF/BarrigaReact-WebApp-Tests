const locators = {
    LOGIN: {
        USER: '.input-group > .form-control',
        PASSWORD: ':nth-child(2) > .form-control',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        SETTINGS: '.dropdown-toggle',
        CONTAS: '[href="/contas"]'
    },
    CONTAS: {
        NOME: '.form-control',
        BTN_SALVAR: '.btn'
    },
    MESSAGE: '.toast-message'


}

export default locators;