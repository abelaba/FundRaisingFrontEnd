const Transcation = ({transaction}) => {
  
    return (
<>
    <tr>
    <td>{transaction.type}</td>
    <td>{transaction.account}</td>
    <td>{transaction.amount}</td>
        </tr>
</>
    )
}

export default Transcation
