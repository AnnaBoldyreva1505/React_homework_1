// import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './FriendList.styled'


export const FriendList = ({ friends }) => {
  return (
    <List>
        <FriendListItem data={friends}/>
    </List>
  );
};

// FriendList.propTypes = {};
