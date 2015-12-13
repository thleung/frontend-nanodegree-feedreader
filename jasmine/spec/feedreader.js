/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', function() {
            /* Loop through each feed in allFeeds object */
            for(var i=0; i < allFeeds.length; i++){
                var allFeedsObj = allFeeds[i];
                /* Check url if defined and url is not empty string */
                expect(allFeedsObj.url).toBeDefined();
                expect(allFeedsObj.url.length).not.toBe(0);
            };
        });

        /* Loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function() {
            /* Loop through each feed in allFeeds object */
            for(var i=0; i < allFeeds.length; i++){
                var allFeedsObj = allFeeds[i];
                /* Check name if defined and url is not empty string */
                expect(allFeedsObj.name).toBeDefined();
                expect(allFeedsObj.name.length).not.toBe(0);
            };
        });
    });


    /* Test suite named "The Menu" */
    describe('The Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('displays when clicked, hides when clicked again', function() {
            /* First check to make sure menu is closed */
            expect($('body').hasClass('menu-hidden')).toBe(true);
            /* Now trigger the menu */
            $('.menu-icon-link').trigger('click');
            /* Now expect to see menu-hidden to be visible */
            expect($('body').hasClass('menu-hidden')).toBe(false);

            /* Now confirm that when menu is clicked again, it hides */
            $('.menu-icon-link').trigger('click');
            /* Now expect menu-hidden to hide */
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());
