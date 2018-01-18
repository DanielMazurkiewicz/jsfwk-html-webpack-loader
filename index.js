const transpiller = require('jsfwk-html-to-js-transpiller')
module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;
	return transpiller(content);
}
module.exports.seperable = true;