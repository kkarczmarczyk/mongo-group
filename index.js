var mongoGroup = {
	ranges: function (field, ranges, separator) {
		separator = separator || ',';
		var concat = [];
		var rangesLen = ranges.length;
		for (var i = 0; i < rangesLen; i++) {
			concat.push({
				$cond: [{
					$and: [
						{$gte: [field, ranges[i][0]]},
						{$lte: [field, ranges[i][1]]}
					]
				},
					ranges[i].join(separator),
					""]
			});
		}
		return {$concat: concat};
	}
};

module.exports = mongoGroup;