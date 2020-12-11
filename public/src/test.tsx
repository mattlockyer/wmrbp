interface Props {
    message: string;
}

export const Test = ({ 
    message
}:Props) => {
    return <p>{message}</p>
}