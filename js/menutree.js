var MenuTree = {
	collapse: function(element) {

		element.slideToggle(600);

	},

	walk: function() {

		$('a.collapse', '#tree').each(function() {

			var $a = $(this);
			var $li = $a.parent();

			if ($a.next().is('ul')) {

				var $ul = $a.next();

				$a.click(function(e) {

					e.preventDefault();
					MenuTree.collapse($ul);

					$a.toggleClass('active');

				});

			}

		});

	}
};

MenuTree.walk();
