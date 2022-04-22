import clsx from "clsx";

const Stat = ({stat, name, invert = false}) => {
    return (
        <div className={clsx("c-monster-card-stats__item", {"is-inverted": invert})}>
            <span className="c-monster-card-stats__amount">{stat}</span>
            <span className="c-monster-card-stats__label">{name}</span>
        </div>
    );
}

export default Stat;