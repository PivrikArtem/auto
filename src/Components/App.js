import React from 'react';
// import '../App.css';
import ListAuto from './ListAuto';
import { Table } from 'reactstrap';

const App = () => {

  // return (
  //   <div className="wrapper-all-page">
  //     <span className="app-title">VIP обьявления</span>
  //     <div className="wrapper-list-cards">
  //
  //     </div>
  //   </div>
  // )


        return (
            <Table dark>
                    <thead>
                    <tr>
                            <th></th>
                            <th> Mark Auto</th>
                            <th>Producer Auto</th>
                            <th>Price Auto($)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <ListAuto />

                    </tbody>
            </Table>
        );
}


export default App;
