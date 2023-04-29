import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
// import { GlobalStyle } from "./GlobalStyle";

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user}/>
       <FriendList friends={friends}/>
       <Statistics statistic={data}/>
       <TransactionHistory items={transactions}/>
    </>
  );
};
