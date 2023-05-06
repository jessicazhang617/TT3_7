import './ClaimsTable.css'

const ClaimsTable = (props) => {
    
    return (
        <div>
            <h1>{props.status}</h1>
            <span>
                <p>Project id: {props.project_id}</p>
                <p>Claim id: {props.claim_id}</p>
                <p>Currency: {props.currency}</p>
            </span>
        </div>

    )

}

export default ClaimsTable