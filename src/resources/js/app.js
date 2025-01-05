import '../css/app.scss'
import AlpineJS from 'alpinejs'
import feather from 'feather-icons'
import { articlesComponent } from '../views/pages/articles/index.js'
import { darkModeComponent } from '../views/components/layout/header/index.js'

/**
 * Tell vite the existence of other assets then
 * app.scss and app.js so he could copy everything
 * to the build directory.
 */
import.meta.glob(['../img/**'])

AlpineJS.data('darkModeComponent', darkModeComponent)
AlpineJS.data('articlesComponent', articlesComponent)
AlpineJS.start()

feather.replace()
