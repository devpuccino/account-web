"use client"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
`
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`
const TableHeader = styled.tr`
    color: #212529;
    background-color: #f9f9f9;
    border-spacing: 0;
`
const TableRow = styled.tr`
    &:hover{
        background-color: #c4e2ff;
    }
`
const TableColumn = styled.td`
    padding: 5px;
    border: 1px solid #f3f3f3;
    font-weight: 700;
`
const TableCell = styled.td`
    padding: 5px;
    border: 1px solid #f3f3f3;
`
interface DataTableProperties {
    data: Array<any>
}
const DataTable = ({ data }: DataTableProperties) => {
    const renderTableBody = () => {
        return data.map((row,index) => {
            return <TableRow id={`data-table--row-${row.id}`} key={`table-row-${index}`}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.status?"true":"false"}</TableCell>
                <TableCell />
            </TableRow>
        })
    }
    return <Container id="data-table">
        <Table>
            <TableHeader id="data-table--header">
                <TableColumn>#</TableColumn>
                <TableColumn>Category name</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn />
            </TableHeader>
          { renderTableBody() }
        </Table>
    </Container>
}

export default DataTable