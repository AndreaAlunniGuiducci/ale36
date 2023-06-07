import {Fette} from '../pages/Fette';
import {GemelliDiversi} from '../pages/GemelliDiversi';
import {Home} from '../pages/Home';
import {LettereInComune} from '../pages/LettereInComune';
import {NodiDiDire} from '../pages/NodiDiDire';
export const menuItem = [
  {
    title: 'Home',
    component: Home,
    description:
      'Partecipa ai quattro giochi e scopri la password per ricevere il tuo regalo',
  },
  {
    title: 'Lettere in comune',
    component: LettereInComune,
    description:
      'Trovate le lettere che possano essere messe prima di ciascuno dei seguenti “sufissi” per formare parole di senso compiuto',
  },
  {
    title: 'Nodi di dire',
    component: NodiDiDire,
    description:
      'In ciascuno dei seguenti modi di dire è stata sostituita una lettera con un’altra: leggendo nell’ordine le lettere tolte otterrai la soluzione di questo gioco',
  },
  {
    title: 'Gemelli diversi',
    component: GemelliDiversi,
    description:
      'Per ogni coppia di “gemelli”, trovare un’unica parola che corrisponda ad entrambe le definizioni prese singolarmente, le iniziali delle parole trovate dormano la soluzione del gioco',
  },
  {
    title: 'Fette',
    component: Fette,
    description:
      'Cambiare l’iniziale alle parole così da trasformarle in altre di senso compiuto: leggendo le nuove iniziali dall’alto in basso si ottiene la soluzione del gioco',
  },
];
