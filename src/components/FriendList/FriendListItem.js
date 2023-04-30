import PropTypes from 'prop-types';
import { TiAdjustBrightness } from 'react-icons/ti';
import { Item, Status, Name } from './FriendList.styled';

export const FriendListItem = ({ data }) => {
  return (
    <>
      {data.map(friend => (
        <Item key={friend.id}>
        <Status active={friend.isOnline === true}><TiAdjustBrightness />
        </Status>
        <img src={friend.avatar} alt="User avatar" width="48" />
        <Name>{friend.name}</Name>
      </Item>
      ))}
      </>
  );
};

FriendListItem.propTypes = {};
