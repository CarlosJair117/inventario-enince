const ReportsTableRow = ({el}) => {

    let {salesProduct, salesNumber, salesDescription, salesDate, salesHour} = el;

    return (
        <tr>
            <td>{salesProduct}</td>
            <td>{salesNumber}</td>
            <td>{salesDescription}</td>
            <td>{salesDate}</td>
            <td>{salesHour}</td>
        </tr>
    )
}

export default ReportsTableRow
