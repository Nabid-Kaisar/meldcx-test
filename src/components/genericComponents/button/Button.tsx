interface optionsType {
    label?: string;
    onClickCb?: () => void;
    class?: string;
    styles?: any;
}

function Button(options: optionsType) {
    return (
        <button
            onClick={options.onClickCb}
            type="button"
            className={`btn ${options.class ? options.class : ""}`}
            style={options.styles}
        >
            {options.label}
        </button>
    )
}

export default Button;