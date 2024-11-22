import '../css/app.scss'
import AlpineJS from 'alpinejs'
import feather from 'feather-icons'
import { articlesComponent } from '../views/pages/articles/index.js'
import { darkModeComponent } from '../views/components/layout/header/index.js'

AlpineJS.data('darkModeComponent', darkModeComponent)
AlpineJS.data('articlesComponent', articlesComponent)
AlpineJS.start()

feather.replace()
