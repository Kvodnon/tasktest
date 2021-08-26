interface InputProps {
    value: number,
    index: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, index, onChange}: InputProps) => {
    return <input onChange={onChange} data-index={index} type="number" value={value} />
}

export default Input;