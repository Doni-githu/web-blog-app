import { useNavigate } from "react-router-dom"
import { IProps } from "../../interfaces/types"

const DefaultComponent = ({ options, children }: IProps) => {
    const navigate = useNavigate()
    return (
        <div className='posts container'>
            <div className='posts-container'>
                <div style={{ marginBottom: '12px' }} className='btn success'>
                    {options.btnText && options.redirectTo ? <>
                        <button onClick={() => {
                            if (options.redirectTo) {
                                navigate(options.redirectTo)
                            }
                        }}>{options.btnText}</button>
                    </> : null}
                </div>
                {options.emptyText ? <h1 style={{ color: 'red', textAlign: 'center' }}>{options.emptyText}</h1> : null}
                {children}
            </div>
        </div>
    )
}

export default DefaultComponent