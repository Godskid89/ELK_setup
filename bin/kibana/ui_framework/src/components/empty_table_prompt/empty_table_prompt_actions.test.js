'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _required_props = require('../../test/required_props');

var _empty_table_prompt_actions = require('./empty_table_prompt_actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders KuiEmptyTablePromptActions', () => {
  const component = _react2.default.createElement(
    _empty_table_prompt_actions.KuiEmptyTablePromptActions,
    _required_props.requiredProps,
    'children'
  );
  expect((0, _enzyme.render)(component)).toMatchSnapshot();
});
