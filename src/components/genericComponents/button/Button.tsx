interface optionsType {
    label?: string;
    onClickCb?: () => void;
    class?: string;
}

function Button(options: optionsType) {
    return (
        <button
            onClick={options.onClickCb}
            type="button"
            className={`btn ${options.class ? options.class : ""}`}
        >
            {options.label}
        </button>
    )
}

export default Button;