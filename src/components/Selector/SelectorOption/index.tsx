interface SelectorOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    label: string;
    value: string;
};

const SelectorOption = ({ value, label, ...props }: SelectorOptionProps) => {
    return (
        <option value={value} {...props}>
            {label}
        </option>
    )
};

export default SelectorOption;