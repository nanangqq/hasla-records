import styled from 'styled-components'
import Record, { RecordProps } from './Record'

type RowProps = {
  onCharge: String
  records: RecordProps[]
}

const NameBox = styled.div`
  background-color: pink;

  color: white;
  font-weight: 900;

  border-radius: 12px;
  padding: 8px;
  margin: 12px;

  width: 100px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`

function Row({ onCharge, records }: RowProps) {
  console.log(records)
  return (
    <div>
      <NameBox>{onCharge}</NameBox>
      {/* <Record
        amount={10000}
        name="123"
        date={new Date()}
        description="blahblah"
        charge="divide"
      /> */}
      {records.map(rec => (
        <Record
          on_charge={rec.on_charge}
          amount={rec.amount}
          name={rec.name}
          date={new Date(rec.date)}
          description={rec.description}
          charge={rec.charge}
          to={rec.to}
        />
      ))}
    </div>
  )
}

export default Row
