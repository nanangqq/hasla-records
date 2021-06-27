// import {useState} from 'react'

type ChargeType = 'divide' | 'to' | 'own'

export type RecordProps = {
  on_charge: String
  amount: Number
  name: String
  date: Date
  description: String
  charge: ChargeType
  to?: String
}

function Record({ amount, name, date, description, charge }: RecordProps) {
  // console.log(date)
  // console.log(date.toLocaleDateString())
  // console.log(date.toDateString())
  console.log(date.toISOString())
  // console.log(date.toLocaleString())
  // console.log(date.toJSON())
  console.log(new Date(date.toISOString()))

  return <div>{amount}</div>
}

export default Record
