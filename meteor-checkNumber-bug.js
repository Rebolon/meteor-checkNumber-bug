if (Meteor.isClient) {
	Template.form.rendered = function () {
		try {
		        var ee = 123;
		        check(ee, Number); // PASS expected
		        console.info('test 1 Passed');
		} catch (e) {
		        console.error('test 1 Failed ', e);
		}

		try {
		        var ee = 'tt';
		        check(ee, Number); // ERROR expected
		        console.error('test 2 Failed');
		} catch (e) {
		        console.info('test 2 Passed ', e);
		}
		
		try {
		        var ee = '123';
		        check(ee, Number); // PASS expected
		        console.info('test 3 Passed');
		} catch (e) {
		        console.error('test 3 Failed ', e);
		}

		try {
		        var ee = Number('123');
		        check(ee, Number); // PASS expected
		        console.info('test 4 Passed');
		} catch (e) {
        		console.error('test 4 Failed ', e);
		}

                try {
                        var ee = Number('wrongData');
                        check(ee, Number); // ERROR expected
                        console.error('test 5 Failed');
                } catch (e) {
                        console.info('test 5 Passed ', e);
                }
	};
}
