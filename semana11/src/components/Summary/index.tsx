import { PiArrowCircleDown, PiArrowCircleUp, PiCurrencyDollar } from 'react-icons/pi';
import styles from './styles.module.css';
import { formatCurrency } from '@/utils/formatCurrency';

export default function Summary() {

    const cards = [
        {
            title: "Entrada",
            icon: <PiArrowCircleUp size={32} color='#00b37e' />,
            valor: 30000,
            style: styles.card
        },
        {
            title: "Saida",
            icon: <PiArrowCircleDown size={32} color='#f75a68' />,
            valor: 24000,
            style: styles.card
        },
        {
            title: "Total",
            icon: <PiCurrencyDollar size={32} color='#fffff' />,
            valor: 54000,
            style: styles.cardGreen
        }
    ]
    return (
        <div className={styles.container}>
            {
                cards.map(card => {
                    return (
                        <div className={card.style} key={card.title}>
                            <header>
                                <span>{card.title}</span>
                                {card.icon}
                            </header>
                            <strong>{formatCurrency(card.valor)}</strong>
                        </div>
                    )
                })

            }
        </div>
    )
}