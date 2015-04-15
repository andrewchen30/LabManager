/**
 *
 */


var ListItem = React.createFactory(require('./ListItem.jsx'));
var ListInput = React.createFactory(require('./ListInput.jsx'));
var ListTitle = React.createFactory(require('./ListTitle.jsx'));

//
var comp = React.createClass({
	
	propTypes: {

		log: React.PropTypes.shape({
      id: React.PropTypes.string,
      name: React.PropTypes.string,
      room: React.PropTypes.string,
			inTime: React.PropTypes.string,
      outTime: React.PropTypes.string,
      inCheck: React.PropTypes.string,
      outCheck: React.PropTypes.string,
    }),
		
		// callbacks
    //selectRoomID: React.PropTypes.func,
	},
  /**
   *
   */
  render: function() {

    // 取出所有要繪製的資料
    var arrlog = this.props.truth.arrLog;
		var selectedRoomID = this.props.truth.selectedRoomID;
		
		// 跑 loop 一筆筆建成 ListItem 元件
		var arr = arrlog.map(function (log) {
			
			// 注意每個 item 要有一個獨一無二的 key 值
			return <ListItem
				logRow = {log}
				key = {log.id}
				selectedRoomID = {selectedRoomID}
				/>

		}, this);
		
		var inputTitle = ['Lab', 'Your ID', 'Your Name', 'Posi', 'Check in', '', 'Operate', ''];
		var theadTitle = ['Lab', 'ID', 'Name', 'Posi', 'Check in', 'Check out', 'Checked(in)', 'Checked(out)'];
		
		//console.log('arr', arr.map);
		
    return (
      <table className="table table-hover">
				<ListTitle 
					titles={inputTitle} 
					listTitle={false} />
				<ListInput />
				<ListTitle 
					titles={theadTitle} 
					listTitle={true} />
				<tbody>
          {arr}
				</tbody>
				<tfoot>
					<td className="tableEnd" colSpan="8">--- [End] ---</td>
				</tfoot>
      </table>
    );

  },

  noop: function(){  }
});

module.exports = comp;
