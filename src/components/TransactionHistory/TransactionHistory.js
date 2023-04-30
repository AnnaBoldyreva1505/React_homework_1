import PropTypes from 'prop-types';

import { History, Th, Td, Tr } from './TransactionHistory.styled'

export const TransactionHistory = ({items}) => {
    return (
<History>
  <thead>
    <tr>
    <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </thead>


  <tbody>

  {items.map(item => {
    return (
        <Tr key={item.id}>
        <Td>{item.type}</Td>
        <Td>{item.amount}</Td>
        <Td>{item.currency}</Td>
      </Tr>
    )

  })

  }

  </tbody>
</History>
    )
    }

    TransactionHistory.propTypes = {
        
    };