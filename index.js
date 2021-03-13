import './select/select.scss'
import {Selector} from "./select/selector";

const themes = [
    {
        title: 'First theme',
        id: 1
    },
    {
        title: 'Second theme',
        id: 2
    },
    {
        title: 'Third theme',
        id: 3
    },
    {
        title: 'Fourth theme',
        id: 4
    },
    {
        title: 'Fifth theme',
        id: 5
    },
    {
        title: 'Sixth theme',
        id: 6
    },
    {
        title: 'Seventh theme',
        id: 7
    }
]

const selector = new Selector('#selector', themes)
