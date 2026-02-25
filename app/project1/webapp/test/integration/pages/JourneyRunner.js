sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/testList",
	"project1/test/integration/pages/testObjectPage"
], function (JourneyRunner, testList, testObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flpSandbox.html#project1-tile',
        pages: {
			onThetestList: testList,
			onThetestObjectPage: testObjectPage
        },
        async: true
    });

    return runner;
});

