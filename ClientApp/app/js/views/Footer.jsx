/**
 *
 */
var ReactPropTypes = React.PropTypes;
var actions = require('../actions/AppActionCreator');

var Footer = React.createClass({

  propTypes: {
  },

  /**
   * @return {object}
   */
  render: function() {

  	return (
      <footer className="footer">
        <span className="author">
            Author | Andrew Chen  {'( May / 2015 )'}
			
        </span>
      </footer>
    );
  },


});

module.exports = Footer;
