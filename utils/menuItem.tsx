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
];
