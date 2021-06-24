import styled from 'styled-components'

type RowProps = {
  name: String
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

function Row({ name }: RowProps) {
  return <NameBox>{name}</NameBox>
}

export default Row
