import { greeting} from "./my-functions";
import './styles.scss'

const btn = document.getElementById('greet');

btn.addEventListener('click', greeting);