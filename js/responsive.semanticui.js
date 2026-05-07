/*! Responsive Fomantic styling 4.0.0-beta.1 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-se', 'datatables.net-responsive'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net-se')(root);
			}

			if (! window.DataTable.Responsive) {
				require('datatables.net-responsive')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';



// Note that Fomantic's JS depends upon jQuery, so we use it here
var jq = DataTable.use('jq');
var _display = DataTable.Responsive.display;
var _original = _display.modal;
var _modal = jq(
	'<div class="ui modal" role="dialog">' +
		'<div class="header">' +
		'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
		'</div>' +
		'<div class="content"/>' +
		'</div>'
);

_display.modal = function (options) {
	return function (row, update, render, closeCallback) {
		if (!jq.fn.modal) {
			return _original(row, update, render, closeCallback);
		}
		else {
			var rendered = render();

			if (rendered === false) {
				return false;
			}

			if (!update) {
				if (options && options.header) {
					_modal
						.find('div.header')
						.empty()
						.append('<h4 class="title">' + options.header(row) + '</h4>');
				}

				_modal.find('div.content').empty().append(rendered);

				// Only need to attach the first time
				if (!_modal.parent().hasClass('dimmer')) {
					_modal.appendTo('body');
				}

				_modal
					.modal({
						onHide: closeCallback
					})
					.modal('show');
			}
			else {
				// Modal not shown for this row - do nothing
				return false;
			}

			return true;
		}
	};
};


return DataTable;
}));
