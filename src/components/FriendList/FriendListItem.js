import PropTypes from 'prop-types';
import { TiAdjustBrightness } from 'react-icons/ti';


export const FriendListItem = () => {
    return (
        <li class="item">
        <span class="status"><TiAdjustBrightness/></span>
        <img class="avatar" src="" alt="User avatar" width="48" />
        <p class="name">Anna</p>
        </li>
    )
    }

    FriendListItem.propTypes = {
        
      };