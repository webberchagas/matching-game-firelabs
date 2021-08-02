import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(amountCards) {
    const $htmlFrontBack = CardFrontBack();
    const $htmlContent = $htmlFrontBack.repeat(amountCards);

    return /*html*/`
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}

export default BoardGame;