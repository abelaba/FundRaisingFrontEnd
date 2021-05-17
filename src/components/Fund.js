const Fund = ({fund}) => {
    return (
        <>
            <div className="fundraise">
            <div> 
                <h3>{fund.category}</h3>
                <h2>{fund.title}</h2>
                <p>{fund.description}</p>
                <p>Raised: ${fund.balance} from Goal: ${fund.goal}</p>
                <p className="progress-bar" style={{width:`${fund.goal>fund.balance?(1-((fund.goal - fund.balance)/fund.goal))*100:100}%`,borderBottomColor:`${fund.balance >= fund.goal?'red':'green'}`}}></p>
                <input type="number" name="fundId" value={fund.id} hidden/>
                <a href={"/pay/"+ fund.id} ><button className="donate-btn">Donate</button></a>
            </div>
            </div>
        </>
    )
}

export default Fund
