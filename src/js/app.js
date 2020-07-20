import * as $ from 'jquery'

import Modal from './modal';

import './../scss/main.scss'

/**
 * @name App
 * @author Adrar - Juil. 2020
 * @version 1.0.0
 * @abstract Entry point of the current app
 */
class App {
    constructor() {
        console.log('App is running !')
        this.modal = new Modal()
    }

    openModal() {
        this.modal.openModal()
    }

    closeModal() {
        this.modal.closeModal()
    }
}

// App launcher
let app = null

$(document).ready(
    () => {
        app = new App() // Créer une instance de la classe App
    }
)