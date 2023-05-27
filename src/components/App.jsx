
import {Profile} from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import {FriendList} from "./FriendList/FriendList";
import TransactionHistory  from "./Transactions/Transactions"

import  users from "../data/user.json"
import  stats from "../data/data.json"
import friends from "../data/friends.json"
import transactionss from "../data/transactions.json"

export const App = () => {
  return (
    <div className="container" style={
      {
        display: 'flex',
        flexDirection: "column",
        gap: "20px",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }
    }>

      <Profile 
      
      
      
      username={
        users.username
        }
        tag={
          users.tag
        }
        location={
          users.location
        }
        avatar={
          users.avatar
        }
        stats={
         users.stats
        }/>
<Statistics title="Upload stats" stats={stats}  />

<FriendList friends={friends} />

< TransactionHistory items={transactionss} />


    </div>
  );
};
