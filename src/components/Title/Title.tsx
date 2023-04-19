import { FC } from "react";

const Title: FC<{ title: string }> = ({ title }) => {
    return (
        <>
            <span style={{
                fontFamily: '"Calibri", sans-serif',
                color: '#063970',
                fontWeight: 600,
                width: '100%',
                borderBottom: '1px solid #D0D0D0',
                display: 'block'
            }}
            >
                {title}
            </span>
        </>
    )
}
export default Title;