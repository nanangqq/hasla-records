import './App.css'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Row from './components/Row'
import { RecordProps } from './components/Record'

const Table = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// axios.get('/api/test').then(console.log)
const getSetRecords = async (
  setRecords: React.Dispatch<React.SetStateAction<RecordProps[]>>,
) => {
  const records = await axios.get('/api/test')
  // console.log(records)
  setRecords(records.data)
}

function App() {
  const [records, setRecords] = useState<RecordProps[]>([])

  useEffect(() => {
    getSetRecords(setRecords)
  }, [])

  return (
    <div className="App">
      <h1>hasla-records</h1>
      <Table>
        <Row
          onCharge="aaa"
          records={records.filter(rec => rec.on_charge === 'aaa')}
        ></Row>
        <Row
          onCharge="bbb"
          records={records.filter(rec => rec.on_charge === 'bbb')}
        ></Row>
      </Table>
    </div>
  )
}

export default App
