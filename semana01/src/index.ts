import { keyInSelect } from "readline-sync"
import exercicio01 from "./exercicio01";
import exercicio02 from "./exercicio02";
import exercicio03 from "./exercicio03";
import exercicio04 from "./exercicio04";
import exercicio05 from "./exercicio05";
import exercicio06 from "./exercicio06";

var opcao = keyInSelect([
    "Exercicio 01",
    "Exercicio 02",
    "Exercicio 03",
    "Exercicio 04",
    "Exercicio 05",
    "Exercicio 06"
]) + 1

switch (opcao) {
    case 1:
        exercicio01()
        break;
    case 2:
        exercicio02()
        break;
    case 3:
        exercicio03()
        break;
    case 4:
        exercicio04()
        break;
    case 5:
        exercicio05()
        break;
    case 6:
        exercicio06()
        break;
    default:
        console.log("NENHUMA OPÇÃO SELECIONADA")
        break;
}

